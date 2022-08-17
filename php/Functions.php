<?php
/**
 * Helper functions for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Functions
 */
class Functions {

	/**
	 * Checks if the plugin is on a multisite install.
	 *
	 * @since 1.0.0
	 *
	 * @param bool $network_admin Check if in network admin.
	 *
	 * @return true if multisite, false if not.
	 */
	public static function is_multisite( $network_admin = false ) {
		if ( ! function_exists( 'is_plugin_active_for_network' ) ) {
			require_once ABSPATH . '/wp-admin/includes/plugin.php';
		}
		$is_network_admin = false;
		if ( $network_admin ) {
			if ( is_network_admin() ) {
				if ( is_multisite() && is_plugin_active_for_network( self::get_plugin_slug() ) ) {
					return true;
				}
			} else {
				return false;
			}
		}
		if ( is_multisite() && is_plugin_active_for_network( self::get_plugin_slug() ) ) {
			return true;
		}
		return false;
	}

	/**
	 * Sanitize an attribute based on type.
	 *
	 * @param array  $attributes Array of attributes.
	 * @param string $attribute  The attribute to sanitize.
	 * @param string $type       The type of sanitization you need (values can be integer, text, float, boolean, url).
	 *
	 * @return mixed Sanitized attribute. wp_error on failure.
	 */
	public static function sanitize_attribute( $attributes, $attribute, $type = 'text' ) {
		if ( isset( $attributes[ $attribute ] ) ) {
			switch ( $type ) {
				case 'raw':
					return $attributes[ $attribute ];
				case 'post_text':
				case 'post':
					return wp_kses_post( $attributes[ $attribute ] );
				case 'string':
				case 'text':
					return sanitize_text_field( $attributes[ $attribute ] );
				case 'bool':
				case 'boolean':
					return filter_var( $attributes[ $attribute ], FILTER_VALIDATE_BOOLEAN );
				case 'int':
				case 'integer':
					return absint( $attributes[ $attribute ] );
				case 'float':
					if ( is_float( $attributes[ $attribute ] ) ) {
						return $attributes[ $attribute ];
					}
					return 0;
				case 'url':
					return esc_url( $attributes[ $attribute ] );
				case 'default':
					return new \WP_Error( 'quotes_dlx_unknown_type', __( 'Unknown type.', 'quotes-dlx' ) );
			}
		}
		return new \WP_Error( 'quotes_dlx_attribute_not_found', __( 'Attribute not found.', 'quotes-dlx' ) );
	}

	/**
	 * Checks to see if an asset is activated or not.
	 *
	 * @since 1.0.0
	 *
	 * @param string $path Path to the asset.
	 * @param string $type Type to check if it is activated or not.
	 *
	 * @return bool true if activated, false if not.
	 */
	public static function is_activated( $path, $type = 'plugin' ) {

		// Gets all active plugins on the current site.
		$active_plugins = self::is_multisite() ? get_site_option( 'active_sitewide_plugins' ) : get_option( 'active_plugins', array() );
		if ( in_array( $path, $active_plugins, true ) ) {
			return true;
		}
		return false;
	}

	/**
	 * Take a _ separated field and convert to camelcase.
	 *
	 * @param string $field Field to convert to camelcase.
	 *
	 * @return string camelCased field.
	 */
	public static function to_camelcase( string $field ) {
		return str_replace( '_', '', lcfirst( ucwords( $field, '_' ) ) );
	}

	/**
	 * Return the plugin slug.
	 *
	 * @return string plugin slug.
	 */
	public static function get_plugin_slug() {
		return dirname( plugin_basename( QUOTES_DLX_FILE ) );
	}

	/**
	 * Return the basefile for the plugin.
	 *
	 * @return string base file for the plugin.
	 */
	public static function get_plugin_file() {
		return plugin_basename( QUOTES_DLX_FILE );
	}

	/**
	 * Return the version for the plugin.
	 *
	 * @return float version for the plugin.
	 */
	public static function get_plugin_version() {
		return QUOTES_DLX_VERSION;
	}

