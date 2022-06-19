<?php
/**
 * Set up the blocks and their attributes.
 *
 * @package QuotesDLX
 */

namespace MediaRonLLC\QuotesDLX;

use MediaRonLLC\QuotesDLX\Themes\Themes_Addon as Themes;

/**
 * Helper class for registering blocks.
 */
class Blocks {

	/**
	 * Main class runner.
	 *
	 * @return Blocks.
	 */
	public static function run() {
		$self = new self();
		add_action( 'init', array( $self, 'init' ) );

		return $self;
	}

	/**
	 * Init action callback.
	 */
	public function init() {

		register_block_type(
			Functions::get_plugin_dir( 'php/blocks/tweet-quotes/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		// Enqueue general front-end style.
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );

		// Enqueue block assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_block_editor_scripts' ) );

		// Add SVGs and other footer items we need.
		add_action( 'wp_footer', array( $this, 'add_footer_html' ) );

		// Pre-load font files.
		add_action( 'wp_head', array( $this, 'add_header_fonts_preload' ) );
	}

	/**
	 * Output the front-end structure.
	 *
	 * @param array  $attributes Block editor attributes.
	 * @param string $content   Current content.
	 */
	public function frontend( array $attributes, string $content ) {

		// Get themes.
		$themes = wp_cache_get( 'quotes-dlx-themes' );
		if ( ! $themes ) {
			$themes = Themes::get_theme_data();
			wp_cache_set( 'quotes-dlx-themes', $themes, '', 3600 );
		}

		/**
		 * Filter: quotes_dlx_block_attributes
		 *
		 * Override attributes (useful for overriding defaults or output).
		 *
		 * @since 1.0.0
		 *
		 * @param array  $attributes Pre-sanitized attributes.
		 * @param string $content    Block content.
		 *
		 * @return array Block attributes and values.
		 */
		$attributes = apply_filters( 'quotes_dlx_block_attributes', $attributes, $content );

		/**
		 * Filter: quotes_dlx_block_output
		 *
		 * Short circuit this render and output your own block output.
		 *
		 * @since 1.0.0
		 *
		 * @param bool   false       To not override.
		 * @param array  $attributes Block attributes.
		 * @param string $content    Block content.
		 *
		 * @return bool|string False value for no override, string if override.
		 */
		$custom_output = apply_filters( 'quotes_dlx_block_output', false, $attributes, $content );
		if ( $custom_output ) {
			return $custom_output;
		}

		// Begin the output buffer.
		ob_start();

		$has_anchor             = Functions::sanitize_attribute( $attributes, 'has_anchor', 'boolean' );
		$anchor                 = Functions::sanitize_attribute( $attributes, 'anchor', 'text' );
		$rtl                    = Functions::sanitize_attribute( $attributes, 'rtl', 'boolean' );
		$align                  = Functions::sanitize_attribute( $attributes, 'align', 'text' );
		$template_name          = Functions::sanitize_attribute( $attributes, 'template', 'text' );
		$maximum_width          = Functions::sanitize_attribute( $attributes, 'maximum_width', 'integer' );
		$maximum_width_unit     = Functions::sanitize_attribute( $attributes, 'maximum_width_unit', 'string' );
		$permalink              = $this->get_permalink( $attributes );
		$tweet_button_enabled   = Functions::sanitize_attribute( $attributes, 'tweet_button_enabled', 'boolean' );
		$enable_contextual_menu = Functions::sanitize_attribute( $attributes, 'enable_contextual_menu', 'boolean' );

		// If a theme is removed, find a default fallback.
		$has_theme   = false;
		$first_theme = null;
		if ( is_array( $themes ) ) {
			foreach ( $themes as $theme ) {
				if ( null === $first_theme ) {
					$first_theme = $theme['slug'];
				}
				if ( $template_name === $theme['slug'] ) {
					$has_theme = true;
				}
			}
		}
		if ( ! $has_theme && null !== $first_theme ) {
			$template_name = $first_theme;
		}

		/**
		 * Filter: quotes_dlx_block_template
		 *
		 * Set a new default template.
		 *
		 * @since 1.0.0
		 *
		 * @param string Template name (slug).
		 *
		 * @return string new template name (slug).
		 */
		$template_name = apply_filters( 'quotes_dlx_block_template', $template_name );

		// Set wrapper classes.
		$default_wrapper_classes = array(
			'quotes-dlx',
			'quotes-dlx-container',
			'align' . $align,
			'quotes-dlx-block-theme-' . $template_name,
		);
		if ( $rtl ) {
			$default_wrapper_classes[] = 'rtl';
		}
		if ( ! $enable_contextual_menu ) {
			$default_wrapper_classes[] = 'quotes-dlx-context-menu-disabled';
		}
		if ( ! $tweet_button_enabled ) {
			$default_wrapper_classes[] = 'quotes-dlx-has-no-tweet-button';
		}

		/**
		 * Filter: quotes_dlx_block_wrapper_classes
		 *
		 * Change the block class attributes to output on wrapper.
		 *
		 * @since 1.0.0
		 *
		 * @param array Array of CSS classes.
		 */
		$block_wrapper_classes = apply_filters(
			'quotes_dlx_block_wrapper_classes',
			$default_wrapper_classes
		);

		/**
		 * Filter: quotes_dlx_block_wrapper_id
		 *
		 * Change the block ID attribute to output on wrapper.
		 *
		 * @since 1.0.0
		 *
		 * @param string Anchor text, or empty if none.
		 */
		$block_id         = $has_anchor ? $anchor : '';
		$block_wrapper_id = apply_filters(
			'quotes_dlx_block_wrapper_id',
			$block_id
		);

		/**
		 * Filter: quotes_dlx_block_max_width
		 *
		 * Change the block max-width style attribute.
		 *
		 * @since 1.0.0
		 *
		 * @param string Max-width and unit (e.g., 70vw, 100%, 800px)
		 */
		$max_width_attr = apply_filters(
			'quotes_dlx_block_max_width',
			sprintf(
				'%d%s',
				absint( $maximum_width ),
				sanitize_text_field( $maximum_width_unit )
			)
		);
		?>
		<!-- TQP Container Start -->
		<div id="<?php echo esc_attr( $block_id ? $block_id : '' ); ?>" class="<?php echo esc_attr( implode( ' ', $block_wrapper_classes ) ); ?>" style="<?php echo esc_attr( $max_width_attr ? 'max-width: ' . $max_width_attr . ';' : '' ); ?>">

			<div class="quotes-dlx-wrapper">
				<figure>
					<blockquote class="quotes-dlx-text quotes-dlx-text-wrapper">
					<?php
						$tweet_text_rich = Functions::sanitize_attribute( $attributes, 'share_text', 'raw' );
						echo wp_kses_post( nl2br( $tweet_text_rich ) );
					?>
					</blockquote>
				</figure>
				<?php
				if ( $tweet_button_enabled ) :
					?>
				<div class="quotes-dlx-button-wrapper <?php echo esc_attr( Functions::sanitize_attribute( $attributes, 'tweet_button_alignment', 'string' ) ); ?>">
					<?php
					$tweet_button_display = Functions::sanitize_attribute( $attributes, 'tweet_button_display', 'string' );
					$tweet_icon_alignment = Functions::sanitize_attribute( $attributes, 'tweet_icon_alignment', 'string' );
					$share_button_text    = Functions::sanitize_attribute( $attributes, 'share_button_text', 'raw' );
					$hashtags             = $this->get_hashtags( isset( $attributes['hashtags'] ) ? $attributes['hashtags'] : array(), ',' );
					$twitter_username     = trim( Functions::sanitize_attribute( $attributes, 'twitter_username', 'string' ) );
					$share_button_classes = array(
						'quotes-dlx-button',
						$tweet_button_display,
						'quotes-dlx-button-icon-' . $tweet_icon_alignment,
					);
					?>
					<button class="<?php echo esc_attr( implode( ' ', $share_button_classes ) ); ?>" data-hashtags="<?php echo esc_attr( urlencode( $hashtags ) ); ?>" data-username="<?php echo esc_attr( str_replace( '@', '', $twitter_username ) ); ?>" data-tweet="<?php echo esc_attr( urlencode( $this->get_tweet_text( $attributes ) . "\n\r" ) ); ?>" data-url="<?php echo esc_attr( urlencode( $permalink ? $permalink : '' ) ); ?>">
						<?php
						// Output Twitter text.
						if ( in_array( $tweet_button_display, array( 'full', 'text' ), true ) ) :
							?>
							<span class="quotes-dlx-button-text">
									<?php echo wp_kses_post( $share_button_text ); ?>
							</span>
							<?php
						endif;
						// Output Twitter icon.
						if ( in_array( $tweet_button_display, array( 'full', 'icon' ), true ) ) :
							?>
							<span class="quotes-dlx-button-icon">
								<svg width="24" height="24"><use xlink:href="#quotes-dlx-twitter-icon"></use></svg>
							</span>
							<?php
						endif;
						?>
					</button>
				</div>
				<?php endif; ?>
				<?php
				$enable_contextual_menu = Functions::sanitize_attribute( $attributes, 'enable_contextual_menu', 'boolean' );
				$enable_copy_text       = Functions::sanitize_attribute( $attributes, 'enable_copy_text', 'boolean' );
				$enable_copy_tweet      = Functions::sanitize_attribute( $attributes, 'enable_copy_tweet', 'boolean' );
				$enable_copy_link       = Functions::sanitize_attribute( $attributes, 'enable_copy_link', 'boolean' );
				$enable_tweet_this      = Functions::sanitize_attribute( $attributes, 'enable_tweet_this', 'boolean' );

				if ( $enable_contextual_menu && ( $enable_copy_link || $enable_copy_tweet || $enable_copy_link || $enable_tweet_this ) ) :
					?>
						<div class="quotes-dlx-meatball-menu">
							<div class="quotes-dlx-meatball-content">
								<input
									type="checkbox"
									aria-label="<?php esc_attr_e( 'Open Menu Options', 'quotes_dlx' ); ?>"
								/>
								<ul>
									<?php
									if ( $enable_copy_text ) :
										// Get all text and put in data attribute.

										// Convert rich text to plain text.
										$share_text_kses = (string) $attributes['share_text'];
										?>
										<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-copy-quote" data-text-full="<?php echo esc_attr( esc_html( wp_strip_all_tags( $share_text_kses ) ) ); ?> ">
											<button class="button-reset">
												<span class="quotes-dlx-meatball-menu-icon">
													<svg width="24" height="24"><use xlink:href="#quotes-dlx-quote-left-icon"></use></svg>
												</span>
												<?php esc_html_e( 'Copy Quote', 'quotes_dlx' ); ?>
											</button>
										</li>
										<?php
									endif;
									?>
									<?php
									if ( $enable_copy_tweet ) :
										?>
										<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-copy-tweet">
											<button class="button-reset" data-clipboard-action="copy" data-clipboard-target="#quotes-dlx-tweet-text">
												<span class="quotes-dlx-meatball-menu-icon">
													<svg width="24" height="24"><use xlink:href="#quotes-dlx-copy-icon"></use></svg>
												</span>
												<?php esc_html_e( 'Copy Tweet', 'quotes_dlx' ); ?>
											</button>
											<div class="quotes-dlx-copy-tweet-textarea" style="width: 0; height: 0; display: none;" aria-hidden="true">
												<textarea id="quotes-dlx-tweet-text">
													<?php echo esc_textarea( $this->build_tweet( $attributes ) ); ?>
												</textarea>
											</div>
										</li>
										<?php
									endif;
									?>
									<?php
									if ( $permalink ) :
										?>
										<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-copy-link" data-url="<?php echo esc_attr( $permalink ); ?>">
											<button class="button-reset">
												<span class="quotes-dlx-meatball-menu-icon">
													<svg width="24" height="24"><use xlink:href="#quotes-dlx-link-icon"></use></svg>
												</span>
												<?php esc_html_e( 'Copy Link', 'quotes_dlx' ); ?>
											</button>
										</li>
										<?php
									endif;
									?>
									<?php
									if ( $enable_tweet_this ) :
										?>
										<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-tweet-this">
											<button class="button-reset" data-hashtags="<?php echo esc_attr( urlencode( $hashtags ) ); ?>" data-username="<?php echo esc_attr( str_replace( '@', '', $twitter_username ) ); ?>" data-tweet="<?php echo esc_attr( urlencode( $this->get_tweet_text( $attributes ) . "\n\r" ) ); ?>" data-url="<?php echo esc_attr( urlencode( $permalink ? $permalink : '' ) ); ?>">
												<span class="quotes-dlx-meatball-menu-icon">
													<svg width="24" height="24"><use xlink:href="#quotes-dlx-twitter-icon"></use></svg>
												</span>
												<?php esc_html_e( 'Tweet This', 'quotes_dlx' ); ?>
											</button>
										</li>
										<?php
									endif;
									?>
								</ul>
								<div class="quotes-dlx-meatball-icon-wrapper" aria-hidden="true">
									<div class="quotes-dlx-meatball-icon">
										<span></span>
									</div>
								</div>
							</div>
						</div>
					<?php
					endif;
				?>
			</div>
		</div>
		<!-- TQP Container End -->
		<?php
		return ob_get_clean();
	}

	/**
	 * Get hashtags from passed array of strings.
	 *
	 * @param array  $hashtags  Hashtags to parse (without # symbol).
	 * @param string $separator Hashtag seperator.
	 */
	private function get_hashtags( array $hashtags, $separator = '#' ) {

		$hashtag_return = '';
		if ( is_array( $hashtags ) && ! empty( $hashtags ) ) {
			if ( '#' === $separator ) {
				foreach ( $hashtags as $hashtag ) {
					$hashtag_return .= sprintf(
						'%s%s ',
						$separator,
						$hashtag
					);
				}
			} else {
				if ( strlen( $separator ) > 0 && is_string( $separator ) ) {
					$hashtag_return = implode( $separator, $hashtags );
				}
			}
		}
		return $hashtag_return;
	}

	/**
	 * Get the text for tweeting/copying.
	 *
	 * @param array $attributes Block attributes.
	 * @param bool  $urlencode  Whether to URL encode the output.
	 *
	 * @return string Text to tweet.
	 */
	private function get_tweet_text( array $attributes, bool $urlencode = false ) {
		$tweet_text                  = '';
		$share_text_override_enabled = Functions::sanitize_attribute( $attributes, 'share_text_override_enabled', 'boolean' );
		$share_text                  = Functions::sanitize_attribute( $attributes, 'share_text', 'raw' );
		$share_text_override         = Functions::sanitize_attribute( $attributes, 'share_text_override', 'raw' );

		// Get main tweet text.
		if ( $share_text_override_enabled ) {
			$tweet_text = $share_text_override;
		} else {
			$tweet_text = $share_text;
		}

		// Strip tags.
		$tweet_text = wp_strip_all_tags( $tweet_text, false );

		// Strip any excess space and return.
		$tweet_text = trim( $tweet_text );

		// Maybe URL Encode.
		if ( $urlencode ) {
			$tweet_text = urlencode( $tweet_text );
		}

		return $tweet_text;
	}

	/**
	 * Build the tweet for copying and sharing.
	 *
	 * @param array $attributes Block attributes.
	 *
	 * @return string Tweet to copy/share.
	 */
	private function build_tweet( $attributes ) {

		$hashtags              = isset( $attributes['hashtags'] ) ? $attributes['hashtags'] : array();
		$twitter_username      = Functions::sanitize_attribute( $attributes, 'twitter_username', 'string' );
		$anchor                = Functions::sanitize_attribute( $attributes, 'anchor', 'string' );
		$has_anchor            = Functions::sanitize_attribute( $attributes, 'has_anchor', 'boolean' );
		$enable_links_in_tweet = Functions::sanitize_attribute( $attributes, 'enable_links_in_tweet', 'boolean' );
		$permalink             = Functions::sanitize_attribute( $attributes, 'permalink', 'url' );

		$tweet_content = '';

		// Get main tweet text.
		$tweet_content .= $this->get_tweet_text( $attributes );

		// Trim text.
		if ( '' !== $tweet_content ) {
			$tweet_content .= "\r\n\r\n";
		}

		// Add hashtags.
		if ( count( $hashtags ) > 0 ) {
			$tweet_content .= $this->get_hashtags( $hashtags );
		}

		if ( '' !== $tweet_content && count( $hashtags ) > 0 ) {
			$tweet_content .= "\r\n\r\n";
		}

		// Add via.
		if ( strlen( $twitter_username ) > 0 ) {
			$tweet_content .= 'Via ';
			$tweet_content .= $twitter_username;
		}

		if ( strlen( $permalink ) > 0 && $enable_links_in_tweet ) {
			$tweet_content .= "\r\n\r\n";
			$tweet_content .= esc_url( $permalink ) . ( $has_anchor ? '#' . $anchor : '' );
		}

		return $tweet_content;
	}

	/**
	 * Register theme styles and fonts and return array of handles.
	 *
	 * @return array handles for enqueuing.
	 */
	private function register_theme_styles() {
		$theme_deps = array(); // Stores theme handles for enqueuing.

		// Register fonts (todo: optimize).
		wp_register_style(
			'quotes-dlx-fonts',
			Functions::get_plugin_url( 'dist/quotes-dlx-fonts.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);

		/**
		 * Allow or disallow loading of fonts.
		 *
		 * @since 1.0.0
		 *
		 * @param bool Whether to load the custom fonts or not.
		 */
		$load_fonts = apply_filters( 'quotes_dlx_load_fonts', true );
		if ( $load_fonts ) {
			$theme_deps[] = 'quotes-dlx-fonts';
		}

		// Register themes and handles. (todo: optimize).
		$themes = Themes::get_theme_data();
		foreach ( $themes as $theme ) {
			$dep = 'quotes-dlx-' . $theme['slug'];
			wp_register_style(
				$dep,
				esc_url( $theme['stylesheet'] ),
				array(),
				$theme['version'],
				'all'
			);
			$theme_deps[] = $dep;
		}

		return $theme_deps;
	}

	/**
	 * Register front-end scripts/styles.
	 */
	public function register_frontend_scripts() {
		$theme_deps = $this->register_theme_styles();

		wp_register_style(
			'quotes-dlx-frontend',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			$theme_deps,
			Functions::get_plugin_version(),
			'all'
		);

		if ( has_block( 'mediaron/quotes-dlx' ) ) {
			wp_enqueue_script(
				'quotes-dlx-actions',
				Functions::get_plugin_url( 'dist/quotes-dlx-actions.js' ),
				array( 'wp-i18n', 'wp-a11y' ),
				Functions::get_plugin_version(),
				true
			);
		}

	}

	/**
	 * Register the block editor script with localized vars.
	 */
	public function register_block_editor_scripts() {
		$theme_deps = $this->register_theme_styles();

		// Register styles here because array in block.json fails when using array of styles (enqueues wrong script).
		wp_register_style(
			'quotes-dlx-block-editor',
			Functions::get_plugin_url( 'dist/quotes-dlx-block-editor.css' ),
			$theme_deps,
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'quotes-dlx-block-editor-styles',
			Functions::get_plugin_url( 'build/quotes-dlx.css' ),
			array( 'quotes-dlx-block-editor' ),
			Functions::get_plugin_version(),
			'all'
		);

		wp_register_script(
			'quotes-dlx-block',
			Functions::get_plugin_url( 'build/quotes-dlx.js' ),
			array(),
			Functions::get_plugin_version(),
			true
		);

		// Attempt to get post ID.
		global $post;
		$post_id = isset( $post->ID ) ? $post->ID : 0;

		// Get block defaults.
		$block_defaults = Options_Defaults::get_options();
		// Do a fix for hashtags. Null check.
		$hashtags = $block_defaults['hashtags'] ?? null;
		if ( ! is_array( $hashtags ) ) {
			$block_defaults['hashtags'] = array();
		}

		/**
		 * Filter: quotes_dlx_block_defaults
		 *
		 * Add in block defaults from admin settings.
		 *
		 * @since 1.0.0
		 *
		 * @param array Key value pair of admin defaults.
		 */
		$block_defaults = apply_filters( 'quotes_dlx_block_defaults', $block_defaults );

		wp_localize_script(
			'quotes-dlx-block',
			'tweet_quotes_block_vars',
			array(
				'themes'                   => Themes::get_theme_data(),
				'defaults'                 => $block_defaults,
				'twp_nonce'                => wp_create_nonce( 'twp-click-to-tweet-ajax' ),
				'bitly_plugin_active'      => Functions::is_activated( 'wp-bitly/wp-bitly.php', 'plugin' ),
				'bitly_plugin_short_url'   => get_post_meta( $post_id, '_wpbitly', true ),
				'jetpack_plugin_active'    => Functions::is_activated( 'jetpack/jetpack.php', 'plugin' ),
				'jetpack_plugin_short_url' => function_exists( 'wpme_get_shortlink' ) ? wpme_get_shortlink( $post_id ) : false,
			)
		);
		wp_set_script_translations( 'quotes-dlx-block', 'quotes_dlx' );
	}

	/**
	 * Return a formatted permalink with optional anchor.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @return string|boolean false if no permalink.
	 */
	private function get_permalink( $attributes ) {
		$anchor                = Functions::sanitize_attribute( $attributes, 'anchor', 'string' );
		$has_anchor            = Functions::sanitize_attribute( $attributes, 'has_anchor', 'boolean' );
		$enable_copy_link      = Functions::sanitize_attribute( $attributes, 'enable_copy_link', 'boolean' );
		$enable_links_in_tweet = Functions::sanitize_attribute( $attributes, 'enable_links_in_tweet', 'boolean' );
		$permalink             = Functions::sanitize_attribute( $attributes, 'permalink', 'url' );
		$manual_permalink      = Functions::sanitize_attribute( $attributes, 'manualPermalink', 'url' );
		if ( ! $enable_copy_link ) {
			return false;
		}
		if ( strlen( $permalink ) > 0 && $enable_links_in_tweet ) {
			$permalink = esc_url( $permalink ) . ( $has_anchor ? '#' . $anchor : '' );
			return $permalink;
		} else {
			$permalink = esc_url( $manual_permalink ) . ( $has_anchor ? '#' . $anchor : '' );
			return $permalink;
		}
		return false;
	}

	/**
	 * Add preload meta for the embedded fonts.
	 */
	public function add_header_fonts_preload() {
		if ( ! has_block( 'mediaron/quotes-dlx' ) ) {
			return;
		}

		$font_urls = array(
			Functions::get_plugin_url( 'dist/fonts/lato-v22-latin-300.woff2' ),
			Functions::get_plugin_url( 'dist/fonts/lato-v22-latin-regular.woff2' ),
			Functions::get_plugin_url( 'dist/fonts/lora-v23-latin-italic.woff2' ),
			Functions::get_plugin_url( 'dist/fonts/open-sans-v28-latin-300.woff2' ),
			Functions::get_plugin_url( 'dist/fonts/open-sans-v28-latin-regular.woff2' ),
		);

		/**
		 * Font URLs to pre-load.
		 *
		 * @since 1.0.0
		 *
		 * @param array Array of font URLs to preload.
		 */
		$font_urls = apply_filters( 'quotes_dlx_preload_font_urls', $font_urls );

		// Output meta.
		foreach ( $font_urls as $font_url ) {
			?>
			<link rel="preload" href="<?php echo esc_url( $font_url ); ?>" as="font" type="font/woff2" crossorigin="anonymous">
			<?php
		}
	}

	/**
	 * Add general interface and SVG sprites.
	 */
	public function add_footer_html() {
		if ( ! has_block( 'mediaron/quotes-dlx' ) ) {
			return;
		}
		?>
		<svg width="0" height="0" class="hidden" style="display: none;">
			<symbol aria-hidden="true" data-prefix="fas" data-icon="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-twitter-icon">
				<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-copy-icon">
				<path d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="quote-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-quote-left-icon">
				<path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="link-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id="quotes-dlx-link-icon">
				<path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/>
			</symbol>
		</svg>
		<?php
	}
}
