# QuotesDLX agent notes

QuotesDLX is an archived WordPress plugin. It is not actively maintained. Build steps for a fresh clone are in `README.md`. Constraints that must stay in place are also in `.cursor/rules/`.

Do not commit unless the user explicitly asks.

## Identity

- Entry file: `quotes-dlx.php`
- Plugin header version: 3.1.0
- Text domain: `quotes-dlx`
- PHP namespace: `MediaRonLLC\QuotesDLX`
- Block: `mediaron/quotes-dlx` (`src/js/blocks/tweet-quotes/`)
- Shortcode: `[quotesdlx]`, registered in `Blocks::run()`
- Requires WordPress 5.9+ and PHP 7.2+

`QuotesDLX::plugins_loaded()` boots `Blocks`, `Ajax`, `Adobe_Fonts`, `Admin\Plugin_Settings_Links`, and `Admin\Register_Menu`, then runs the one-time license and email cleanups. `init` calls `Themes\Themes_Init::run()`.

## Layout

- `php/` — core classes. Options, Ajax, blocks, functions, Adobe fonts.
- `php/admin/` — `MediaRonLLC\QuotesDLX\Admin` (`Register_Menu`, `Settings_Page`, `Plugin_Settings_Links`). Keep this directory name.
- `php/Themes/` — `MediaRonLLC\QuotesDLX\Themes`.
- `lib/autoload.php` — Composer PSR-4 autoload for `MediaRonLLC\QuotesDLX\` → `php/`. `composer.json` has no required packages. Do not add a Composer install step to the build.
- `src/js/blocks/tweet-quotes/` — block registration, `edit`, `block.json`. `save()` returns `null`.
- `src/js/admin-panel/` — settings app. `index.js` mounts React 18 on `#quotes-dlx-admin`.
- `src/js/admin-panel/admin-components/Tabs/index.js` — `HashRouter` from `react-router-dom`.
- `src/js/tweet-actions/actions.js` — front-end share actions, built as `dist/quotes-dlx-actions.js`.
- `src/js/utils/SendCommand.js` — admin `axios` POST helper. It posts to `ajaxurl`.
- `src/scss/` — front-end, admin, block editor, themes, and bundled fonts.
- `src/index.js` — empty file. It is the `common` webpack entry. Leave the `package.json` entry as it is; WordPress does not load `build/common.js`.

Admin hash routes:

- `#/` Home
- `#/defaults` Defaults
- `#/menu` Contextual Menu
- `#/themes` Default Theme
- `#/theme-options` Theme Options
- `#/advanced` Advanced

The settings screen is Settings → QuotesDLX (`settings_page_quotes-dlx`).

## How options are saved

Option classes extend `Options_Abstract`, use `Options_Trait`, and store a single array with `update_option`.

| Class | Option key |
| --- | --- |
| `Options_Defaults` | `quotesdlx_options_defaults` |
| `Options_Menu` | `quotesdlx_options_menu` |
| `Options_Theme` | `quotesdlx_theme_colors` |
| `Options_Advanced` | `quotesdlx_options_advanced` |

`php/Ajax.php` registers logged-in `wp_ajax_quotes_dlx_*` actions. Handlers check a nonce and `manage_options`. Save nonce action: `quotes-dlx-admin-save-options`. Retrieve nonce action: `quotes-dlx-admin-retrieve-options`. Both are created in `php/Functions.php`.

`QuotesDLX::purge_legacy_license_data()` runs once, then sets `quotesdlx_license_data_purged`. It deletes `quotesdlx_options_license` (option and site option) and the site transient `quotes_dlx_core_license_check`. Leave that cleanup in place.

`QuotesDLX::remove_email_feature()` runs once, then sets `quotesdlx_email_feature_removed`. It deletes `quotesdlx_options_emails` and forces menu option `enable_email_text` to false. Leave that cleanup in place.

## PHP and JS style

PHP follows `phpcs.xml.dist`: WordPress-Core and WordPress-Docs, tabs, file docblocks. Classes expose `public static function run()` and are started from the bootstrap above.

JavaScript follows `.eslintrc.json` (tabs, spaces inside parentheses, brackets, and JSX curly braces, `@wordpress/eslint-plugin` recommended-with-formatting). Admin copy uses `__()` from `@wordpress/i18n` with text domain `quotes-dlx`. The admin app renders with `react-dom/client` `createRoot`.

