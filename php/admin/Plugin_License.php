<?php
/**
 * Perform license actions.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Admin;

use MediaRonLLC\QuotesDLX\Options_License as Options;

// don't load directly.
if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 * Class License Check.
 */
class Plugin_License {

	/**
	 * Holds the product name.
	 *
	 * @var string Plugin name to check.
	 */
	private $plugin_name = 'QuotesDLX';

	/**
	 * Holds the domain to check for the license.
	 *
	 * @var string Domain to check for the license.
	 */
	private $license_domain = 'https://dlxplugins.com';

	/**
	 * Holds the license value.
	 *
	 * @var string $license The license value.
	 */
	private $license = '';

	/**
	 * Class constructor.
	 *
	 * @param string $license The site license.
	 */
	public function __construct( string $license = '' ) {
		if ( empty( $license ) ) {
			$options = Options::get_options();
			$license = $options['license_key'] ?? '';
		}
		$this->license = sanitize_text_field( $license );
	}

	/**
	 * Perform a license action and return the result.
	 *
	 * @param string $action   Action to take (check_license, activate_license, deactivate_license).
	 * @param string $license (Optional) License key to process.
	 * @param bool   $force   Whether to skip cache or not.
	 *
	 * @return array $args {
	 *     @bool   $errors        Whether there are errors or not.
	 *     @string $license       License key used.
	 *     @bool   $license_valid Whether the license is valid or not.
	 *     @string $message       Message to display to user.
	 *     @array  $data          Raw response data.
	 *     @string $action        The action that was performed (check_license, activate_license, deactivate_license).
	 * }
	 */
	public function perform_action( string $action, string $license = '', bool $force = true ) {
		$license = sanitize_text_field( $license );
		if ( ! empty( $license ) ) {
			$this->license = $license;
		}

		// Perform license action.
		return $this->perform_license_action( $action, $force );
	}

	/**
	 * Perform a license check based on action.
	 *
	 * @param string $action Action to take.
	 * @param bool   $force  Whether to skip any caching.
	 */
	private function perform_license_action( string $action, bool $force ) {

		$options        = Options::get_options();
		$maybe_check    = get_site_transient( 'quotes_dlx_core_license_check' );
		$license_status = $options['license_status'] ?? '';
		$license        = $options['license_key'] ?? '';
		$license_valid  = $options['license_valid'] ?? '';

		if ( 'check_license' === $action && ! $force && $maybe_check ) {
			return $maybe_check;
		}

		// Set transient for checking.
		if ( empty( $this->license ) && 'check_license' === $action ) {
			return array(
				'license_errors' => true,
				'license_key'    => $this->license,
				'license_valid'  => false,
				'message'        => __( 'It appears the license key is blank.', 'quotes-dlx' ),
				'data'           => array(),
				'action'         => $action,
			);
		}

		// Check for valid license.
		$store_url  = $this->license_domain;
		$api_params = array(
			'edd_action' => $action,
			'license'    => $this->license,
			'item_name'  => rawurlencode( $this->plugin_name ),
			'url'        => home_url(),
		);
		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		// If an error, return response.
		if ( is_wp_error( $response ) ) {
			return $response;
		}
		if ( 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return new \WP_Error( 'quotes_dlx_license_communications_error', __( 'We could not communicate with the update server. Please try again later.', 'quotes-dlx' ) );
		}
		// Succeeded, let's check the response.
		$response = $this->get_response( json_decode( wp_remote_retrieve_body( $response ), ARRAY_A ), $action );

		$errors = $response['license_errors'] ?? false;
		if ( ! $errors ) {
			if ( 'deactivate_license' === $action ) {
				// Clear license.
				$options = wp_parse_args(
					array(
						'license_key'   => '',
						'license_valid' => false,
					),
					$options
				);
			} else {
				$options = wp_parse_args(
					array(
						'license_key'   => $response['license_key'] ?? '',
						'license_valid' => $response['license_valid'] ?? '',
					),
					$options
				);
			}
			Options::update_options( '', $options, true );
		}

		// Add query flag for checking the license so we don't ping the API every time.
		if ( 'check_license' === $action ) {
			set_site_transient( 'quotes_dlx_core_license_check', $response, 12 * HOUR_IN_SECONDS );
		}

		// Perform an action based on response/action.
		do_action( 'quotes_dlx_core_license_' . $action, $response );

		// Return any custom data.
		$data = apply_filters( 'quotes_dlx_core_license_data_' . $action, $response );

		return $data;
	}

