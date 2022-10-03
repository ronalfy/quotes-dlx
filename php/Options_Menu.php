<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Menu
 */
class Options_Menu extends Options_Abstract {

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
	private static $options_key = 'quotesdlx_options_menu';

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
		// Todo - Read values from block.json?
		// Todo - Override block.json?
		$defaults = array(
			'enable_global_contextual_menu' => false,
			'enable_contextual_menu'        => true,
			'enable_email_text'             => false,
			'enable_copy_text'              => true,
			'enable_copy_tweet'             => true,
			'enable_copy_link'              => true,
			'enable_tweet_this'             => true,
			'enable_share_this'             => false,
			'email_text_label'              => __( 'Email Quote', 'quotes-dlx' ),
			'copy_text_label'               => __( 'Copy Quote', 'quotes-dlx' ),
			'copy_tweet_label'              => __( 'Copy Tweet', 'quotes-dlx' ),
			'copy_link_label'               => __( 'Copy Link', 'quotes-dlx' ),
			'tweet_this_label'              => __( 'Tweet This', 'quotes-dlx' ),
			'share_this_label'              => __( 'Share This', 'quotes-dlx' ),
		);

		/**
		 * Filter for option defaults.
		 *
		 * @since 1.0.0
		 *
		 * @param array Option defaults.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_options_menu_defaults', $defaults );
		return $defaults;
	}

	/**
	 * Clear/Reset the plugin auto-update options.
	 *
	 * @param bool $remove Whether to remove the options.
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
