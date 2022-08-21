<?php
/**
 * Set up helper functions for Adobe Fonts.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Helper class for registering Adobe Fonts.
 */
class AdobeFonts {

	/**
	 * Typekit CSS URL.
	 *
	 * @var string The typekit CSS URL.
	 */
	public static $typekit_css_url = 'https://use.typekit.net/';

	/**
	 * Main class runner.
	 *
	 * @return Ajax.
	 */
	public static function run() {
		$self = new self();

		// For saving/resetting the default options.
		add_action( 'wp_ajax_quotes_dlx_retrieve_remote_adobe_fonts', array( static::class, 'ajax_retrieve_remote_adobe_fonts' ) );

		// For loading the font in the preview modal.
		add_action( 'quotes_dlx_before_modal_scripts', array( static::class, 'add_preview_modal_scripts' ), 10, 2 );
		// For adding the style in for the preview modal.
		add_filter( 'quotes_dlx_plugin_preview_modal_styles', array( static::class, 'add_preview_modal_styles' ) );

		return $self;
	}

	/**
	 * Add Adobe fonts to the modal preview.
	 *
	 * @param array $styles Array of wp_register_style handles.
	 *
	 * @return array $styles Updated styles.
	 */
	public static function add_preview_modal_styles( $styles ) {
		$styles[] = 'quotes-dlx-adobe-fonts-modal'; // If the style is registered, try to enqueue it.
		return $styles;
	}

	/**
	 * Check to see if font is adobe font, and then register styles.
	 *
	 * @param string $template     The active template.
	 * @param string $font_primary The primary font slug.
	 */
	public static function add_preview_modal_scripts( $template, $font_primary ) {
		if ( Functions::is_adobe_font( $font_primary ) ) {
			$options    = Options_Advanced::get_options();
			$project_id = $options['adobe_project_id'];

			if ( ! empty( $project_id ) ) {
				wp_register_style(
					'quotes-dlx-adobe-fonts-modal',
					esc_url( static::$typekit_css_url . $project_id . '.css' ),
					array(),
					Functions::get_plugin_version(),
					'all'
				);
			}
		}
	}

	/**
	 * Retrieve the theme size options.
	 */
	public static function ajax_retrieve_remote_adobe_fonts() {
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), Functions::get_admin_save_nonce() ) || ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array() );
		}

		// Get the project/kit ID.
		$project_id = sanitize_text_field( filter_input( INPUT_POST, 'project_id', FILTER_DEFAULT ) );

		$adobe_fonts_url = 'https://typekit.com/api/v1/json/kits/' . $project_id . '/published';

		$response = wp_remote_get(
			esc_url( $adobe_fonts_url ),
			array(
				'timeout' => '30',
			)
		);

		// Make sure there is no error and we've received a valid status code.
		if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
			wp_send_json_error(
				array(
					'message' => __( 'Could not connect to the Adobe Fonts API. The project ID may be incorrect.', 'quotes-dlx' ),
				)
			);
		}

		$font_data     = json_decode( wp_remote_retrieve_body( $response ), true );
		$font_families = $font_data['kit']['families'] ?? false;

		// Make sure we have font families.
		if ( ! $font_families ) {
			wp_send_json_error(
				array(
					'message' => __( 'There appears to be no fonts for the project ID.', 'quotes-dlx' ),
				)
			);
		}

		// Now interate over the fonts.
		$fonts = array();
		foreach ( $font_families as $font_family ) {
			// Retrieve fallback CSS.
			$fallback       = $font_family['css_stack'];
			$fallback_regex = '/,(.*+)$/';
			$fallback_css   = '';
			preg_match( $fallback_regex, $fallback, $matches );
			if ( $matches && isset( $matches[1] ) ) {
				$fallback_css = $matches[1];
			}
			$fonts[] = array(
				'name'     => sanitize_text_field( $font_family['name'] ),
				'slug'     => sanitize_text_field( $font_family['slug'] ),
				'family'   => sanitize_text_field( current( $font_family['css_names'] ) ),
				'fallback' => sanitize_text_field( $fallback_css ),
			);
		}

		// Retrieve options and add fonts.
		$options                     = Options_Advanced::get_options( '', true );
		$options['adobe_fonts']      = $fonts;
		$options['adobe_project_id'] = $project_id;
		Options_Advanced::update_options( '', $options, true );

		wp_send_json_success( $fonts );
	}
}