## Build details that must stay

`npm run build` is the production build. It is `@wordpress/scripts` plus the two compilers in `webpack.config.js`. Output paths are `build/` and `dist/`. Do not collapse them into one directory.

`sass-loader` uses the modern API (`api: 'modern'` in both Sass rules). Do not switch it back to the legacy JavaScript API. Sass `@import` deprecations are known and were left in place. Do not migrate those `@import` rules. `npm run build` still exits 0 while printing those warnings, including `map-has-key` and `map-get` warnings from `src/scss/breakpoints-mixin.scss`.

`react-is` is a devDependency because `styled-components` peers it. `styled-components` is imported by admin/block icon components such as `src/js/components/icons/Circle.js`. Keep `react-is` in `devDependencies`.

`npm run plugin-zip` does not produce a working package for this repo. The install zip is `npx grunt` after `npm run build`. See `README.md`.

## Do not bring these back

### Email

The public email feature was removed as a security risk. Do not reintroduce it.

Do not add `php/Email.php`, an `Options_Emails` class, an admin Emails tab, a `mailto:` link, a Turnstile or reCAPTCHA email form, or the public Ajax actions `quotes_dlx_email_interface` and `quotes_dlx_send_email` (`wp_ajax_nopriv_` or logged-in). Do not replace them with another send path.

`enable_email_text` and `email_text_label` stay in `src/js/blocks/tweet-quotes/block.json` so existing saved blocks remain valid. The editor UI and `Blocks::frontend()` do not render them. `Options_Menu` still has the keys, and `Ajax::ajax_save_admin_menu_options()` forces `enable_email_text` to false. Leave that force-false assignment in place.

### Outbound docs, support, and marketing links

These were removed from the product UI: the Support & Docs admin tab, dlxplugins docs and support URLs, the YouTube overview, theme author links, and Bitly or Jetpack visit links. Do not add them back.

Keep internal hash routes, theme preview iframes (`quotes_dlx_theme_preview` in `php/Ajax.php`), and font stylesheet `<link>` tags.

The plugin header still has its Plugin URI and Author URI. That is plugin metadata. Do not treat those two header fields as a reason to add new outbound links in the admin app, block, or themes.

### License UI

The EDD license screen and license options were removed. Do not restore that UI or `quotesdlx_options_license`. The one-time purge in `quotes-dlx.php` stays.

### Admin home

The upcoming-features card was removed from the admin home screen (`src/js/admin-panel/views/AdminHome.js`). Do not add it back.

## Fancybox

Admin theme and font previews use Fancybox 5 (`@fancyapps/ui`). The live callers (`AdminHome`, `AdminThemesDefaults`, `AdminAdvanced`, `ThemeSizes`, `ThemeFontSelector`) import `{ Fancybox } from '@fancyapps/ui'`.

`src/scss/admin-panel.scss` imports `node_modules/@fancyapps/ui/dist/fancybox/fancybox.css` and sets `.fancybox__container { z-index: 100000 }`.

`src/js/admin-panel/admin-components/Fancybox/index.js` is unused. Its imports (`@fancyapps/ui/dist/fancybox.esm.js` and `@fancyapps/ui/dist/fancybox.css`) are not the paths the previews use. Do not wire that wrapper back in or treat it as the preview implementation.

`fancybox/fancybox.js` and `fancybox/fancybox.css` are the old vendored Fancybox 4 files. `Gruntfile.js` still packs that directory. Do not enqueue `fancybox/fancybox.js` on the front end.

## Rating star colors

Theme CSS uses `--qdlx-{slug}-star-color` and `--qdlx-{slug}-star-color-inactive`. The active color has no fallback. Example from `src/scss/themes/midnight-blue.scss`: `var(--qdlx-midnight-blue-star-color)` and `var(--qdlx-midnight-blue-star-color-inactive, rgba(246, 246, 246, 0.52))`.

The front end prints the variables from `Blocks::output_theme_style_root()`, which calls `Blocks::get_theme_color_variables_css()`. The block editor canvas is an iframe, so the same variables are attached to the editor stylesheet `quotes-dlx-block-editor-styles` in `Blocks::register_editor_styles()` via `wp_add_inline_style`. That handle is `build/quotes-dlx.css`. Do not drop the inline editor variables.
