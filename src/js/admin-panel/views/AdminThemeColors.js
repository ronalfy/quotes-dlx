/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { more } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import {
	Button,
	SelectControl,
} from '@wordpress/components';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import AdminThemeDefaultsLoader from '../admin-components/Loaders/AdminThemeDefaultsLoader';
import CircularInfo from '../../components/icons/CircularInfo';
import Spinner from '../../components/icons/Spinner';
import ColorPaletteIcon from '../../components/icons/ColorPalette';
import 'photoswipe/dist/photoswipe.css';
import TabsContext from '../contexts/TabsContext';

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

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const { template, categories } = data;

	useEffect( () => {
		setLoading( false );
	}, [] );

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
				</div>
			</div>
		</>
	);
};

export default AdminDefaults;