	/**
	 * Get the plugin author name.
	 */
	public static function get_plugin_author() {
		/**
		 * Filer the output of the plugin Author.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin Author name.
		 */
		$plugin_author = apply_filters( 'quotes_dlx_plugin_author', 'MediaRon LLC' );
		return $plugin_author;
	}

	/**
	 * Return the Plugin author URI.
	 */
	public static function get_plugin_author_uri() {
		/**
		 * Filer the output of the plugin Author URI.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin Author URI.
		 */
		$plugin_author = apply_filters( 'quotes_dlx_plugin_author_uri', 'https://mediaron.com' );
		return $plugin_author;
	}

	/**
	 * Return the plugin name for the plugin.
	 *
	 * @return string Plugin name.
	 */
	public static function get_plugin_name() {
		/**
		 * Filer the output of the plugin name.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin name.
		 */
		return apply_filters( 'quotes_dlx_plugin_name', __( 'Quotes DLX', 'quotes-dlx' ) );
	}

	/**
	 * Return the plugin description for the plugin.
	 *
	 * @return string plugin description.
	 */
	public static function get_plugin_description() {
		/**
		 * Filer the output of the plugin name.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin description.
		 */
		return apply_filters( 'quotes_dlx_plugin_description', __( 'A simple and powerful way to share quotes in the block editor.', 'quotes-dlx' ) );
	}

	/**
	 * Retrieve the plugin URI.
	 */
	public static function get_plugin_uri() {
		/**
		 * Filer the output of the plugin URI.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin URI.
		 */
		return apply_filters( 'quotes_dlx_plugin_uri', 'https://mediaron.com/plugins/quotes-dlx/' );
	}

	/**
	 * Retrieve the plugin support URI.
	 */
	public static function get_plugin_support_uri() {
		/**
		 * Filer the output of the plugin support URI.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin Support URI.
		 */
		return apply_filters( 'quotes_dlx_plugin_support_uri', 'https://dlxplugins.com/support/' );
	}

	/**
	 * Retrieve the plugin documentation URI.
	 */
	public static function get_plugin_docs_uri() {
		/**
		 * Filer the output of the plugin docs URI.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin Docs URI.
		 */
		return apply_filters( 'quotes_dlx_plugin_docs_uri', 'https://qdlx.dlxplugins.com/' );
	}

	/**
	 * Retrieve the plugin documentation URI.
	 */
	public static function get_plugin_ratings_uri() {
		/**
		 * Filer the output of the plugin ratings URI.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin ratings URI.
		 */
		return apply_filters( 'quotes_dlx_plugin_docs_uri', 'https://dlxplugins.com/support/' );
	}

	/**
	 * Retrieve the plugin settings URI.
	 */
	public static function get_plugin_settings_uri() {
		return esc_url_raw(
			add_query_arg(
				array(
					'page' => 'quotes-dlx',
				),
				admin_url( 'options-general.php' )
			)
		);
	}

