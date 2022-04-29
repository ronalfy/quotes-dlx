<?php
/**
 * Abstract structure of option classes.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Abstract helper options.
 */
abstract class Options_Abstract {

	/**
	 * Retrieve a copy of the static stored options.
	 */
	abstract static function get_stored_options();

	/**
	 * Retrieve a copy of the static options key.
	 */
	abstract static function get_options_key();

	/**
	 * Retrieve option defaults.
	 */
	abstract static function get_defaults();

	/**
	 * Retrieve the plugin's options
	 *
	 * Retrieve the plugin's options based on key.
	 *
	 * @since 1.0.0
	 *
	 * @param string $key Array key to retrieve (if left empty, returns all options).
	 * @param bool   $force_reload Whether to retrieve cached options or forcefully retrieve from the database.
	 * @return array|string All options for key, value for $option, empty array on failure.
	 */
	abstract static function get_options( string $key = '', bool $force_reload = false );

	/**
	 * Save options for the plugin.
	 *
	 * @param string       $key to update.
	 * @param array|string $options Options to save.
	 * @param bool         $force True to forcefully retrieve fresh options.
	 *
	 * @return array|null  Options.
	 */
	abstract static function update_options( string $key = '', $options = array(), $force = false );

	/**
	 * Clear/Reset the plugin auto-update options.
	 */
	abstract static function reset();
}
