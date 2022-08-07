<?php
/**
 * Set up Ajax callbacks.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

use MediaRonLLC\QuotesDLX\Admin\Plugin_License as License;

/**
 * Helper class for registering Ajax calls.
 */
class Ajax {

	/**
	 * Main class runner.
	 *
	 * @return Ajax.
	 */
	public static function run() {
		$self = new self();

		// For saving/resetting the default options.
		add_action( 'wp_ajax_quotes_dlx_retrieve_admin_options_defaults', array( static::class, 'ajax_retrieve_options_defaults' ) );
		add_action( 'wp_ajax_quotes_dlx_save_admin_options_defaults', array( static::class, 'ajax_save_options_defaults' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_admin_options_defaults', array( static::class, 'ajax_reset_options_defaults' ) );

		// For saving/resetting the contextual menu options.
		add_action( 'wp_ajax_quotes_dlx_retrieve_admin_menu_options_defaults', array( static::class, 'ajax_retrieve_menu_options_defaults' ) );
		add_action( 'wp_ajax_quotes_dlx_save_admin_menu_options', array( static::class, 'ajax_save_admin_menu_options' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_admin_menu_options', array( static::class, 'ajax_reset_admin_menu_options' ) );

		// For saving/resetting the themes defaults.
		add_action( 'wp_ajax_quotes_dlx_retrieve_admin_themes_defaults', array( static::class, 'ajax_retrieve_themes_defaults' ) );

		// For retrieving/validating/revoking plugin license.
		add_action( 'wp_ajax_quotes_dlx_retrieve_admin_license_core', array( static::class, 'ajax_retrieve_license_core' ) );
		add_action( 'wp_ajax_quotes_dlx_save_admin_license_core', array( static::class, 'ajax_save_license_core' ) );
		add_action( 'wp_ajax_quotes_dlx_revoke_admin_license_core', array( static::class, 'ajax_revoke_license_core' ) );

		// For retrieving a theme's color palette.
		add_action( 'wp_ajax_quotes_dlx_get_theme_options', array( static::class, 'ajax_get_theme_options' ) );
		add_action( 'wp_ajax_quotes_dlx_save_theme_options', array( static::class, 'ajax_save_theme_options' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_theme_options', array( static::class, 'ajax_reset_theme_options' ) );

		return $self;
	}

	/**
	 * Ajax callback for generating an anchor for the block.
	 */
	public static function ajax_generate_anchor() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), 'twp-click-to-tweet-ajax' ) || ! current_user_can( 'edit_posts' ) ) {
			wp_send_json_error( array() );
		} else {
			wp_send_json_success(
				array(
					'unique_id' => 'quotes_dlx' . wp_generate_password( 8, false, ),
				)
			);
		}
	}

	/**
	 * Retrieve admin options for the defaults view.
	 */
	public static function ajax_retrieve_options_defaults() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		} else {
			$defaults = Options_Defaults::get_options();
			wp_send_json_success(
				$defaults
			);
		}
	}

