/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';

import { __ } from '@wordpress/i18n';
import {
	TextControl,
	Button,
	ButtonGroup,
	RadioControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { escapeAttribute } from '@wordpress/escape-html';
import { useAsyncResource } from 'use-async-resource';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import classNames from 'classnames';
import GearIcon from '../../components/icons/Gear';
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import '@fancyapps/ui/dist/fancybox.css';
import AdminDefaultsLoader from '../admin-components/Loaders/AdminDefaultsLoader';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import twttr from '../../validation/twitter';
import CircularInfo from '../../components/icons/CircularInfo';
import FlaskIcon from '../../components/icons/FlaskIcon';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';
import fontFamilies from '../../../fonts/fonts';
import ErrorBoundary from '../admin-components/ErrorBoundary';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_options_advanced', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminAdvanced = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );

	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __( 'Could not load advanced options.', 'quotes-dlx' ) }
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
			<Suspense fallback={ <AdminDefaultsLoader /> }>
				<Interface defaults={ defaults } { ...props } />
			</Suspense>
		</ErrorBoundary>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_form_advanced';

	const {
		advancedTabDirtyCount,
		setAdvancedTabDirtyCount,
		setThemesDefaultsDirtyCount,
		setLicensesDirtyCount,
		setBlockDefaultsDirtyCount,
		setContextualMenuDefaultsDirtyCount,
		defaultTheme,
	} = useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;

	const [ showButtonOptions, setShowButtonOptions ] = useState(
		data.tweet_button_enabled
	);
	const [ buttonDisplay, setButtonDisplay ] = useState( data.tweet_button_display );
	const [ anchorDisplay, setAnchorDisplay ] = useState( data.has_anchor );
	const [ enableLinks, setEnableLinks ] = useState( data.enable_links_in_tweet );
	const [ enableUrlShortener, setEnableUrlShortener ] = useState(
		data.url_shortener
	);
	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ hardReset, setHardReset ] = useState( false );
	const [ isHardReset, setIsHardReset ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );
	const [ adobeFonts, setAdobeFonts ] = useState( data.adobe_fonts );
	const [ canResetOptions, setCanResetOptions ] = useState( false );

	const {
		desktop_breakpoint,
		desktop_breakpoint_unit,
		tablet_breakpoint,
		tablet_breakpoint_unit,
		mobile_breakpoint,
		mobile_breakpoint_unit,
		enable_fonts,
		custom_font_primary,
		custom_font_secondary,
		primary_font_family,
		secondary_font_family,
		enable_adobe_fonts,
		adobe_project_id,
		activate_adobe_fonts_admin,
		activate_adobe_fonts_frontend,
		template,
	} = data;

	const getDefaultValues = () => {
		return {
			desktopBreakpoint: desktop_breakpoint,
			desktopBreakpointUnit: desktop_breakpoint_unit,
			tabletBreakpoint: tablet_breakpoint,
			tabletBreakpointUnit: tablet_breakpoint_unit,
			mobileBreakpoint: mobile_breakpoint,
			mobileBreakpointUnit: mobile_breakpoint_unit,
			enableFonts: enable_fonts,
			customFontPrimary: custom_font_primary,
			customFontSecondary: custom_font_secondary,
			primaryFontFamily: primary_font_family,
			secondaryFontFamily: secondary_font_family,
			enableAdobeFonts: enable_adobe_fonts,
			adobeProjectId: adobe_project_id,
			activateAdobeFontsAdmin: activate_adobe_fonts_admin,
			activateAdobeFontsFrontend: activate_adobe_fonts_frontend,
		};
	};

	const {
		register,
		control,
		handleSubmit,
		setValue,
		getValues,
		reset,
		trigger,
	} = useForm( {
		defaultValues: getDefaultValues(),
	} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	const onSubmit = ( formData ) => {
		setSaving( true );

		sendCommand( 'quotes_dlx_save_admin_options_advanced', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset count.
					setAdvancedTabDirtyCount( 0 );
					localStorage.setItem( localStorageKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageKey + '_dirty_fields' );
					// Clear form dirty.
					reset( ajaxData, { keepDirty: false, keepDirtyValues: false } );

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

	const handleReset = ( e ) => {
		setResetting( true );
		sendCommand( 'quotes_dlx_reset_admin_options_advanced', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset local storage.
					setAdvancedTabDirtyCount( 0 );

					// Clear form dirty.
					reset( ajaxData );
					localStorage.setItem( localStorageKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageKey + '_dirty_fields' );

					// On save, add local storage variable with from contents: qdlx_advanced_save
					// Read in saved local storage variable qdlx_advanced_save
					// Replace with saved local storage with no dirty update.
					// Remove local storage variable.

					// Reset toggles.
					// Override variable upon save.

					setIsReset( true );
					setTimeout( () => {
						setIsReset( false );
					}, 3000 );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setResetting( false );
			} );
	};

	const refreshAdobeFonts = () => {
		setSaving( true );
		sendCommand( 'quotes_dlx_retrieve_remote_adobe_fonts', {
			nonce: quotes_dlx_admin.options_save_nonce,
			project_id: getValues( 'adobeProjectId' ),
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setAdobeFonts( ajaxData );
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

	useEffect( () => {}, [] );

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	useEffect( () => {
		// Get saved local storage JSON strings.
		const maybeSavedFormFields = localStorage.getItem( localStorageKey );
		const maybeDirtyFields = localStorage.getItem( localStorageKey + '_dirty_fields' );

		if ( null !== maybeSavedFormFields ) {
			// Parse saved JSON string into JSON object.
			const savedFormFields = JSON.parse( maybeSavedFormFields );

			// If saved form fields, proceed with setting fields.
			if ( Object.keys( savedFormFields.length > 0 ) ) {
				let savedDirtyFields = {};

				// Get any dirty fields.
				if ( null !== maybeDirtyFields ) {
					savedDirtyFields = JSON.parse( maybeDirtyFields );
				}

				for ( const [ key, value ] of Object.entries( savedFormFields ) ) {
					// If key is in saved dirty fields, set dirty.

					if ( savedDirtyFields.hasOwnProperty( key ) ) {
						// Key is dirty, so set dirty.
						setValue( key, value, { shouldDirty: true, shouldValidate: true } );
					} else {
						// Key is not dirty, so set value without dirty.
						setValue( key, value, { shouldDirty: false, shouldValidate: false } );
					}
				}
			}
		}
		setLoading( false );
	}, [] );

	useEffect( () => {
		if ( saving || resetting || loading ) {
			return;
		}
		if ( isDirty || advancedTabDirtyCount > 0 ) {
			// Get current dirty fields.
			setAdvancedTabDirtyCount( Object.keys( dirtyFields ).length );

			// Save form values to local storage.
			localStorage.setItem( localStorageKey, JSON.stringify( formValues ) );
			localStorage.setItem( localStorageKey + '_dirty_fields', JSON.stringify( dirtyFields ) );
		}
		setLoading( false );
	}, [ formValues ] );

	if ( loading ) {
		return <AdminDefaultsLoader />;
	}

	const getAdobeFonts = () => {
		console.log( adobeFonts );
		if ( undefined === adobeFonts || false === adobeFonts ) {
			return <></>;
		}
		return (
			<>
				<div className="components-base-control">
					<label
						htmlFor="adobe-font-list"
						className="components-base-control__label"
					>
						{ __( 'Current Adobe Fonts', 'quotes-dlx' ) }
					</label>
					<ul
						className="quotes-dlx-adobe-font-list quotes-dlx-admin-list-ul"
						id="adobe-font-list"
					>
						{ adobeFonts.map( ( font ) => {
							return <li key={ font.slug }>{ font.name }</li>;
						} ) }
					</ul>
				</div>
			</>
		);
	};

	const getFontFamilies = () => {
		// Get font families in value label pair.
		const families = [];

		// Try to get adobe fonts. Push them to the top.
		if ( false !== adobeFonts && undefined !== adobeFonts && getValues( 'enableAdobeFonts' ) ) {
			adobeFonts.forEach( ( font ) => {
				families.push( {
					label: font.name,
					value: font.slug,
				} );
			} );
		}

		// Get the rest of the fonts.
		for ( const [ key, fontfamily ] of Object.entries( fontFamilies ) ) {
			families.push( {
				label: fontfamily.name,
				value: fontfamily.slug,
			} );
		}
		families.push( {
			label: __( 'Custom', 'quotes-dlx' ),
			value: 'custom',
		} );
		return families;
	};

	const toTitleCase = ( string ) => {
		const firstLetterRegex = /(^[a-z])/g;
		const newString = string.replace( firstLetterRegex, ( match ) => {
			return match.toUpperCase();
		} );
		return newString.replace( /-([a-z])/gi, function( all, letter ) {
			return ' ' + letter.toUpperCase();
		} );
	};

	const getPreviewLink = () => {
		let selectedTemplate = template;
		if ( '' !== defaultTheme ) {
			selectedTemplate = defaultTheme;
		}
		return `${ ajaxurl }?action=quotes_dlx_theme_preview&fontsize=16
		) }&lineheight=${ encodeURIComponent( 1.65 ) }&buttonsize=${ encodeURIComponent(
	16
) }&nonce=${
	quotes_dlx_admin.options_retrieve_nonce
}&template=${ encodeURIComponent(
	selectedTemplate
) }&screen=tablet&primary_font_family=${ encodeURIComponent(
	toTitleCase( getValues( 'primaryFontFamily' ) )
) }&secondary_font_family=${ encodeURIComponent(
	toTitleCase( getValues( 'secondaryFontFamily' ) )
) }`;
	};

	const resetAllOptions = () => {
		// Clear local storage keys.
		localStorage.removeItem( 'quotes_dlx_menu_defaults' );
		localStorage.removeItem( 'quotes_dlx_form_defaults' );
		localStorage.removeItem( 'quotes_dlx_licenses' );
		localStorage.removeItem( 'quotes_dlx_themes_defaults' );
		localStorage.removeItem( 'quotes_dlx_form_advanced' );

		setAdvancedTabDirtyCount( 0 );
		setThemesDefaultsDirtyCount( 0 );
		setLicensesDirtyCount( 0 );
		setBlockDefaultsDirtyCount( 0 );
		setContextualMenuDefaultsDirtyCount( 0 );

		setHardReset( true );

		sendCommand( 'quotes_dlx_reset_all_options', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setIsHardReset( true );
					setTimeout( () => {
						window.location.reload();
					}, 3000 );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setHardReset( false );
			} );
	};

	const getAdobeFontsInterface = () => {
		if ( ! getValues( 'enableFonts' ) ) {
			return <></>;
		}
		return (
			<>
				<tr>
					<th scope="row">{ __( 'Adobe Fonts', 'quotes-dlx' ) }</th>
					<td>
						<Controller
							name="enableAdobeFonts"
							control={ control }
							render={ ( { field: { onChange, value } } ) => (
								<ToggleControl
									label={ __( 'Enable Adobe Fonts', 'quotes-dlx' ) }
									className="qdlx-admin__toggle-control"
									checked={ value }
									onChange={ ( boolValue ) => {
										onChange( boolValue );
									} }
									help={ __(
										'If you are using Adobe Fonts, you can use them in QuotesDLX.',
										'quotes-dlx'
									) }
								/>
							) }
						/>
						{ getValues( 'enableAdobeFonts' ) && (
							<>
								<Controller
									name="activateAdobeFontsAdmin"
									control={ control }
									render={ ( { field: { onChange, value } } ) => (
										<ToggleControl
											label={ __(
												'Activate Adobe Fonts in the Admin',
												'quotes-dlx'
											) }
											className="qdlx-admin__toggle-control"
											checked={ value }
											onChange={ ( boolValue ) => {
												onChange( boolValue );
											} }
											help={ __(
												'If you are not using a plugin to add Adobe fonts to your install, you can check this option to load Adobe Fonts in the admin area of your site.',
												'quotes-dlx'
											) }
										/>
									) }
								/>
								<Controller
									name="activateAdobeFontsFrontend"
									control={ control }
									render={ ( { field: { onChange, value } } ) => (
										<ToggleControl
											label={ __(
												'Activate Adobe Fonts on the Frontend',
												'quotes-dlx'
											) }
											className="qdlx-admin__toggle-control"
											checked={ value }
											onChange={ ( boolValue ) => {
												onChange( boolValue );
											} }
											help={ __(
												'If you are not using a plugin to add Adobe fonts to your site, you can check this option to load Adobe Fonts on the frontend area of your site.',
												'quotes-dlx'
											) }
										/>
									) }
								/>
							</>
						) }

						{ getValues( 'enableAdobeFonts' ) && (
							<>
								<Controller
									name="adobeProjectId"
									control={ control }
									rules={ {
										required: true,
										pattern: /^[a-z0-9]+$/i,
									} }
									render={ ( { field } ) => (
										<TextControl
											{ ...field }
											type="password"
											label={ __(
												'Adobe Fonts Project ID',
												'quotes-dlx'
											) }
											id="search-qdlx-no-autofill"
											className={ classNames(
												'qdlx-admin__text-control',
												{
													'has-error':
														'pattern' ===
															errors.anchorPrefix?.type ||
														'required' ===
															errors.anchorPrefix?.type,
													'is-required': true,
												}
											) }
											aria-required="true"
											help={ __(
												'Enter the Adobe Project ID of the web project in order to load Adobe Fonts.',
												'quotes-dlx'
											) }
										/>
									) }
								/>
								{ 'required' === errors.adobeProjectId?.type && (
									<Notice
										message={ __( 'This field is a required field.' ) }
										status="error"
										politeness="assertive"
										inline={ true }
										icon={ CircularExclamationIcon }
									/>
								) }
								{ 'pattern' === errors.adobeProjectId?.type && (
									<Notice
										message={ __(
											'Please use only lowercase letters and numbers.'
										) }
										status="error"
										politeness="assertive"
										inline={ true }
										icon={ CircularExclamationIcon }
									/>
								) }
								{ false !== adobeFonts && <>{ getAdobeFonts() }</> }
								<div className="qdlx-admin__tabs--content-actions">
									<Button
										className={ classNames(
											'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right qdlx__btn-accent',
											{ 'has-error': hasErrors() },
											{ 'has-icon': saving },
											{ 'is-saving': { saving } }
										) }
										type="button"
										text={
											saving
												? __( 'Getting Fonts…', 'quotes-dlx' )
												: __( 'Refresh Fonts', 'quotes-dlx' )
										}
										icon={ saving ? Spinner : false }
										iconSize="18"
										iconPosition="right"
										disabled={ saving || resetting }
										onClick={ async() => {
											const result = await trigger(
												'adobeProjectId'
											);
											if ( result ) {
												refreshAdobeFonts();
											}
										} }
									/>
								</div>
							</>
						) }
					</td>
				</tr>
			</>
		);
	};

	const getFontOptions = () => {
		if ( ! getValues( 'enableFonts' ) ) {
			return <></>;
		}
		return (
			<>
				<tr>
					<th scope="row">{ __( 'Font Selection', 'quotes-dlx' ) }</th>
					<td>
						<div className="quotes-dlx-admin-theme-options__select span-2">
							<Controller
								name="primaryFontFamily"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<SelectControl
										className="qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select"
										label={ __(
											'Select a Primary Font',
											'quotes-dlx'
										) }
										value={ value }
										onChange={ ( newFont ) => onChange( newFont ) }
										options={ getFontFamilies() }
									/>
								) }
							/>
							{ 'custom' === getValues( 'primaryFontFamily' ) && (
								<>
									<div className="quotes-dlx-admin-control-wrapper">
										<Controller
											name="customFontPrimary"
											control={ control }
											rules={ {
												required: true,
												pattern: /^[-\' ,A-Za-z0-9]+$/i,
											} }
											render={ ( { field } ) => (
												<TextControl
													{ ...field }
													value={ escapeAttribute( ( field.value.replace( /\\\'/g, "'" ) ) ) }
													label={ __(
														'Enter your custom secondary font.',
														'quotes-dlx'
													) }
													placeholder={ __(
														"e.g. 'Open Sans', sans-serif'",
														'quotes-dlx'
													) }
													className={ classNames(
														'qdlx-admin__text-control',
														{
															'has-error':
															'pattern' ===
																errors.customFontPrimary?.type ||
															'required' ===
																errors.customFontPrimary?.type,
															'is-required': true,
														}
													) }
													help={ __(
														'Set the font and fallbacks. Double quotes are not permitted.',
														'quotes-dlx'
													) }
													aria-required="true"
												/>
											) }
										/>
										{ 'required' ===
										errors.customFontPrimary?.type && (
											<Notice
												message={ __(
													'This field is a required field.'
												) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
										{ 'pattern' ===
										errors.customFontPrimary?.type && (
											<Notice
												message={ __(
													'There are invalid characters in the custom font. Make sure you are using single quotes and leave out the semi-colon at the end.'
												) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
									</div>
								</>
							) }
						</div>
						<div className="quotes-dlx-admin-theme-options__select span-2">
							<Controller
								name="secondaryFontFamily"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<SelectControl
										className="qdlx-admin__themes--content-inner qdlx-admin__theme-fonts-select"
										label={ __(
											'Select a Secondary Font',
											'quotes-dlx'
										) }
										value={ value }
										onChange={ ( newFont ) => onChange( newFont ) }
										options={ getFontFamilies() }
									/>
								) }
							/>
							{ 'custom' === getValues( 'secondaryFontFamily' ) && (
								<>
									<div className="quotes-dlx-admin-control-wrapper">
										<Controller
											name="customFontSecondary"
											control={ control }
											rules={ {
												required: true,
												pattern: /^[-\' ,A-Za-z0-9]+$/i,
											} }
											render={ ( { field } ) => (
												<TextControl
													{ ...field }
													value={ escapeAttribute( field.value.replace( /\\\'/g, "'" ) ) }
													label={ __(
														'Enter your custom secondary font.',
														'quotes-dlx'
													) }
													placeholder={ __(
														"e.g. 'Open Sans', sans-serif'",
														'quotes-dlx'
													) }
													className={ classNames(
														'qdlx-admin__text-control',
														{
															'has-error':
															'pattern' ===
																errors.customFontSecondary
																	?.type ||
															'required' ===
																errors.customFontSecondary?.type,
															'is-required': true,
														}
													) }
													help={ __(
														'Set the font and fallbacks. Double quotes are not permitted.',
														'quotes-dlx'
													) }
													aria-required="true"
												/>
											) }
										/>
										{ 'required' ===
										errors.customFontSecondary?.type && (
											<Notice
												message={ __(
													'This field is a required field.'
												) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
										{ 'pattern' ===
										errors.customFontSecondary?.type && (
											<Notice
												message={ __(
													'There are invalid characters in the custom font. Make sure you are using single quotes and leave out the semi-colon at the end.'
												) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
									</div>
								</>
							) }
						</div>
						<div className="components-base-control">
							<a
								data-fancybox
								onClick={ ( e ) => {
									e.preventDefault();
									new Fancybox(
										[
											{
												src: getPreviewLink(),
												type: 'iframe',
											},
										],
										{
											mainClass: 'qdlx-theme-preview-mobile',
											caption: __( 'Font Preview', 'quotes-dlx' ),
										}
									);
								} }
								href={ getPreviewLink() }
							>
								{ __( 'Preview Fonts', 'quotes-dlx' ) }
							</a>
						</div>
					</td>
				</tr>
			</>
		);
	};

	return (
		<>
			<div className="qdlx-admin__tabs--home-grid-wrap">
				<div className="qdlx-admin__tabs--content-wrap">
					<form onSubmit={ handleSubmit( onSubmit ) }>
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<FlaskIcon width={ 48 } height={ 48 } aria-hidden="true" />
									<span className="qdlx-admin__heading--text">
										{ __( 'Advanced Options', 'quotes-dlx' ) }
									</span>
								</h1>
								<p className="description">
									{ __(
										'Advanced options allow you to set default font families, breakpoints, and a reset options feature.',
										'quotes-dlx'
									) }
								</p>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<table className="form-table" role="presentation">
									<tbody>
										<tr>
											<th scope="row">{ __( 'Font Options', 'quotes-dlx' ) }</th>
											<td>
												<Controller
													name="enableFonts"
													control={ control }
													render={ ( { field: { onChange, value } } ) => (
														<ToggleControl
															label={ __( 'Enable Theme Fonts', 'quotes-dlx' ) }
															className="qdlx-admin__toggle-control"
															checked={ value }
															onChange={ ( boolValue ) => {
																onChange( boolValue );
															} }
															help={ __(
																'By default, the themes load their own fonts. If you would like to supply your own fonts, you can disable this option.',
																'quotes-dlx'
															) }
														/>
													) }
												/>
											</td>
										</tr>
										{ getAdobeFontsInterface() }
										{ getFontOptions() }
										<tr>
											<th scope="row">{ __( 'Breakpoints', 'quotes-dlx' ) }</th>
											<td>
												<div className="qdlx-admin__control-item">
													<Controller
														name="desktopBreakpoint"
														control={ control }
														rules={ { required: true, pattern: /^[0-9]+$/i } }
														render={ ( { field } ) => (
															<TextControl
																{ ...field }
																label={ __( 'Desktop Breakpoint (px)', 'quotes-dlx' ) }
																className={ classNames(
																	'qdlx-admin__text-control',
																	{
																		'has-error':
																			'pattern' ===
																				errors.desktopBreakpoint?.type ||
																			'required' ===
																				errors.desktopBreakpoint?.type,
																		'is-required': true,
																	}
																) }
																help={ __(
																	'Set the desktop breakpoint for all themes.',
																	'quotes-dlx'
																) }
																aria-required="true"
															/>
														) }
													/>
													{ 'required' === errors.desktopBreakpoint?.type && (
														<Notice
															message={ __( 'This field is a required field.' ) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													{ 'pattern' === errors.desktopBreakpoint?.type && (
														<Notice
															message={ __(
																'The desktop breakpoint can only be numbers.'
															) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													
												</div>
												<div className="qdlx-admin__control-item">
													<Controller
														name="tabletBreakpoint"
														control={ control }
														rules={ { required: true, pattern: /^[0-9]+$/i } }
														render={ ( { field } ) => (
															<TextControl
																{ ...field }
																label={ __( 'Tablet Breakpoint (px)', 'quotes-dlx' ) }
																className={ classNames(
																	'qdlx-admin__text-control',
																	{
																		'has-error':
																			'pattern' ===
																				errors.tabletBreakpoint?.type ||
																			'required' ===
																				errors.tabletBreakpoint?.type,
																		'is-required': true,
																	}
																) }
																help={ __(
																	'Set the tablet breakpoint for all themes.',
																	'quotes-dlx'
																) }
																aria-required="true"
															/>
														) }
													/>
													{ 'required' === errors.tabletBreakpoint?.type && (
														<Notice
															message={ __( 'This field is a required field.' ) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													{ 'pattern' === errors.tabletBreakpoint?.type && (
														<Notice
															message={ __(
																'The tablet breakpoint can only be numbers.'
															) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													
												</div>
												<div className="qdlx-admin__control-item">
													<Controller
														name="mobileBreakpoint"
														control={ control }
														rules={ { required: true, pattern: /^[0-9]+$/i } }
														render={ ( { field } ) => (
															<TextControl
																{ ...field }
																label={ __( 'Mobile Breakpoint (px)', 'quotes-dlx' ) }
																className={ classNames(
																	'qdlx-admin__text-control',
																	{
																		'has-error':
																			'pattern' ===
																				errors.mobileBreakpoint?.type ||
																			'required' ===
																				errors.mobileBreakpoint?.type,
																		'is-required': true,
																	}
																) }
																help={ __(
																	'Set the mobile breakpoint for all themes.',
																	'quotes-dlx'
																) }
																aria-required="true"
															/>
														) }
													/>
													{ 'required' === errors.mobileBreakpoint?.type && (
														<Notice
															message={ __( 'This field is a required field.' ) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													{ 'pattern' === errors.mobileBreakpoint?.type && (
														<Notice
															message={ __(
																'The mobile breakpoint can only be numbers.'
															) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
													
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<div className="qdlx-admin__tabs--content-actions">
									<Button
										className={ classNames(
											'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right',
											{ 'has-error': hasErrors() },
											{ 'has-icon': saving },
											{ 'is-saving': { saving } }
										) }
										type="submit"
										text={
											saving
												? __( 'Saving…', 'quotes-dlx' )
												: __( 'Save Defaults', 'quotes-dlx' )
										}
										icon={ saving ? Spinner : false }
										iconSize="18"
										iconPosition="right"
										disabled={ saving || resetting }
									/>
									<Button
										className={ classNames(
											'qdlx__btn qdlx__btn-danger qdlx__btn--icon-right',
											{ 'has-icon': resetting },
											{ 'is-resetting': { resetting } }
										) }
										type="button"
										text={
											resetting
												? __( 'Resetting…', 'quotes-dlx' )
												: __( 'Reset Defaults', 'quotes-dlx' )
										}
										icon={ resetting ? Spinner : false }
										iconSize="18"
										iconPosition="right"
										disabled={ saving || resetting }
										onClick={ ( e ) => {
											setResetting( true );
											handleReset( e );
										} }
									/>
								</div>
								{ hasErrors() && (
									<Notice
										message={ __(
											'There are form validation errors. Please correct them above.'
										) }
										status="error"
										politeness="polite"
									/>
								) }
								{ isSaved && (
									<Notice
										message={ __( 'Your settings have been saved.' ) }
										status="success"
										politeness="assertive"
									/>
								) }
								{ isReset && (
									<Notice
										message={ __( 'Your settings have been reset to defaults.' ) }
										status="success"
										politeness="assertive"
									/>
								) }
							</div>
						</div>
					</form>
				</div>
				<div className="qdlx-admin__tabs--content-wrap">
					<form
						onSubmit={ ( e ) => {
							e.preventDefault();
						} }
					>
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading qdlx-danger">
								<h1>
									<CircularExclamationIcon
										width={ 48 }
										height={ 48 }
										aria-hidden="true"
									/>
									<span className="qdlx-admin__heading--text">
										{ __( 'Reset Options', 'quotes-dlx' ) }
									</span>
								</h1>
								<p className="description">
									{ __(
										'Reset all options. Resetting can not be undone.',
										'quotes-dlx'
									) }
								</p>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<div className="qdlx-admin__tabs--content-actions no-flex">
									<div className="qdlx-admin-reset-confirmation">
										<input
											type="checkbox"
											id="qdlx-admin__reset-confirm"
											onClick={ ( e ) => {
												setCanResetOptions( e.target.checked );
											} }
										/>
										<label htmlFor="qdlx-admin__reset-confirm">
											{ __(
												'I understand that this will reset all options.',
												'quotes-dlx'
											) }
										</label>
									</div>
									<Button
										className={ classNames(
											'qdlx__btn qdlx__btn-danger qdlx__btn--icon-right',
											{ 'has-icon': resetting },
											{ 'is-resetting': { resetting } }
										) }
										type="button"
										text={
											hardReset
												? __( 'Resetting…', 'quotes-dlx' )
												: __( 'Reset Options', 'quotes-dlx' )
										}
										icon={ hardReset ? Spinner : false }
										iconSize="18"
										iconPosition="right"
										disabled={
											saving || resetting || hardReset || ! canResetOptions
										}
										onClick={ ( e ) => {
											resetAllOptions();
										} }
									/>
								</div>
								{ isHardReset && (
									<Notice
										message={ __( 'Your settings have been reset. Reloading…' ) }
										status="success"
										politeness="assertive"
									/>
								) }
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AdminAdvanced;
