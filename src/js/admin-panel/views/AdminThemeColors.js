/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import { Button, SelectControl } from '@wordpress/components';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import sendCommand from '../../utils/SendCommand';
import AdminThemeDefaultsLoader from '../admin-components/Loaders/AdminThemeDefaultsLoader';
import ColorPaletteIcon from '../../components/icons/ColorPalette';
import TabsContext from '../contexts/TabsContext';
import TwitterIcon from '../../components/icons/twitter';
import MeatballMenu from '../../components/MeatballMenu';
import ThemeColorPicker from '../admin-components/ThemeColorPicker';
import ThemePreview from '../admin-components/ThemePreview';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_themes_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<Suspense fallback={ <AdminThemeDefaultsLoader /> }>
			<Interface defaults={ defaults } { ...props } />
		</Suspense>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_themes_defaults';
	const { defaultTheme, setDefaultTheme } = useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;
	const { template, categories } = data;

	const getColors = ( defaults ) => {
		const colors = {};
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme) {
					colors.colorPrimary = theme.color_primary;
					colors.colorSecondary = theme.color_secondary;
					colors.colorAccent = theme.color_accent;
				}
			} );
		} );
		return colors;
	};

	// Get active theme and colors.
	const [ activeTheme, setActiveTheme ] = useState( data.template );
	const [ themeColors, setThemeColors ] = useState( getColors() );
	const [ defaultThemeColors, setDefaultThemeColors ] = useState( [
		{
			name: '',
			slug: '',
			value: '',
		},
	] );

	// Get saved colors (TODO - Read from data ).
	const [ colorPrimary, setColorPrimary ] = useState( '' );
	const [ colorSecondary, setColorSecondary ] = useState( '' );
	const [ colorAccent, setColorAccent ] = useState( '' );

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	useEffect( () => {
		setLoading( true );
		sendCommand( 'quotes_dlx_get_theme_colors', {
			nonce: quotes_dlx_admin.options_retrieve_nonce,
			active_template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setThemeColors( ajaxData.colors );
					setDefaultThemeColors( Object.values( ajaxData.defaults ) );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setLoading( false );
			} );
	}, [ activeTheme ] );

	useEffect( () => {
		setThemeColors( {
			colorPrimary,
			colorSecondary,
			colorAccent,
		} );
	}, [ colorPrimary, colorSecondary, colorAccent ] );

	const getActiveThemeStylesheet = () => {
		let stylesheet = '';
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme ) {
					stylesheet = theme.stylesheet;
				}
			} );
		} );
		return stylesheet;
	};

	const getCategories = () => {
		return categories.map( ( cat, catIndex ) => (
			<SelectControl
				key={ cat.slug }
				className="qdlx-admin__themes--content-inner"
				label={ __( 'Select a Theme', 'quotes-dlx' ) }
				value={ activeTheme }
				onChange={ ( newTheme ) => setActiveTheme( newTheme ) }
			>
				{ getThemes( cat ) }
			</SelectControl>
		) );
	};

	const GetThemePreview = () => {
		const defaultColors = getColors( true );
		return (
			<>
				<ThemePreview activeTheme={ activeTheme } stylesheet={ getActiveThemeStylesheet() } { ...themeColors } />
			</>
		);
	};

	// const getAuthor = ( selectedTheme ) => {
	// 	return <a href={ selectedTheme.author_url }>{ selectedTheme.author_name }</a>;
	// };

	// const onThemeSelect = ( themeSlug ) => {
	// 	setSaving( true );
	// 	sendCommand( 'quotes_dlx_save_admin_options_defaults', {
	// 		nonce: quotes_dlx_admin.options_save_nonce,
	// 		form_data: {
	// 			template: themeSlug,
	// 		},
	// 	} )
	// 		.then( ( ajaxResponse ) => {
	// 			const ajaxData = ajaxResponse.data.data;
	// 			const ajaxSuccess = ajaxResponse.data.success;
	// 			if ( ajaxSuccess ) {
	// 				// Add local storage.
	// 				localStorage.setItem(
	// 					localStorageKey,
	// 					JSON.stringify( { theme: ajaxData.theme } )
	// 				);

	// 				setIsSaved( true );
	// 				setTimeout( () => {
	// 					setIsSaved( false );
	// 				}, 3000 );
	// 			} else {
	// 				// Error stuff.
	// 			}
	// 		} )
	// 		.catch( ( ajaxResponse ) => {} )
	// 		.then( ( ajaxResponse ) => {
	// 			setSaving( false );
	// 		} );
	// };

	

	const getThemes = ( category ) => {
		return category.themes.map( ( theme, themeIndex ) => (
			<option key={ themeIndex } value={ theme.slug }>
				{ theme.name }
			</option>
		) );
	};

	if ( loading ) {
		return <AdminThemeDefaultsLoader />;
	}

	const defaultColors = getColors();

	return (
		<>
			<div className="qdlx-admin__tabs--content-wrap">
				<div className="qdlx-admin__tabs--content-panel">
					<div className="qdlx-admin__tabs--content-heading">
						<h1>
							<ColorPaletteIcon width={ 48 } height={ 48 } aria-hidden="true" />
							<span className="qdlx-admin__heading--text">
								{ __( 'Select Theme Colors', 'quotes-dlx' ) }
							</span>
						</h1>
						<p className="description">
							{ __(
								'You can modify the primary, secondary, and accent colors of each theme.',
								'quotes-dlx'
							) }
						</p>
					</div>
					<div className="qdlx-admin__tabs--content-inner">
						{ getCategories() }
					</div>
					<div className="qdlx-admin__theme-preview">
						{ GetThemePreview() }
					</div>
					<div className="qdlx-admin__color-pickers">
						<div className="qdlx-admin__color-primary">
							<ThemeColorPicker
								value={ themeColors.colorPrimary }
								onChange={ ( value ) => {
									setColorPrimary( value );
								}}
								label={ __( 'Primary Color', 'quotes-dlx' ) }
								defaultColors={ defaultThemeColors }
								defaultColor={ defaultColors.colorPrimary }
							/>
							<ThemeColorPicker
								value={themeColors.colorSecondary }
								onChange={ ( value ) => {
									setColorSecondary( value );
								}}
								label={ __( 'Secondary Color', 'quotes-dlx' ) }
								defaultColors={ defaultThemeColors }
								defaultColor={ defaultColors.colorSecondary }
							/>
							<ThemeColorPicker
								value={ themeColors.colorAccent }
								onChange={ ( value ) => {
									setColorAccent( value );
								}}
								label={ __( 'Accent Color', 'quotes-dlx' ) }
								defaultColors={ defaultThemeColors }
								defaultColor={ defaultColors.colorAccent }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDefaults;
