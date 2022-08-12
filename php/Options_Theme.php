<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Theme
 */
class Options_Theme extends Options_Abstract {

	use Options_Trait;

	/**
	 * A static cached version of the main options for the plugin.
	 *
	 * @var array $options
	 */
	private static $options = array();

	/**
	 * Options key.
	 *
	 * @var string $options_key The key when saving the options.
	 */
	private static $options_key = 'quotesdlx_theme_colors';

	/**
	 * Retrieve a copy of the static stored options.
	 */
	public static function get_stored_options() {
		return self::$options;
	}

	/**
	 * Retrieve a copy of the static options key.
	 */
	public static function get_options_key() {
		return self::$options_key;
	}

	/**
	 * Return the default sizes for a given screen size.
	 *
	 * @param string $screen_size desktop|tablet|mobile|all.
	 */
	public static function get_default_sizes( $screen_size = 'desktop' ) {
		$sizes = array(
			'desktop' => array(
				'font_size'        => 16,
				'line_height'      => 1.65,
				'button_font_size' => 16,
			),
			'tablet'  => array(
				'font_size'        => 15,
				'line_height'      => 1.35,
				'button_font_size' => 15,
			),
			'mobile'  => array(
				'font_size'        => 14,
				'line_height'      => 1.2,
				'button_font_size' => 14,
			),
		);

		if ( 'all' === $screen_size ) {
			/**
			 * Filter for font, line, and button size defaults (all sizes).
			 *
			 * @since 1.0.0
			 *
			 * @param array Default sizes separated by device type.
			 */
			return apply_filters( 'quotes_dlx_theme_sizes_defaults_all', $sizes );
		}

		$size_options = $sizes[ $screen_size ] ?? false;
		if ( ! $size_options ) {
			return array();
		}

		/**
		 * Filter for font, line, and button size defaults for screen size.
		 * Screen size can be desktop, tablet, mobile.
		 *
		 * @since 1.0.0
		 *
		 * @param array  $size_options Size options for screen size.
		 * @param string $screen_size  The screen size (desktop, tablet, mobile).
		 */
		return apply_filters( 'quotes_dlx_theme_sizes_defaults_' . $screen_size, $size_options, $screen_size );
	}

	/**
	 * Return the default size for a given screen size and key.
	 *
	 * @param string $screen_size desktop|tablet|mobile|all.
	 * @param string $key         font_size|line_height|button_font_size.
	 */
	public static function get_default_size( $screen_size = 'desktop', $key = 'font_size' ) {
		$defaults   = self::get_default_sizes( $screen_size );
		$size_value = $defaults[ $key ] ?? false;
		if ( ! $size_value ) {
			return false;
		}

		/**
		 * Filter for retrieving a screen size value.
		 *
		 * @since 1.0.0
		 *
		 * @param int|float $size_value  Size value for screen size and key.
		 * @param string    $screen_size The screen size (desktop, tablet, mobile).
		 * @param string    $key         The key for the size value (font_size, line_height, button_font_size).
		 */
		return apply_filters( 'quotes_dlx_theme_sizes_' . $key . '_' . $screen_size, $size_value, $screen_size, $key );
	}

	/**
	 * Retrieve default options for the plugin.
	 */
	public static function get_defaults() {
		$defaults = array(
			'font_size' => '16px',
		);

		/**
		 * Filter for option defaults.
		 *
		 * @since 1.0.0
		 *
		 * @param array Option defaults.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_theme_colors_defaults', $defaults );
		return $defaults;
	}

	/**
	 * Clear/Reset the plugin auto-update options.
	 */
	public static function reset() {
		self::update_options( '', self::get_defaults(), true );
		return self::get_defaults();
	}

	/**
	 * Get the theme colors based on template.
	 *
	 * @param string $template The template slug to get color options for.
	 *
	 * @return array Array of color options.
	 */
	public static function get_theme_colors( $template ) {
		$options      = self::get_options();
		$saved_colors = $options[ $template ] ?? false;
		$themes       = Themes\Themes_Addon::get_theme_data( $template );

		// Check that there's theme data.
		if ( ! $themes ) {
			return array();
		}

		if ( false === $saved_colors || ! is_array( $saved_colors ) || empty( $saved_colors ) ) {
			$saved_colors = $themes['colors'];
		}

		return $saved_colors;
	}
}
