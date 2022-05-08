const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const path = require( 'path' );
module.exports = ( env ) => {
	return [
		{
			...defaultConfig,
			module: {
				...defaultConfig.module,
				rules: [ ...defaultConfig.module.rules ],
			},
			mode: env.mode,
			devtool: 'source-map',
		},
		{
			entry: {
				'quotes-dlx-frontend': './src/scss/frontend.scss',
				'quotes-dlx-themes': { import: './src/scss/themes.scss' },
				'quotes-dlx-admin-panel': './src/js/admin-panel/index.js',
				'quotes-dlx-admin-panel-css': './src/scss/admin-panel.scss',
				'quotes-dlx-block-editor': './src/scss/block-editor.scss',
				'quotes-dlx-actions': './src/js/tweet-actions/actions.js',
				'quotes-dlx-fonts': { import: './src/scss/themes/fonts.scss' },
				'quotes-dlx-theme-midnight-blue': { import: './src/scss/themes/midnight-blue.scss' },
				'quotes-dlx-theme-purple-bliss': { import: './src/scss/themes/purple-bliss.scss' },
				'quotes-dlx-theme-dark-matter': { import: './src/scss/themes/dark-matter.scss' },
				'quotes-dlx-theme-light-branded': { import: './src/scss/themes/light-branded.scss' },
			},
			resolve: {
				alias: {
					react: path.resolve( 'node_modules/react' ),
				},
			},
			mode: env.mode,
			devtool: 'source-map',
			output: {
				filename: '[name].js',
				sourceMapFilename: '[file].map[query]',
				assetModuleFilename: 'fonts/[name][ext]',
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env', '@babel/preset-react' ],
							plugins: [
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-transform-arrow-functions',
							],
						},
					},
					{
						test: /\.scss$/,
						exclude: /(node_modules|bower_components)/,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
							},
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
								},
							},
							{
								loader: 'resolve-url-loader',
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true,
								},
							},
						],
					},
					{
						test: /\.css$/,
						include: [
							path.resolve(
								__dirname,
								'node_modules/react-loading-skeleton/dist'
							),
							path.resolve(
								__dirname,
								'node_modules/@fancyapps/ui/dist/fancybox.css'
							),
						],
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
							},
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
								},
							},
							'sass-loader',
						],
					},
					{
						test: /\.(woff2?|ttf|otf|eot|svg)$/,
						include: [ path.resolve( __dirname, 'fonts' ) ],
						exclude: /(node_modules|bower_components)/,
						type: 'asset/resource',
					},
				],
			},
			plugins: [ new RemoveEmptyScriptsPlugin(), new MiniCssExtractPlugin() ],
		},
	];
};
