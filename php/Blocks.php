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
		add_shortcode( 'quotesdlx', array( $self, 'shortcode' ) );
		return $self;
	}

	/**
	 * Init action callback.
	 */
	public function init() {

		$render_callbacks = array(
			'mediaron/quotes-dlx' => array( $this, 'frontend' ),
		);

		add_filter(
			'block_type_metadata_settings',
			function ( $settings, $metadata ) use ( $render_callbacks ) {
				if ( isset( $render_callbacks[ $metadata['name'] ] ) ) {
					$settings['render_callback'] = $render_callbacks[ $metadata['name'] ];
				}
				return $settings;
			},
			10,
			2
		);

		if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
			wp_register_block_types_from_metadata_collection( Functions::get_plugin_dir( 'build/js/blocks/' ), Functions::get_plugin_dir( 'build/blocks-manifest.php' ) );
		} else {
			if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
				wp_register_block_metadata_collection( Functions::get_plugin_dir( 'build/js/blocks/' ), Functions::get_plugin_dir( 'build/blocks-manifest.php' ) );
			}
			$manifest_data = require Functions::get_plugin_dir( 'build/blocks-manifest.php' );
			foreach ( array_keys( $manifest_data ) as $block_type ) {
				register_block_type( __DIR__ . "/build/js/blocks/{$block_type}" );
			}
		}

		// Enqueue general front-end style.
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );

		add_action( 'wp_enqueue_scripts', array( $this, 'register_font_scripts' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_font_scripts' ) );

		// Enqueue block assets.
		add_action( 'enqueue_block_assets', array( $this, 'register_editor_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'register_block_editor_scripts' ) );

		// Add SVGs and other footer items we need.
		add_action( 'wp_footer', array( $this, 'add_footer_html' ) ); // Load SVGs for only blocks.
		add_action( 'wp_footer', array( $this, 'add_shortcode_footer_html' ) ); // Load SVGs for only shortcodes.

		// Pre-load font files.
		add_action( 'wp_head', array( $this, 'add_header_fonts_preload' ) );

		// Output styles based on block attributes.
		add_action( 'quotes_dlx_before_modal_scripts', array( $this, 'add_modal_styles' ) );

		// Output scripts/styles if not ajax or admin.
		if ( is_admin() ) {
			add_action( 'admin_head', array( $this, 'maybe_output_scripts_styles' ), 500 );
		} else {
			add_action( 'wp_head', array( $this, 'maybe_output_scripts_styles' ), 500 );
		}

		// Modify allowed html for <link> tags.
		add_filter( 'wp_kses_allowed_html', array( $this, 'add_tags_to_allowed_html' ), 10, 2 );
	}

	/**
	 * Add the link tag to the allowed html.
	 *
	 * @param array  $allowed_html Allowed HTML tags.
	 * @param string $context      Context for the allowed HTML.
	 *
	 * @return array Allowed HTML tags.
	 */
	public function add_tags_to_allowed_html( $allowed_html, $context ) {
		if ( 'post' === $context ) {
			$allowed_html['link']   = array(
				'href' => true,
				'rel'  => true,
				'type' => true,
			);
			$allowed_html['script'] = array(
				'src'  => true,
				'type' => true,
			);
		}
		return $allowed_html;
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
	 * Add theme styles to the shortcode.
	 *
	 * @param string $template The template slug.
	 */
	private function print_shortcode_theme_styles( $template ) {
		// Try to get default template if there is no template.
		if ( ! $template ) {
			$block_defaults = Options_Defaults::get_defaults();
			$template       = $block_defaults['template'] ?? false;
		}
		if ( $template ) {
			$handle = 'quotes-dlx-' . $template;
			if ( ! wp_script_is( $handle, 'done' ) ) {
				wp_print_styles( array( $handle ) );
			}
		}
	}

	/**
	 * Add font styles to a shortcode.
	 */
	private function print_shortcode_font_scripts() {
		$primary_font   = Options_Advanced::get_options( 'primary_font_family' );
		$secondary_font = Options_Advanced::get_options( 'secondary_font_family' );

		// Check for custom value in the primary font and secondary font.
		if ( 'custom' === $primary_font && 'custom' === $secondary_font ) {
			return '';
		}

		$can_enqueue_primary   = true;
		$can_enqueue_secondary = true;

		// Adobe font init.
		if ( ( Functions::is_adobe_font( $primary_font && $can_enqueue_primary ) ) || ( Functions::is_adobe_font( $secondary_font ) && $can_enqueue_secondary ) ) {
			$project_id = Options_Advanced::get_options( 'adobe_project_id' );

			// Enqueue the Adobe Fonts stylesheet.
			Adobe_Fonts::add_dns_prefetch();
			Adobe_Fonts::enqueue_adobe_fonts( $project_id );
			wp_print_styles( 'quotes-dlx-adobe-fonts' ); // Style is registered in Adobe_Fonts.
		}

		// Enqueue the Google Fonts stylesheet.
		if ( ! Functions::is_adobe_font( $primary_font ) && 'custom' !== $primary_font && $can_enqueue_primary ) {
			$primary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $primary_font . '.css' );
			wp_register_style(
				'quotes-dlx-gfont-primary-' . $primary_font,
				esc_url( $primary_font_url ),
				array(),
				Functions::get_plugin_version(),
				'all'
			);
			ob_start();
			if ( wp_style_is( 'quotes-dlx-gfont-primary-' . $primary_font, 'registered' ) ) {
				wp_print_styles( 'quotes-dlx-gfont-primary-' . $primary_font );
			}
		}
		if ( ! Functions::is_adobe_font( $secondary_font ) && 'custom' !== $secondary_font && $can_enqueue_secondary ) {
			$secondary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $secondary_font . '.css' );
			wp_register_style(
				'quotes-dlx-gfont-secondary' . $secondary_font,
				esc_url( $secondary_font_url ),
				array(),
				Functions::get_plugin_version(),
				'all'
			);
			if ( wp_style_is( 'quotes-dlx-gfont-secondary-' . $secondary_font, 'registered' ) ) {
				wp_print_styles( 'quotes-dlx-gfont-secondary-' . $secondary_font );
			}
		}
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
		$blocks = null;
		$blocks = parse_blocks( $post_content );
		$this->print_block_styles( $blocks );
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
								'quotes-dlx-gfont-primary' . $primary_theme_font_family,
								esc_url( $primary_font_url ),
								array(),
								Functions::get_plugin_version(),
								'all'
							);
						}
						if ( ! Functions::is_adobe_font( $secondary_theme_font_family ) && 'custom' !== $secondary_theme_font_family ) {
							$secondary_font_url = Functions::get_plugin_url( 'dist/quotes-dlx-gfont-' . $secondary_theme_font_family . '.css' );
							wp_enqueue_style(
								'quotes-dlx-gfont-secondary' . $secondary_theme_font_family,
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
		if ( ! empty( $blocks ) && ! is_null( $blocks ) ) {
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
		} else {
			// Blocks is null, so assume shortcode.
		}
	}

	/**
	 * CSS custom properties for each theme's saved colors, including rating stars.
	 *
	 * The block editor canvas is a separate document, so these variables have to
	 * be attached to an editor stylesheet. The front end prints the same rules.
	 *
	 * @return string
	 */
	private function get_theme_color_variables_css() {
		$declarations = '';

		foreach ( Themes::get_theme_data() as $theme ) {
			$theme_colors = Options_Theme::get_theme_colors( $theme['slug'] );
			if ( empty( $theme_colors ) || ! is_array( $theme_colors ) ) {
				continue;
			}

			foreach ( $theme_colors as $color ) {
				if ( empty( $color['slug'] ) || ! isset( $color['color'] ) || '' === $color['color'] ) {
					continue;
				}

				$declarations .= sprintf(
					'--qdlx-%1$s-%2$s:%3$s;',
					esc_attr( $theme['slug'] ),
					esc_attr( $color['slug'] ),
					esc_attr( $color['color'] )
				);
			}
		}

		if ( '' === $declarations ) {
			return '';
		}

		return ':root{' . $declarations . '}';
	}

	/**
	 * Print out root css vars for the block.
	 */
	private function output_theme_style_root() {
		// Get themes.
		$themes = Themes::get_theme_data();

		// If doing REST request, ignore. This prevents the editor from erroring on shortcodes.
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return;
		}

		// Set color root variables.
		$color_variables_css = $this->get_theme_color_variables_css();
		if ( $color_variables_css ) {
			echo '<style>' . $color_variables_css . '</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Values are escaped in get_theme_color_variables_css().
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
				}
			</style>
			<style>
				:root {
					<?php
					foreach ( $themes as $theme_options ) {
						// Line height.
						printf(
							'--qdlx-%s-line-height-mobile: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'mobile' ) )
						);
						printf(
							'--qdlx-%s-line-height-tablet: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'tablet' ) )
						);
						printf(
							'--qdlx-%s-line-height-desktop: %s;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'line_height', 'desktop' ) )
						);

						// Font sizes.
						printf(
							'--qdlx-%s-font-size-mobile: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'mobile' ) )
						);
						printf(
							'--qdlx-%s-font-size-tablet: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'tablet' ) )
						);
						printf(
							'--qdlx-%s-font-size-desktop: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'font_size', 'desktop' ) )
						);

						// Button Font Sizes.
						printf(
							'--qdlx-%s-button-font-size-mobile: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'button_font_size', 'mobile' ) )
						);
						printf(
							'--qdlx-%s-button-font-size-tablet: %spx;',
							esc_attr( $theme_options['slug'] ),
							esc_html( Functions::get_theme_font_sizes( $theme_options['slug'], 'button_font_size', 'tablet' ) )
						);
						printf(
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
							printf(
								'--qdlx-%s-primary-font-family: %s;',
								esc_attr( $theme_options['slug'] ),
								sanitize_text_field( Functions::format_font_family( $primary_font_family ) )
							);
							printf(
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
								printf(
									'--qdlx-%s-primary-font-family: %s;',
									esc_attr( $theme_options['slug'] ),
									sanitize_text_field( $theme_primary_font )
								);
							}
							if ( $theme_secondary_font ) {
								printf(
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
	 * Shortcode output, which passthrough's the block.
	 *
	 * @param array  $atts    Shortcode attributes.
	 * @param string $content Shortcode content.
	 *
	 * @return string Block output.
	 */
	public function shortcode( $atts, $content ) {
		$default_options    = Options_Defaults::get_defaults();
		$contextual_options = Options_Menu::get_defaults();
		$theme_options      = Options_Theme::get_defaults();

		$atts = shortcode_atts(
			array(
				'template'                    => $default_options['template'],
				'share_text'                  => '', /* original share text */
				'share_text_override'         => '', /* optimized share text */
				'share_text_override_enabled' => false,
				'share_button_text'           => $default_options['share_button_text'], /* for Twitter button text */
				'facebook_share_button_text'  => $default_options['facebook_share_button_text'],
				'hashtags'                    => $default_options['hashtags'],
				'twitter_username'            => $default_options['twitter_username'],
				'tweet_button_alignment'      => $default_options['tweet_button_alignment'],
				'tweet_icon_alignment'        => $default_options['tweet_icon_alignment'], /* left, center, right */
				'tweet_button_enabled'        => $default_options['tweet_button_enabled'],
				'facebook_button_enabled'     => $default_options['facebook_button_enabled'],
				'tweet_button_display'        => $default_options['tweet_button_display'], /* full, icon, text */
				'icon_appearance'             => $default_options['icon_appearance'], /* button, transparent */
				'maximum_width'               => $default_options['maximum_width'],
				'maximum_width_unit'          => $default_options['maximum_width_unit'],
				'align'                       => $default_options['align'], /* left, center, right, wide, full */
				'anchor'                      => '',
				'anchor_prefix'               => '',
				'has_anchor'                  => $default_options['has_anchor'], /* true or false */
				'url_shortener'               => $default_options['url_shortener'], /* true or false */
				'url_shortening_service'      => $default_options['url_shortening_service'], /* manual, bitly, jetpack */
				'permalink'                   => '',
				'manual_permalink'            => '',
				'enable_links_in_tweet'       => $default_options['enable_links_in_tweet'],
				'enable_contextual_menu'      => $contextual_options['enable_contextual_menu'],
				'enable_copy_text'            => $contextual_options['enable_copy_text'],
				'enable_copy_tweet'           => $contextual_options['enable_copy_tweet'],
				'enable_copy_link'            => $contextual_options['enable_copy_link'],
				'enable_tweet_this'           => $contextual_options['enable_tweet_this'],
				'enable_email_text'           => $contextual_options['enable_email_text'],
				'enable_share_this'           => $contextual_options['enable_share_this'],
				'email_text_label'            => $contextual_options['email_text_label'],
				'copy_text_label'             => $contextual_options['copy_text_label'],
				'copy_tweet_label'            => $contextual_options['copy_tweet_label'],
				'copy_link_label'             => $contextual_options['copy_link_label'],
				'tweet_this_label'            => $contextual_options['tweet_this_label'],
				'share_this_label'            => $contextual_options['share_this_label'],
				'enable_citation'             => false,
				'enable_citation_image'       => true,
				'enable_citation_author'      => true,
				'citation_author'             => '',
				'enable_citation_title'       => true,
				'citation_title'              => '',
				'enable_citation_source'      => false,
				'citation_source'             => '',
				'citation_image_id'           => 0,
				'citation_image_url'          => '',
				'citation_image_appearance'   => 'round',
				'citation_image_has_border'   => true,
				'citation_alignment'          => 'left', /* can be left, right, center */
			),
			$atts,
			'quotesdlx'
		);

		// override share_text with content.
		if ( ! $atts['share_text'] && $content ) {
			$atts['share_text'] = $content;
		}

		// Format hashtags into array.
		if ( ! is_array( $atts['hashtags'] ) ) {
			$atts['hashtags'] = explode( ',', $atts['hashtags'] );
		}

		$attributes = Functions::sanitize_array_recursive( $atts );

		// Bring back share_text as it is escaped in block output.
		$attributes['share_text'] = $atts['share_text'];

		// Bring back citation_author, citation_title, citation_source as they are escaped in block output.
		$attributes['citation_author'] = $atts['citation_author'];
		$attributes['citation_title']  = $atts['citation_title'];
		$attributes['citation_source'] = $atts['citation_source'];

		// Output scripts and styles.
		ob_start();
		$this->output_theme_style_root();
		$this->print_shortcode_font_scripts();
		$this->print_shortcode_theme_styles( $attributes['template'] );
		$this->output_shortcode_frontend_scripts();

		$output = ob_get_clean() . $this->frontend( $attributes, 'shortcode' );

		return $output;
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
		$rating_value            = Functions::sanitize_attribute( $attributes, 'rating_value', 'integer' );
		$show_rating             = Functions::sanitize_attribute( $attributes, 'show_rating', 'boolean' );
		$rating_position         = Functions::sanitize_attribute( $attributes, 'rating_position', 'string' );
		$rating_alignment        = Functions::sanitize_attribute( $attributes, 'rating_alignment', 'string' );
		$rating_appearance       = Functions::sanitize_attribute( $attributes, 'rating_appearance', 'string' );
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
			'template-' . $template_name,
		);
		if ( $rtl ) {
			$default_wrapper_classes[] = 'rtl';
		}
		if ( ! $enable_contextual_menu ) {
			$default_wrapper_classes[] = 'quotes-dlx-context-menu-disabled';
		}
		if ( ! $tweet_button_enabled && ! $facebook_button_enabled ) {
			$default_wrapper_classes[] = 'quotes-dlx-has-no-tweet-button';
		}

		// Set citation classes.
		$enable_citation = Functions::sanitize_attribute( $attributes, 'enable_citation', 'boolean' );
		if ( $enable_citation ) {
			$default_wrapper_classes[] = 'quotes-dlx-has-citation';
		}

		// Get rating classes.
		if ( $show_rating ) {
			$position_class = 'top';
			if ( 'below_quote' === $rating_position ) {
				$position_class = 'bottom';
			} elseif ( 'below_citation' === $rating_position ) {
				$position_class = 'below-citation';
			}
			$default_wrapper_classes[] = 'quotes-dlx-has-rating';
			$default_wrapper_classes[] = 'quotes-dlx-has-rating-' . $position_class;
			$default_wrapper_classes[] = 'quotes-dlx-has-rating-' . $rating_alignment;
			$default_wrapper_classes[] = 'quotes-dlx-rating-appearance-' . $rating_appearance;
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
						<?php
						if ( $show_rating && 'above_quote' === $rating_position ) {
							?>
							<div class="quotes-dlx-rating-wrapper">
								<style>
									#<?php echo esc_attr( $block_id ); ?> .quotes-dlx-rating-wrapper::before {
										--percent: <?php echo esc_attr( $rating_value ); ?>%;
									}
								</style>
							</div>
							<?php
						}
						?>
						<blockquote class="quotes-dlx-text quotes-dlx-text-wrapper">
						<?php
							$tweet_text_rich = Functions::sanitize_attribute( $attributes, 'share_text', 'raw' );
							echo wp_kses_post( nl2br( $tweet_text_rich ) );
						?>
						</blockquote>
						<?php
						if ( $show_rating && 'below_quote' === $rating_position ) {
							?>
							<div class="quotes-dlx-rating-wrapper">
								<style>
									#<?php echo esc_attr( $block_id ); ?> .quotes-dlx-rating-wrapper::before {
										--percent: <?php echo esc_attr( $rating_value ); ?>%;
									}
								</style>
							</div>
							<?php
						}
						?>
						<?php
						$enable_citation = $attributes['enable_citation'] ?? false;
						if ( $enable_citation ) {
							$figcaption_classes       = array(
								'quotes-dlx-citation-wrapper',
								'quotes-dlx-citation-align-' . $attributes['citation_alignment'],
							);
							$figcaption_image_classes = array(
								'quotes-dlx-citation-image-wrapper',
							);
							$figcaption_image_id      = $attributes['citation_image_id'] ?? 0;
							$figcaption_image_url     = $attributes['citation_image_url'] ?? '';
							if ( $figcaption_image_id || ! empty( $figcaption_image_url ) ) {
								$figcaption_image_classes[] = 'has-image';
								$figcaption_image_classes[] = 'round' === $attributes['citation_image_appearance'] ? 'is-round' : '';
								$figcaption_image_classes[] = $attributes['citation_image_has_border'] ? 'has-border' : '';
							}
							?>
							<figcaption class="<?php echo esc_attr( implode( ' ', $figcaption_classes ) ); ?>">
								<?php
								if ( (bool) $attributes['enable_citation_image'] ) {
									?>
									<div class="<?php echo esc_attr( implode( ' ', $figcaption_image_classes ) ); ?>">
										<img
											src="<?php echo esc_url( $figcaption_image_url ); ?>"
											alt="<?php esc_attr_e( 'Citation Image', 'quotes-dlx' ); ?>"
											width="75"
											height="75"
										/>
									</div>
									<?php
								}
								?>
								<div class="quotes-dlx-citation-text-wrapper">
									<?php
									// Output citation author.
									$enable_citation_author = $attributes['enable_citation_author'] ?? false;
									if ( (bool) $enable_citation_author ) {
										?>
										<div class="quotes-dlx-citation-author">
											<?php echo wp_kses_post( $attributes['citation_author'] ); ?>
										</div>
										<?php
									}

									// Output citation title.
									$enable_citation_title = $attributes['enable_citation_title'] ?? false;
									if ( (bool) $enable_citation_title ) {
										?>
										<div class="quotes-dlx-citation-title">
											<?php echo wp_kses_post( $attributes['citation_title'] ); ?>
										</div>
										<?php
									}

									// Output citation source.
									$enable_citation_source = $attributes['enable_citation_source'] ?? false;
									if ( (bool) $enable_citation_source ) {
										?>
										<div class="quotes-dlx-citation-source">
											<?php echo wp_kses_post( $attributes['citation_source'] ); ?>
										</div>
										<?php
									}
									?>
								</div>
							</figcaption>
							<?php
						}
						?>
						<?php
						if ( $show_rating && 'below_citation' === $rating_position ) {
							?>
							<div class="quotes-dlx-rating-wrapper">
								<style>
									#<?php echo esc_attr( $block_id ); ?> .quotes-dlx-rating-wrapper::before {
										--percent: <?php echo esc_attr( $rating_value ); ?>%;
									}
								</style>
							</div>
							<?php
						}
						?>
					</figure>
					<?php
					$tweet_button_display = Functions::sanitize_attribute( $attributes, 'tweet_button_display', 'string' );
					$tweet_icon_alignment = Functions::sanitize_attribute( $attributes, 'tweet_icon_alignment', 'string' );
					$share_button_text    = Functions::sanitize_attribute( $attributes, 'share_button_text', 'raw' );
					$hashtags             = $this->get_hashtags( isset( $attributes['hashtags'] ) ? $attributes['hashtags'] : array(), ',' );
					$twitter_username     = trim( Functions::sanitize_attribute( $attributes, 'twitter_username', 'string' ) );

					// Get share classes.
					$share_button_wrapper_classes = array(
						'quotes-dlx-button-wrapper',
						Functions::sanitize_attribute( $attributes, 'tweet_button_alignment', 'string' ),
					);
					if ( 'transparent' === $attributes['icon_appearance'] ) {
						$share_button_wrapper_classes[] = 'is-transparent-button';
					}
					$share_button_classes       = array(
						'quotes-dlx-button',
						$tweet_button_display,
						'quotes-dlx-button-icon-' . $tweet_icon_alignment,
					);
					$facebook_button_enabled    = Functions::sanitize_attribute( $attributes, 'facebook_button_enabled', 'boolean' );
					$facebook_share_button_text = Functions::sanitize_attribute( $attributes, 'facebook_share_button_text', 'raw' );
					if ( $tweet_button_enabled || $facebook_button_enabled ) :
						?>
					<div class="<?php echo esc_attr( implode( ' ', $share_button_wrapper_classes ) ); ?>">
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
										<svg width="24" height="24"><use xlink:href="#quotes-dlx-x-icon"></use></svg>
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
				$enable_copy_link       = Functions::sanitize_attribute( $attributes, 'enable_copy_link', 'boolean' );
				$enable_tweet_this      = Functions::sanitize_attribute( $attributes, 'enable_tweet_this', 'boolean' );
				$enable_copy_tweet      = Functions::sanitize_attribute( $attributes, 'enable_copy_tweet', 'boolean' );
				$enable_share_this      = Functions::sanitize_attribute( $attributes, 'enable_share_this', 'boolean' );

				// Get text label values.
				$copy_text_label  = Options_Menu::get_options( 'copy_text_label' );
				$copy_tweet_label = Options_Menu::get_options( 'copy_tweet_label' );
				$copy_link_label  = Options_Menu::get_options( 'copy_link_label' );
				$tweet_this_label = Options_Menu::get_options( 'tweet_this_label' );
				$share_this_label = Options_Menu::get_options( 'share_this_label' );

				// Check to see if global options are set.
				$enable_global_contextual_menu = Options_Menu::get_options( 'enable_global_contextual_menu' );
				if ( $enable_global_contextual_menu ) {
					$enable_contextual_menu = (bool) Options_Menu::get_options( 'enable_contextual_menu' );
					$enable_copy_text       = (bool) Options_Menu::get_options( 'enable_copy_text' );
					$enable_copy_tweet      = (bool) Options_Menu::get_options( 'enable_copy_tweet' );
					$enable_copy_link       = (bool) Options_Menu::get_options( 'enable_copy_link' );
					$enable_tweet_this      = (bool) Options_Menu::get_options( 'enable_tweet_this' );
					$enable_share_this      = (bool) Options_Menu::get_options( 'enable_share_this' );
				}

				if ( $enable_contextual_menu && ( $enable_copy_link || $enable_copy_tweet || $enable_tweet_this || $enable_share_this ) ) :
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
							if ( $enable_tweet_this ) :
								?>
								<li class="quotes-dlx-meatball-menu-item quotes-dlx-meatball-menu-item-tweet-this">
									<button class="button-reset" data-hashtags="<?php echo esc_attr( urlencode( $hashtags ) ); ?>" data-username="<?php echo esc_attr( str_replace( '@', '', $twitter_username ) ); ?>" data-tweet="<?php echo esc_attr( urlencode( $this->get_tweet_text( $attributes ) . "\n\r" ) ); ?>" data-url="<?php echo esc_attr( urlencode( $permalink ? $permalink : '' ) ); ?>">
										<span class="quotes-dlx-meatball-menu-icon">
											<svg width="24" height="24"><use xlink:href="#quotes-dlx-x-icon"></use></svg>
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
			} elseif ( strlen( $separator ) > 0 && is_string( $separator ) ) {
					$hashtag_return = implode( $separator, $hashtags );
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

		if ( ! is_wp_error( $permalink ) && strlen( $permalink ) > 0 && $enable_links_in_tweet ) {
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
	 * Register and print out any scripts needed for the shortcode.
	 */
	public function output_shortcode_frontend_scripts() {
		wp_register_style(
			'quotes-dlx-frontend',
			Functions::get_plugin_url( 'dist/quotes-dlx-frontend.css' ),
			array(),
			Functions::get_plugin_version(),
			'all'
		);

		wp_print_styles(
			array(
				'quotes-dlx-frontend',
			)
		);

		wp_enqueue_script(
			'quotes-dlx-actions',
			Functions::get_plugin_url( 'dist/quotes-dlx-actions.js' ),
			array( 'wp-i18n', 'wp-a11y' ),
			Functions::get_plugin_version(),
			true
		);
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
	 * Register editor styles and the theme color variables those styles depend on.
	 *
	 * Runs before the editor canvas is built so the variables are inside the iframe.
	 */
	public function register_editor_styles() {
		if ( ! is_admin() ) {
			return;
		}

		static $registered = false;
		if ( $registered ) {
			return;
		}
		$registered = true;

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
			Functions::get_plugin_url( 'build/quotes-dlx.css' ),
			array( 'quotes-dlx-block-editor' ),
			Functions::get_plugin_version(),
			'all'
		);

		$color_variables_css = $this->get_theme_color_variables_css();
		if ( $color_variables_css ) {
			wp_add_inline_style( 'quotes-dlx-block-editor-styles', $color_variables_css );
		}
	}

	/**
	 * Register the block editor script with localized vars.
	 */
	public function register_block_editor_scripts() {
		$this->register_editor_styles();

		$deps = require_once Functions::get_plugin_dir( 'build/quotes-dlx.asset.php' );
		wp_register_script(
			'quotes-dlx-block',
			Functions::get_plugin_url( 'build/quotes-dlx.js' ),
			$deps['dependencies'],
			$deps['version'],
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
		$anchor                 = Functions::sanitize_attribute( $attributes, 'anchor', 'string' );
		$unique_id              = Functions::sanitize_attribute( $attributes, 'uniqueId', 'string' );
		$has_anchor             = Functions::sanitize_attribute( $attributes, 'has_anchor', 'boolean' );
		$enable_copy_link       = Functions::sanitize_attribute( $attributes, 'enable_copy_link', 'boolean' );
		$enable_links_in_tweet  = Functions::sanitize_attribute( $attributes, 'enable_links_in_tweet', 'boolean' );
		$permalink              = Functions::sanitize_attribute( $attributes, 'permalink', 'url' );
		$manual_permalink       = Functions::sanitize_attribute( $attributes, 'manual_permalink', 'url' );
		$url_shortening_service = Functions::sanitize_attribute( $attributes, 'url_shortening_service', 'string' );

		if ( ! $enable_copy_link ) {
			return false;
		}

		// We could be in a shortcode, so we need to get the permalink from query id.
		if ( is_wp_error( $permalink ) || '' === $permalink ) {
			if ( 'manual' === $url_shortening_service && ! is_wp_error( $manual_permalink ) ) {
				$permalink = $manual_permalink;
			} else {
				$permalink = get_permalink();
			}
		}

		// Check unique_id for WP_Error.
		if ( is_wp_error( $unique_id ) ) {
			$unique_id = '';
		}

		// Make sure anchor is set with uniqueId.
		if ( is_wp_error( $anchor ) || empty( $anchor ) ) {
			$anchor = $unique_id;
		}

		if ( ! is_wp_error( $permalink ) && strlen( $permalink ) > 0 && $enable_links_in_tweet ) {
			$hash_permalink = esc_url( $permalink ) . ( $has_anchor && $anchor ? '#' . $anchor : '' );
			if ( '' === $anchor ) {
				return $permalink;
			}
			return $hash_permalink;
		} elseif ( ! is_wp_error( $manual_permalink ) && strlen( $manual_permalink ) > 0 && $enable_links_in_tweet ) {
			$hash_permalink = esc_url( $manual_permalink );
			if ( '' === $anchor ) {
				return $hash_permalink;
			}
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
	 *
	 * @param bool $is_shortcode Whether this is a shortcode or not.
	 *
	 * see: add_shortcode_footer_html.
	 */
	public function add_footer_html( $is_shortcode = false ) {
		if ( ! has_block( 'mediaron/quotes-dlx' ) && ! $is_shortcode ) {
			return;
		}
		?>
		<svg width="0" height="0" class="hidden" style="display: none;">
			<symbol aria-hidden="true" data-prefix="fas" data-icon="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-x-icon">
				<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
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
			<symbol aria-hidden="true" data-prefix="fas" data-icon="at" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-at-icon">
				<path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64z"/>
			</symbol>
			<symbol aria-hidden="true" data-prefix="fab" data-icon="facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="quotes-dlx-facebook-icon">
				<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
			</symbol>
		</svg>
		<?php
	}

	/**
	 * Add footer icons to the shortcode.
	 */
	public function add_shortcode_footer_html() {
		$this->add_footer_html( true );
	}
}
