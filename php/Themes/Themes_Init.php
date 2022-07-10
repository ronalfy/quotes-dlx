<?php
/**
 * Initialize the core block themes.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Class Functions - Singleton class pattern.
 */
class Themes_Init {

	/**
	 * Holds the class instance.
	 *
	 * @var Themes_Init $instance
	 */
	private static $instance = null;

	/**
	 * Return an instance of the class
	 *
	 * Return an instance of the Themes_Init Class.
	 *
	 * @since 1.0.0
	 *
	 * @return Themes_Init class instance.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Main class runner.
	 *
	 * @return Themes_Init.
	 */
	public static function run() {

		// Register any categories.
		Themes_Addon_Categories::register( 'Core', array( 'description' => __( 'Default themes that come with the plugin', 'quotes-dlx' ) ) );

		// Register any themes.
		// Themes_Addon::register(
		// 	'MediaRonLLC\QuotesDLX\Themes\Themes_Light_Branded'
		// );
		// Themes_Addon::register(
		// 	'MediaRonLLC\QuotesDLX\Themes\Themes_Dark'
		// );
		Themes_Addon::register(
			'MediaRonLLC\QuotesDLX\Themes\Themes_Bubble_Gum'
		);
		// Themes_Addon::register(
		// 	'MediaRonLLC\QuotesDLX\Themes\Themes_Purple'
		// );
		// Themes_Addon::register(
		// 	'MediaRonLLC\QuotesDLX\Themes\Themes_Blue'
		// );
		return self::get_instance();
	}
}
