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

		// For retrieving a theme's options.
		add_action( 'wp_ajax_quotes_dlx_get_theme_options', array( static::class, 'ajax_get_theme_options' ) );
		add_action( 'wp_ajax_quotes_dlx_save_theme_options', array( static::class, 'ajax_save_theme_options' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_theme_options', array( static::class, 'ajax_reset_theme_options' ) );

		// Theme preview for font-size and line-height for desktop|tablet|mobile.
		add_action( 'wp_ajax_quotes_dlx_theme_preview', array( static::class, 'ajax_theme_preview' ) );

		// For saving, resetting, getting theme size options.
		add_action( 'wp_ajax_quotes_dlx_get_theme_size_options', array( static::class, 'ajax_get_theme_size_options' ) );
		add_action( 'wp_ajax_quotes_dlx_save_theme_size_options', array( static::class, 'ajax_save_theme_size_options' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_theme_size_options', array( static::class, 'ajax_reset_theme_size_options' ) );

		// For saving/resetting the advanced options.
		add_action( 'wp_ajax_quotes_dlx_retrieve_admin_options_advanced', array( static::class, 'ajax_retrieve_options_advanced' ) );
		add_action( 'wp_ajax_quotes_dlx_save_admin_options_advanced', array( static::class, 'ajax_save_options_advanced' ) );
		add_action( 'wp_ajax_quotes_dlx_reset_admin_options_advanced', array( static::class, 'ajax_reset_options_advanced' ) );

		// For resetting all options.
		add_action( 'wp_ajax_quotes_dlx_reset_all_options', array( static::class, 'ajax_reset_all_options' ) );

		return $self;
	}

	/**
	 * Reset all options.
	 */
	public static function ajax_reset_all_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Reset all the things.
		Options_Defaults::reset( true );
		Options_License::reset( true );
		Options_Menu::reset( true );
		Options_Theme::reset( true );

		wp_send_json_success( array() );
	}
	/**
	 * Retrieve the theme size options.
	 */
	public static function ajax_get_theme_size_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the active template.
		$template_slug = sanitize_text_field( filter_input( INPUT_POST, 'template', FILTER_DEFAULT ) );
		$screen_size   = sanitize_key( filter_input( INPUT_POST, 'screen', FILTER_DEFAULT ) );

		// Get saved colors.
		$theme_options = Options_Theme::get_options();

		// Get saved font size.
		$theme_font_size        = $theme_options[ $template_slug ][ $screen_size ]['font_size'] ?? Options_Theme::get_default_size( $screen_size, 'font_size' );
		$theme_line_height      = $theme_options[ $template_slug ][ $screen_size ]['line_height'] ?? Options_Theme::get_default_size( $screen_size, 'line_height' );
		$theme_button_font_size = $theme_options[ $template_slug ][ $screen_size ]['button_font_size'] ?? Options_Theme::get_default_size( $screen_size, 'button_font_size' );

		wp_send_json_success(
			array(
				'fontSize'       => $theme_font_size,
				'lineHeight'     => $theme_line_height,
				'buttonFontSize' => $theme_button_font_size,
			)
		);

	}

	/**
	 * Resize theme size options.
	 */
	public static function ajax_reset_theme_size_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the active template.
		$template_slug = sanitize_key( filter_input( INPUT_POST, 'template', FILTER_DEFAULT ) );
		$screen_size   = sanitize_key( filter_input( INPUT_POST, 'screen', FILTER_DEFAULT ) );
		$theme_options = Options_Theme::get_options();

		if ( ! isset( $theme_options[ $template_slug ] ) ) {
			$theme_options[ $template_slug ] = array();
		}

		$theme_options[ $template_slug ][ $screen_size ] = Options_Theme::get_default_sizes( $screen_size );
		Options_Theme::update_options( $template_slug, $theme_options );

		wp_send_json_success(
			array(
				'fontSize'       => Options_Theme::get_default_size( $screen_size, 'font_size' ),
				'lineHeight'     => Options_Theme::get_default_size( $screen_size, 'line_height' ),
				'buttonFontSize' => Options_Theme::get_default_size( $screen_size, 'button_font_size' ),
			)
		);
		exit;
	}

	/**
	 * Save theme size options.
	 */
	public static function ajax_save_theme_size_options() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the active template.
		$template_slug    = sanitize_key( filter_input( INPUT_POST, 'template', FILTER_DEFAULT ) );
		$screen_size      = sanitize_key( filter_input( INPUT_POST, 'screen', FILTER_DEFAULT ) );
		$font_size        = absint( filter_input( INPUT_POST, 'fontSize', FILTER_SANITIZE_NUMBER_INT ) );
		$button_font_size = absint( filter_input( INPUT_POST, 'buttonFontSize', FILTER_SANITIZE_NUMBER_INT ) );
		$line_height      = (float) filter_input( INPUT_POST, 'lineHeight', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION );
		$theme_options    = Options_Theme::get_options();

		// Check to see if template slug is an array.
		if ( ! isset( $theme_options[ $template_slug ] ) || ! is_array( $theme_options[ $template_slug ] ) ) {
			$theme_options[ $template_slug ] = array();
		}

		// Check to see if screen size is part of the array.
		if ( ! isset( $theme_options[ $template_slug ][ $screen_size ] ) || ! is_array( $theme_options[ $template_slug ][ $screen_size ] ) ) {
			$theme_options[ $template_slug ][ $screen_size ] = array();
		}

		// Now store options.
		$theme_options[ $template_slug ][ $screen_size ]['font_size']        = $font_size;
		$theme_options[ $template_slug ][ $screen_size ]['button_font_size'] = $button_font_size;
		$theme_options[ $template_slug ][ $screen_size ]['line_height']      = $line_height;
		Options_Theme::update_options( '', $theme_options );

		wp_send_json_success(
			array(
				'message' => __( 'Your theme sizes have been saved.', 'quotes-dlx' ),
			)
		);
		exit;
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
	 * Retrieve admin options for the defaults view.
	 */
	public static function ajax_retrieve_options_advanced() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		} else {
			$defaults = Options_Advanced::get_options();
			wp_send_json_success(
				array(
					'desktop_breakpoint'            => $defaults['desktop_breakpoint'],
					'tablet_breakpoint'             => $defaults['tablet_breakpoint'],
					'mobile_breakpoint'             => $defaults['mobile_breakpoint'],
					'desktop_breakpoint_unit'       => $defaults['desktop_breakpoint_unit'],
					'tablet_breakpoint_unit'        => $defaults['tablet_breakpoint_unit'],
					'mobile_breakpoint_unit'        => $defaults['mobile_breakpoint_unit'],
					'enable_fonts'                  => (bool) $defaults['enable_fonts'],
					'custom_font_primary'           => $defaults['custom_font_primary'],
					'custom_font_secondary'         => $defaults['custom_font_secondary'],
					'enable_adobe_typekit'          => (bool) $defaults['enable_adobe_fonts'],
					'adobe_project_id'              => $defaults['adobe_project_id'],
					'activate_adobe_fonts_admin'    => (bool) $defaults['activate_adobe_fonts_admin'],
					'activate_adobe_fonts_frontend' => (bool) $defaults['activate_adobe_fonts_frontend'],
					'template'                      => Options_Defaults::get_options( 'template' ),

				)
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
	 * Content for the theme preview modal popup. Loaded in an iframe.
	 */
	public static function ajax_theme_preview() {
		if ( ! wp_verify_nonce( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ), Functions::get_admin_retrieve_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_die( 'Invalid request.' );
		}

		$template              = sanitize_text_field( filter_input( INPUT_GET, 'template', FILTER_DEFAULT ) );
		$font_size             = absint( filter_input( INPUT_GET, 'fontsize', FILTER_SANITIZE_NUMBER_INT ) );
		$line_height           = (float) filter_input( INPUT_GET, 'lineheight', FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION );
		$screen                = sanitize_text_field( filter_input( INPUT_GET, 'screen', FILTER_DEFAULT ) );
		$button_font_size      = absint( filter_input( INPUT_GET, 'buttonsize', FILTER_SANITIZE_NUMBER_INT ) );
		$primary_font_family   = sanitize_text_field( filter_input( INPUT_GET, 'primary_font_family', FILTER_DEFAULT ) );
		$secondary_font_family = sanitize_text_field( filter_input( INPUT_GET, 'secondary_font_family', FILTER_DEFAULT ) );

		// Make sure fonts are enabled.
		$enable_fonts = (bool) Options_Defaults::get_options( 'enable_fonts' );

		// Double check font families.
		if ( '' === $primary_font_family && $enable_fonts ) {
			$primary_font_family = Functions::get_font_family( 'primary', true );
		}
		if ( '' === $secondary_font_family && $enable_fonts ) {
			$secondary_font_family = Functions::get_font_family( 'secondary', true );
		}

		wp_register_script(
			'qdlx_twitter_actions',
			Functions::get_plugin_url( 'dist/quotes-dlx-actions.js' ),
			array( 'wp-i18n' ),
			Functions::get_plugin_version(),
			false
		);
		wp_register_script(
			'qdlx_twitter_preview_js',
			Functions::get_plugin_url( 'dist/quotes-dlx-theme-preview.js' ),
			array(),
			Functions::get_plugin_version(),
			false
		);
		wp_register_style(
			'qdlx_theme_css',
			Functions::get_plugin_url(
				sprintf(
					'dist/quotes-dlx-theme-%s.css',
					sanitize_text_field( $template )
				)
			),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'qdlx_preview_css',
			Functions::get_plugin_url( 'dist/quotes-dlx-theme-preview.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);

		wp_register_style(
			'qdlx_frontend_css',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);

		// Try to load font stylesheets.
		if ( $enable_fonts ) {
			$primary_font_css_url   = Functions::get_font_family_stylesheet_path( $primary_font_family );
			$secondary_font_css_url = Functions::get_font_family_stylesheet_path( $secondary_font_family );

			if ( $primary_font_css_url ) {
				wp_register_style(
					'qdlx_primary_font_css',
					$primary_font_css_url,
					array(),
					Functions::get_plugin_version(),
					'all'
				);
			}

			if ( $secondary_font_css_url ) {
				wp_register_style(
					'qdlx_secondary_font_css',
					$secondary_font_css_url,
					array(),
					Functions::get_plugin_version(),
					'all'
				);
			}
		}

		// Get localized vars.
		$themes = Themes\Themes_Addon::get_theme_data( $template );
		if ( ! $themes ) {
			wp_die( 'Could not find a theme' );
		}
		$theme_default_colors = $themes['colors'];
		$theme_options        = Options_Theme::get_options();
		$saved_colors         = $theme_options[ $template ]['colors'] ?? false;

		// Check colors and set to defaults if it doesn't exist.
		if ( false === $saved_colors || ! is_array( $saved_colors ) || empty( $saved_colors ) ) {
			$saved_colors = $theme_default_colors;
		}

		// Double-check font-sizes.
		if ( 0 === $font_size ) {
			$font_size = '16';
		}
		if ( 0 === $button_font_size ) {
			$button_font_size = '16';
		}
		if ( ! $line_height ) {
			$line_height = 1.65;
		}

		// Output local vars.
		wp_localize_script(
			'qdlx_twitter_preview_js',
			'qdlx_theme_preview',
			array(
				'stylesheet'            => esc_url( $theme['stylesheet'] ),
				'theme'                 => $template,
				'colors'                => $saved_colors,
				'font_size'             => $font_size,
				'line_height'           => (float) $line_height,
				'button_font_size'      => $button_font_size,
				'screen'                => $screen,
				'primary_font_family'   => $enable_fonts ? $primary_font_family : 'inherit',
				'secondary_font_family' => $enable_fonts ? $secondary_font_family : 'inherit',
			)
		);
		?>
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<?php
				/**
				 * Action to run before printing modal scripts/styles.
				 *
				 * @since 1.0.0
				 *
				 * @param string $template              The template name/slug.
				 * @param string $primary_font_family   The primary font family slug.
				 * @param string $secondary_font_family The secondary font family slug.
				 */
				do_action( 'quotes_dlx_before_modal_scripts', $template, $primary_font_family, $secondary_font_family );

				/**
				 * Filter the styles print arguments.
				 *
				 * Add more handles to print.
				 *
				 * @since 1.0.0
				 */
				$modal_styles = apply_filters(
					'quotes_dlx_plugin_preview_modal_styles',
					array(
						'qdlx_theme_css',
						'qdlx_twitter_preview_css',
						'qdlx_font_css',
						'qdlx_frontend_css',
						'qdlx_primary_font_css',
						'qdlx_secondary_font_css',
					)
				);
				wp_print_styles(
					$modal_styles
				);
				?>
			</head>
			<body>
				<div id="qdlx-theme-preview" class="<?php echo esc_attr( $screen ); ?>"></div>
				<?php
					/**
					 * Filter the scripts print arguments.
					 *
					 * Add more handles to print.
					 *
					 * @since 1.0.0
					 */
					$modal_scripts = apply_filters(
						'quotes_dlx_plugin_preview_modal_scripts',
						array(
							'qdlx_twitter_actions',
							'qdlx_twitter_preview_js',
						)
					);
					wp_print_scripts( $modal_scripts );

				/**
				 * Action to run after printing modal scripts/styles.
				 *
				 * @since 1.0.0
				 */
				do_action( 'quotes_dlx_after_modal_scripts', 'quotes-dlx' );
				?>
			</body>
		</html>
		<?php
		exit;
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

		// Get theme colors and merge with default colors.
		// $theme_color_palette  = Functions::get_site_theme_colors(); // phpcs:ignore.

		// Retrieve font families and stylsheets.
		$primary_font       = Functions::get_font_family( 'primary' );
		$secondary_font     = Functions::get_font_family( 'secondary' );
		$format_for_display = true;

		wp_send_json_success(
			array(
				'colors'                    => $saved_colors,
				'defaults'                  => $theme_default_colors,
				'font_size_desktop'         => $theme_options[ $template_slug ]['font_size_desktop'] ?? 16,
				'line_height_desktop'       => $theme_options[ $template_slug ]['line_height_desktop'] ?? 1.65,
				'button_font_size_desktop'  => $theme_options[ $template_slug ]['button_font_size_desktop'] ?? 16,
				'font_size_tablet'          => $theme_options[ $template_slug ]['font_size_tablet'] ?? 14,
				'line_height_tablet'        => $theme_options[ $template_slug ]['line_height_tablet'] ?? 1.1,
				'button_font_size_tablet'   => $theme_options[ $template_slug ]['button_font_size_tablet'] ?? 14,
				'font_size_mobile'          => $theme_options[ $template_slug ]['font_size_mobile'] ?? 12,
				'line_height_mobile'        => $theme_options[ $template_slug ]['line_height_mobile'] ?? 1.1,
				'button_font_size_mobile'   => $theme_options[ $template_slug ]['button_font_size_mobile'] ?? 12,
				'font_primary'              => sanitize_text_field( Functions::get_font_family( 'primary', $format_for_display ) ),
				'font_secondary'            => sanitize_text_field( Functions::get_font_family( 'secondary', $format_for_display ) ),
				'font_primary_stylesheet'   => esc_url( Functions::get_font_family_stylesheet_path( $primary_font ) ),
				'font_secondary_stylesheet' => esc_url( Functions::get_font_family_stylesheet_path( $secondary_font ) ),
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

		// Get default and saved colors for return.
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

		// Reset options.
		$theme_options = Options_Theme::get_options();
		if ( isset( $theme_options[ $template_slug ]['colors'] ) ) {
			unset( $theme_options[ $template_slug ]['colors'] );
		}
		Options_Theme::update_options( '', $theme_options, true );

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

		$options_to_save = Options_Defaults::get_options();

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
				case 'desktopBreakpoint':
					$options_to_save['desktop_breakpoint'] = (float) $field_value;
					break;
				case 'desktopBreakpointUnit':
					$options_to_save['desktop_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'tabletBreakpoint':
					$options_to_save['tablet_breakpoint'] = (float) $field_value;
					break;
				case 'tabletBreakpointUnit':
					$options_to_save['tablet_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'mobileBreakpoint':
					$options_to_save['mobile_breakpoint'] = (float) $field_value;
					break;
				case 'mobileBreakpointUnit':
					$options_to_save['mobile_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'enableFonts':
					$options_to_save['enable_fonts'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'customFontPrimary':
					$options_to_save['custom_font_primary'] = sanitize_text_field( $field_value );
					break;
				case 'customFontSecondary':
					$options_to_save['custom_font_secondary'] = sanitize_text_field( $field_value );
					break;
				case 'primaryFontFamily':
					$options_to_save['primary_font_family'] = sanitize_text_field( $field_value );
					break;
				case 'secondaryFontFamily':
					$options_to_save['secondary_font_family'] = sanitize_text_field( $field_value );
					break;
				case 'enableAdobeFonts':
					$options_to_save['enable_adobe_fonts'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'adobeProjectId':
					$options_to_save['adobe_project_id'] = sanitize_text_field( $field_value );
					break;
				case 'activateAdobeFontsAdmin':
					$options_to_save['activate_adobe_fonts_admin'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'activateAdobeFontsFrontend':
					$options_to_save['activate_adobe_fonts_frontend'] = ( 'true' === $field_value ) ? true : false;
					break;
				default:
					$options_to_save[ sanitize_key( $field ) ] = sanitize_text_field( $field_value );
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
	 * Save form options for default options.
	 */
	public static function ajax_save_options_advanced() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options_to_save = Options_Advanced::get_options();

		$form_data = $_POST['form_data']; // expect array.

		// Iterate and sanitize.
		foreach ( $form_data as $field => $field_value ) {
			switch ( $field ) {
				case 'desktopBreakpoint':
					$options_to_save['desktop_breakpoint'] = (float) $field_value;
					break;
				case 'desktopBreakpointUnit':
					$options_to_save['desktop_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'tabletBreakpoint':
					$options_to_save['tablet_breakpoint'] = (float) $field_value;
					break;
				case 'tabletBreakpointUnit':
					$options_to_save['tablet_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'mobileBreakpoint':
					$options_to_save['mobile_breakpoint'] = (float) $field_value;
					break;
				case 'mobileBreakpointUnit':
					$options_to_save['mobile_breakpoint_unit'] = sanitize_text_field( $field_value );
					break;
				case 'enableFonts':
					$options_to_save['enable_fonts'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'customFontPrimary':
					$options_to_save['custom_font_primary'] = sanitize_text_field( $field_value );
					break;
				case 'customFontSecondary':
					$options_to_save['custom_font_secondary'] = sanitize_text_field( $field_value );
					break;
				case 'primaryFontFamily':
					$options_to_save['primary_font_family'] = sanitize_text_field( $field_value );
					break;
				case 'secondaryFontFamily':
					$options_to_save['secondary_font_family'] = sanitize_text_field( $field_value );
					break;
				case 'enableAdobeFonts':
					$options_to_save['enable_adobe_fonts'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'adobeProjectId':
					$options_to_save['adobe_project_id'] = sanitize_text_field( $field_value );
					break;
				case 'activateAdobeFontsAdmin':
					$options_to_save['activate_adobe_fonts_admin'] = ( 'true' === $field_value ) ? true : false;
					break;
				case 'activateAdobeFontsFrontend':
					$options_to_save['activate_adobe_fonts_frontend'] = ( 'true' === $field_value ) ? true : false;
					break;
			}
		}

		Options_Advanced::update_options( '', $options_to_save );

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
	 * Reset form options for advanced options.
	 */
	public static function ajax_reset_options_advanced() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		$options           = Options_Advanced::reset();
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

		$theme_slug   = Options_Defaults::get_options( 'template' );
		$enable_fonts = Options_Defaults::get_options( 'enable_fonts' );

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

		// Get saved options.
		$theme_options = Options_Theme::get_options();

		// Get saved font size.
		$theme_font_size_desktop   = $theme_options[ $theme_slug ]['font_size_desktop'] ?? 16;
		$theme_line_height_desktop = $theme_options[ $theme_slug ]['line_height_desktop'] ?? 1.65;
		$theme_font_size_tablet    = $theme_options[ $theme_slug ]['font_size_tablet'] ?? 14;
		$theme_line_height_tablet  = $theme_options[ $theme_slug ]['line_height_tablet'] ?? 1.1;
		$theme_font_size_mobile    = $theme_options[ $theme_slug ]['font_size_mobile'] ?? 12;
		$theme_line_height_mobile  = $theme_options[ $theme_slug ]['line_height_mobile'] ?? 1.1;

		wp_send_json_success(
			array(
				'template'            => $theme_slug,
				'categories'          => $categories,
				'font_size_desktop'   => $theme_font_size_desktop,
				'line_height_desktop' => $theme_line_height_desktop,
				'font_size_tablet'    => $theme_font_size_tablet,
				'line_height_tablet'  => $theme_line_height_tablet,
				'font_size_mobile'    => $theme_font_size_mobile,
				'line_height_mobile'  => $theme_line_height_mobile,
				'enable_fonts'        => (bool) $enable_fonts,
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
		$response['quotesdlxLicense'] = $license_key;

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