	/**
	 * Retrieve admin options for the defaults menus view.
	 */
	public static function ajax_retrieve_menu_options_defaults() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		} else {
			$defaults = Options_Menu::get_options();
			wp_send_json_success(
				$defaults
			);
		}
	}

	/**
	 * Save form options for contextual menu options.
	 */
	public static function ajax_save_admin_menu_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options_to_save = array();

		$form_data = $_POST['form_data']; // expect array.
		foreach ( $form_data as $field => $field_value ) {
			switch ( $field ) {
				case 'enableContextualMenu':
					$options_to_save['enable_contextual_menu'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'enableCopyTweet':
					$options_to_save['enable_copy_tweet'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'enableCopyText':
					$options_to_save['enable_copy_text'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'enableCopyLink':
					$options_to_save['enable_copy_link'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'enableTweetThis':
					$options_to_save['enable_tweet_this'] = ( 'true' === $field_value ) ? true : false;
					break;
			}
		}

		Options_Menu::update_options( '', $options_to_save );

		$options_to_return = array();
		// Format saved fields.
		foreach ( $options_to_save as $field => $value ) {
			// Convert to camelcase.
			$new_field                       = Functions::to_camelcase( $field );
			$options_to_return[ $new_field ] = $value;
		}
		wp_send_json_success(
			$options_to_return
		);
	}

	/**
	 * Reset form options for contextual menu options.
	 */
	public static function ajax_reset_admin_menu_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options           = Options_Menu::reset();
		$options_to_return = array();

		// Format saved fields.
		foreach ( $options as $field => $value ) {
			// Convert to camelcase.
			$new_field                       = Functions::to_camelcase( $field );
			$options_to_return[ $new_field ] = $value;
		}
		wp_send_json_success(
			$options_to_return
		);
	}

	/**
	 * Retrieve theme colors.
	 */
	public static function ajax_get_theme_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the active template.
		$template_slug = sanitize_text_field( filter_input( INPUT_POST, 'active_template', FILTER_DEFAULT ) );

		$themes = Themes\Themes_Addon::get_theme_data( $template_slug );

		// Check that there's theme data.
		if ( ! $themes ) {
			wp_send_json_error(
				array(
					'message' => __( 'No theme data could be found.', 'quotes-dlx' ),
				)
			);
		}

		// We have a theme.
		$theme_default_colors = $themes['colors'];

		// Get saved colors.
		$theme_options = Options_Theme::get_options();
		$saved_colors  = $theme_options[ $template_slug ]['colors'] ?? false;

		// Get saved font size.
		$theme_font_size_desktop   = $theme_options[ $template_slug ]['font_size_desktop'] ?? 16;
		$theme_line_height_desktop = $theme_options[ $template_slug ]['line_height_desktop'] ?? 1.65;
		$theme_font_size_tablet    = $theme_options[ $template_slug ]['font_size_tablet'] ?? 14;
		$theme_line_height_tablet  = $theme_options[ $template_slug ]['line_height_tablet'] ?? 1.1;
		$theme_font_size_mobile    = $theme_options[ $template_slug ]['font_size_mobile'] ?? 12;
		$theme_line_height_mobile  = $theme_options[ $template_slug ]['line_height_mobile'] ?? 1.1;

		// Check saved colors and set to defaults if not set.
		if ( false === $saved_colors || ! is_array( $saved_colors ) || empty( $saved_colors ) ) {
			$saved_colors = $theme_default_colors;
		}

		wp_send_json_success(
			array(
				'colors'              => $saved_colors,
				'defaults'            => $theme_default_colors,
				'font_size_desktop'   => $theme_font_size_desktop,
				'line_height_desktop' => $theme_line_height_desktop,
				'font_size_tablet'    => $theme_font_size_tablet,
				'line_height_tablet'  => $theme_line_height_tablet,
				'font_size_mobile'    => $theme_font_size_mobile,
				'line_height_mobile'  => $theme_line_height_mobile,
			)
		);
		exit;
	}

	/**
	 * Reset theme color options.
	 */
	public static function ajax_reset_theme_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the active template.
		$template_slug = sanitize_text_field( filter_input( INPUT_POST, 'template', FILTER_DEFAULT ) );

		$themes                     = Themes\Themes_Addon::get_theme_data();
		$theme_default_saved_colors = array();
		$theme_default_colors       = array();
		foreach ( $themes as $theme ) {
			if ( $template_slug === $theme['slug'] ) {
				$theme_default_saved_colors = $theme['colors'];
				$theme_default_colors       = $theme['colors'];
				break;
			}
		}

		// Get saved colors.
		Options_Theme::update_options( $template_slug, array(), true );

		wp_send_json_success(
			array(
				'colors'   => $theme_default_saved_colors,
				'defaults' => $theme_default_colors,
			)
		);
		exit;
	}

	/**
	 * Reset form options for contextual menu options.
	 */
	public static function ajax_save_theme_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$template_slug = sanitize_text_field( filter_input( INPUT_POST, 'template', FILTER_DEFAULT ) );
		$colors        = filter_input( INPUT_POST, 'colors', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY );

		// Sanitize colors.
		$sanitized_colors = array();
		foreach ( $colors as $color ) {
			$sanitized_colors[] = array(
				'name'  => sanitize_text_field( $color['name'] ),
				'color' => sanitize_text_field( $color['color'] ),
				'slug'  => sanitize_text_field( $color['slug'] ),
			);
		}

		$theme_options                             = Options_Theme::get_options( '', true );
		$theme_options[ $template_slug ]['colors'] = $sanitized_colors;
		Options_Theme::update_options( '', $theme_options, true );
		wp_send_json_success(
			array(
				'message' => __( 'Your theme colors have been saved.', 'quotes-dlx' ),
			)
		);
		exit;
	}

	/**
	 * Save form options for default options.
	 */
	public static function ajax_save_options_defaults() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options_to_save = array();

		$form_data = $_POST['form_data']; // expect array.

		// Ajax doesn't like empty arrays.
		if ( isset( $form_data['hashtags'] ) ) {
			if ( empty( $form_data['hashtags'] ) ) {
				$form_data['hashtags'] = array();
			}
		}

		// Iterate and sanitize.
		foreach ( $form_data as $field => $field_value ) {
			switch ( $field ) {
				case 'maximumWidth':
					$options_to_save['maximum_width'] = absint( $field_value );
					break;
				case 'maximumWidthUnit':
					$options_to_save['maximum_width_unit'] = sanitize_text_field( $field_value );
					break;
				case 'twitterUsername':
					$options_to_save['twitter_username'] = sanitize_text_field( $field_value );
					break;
				case 'hashtags':
					$options_to_save['hashtags'] = array_map( 'sanitize_text_field', $field_value );
					break;
				case 'align':
					$options_to_save['align'] = sanitize_text_field( $field_value );
					break;
				case 'tweetButtonEnabled':
					$options_to_save['tweet_button_enabled'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'shareButtonText':
					$options_to_save['share_button_text'] = sanitize_text_field( $field_value );
					break;
				case 'tweetButtonAlignment':
					$options_to_save['tweet_button_alignment'] = sanitize_text_field( $field_value );
					break;
				case 'tweetIconAlignment':
					$options_to_save['tweet_icon_alignment'] = sanitize_text_field( $field_value );
					break;
				case 'tweetButtonDisplay':
					$options_to_save['tweet_button_display'] = sanitize_text_field( $field_value );
					break;
				case 'align':
					$options_to_save['align'] = sanitize_text_field( $field_value );
					break;
				case 'anchorPrefix':
					$options_to_save['anchor_prefix'] = sanitize_text_field( $field_value );
					break;
				case 'hasAnchor':
					$options_to_save['has_anchor'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'enableLinksInTweet':
					$options_to_save['enable_links_in_tweet'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'urlShorteningService':
					$options_to_save['url_shortening_service'] = sanitize_text_field( $field_value );
					break;
				case 'urlShortener':
					$options_to_save['url_shortener'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'template':
					$options_to_save['template'] = sanitize_text_field( $field_value );
					break;
			}
		}

		Options_Defaults::update_options( '', $options_to_save );

		$options_to_return = array();
		// Format saved fields.
		foreach ( $options_to_save as $field => $value ) {
			// Convert to camelcase.
			$new_field                       = Functions::to_camelcase( $field );
			$options_to_return[ $new_field ] = $value;
		}
		wp_send_json_success(
			$options_to_return
		);
	}

	/**
	 * Reset form options for default options.
	 */
	public static function ajax_reset_options_defaults() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options           = Options_Defaults::reset();
		$options_to_return = array();

		// Format saved fields.
		foreach ( $options as $field => $value ) {
			// Convert to camelcase.
			$new_field                       = Functions::to_camelcase( $field );
			$options_to_return[ $new_field ] = $value;
		}
		wp_send_json_success(
			$options_to_return
		);
	}

	/**
	 * Retrieve admin defaults.
	 */
	public static function ajax_retrieve_themes_defaults() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$theme_slug = Options_Defaults::get_options( 'template' );

		// Retrieve categories.
		$categories = Themes\Themes_Addon_Categories::get_categories();

		// Retrieve themes.
		$themes = Themes\Themes_Addon::get_theme_data();

		foreach ( $categories as &$category ) {
			$category_slug      = $category['slug'];
			$category['themes'] = array();
			foreach ( $themes as $theme ) {
				if ( $theme['category'] === $category_slug ) {
					$category['themes'][] = $theme;
				}
			}
		}

		wp_send_json_success(
			array(
				'template'   => $theme_slug,
				'categories' => $categories,
			)
		);
	}

	/**
	 * Retrieve any saved license data (labeled core in case there are additional add-ons).
	 */
	public static function ajax_retrieve_license_core() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}
		$license_helper = new License();
		$response       = $license_helper->perform_action( 'check_license', '', true );

		if ( $response['license_errors'] ) {
			wp_send_json_error( $response );
		}

		wp_send_json_success( $response );
	}

	/**
	 * Save license data (labeled core in case there are additional add-ons).
	 */
	public static function ajax_save_license_core() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$license_key    = sanitize_text_field( filter_input( INPUT_POST, 'license_key', FILTER_DEFAULT ) );
		$license_helper = new License();
		$response       = $license_helper->perform_action( 'activate_license', $license_key, true );

		if ( $response['license_errors'] ) {
			$license_helper->set_activated_status( false );
			wp_send_json_error( $response );
		}

		if ( 'valid' === $response['license'] ) {
			$license_helper->set_activated_status( true );
			$response['license_valid']     = true;
			$response['license_activated'] = true;
		} else {
			$license_helper->set_activated_status( false );
			$response['license_valid']     = false;
			$response['license_activated'] = false;
		}

		wp_send_json_success( $response );
	}

	/**
	 * Revoke license data (labeled core in case there are additional add-ons).
	 */
	public static function ajax_revoke_license_core() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$license_helper = new License();
		$response       = $license_helper->perform_action( 'deactivate_license' );

		if ( ! $response['license_errors'] ) {
			$license_helper->set_activated_status( false );
			wp_send_json_success( $response );
		}

		wp_send_json_error( array() );
	}
}
