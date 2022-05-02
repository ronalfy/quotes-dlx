<?php
/**
 * Plugin Name:       QuotesDLX
 * Plugin URI:        https://mediaron.com/plugins/quotes-dlx/
 * Description:       WordPress Twitter block that makes it dead simple for users to share your quotes.
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            MediaRon LLC
 * Author URI:        https://mediaron.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       quotes-dlx
 * Domain Path:       /languages
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

define( 'QUOTES_DLX_VERSION', '1.0.6' );
define( 'QUOTES_DLX_FILE', __FILE__ );

// Support for site-level autoloading.
if ( file_exists( __DIR__ . '/lib/autoload.php' ) ) {
	require_once __DIR__ . '/lib/autoload.php';
}

/**
 * QuotesDLX class.
 */
class QuotesDLX {

	/**
	 * Holds the class instance.
	 *
	 * @var QuotesDLX $instance
	 */
	private static $instance = null;

	/**
	 * Return an instance of the class
	 *
	 * Return an instance of the QuotesDLX Class.
	 *
	 * @since 1.0.0
	 *
	 * @return QuotesDLX class instance.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class initializer.
	 */
	public function plugins_loaded() {
		load_plugin_textdomain(
			'quotes-dlx',
			false,
			basename( dirname( __FILE__ ) ) . '/languages'
		);

		Blocks::run();
		Ajax::run();

		Admin\Plugin_Settings_Links::run();
		Admin\Register_Menu::run();

		// Example of accessing static class.
		// $hi = Admin\Blah::run();

		add_action( 'init', array( $this, 'init' ) );

		/**
		 * When QuotesDLX can be extended.
		 *
		 * Filter when QuotesDLX can be extended.
		 *
		 * @since 1.0.0
		 */
		do_action( 'quotes_dlx_loaded' );

		// Init all the core themes.
		Themes\Themes_Init::run();
	}

	/**
	 * Init all the things.
	 */
	public function init() {
		// Load all the themes.
		//Themes\Themes_Addon::init_themes();

		//$blah = Themes\Themes_Addon::get_theme_data();
		//die( '<pre>' . print_r( $blah, true ) );
	}
}

add_action(
	'plugins_loaded',
	function() {
		$quotes_dlx = QuotesDLX::get_instance();
		$quotes_dlx->plugins_loaded();
	}
);
