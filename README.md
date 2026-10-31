# QuotesDLX

QuotesDLX is a WordPress plugin that inserts shareable quotes as a block or a shortcode.

This project is archived and is not actively maintained.

The plugin header version is 3.1.0. It requires WordPress 7.0 or newer and PHP 8.2 or newer. The text domain is `quotes-dlx`.

## Prerequisites

- WordPress 7.0 or newer
- PHP 8.2 or newer
- Node.js `^20.19.0` or `>=22.13.0`, and npm `>=8.19.2`

Those Node and npm ranges are the `engines` field of the locked `@wordpress/scripts` 35.0.0. This repository has no `.nvmrc` and no `engines` field of its own.

PHP classes load from the autoloader already committed at `lib/autoload.php`. `composer.json` declares no packages, so Composer is not part of the build.

## Install and build

From the plugin directory:

```bash
npm install
npm run build
```

`npm run build` runs:

```text
wp-scripts build quotes-dlx=./src/js/blocks/tweet-quotes/index.js common=./src/index.js --blocks-manifest --env mode=production
```

For a watch build during development:

```bash
npm run start
```

`npm run start` uses the same entries with `--env mode=development`.

The production build prints Dart Sass deprecation warnings and still exits 0. Those warnings are expected. See `AGENTS.md`.

## What the build emits

`webpack.config.js` exports two configurations.

The first uses `@wordpress/scripts` and writes to `build/`:

- `build/quotes-dlx.js`, `build/quotes-dlx.css`, `build/quotes-dlx-rtl.css`, and `build/quotes-dlx.asset.php` from `src/js/blocks/tweet-quotes/index.js`
- `build/common.js` and `build/common.asset.php` from `src/index.js` (that file is empty; WordPress does not load `build/common.js`)
- `build/js/blocks/tweet-quotes/block.json`
- `build/blocks-manifest.php`

The second configuration writes to `dist/`. Its `output.path` is unset, so webpack uses `dist/`. `output.clean` replaces that directory on each build. It emits:

- Admin app: `dist/quotes-dlx-admin-panel.js`, `dist/quotes-dlx-admin-panel.asset.php`, `dist/quotes-dlx-admin-panel-css.css`, and lazy chunks such as `dist/AdminHome0.0.7.js`
- Front end: `dist/quotes-dlx-frontend.css` and `dist/quotes-dlx-actions.js`
- Block editor CSS: `dist/quotes-dlx-block-editor.css`
- Theme and font styles: `dist/quotes-dlx-themes.css`, `dist/quotes-dlx-fonts.css`, `dist/quotes-dlx-theme-*.css`, `dist/quotes-dlx-gfont-*.css`, and `dist/fonts/`
- Theme preview: `dist/quotes-dlx-theme-preview.js`, `dist/quotes-dlx-theme-preview.css`, and `dist/quotes-dlx-theme-preview.asset.php`

WordPress loads both directories. The block editor script is `build/quotes-dlx.js`. Admin, front-end, theme, font, and share-action files are under `dist/`.

## Installable zip

After `npm run build`, create the zip with:

```bash
npx grunt
```

That runs the default `compress` task in `Gruntfile.js` and writes `quotes-dlx.zip` in the plugin root. The file is gitignored. Entries sit at the archive root: `quotes-dlx.php`, `php/`, `lib/`, `build/`, `dist/`, `images/`, `templates/`, and `fancybox/`.

`npm run plugin-zip` runs `wp-scripts plugin-zip`. This `package.json` has no `files` field, so that command packs only the Plugin Handbook paths (`build/`, `quotes-dlx.php`, readme, license, and similar). The plugin PHP, `dist/`, and `lib/` are outside that list. Use `npx grunt` for a zip of this plugin.

## Load the plugin

Place this directory at `wp-content/plugins/quotes-dlx` so `quotes-dlx.php` is in that folder. `build/` and `dist/` must already exist. In wp-admin, activate QuotesDLX.

The block is QuotesDLX (`mediaron/quotes-dlx`). The shortcode is `[quotesdlx]`. Settings are under Settings → QuotesDLX.

The block is dynamic. `save()` in `src/js/blocks/tweet-quotes/index.js` returns `null`, and `php/Blocks.php` renders the front end.

## License

The plugin header declares GPL v2 or later. The `LICENSE` file in this repository is the GNU General Public License version 3.

Notes for later code changes are in `AGENTS.md`.
