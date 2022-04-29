<?php
/**
 * Initialize the add-on helper for setting theme categories.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Themes;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Handles tasks to create new theme categories.
 */
abstract class Themes_Addon_Categories {

	/**
	 * Category name.
	 *
	 * @var string $name The theme name.
	 */
	protected static string $name;

	/**
	 * Slug for the category.
	 *
	 * @var string $slug The category slug.
	 */
	protected static string $slug;

	/**
	 * Description for the category.
	 *
	 * @var string $description The theme category description.
	 */
	protected static string $description;

	/**
	 * Variable to hold all the registered categories.
	 *
	 * @var array Holds all the categories.
	 */
	private static $theme_categories = array();

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
	public static function register( $category_name, $args = array() ) {

		$category_slug        = $args['slug'] ?? sanitize_title( $category_name );
		$category_description = $args['description'] ?? '';

		if ( in_array( $category_slug, self::$theme_categories, true ) ) {
			return;
		}

		self::$theme_categories[] = array(
			'slug'        => $category_slug,
			'name'        => $category_name,
			'description' => $category_description,
		);
	}

	/**
	 * Return all registered theme categories.
	 */
	public static function get_categories() {
		return self::$theme_categories;
	}
}
