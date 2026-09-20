/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Fancybox } from '@fancyapps/ui';
import {
	TextControl,
	Button,
	ButtonGroup,
	RadioControl,
	FormTokenField,
	ToggleControl,
	Panel,
	PanelBody,
} from '@wordpress/components';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import AdminThemeDefaultsLoader from '../admin-components/Loaders/AdminThemeDefaultsLoader';
import CircularInfo from '../../components/icons/CircularInfo';
import Spinner from '../../components/icons/Spinner';
import PaintbrushIcon from '../../components/icons/paintbrush';
import 'photoswipe/dist/photoswipe.css';
import TabsContext from '../contexts/TabsContext';
import ErrorBoundary from '../admin-components/ErrorBoundary';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_themes_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __( 'Could not load admin theme defaults.', 'quotes-dlx' ) }
					<br />
					<a
						href="https://dlxplugins.com/support/"
						target="_blank"
						rel="noopener noreferrer"
					>
						DLX Plugins Support
					</a>
				</p>
			}
		>
			<Suspense fallback={ <AdminThemeDefaultsLoader /> }>
				<Interface defaults={ defaults } { ...props } />
			</Suspense>
		</ErrorBoundary>
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
		const maybeSavedTheme = localStorage.getItem( localStorageKey );
		if ( null !== maybeSavedTheme ) {
			const valuesToSave = JSON.parse( maybeSavedTheme );
			for ( const [ key, value ] of Object.entries( valuesToSave ) ) {
				if ( 'template' === key ) {
					setActiveTheme( value );
					setDefaultTheme( value );
				}
			}
		}
		setLoading( false );
	}, [] );

	const getCategories = () => {
		return categories.map( ( cat, catIndex ) => (
			<div key={ cat.slug } className="qdlx-admin__themes--content-inner">
				{ getThemes( cat ) }
			</div>
		) );
	};

	const getAuthor = ( selectedTheme ) => {
		return <a href={ selectedTheme.author_url }>{ selectedTheme.author_name }</a>;
	};

	const getButtonText = ( themeSlug ) => {
		if ( saving && activeTheme === themeSlug ) {
			return __( 'Saving…', 'quotes-dlx' );
		} else if ( activeTheme === themeSlug ) {
			return __( 'Default Theme', 'quotes-dlx' );
			// eslint-disable-next-line no-else-return
		} else {
			return __( 'Select This Theme', 'quotes-dlx' );
		}
	};

	const onThemeSelect = ( themeSlug ) => {
		setSaving( true );
		sendCommand( 'quotes_dlx_save_admin_options_defaults', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: {
				template: themeSlug,
			},
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Add local storage.
					localStorage.setItem(
						localStorageKey,
						JSON.stringify( { theme: ajaxData.template } )
					);
					setActiveTheme( ajaxData.template );

					setIsSaved( true );
					setTimeout( () => {
						setIsSaved( false );
					}, 3000 );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setSaving( false );
			} );
	};

	/**
	 * Get a preview link.
	 *
	 * @param {string} templateToPreview The template slug.
	 *
	 * @return {string} The preview URL.
	 */
	const getPreviewLink = ( templateToPreview ) => {
		return `${ ajaxurl }?action=quotes_dlx_theme_preview&fontsize=${ encodeURIComponent(
			16
		) }&lineheight=${ encodeURIComponent(
			1.65
		) }&buttonsize=${ encodeURIComponent( '16px' ) }&nonce=${
			quotes_dlx_admin.options_retrieve_nonce
		}&template=${ encodeURIComponent( templateToPreview ) }&screen=${ 'tablet' }`;
	};

	/**
	 * Get Fancybox iFrame content in an array of theme sources.
	 *
	 * @return {Array} The array of theme sources.
	 */
	const getThemesFancyboxArray = () => {
		const fancyThemesArray = [];
		categories.forEach( ( cat, catIndex ) => {
			cat.themes.forEach( ( theme, themeIndex ) => {
				fancyThemesArray.push(
					{
						src: getPreviewLink( theme.slug ),
						type: 'iframe',
						preload: true,
						caption: theme.name,
					}
				);
			} );
		} );
		return fancyThemesArray;
	};

	const getThemes = ( category ) => {
		const fancyThemesOptions = getThemesFancyboxArray();
		return category.themes.map( ( theme, themeIndex ) => (
			<div className="qdlx-admin__themes--content-panel" key={ themeIndex }>
				<div className="qdlx-admin__themes--content-panel-body">
					<figure>
						<a
							className="quotes-dlx-button button-reset show-cursor"
							onClick={ ( e ) => {
								e.preventDefault();
								Fancybox.show( fancyThemesOptions, { startIndex: themeIndex } );
							} }
							aria-label={ __( 'Preview Theme', 'quotes-dlx' ) }
							href={ getPreviewLink( theme.slug ) }
						>
							<img
								src={ theme.preview_image_url }
								caption={ theme.name }
								alt={ theme.name }
								style={ { maxWidth: '100%', height: 'auto' } }
								width={ theme.image_width }
								height={ theme.image_height }
							/>
						</a>
					</figure>
					<div className="qdlx-admin__themes--content-panel-heading">
						<h3>{ theme.name }</h3>
					</div>
					<div className="qdlx-admin__themes--meta-top">
						<div className="qdlx-admin__themes--meta-designer">
							{ __( 'Designed by:', 'quotes-dlx' ) } { getAuthor( theme ) }
						</div>
					</div>
					<div className="qdlx-admin__themes--description">
						<p className="description">{ theme.description }</p>
					</div>
					<div className="qdlx-admin__themes--button-select">
						{ activeTheme === theme.slug && ! saving && (
							<Notice
								message={ __( 'This is your default theme', 'quotes-dlx' ) }
								status="success"
								politeness="polite"
								inline={ false }
								icon={ CircularInfo }
							/>
						) }
						{ ( activeTheme !== theme.slug || saving ) && (
							<Button
								onClick={ ( e ) => {
									setSaving( true );
									setActiveTheme( theme.slug );
									setDefaultTheme( theme.slug );
									onThemeSelect( theme.slug );
								} }
								disabled={ activeTheme === theme.slug || saving }
								className={ classNames(
									'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right',
									{ 'has-icon': saving },
									{ 'is-saving': saving }
								) }
								icon={ saving && activeTheme === theme.slug ? Spinner : false }
								iconSize="18"
								iconPosition="right"
							>
								{ getButtonText( theme.slug ) }
							</Button>
						) }
					</div>
				</div>
			</div>
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
							<PaintbrushIcon width={ 48 } height={ 48 } aria-hidden="true" />
							<span className="qdlx-admin__heading--text">
								{ __( 'Choose a Default Theme', 'quotes-dlx' ) }
							</span>
						</h1>
						<p className="description">
							{ __(
								'The default theme will automatically be selected when you insert the block or shortcode.',
								'quotes-dlx'
							) }
						</p>
					</div>
					<div className="qdlx-admin__tabs--content-inner">
						<div className="qdlx-admin__themes--wrapper">{ getCategories() }</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDefaults;
