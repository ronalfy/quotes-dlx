<?php
/**
 * Initialize and display admin panel output.
 *
 * @package quotes-dlx
 */

namespace MediaRonLLC\QuotesDLX\Admin;

use MediaRonLLC\QuotesDLX\Functions as Functions;
/**
 * Class Functions
 */
class Settings_Page {

	/**
	 * Main class runner.
	 *
	 * @return Settings_Page.
	 */
	public static function run() {
		$self = new self();
		return $self;
	}

	/**
	 * Registers and outputs placeholder for settings.
	 *
	 * @since 1.0.0
	 */
	public static function settings_page() {
		?>
		<div class="wrap quotes-dlx-plugin">
			<div id="quotes-dlx-admin"></div>
		</div>
		<?php
	}
}
