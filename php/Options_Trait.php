<?php
/**
 * Trait of global option methods (can be overridden).
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Default option functions.
 */
trait Options_Trait {
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
	public static function get_options( string $key = '', bool $force_reload = false ) {

		// Try to get cached options value.
		$options = self::$options;

		// Retrieve fresh options if empty or force_reload is true.
		if ( empty( $options ) || true === $force_reload ) {
			$options = get_option( self::$options_key, array() );
		}

		// Parse options with defaults and update options static var.
		$options       = wp_parse_args( $options, self::get_defaults() );
		self::$options = $options;

		// Return part of the options if key exists.
		if ( ! empty( $key ) && array_key_exists( $key, $options ) ) {
			return $options[ $key ];
		}

		// No key specified. Return all options.
		return $options;
	}

	/**
	 * Save options for the plugin.
	 *
	 * @param string       $key to update.
	 * @param array|string $options Options to save.
	 * @param bool         $force True to forcefully retrieve fresh options.
	 *
	 * @return array|null  Options.
	 */
	public static function update_options( string $key = '', $options = array(), $force = false ) {

		$cached_options = self::get_options( '', $force );
		$old_options    = $cached_options;

		if ( is_array( $cached_options ) && array_key_exists( $key, $cached_options ) && is_array( $options ) && array_key_exists( $key, $options ) ) {
			$cached_options[ $key ] = $options[ $key ];
			/**
			 * Filter for saving options.
			 *
			 * @since 1.0.0
			 *
			 * @param array  $cached_options Updated options to save.
			 * @param string $key            Option key.
			 * @param string $old_options    Previous option values.
			 * @param bool   $force          Whether the option retrieval was forced.
			 */
			$cached_options = apply_filters( self::$options_key . '_save_pre', $cached_options, $key, $old_options, $force );
			update_option( self::$options_key, $cached_options );
		} elseif ( is_array( $options ) && empty( $key ) ) {
			$cached_options = wp_parse_args( $options, $cached_options );
			$cached_options = apply_filters( self::$options_key . '_save_pre', $cached_options, $key, $old_options, $force );
			update_option( self::$options_key, $cached_options );
		} elseif ( is_array( $options ) && array_key_exists( $key, $cached_options ) ) {
			$cached_options[ $key ] = $options;
			$cached_options         = apply_filters( self::$options_key . '_save_pre', $cached_options, $key, $old_options, $force );
			update_option( self::$options_key, $cached_options );
		} else {
			return null;
		}
		self::$options = $cached_options;

		return self::$options;
	}
}
