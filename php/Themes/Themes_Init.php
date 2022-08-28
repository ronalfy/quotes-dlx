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

		/**
		 * Run an action just before all default themes are registered.
		 * Use this action and filter below to register your own themes.
		 */
		do_action( 'quotes_dlx_pre_themes_loaded' );

		// Register any categories.
		Themes_Addon_Categories::register( 'Core', array( 'description' => __( 'Default themes that come with the plugin', 'quotes-dlx' ) ) );

		$themes = array(
			'MediaRonLLC\QuotesDLX\Themes\Themes_Bubble_Gum',
			'MediaRonLLC\QuotesDLX\Themes\Themes_Dark',
			'MediaRonLLC\QuotesDLX\Themes\Themes_Light_Branded',
			'MediaRonLLC\QuotesDLX\Themes\Themes_Blue',
			'MediaRonLLC\QuotesDLX\Themes\Themes_Purple',
		);

		/**
		 * Filter the array of themes to register. Use this to add your custom theme in.
		 *
		 * @since 2.0.0
		 *
		 * @param array $themes Theme classes to register.
		 */
		$themes = apply_filters( 'quotes_dlx_themes', $themes );

		if ( empty( $themes ) ) {
			// Add back in default theme (light-branded) if no themes.
			$themes = array(
				'MediaRonLLC\QuotesDLX\Themes\Themes_Light_Branded',
			);
		}

		foreach ( $themes as $theme ) {
			if ( class_exists( $theme ) ) {
				Themes_Addon::register(
					$theme
				);
			}
		}
		/**
		 * Themes have been registed by now. Run a custom action after themes are loaded.
		 *
		 * @param array $themes Array of registered themes.
		 */
		do_action( 'quotes_dlx_after_themes_loaded', $themes );

		return self::get_instance();
	}
}