	/**
	 * Retrieve response data in array format.
	 *
	 * @param array  $response Raw response data.
	 * @param string $action   Action to take (check_license, activate_license, deactivate_license).
	 *
	 * @return array $args {
	 *     @bool   $errors        Whether there are errors or not.
	 *     @string $license       License key used.
	 *     @bool   $license_valid Whether the license is valid or not.
	 *     @string $message       Message to display to user.
	 *     @array  $data          Raw response data.
	 *     @string $action        The action that was performed (check_license, activate_license, deactivate_license).
	 * }
	 */
	private function get_response( array $response, string $action ) {
		$errors = false;

		$return_defaults = array(
			'license'          => $response['license'],
			'license_errors'   => false,
			'license_key'      => $this->license,
			'message'          => '',
			'item_name'        => $response['item_name'],
			'expires'          => $response['expires'],
			'license_limit'    => $response['license_limit'],
			'site_count'       => $response['site_count'],
			'activations_left' => $response['activations_left'],
			'data'             => $response,
			'action'           => $action,
		);

		// Format the date.
		$expires = $return_defaults['data']['expires'] ?? '';
		if ( ! empty( $expires ) ) {

			$return_defaults['data']['expires_human_time_diff'] = human_time_diff( time(), strtotime( $expires ) );
			$return_defaults['data']['expires']                 = date_i18n( 'F jS, Y', strtotime( $expires ) );
		}

		if ( true === $response['success'] ) {
			if ( 'deactivate_license' === $action ) {
				return wp_parse_args(
					array(
						'message' => __( 'Your license key has been deactivated.', 'quotes-dlx' ),
					),
					$return_defaults
				);
			}
			if ( 'activate_license' === $action || 'check_license' === $action ) {
				return wp_parse_args(
					array(
						'message' => __( 'Your license key is active and valid.', 'quotes-dlx' ),
					),
					$return_defaults
				);
			}
		}

		// There are errors.
		$error_message = __( 'An error occurred, please try again.', 'quotes-dlx' );
		$errors        = $response['error'] ?? false;
		if ( $errors ) {
			switch ( $errors ) {
				case 'expired':
					$error_message = sprintf(
						/* Translators: %s is a date format placeholder */
						__( 'Your license key expired on %s.', 'quotes-dlx' ),
						date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) ) // phpcs:ignore
					);
					break;

				case 'disabled':
				case 'revoked':
					$error_message = __( 'Your license key has been disabled.', 'quotes-dlx' );
					break;

				case 'missing':
					$error_message = __( 'The license entered is not valid.', 'quotes-dlx' );
					break;
				case 'invalid':
				case 'site_inactive':
					$error_message = __( 'Your license is not active for this URL.', 'quotes-dlx' );
					break;

				case 'item_name_mismatch':
					/* Translators: %s is the plugin name */
					$error_message = sprintf( __( 'This appears to be an invalid license key for %s.', 'quotes-dlx' ), 'Toggl Plan for Gravity Forms' );
					break;

				case 'no_activations_left':
					$error_message = __( 'Your license key has reached its activation limit.', 'quotes-dlx' );
					break;
			}
		}

		return wp_parse_args(
			array(
				'license_errors' => true,
				'license_valid'  => false,
				'message'        => $error_message,
			),
			$return_defaults
		);

	}
}

