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

		// For outputting the email modal interface.
		add_action( 'wp_ajax_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );
		add_action( 'wp_ajax_nopriv_quotes_dlx_email_interface', array( static::class, 'ajax_email_interface' ) );

		// For sending the email.
		add_action( 'wp_ajax_quotes_dlx_send_email', array( static::class, 'ajax_send_email' ) );
		add_action( 'wp_ajax_nopriv_quotes_dlx_send_email', array( static::class, 'ajax_send_email' ) );

		return $self;
	}

	/**
	 * Send an email based on Ajax data.
	 */
	public static function ajax_send_email() {
		$permalink = urldecode( filter_input( INPUT_POST, 'permalink', FILTER_DEFAULT ) );
		if ( ! wp_verify_nonce( filter_input( INPUT_POST, 'nonce', FILTER_DEFAULT ), 'qdlx_share_' . $permalink ) ) {
			wp_die( 'Invalid request.' );
		}

		// Get email vars.
		$email_to      = sanitize_text_field( filter_input( INPUT_POST, 'toEmail', FILTER_DEFAULT ) );
		$email_subject = sanitize_text_field( filter_input( INPUT_POST, 'subject', FILTER_DEFAULT ) );

		if ( ! is_email( $email_to ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'Invalid email address.', 'quotes-dlx' ),
				)
			);
		}

		// Get recaptcha keys.
		$email_options        = Options_Emails::get_options();
		$recaptcha_site_key   = $email_options['recaptcha_site_key'];
		$recaptcha_secret_key = $email_options['recaptcha_secret_key'];
		$score_threshold      = (float) $email_options['recaptcha_score_threshold'];
		$captcha_type         = $email_options['captcha_type'];
		$email_from           = sanitize_text_field( $email_options['from_email'] );
		$email_name           = sanitize_text_field( $email_options['from_name'] );
		$post_id = absint( filter_input( INPUT_POST, 'postId', FILTER_VALIDATE_INT ) );

		if ( 'recaptcha' === $captcha_type ) {
			if ( empty( $recaptcha_site_key ) || empty( $recaptcha_secret_key ) ) {
				wp_send_json_error(
					array(
						'message' => __( 'The site owner has not set reCAPTCHA 3 site keys.', 'quotes-dlx' ),
					)
				);
			}
			$token = sanitize_text_field( filter_input( INPUT_POST, 'recaptchaToken', FILTER_DEFAULT ) );
			if ( ! $token ) {
				wp_send_json_error(
					array(
						'message' => __( 'Invalid reCAPTCHA 3 token.', 'quotes-dlx' ),
					)
				);
			}

			// Now get token back from reCAPTCHA.
			$url      = 'https://www.google.com/recaptcha/api/siteverify';
			$data     = array(
				'secret'   => $recaptcha_secret_key,
				'response' => $token,
			);
			$args     = array(
				'body'      => $data,
				'method'    => 'POST',
				'sslverify' => true,
			);
			$response = wp_remote_post( esc_url( $url ), $args );
			if ( is_wp_error( $response ) ) {
				wp_send_json_error(
					array(
						'message' => __( 'Error validating reCAPTCHA 3 token.', 'quotes-dlx' ),
					)
				);
			}
			$body = json_decode( wp_remote_retrieve_body( $response ), true );
			if ( ! $body['success'] ) {
				wp_send_json_error(
					array(
						'message' => __( 'reCAPTCHA 3 security challenge has failed.', 'quotes-dlx' ),
					)
				);
			}

			// Now check the score with threshold.
			$recaptcha_score = (float) $body['score'];
			if ( $recaptcha_score < $score_threshold ) {
				wp_send_json_error(
					array(
						'message' => __( 'reCAPTCHA 3 security challenge has failed.', 'quotes-dlx' ),
					)
				);
			}
		}

		// Now check Akismet.
		if ( class_exists( 'Akismet' ) ) {
			$akismet_fields                         = array();
			$akismet_fields['comment_type']         = 'quotesdlx';
			$akismet_fields['comment_author']       = $email_name;
			$akismet_fields['comment_author_email'] = $email_from;
			$akismet_fields['comment_author_url']   = '';
			$akismet_fields['comment_content']      = '';
			$akismet_fields['contact_form_subject'] = $email_subject;
			$akismet_fields['comment_author_IP']    = Functions::get_user_ip();
			$akismet_fields['permalink']            = esc_url( urldecode( $permalink ) );
			$akismet_fields['user_ip']              = preg_replace( '/[^0-9., ]/', '', Functions::get_user_ip() );
			$akismet_fields['user_agent']           = '';
			$akismet_fields['referrer']             = is_admin() ? '' : sanitize_text_field( $_SERVER['HTTP_REFERER'] );
			$akismet_fields['blog']                 = get_option( 'home' );

			// Get all the fields and consolidate.
			$akismet_http_query = http_build_query( $akismet_fields );

			// Submit spam check.
			$response = \Akismet::http_post( $akismet_fields, 'comment-check' );

			// Get spam response.
			$maybe_spam = (bool) filter_var( $response[1] ?? false, FILTER_VALIDATE_BOOLEAN );
			if ( $maybe_spam ) {
				wp_send_json_error(
					array(
						'message' => _x( 'The email could not be sent.', 'The email was flagged for spam.', 'quotes-dlx' ),
					)
				);
			}
		}

		// So far so good, let's gather the email variables.
		$email_share_text = wp_kses_post( urldecode( filter_input( INPUT_POST, 'shareText', FILTER_DEFAULT ) ) );
		$email_subject    = str_replace( '{sitename}', get_bloginfo( 'name' ), $email_subject );

		// Retrieve message from options.
		$saved_email_body = trim( $email_options['email_body'] );
		if ( ! empty( $saved_email_body ) ) {
			$message = self::replace_template_tags( $saved_email_body, $post_id, $email_name, $email_from, $email_to, $email_share_text );
		}

		// Set headers.
		$headers   = array();
		$headers[] = sprintf( 'From: %s <%s>', $email_name, $email_from );

		// Send email.
		wp_mail( $email_to, $email_subject, $message, $headers );

		wp_send_json_success(
			array(
				'message' => __( 'Email sent successfully.', 'quotes-dlx' ),
			)
		);
	}

	/**
	 * Output the main email interface for emails.
	 */
	public static function ajax_email_interface() {
		$permalink = urldecode( filter_input( INPUT_GET, 'permalink', FILTER_DEFAULT ) );
		if ( ! wp_verify_nonce( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ), 'qdlx_share_' . $permalink ) ) {
			wp_die( 'Invalid request.' );
		}

		// Get email form type.
		$email_options      = Options_Emails::get_options();
		$email_options      = Functions::sanitize_array_recursive( $email_options );
		$email_type         = $email_options['email_send_type']; // can be form or mailto.
		$recaptcha_site_key = $email_options['recaptcha_site_key'];

		$email_deps = require_once Functions::get_plugin_dir( 'dist/quotes-dlx-email.asset.php' );
		wp_register_script(
			'qdlx_email_view',
			Functions::get_plugin_url( 'dist/quotes-dlx-email.js' ),
			$email_deps['dependencies'],
			$email_deps['version'],
			false
		);
		wp_localize_script(
			'qdlx_email_view',
			'qdlx_email',
			array(
				'recaptcha_site_key'          => $recaptcha_site_key,
				'nonce'                       => sanitize_text_field( filter_input( INPUT_GET, 'nonce', FILTER_DEFAULT ) ),
				'ajaxurl'                     => admin_url( 'admin-ajax.php' ),
				'permalink'                   => urlencode( $permalink ),
				'share_text'                  => urlencode( filter_input( INPUT_GET, 'text', FILTER_DEFAULT ) ),
				'email_type'                  => $email_type,
				'turnstile_theme'             => $email_options['turnstile_theme'],
				'turnstile_site_key'          => $email_options['turnstile_site_key'],
				'turnstile_widget_appearance' => $email_options['turnstile_widget_appearance'],
				'turnstile_widget_size'       => $email_options['turnstile_widget_size'],
				'turnstile_language'          => $email_options['turnstile_language'],
				'captcha_type'                => $email_options['captcha_type'],
			)
		);
		$script_handles = array( 'qdlx_email_view' );
		$captcha_type   = $email_options['captcha_type'];

		if ( 'recaptcha' === $captcha_type ) {
			wp_register_script(
				'qdlx-recaptcha',
				esc_url_raw( 'https://www.google.com/recaptcha/api.js?render=' . sanitize_text_field( $recaptcha_site_key ) ),
				array(),
				Functions::get_plugin_version(),
				true
			);
			$script_handles[] = 'qdlx-recaptcha';
		}
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
					$script_handles
				);
				?>
			</body>
		</html>
		<?php
		exit;
	}

	/**
	 * Replace template tags with actual values.
	 *
	 * @param string $content Content to replace tags in.
	 * @param string $post_id Post ID.
	 * @param string $from_name From name.
	 * @param string $from_email From email.
	 * @param string $to_email To email.
	 * @param string $share_text Share text.
	 *
	 * @return string Content with tags replaced.
	 */
	public static function replace_template_tags( $content, $post_id, $from_name = false, $from_email = false, $to_email = false, $share_text = false ) {
		$site_name    = get_bloginfo( 'name' );
		$site_url     = get_bloginfo( 'url' );
		$post_title   = html_entity_decode( get_the_title( $post_id ) );
		$post_excerpt = get_the_excerpt( $post_id );
		$post_url     = get_permalink( $post_id );
		$from_name    = $from_name ? $from_name : '';
		$from_email   = $from_email ? $from_email : '';
		$to_email     = $to_email ? $to_email : '';
		$share_text   = $share_text ? $share_text : '';
		$date         = date_i18n( get_option( 'date_format' ) );

		$search  = array(
			'{{site_name}}',
			'{{site_url}}',
			'{{post_title}}',
			'{{post_excerpt}}',
			'{{post_url}}',
			'{{from_name}}',
			'{{from_email}}',
			'{{to_email}}',
			'{{share_text}}',
			'{{date}}',
		);
		$replace = array(
			$site_name,
			$site_url,
			$post_title,
			$post_excerpt,
			$post_url,
			$from_name,
			$from_email,
			$to_email,
			$share_text,
			$date,
		);

		$content = str_replace( $search, $replace, $content );
		return $content;
	}
}
