<?php
/**
 * Initialization for the purple theme.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Holds variables for the purple theme.
 */
class Themes_Purple extends Themes_Addon {

	/**
	 * Contains an instance of this class, if available.
	 *
	 * @since  1.0.0
	 * @var    Themes_Purple $instance If available, contains an instance of this class
	 */
	private static $instance = null;

	/**
	 * Theme name.
	 *
	 * @var string $name The theme name.
	 */
	protected static string $name = 'Purple Bliss';

	/**
	 * Slug for the theme.
	 *
	 * @var string $slug The theme slug.
	 */
	protected static string $slug = 'purple-bliss';

	/**
	 * Category for the theme.
	 *
	 * @var string $category The theme category.
	 */
	protected static string $category = 'core';

	/**
	 * Theme version.
	 *
	 * @var string $version The theme version.
	 */
	protected static string $version = '1.0.4';

	/**
	 * Description for the theme.
	 *
	 * @var string $theme_description The theme description.
	 */
	protected static string $theme_description;

	/**
	 * Author name.
	 *
	 * @var string $author_name The author of the theme.
	 */
	protected static string $author_name = 'Ronald Huereca';

	/**
	 * Author URL.
	 *
	 * @var string $author_url URL for the author.
	 */
	protected static string $author_url = 'https://mediaron.com';

	/**
	 * Theme color or gradient.
	 *
	 * @var string $preview_color The theme preview color hexcode or gradient color.
	 */
	protected static string $preview_gradient = 'linear-gradient(90deg, rgba(80,0,141,1) 14%, rgba(246,245,251,1) 85%);';

	/**
	 * Preview URL image for theme.
	 *
	 * @var string $preview_image_url The theme preview image URL.
	 */
	protected static string $preview_image_url = '';

	/**
	 * Stylesheet URL for enqueuing.
	 *
	 * @var string $stylesheet_url The stylesheet URL. Set 'core' for now stylesheet.
	 */
	protected static string $stylesheet_url = 'core';

	/**
	 * Returns an instance of this class, and stores it in the $instance property.
	 *
	 * @since  1.0.0
	 *
	 * @return Themes_Purple $instance An instance of the Themes_Purple class
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new Themes_Purple();
		}

		return self::$instance;
	}

	/**
	 * Get the name of the theme.
	 */
	protected static function get_name() {
		return _x( 'Purple Bliss', 'A touch of Royalty to your quote.', 'quotes-dlx' );
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
		return Functions::get_plugin_url( 'dist/quotes-dlx-theme-purple-bliss.css' );
	}

	/**
	 * Get the image preview URL.
	 */
	protected static function get_preview_image_url() {
		return Functions::get_plugin_url( 'images/core-theme-purple.jpg' );
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
	 * Large Image Width. Used for previews.
	 *
	 * @var int $full_width Image width of full-size image.
	 */
	protected static int $full_width = 731;

	/**
	 * Large Image height. Used for previews.
	 *
	 * @var int $full_height Image height of full-size image.
	 */
	protected static int $full_height = 412;

	/**
	 * Get the theme description.
	 *
	 * @return string Theme description.
	 */
	protected static function get_description() {
		self::$theme_description = __( 'A touch of Royalty for your quote.', 'quotes-dlx' );
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
}
