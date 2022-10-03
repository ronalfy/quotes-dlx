<?php
/**
 * Set up Email Ajax interface and callbacks.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Helper class for registering Ajax calls.
 */
class Email {

	/**
	 * Main class runner.
	 *
	 * @return Email.
	 */
	public static function run() {
		$self = new self();

		// For outputting the email modal interface.
		add_action( 'wp_ajax_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );
		add_action( 'wp_ajax_nopriv_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );

		// For sending the email.
		add_action( 'wp_ajax_quotes_dlx_send_email', array( static::class, 'ajax_send_email' ) );
		add_action( 'wp_ajax_nopriv_quotes_dlx_send_email', array( static::class, 'ajax_send_email' ) );

		return $self;
	}

	public static function ajax_send_email() {
		$permalink = urldecode( filter_input( INPUT_POST, 'permalink', FILTER_DEFAULT ) );
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), 'qdlx_share_' . $permalink ) ) {
			wp_die( 'Invalid request.' );
		}

		// Get recaptcha keys.
		$recaptcha_site_key = Options_Advanced::get_options( 'recaptcha_site_key' );
		$recaptcha_secret_key = Options_Advanced::get_options( 'recaptcha_secret_key' );
		$recaptcha_enabled  = Options_Advanced::get_options( 'recaptcha_enabled' );
		$score_threshold = (float) Options_Advanced::get_options( 'recaptcha_score_threshold' );

		if ( $recaptcha_enabled ) {
			if ( empty( $recaptcha_site_key ) || empty( $recaptcha_secret_key ) ) {
				wp_send_json_error(
					array(
						'message' => __( 'The site owner has not set reCAPTCHA 3 site keys.', 'quotes-dlx' ),
					)
				);
			}
			$token = sanitize_text_field( filter_input( INPUT_POST, 'recaptchaToken', FILTER_DEFAULT ) );
			if ( ! $token ) {
				wp_send_json_error(
					array(
						'message' => __( 'Invalid reCAPTCHA 3 token.', 'quotes-dlx' ),
					)
				);
			}

			// Now get token back from reCAPTCHA.
			$url        = 'https://www.google.com/recaptcha/api/siteverify';
			$data       = array(
				'secret'   => $recaptcha_secret_key,
				'response' => $token,
			);
			$args       = array(
				'body'      => $data,
				'method'    => 'POST',
				'sslverify' => true,
			);
			$response   = wp_remote_post( esc_url( $url ), $args );
			if ( is_wp_error( $response ) ) {
				wp_send_json_error(
					array(
						'message' => __( 'Error validating reCAPTCHA 3 token.', 'quotes-dlx' ),
					)
				);
			}
			$body = json_decode( wp_remote_retrieve_body( $response ), true );
			if ( ! $body['success'] ) {
				wp_send_json_error(
					array(
						'message' => __( 'reCAPTCHA 3 security challenge has failed.', 'quotes-dlx' ),
					)
				);
			}

			// Now check the score with threshold.
			$recaptcha_score = (float) $body['score'];
			if ( $recaptcha_score < $score_threshold ) {
				wp_send_json_error(
					array(
						'message' => __( 'reCAPTCHA 3 security challenge has failed.', 'quotes-dlx' ),
					)
				);
			}
		}

		wp_send_json_success(
			array(
				'message' => 'Email sent.',
				'formData' => $_POST,
			)
		);
	}

	/**
	 * Output the main email interface for emails.
	 */
	public static function ajax_email_interface() {
		$permalink = urldecode( filter_input( INPUT_GET, 'permalink', FILTER_DEFAULT ) );
		if ( ! wp_verify_nonce( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ), 'qdlx_share_' . $permalink ) ) {
			wp_die( 'Invalid request.' );
		}

		$recaptcha_site_key = Options_Advanced::get_options( 'recaptcha_site_key' );
		$recaptcha_enabled  = Options_Advanced::get_options( 'recaptcha_enabled' );
		wp_register_script(
			'qdlx_email_view',
			Functions::get_plugin_url( 'dist/quotes-dlx-email.js' ),
			array( 'wp-i18n' ),
			Functions::get_plugin_version(),
			false
		);
		if ( $recaptcha_enabled && ! empty( $recaptcha_site_key ) ) {
			wp_localize_script(
				'qdlx_email_view',
				'qdlx_email',
				array(
					'recaptcha_enabled'  => true,
					'recaptcha_site_key' => $recaptcha_site_key,
					'nonce'              => sanitize_text_field( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ) ),
					'ajaxurl'            => admin_url( 'admin-ajax.php' ),
					'permalink'          => urlencode( $permalink ),
					'share_text'         => urlencode( filter_input( INPUT_GET, 'text', FILTER_DEFAULT ) ),

				)
			);
			wp_register_script(
				'qdlx-recaptcha',
				esc_url_raw( 'https://www.google.com/recaptcha/api.js?render=' . sanitize_text_field( Options_Advanced::get_options( 'recaptcha_site_key' ) ) ),
				array(),
				Functions::get_plugin_version(),
				true
			);
		} else {
			wp_localize_script(
				'qdlx_email_view',
				'qdlx_email',
				array(
					'recaptcha_enabled'  => false,
					'recaptcha_site_key' => '',
					'nonce'              => sanitize_text_field( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ) ),
					'ajaxurl'            => admin_url( 'admin-ajax.php' ),
					'permalink'          => urlencode( $permalink ),
					'share_text'         => urlencode( filter_input( INPUT_GET, 'text', FILTER_DEFAULT ) ),
				)
			);
		}
		wp_register_style(
			'qdlx_email_view',
			Functions::get_plugin_url( 'dist/quotes-dlx-email.css' ),
			array(),
			Functions::get_plugin_version(),
			false
		);
		?>
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<?php
				wp_print_styles(
					array( 'qdlx_email_view' ),
				);
				?>
			</head>
			<body>
				<div id="qdlx-email-interface"></div>
				<?php
				wp_print_scripts(
					array(
						'qdlx_email_view',
						'qdlx-recaptcha',
					),
				);
				?>
			</body>
		</html>
		<?php
		exit;
	}
}
