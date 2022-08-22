/* eslint-disable @wordpress/i18n-translator-comments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import { Button, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { escapeAttribute } from '@wordpress/escape-html';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import '@fancyapps/ui/dist/fancybox.css';
import sendCommand from '../../../utils/SendCommand';
import AdminThemeSizesLoader from '../Loaders/AdminThemeSizesLoader';
import Notice from '../Notice';
import Spinner from '../../../components/icons/Spinner';
import ErrorBoundary from '../ErrorBoundary';
import fontFamilies from '../../../../fonts/fonts';
import CircularExclamationIcon from '../../../components/icons/CircularExplanation';

const retrieveDefaults = ( props ) => {
	return sendCommand( 'quotes_dlx_get_theme_font_families', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
		template: props.template,
	} );
};

const ThemeFontSelector = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, props );
	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __(
						'Could not load theme font options.',
						'quotes-dlx'
					) }
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
			<Suspense fallback={ <AdminThemeSizesLoader showHeader={ true } /> }>
				<Interface defaults={ defaults } { ...props } />
			</Suspense>
		</ErrorBoundary>
	);
};

const Interface = ( props ) => {
	const { defaults, screenSizeLabel, screenSize, template } = props;
	const response = defaults();
	const { data, success } = response.data;

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const { enableCustomFonts,
		customFontPrimary,
		customFontSecondary,
		primaryFontFamily,
		secondaryFontFamily } = data;

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				enableCustomFonts,
				customFontPrimary,
				customFontSecondary,
				primaryFontFamily,
				secondaryFontFamily,
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	const hasErrors = () => {
		return false; //Object.keys( errors ).length > 0;
	};

	const onSubmit = ( formData ) => {
		setSaving( true );
		sendCommand( 'quotes_dlx_save_theme_font_families', {
			nonce: quotes_dlx_admin.options_save_nonce,
			template: props.template,
			...formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;

				if ( ajaxSuccess ) {
					setIsSaved( true );
					setTimeout( () => {
						reset( formData, { keepDirty: false } ); // From: https://stackoverflow.com/questions/63953501/react-hook-form-resetting-isdirty-without-clearing-form
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
		sendCommand( 'quotes_dlx_reset_theme_font_families', {
			nonce: quotes_dlx_admin.options_save_nonce,
			template: props.template,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					reset( ajaxData, { keepDirty: false } );
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

	useEffect( () => {
		//getFontFamiliesOptions();
	}, [] );

	const getFontFamiliesOptions = () => {
		setLoading( true );
		sendCommand( 'quotes_dlx_get_theme_font_families', {
			nonce: quotes_dlx_admin.options_retrieve_nonce,
			template: props.template,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					reset( ajaxData, { keepDirty: false } );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setLoading( false );
			} );
	};

	const getSaveResetButtons = () => {
		return (
			<>
				<div className="qdlx-admin__tabs--content-inner">
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
									: __( 'Save Options', 'quotes-dlx' )
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
									: __( 'Reset Options', 'quotes-dlx' )
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
							animate={ true }
							animationType="fadein"
						/>
					) }
					{ isReset && (
						<Notice
							message={ __( 'Your settings have been reset to defaults.' ) }
							status="success"
							politeness="assertive"
							animate={ true }
							animationType="fadein"
						/>
					) }
				</div>
			</>
		);
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

	const getUnsavedChangesWarning = () => {
		if ( ! isDirty ) {
			return null;
		}
		let animationType = 'fadein';
		if ( isDirty && isSaved ) {
			animationType = 'fadeout';
		}
		return (
			<Notice
				status="warning"
				className="qdlx-admin__unsaved-changes-warning"
				message={ __( 'You have unsaved changes.', 'quotes-dlx' ) }
				animate={ true }
				animationType={ animationType }
			/>
		);
	};

	const getFontFamilies = () => {
		// Get font families in value label pair.
		const families = [];

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

	const getFontOptions = () => {
		if ( ! getValues( 'enableCustomFonts' ) ) {
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

	const getPreviewLink = () => {
		return `${ ajaxurl }?action=quotes_dlx_theme_preview&nonce=${
			quotes_dlx_admin.options_retrieve_nonce
		}&template=${ encodeURIComponent( props.template ) }&screen=tablet&primary_font_family=${ encodeURIComponent( toTitleCase( getValues( 'primaryFontFamily' ) ) ) }&secondary_font_family=${ encodeURIComponent( toTitleCase( getValues( 'secondaryFontFamily' ) ) ) }`;
	};

	return (
		<div className="qdlx-admin__tabs--content-wrap">
			<div className="qdlx-admin__tabs--content-panel">
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<div className="qdlx-admin__tabs--content-heading">
						<h2>
							{ __( 'Select Font Families', 'quotes-dlx' ) }
						</h2>
						<p className="description">
							{ __(
								'Override the advanced font settings and set a font family for an individual theme.',
								'quotes-dlx'
							) }
						</p>
					</div>
					<div className="qdlx-admin__tabs--content-inner">
						{ getUnsavedChangesWarning() }
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">{ __( 'Font Options', 'quotes-dlx' ) }</th>
									<td>
										<Controller
											name="enableCustomFonts"
											control={ control }
											render={ ( { field: { onChange, value } } ) => (
												<ToggleControl
													label={ __( 'Enable Custom Theme Fonts', 'quotes-dlx' ) }
													className="qdlx-admin__toggle-control"
													checked={ value }
													onChange={ ( boolValue ) => {
														onChange( boolValue );
													} }
													help={ __(
														'Default fonts can be set in the Advanced options. This will allow you to select a font family set for each individual theme.',
														'quotes-dlx'
													) }
												/>
											) }
										/>
									</td>
								</tr>
								{ getFontOptions() }
							</tbody>
						</table>
						{ getUnsavedChangesWarning() }
					</div>
					{ getSaveResetButtons() }
				</form>
			</div>
		</div>
	);
};

export default ThemeFontSelector;
