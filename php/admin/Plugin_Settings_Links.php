<?php
/**
 * Add settings links to the plugin screen.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Admin;

use MediaRonLLC\QuotesDLX\Functions as Functions;

/**
 * Add settings links to the plugin screen.
 */
class Plugin_Settings_Links {

	/**
	 * Main class runner.
	 *
	 * @return Plugin_Settings_Link.
	 */
	public static function run() {
		$self = new self();

		add_filter(
			'plugin_action_links_' . Functions::get_plugin_file(),
			array( static::class, 'add_settings_link' )
		);

		return $self;
	}

	/**
	 * Add a settings link to the plugin's options.
	 *
	 * Add a settings link on the WordPress plugin's page.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @see run
	 *
	 * @param array $links Array of plugin options.
	 * @return array $links Array of plugin options
	 */
	public static function add_settings_link( $links ) {
		$settings_url = admin_url( 'options-general.php?page=quotes-dlx' );
		$docs_url     = 'https://qdlx.dlxplugins.com/';
		$site_url     = 'https://dlxplugins.com';
		if ( current_user_can( 'manage_options' ) ) {
			$options_link = sprintf( '<a href="%s">%s</a>', esc_url( $settings_url ), _x( 'Settings', 'Quotes options link', 'quotes-dlx' ) );
			array_unshift( $links, $options_link );
			$docs_link = sprintf( '<a href="%s">%s</a>', esc_url( $docs_url ), _x( 'Docs', 'Plugin documentation', 'quotes-dlx' ) );
			$site_link = sprintf( '<a href="%s">%s</a>', esc_url( $site_url ), _x( 'DLXPlugins', 'Plugin site', 'quotes-dlx' ) );
			$links[]   = $docs_link;
			$links[]   = $site_link;
		}
		return $links;
	}

	/**
	 * Redirects user to import screen after QuotesDLX is activated.
	 *
	 * Redirect user to import screen.
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public static function redirect_to_import_screen() {
		if ( is_admin() && Functions::get_plugin_file() === get_option( 'quotes-dlx-activate' ) ) {
			$settings_url = admin_url( 'options-general.php?page=quotes-dlx' );
			delete_option( 'quotes-dlx-activate' );
			wp_safe_redirect( $settings_url );
			exit;
		}
	}

	/**
	 * Set an option upon activation so we can retrieve it later.
	 */
	public static function plugin_activate() {
		add_option( 'quotes-dlx-activate', Functions::get_plugin_file() );
	}
}
