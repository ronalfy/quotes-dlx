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
			Functions::get_plugin_dir( 'build/js/blocks/tweet-quotes/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/cite/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend_cite_block' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/quotes-dlx-blockquote/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend_blockquote_block' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/social-bar/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend_cite_block' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/click-to-share-buttons/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend_cite_block' ),
			)
		);

		register_block_type(
			Functions::get_plugin_dir( 'build/js/blocks/rating/block.json' ),
			array(
				'render_callback' => array( $this, 'frontend_cite_block' ),
			)
		);

		// Enqueue general front-end style.
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'register_font_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_font_scripts' ) );

		// Enqueue block assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_block_editor_scripts' ) );

		// Add SVGs and other footer items we need.
		add_action( 'wp_footer', array( $this, 'add_footer_html' ) );
		add_action( 'admin_footer', array( $this, 'add_footer_html' ) );

		// Pre-load font files.
		add_action( 'wp_head', array( $this, 'add_header_fonts_preload' ) );

		// Output styles based on block attributes.
		add_action( 'quotes_dlx_before_modal_scripts', array( $this, 'add_modal_styles' ) );

		if ( is_admin() ) {
			add_action( 'admin_head', array( $this, 'maybe_output_scripts_styles' ), 500 );
		} else {
			add_action( 'wp_head', array( $this, 'maybe_output_scripts_styles' ), 500 );
		}
	}

	/**
	 * Add mobile style roots.
	 *
	 * @param string $template The template slug.
	 */
	public function add_modal_styles( $template ) {
		$this->output_theme_style_root();
	}

	/**
	 * Register the fonts for the front-end and back-end.
	 *
	 * Grab the font CSS in the dist folder.
	 * Check if we're in the admin and in the post editor
	 * Check to see if we're on a singular page.
	 * Get the primary and secondary fonts from the default options.
	 * Check to see if the primary font is an Adobe font.
	 * If it is, enqueue the Adobe Fonts stylesheet.
	 * Check to see if the secondary font is an Adobe font.
	 * If it is, enqueue the Adobe Fonts stylesheet.
	 * If not adobe fonts, check if a font is custom.
	 * If it is, exit gracefully.
	 * Get the font family's css file in the dist folder.
	 * If the file exists, enqueue the stylesheet.
	 *
	 * @param string $hook Hook for current admin screen.
	 */
	public function register_font_scripts( $hook ) {
		global $post;

		$can_enqueue = false;

		// Check to see if we're in the admin and in the post editor.
		if ( is_admin() && ( isset( $post->post_content ) ) ) {
			$can_enqueue = true;
		}

		if ( ! ( is_singular() || is_page() ) && 'settings_page_quotes_dlx' !== $hook && ! $can_enqueue ) {
			return;
		}
		$primary_font   = Options_Advanced::get_options( 'primary_font_family' );
		$secondary_font = Options_Advanced::get_options( 'secondary_font_family' );

		// Check for custom value in the primary font and secondary font.
		if ( 'custom' === $primary_font && 'custom' === $secondary_font ) {
			return;
		}

		$can_enqueue_primary   = true;
		$can_enqueue_secondary = true;
		if ( is_singular() || is_page() ) {
			$blocks = parse_blocks( $post->post_content );
			$this->print_block_fonts( $blocks );
		}

		if ( ( Functions::is_adobe_font( $primary_font && $can_enqueue_primary ) ) || ( Functions::is_adobe_font( $secondary_font ) && $can_enqueue_secondary ) ) {
			$project_id = Options_Advanced::get_options( 'adobe_project_id' );

			// Enqueue the Adobe Fonts stylesheet.
			Adobe_Fonts::set_dns_prefetch();
			Adobe_Fonts::enqueue_adobe_fonts( $project_id );
		}

		if ( ! Functions::is_adobe_font( $primary_font ) && 'custom' !== $primary_font && $can_enqueue_primary ) {
			$primary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $primary_font . '.css' );
			wp_enqueue_style(
				'quotes-dlx-gfont-' . $primary_font,
				esc_url( $primary_font_url ),
				array(),
				Functions::get_plugin_version(),
				'all'
			);
		}
		if ( ! Functions::is_adobe_font( $secondary_font ) && 'custom' !== $secondary_font && $can_enqueue_secondary ) {
			$secondary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $secondary_font . '.css' );
			wp_enqueue_style(
				'quotes-dlx-gfont-' . $secondary_font,
				esc_url( $secondary_font_url ),
				array(),
				Functions::get_plugin_version(),
				'all'
			);
		}
	}

	/**
	 * Parse a block and output scripts/styles.
	 *
	 * @see register_frontend_scripts for registering.
	 */
	public function maybe_output_scripts_styles() {
		global $post;

		// Check for post content.
		$post_content = $post->post_content ?? '';
		if ( ! is_a( $post, 'WP_Post' ) ) {
			return;
		}
		if ( is_admin() ) {
			$this->output_theme_style_root();
			return;
		}
		$blocks = parse_blocks( $post_content );
		$this->print_block_styles( $blocks );
		$this->print_fancybox_styles( $blocks );
	}

	/**
	 * Recursive function for printing out any block styles.
	 *
	 * @param array $blocks Array of blocks to parse.
	 */
	public function print_block_fonts( $blocks ) {
		if ( ! empty( $blocks ) ) {
			foreach ( $blocks as $block ) {
				if ( 'mediaron/quotes-dlx' === $block['blockName'] ) {
					$template = $block['attrs']['template'] ?? false;
					// Try to get default template if there is no template.
					if ( ! $template ) {
						$block_defaults = Options_Defaults::get_defaults();
						$template       = $block_defaults['template'] ?? false;
					}
					$template = $block['attrs']['template'] ?? false;
					if ( $template ) {
						$theme_options             = Options_Theme::get_options( $template );
						$theme_enable_custom_fonts = (bool) ( $theme_options['enable_custom_fonts'] ?? false );
						if ( ! $theme_enable_custom_fonts ) {
							continue;
						}

						// Get primary font family for the theme and see if we can override the fonts set in the advanced section.
						$primary_theme_font_family = $theme_options['primary_font_family'] ?? '';
						if ( ! empty( $primary_theme_font_family ) ) {
							$can_enqueue_primary = false;
						}

						$secondary_theme_font_family = $theme_options['secondary_font_family'] ?? '';
						if ( ! empty( $secondary_theme_font_family ) ) {
							$can_enqueue_secondary = false;
						}

						// Now enqueue the fonts for the theme.
						if ( Functions::is_adobe_font( $primary_theme_font_family ) || Functions::is_adobe_font( $secondary_theme_font_family ) ) {
							$project_id = Options_Advanced::get_options( 'adobe_project_id' );
							Adobe_Fonts::set_dns_prefetch();
							Adobe_Fonts::enqueue_adobe_fonts( $project_id );
						}
						if ( ! Functions::is_adobe_font( $primary_theme_font_family ) && 'custom' !== $primary_theme_font_family ) {
							$primary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $primary_theme_font_family . '.css' );
							wp_enqueue_style(
								'quotes-dlx-gfont-' . $primary_theme_font_family,
								esc_url( $primary_font_url ),
								array(),
								Functions::get_plugin_version(),
								'all'
							);
						}
						if ( ! Functions::is_adobe_font( $secondary_theme_font_family ) && 'custom' !== $secondary_theme_font_family ) {
							$secondary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $secondary_theme_font_family . '.css' );
							wp_enqueue_style(
								'quotes-dlx-gfont-' . $secondary_theme_font_family,
								esc_url( $secondary_font_url ),
								array(),
								Functions::get_plugin_version(),
								'all'
							);
						}
					}
				}
				if ( ! empty( $block['innerBlocks'] ) ) {
					$this->print_block_fonts( $block['innerBlocks'] );
				}
			}
		}
	}

	/**
	 * Recursive function for printing out any block styles.
	 *
	 * @param array $blocks Array of blocks to parse.
	 */
	public function print_block_styles( $blocks ) {
		if ( ! empty( $blocks ) ) {
			foreach ( $blocks as $block ) {
				if ( 'mediaron/quotes-dlx' === $block['blockName'] ) {
					$template = $block['attrs']['template'] ?? false;
					// Try to get default template if there is no template.
					if ( ! $template ) {
						$block_defaults = Options_Defaults::get_defaults();
						$template       = $block_defaults['template'] ?? false;
					}
					if ( $template ) {
						$handle = 'quotes-dlx-' . $template;
						if ( ! wp_script_is( $handle, 'done' ) ) {
							$this->output_theme_style_root();
							wp_print_styles( array( $handle ) );
						}
					}
				}
				if ( ! empty( $block['innerBlocks'] ) ) {
					$this->print_block_styles( $block['innerBlocks'] );
				}
			}
		}
	}

	/**
	 * Recursive function for printing out fancybox styles.
	 *
	 * @param array $blocks Array of blocks to parse.
	 */
	public function print_fancybox_styles( $blocks ) {
		if ( ! empty( $blocks ) ) {
			foreach ( $blocks as $block ) {
				if ( 'mediaron/quotes-dlx' === $block['blockName'] ) {
					$email_text_option             = (bool) ( $block['attrs']['enable_email_text'] ?? false );
					$enable_global_contextual_menu = (bool) Options_Menu::get_options( 'enable_global_contextual_menu' );
					if ( $enable_global_contextual_menu ) {
						$email_text_option = (bool) Options_Menu::get_options( 'enable_email_text' );
					}
					if ( $email_text_option ) {
						$handle = 'quotes-dlx-fancybox';
						if ( ! wp_script_is( $handle, 'done' ) ) {
							wp_print_styles( array( $handle ) );
						}
						wp_enqueue_script( 'quotes-dlx-fancybox' );
					}
				}
				if ( ! empty( $block['innerBlocks'] ) ) {
					$this->print_fancybox_styles( $block['innerBlocks'] );
				}
			}
		}
	}


	/**
	 * Print out root css vars for the block.
	 */
	private function output_theme_style_root() {
		// Get themes.
		$themes = Themes::get_theme_data();

		// Set color root variables.
		foreach ( $themes as $theme ) {
			$theme_colors = Options_Theme::get_theme_colors( $theme['slug'] );
			if ( ! empty( $theme_colors ) ) {
				?>
				<style>
					:root {
				<?php
				foreach ( $theme_colors as $color ) {
					echo esc_html(
						sprintf(
							'--qdlx-%s-%s: %s;',
							esc_attr( $theme['slug'] ),
							esc_attr( $color['slug'] ),
							esc_attr( $color['color'] )
						)
					);
				}
				?>
					}
				</style>
				<?php
			}
		}

		// Get options.
		$options                         = Options_Defaults::get_options();
		$options_advanced                = Options_Advanced::get_options();
		$saved_theme_options             = Options_Theme::get_options();
		$theme_default_font_size_options = Options_Theme::get_default_sizes( 'all' );
		// Set breakpoints and font family variables.
		?>
			<style>
				:root {
					--qdlx-primary-font-family: <?php echo Functions::get_primary_font_family_css(); ?>;
					--qdlx-secondary-font-family: <?php echo Functions::get_secondary_font_family_css(); ?>;
					--qdlx-var-breakpoint-mobile: <?php echo esc_html( (float) $options_advanced['mobile_breakpoint'] ) . 'px'; ?>;
					--qdlx-var-breakpoint-tablet: <?php echo esc_html( (float) $options_advanced['tablet_breakpoint'] ) . 'px'; ?>;
					--qdlx-var-breakpoint-desktop: <?php echo esc_html( (float) $options_advanced['desktop_breakpoint'] ) . 'px'; ?>;
				}
			</style>
			<style>
				:root {
					<?php
					foreach ( $themes as $theme_options ) {
						// Line height.
						echo sprintf(
							'--qdlx-%s-line-height-mobile: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'mobile' ) )
						);
						echo sprintf(
							'--qdlx-%s-line-height-tablet: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'tablet' ) )
						);
						echo sprintf(
							'--qdlx-%s-line-height-desktop: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'desktop' ) )
						);

						// Font sizes.
						echo sprintf(
							'--qdlx-%s-font-size-mobile: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'mobile' ) )
						);
						echo sprintf(
							'--qdlx-%s-font-size-tablet: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'tablet' ) )
						);
						echo sprintf(
							'--qdlx-%s-font-size-desktop: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'desktop' ) )
						);

						// Button Font Sizes.
						echo sprintf(
							'--qdlx-%s-button-font-size-mobile: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'button_font_size', 'mobile' ) )
						);
						echo sprintf(
							'--qdlx-%s-button-font-size-tablet: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'button_font_size', 'tablet' ) )
						);
						echo sprintf(
							'--qdlx-%s-button-font-size-desktop: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'button_font_size', 'desktop' ) )
						);

						// Check to see if we need to override the font families returned. This is typically used in the Advanced section of the admin options.
						$override_theme_fonts  = false;
						$primary_font_family   = sanitize_text_field( filter_input( INPUT_GET, 'primary_font_family', FILTER_DEFAULT ) );
						$secondary_font_family = sanitize_text_field( filter_input( INPUT_GET, 'secondary_font_family', FILTER_DEFAULT ) );
						if ( ! empty( $primary_font_family ) && ! empty( $secondary_font_family ) ) {
							$override_theme_fonts = true;
							echo sprintf(
								'--qdlx-%s-primary-font-family: %s;',
								esc_attr( $theme_options['slug'] ),
								sanitize_text_field( Functions::format_font_family( $primary_font_family ) )
							);
							echo sprintf(
								'--qdlx-%s-secondary-font-family: %s;',
								esc_attr( $theme_options['slug'] ),
								sanitize_text_field( Functions::format_font_family( $secondary_font_family ) )
							);
						}

						// Set theme fonts.
						$custom_theme_options = Options_Theme::get_options( $theme_options['slug'] );
						$allow_custom_fonts   = (bool) ( $custom_theme_options['enable_custom_fonts'] ?? false );
						if ( $allow_custom_fonts && ! $override_theme_fonts ) {
							$format_for_display   = true;
							$theme_primary_font   = Functions::get_font_family( 'primary', $theme_options['slug'], $format_for_display );
							$theme_secondary_font = Functions::get_font_family( 'secondary', $theme_options['slug'], $format_for_display );
							if ( $theme_primary_font ) {
								echo sprintf(
									'--qdlx-%s-primary-font-family: %s;',
									esc_attr( $theme_options['slug'] ),
									sanitize_text_field( $theme_primary_font )
								);
							}
							if ( $theme_secondary_font ) {
								echo sprintf(
									'--qdlx-%s-secondary-font-family: %s;',
									esc_attr( $theme_options['slug'] ),
									sanitize_text_field( $theme_secondary_font )
								);
							}
						}
					}
					?>
				}
		</style>
		<?php

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

		$has_anchor              = Functions::sanitize_attribute( $attributes, 'has_anchor', 'boolean' );
		$anchor                  = Functions::sanitize_attribute( $attributes, 'anchor', 'text' );
		$rtl                     = Functions::sanitize_attribute( $attributes, 'rtl', 'boolean' );
		$align                   = Functions::sanitize_attribute( $attributes, 'align', 'text' );
		$template_name           = Functions::sanitize_attribute( $attributes, 'template', 'text' );
		$maximum_width           = Functions::sanitize_attribute( $attributes, 'maximum_width', 'integer' );
		$maximum_width_unit      = Functions::sanitize_attribute( $attributes, 'maximum_width_unit', 'string' );
		$permalink               = $this->get_permalink( $attributes );
		$tweet_button_enabled    = Functions::sanitize_attribute( $attributes, 'tweet_button_enabled', 'boolean' );
		$facebook_button_enabled = Functions::sanitize_attribute( $attributes, 'facebook_button_enabled', 'boolean' );
		$enable_contextual_menu  = Functions::sanitize_attribute( $attributes, 'enable_contextual_menu', 'boolean' );

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
		if ( ! $tweet_button_enabled && ! $facebook_button_enabled ) {
			$default_wrapper_classes[] = 'quotes-dlx-quotes-dlx-no-tweet-button';
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
				<div class="quotes-dlx-content-wrapper">
					<figure>
						<blockquote class="quotes-dlx-text quotes-dlx-text-wrapper quotes-dlx-share-blocks">
							<?php echo wp_kses_post( $content ); ?>
						</blockquote>
					</figure>
					<?php
					$tweet_button_display       = Functions::sanitize_attribute( $attributes, 'tweet_button_display', 'string' );
					$tweet_icon_alignment       = Functions::sanitize_attribute( $attributes, 'tweet_icon_alignment', 'string' );
					$share_button_text          = Functions::sanitize_attribute( $attributes, 'share_button_text', 'raw' );
					$hashtags                   = $this->get_hashtags( isset( $attributes['hashtags'] ) ? $attributes['hashtags'] : array(), ',' );
					$twitter_username           = trim( Functions::sanitize_attribute( $attributes, 'twitter_username', 'string' ) );
					$share_button_classes       = array(
						'quotes-dlx-button',
						$tweet_button_display,
						'quotes-dlx-button-icon-' . $tweet_icon_alignment,
					);
					$facebook_button_enabled    = Functions::sanitize_attribute( $attributes, 'facebook_button_enabled', 'boolean' );
					$facebook_share_button_text = Functions::sanitize_attribute( $attributes, 'facebook_share_button_text', 'raw' );
					if ( $tweet_button_enabled || $facebook_button_enabled ) :
						?>
					<div class="quotes-dlx-button-wrapper <?php echo esc_attr( Functions::sanitize_attribute( $attributes, 'tweet_button_alignment', 'string' ) ); ?>">
						<?php
						if ( $tweet_button_enabled ) :
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
							<?php
						endif;
						if ( $facebook_button_enabled ) {
							$share_button_classes[] = 'qdlx-facebook-button';
							?>
							<button class="<?php echo esc_attr( implode( ' ', $share_button_classes ) ); ?>" data-facebook-text="<?php echo esc_attr( urlencode( $this->get_tweet_text( $attributes ) . "\n\r" ) ); ?>" data-url="<?php echo esc_attr( urlencode( $permalink ? $permalink : '' ) ); ?>">
							<?php
							// Output Twitter text.
							if ( in_array( $tweet_button_display, array( 'full', 'text' ), true ) ) :
								?>
								<span class="quotes-dlx-button-text">
										<?php echo wp_kses_post( $facebook_share_button_text ); ?>
								</span>
								<?php
							endif;
							// Output Twitter icon.
							if ( in_array( $tweet_button_display, array( 'full', 'icon' ), true ) ) :
								?>
								<span class="quotes-dlx-button-icon">
									<svg width="24" height="24"><use xlink:href="#quotes-dlx-facebook-icon"></use></svg>
								</span>
								<?php
							endif;
							?>
						</button>
							<?php
						}
						?>
					</div>
				<?php endif; ?>
				</div>
				<?php
				$enable_contextual_menu = Functions::sanitize_attribute( $attributes, 'enable_contextual_menu', 'boolean' );
				$enable_copy_text       = Functions::sanitize_attribute( $attributes, 'enable_copy_text', 'boolean' );
				$enable_copy_tweet      = Functions::sanitize_attribute( $attributes, 'enable_copy_tweet', 'boolean' );
				$enable_copy_link       = Functions::sanitize_attribute( $attributes, 'enable_copy_link', 'boolean' );
				$enable_tweet_this      = Functions::sanitize_attribute( $attributes, 'enable_tweet_this', 'boolean' );
				$enable_share_this      = Functions::sanitize_attribute( $attributes, 'enable_share_this', 'boolean' );
				$enable_email_text      = Functions::sanitize_attribute( $attributes, 'enable_email_text', 'boolean' );

				// Get text label values.
				$copy_text_label   = Options_Menu::get_options( 'copy_text_label' );
				$copy_tweet_label  = Options_Menu::get_options( 'copy_tweet_label' );
				$copy_link_label   = Options_Menu::get_options( 'copy_link_label' );
				$email_quote_label = Options_Menu::get_options( 'email_text_label' );
				$tweet_this_label  = Options_Menu::get_options( 'tweet_this_label' );
				$share_this_label  = Options_Menu::get_options( 'share_this_label' );

				// Check to see if global options are set.
				$enable_global_contextual_menu = (bool) Options_Menu::get_options( 'enable_global_contextual_menu' );
				if ( $enable_global_contextual_menu ) {
					$enable_contextual_menu = (bool) Options_Menu::get_options( 'enable_contextual_menu' );
					$enable_email_text      = (bool) Options_Menu::get_options( 'enable_email_text' );
					$enable_copy_text       = (bool) Options_Menu::get_options( 'enable_copy_text' );
					$enable_copy_tweet      = (bool) Options_Menu::get_options( 'enable_copy_tweet' );
					$enable_copy_link       = (bool) Options_Menu::get_options( 'enable_copy_link' );
					$enable_tweet_this      = (bool) Options_Menu::get_options( 'enable_tweet_this' );
					$enable_share_this      = (bool) Options_Menu::get_options( 'enable_share_this' );
				}

				if ( $enable_contextual_menu && ( $enable_copy_link || $enable_copy_tweet || $enable_copy_link || $enable_tweet_this || $enable_share_this || $enable_email_text ) ) :
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
										<?php echo esc_html( $copy_text_label ); ?>
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
										<?php echo esc_html( $copy_tweet_label ); ?>
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
										<?php echo esc_html( $copy_link_label ); ?>
									</button>
								</li>
								<?php
							endif;
							?>
							<?php
							if ( $enable_email_text ) :
								$ajax_nonce = wp_create_nonce( 'qdlx_share_' . $permalink );
								$ajax_url   = admin_url( 'admin-ajax.php' );
								$ajax_url   = add_query_arg(
									array(
										'action'    => 'quotes_dlx_email_interface',
										'permalink' => urlencode( $permalink ),
										'nonce'     => $ajax_nonce,
										'text'      => wp_strip_all_tags( $share_text_kses ),
									),
									$ajax_url
								);
								?>
								<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-email-link" data-url="<?php echo esc_attr( $permalink ); ?>">
									<button class="button-reset" data-ajax-url="<?php echo esc_url( $ajax_url ); ?>">
										<span class="quotes-dlx-meatball-menu-icon">
											<svg width="24" height="24"><use xlink:href="#quotes-dlx-at-icon"></use></svg>
										</span>
										<?php echo esc_html( $email_quote_label ); ?>
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
										<?php echo esc_html( $tweet_this_label ); ?>
									</button>
								</li>
								<?php
							endif;
							?>
							<?php
							if ( $enable_share_this ) :
								?>
								<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-share-facebook" data-url="<?php echo esc_attr( $permalink ); ?>">
								<button class="button-reset" data-facebook-text="<?php echo esc_attr( urlencode( $this->get_tweet_text( $attributes ) . "\n\r" ) ); ?>" data-url="<?php echo esc_attr( urlencode( $permalink ? $permalink : '' ) ); ?>">
										<span class="quotes-dlx-meatball-menu-icon">
											<svg width="24" height="24"><use xlink:href="#quotes-dlx-facebook-icon"></use></svg>
										</span>
										<?php echo esc_html( $share_this_label ); ?>
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
	 * Output the blockquote block content.
	 *
	 * @param array  $attributes Array of block attributes.
	 * @param string $content InnerBlock content.
	 */
	public function frontend_blockquote_block( $attributes, $content ) {
		return $content;
	}

	/**
	 * Output the cite block content.
	 *
	 * @param array  $attributes Array of block attributes.
	 * @param string $content InnerBlock content.
	 */
	public function frontend_cite_block( $attributes, $content ) {
		return 'hello';
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

		/**
		 * Allow or disallow loading of fonts.
		 *
		 * @since 1.0.0
		 *
		 * @param bool Whether to load the custom fonts or not.
		 */
		$load_fonts = apply_filters( 'quotes_dlx_load_fonts', true ); // Not being used atm.

		// Register themes and handles. (todo: optimize).
		$themes = Themes::get_theme_data();
		foreach ( $themes as $theme ) {
			$handle = 'quotes-dlx-' . $theme['slug'];
			wp_register_style(
				$handle,
				esc_url( $theme['stylesheet'] ),
				array(),
				$theme['version'],
				'all'
			);
			$theme_deps[] = $handle;
		}

		return $theme_deps;
	}

	/**
	 * Register front-end scripts/styles.
	 */
	public function register_frontend_scripts() {
		$this->register_theme_styles();

		wp_register_style(
			'quotes-dlx-frontend',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);

		// Register Fancybox Script.
		wp_register_script(
			'quotes-dlx-fancybox',
			Functions::get_plugin_url( 'fancybox/fancybox.js' ),
			array(),
			Functions::get_plugin_version(),
			true
		);

		// Register fancybox style.
		wp_register_style(
			'quotes-dlx-fancybox',
			Functions::get_plugin_url( 'fancybox/fancybox.css' ),
			array(),
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

		// Register styles here because array in block.json fails when using array of styles (enqueues wrong script).
		wp_register_style(
			'quotes-dlx-block-editor',
			Functions::get_plugin_url( 'dist/quotes-dlx-block-editor.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);
		wp_register_style(
			'quotes-dlx-block-editor-styles',
			Functions::get_plugin_url( 'build/index.css' ),
			array( 'quotes-dlx-block-editor' ),
			Functions::get_plugin_version(),
			'all'
		);

		wp_register_script(
			'quotes-dlx-block',
			Functions::get_plugin_url( 'build/index.js' ),
			array(),
			Functions::get_plugin_version(),
			true
		);

		// Attempt to get post ID.
		global $post;
		$post_id = isset( $post->ID ) ? $post->ID : 0;

		// Get block defaults.
		$block_defaults = array_merge( Options_Defaults::get_options(), Options_Menu::get_options() );

		// Do a fix for hashtags. Null check.
		$hashtags = $block_defaults['hashtags'] ?? null;
		if ( ! is_array( $hashtags ) ) {
			$block_defaults['hashtags'] = array();
		}

		// Get font properties for the themes.
		$themes                      = Themes::get_theme_data();
		$theme_stylesheets_localized = array();
		$primary_font_advanced       = Options_Advanced::get_options( 'primary_font_family' );
		$secondary_font_advanced     = Options_Advanced::get_options( 'secondary_font_family' );
		foreach ( $themes as $theme ) {
			$theme_options       = Options_Theme::get_options( $theme['slug'] );
			$enable_custom_fonts = (bool) ( $theme_options['enable_custom_fonts'] ?? false );
			if ( ! $enable_custom_fonts ) {
				$theme_stylesheets_localized[ $theme['slug'] ] = array(
					'primary_font_stylesheet'   => Functions::get_font_family_stylesheet_path( $primary_font_advanced ),
					'secondary_font_stylesheet' => Functions::get_font_family_stylesheet_path( $secondary_font_advanced ),
				);
			} else {
				$theme_stylesheets_localized[ $theme['slug'] ] = array(
					'primary_font_stylesheet'   => Functions::get_font_family_stylesheet_path( $theme_options['primary_font_family'] ),
					'secondary_font_stylesheet' => Functions::get_font_family_stylesheet_path( $theme_options['secondary_font_family'] ),
				);
			}
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
				'themes_stylesheets'       => $theme_stylesheets_localized,
				'themes'                   => Themes::get_theme_data(),
				'defaults'                 => $block_defaults,
				'contextual_menu_options'  => Options_Menu::get_options(),
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

		/**
		 * Whether to preload fonts or not.
		 *
		 * @since 1.0.0
		 *
		 * @param bool true to preload, false to not.
		 */
		$can_preload = apply_filters( 'quotes_dlx_can_preload_fonts', true );
		if ( ! $can_preload ) {
			return;
		}

		// Get font options.
		$fonts_to_preload      = array();
		$maybe_enable_fonts    = (bool) Options_Advanced::get_options( 'enable_fonts' );
		$global_primary_font   = Options_Advanced::get_options( 'primary_font_family' );
		$global_secondary_font = Options_Advanced::get_options( 'secondary_font_family' );

		if ( ! $global_primary_font || '' === $global_primary_font ) {
			$global_primary_font = Functions::get_default_primary_font_slug();
		}
		if ( ! $global_secondary_font || '' === $global_secondary_font ) {
			$global_secondary_font = Functions::get_default_secondary_font_slug();
		}

		// Add fonts to preload if custom isn't set.
		if ( 'custom' !== $global_primary_font ) {
			$fonts_to_preload[] = $global_primary_font;
		}
		if ( 'custom' !== $global_secondary_font ) {
			$fonts_to_preload[] = $global_secondary_font;
		}

		// Now get theme fonts.
		$theme_options = Options_Theme::get_options();
		$themes        = Themes::get_theme_data();
		foreach ( $themes as $theme ) {
			if ( isset( $theme_options[ $theme['slug'] ] ) ) {
				// Check to see if custom fonts are enabled for the theme.
				$custom_fonts_enabled = (bool) ( $theme_options[ $theme['slug'] ]['enable_custom_fonts'] ?? false );
				if ( ! $custom_fonts_enabled ) {
					continue;
				}

				// Start grabbing the fonts.
				$theme_primary_font   = $theme_options[ $theme['slug'] ]['primary_font_family'] ?? '';
				$theme_secondary_font = $theme_options[ $theme['slug'] ]['secondary_font_family'] ?? '';
				if ( ! $theme_primary_font || '' === $theme_primary_font ) {
					$theme_primary_font = Functions::get_default_primary_font_slug();
				}
				if ( ! $theme_secondary_font || '' === $theme_secondary_font ) {
					$theme_secondary_font = Functions::get_default_secondary_font_slug();
				}
				if ( 'custom' !== $theme_primary_font ) {
					$fonts_to_preload[] = $theme_primary_font;
				}
				if ( 'custom' !== $theme_secondary_font ) {
					$fonts_to_preload[] = $theme_secondary_font;
				}
			}
		}

		// Finally, filter.
		$fonts_to_preload = array_unique( $fonts_to_preload );

		/**
		 * Font slugs to preload.
		 *
		 * @since 1.0.0
		 *
		 * @param array Font slugs to preload.
		 */
		$fonts_to_preload = apply_filters( 'quotes_dlx_fonts_to_preload', $fonts_to_preload );

		// Get fonts in directory.
		$fonts_path  = Functions::get_plugin_dir( 'dist/fonts/' );
		$maybe_fonts = wp_cache_get( 'quotes_dlx_font_files' );
		if ( ! $maybe_fonts || ! is_array( $maybe_fonts ) ) {
			$maybe_fonts = array();
		}
		if ( is_dir( $fonts_path ) ) {
			$maybe_fonts = array_diff( scandir( $fonts_path ), array( '..', '.' ) );
			wp_cache_set( 'quotes_dlx_font_files', $maybe_fonts, 'quotes-dlx', HOUR_IN_SECONDS ); // Cache for 60 minutes. Could be longer since we clear the cache on save/reset.
		}

		// Get .woff2 files.
		$woff2_filenames = array();
		foreach ( $maybe_fonts as $font_file ) {
			$path_info = pathinfo( $font_file );
			if ( 'woff2' === $path_info['extension'] ) {
				$woff2_filenames[] = $path_info['basename'];
			}
		}

		// Now get fonts to preload.
		$font_files_to_preload = array();
		foreach ( $fonts_to_preload as $font_slug ) {
			foreach ( $woff2_filenames as $woff2_filename ) {
				if ( strstr( $woff2_filename, $font_slug ) ) {
					$font_files_to_preload[] = $woff2_filename;
					continue;
				}
			}
		}

		// Now get the full path to the font files.
		$font_urls = array();
		foreach ( $font_files_to_preload as $font_file ) {
			$font_urls[] = Functions::get_plugin_url( 'dist/fonts/' . $font_file );
		}

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
		if ( ! has_block( 'mediaron/quotes-dlx' ) && ! is_admin() ) {
			return;
		}
		// If we're in admin and not on the post edit screen, return.
		if ( is_admin() ) {
			$screen = get_current_screen();
			if ( ! $screen->is_block_editor ) {
				return;
			}
		}
		?>
		<svg width="0" height="0" class="hidden" style="display: none;">
			<symbol aria-hidden="true" data-prefix="fas" data-icon="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-twitter-icon">
				<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-copy-icon">
				<path fill="currentColor" d="M384 96L384 0h-112c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48H464c26.51 0 48-21.49 48-48V128h-95.1C398.4 128 384 113.6 384 96zM416 0v96h96L416 0zM192 352V128h-144c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48L288 416h-32C220.7 416 192 387.3 192 352z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="quote-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-quote-left-icon">
				<path fill="currentColor" d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="link-solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" id="quotes-dlx-link-icon">
				<path fill="currentColor" d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="at" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-at-icon">
				<path fill="currentColor" d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-facebook-icon">
				<path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="at" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-email-icon">
				<path fill="currentColor" d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-linkedin-icon">
				<path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="xing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="quotes-dlx-xing-icon">
				<path fill="currentColor" d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="whatsapp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-whatsapp-icon">
				<path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-copy-icon">
				<path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fas" data-icon="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-share-icon">
				<path fill="currentColor" d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-reddit-icon">
				<path fill="currentColor" d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="quotes-dlx-telegram-icon">
				<path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="quotes-dlx-tumblr-icon"><path fill="currentColor" d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path></symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-webshare-icon"><path fill="currentColor" d="M512 208L320 384H288V288H208c-61.9 0-112 50.1-112 112c0 48 32 80 32 80s-128-48-128-176c0-97.2 78.8-176 176-176H288V32h32L512 208z"/></svg></symbol>
		</svg>
		<?php
	}
}
