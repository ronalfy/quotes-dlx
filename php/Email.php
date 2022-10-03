<?php
/**
 * Set up Email Ajax interface and callbacks.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

/**
 * Helper class for registering Ajax calls.
 */
class Email {

	/**
	 * Main class runner.
	 *
	 * @return Email.
	 */
	public static function run() {
		$self = new self();

		// For saving/resetting the default options.
		add_action( 'wp_ajax_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );
		add_action( 'wp_ajax_nopriv_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );

		return $self;
	}

	/**
	 * Output the main email interface for emails.
	 */
	public static function ajax_email_interface() {
		$permalink = urldecode( filter_input( INPUT_GET, 'permalink', FILTER_DEFAULT ) );
		if ( ! wp_verify_nonce( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ), 'qdlx_share_' . $permalink ) ) {
			wp_die( 'Invalid request.' );
		}

		wp_register_script(
			'qdlx_email_view',
			Functions::get_plugin_url( 'dist/quotes-dlx-email.js' ),
			array( 'wp-i18n' ),
			Functions::get_plugin_version(),
			false
		);
		wp_register_script(
			'qdlx-recaptcha',
			esc_url_raw( 'https://www.google.com/recaptcha/api.js?render=' . sanitize_text_field( Options_Advanced::get_options( 'recaptcha_site_key' ) ) ),
			array(),
			Functions::get_plugin_version(),
			true
		);
		wp_register_style(
			'qdlx_email_view',
			Functions::get_plugin_url( 'dist/quotes-dlx-email.css' ),
			array(),
			Functions::get_plugin_version(),
			false
		);
		?>
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<?php
				wp_print_styles(
					array( 'qdlx_email_view' ),
				);
				?>
			</head>
			<body>
				<div id="qdlx-email-interface"></div>
				<?php
				wp_print_scripts(
					array(
						'qdlx_email_view',
						'qdlx-recaptcha',
					),
				);
				?>
			</body>
		</html>
		<?php
		exit;
	}
}
