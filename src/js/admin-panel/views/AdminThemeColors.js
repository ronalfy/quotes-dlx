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

	const [ activeTheme, setActiveTheme ] = useState( data.template );
	const [ colorPrimary, setColorPrimary ] = useState( '#1DA1F2' );

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const { template, categories } = data;

	useEffect( () => {
		setLoading( false );
	}, [] );

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

	const GetThemePreview = (
		<>
			<style>
				{ `:root {
					--qdlx-light-branded-primary: ${ colorPrimary };
				}` }
			</style>
			<link rel="stylesheet" href={ getActiveThemeStylesheet() } />
			<div
				className={ classNames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ activeTheme }` ]: true,
					'quotes-dlx-context-menu-disabled': false,
					'quotes-dlx-has-no-tweet-button': false,
				} ) }
				style={ { maxWidth: '650px' } }
			>
				<div className="quotes-dlx-wrapper">
					<figure>
						<blockquote className="quotes-dlx-text-wrapper">
							<div className="quotes-dlx-text">
								<div>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Mauris imperdiet leo sed tellus ultrices, eget lobortis eros
									molestie.
								</div><br />
								<div>
									Phasellus vehicula metus non nulla porttitor, non bibendum
									risus iaculis.
								</div><br />
								<div>
									<strong>By</strong>: <a>Maximus</a>
								</div>
							</div>
						</blockquote>
					</figure>
					<div className={ `quotes-dlx-button-wrapper right` }>
						<button
							className={ `quotes-dlx-button full quotes-dlx-button-icon-right` }
							onClick={ ( e ) => {
								e.preventDefault();
							} }
						>
							<>
								<span className="quotes-dlx-button-text">
									{ __( 'Click to Tweet', 'quotes-dlx' ) }
								</span>
								<span className="quotes-dlx-button-icon">
									<TwitterIcon />
								</span>
							</>
						</button>
					</div>
					<MeatballMenu
						enable_copy_text={ true }
						enable_copy_tweet={ true }
						enable_copy_link={ true }
						enable_tweet_this={ true }
					/>
				</div>
			</div>
		</>
	);

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

	const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];

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
						{ GetThemePreview }
					</div>
					<div className="qdlx-admin__color-pickers">
						<div className="qdlx-admin__color-primary">
							<ThemeColorPicker
								value={ colorPrimary }
								onChange={ ( value ) => {
									setColorPrimary( value );
								}}
								label={ __( 'Primary Color', 'quotes-dlx' ) }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDefaults;
