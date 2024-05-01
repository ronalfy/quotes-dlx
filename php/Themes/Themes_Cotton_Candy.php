<?php
/**
 * Initialization for the Cotton Candy theme.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Holds variables for the pink branded theme.
 */
class Themes_Cotton_Candy extends Themes_Addon {

	/**
	 * Contains an instance of this class, if available.
	 *
	 * @since  1.0.0
	 * @var    Themes_Cotton_Candy $instance If available, contains an instance of this class
	 */
	private static $instance = null;

	/**
	 * Theme name.
	 *
	 * @var string $name The theme name.
	 */
	protected static $name = 'Cotton Candy';

	/**
	 * Slug for the theme.
	 *
	 * @var string $slug The theme slug.
	 */
	protected static $slug = 'cotton-candy';

	/**
	 * Category for the theme.
	 *
	 * @var string $category The theme category.
	 */
	protected static $category = 'core';

	/**
	 * Theme version.
	 *
	 * @var string $version The theme version.
	 */
	protected static $version = '1.0.1';

	/**
	 * Description for the theme.
	 *
	 * @var string $theme_description The theme description.
	 */
	protected static $theme_description;

	/**
	 * Author name.
	 *
	 * @var string $author_name The author of the theme.
	 */
	protected static $author_name = 'Ronald Huereca';

	/**
	 * Author URL.
	 *
	 * @var string $author_url URL for the author.
	 */
	protected static $author_url = 'https://mediaron.com';

	/**
	 * Large Image Width. Used for previews.
	 *
	 * @var int $full_width Image width of full-size image.
	 */
	protected static $full_width = 900;

	/**
	 * Large Image height. Used for previews.
	 *
	 * @var int $full_height Image height of full-size image.
	 */
	protected static $full_height = 500;

	/**
	 * Theme color or gradient.
	 *
	 * @var string $preview_color The theme preview color hexcode or gradient color.
	 */
	protected static $preview_gradient = 'linear-gradient(180deg, hsla(209, 95%, 77%, 1) 0%, hsla(335, 77%, 88%, 1) 100%);';

	/**
	 * Preview URL image for theme.
	 *
	 * @var string $preview_image_url The theme preview image URL.
	 */
	protected static $preview_image_url = '';

	/**
	 * Stylesheet URL for enqueuing.
	 *
	 * @var string $stylesheet_url The stylesheet URL. Set 'core' for now stylesheet.
	 */
	protected static $stylesheet_url = 'core';

	/**
	 * Primary Color (hex code) for the theme.
	 *
	 * @var string $primary_color Primary color of theme.
	 */
	protected static $colors = array();

	/**
	 * Returns an instance of this class, and stores it in the $instance property.
	 *
	 * @since  1.0.0
	 *
	 * @return Themes_Bubble_Gum $instance An instance of the Themes_Light_Branded class
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new Themes_Cotton_Candy();
		}

		return self::$instance;
	}

	/**
	 * Get the name of the theme.
	 */
	protected static function get_name() {
		return _x( 'Cotton Candy', 'A warm pastel theme', 'quotes-dlx' );
	}

	/**
	 * Get the slug of the theme.
	 */
	protected static function get_slug() {
		return self::$slug;
	}

	/**
	 * Get the preview gradient of the theme.
	 */
	protected static function get_preview_gradient() {
		return self::$preview_gradient;
	}

	/**
	 * Get the stylesheet URL.
	 */
	protected static function get_stylesheet_url() {
		return Functions::get_plugin_url( 'dist/quotes-dlx-theme-cotton-candy.css' );
	}

	/**
	 * Get the image preview URL.
	 */
	protected static function get_preview_image_url() {
		return Functions::get_plugin_url( 'images/core-theme-cotton-candy.jpg' );
	}

	/**
	 * Get the category.
	 */
	protected static function get_category() {
		return self::$category;
	}

	/**
	 * Get the author.
	 *
	 * @return string author.
	 */
	protected static function get_author() {
		return self::$author_name;
	}

	/**
	 * Get the author url.
	 *
	 * @return string Author URL.
	 */
	protected static function get_author_url() {
		return self::$author_url;
	}

	/**
	 * Get the theme description.
	 *
	 * @return string Theme description.
	 */
	protected static function get_description() {
		self::$theme_description = __( 'A playful pastel theme.', 'quotes-dlx' );
		return self::$theme_description;
	}

	/**
	 * Get the theme version.
	 *
	 * @return string Theme version.
	 */
	protected static function get_version() {
		return self::$version;
	}

	/**
	 * Get the theme image preview width.
	 *
	 * @return int Theme image width.
	 */
	protected static function get_image_width() {
		return self::$full_width;
	}

	/**
	 * Get the theme image preview height.
	 *
	 * @return int Theme image height.
	 */
	protected static function get_image_height() {
		return self::$full_height;
	}

	/**
	 * Get the colors of the theme.
	 *
	 * @return array $args {
	 *    @type string $name  Name of the color.
	 *    @type string $slug  Slug of the color.
	 *    @type string $color Hex code (including #) of the color.
	 * }
	 */
	protected static function get_colors() {
		return array(
			array(
				'name'  => __( 'Primary', 'quotes-dlx' ),
				'slug'  => 'primary',
				'color' => '#8BC6FC',
			),
			array(
				'name'  => __( 'Secondary', 'quotes-dlx' ),
				'slug'  => 'secondary',
				'color' => '#F8C8DC',
			),
			array(
				'name'  => __( 'Accent', 'quotes-dlx' ),
				'slug'  => 'accent',
				'color' => '#FAC898',
			),
			array(
				'name'  => __( 'Text Color', 'quotes-dlx' ),
				'slug'  => 'text-color',
				'color' => '#FFFFFF',
			),
			array(
				'name'  => __( 'Button Primary Color', 'quotes-dlx' ),
				'slug'  => 'button-primary-color',
				'color' => '#FFFFFF',
			),
			array(
				'name'  => __( 'Button Primary Text Color', 'quotes-dlx' ),
				'slug'  => 'button-primary-text-color',
				'color' => '#8BC6FC',
			),
			array(
				'name'  => __( 'Button Secondary Color', 'quotes-dlx' ),
				'slug'  => 'button-secondary-color',
				'color' => '#8BC6FC',
			),
			array(
				'name'  => __( 'Button Secondary Text Color', 'quotes-dlx' ),
				'slug'  => 'button-secondary-text-color',
				'color' => '#FFFFFF',
			),
			array(
				'name'  => __( 'Button Secondary Text Color', 'quotes-dlx' ),
				'slug'  => 'button-secondary-text-color',
				'color' => '#FFFFFF',
			),
			array(
				'name'  => __( 'Light', 'quotes-dlx' ),
				'slug'  => 'light',
				'color' => '#FFFFFF',
			),
			array(
				'name'  => __( 'Dark', 'quotes-dlx' ),
				'slug'  => 'dark',
				'color' => '#000000',
			),
			array(
				'name'  => __( 'Link', 'quotes-dlx' ),
				'slug'  => 'link',
				'color' => '#EFBC8C',
			),
			array(
				'name'  => __( 'Link Hover', 'quotes-dlx' ),
				'slug'  => 'link-hover',
				'color' => '#333333',
			),
			array(
				'name'  => __( 'Link Underline', 'quotes-dlx' ),
				'slug'  => 'link-underline',
				'color' => '#EFBC8C',
			),
			array(
				'name'  => __( 'Link Underline Hover', 'quotes-dlx' ),
				'slug'  => 'link-underline-hover',
				'color' => '#333333',
			),
		);
	}
}
