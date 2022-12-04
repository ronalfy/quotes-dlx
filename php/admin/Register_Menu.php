<?php
/**
 * Initialize admin menu.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Admin;

use MediaRonLLC\QuotesDLX\Functions as Functions;
use MediaRonLLC\QuotesDLX\Options_Defaults as Options_Defaults;
use MediaRonLLC\QuotesDLX\Themes\Themes_Addon as Themes;

/**
 * Create the admin menu.
 */
class Register_Menu {

	/**
	 * Main class runner.
	 *
	 * @return Register_Menu.
	 */
	public static function run() {
		$self = new self();

		add_action( 'admin_menu', array( static::class, 'init_menu' ) );
		add_action( 'admin_enqueue_scripts', array( static::class, 'register_admin_scripts' ) );

		return $self;
	}

	/**
	 * Register the plugin menu.
	 */
	public static function init_menu() {

		add_options_page(
			__( 'QuotesDLX', 'quotes-dlx' ),
			__( 'QuotesDLX', 'quotes-dlx' ),
			'manage_options',
			'quotes-dlx',
			array( '\MediaRonLLC\QuotesDLX\Admin\Settings_Page', 'settings_page' ),
			100
		);
	}

	/**
	 * Register/Enqueue admin scripts/styles.
	 *
	 * @param string $hook Hook for current admin screen.
	 */
	public static function register_admin_scripts( $hook ) {
		if ( 'settings_page_quotes-dlx' !== $hook ) {
			return;
		}
		wp_enqueue_script(
			'quotes-dlx-admin-js',
			Functions::get_plugin_url( 'dist/quotes-dlx-admin-panel.js' ),
			array(),
			Functions::get_plugin_version(),
			true
		);

		// Enqueue admin fonts.
		$admin_font_handles = array(
			'quotes-dlx-gfont-source-sans-pro',
			'quotes-dlx-gfont-lato',
		);
		foreach ( $admin_font_handles as $admin_handle ) {
			wp_enqueue_style(
				$admin_handle,
				esc_url( Functions::get_plugin_url( 'dist/' . $admin_handle . '.css' ) ),
				array(),
				Functions::get_plugin_version(),
				'all'
			);
		}

		wp_enqueue_style(
			'quotes-dlx-admin-css',
			Functions::get_plugin_url( 'dist/quotes-dlx-admin-panel-css.css' ),
			$admin_font_handles,
			Functions::get_plugin_version(),
			'all'
		);
		wp_enqueue_style(
			'quotes-dlx-front-end-css',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			$admin_font_handles,
			Functions::get_plugin_version(),
			'all'
		);

		/**
		 * Filter the output of the block defaults.
		 *
		 * Override the block defaults.
		 *
		 * @since 1.0.0
		 *
		 * @param array $defaults Array of defaults.
		 *
		 * @return array new defaults.
		 */
		$defaults = apply_filters(
			'quotes_dlx_block_defaults',
			Options_Defaults::get_options()
		);

		$themes = Themes::get_theme_data();

		$script_options = array(
			'plugin_url'             => Functions::get_plugin_uri(),
			'plugin_docs_url'        => Functions::get_plugin_docs_uri(),
			'plugin_ratings_url'     => Functions::get_plugin_ratings_uri(),
			'plugin_support_url'     => Functions::get_plugin_support_uri(),
			'plugin_settings_url'    => Functions::get_plugin_settings_uri(),
			'defaults'               => $defaults,
			'themes'                 => $themes,
			'options_save_nonce'     => wp_create_nonce( Functions::get_admin_save_nonce() ),
			'options_retrieve_nonce' => wp_create_nonce( Functions::get_admin_retrieve_nonce() ),
			'options_export_nonce'   => wp_create_nonce( Functions::get_admin_export_nonce() ),
			'bitly_plugin_active'    => Functions::is_activated( 'wp-bitly/wp-bitly.php', 'plugin' ),
			'jetpack_plugin_active'  => Functions::is_activated( 'jetpack/jetpack.php', 'plugin' ),
			'image_dir'              => Functions::get_plugin_url( 'images' ),
		);

		wp_localize_script(
			'quotes-dlx-admin-js',
			'quotes_dlx_admin',
			$script_options
		);
	}
}
