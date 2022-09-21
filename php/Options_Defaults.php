<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Defaults
 */
class Options_Defaults extends Options_Abstract {

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
	private static $options_key = 'quotesdlx_options_defaults';

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
			'maximum_width'              => 800,
			'maximum_width_unit'         => 'px',
			'twitter_username'           => '',
			'hashtags'                   => array(),
			'align'                      => 'center',
			'share_button_text'          => __( 'Click to Tweet', 'quotes-dlx' ),
			'tweet_button_alignment'     => 'right',
			'tweet_icon_alignment'       => 'right',
			'tweet_button_display'       => 'full',
			'tweet_button_enabled'       => true,
			'has_anchor'                 => true,
			'anchor_prefix'              => 'qdlx',
			'enable_links_in_tweet'      => true,
			'url_shortening_service'     => 'manual',
			'url_shortener'              => true,
			'enable_contextual_menu'     => true,
			'enable_copy_text'           => true,
			'enable_copy_tweet'          => true,
			'enable_copy_link'           => true,
			'enable_facebook_share'      => true,
			'enable_tweet_this'          => true,
			'enable_share_facebook'      => false,
			'template'                   => 'light-branded',
			'facebook_button_enabled'    => false,
			'facebook_app_id'            => '',
			'facebook_share_button_text' => __( 'Share on Facebook', 'quotes-dlx' ),
		);

		/**
		 * Filter for option defaults.
		 *
		 * @since 1.0.0
		 *
		 * @param array Option defaults.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_options_defaults', $defaults );
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
