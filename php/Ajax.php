<?php
/**
 * Set up Ajax callbacks.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

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

		$license = Options_License::get_options();
		wp_send_json_success(
			$license
		);
	}
}
