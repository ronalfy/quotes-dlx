<?php
/**
 * Plugin Name:       QuotesDLX
 * Plugin URI:        https://mediaron.com/plugins/quotes-dlx/
 * Description:       The quickest way to insert quotes into your WordPress site.
 * Version:           3.2.0
 * Requires at least: 7.0
 * Requires PHP:      8.2
 * Author:            DLX Plugins
 * Author URI:        https://dlxplugins.com
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       quotes-dlx
 * Domain Path:       /languages
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

define( 'QUOTES_DLX_VERSION', '3.2.0' );
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

		Blocks::run();
		Ajax::run();
		Adobe_Fonts::run();

		Admin\Plugin_Settings_Links::run();
		Admin\Register_Menu::run();
		self::purge_legacy_license_data();
		self::remove_email_feature();

		add_action( 'init', array( $this, 'init' ) );

		/**
		 * When QuotesDLX can be extended.
		 *
		 * Filter when QuotesDLX can be extended.
		 *
		 * @since 1.0.0
		 */
		do_action( 'quotes_dlx_loaded' );
	}

	/**
	 * Init all the things.
	 */
	public function init() {

		// Init all the core themes.
		Themes\Themes_Init::run();
	}

	/**
	 * Remove stored EDD license data left by earlier versions.
	 *
	 * Runs once per site. Shared EDD updater caches are left alone so other
	 * plugins using the same store are not affected.
	 */
	private static function purge_legacy_license_data() {
		if ( get_option( 'quotesdlx_license_data_purged' ) ) {
			return;
		}

		delete_option( 'quotesdlx_options_license' );
		delete_site_option( 'quotesdlx_options_license' );
		delete_site_transient( 'quotes_dlx_core_license_check' );
		update_option( 'quotesdlx_license_data_purged', '1', false );
	}

	/**
	 * Remove the quote email feature and any stored mail or captcha secrets.
	 */
	private static function remove_email_feature() {
		if ( get_option( 'quotesdlx_email_feature_removed' ) ) {
			return;
		}

		delete_option( 'quotesdlx_options_emails' );
		delete_site_option( 'quotesdlx_options_emails' );
		Options_Menu::update_options(
			'',
			array(
				'enable_email_text' => false,
			)
		);
		update_option( 'quotesdlx_email_feature_removed', '1', false );
	}
}

add_action(
	'plugins_loaded',
	function () {
		$quotes_dlx = QuotesDLX::get_instance();
		$quotes_dlx->plugins_loaded();
	}
);
register_activation_hook( __FILE__, array( '\MediaRonLLC\QuotesDLX\Admin\Plugin_Settings_Links', 'plugin_activate' ) );
add_action( 'admin_init', array( '\MediaRonLLC\QuotesDLX\Admin\Plugin_Settings_Links', 'redirect_to_import_screen' ) );
