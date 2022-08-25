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
class Adobe_Fonts {

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
		add_action( 'quotes_dlx_before_modal_scripts', array( static::class, 'add_preview_modal_scripts' ), 10, 3 );

		// For adding the style in for the preview modal.
		add_filter( 'quotes_dlx_plugin_preview_modal_styles', array( static::class, 'add_preview_modal_styles' ) );

		if ( self::can_enqueue( 'frontend' ) ) {
			add_action( 'wp_head', array( static::class, 'add_dns_prefetch' ), 1 );
			add_action( 'wp_enqueue_scripts', array( static::class, 'enqueue_adobe_fonts' ) );
		}
		if ( self::can_enqueue( 'backend' ) ) {
			add_action( 'admin_head', array( static::class, 'add_dns_prefetch' ), 1 );
			add_action( 'admin_enqueue_scripts', array( static::class, 'enqueue_adobe_fonts' ) );
		}
		return $self;
	}

	/**
	 * Adds DNS prefetch for the typekit CSS URL.
	 */
	public static function add_dns_prefetch() {
		$typekit_css_url = rtrim( self::$typekit_css_url, '/' );
		echo '<link rel="dns-prefetch" href="' . esc_url( $typekit_css_url ) . '">';
		echo '<link rel="preconnect" href="' . esc_url( $typekit_css_url ) . '" crossorigin="anonymous">';

		$preload_url = self::get_adobe_fonts_url();
		if ( ! empty( $preload_url ) ) {
			echo '<link rel="preload" href="' . esc_url( $preload_url ) . '" crossorigin="anonymous" as="style">';
		}
	}

	/**
	 * Get the URL to adobe fonts with passed project ID.
	 *
	 * @param string $project_id The Adobe Fonts project ID.
	 *
	 * @return string URL for adobe fonts with project ID.
	 */
	public static function get_adobe_fonts_url( $project_id = '' ) {
		// Retrieve project ID if empty.
		if ( empty( $project_id ) ) {
			$project_id = Options_Advanced::get_options( 'adobe_project_id' );
		}
		// If still empty, return.
		if ( empty( $project_id ) ) {
			return '';
		}

		$adobe_fonts_url = sprintf(
			'%s%s.css',
			self::$typekit_css_url,
			$project_id
		);

		return $adobe_fonts_url;
	}

	/**
	 * Check to see if we need to load the Adobe Fonts.
	 *
	 * @param string $location Can be frontend or backend.
	 *
	 * @return bool True if we can load the Adobe Fonts.
	 */
	public static function can_enqueue( $location = 'frontend' ) {
		$options = Options_Advanced::get_options();

		// Check to see if adobe fonts are even enabled.
		$adobe_fonts_enabled = (bool) $options['enable_adobe_fonts'] ?? false;
		if ( $adobe_fonts_enabled ) {
			$adobe_fonts = $options['adobe_fonts'] ?? array();

			// Check to see if there are any stored Adobe Fonts.
			if ( ! empty( $adobe_fonts ) && is_array( $adobe_fonts ) ) {
				// Now check to see if frontend/backend fonts are enabled.
				$backend_fonts_enabled  = (bool) ( $options['activate_adobe_fonts_admin'] ?? false );
				$frontend_fonts_enabled = (bool) ( $options['activate_adobe_fonts_frontend'] ?? false );

				// Check the type of request.
				if ( 'frontend' === $location ) {
					return $frontend_fonts_enabled;
				} elseif ( 'backend' === $location ) {
					return $backend_fonts_enabled;
				} else {
					return $frontend_fonts_enabled || $backend_fonts_enabled;
				}
			}
		}
		return false;
	}

	/**
	 * Enqueue adobe font scripts based on project id.
	 *
	 * @param string $project_id The project id.
	 */
	public static function enqueue_adobe_fonts( $project_id = '' ) {

		// Retrieve project ID if empty.
		if ( empty( $project_id ) ) {
			$project_id = Options_Advanced::get_options( 'adobe_project_id' );
		}
		// If still empty, return.
		if ( empty( $project_id ) ) {
			return;
		}

		/**
		 * Filter: quotes_dlx_adobe_fonts_enqueue_handle
		 *
		 * Override the handle for enqueueing the Adobe Fonts.
		 *
		 * @since 1.0.0
		 *
		 * @param string  $handle Default handle.
		 * @param string  $project_id   The Adobe font project ID..
		 *
		 * @return string handle
		 */

		$adobe_fonts_handle = apply_filters( 'quotes_dlx_adobe_fonts_enqueue_handle', 'quotes-dlx-adobe-fonts', $project_id );

		wp_enqueue_style(
			'quotes-dlx-adobe-fonts',
			esc_url(
				self::get_adobe_fonts_url( $project_id )
			),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
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
	 * @param string $template       The active template.
	 * @param string $font_primary   The primary font slug.
	 * @param string $font_secondary The secondary font slug.
	 */
	public static function add_preview_modal_scripts( $template, $font_primary, $font_secondary ) {
		$font_primary   = sanitize_title( $font_primary );
		$font_secondary = sanitize_title( $font_secondary );
		if ( Functions::is_adobe_font( $font_primary ) || Functions::is_adobe_font( $font_secondary ) ) {
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