	/**
	 * Retrieve the site theme's colors.
	 *
	 * Get default color pallette. From: https://www.wpdiaries.com/gutenberg-color-palette/.
	 *
	 * @return array colors.
	 */
	public static function get_site_theme_colors() {
		$color_palette = array();

		// Try to get theme setup colors (if available).
		$theme_setup_color_palette = current( (array) get_theme_support( 'editor-color-palette' ) ); // will return false if not defined.

		if ( false !== $theme_json_color_palette && is_array( $theme_setup_color_palette ) ) {
			$color_palette = $theme_setup_color_palette;
		}

		// Now try to get theme.json colors.
		if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
			$settings                 = \WP_Theme_JSON_Resolver::get_merged_data()->get_settings();
			$theme_json_color_palette = $settings['color']['palette']['theme'] ?? array();

			if ( ! empty( $theme_json_color_palette ) && is_array( $theme_json_color_palette ) ) {
				$color_palette = array_merge( $color_palette, $theme_json_color_palette );
			}
		}
		return $color_palette;
	}

	/**
	 * Retrieve the primary font CSS argument for font-family.
	 */
	public static function get_primary_font_family_css() {
		$options     = Options_Defaults::get_options();
		$font        = $options['primary_font_family'];
		$custom_font = $options['custom_font_primary'];

		if ( 'custom' === $font ) {
			return esc_attr( str_replace( ';', '', $custom_font ) ) . ';';
		}

		if ( self::is_adobe_font( $font ) ) {
			return esc_attr( $font ) . ';';
		}

		// Must be a google font.
		$font = '"' . esc_attr( ucwords( str_replace( '-', ' ', $font ) ) ) . '"';
		return $font;
	}

	/**
	 * Retrieve a primary or secondary font family.
	 *
	 * @param string $primary_or_secondary 'primary' or 'secondary'.
	 * @param bool   $format_for_display    Whether to format it for display.
	 *
	 * @return string font family.
	 */
	public static function get_font_family( $primary_or_secondary = 'primary', $format_for_display = false ) {
		$options = Options_Defaults::get_options();
		if ( 'primary' === $primary_or_secondary ) {
			$font = $options['primary_font_family'];
		} else {
			$font = $options['secondary_font_family'];
		}
		if ( ! $format_for_display ) {
			return $font;
		}
		if ( self::is_adobe_font( $font ) ) {
			return $font;
		}
		// Must be a google font.
		$font = '"' . esc_attr( ucwords( str_replace( '-', ' ', $font ) ) ) . '"';
		return $font;
	}

	/**
	 * Retrieve the secondary font CSS argument for font-family.
	 */
	public static function get_secondary_font_family_css() {
		$options     = Options_Defaults::get_options();
		$font        = $options['secondary_font_family'];
		$custom_font = $options['custom_font_secondary'];

		if ( 'custom' === $font ) {
			return esc_attr( str_replace( ';', '', $custom_font ) ) . ';';
		}

		if ( self::is_adobe_font( $font ) ) {
			return esc_attr( $font ) . ';';
		}
		// Must be a google font.
		$font = '"' . esc_attr( ucwords( str_replace( '-', ' ', $font ) ) ) . '"';
		return $font;
	}

	/**
	 * Retrieve the plugin settings.
	 *
	 * @param string $font_family_slug The font family slug.
	 *
	 * @return bool|string false on path failure, URL if success..
	 */
	public static function get_font_family_stylesheet_path( $font_family_slug ) {
		$font_family_slug    = sanitize_title( $font_family_slug );
		$font_css_path       = 'dist/quotes-dlx-gfont-' . $font_family_slug . '.css';
		$stylesheet_dir_path = self::get_plugin_dir( $font_css_path );
		if ( file_exists( $stylesheet_dir_path ) ) {
			return self::get_plugin_url( $font_css_path );
		}
		return false;
	}

	/**
	 * Determines if a font is adobe or not.
	 *
	 * @param string $font_slug Font slug to check.
	 *
	 * @return bool true of adobe font, false if not.
	 */
	public static function is_adobe_font( $font_slug ) {
		$options = Options_Defaults::get_options();

		if ( true ) {
			$adobe_fonts = $options['adobe_fonts'];
			foreach ( $adobe_fonts as $adobe_font ) {
				if ( $adobe_font['slug'] === $font_slug ) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Retrieve theme font-sizes for a value.
	 *
	 * @param string $template   The template to retrieve the font-sizes for.
	 * @param string $key        Can be font_size, line_height, button_font_size.
	 * @param string $breakpoint The breakpoint to retrieve the font-size for. (can be desktop|tablet|mobile).
	 */
	public static function get_theme_font_sizes( $template, $key, $breakpoint ) {
		$saved_theme_options             = Options_Theme::get_options();
		$theme_default_font_size_options = Options_Theme::get_default_sizes( $breakpoint );

		$return_value = $saved_theme_options[ $template ][ $breakpoint ][ $key ] ?? $theme_default_font_size_options[ $breakpoint ]['line_height'];
		/**
		 * Filter the font size for a given key.
		 *
		 * @since 1.0.0
		 *
		 * @param string $return_value Value to return.
		 * @param string $template     The template to retrieve the font-sizes for.
		 * @param string $key          Can be font_size, line_height, button_font_size.
		 * @param string $breakpoint   The breakpoint to retrieve the font-size for. (can be desktop|tablet|mobile).
		 */
		return apply_filters( 'quotes_dlx_get_theme_font_sizes', $return_value, $template, $key, $breakpoint );
	}

	/**
	 * Retrieve the plugin title.
	 */
	public static function get_plugin_title() {
		/**
		 * Filer the output of the plugin title.
		 *
		 * Potentially change branding of the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @param string Plugin Menu Name.
		 */
		return apply_filters( 'quotes_dlx_plugin_menu_title', self::get_plugin_name() );
	}

	/**
	 * Returns appropriate html for KSES.
	 *
	 * @param bool $svg Whether to add SVG data to KSES.
	 */
	public static function get_kses_allowed_html( $svg = true ) {
		$allowed_tags = wp_kses_allowed_html();

		$allowed_tags['nav']        = array(
			'class' => array(),
		);
		$allowed_tags['a']['class'] = array();

		if ( ! $svg ) {
			return $allowed_tags;
		}
		$allowed_tags['svg'] = array(
			'xmlns'       => array(),
			'fill'        => array(),
			'viewbox'     => array(),
			'role'        => array(),
			'aria-hidden' => array(),
			'focusable'   => array(),
			'class'       => array(),
		);

		$allowed_tags['path'] = array(
			'd'       => array(),
			'fill'    => array(),
			'opacity' => array(),
		);

		$allowed_tags['g'] = array();

		$allowed_tags['use'] = array(
			'xlink:href' => array(),
		);

		$allowed_tags['symbol'] = array(
			'aria-hidden' => array(),
			'viewBox'     => array(),
			'id'          => array(),
			'xmls'        => array(),
		);

		return $allowed_tags;
	}

	/**
	 * Get the plugin directory for a path.
	 *
	 * @param string $path The path to the file.
	 *
	 * @return string The new path.
	 */
	public static function get_plugin_dir( $path = '' ) {
		$dir = rtrim( plugin_dir_path( QUOTES_DLX_FILE ), '/' );
		if ( ! empty( $path ) && is_string( $path ) ) {
			$dir .= '/' . ltrim( $path, '/' );
		}
		return $dir;
	}

	/**
	 * Return a plugin URL path.
	 *
	 * @param string $path Path to the file.
	 *
	 * @return string URL to to the file.
	 */
	public static function get_plugin_url( $path = '' ) {
		$dir = rtrim( plugin_dir_url( QUOTES_DLX_FILE ), '/' );
		if ( ! empty( $path ) && is_string( $path ) ) {
			$dir .= '/' . ltrim( $path, '/' );
		}
		return $dir;
	}

	/**
	 * Return the nonce action for saving admin options.
	 *
	 * @return string Nonce action value.
	 */
	public static function get_admin_save_nonce() {
		return 'quotes-dlx-admin-save-options';
	}

	/**
	 * Return the nonce action for retrieving (getting) admin options.
	 *
	 * @return string Nonce action value.
	 */
	public static function get_admin_retrieve_nonce() {
		return 'quotes-dlx-admin-retrieve-options';
	}

	/**
	 * Gets the highest priority for a filter.
	 *
	 * @param int $subtract The amount to subtract from the high priority.
	 *
	 * @return int priority.
	 */
	public static function get_highest_priority( $subtract = 0 ) {
		$highest_priority = PHP_INT_MAX;
		$subtract         = absint( $subtract );
		if ( 0 === $subtract ) {
			--$highest_priority;
		} else {
			$highest_priority = absint( $highest_priority - $subtract );
		}
		return $highest_priority;
	}
}

