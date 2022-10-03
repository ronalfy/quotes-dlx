<?php
/**
 * Initialize the add-on helper for themes.
 *
 * Inspired by Gravity Forms add-on class.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Handles tasks to create new themes.
 */
abstract class Themes_Addon {

	/**
	 * Theme name.
	 *
	 * @var string $name The theme name.
	 */
	protected static $name;

	/**
	 * Slug for the theme.
	 *
	 * @var string $slug The theme slug.
	 */
	protected static $slug;

	/**
	 * Category for the theme.
	 *
	 * @var string $category The theme category.
	 */
	protected static $category;

	/**
	 * Theme version.
	 *
	 * @var string $version The theme version.
	 */
	protected static $version;

	/**
	 * Description for the theme.
	 *
	 * @var string $description The theme description.
	 */
	protected static $theme_description;

	/**
	 * Stylesheet URL for enqueuing.
	 *
	 * @var string $stylesheet_url The stylesheet URL. Set 'core' for now stylesheet.
	 */
	protected static $stylesheet_url;

	/**
	 * Theme gradient.
	 *
	 * @var string $preview_gradient The theme preview color gradient.
	 */
	protected static $preview_gradient;

	/**
	 * Preview URL image for theme.
	 *
	 * @var string $preview_image_url The theme preview image URL.
	 */
	protected static $preview_image_url;

	/**
	 * Author name.
	 *
	 * @var string $author_name The author of the theme.
	 */
	protected static $author_name;

	/**
	 * Author URL.
	 *
	 * @var string $author_url URL for the author.
	 */
	protected static $author_url;

	/**
	 * Large Image Width. Used for previews.
	 *
	 * @var int $full_width Image width of full-size image.
	 */
	protected static $full_width;

	/**
	 * Large Image height. Used for previews.
	 *
	 * @var int $full_height Image height of full-size image.
	 */
	protected static $full_height;

	/**
	 * Variable to hold all the registered themes.
	 *
	 * @var array Holds all the theme instances.
	 */
	private static $theme_addons = array();

	/**
	 * Register a new category - Pass it your init class.
	 *
	 * @param mixed $category_name The name of the category.
	 * @param array $args {
	 *        Optional. An array of arguments.
	 *        @type string description Category description.
	 *        @type string slug Category slug (if not present, the category name will be used for the slug).
	 * }
	 */
	/**
	 * Register a new theme - Pass it your init class.
	 *
	 * @param mixed $class Theme class.
	 * @param array $args {
	 *        Optional. An array of arguments.
	 *        @type string description The theme description.
	 */
	public static function register( $class, $args = array() ) {
		if ( in_array( $class, self::$theme_addons, true ) ) {
			return;
		}

		self::$theme_addons[] = $class;
	}

	/**
	 * Initialize/instantiate/return all the themes.
	 *
	 * @since 1.0.0
	 *
	 * @return string[]|Themes_Addon[] An array of class names or instances.
	 */
	public static function init_themes() {
		$themes = array_unique( self::$theme_addons );

		$instances = array();

		foreach ( $themes as $theme ) {
			$callback = array( $theme, 'get_instance' );
			if ( ! is_callable( $callback ) ) {
				continue;
			}
			$instances[] = call_user_func( $callback );
		}

		return $instances;
	}

	/**
	 * Return theme data in theme format.
	 *
	 * @param string $template The template to get theme data for. If empty, returns all.
	 */
	public static function get_theme_data( $template = '' ) {
		$instances = self::init_themes();

		$return = array();
		foreach ( $instances as $instance ) {
			$theme_data = array(
				'name'              => $instance->get_name(),
				'slug'              => $instance->get_slug(),
				'gradient'          => $instance->get_preview_gradient(),
				'stylesheet'        => $instance->get_stylesheet_url(),
				'category'          => $instance->get_category(),
				'description'       => $instance->get_description(),
				'author_name'       => $instance->get_author(),
				'author_url'        => $instance->get_author_url(),
				'author_url'        => $instance->get_author_url(),
				'preview_image_url' => $instance->get_preview_image_url(),
				'version'           => $instance->get_version(),
				'image_width'       => $instance->get_image_width(),
				'image_height'      => $instance->get_image_height(),
				'colors'            => $instance->get_colors(),
			);
			// Short circuit if template-specific data is requested.
			if ( $template === $instance->get_slug() ) {
				return $theme_data;
			}

			// No short circuit. Get all theme data.
			$return[] = $theme_data;
		}

		// Return false if no template is found.
		if ( ! empty( $template ) ) {
			return false;
		}

		// All is good. Return all theme data.
		return $return;
	}

	/**
	 * Get the name of the theme.
	 *
	 * @return string Name of the theme.
	 */
	abstract protected static function get_name();

	/**
	 * Get the slug of the theme.
	 *
	 * @return string Slug of the theme.
	 */
	abstract protected static function get_slug();

	/**
	 * Get the theme version.
	 *
	 * @return string Theme version.
	 */
	abstract protected static function get_version();

	/**
	 * Get the preview gradient of the theme.
	 *
	 * @return string Preview CSS gradient string.
	 */
	abstract protected static function get_preview_gradient();

	/**
	 * Get the stylesheet URL.
	 *
	 * @return string Stylesheet URL (core for no stylesheet).
	 */
	abstract protected static function get_stylesheet_url();

	/**
	 * Get the preview image URL.
	 *
	 * @return string Preview image URL.
	 */
	abstract protected static function get_preview_image_url();

	/**
	 * Get the category.
	 *
	 * @return string Category.
	 */
	abstract protected static function get_category();

	/**
	 * Get the author.
	 *
	 * @return string author.
	 */
	abstract protected static function get_author();

	/**
	 * Get the author url.
	 *
	 * @return string Author URL.
	 */
	abstract protected static function get_author_url();

	/**
	 * Get the theme description.
	 *
	 * @return string Theme description.
	 */
	abstract protected static function get_description();

	/**
	 * Get the theme image preview width.
	 *
	 * @return int Theme image width.
	 */
	abstract protected static function get_image_width();

	/**
	 * Get the theme image preview height.
	 *
	 * @return int Theme image height.
	 */
	abstract protected static function get_image_height();

	/**
	 * Get the colors of the theme.
	 *
	 * @return array $args {
	 *    @type string $name  Name of the color.
	 *    @type string $slug  Slug of the color.
	 *    @type string $color Hex code (including #) of the color.
	 * }
	 */
	abstract protected static function get_colors();

}
