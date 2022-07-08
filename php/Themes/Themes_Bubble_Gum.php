<?php
/**
 * Initialization for the pink theme.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Holds variables for the pink branded theme.
 */
class Themes_Bubble_Gum extends Themes_Addon {

	/**
	 * Contains an instance of this class, if available.
	 *
	 * @since  1.0.0
	 * @var    Themes_Bubble_Gum $instance If available, contains an instance of this class
	 */
	private static $instance = null;

	/**
	 * Theme name.
	 *
	 * @var string $name The theme name.
	 */
	protected static $name = 'Bubble Gum';

	/**
	 * Slug for the theme.
	 *
	 * @var string $slug The theme slug.
	 */
	protected static $slug = 'bubble-gum';

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
	protected static $full_width = 750;

	/**
	 * Large Image height. Used for previews.
	 *
	 * @var int $full_height Image height of full-size image.
	 */
	protected static $full_height = 421;

	/**
	 * Theme color or gradient.
	 *
	 * @var string $preview_color The theme preview color hexcode or gradient color.
	 */
	protected static $preview_gradient = 'linear-gradient(90deg, rgba(29,161,242,1) 14%, rgba(200,222,251,1) 85%);';

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
	protected static $primary_color = '#1DA1F2';

	/**
	 * Secondary Color (hex code) for the theme.
	 *
	 * @var string $secondary_color Secondary color of theme.
	 */
	protected static $secondary_color = '#2B2B2B';

	/**
	 * Accent Color (hex code) for the theme.
	 *
	 * @var string $accent_color Accent color of theme.
	 */
	protected static $accent_color = '#657786';

	/**
	 * Returns an instance of this class, and stores it in the $instance property.
	 *
	 * @since  1.0.0
	 *
	 * @return Themes_Bubble_Gum $instance An instance of the Themes_Light_Branded class
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new Themes_Bubble_Gum();
		}

		return self::$instance;
	}

	/**
	 * Get the name of the theme.
	 */
	protected static function get_name() {
		return _x( 'Bubble Gum', 'A pink theme with with an emphasis on the quote.', 'quotes-dlx' );
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
		return Functions::get_plugin_url( 'dist/quotes-dlx-theme-bubble-gum.css' );
	}

	/**
	 * Get the image preview URL.
	 */
	protected static function get_preview_image_url() {
		return Functions::get_plugin_url( 'images/core-theme-light-branded.jpg' );
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
		self::$theme_description = __( 'A pink theme with an emphasis on the quote.', 'quotes-dlx' );
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
	 * Get the primary color of the theme.
	 *
	 * @return string Primary color of the theme (hex).
	 */
	protected static function get_color_primary() {
		return self::$primary_color;
	}

	/**
	 * Get the secondary color of the theme.
	 *
	 * @return string Secondary color of the theme (hex).
	 */
	protected static function get_color_secondary() {
		return self::$secondary_color;
	}

	/**
	 * Get the accent color of the theme.
	 *
	 * @return string accent color of the theme (hex).
	 */
	protected static function get_color_accent() {
		return self::$accent_color;
	}
}
