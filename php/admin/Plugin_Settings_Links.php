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
		$docs_url     = 'https://mediaron.com/plugins/quotes-dlx/docs/';
		$sponsor_url  = 'https://github.com/sponsors/MediaRon';
		if ( current_user_can( 'manage_options' ) ) {
			$options_link = sprintf( '<a href="%s">%s</a>', esc_url( $settings_url ), _x( 'Settings', 'Quotes options link', 'quotes-dlx' ) );
			array_unshift( $links, $options_link );
			$docs_link     = sprintf( '<a href="%s">%s</a>', esc_url( $docs_url ), _x( 'Docs', 'Plugin documentation', 'quotes-dlx' ) );
			$sponsors_link = sprintf( '<a href="%s" style="color: green;">%s</a>', esc_url( $sponsor_url ), _x( 'Sponsor', 'Plugin sponsorship', 'quotes-dlx' ) );
			$links[]       = $docs_link;
			$links[]       = $sponsors_link;
		}
		return $links;
	}
}
