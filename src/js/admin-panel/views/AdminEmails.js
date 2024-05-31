/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext, createRef } from 'react';

import { __, sprintf } from '@wordpress/i18n';
import {
	TextControl,
	Button,
	TextareaControl,
	RadioControl,
	RangeControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { isEmail } from '@wordpress/url';
import { useAsyncResource } from 'use-async-resource';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Fancybox } from '@fancyapps/ui';
import classNames from 'classnames';
import AtIcon from '../../components/icons/AtIcon';
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import AdminDefaultsLoader from '../admin-components/Loaders/AdminDefaultsLoader';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import twttr from '../../validation/twitter';
import CircularInfo from '../../components/icons/CircularInfo';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';
import ErrorBoundary from '../admin-components/ErrorBoundary';
import EmailTemplateTags from '../admin-components/EmailTemplateTags/index';

const ADDITIONAL_TEMPLATE_TAGS = [
	{ name: __( 'From Name', 'quotes-dlx' ), tag: '{{from_name}}' },
	{ name: __( 'From email', 'quotes-dlx' ), tag: '{{from_email}}' },
	{ name: __( 'To email', 'quotes-dlx' ), tag: '{{to_email}}' },
	{ name: __( 'Share Text', 'quotes-dlx' ), tag: '{{share_text}}' },
];

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_options_emails', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const HtmlParser = require( 'html-to-react' ).Parser;
const HtmlParserInstance = new HtmlParser();

