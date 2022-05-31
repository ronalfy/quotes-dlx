<?php
/**
 * Helper for the license options for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_License
 */
class Options_License extends Options_Abstract {

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
	private static $options_key = 'quotesdlx_options_license';

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
			'license_valid'     => '',
			'license_key'       => '',
			'license_activated' => false,
			'license_status'    => '',
			'item_name'         => '',
			'expires'           => '',
			'license_limit'     => '',
			'site_count'        => '',
			'activations_left'  => '',
		);

		/**
		 * Filter for option defaults.
		 *
		 * @since 1.0.0
		 *
		 * @param array Option defaults.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_options_license_defaults', $defaults );
		return $defaults;
	}

	/**
	 * Clear/Reset the plugin auto-update options.
	 */
	public static function reset() {
		self::update_options( '', self::get_defaults(), true );
		return self::get_defaults();
	}
}
