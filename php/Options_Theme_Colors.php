<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Theme_Colors
 */
class Options_Theme_Colors extends Options_Abstract {

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
	 * Retrieve default options for the plugin.
	 */
	public static function get_defaults() {
		$defaults = array();

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