const AdminEmails = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );

	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __( 'Could not load admin defaults.', 'quotes-dlx' ) }
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
	const localStorageKey = 'quotes_dlx_form_emails';

	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;

	const { emailTabDirtyCount, setEmailTabDirtyCount } = useContext( TabsContext );

	// Set up refs.
	const emailModalTitleInputRef = createRef();
	const emailSubjectInputRef = createRef();
	const emailBodyInputRef = createRef();

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const getDefaultValues = () => {
		return {
			recaptchaEnabled: data.recaptchaEnabled,
			recaptchaSiteKey: data.recaptchaSiteKey,
			recaptchaSecretKey: data.recaptchaSecretKey,
			recaptchaScoreThreshold: data.recaptchaScoreThreshold,
			akismetEnabled: data.akismetEnabled,
			turnstileEnabled: data.turnstileEnabled,
			turnstileSiteKey: data.turnstileSiteKey,
			turnstileSecret: data.turnstileSecret,
			turnstileTheme: data.turnstileTheme,
			turnstileLanguage: data.turnstileLanguage,
			turnstileWidgetSize: data.turnstileWidgetSize,
			widgetAppearance: data.widgetAppearance,
			fromName: data.fromName,
			fromEmail: data.fromEmail,
			emailSendType: data.emailSendType,
			emailSubject: data.emailSubject,
			emailBody: data.emailBody,
			captchaType: data.captchaType,
		};
	};

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: getDefaultValues(),
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields, setError, clearErrors } = useFormState( {
		control,
	} );

	const onSubmit = ( formData ) => {
		setSaving( true );

		sendCommand( 'quotes_dlx_save_admin_options_emails', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset count.
					setEmailTabDirtyCount( 0 );

					// Clear form dirty.
					reset( ajaxData );
					localStorage.setItem( localStorageKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageKey + '_dirty_fields' );

					setIsSaved( true );
					setTimeout( () => {
						setIsSaved( false );
					}, 3000 );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => { } )
			.then( ( ajaxResponse ) => {
				setSaving( false );
			} );
	};

	const handleReset = ( e ) => {
		setResetting( true );
		sendCommand( 'quotes_dlx_reset_admin_options_emails', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset local storage.
					setEmailTabDirtyCount( 0 );

					// Clear form dirty.
					reset( ajaxData );
					localStorage.setItem( localStorageKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageKey + '_dirty_fields' );

					setIsReset( true );
					setTimeout( () => {
						setIsReset( false );
					}, 3000 );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => { } )
			.then( ( ajaxResponse ) => {
				setResetting( false );
			} );
	};

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	useEffect( () => {
		// Get saved local storage JSON strings.
		const maybeSavedFormFields = localStorage.getItem( localStorageKey );
		const maybeDirtyFields = localStorage.getItem(
			localStorageKey + '_dirty_fields'
		);

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
		if ( isDirty || emailTabDirtyCount > 0 ) {
			// Get current dirty fields.
			setEmailTabDirtyCount( Object.keys( dirtyFields ).length );

			// Save form values to local storage.
			localStorage.setItem( localStorageKey, JSON.stringify( formValues ) );
			localStorage.setItem(
				localStorageKey + '_dirty_fields',
				JSON.stringify( dirtyFields )
			);
		}
		setLoading( false );
	}, [ formValues ] );

	if ( loading ) {
		return <AdminDefaultsLoader />;
	}

	/**
	 * Retrieves and displays spam protection settings.
	 *
	 * @return {null} Return component or null.
	 */
	const getSpamProtection = () => {
		return (
			<tr>
				<th scope="row">{ __( 'Spam Protection', 'quotes-dlx' ) }</th>
				<td>
					<p className="qdlx-admin-description">
						{ __(
							'Enable spam protection to help prevent unwanted emails.',
							'quotes-dlx'
						) }
					</p>
					<div className="qdlx-admin-component-row">
						<Controller
							name="akismet_enabled"
							control={ control }
							render={ ( { field: { onChange, value } } ) => (
								<ToggleControl
									label={ __( 'Enable Akismet Spam protection', 'quotes-dlx' ) }
									className="qdlx-admin__toggle-control"
									checked={ value }
									onChange={ ( newValue ) => {
										setValue( 'akismetEnabled', newValue );
										onChange( newValue );
									} }
									disabled={ ! quotes_dlx_admin.akismet_plugin_active }
								/>
							) }
						/>
					</div>
					{ ! quotes_dlx_admin.akismet_plugin_active && (
						<Notice
							message={ __(
								'Akismet is not installed or activated. Please install and activate Akismet to use this feature.',
								'quotes-dlx'
							) }
							status="warning"
							politeness="assertive"
						/>
					) }
					<div className="qdlx-admin-component-row">
						<Controller
							name="captchaType"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<RadioControl
									label={ __( 'Choose which CAPTCHA version you would like to use', 'quotes-dlx' ) }
									name="captchaType"
									selected={ value }
									options={
										[
											{
												label: __( 'None', 'quotes-dlx' ),
												value: 'none',
											},
											{
												label: __( 'reCAPTCHA 3', 'quotes-dlx' ),
												value: 'recaptcha',
											},
											{
												label: __( 'Turnstile', 'quotes-dlx' ),
												value: 'turnstile',
											},
										]
									}
									onChange={ ( newValue ) => {
										setValue( 'captchaType', newValue );
										onChange( newValue );
									} }
								/>
							) }
						/>
						{ ( 'turnstile' === getValues( 'captchaType' ) ) && (
							<>
								<div className="qdlx-admin-component-row">
									<p className="qdlx-admin-docs description">
										{ /* translators: %s: URL to Turnstile documentation */
											HtmlParserInstance.parse( sprintf( __( 'Please read this guide on <a href="%s">how to retrieve your Turnstile keys</a>.', 'quotes-dlx' ), 'https://dlxplugins.com/how-to/how-to-retrieve-your-cloudflare-turnstile-site-and-secret-keys/' ) ) }
									</p>
								</div>
								<div className="qdlx-admin-component-row">
									<Controller
										name="turnstileSiteKey"
										control={ control }
										rules={ { required: true } }
										render={ ( { field: { onChange, value } } ) => (
											<TextControl
												label={ __( 'Site Key', 'quotes-dlx' ) }
												value={ value }
												onChange={ ( newValue ) => {
													onChange( newValue );
												} }
												name="search-turnstile-site-key"
												className={ classNames( 'qdlx-admin__text-control', {
													'qdlx-error': 'required' === errors.turnstileSiteKey?.type,
													'is-required': true,
												} ) }
											/>
										) }
									/>
								</div>
								<div className="qdlx-admin-component-row">
									<Controller
										name="turnstileSecret"
										control={ control }
										rules={ { required: true } }
										render={ ( { field: { onChange, value } } ) => (
											<TextControl
												label={ __( 'Turnstile Secret Key', 'quotes-dlx' ) }
												value={ value }
												onChange={ ( newValue ) => {
													onChange( newValue );
												} }
												type="password"
												className={ classNames( 'qdlx-admin__text-control', {
													'qdlx-error': 'required' === errors.turnstileSecret?.type,
													'is-required': true,
												} ) }
												name="search-turnstile-secret-key"
											/>
										) }
									/>
								</div>
								<div className="qdlx-admin-component-row">
									{ ( getValues( 'turnstileSiteKey' ) && getValues( 'turnstileSecret' ) ) && (
										<>
											<div className="dlx-admin-component-row dlx-admin-component-row-button no-flex">
												<Button
													label={ __( 'Preview Turnstile', 'quotes-dlx' ) }
													className="dlx-admin__button dlx__btn-white"
													onClick={ () => {
														// Build a URL from admin-ajax.
														const adminAjaxUrl = quotes_dlx_admin.ajaxurl; // Can't use global `ajaxurl` here because `ajaxurl` is a relative path.

														// Add query params to adminAjaxUrl.
														const url = new URL( adminAjaxUrl );
														url.searchParams.set( 'action', 'quotes_dlx_turnstile_admin_preview' );
														url.searchParams.set( 'nonce', quotes_dlx_admin.preview_nonce );
														url.searchParams.set( 'siteKey', formValues.turnstileSiteKey );
														url.searchParams.set( 'secretKey', formValues.turnstileSecret );
														url.searchParams.set( 'language', formValues.language ?? 'en' );
														url.searchParams.set( 'widgetAppearance', formValues.widgetAppearance );
														url.searchParams.set( 'widgetTheme', formValues.turnstileTheme );
														url.searchParams.set( 'widgetSize', formValues.turnstileWidgetSize );

														// Let's get the URL.
														const iframeAjaxUrl = url.toString();

														// Launch iframe in fancybox.
														Fancybox.show( [ {
															src: iframeAjaxUrl,
															type: 'iframe',
															autoStart: false,
															id: 'dlx-quotes-turnstile-preview',
														} ] );
													} }
													icon={ <FontAwesomeIcon size="1x" icon={ faEye } style={ { color: 'currentColor' } } /> }
													iconSize="1x"

												>
													{ __( 'Preview and Test', 'quotes-dlx' ) }
												</Button>
												<Button
													className="dlx-admin__button dlx__btn-white"
													href="https://dlxplugins.com/how-to/how-to-retrieve-your-cloudflare-turnstile-site-and-secret-keys/"
													icon={ <FontAwesomeIcon size="1x" icon={ faArrowUpRightFromSquare } style={ { color: 'currentColor' } } /> }
													iconSize="1x"
													target="_blank"
												>
													{ __( 'Find Your Keys', 'quotes-dlx' ) }
												</Button>
											</div>
										</>
									) }
									<div className="qdlx-admin-component-row">
										<Controller
											name="turnstileTheme"
											control={ control }
											render={ ( { field: { onChange, value } } ) => (
												<SelectControl
													label={ __( 'Choose a Widget Theme', 'quotes-dlx' ) }
													className="dlx-admin__select-control"
													value={ value }
													onChange={ ( stringValue ) => {
														onChange( stringValue );
													} }
													options={ [
														/* light, dark, auto */
														{ label: __( 'Auto', 'quotes-dlx' ), value: 'auto' },
														{ label: __( 'Light', 'quotes-dlx' ), value: 'light' },
														{ label: __( 'Dark', 'quotes-dlx' ), value: 'dark' },
													] }
													help={ __(
														'Your Cloudflare Turnstile Widget Theme. If you select `auto`, the widget will automatically change between light and dark based on the user’s operating system preference.',
														'quotes-dlx'
													) }
												/>
											) }
										/>
									</div>
									<div className="qdlx-admin-component-row">
										<Controller
											name="widgetAppearance"
											control={ control }
											render={ ( { field: { onChange, value } } ) => (
												<SelectControl
													label={ __( 'Visibility', 'quotes-dlx' ) }
													className="dlx-admin__select-control"
													value={ value }
													onChange={ ( stringValue ) => {
														onChange( stringValue );
													} }
													options={ [
														/* light, dark, auto */
														{ label: __( 'Show Always', 'quotes-dlx' ), value: 'always' },
														{ label: __( 'Invisible', 'quotes-dlx' ), value: 'interaction-only' },
													] }
													help={ __(
														'Set whether the widget is visible or invisible. Users can still be presented with a challenge if the widget is invisible.',
														'quotes-dlx'
													) }
												/>
											) }
										/>
									</div>
									<div className="qdlx-admin-component-row">
										<Controller
											name="widgetSize"
											control={ control }
											rules={ { required: true } }
											render={ ( { field: { onChange, value } } ) => (
												<SelectControl
													label={ __( 'Widget Size', 'quotes-dlx' ) }
													help={ __(
														'Select the size for the widget.',
														'quotes-dlx'
													) }
													value={ value }
													options={ [
														/* normal, compact */
														{ label: __( 'Normal', 'quotes-dlx' ), value: 'normal' },
														{ label: __( 'Compact', 'quotes-dlx' ), value: 'compact' },
													] }
													onChange={ ( widgetSizeValue ) => {
														onChange( widgetSizeValue );
													} }
												/>
											) }
										/>
									</div>
									<div className="qdlx-admin-component-row">
										<Controller
											name="language"
											control={ control }
											render={ ( { field: { onChange, value } } ) => (
												<SelectControl
													label={ __( 'Language', 'quotes-dlx' ) }
													className="dlx-admin__select-control"
													value={ value }
													onChange={ ( stringValue ) => {
														onChange( stringValue );
													} }
													options={ [

														{ value: 'ar', label: __( 'Arabic', 'quotes-dlx' ) },
														{ value: 'ar-eg', label: __( 'Arabic (Egypt)', 'quotes-dlx' ) },
														{ value: 'zh', label: __( 'Chinese', 'quotes-dlx' ) },
														{ value: 'zh-cn', label: __( 'Chinese (Simplified)', 'quotes-dlx' ) },
														{ value: 'zh-tw', label: __( 'Chinese (Traditional)', 'quotes-dlx' ) },
														{ value: 'nl', label: __( 'Dutch', 'quotes-dlx' ) },
														{ value: 'en', label: __( 'English', 'quotes-dlx' ) },
														{ value: 'fa', label: __( 'Farsi', 'quotes-dlx' ) },
														{ value: 'fr', label: __( 'French', 'quotes-dlx' ) },
														{ value: 'de', label: __( 'German', 'quotes-dlx' ) },
														{ value: 'id', label: __( 'Indonesian', 'quotes-dlx' ) },
														{ value: 'it', label: __( 'Italian', 'quotes-dlx' ) },
														{ value: 'ja', label: __( 'Japanese', 'quotes-dlx' ) },
														{ value: 'ko', label: __( 'Korean', 'quotes-dlx' ) },
														{ value: 'tlh', label: __( 'Klingon', 'quotes-dlx' ) },
														{ value: 'pl', label: __( 'Polish', 'quotes-dlx' ) },
														{ value: 'pt', label: __( 'Portuguese', 'quotes-dlx' ) },
														{ value: 'pt-br', label: __( 'Portuguese (Brazil)', 'quotes-dlx' ) },
														{ value: 'ru', label: __( 'Russian', 'quotes-dlx' ) },
														{ value: 'es', label: __( 'Spanish', 'quotes-dlx' ) },
														{ value: 'tr', label: __( 'Turkish', 'quotes-dlx' ) },
														{ value: 'uk', label: __( 'Ukrainian', 'quotes-dlx' ) },
														{ value: 'uk-ua', label: __( 'Ukrainian (Ukraine)', 'quotes-dlx' ) },
													]
													}
													help={ __(
														'Your Cloudflare Turnstile Language.',
														'quotes-dlx'
													) }
												/>
											) }
										/>
									</div>
								</div>
							</>
						) }
						{ ( 'recaptcha' === getValues( 'captchaType' ) ) && (
							<>
								
								<div className="qdlx-admin-component-row">
									<Controller
										name="recaptchaSiteKey"
										control={ control }
										rules={ { required: true } }
										render={ ( { field } ) => (
											<TextControl
												label={ __( 'Recaptcha 3 Site Key', 'quotes-dlx' ) }
												{ ...field }
												className={ classNames( 'qdlx-admin__text-control', {
													'has-error': 'required' === errors.recaptchaSiteKey?.type,
													'is-required': true,
												} ) }
												help={ __(
													'Enter your Recaptcha 3 Site Key',
													'comment-edit-pro'
												) }
												aria-required="true"
											/>
										) }
									/>
									{ 'required' === errors.recaptchaSiteKey?.type && (
										<Notice
											message={ __( 'This field is a required field.' ) }
											status="error"
											politeness="assertive"
											inline={ true }
											icon={ CircularExclamationIcon }
										/>
									) }
								</div>
								<div className="qdlx-admin-component-row">
									<Controller
										name="recaptchaSecretKey"
										control={ control }
										rules={ { required: true } }
										render={ ( { field } ) => (
											<TextControl
												label={ __( 'Recaptcha 3 Secret Key', 'quotes-dlx' ) }
												{ ...field }
												className={ classNames( 'qdlx-admin__text-control', {
													'has-error': 'required' === errors.recaptchaSiteKey?.type,
													'is-required': true,
												} ) }
												help={ __(
													'Enter your Recaptcha 3 Secret Key',
													'comment-edit-pro'
												) }
												aria-required="true"
											/>
										) }
									/>
									{ 'required' === errors.recaptchaSecretKey?.type && (
										<Notice
											message={ __( 'This field is a required field.' ) }
											status="error"
											politeness="assertive"
											inline={ true }
											icon={ CircularExclamationIcon }
										/>
									) }
								</div>
								<div className="qdlx-admin-component-row">
									<Controller
										name="recaptchaScoreThreshold"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<>
												<RangeControl
													label={ __( 'Set reCAPTCHA Minimum Threshold', 'comment-edit-pro' ) }
													step={ 0.05 }
													value={ value }
													max={ 1 }
													min={ 0 }
													currentInput={ value }
													initialPosition={ value }
													allowReset={ true }
													className="qdlx-admin__range-control"
													onChange={ ( recaptchaThreshold ) => {
														onChange( recaptchaThreshold );
													} }
													help={ __(
														'The threshold score is between 0 and 1. The higher the score, the higher the chance of a successful reCAPTCHA challenge. The default value is 0.5. Meaning that the reCAPTCHA challenge will succeed if the score is greater than or equal to 0.5.',
														'comment-edit-pro'
													) }
													trackColor="#8019c4"
													railColor="#dad4eb"
												/>
											</>
										) }
									/>
								</div>
							</>
						) }
					</div>
				</td>
			</tr>
		);
	};

	/**
	 * Outputs email fields and template tags.
	 *
	 * @return {null} Return component or null.
	 */
	const getEmailFields = () => {
		if ( getValues( 'emailSendType' ) !== 'form' ) {
			return null;
		}
		return (
			<tr>
				<th scope="row">{ __( 'Email Fields', 'quotes-dlx' ) }</th>
				<td>
					<p className="qdlx-admin-description">
						{ __(
							'Customize the fields that are displayed in the email form.',
							'quotes-dlx'
						) }
					</p>
					<div className="qdlx-admin-component-row">
						<Controller
							name="emailModalTitle"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<div className="qdlx-admin-email-template-tag-row">
									<TextControl
										label={ __( 'Email Modal Title', 'quotes-dlx' ) }
										value={ value }
										onChange={ ( newValue ) => {
											onChange( newValue );
										} }
										className={ classNames( 'qdlx-admin__text-control', {
											'qdlx-error': 'required' === errors.emailModalTitle?.type,
											'is-required': true,
										} ) }
										ref={ emailModalTitleInputRef }
									/>
									<EmailTemplateTags
										onSelect={ ( tag ) => {
											// Focus on the input field.
											emailModalTitleInputRef.current.focus();
											// Insert the tag at the cursor position.
											const cursorPosition = emailModalTitleInputRef.current.selectionStart;
											const newSubject = [
												value.slice( 0, cursorPosition ),
												tag,
												value.slice( cursorPosition ),
											].join( '' );
											setValue( 'emailModalTitle', newSubject );
										} }
									/>
								</div>
							) }
						/>
						{ errors.emailSubject && (
							<Notice
								message={ __( 'This field is required.' ) }
								status="error"
								politeness="assertive"
								inline={ false }
								icon={ CircularExclamationIcon }
							/>
						) }
					</div>
					<div className="qdlx-admin-component-row">
						<Controller
							name="fromEmail"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<TextControl
									label={ __( 'From Email', 'quotes-dlx' ) }
									value={ value }
									onChange={ ( newValue ) => {
										if ( ! isEmail( newValue ) ) {
											setError( 'fromEmail', { shouldFocus: true } );
										} else {
											clearErrors( 'fromEmail' );
										}
										onChange( newValue );
									} }
									className={ classNames( 'qdlx-admin__text-control', {
										'qdlx-error': 'required' === errors.fromEmail?.type,
										'is-required': true,
									} ) }
								/>
							) }
						/>
						{ errors.fromEmail && (
							<Notice
								message={ __( 'This does not appear to be a valid email address.' ) }
								status="error"
								politeness="assertive"
								inline={ false }
								icon={ CircularExclamationIcon }
							/>
						) }
					</div>
					<div className="qdlx-admin-component-row">
						<Controller
							name="fromName"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<TextControl
									label={ __( 'From Name', 'quotes-dlx' ) }
									value={ value }
									onChange={ onChange }
									className={ classNames( 'qdlx-admin__text-control', {
										'qdlx-error': 'required' === errors.fromName?.type,
										'is-required': true,
									} ) }
									ref={ emailBodyInputRef }
								/>
							) }
						/>
					</div>
					<div className="qdlx-admin-component-row">
						<Controller
							name="emailSubject"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<div className="qdlx-admin-email-template-tag-row">
									<TextControl
										label={ __( 'Email Subject', 'quotes-dlx' ) }
										value={ value }
										onChange={ ( newValue ) => {
											onChange( newValue );
										} }
										className={ classNames( 'qdlx-admin__text-control', {
											'qdlx-error': 'required' === errors.emailSubject?.type,
											'is-required': true,
										} ) }
										ref={ emailSubjectInputRef }
									/>
									<EmailTemplateTags
										onSelect={ ( tag ) => {
											// Focus on the input field.
											emailSubjectInputRef.current.focus();
											// Insert the tag at the cursor position.
											const cursorPosition = emailSubjectInputRef.current.selectionStart;
											const newSubject = [
												value.slice( 0, cursorPosition ),
												tag,
												value.slice( cursorPosition ),
											].join( '' );
											setValue( 'emailSubject', newSubject );
										} }
									/>
								</div>
							) }
						/>
						{ errors.emailSubject && (
							<Notice
								message={ __( 'This field is required.' ) }
								status="error"
								politeness="assertive"
								inline={ false }
								icon={ CircularExclamationIcon }
							/>
						) }
					</div>
					<div className="qdlx-admin-component-row">
						<Controller
							name="emailBody"
							control={ control }
							rules={ { required: true } }
							render={ ( { field: { onChange, value } } ) => (
								<div className="qdlx-admin-email-template-tag-row">
									<TextareaControl
										label={ __( 'Email Body', 'quotes-dlx' ) }
										value={ value }
										onChange={ ( newValue ) => {
											onChange( newValue );
										} }
										className={ classNames( 'qdlx-admin__text-area-control', {
											'qdlx-error': 'required' === errors.emailBody?.type,
											'is-required': true,
										} ) }
										innerRef={ emailBodyInputRef }
									/>
									<EmailTemplateTags
										onSelect={ ( tag ) => {
											// Focus on the input field.
											emailBodyInputRef.current.focus();
											// Insert the tag at the cursor position.
											const cursorPosition = emailBodyInputRef.current.selectionStart;
											const newBody = [
												value.slice( 0, cursorPosition ),
												tag,
												value.slice( cursorPosition ),
											].join( '' );
											setValue( 'emailBody', newBody );
										} }
										additionalTags={ ADDITIONAL_TEMPLATE_TAGS }
									/>
								</div>
							) }
						/>
						{ errors.emailBody && (
							<Notice
								message={ __( 'This field is required.' ) }
								status="error"
								politeness="assertive"
								inline={ false }
								icon={ CircularExclamationIcon }
							/>
						) }
					</div>
				</td>
			</tr>
		);
	};

	return (
		<>
			<div className="qdlx-admin__tabs--content-wrap">
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<div className="qdlx-admin__tabs--content-panel">
						<div className="qdlx-admin__tabs--content-heading">
							<h1>
								<AtIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'Email Settings', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'Set spam protection and customize the email settings when someone shares a quote.',
									'quotes-dlx'
								) }
							</p>
						</div>
						<div className="qdlx-admin__tabs--content-inner">
							<table className="form-table" role="presentation">
								<tbody>
									<tr>
										<th scope="row">{ __( 'Email Send Behavior', 'quotes-dlx' ) }</th>
										<td>
											<p className="qdlx-admin-description">
												{ __( 'By default, emails are sent via a form. You can also send emails via a default email client.', 'quotes-dlx' ) }
											</p>
											<Controller
												name="emailSendType"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<RadioControl
														selected={ value }
														options={ [
															{
																label: __( 'Form', 'quotes-dlx' ),
																value: 'form',
															},
															{
																label: __( 'Email Client', 'quotes-dlx' ),
																value: 'mailto',
															},
														] }
														onChange={ ( newValue ) => {
															onChange( newValue );
														} }
													/>
												) }
											/>
										</td>
									</tr>
									{
										'form' === getValues( 'emailSendType' ) && (
											<>
												{ getEmailFields() }
												{ getSpamProtection() }
											</>
										)
									}
								</tbody>
							</table>
							<div className="qdlx-admin__tabs--content-actions">
								<Button
									className={ classNames(
										'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right',
										{ 'qdlx-error': hasErrors() },
										{ 'qdlx-icon': saving },
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
										{ 'qdlx-icon': resetting },
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
		</>
	);
};

export default AdminEmails;
