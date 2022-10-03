<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Advanced
 */
class Options_Advanced extends Options_Abstract {

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
	private static $options_key = 'quotesdlx_options_advanced';

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
		$defaults = array(
			'enable_fonts'                  => true,
			'enable_custom_fonts'           => false,
			'custom_font_primary'           => '',
			'custom_font_secondary'         => '',
			'primary_font_family'           => 'lato',
			'secondary_font_family'         => 'open-sans',
			'enable_adobe_fonts'            => false,
			'adobe_fonts'                   => array(),
			'adobe_project_id'              => '',
			'activate_adobe_fonts_admin'    => false,
			'activate_adobe_fonts_frontend' => false,
			'facebook_app_id'               => '',
			'recaptcha_enabled'             => false,
			'recaptcha_site_key'            => '',
			'recaptcha_secret_key'          => '',
			'recaptcha_score_threshold'     => 0.5,
		);

		/**
		 * Filter for option advanced.
		 *
		 * @since 1.0.0
		 *
		 * @param array Option advanced.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_options_advanced', $defaults );
		return $defaults;
	}

	/**
	 * Clear/Reset the plugin auto-update options.
	 *
	 * @param bool $remove Remove the options.
	 */
	public static function reset( $remove = false ) {
		if ( $remove ) {
			delete_site_option( self::$options_key );
		} else {
			self::update_options( '', self::get_defaults(), true );
		}
		return self::get_defaults();
	}
}
