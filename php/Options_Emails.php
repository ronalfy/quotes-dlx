<?php
/**
 * Helper for the options defaults for the plugin.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Class Options_Emails
 */
class Options_Emails extends Options_Abstract {

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
	private static $options_key = 'quotesdlx_options_emails';

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
			'akismet_enabled'           => true,
			'recaptcha_enabled'         => false,
			'recaptcha_site_key'        => '',
			'captcha_type'              => 'none', // can be none|recaptcha|turnstile.
			'recaptcha_secret_key'      => '',
			'recaptcha_score_threshold' => 0.5,
			'turnstile_site_key'        => '',
			'turnstile_secret'          => '',
			'turnstile_theme'           => 'auto',
			'turnstile_language'        => 'auto',
			'turnstile_widget_size'     => 'normal',
			'from_name'                 => get_bloginfo( 'name' ),
			'from_email'                => get_bloginfo( 'admin_email' ),
			'email_send_type'           => 'form', // can be form|mailto.
			/* Translators: %1$s is the share type (highlight, quote, etc), %2$s is the site name. */
			'email_subject'             => sprintf( __( 'Check out this quote from %2$s', 'quotes-dlx' ), '{{share_type}}', '{{site_name}}' ),
			'email_body'                => _x( "{{from_name}} ({{from_email}}) wants to share a link with you\r\n\n{{share_text}}\r\n\r\n{{post_title}}\r\n{{post_url}}", 'email body with template tags', 'quotes-dlx' ),
			'email_modal_title'         => __( 'Share this Quote', 'quotes-dlx' ),
		);

		/**
		 * Filter for option defaults.
		 *
		 * @since 3.0.0
		 *
		 * @param array Option defaults.
		 */
		$defaults = (array) apply_filters( 'quotes_dlx_options_emails', $defaults );
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
