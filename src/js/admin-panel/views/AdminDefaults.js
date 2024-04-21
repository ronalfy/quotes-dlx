/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';

import { __ } from '@wordpress/i18n';
import {
	TextControl,
	Button,
	ButtonGroup,
	RadioControl,
	FormTokenField,
	ToggleControl,
} from '@wordpress/components';
import { useAsyncResource } from 'use-async-resource';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import classNames from 'classnames';
import GearIcon from '../../components/icons/Gear';
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import AdminDefaultsLoader from '../admin-components/Loaders/AdminDefaultsLoader';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import twttr from '../../validation/twitter';
import CircularInfo from '../../components/icons/CircularInfo';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';
import ErrorBoundary from '../admin-components/ErrorBoundary';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_options_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
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
	const localStorageKey = 'quotes_dlx_form_defaults';

	const { blockDefaultsDirtyCount, setBlockDefaultsDirtyCount } =
		useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;

	const [ showButtonOptions, setShowButtonOptions ] = useState(
		data.tweet_button_enabled
	);
	const [ buttonDisplay, setButtonDisplay ] = useState( data.tweet_button_display );
	const [ isTwitterButtonEnabled, setIsTwitterButtonEnabled ] = useState(
		data.tweet_button_enabled
	);
	const [ isFacebookButtonEnabled, setIsFacebookButtonEnabled ] = useState(
		data.facebook_button_enabled
	);
	const [ anchorDisplay, setAnchorDisplay ] = useState( data.has_anchor );
	const [ enableLinks, setEnableLinks ] = useState( data.enable_links_in_tweet );
	const [ enableUrlShortener, setEnableUrlShortener ] = useState(
		data.url_shortener
	);
	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );
	const {
		maximum_width,
		maximum_width_unit,
		twitter_username,
		hashtags,
		align,
		tweet_button_enabled,
		share_button_text,
		tweet_button_alignment,
		tweet_icon_alignment,
		tweet_button_display,
		has_anchor,
		anchor_prefix,
		enable_links_in_tweet,
		url_shortening_service,
		url_shortener,
		facebook_button_enabled,
		icon_appearance,
		facebook_share_button_text,
	} = data;

	const getDefaultValues = () => {
		return {
			maximumWidth: maximum_width,
			maximumWidthUnit: maximum_width_unit,
			twitterUsername: twitter_username,
			hashtags,
			align,
			tweetButtonEnabled: tweet_button_enabled,
			shareButtonText: share_button_text,
			tweetButtonAlignment: tweet_button_alignment,
			tweetIconAlignment: tweet_icon_alignment,
			tweetButtonDisplay: tweet_button_display,
			anchorPrefix: anchor_prefix,
			hasAnchor: has_anchor,
			enableLinksInTweet: enable_links_in_tweet,
			urlShorteningService: url_shortening_service,
			urlShortener: url_shortener,
			facebookButtonEnabled: facebook_button_enabled,
			facebookShareButtonText: facebook_share_button_text,
			iconAppearance: icon_appearance,
		};
	};

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: getDefaultValues(),
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	const onSubmit = ( formData ) => {
		setSaving( true );

		// Populate possible empty hashtags.
		if ( formData.hashtags.length === 0 ) {
			formData.hashtags = null;
		}
		sendCommand( 'quotes_dlx_save_admin_options_defaults', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset count.
					setBlockDefaultsDirtyCount( 0 );

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
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setSaving( false );
			} );
	};

	const handleReset = ( e ) => {
		setResetting( true );
		sendCommand( 'quotes_dlx_reset_admin_options_defaults', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset local storage.
					setBlockDefaultsDirtyCount( 0 );

					// Clear form dirty.
					reset( ajaxData );
					localStorage.setItem( localStorageKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageKey + '_dirty_fields' );

					// Reset toggles.
					setShowButtonOptions( ajaxData.tweetButtonEnabled );
					setEnableLinks( ajaxData.enableLinksInTweet );
					setEnableUrlShortener( ajaxData.urlShortener );
					setAnchorDisplay( ajaxData.hasAnchor );
					setButtonDisplay( ajaxData.tweetButtonDisplay );

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
		if ( isDirty || blockDefaultsDirtyCount > 0 ) {
			// Get current dirty fields.
			setBlockDefaultsDirtyCount( Object.keys( dirtyFields ).length );

			// Save form values to local storage.
			localStorage.setItem( localStorageKey, JSON.stringify( formValues ) );
			localStorage.setItem(
				localStorageKey + '_dirty_fields',
				JSON.stringify( dirtyFields )
			);
		}
		setLoading( false );
	}, [ formValues ] );

	// Get URL Shortening services (i.e., bitly, jetpack).
	const linkShortenerServices = [];
	if ( quotes_dlx_admin.bitly_plugin_active ) {
		linkShortenerServices.push( {
			label: __( 'Bitly', 'quotes-dlx' ),
			value: 'bitly',
		} );
	}
	if ( quotes_dlx_admin.jetpack_plugin_active ) {
		linkShortenerServices.push( {
			label: __( 'Jetpack', 'quotes-dlx' ),
			value: 'jetpack',
		} );
	}

	if ( loading ) {
		return <AdminDefaultsLoader />;
	}

	return (
		<>
			<div className="qdlx-admin__tabs--content-wrap">
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<div className="qdlx-admin__tabs--content-panel">
						<div className="qdlx-admin__tabs--content-heading">
							<h1>
								<GearIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'Block Defaults', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'These default options will automatically be set when you insert the Quotes block.',
									'quotes-dlx'
								) }
							</p>
						</div>
						<div className="qdlx-admin__tabs--content-inner">
							<table className="form-table" role="presentation">
								<tbody>
									<tr>
										<th scope="row">{ __( 'X Social Defaults', 'quotes-dlx' ) }</th>
										<td>
											<Controller
												name="twitterUsername"
												control={ control }
												rules={ {
													validate: ( value ) => {
														if ( value.length === 0 ) {
															return true;
														}
														return twttr.txt.isValidUsername( '@' + value );
													},
												} }
												render={ ( { field: { onChange, value } } ) => (
													<TextControl
														label={ __( 'X (formerly Twitter) Credit', 'quotes-dlx' ) }
														className="qdlx-admin__text-control"
														register="tweet_credit"
														placeholder="YourUsername"
														value={ value }
														onChange={ ( currentValue ) => {
															let twitterUsername = '';
															if ( currentValue.length > 0 ) {
																const replacement = currentValue.replace(
																	'@',
																	''
																); // Strip @ symbol.
																if ( currentValue.length > 0 ) {
																	const usernames = twttr.txt.extractMentions(
																		'@' + replacement
																	);
																	if ( typeof usernames[ 0 ] !== 'undefined' ) {
																		twitterUsername = usernames[ 0 ];
																	} else {
																		twitterUsername = replacement;
																	}
																}
															}
															// onChange's arg will send value into hook form
															onChange( twitterUsername );
														} }
														help={ __(
															'Leave this blank to have no default X credit',
															'quotes-dlx'
														) }
													/>
												) }
											/>
											{ 'validate' === errors.twitterUsername?.type && (
												<Notice
													message={ __( 'The X Username is Invalid.' ) }
													status="error"
													politeness="assertive"
													inline={ true }
													icon={ CircularExclamationIcon }
												/>
											) }
											<Controller
												name="hashtags"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<FormTokenField
														value={ value }
														placeholder={ __(
															'hashtag1, hashtag2, hashtag3',
															'quotes-dlx'
														) }
														className="quotes-dlx-hashtag-fields"
														tokenizeOnSpace={ true }
														tokenizeOnBlur={ true }
														label={ __( 'Hashtags', 'quotes-dlx' ) }
														onChange={ ( tokens ) => {
															const filteredTokens = [];
															tokens.forEach( function( item, index ) {
																const replacement = item.replace( '#', '' ); // Strip hashtag symbol.
																const hashtag = twttr.txt.extractHashtags(
																	'#' + replacement
																); // Add it back in for extraction.
																// Check if array contains anything.
																if ( typeof hashtag[ 0 ] !== 'undefined' ) {
																	filteredTokens.push( hashtag[ 0 ] );
																}
															} );
															onChange( filteredTokens );
														} }
													/>
												) }
											/>
										</td>
									</tr>
									<tr>
										<th scope="row">{ __( 'Button Defaults', 'quotes-dlx' ) }</th>
										<td>
											<Controller
												name="tweetButtonEnabled"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __(
															'Enable Click to Post Button',
															'quotes-dlx'
														) }
														className="qdlx-admin__toggle-control"
														checked={ value }
														onChange={ ( boolValue ) => {
															setIsTwitterButtonEnabled( boolValue );
															onChange( boolValue );
														} }
														help={ __(
															'Enable or Disable the Click to Post (formerly Tweet) button. This is useful if you want to hide the button and use the block for just quotes.',
															'quotes-dlx'
														) }
													/>
												) }
											/>
											{ isTwitterButtonEnabled && (
												<>
													<Controller
														name="shareButtonText"
														control={ control }
														rules={ { required: true } }
														render={ ( { field } ) => (
															<TextControl
																{ ...field }
																label={ __( 'Click to Post Text', 'quotes-dlx' ) }
																className={ classNames(
																	'qdlx-admin__text-control',
																	{
																		'has-error':
																			'required' ===
																			errors.shareButtonText?.type,
																		'is-required': true,
																	}
																) }
																aria-required="true"
																help={ __(
																	'This text will be the text displayed for the Click to Post button',
																	'quotes-dlx'
																) }
															/>
														) }
													/>
													{ 'required' === errors.shareButtonText?.type && (
														<Notice
															message={ __( 'This field is a required field.' ) }
															status="error"
															politeness="assertive"
															inline={ true }
															icon={ CircularExclamationIcon }
														/>
													) }
												</>
											) }
											<Controller
												name="facebookButtonEnabled"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __(
															'Enable Share on Facebook Button',
															'quotes-dlx'
														) }
														className="qdlx-admin__toggle-control"
														checked={ isFacebookButtonEnabled }
														onChange={ ( boolValue ) => {
															setIsFacebookButtonEnabled( boolValue );
															onChange( boolValue );
														} }
														help={ __(
															'Enable or Disable the Share on Facebook button. If enabled, this will allow your users to share the quote on Facebook.',
															'quotes-dlx'
														) }
													/>
												) }
											/>
											{ isFacebookButtonEnabled && (
												<Controller
													name="facebookShareButtonText"
													control={ control }
													rules={ { required: true } }
													render={ ( { field } ) => (
														<TextControl
															{ ...field }
															label={ __( 'Facebook Button Text', 'quotes-dlx' ) }
															className={ classNames(
																'qdlx-admin__text-control',
																{
																	'has-error':
																		'required' ===
																		errors.facebookButtonEnabled?.type,
																	'is-required': true,
																}
															) }
															aria-required="true"
															help={ __(
																'This text will be the text displayed for the Facebook share button',
																'quotes-dlx'
															) }
														/>
													) }
												/>
											) }
											{ ( isFacebookButtonEnabled || isTwitterButtonEnabled ) && (
												<>
													<Controller
														control={ control }
														name="tweetButtonDisplay"
														render={ ( { field: { onChange, value } } ) => (
															<RadioControl
																label={ __( 'Button Display', 'quotes-dlx' ) }
																help={ __(
																	'Choose to show just text, just an icon, or both.',
																	'quotes-dlx'
																) }
																selected={ value }
																onChange={ ( newValue ) => {
																	setButtonDisplay( newValue );
																	onChange( newValue );
																} }
																options={ [
																	{
																		label: __(
																			'Show text and icon',
																			'quotes-dlx'
																		),
																		value: 'full',
																	},
																	{
																		label: __( 'Show text only', 'quotes-dlx' ),
																		value: 'text',
																	},
																	{
																		label: __( 'Show icon only', 'quotes-dlx' ),
																		value: 'icon',
																	},
																] }
															/>
														) }
													/>
													{ getValues( 'tweetButtonDisplay' ) === 'icon' && (
														<>
															<Controller
																control={ control }
																name="iconAppearance"
																render={ ( { field: { onChange, value } } ) => (
																	<RadioControl
																		label={ __( 'Icon Appearance', 'quotes-dlx' ) }
																		help={ __(
																			'Display the icons as buttons or choose transparent for no button appearance.',
																			'quotes-dlx'
																		) }
																		selected={ value }
																		onChange={ ( newValue ) => {
																			onChange( newValue );
																		} }
																		options={ [
																			{
																				label: __(
																					'Button',
																					'quotes-dlx'
																				),
																				value: 'button',
																			},
																			{
																				label: __( 'Transparent', 'quotes-dlx' ),
																				value: 'transparent',
																			},
																		] }
																	/>
																) }
															/>
														</>
													) }
													<Controller
														name="tweetButtonAlignment"
														control={ control }
														render={ ( { field: { onClick, value } } ) => (
															<ButtonGroup className="qdlx-admin__button-group--align">
																<label>
																	{ __( 'Default Button Alignment', 'quotes-dlx' ) }
																</label>
																<Button
																	variant="primary"
																	icon="align-pull-left"
																	label={ __( 'Align Left', 'quotes-dlx' ) }
																	title={ __( 'Align Left', 'quotes-dlx' ) }
																	value="left"
																	className={ classNames( {
																		'is-active': 'left' === value,
																	} ) }
																	onClick={ ( e ) => {
																		setValue( 'tweetButtonAlignment', 'left', {
																			shouldDirty: true,
																		} );
																	} }
																/>
																<Button
																	variant="primary"
																	icon="align-center"
																	label={ __( 'Align Center', 'quotes-dlx' ) }
																	title={ __( 'Align Center', 'quotes-dlx' ) }
																	value="center"
																	className={ classNames( {
																		'is-active': 'center' === value,
																	} ) }
																	onClick={ ( e ) => {
																		setValue( 'tweetButtonAlignment', 'center', {
																			shouldDirty: true,
																		} );
																	} }
																/>
																<Button
																	variant="primary"
																	icon="align-pull-right"
																	label={ __( 'Align Right', 'quotes-dlx' ) }
																	title={ __( 'Align Right', 'quotes-dlx' ) }
																	value="right"
																	className={ classNames( {
																		'is-active': 'right' === value,
																	} ) }
																	onClick={ ( e ) => {
																		setValue( 'tweetButtonAlignment', 'right', {
																			shouldDirty: true,
																		} );
																	} }
																/>
																<p className="components-base-control__help">
																	{ __(
																		'Right alignment is recommended.',
																		'quotes-dlx'
																	) }
																</p>
															</ButtonGroup>
														) }
													/>
													{ ( 'icon' === buttonDisplay ||
														'full' === buttonDisplay ) && (
														<Controller
															name="tweetIconAlignment"
															control={ control }
															render={ ( { field: { onClick, value } } ) => (
																<ButtonGroup className="qdlx-admin__button-group--align">
																	<label>
																		{ __( 'X Icon Alignment', 'quotes-dlx' ) }
																	</label>
																	<Button
																		variant="primary"
																		icon="align-pull-left"
																		label={ __( 'Align Left', 'quotes-dlx' ) }
																		title={ __( 'Align Left', 'quotes-dlx' ) }
																		value="left"
																		className={ classNames( {
																			'is-active': 'left' === value,
																		} ) }
																		onClick={ ( e ) => {
																			setValue( 'tweetIconAlignment', 'left', {
																				shouldDirty: true,
																			} );
																		} }
																	/>
																	<Button
																		variant="primary"
																		icon="align-pull-right"
																		label={ __( 'Align Right', 'quotes-dlx' ) }
																		title={ __( 'Align Right', 'quotes-dlx' ) }
																		value="right"
																		className={ classNames( {
																			'is-active': 'right' === value,
																		} ) }
																		onClick={ ( e ) => {
																			setValue( 'tweetIconAlignment', 'right', {
																				shouldDirty: true,
																			} );
																		} }
																	/>
																	<p className="components-base-control__help">
																		{ __(
																			'Adjust the icon to the left or right of the button.',
																			'quotes-dlx'
																		) }
																	</p>
																</ButtonGroup>
															) }
														/>
													) }
												</>
											) }
										</td>
									</tr>
									<tr>
										<th scope="row">{ __( 'Link Settings', 'quotes-dlx' ) }</th>
										<td>
											<Notice
												message={ __(
													'A link to your post is on by default. You can customize the link appearance here.'
												) }
												status="info"
												politeness="polite"
												inline={ false }
												icon={ CircularInfo }
											/>
											<Controller
												name="enableLinksInTweet"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __(
															'Enable Links in the Post',
															'quotes-dlx'
														) }
														className="qdlx-admin__toggle-control"
														checked={ value }
														onChange={ ( boolValue ) => {
															setEnableLinks( boolValue );
															onChange( boolValue );
														} }
														help={ __(
															'You can disable all links from showing in the posts to X',
															'quotes-dlx'
														) }
													/>
												) }
											/>
											{ enableLinks && (
												<>
													<Controller
														name="hasAnchor"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Anchors', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	setAnchorDisplay( boolValue );
																	onChange( boolValue );
																} }
																help={ __(
																	'Anchors are appended to the end of a URL.',
																	'quotes-dlx'
																) }
															/>
														) }
													/>
													{ anchorDisplay && (
														<>
															<Controller
																name="anchorPrefix"
																control={ control }
																rules={ { required: true, pattern: /^[a-z]+$/i } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Anchor Prefix', 'quotes-dlx' ) }
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
																			'The anchor prefix will display at the end of your post URL.',
																			'quotes-dlx'
																		) }
																	/>
																) }
															/>
															{ 'required' === errors.anchorPrefix?.type && (
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
															{ 'pattern' === errors.anchorPrefix?.type && (
																<Notice
																	message={ __(
																		'Please use only lowercase letters.'
																	) }
																	status="error"
																	politeness="assertive"
																	inline={ true }
																	icon={ CircularExclamationIcon }
																/>
															) }
														</>
													) }
													<Controller
														name="urlShortener"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable URL Shortener', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	setEnableUrlShortener( boolValue );
																	onChange( boolValue );
																} }
																help={ __(
																	'A URL shortener shortens your link so you can have more characters in your Post.',
																	'quotes-dlx'
																) }
															/>
														) }
													/>
													{ enableUrlShortener && (
														<>
															<Notice
																message={ __(
																	'Both Bitly and Jetpack are supported. You will need the plugins activated and configured to set a default.',
																	'quotes-dlx'
																) }
																status="info"
																politeness="polite"
																inline={ false }
																icon={ CircularInfo }
															>
																<p className="description">
																	<a
																		href="https://wordpress.org/plugins/wp-bitly/"
																		target="_blank"
																		rel="noreferrer"
																	>
																		{ __( 'Visit the Bitly plugin', 'quotes-dlx' ) }
																	</a>
																	&nbsp;|&nbsp;
																	<a
																		href="https://wordpress.org/plugins/jetpack/"
																		target="_blank"
																		rel="noreferrer"
																	>
																		{ __(
																			'Visit the Jetpack plugin',
																			'quotes-dlx'
																		) }
																	</a>
																</p>
															</Notice>
															{ linkShortenerServices.length > 0 && (
																<Controller
																	control={ control }
																	name="urlShorteningService"
																	render={ ( { field: { onChange, value } } ) => (
																		<RadioControl
																			label={ __(
																				'URL Shortening Service',
																				'quotes-dlx'
																			) }
																			help={ __(
																				'Choose a URL shortening service. Select none for no link shortener.',
																				'quotes-dlx'
																			) }
																			selected={ value }
																			onChange={ ( shorteningValue ) => {
																				onChange( shorteningValue );
																			} }
																			options={ linkShortenerServices }
																		/>
																	) }
																/>
															) }
														</>
													) }
												</>
											) }
										</td>
									</tr>
									<tr>
										<th scope="row">
											{ __( 'Container Settings', 'quotes-dlx' ) }
										</th>
										<td>
											<Controller
												name="maximumWidth"
												control={ control }
												rules={ { required: true, pattern: /^[0-9]+$/i } }
												render={ ( { field } ) => (
													<TextControl
														{ ...field }
														label={ __( 'Block Maximum Width', 'quotes-dlx' ) }
														className={ classNames( 'qdlx-admin__text-control', {
															'has-error':
																'pattern' === errors.maximumWidth?.type ||
																'required' === errors.maximumWidth?.type,
															'is-required': true,
														} ) }
														help={ __(
															'If you have a large layout for your theme, this will be the maximum width of the block.',
															'quotes-dlx'
														) }
														aria-required="true"
													/>
												) }
											/>
											{ 'required' === errors.maximumWidth?.type && (
												<Notice
													message={ __( 'This field is a required field.' ) }
													status="error"
													politeness="assertive"
													inline={ true }
													icon={ CircularExclamationIcon }
												/>
											) }
											{ 'pattern' === errors.maximumWidth?.type && (
												<Notice
													message={ __( 'Maximum width can only be numbers.' ) }
													status="error"
													politeness="assertive"
													inline={ true }
													icon={ CircularExclamationIcon }
												/>
											) }
											<Controller
												control={ control }
												name="maximumWidthUnit"
												render={ ( { field: { onChange, value } } ) => (
													<RadioControl
														label={ __( 'Maximum Width Unit', 'quotes-dlx' ) }
														help={ __(
															'Select a unit for the max-width.',
															'quotes-dlx'
														) }
														selected={ value }
														onChange={ onChange }
														options={ [
															{ label: 'px', value: 'px' },
															{ label: 'em', value: 'em' },
															{ label: 'vw', value: 'vw' },
														] }
													/>
												) }
											/>
											<Controller
												name="align"
												control={ control }
												render={ ( { field: { onClick, value } } ) => (
													<ButtonGroup className="qdlx-admin__button-group--align">
														<label>
															{ __( 'Default block alignment', 'quotes-dlx' ) }
														</label>
														<Button
															variant="primary"
															icon="align-pull-left"
															label={ __( 'Align Left', 'quotes-dlx' ) }
															title={ __( 'Align Left', 'quotes-dlx' ) }
															value="left"
															className={ classNames( {
																'is-active': 'left' === value,
															} ) }
															onClick={ ( e ) => {
																setValue( 'align', 'left', {
																	shouldDirty: true,
																} );
															} }
														/>
														<Button
															variant="primary"
															icon="align-center"
															label={ __( 'Align Center', 'quotes-dlx' ) }
															title={ __( 'Align Center', 'quotes-dlx' ) }
															value="center"
															className={ classNames( {
																'is-active': 'center' === value,
															} ) }
															onClick={ ( e ) => {
																setValue( 'align', 'center', {
																	shouldDirty: true,
																} );
															} }
														/>
														<Button
															variant="primary"
															icon="align-pull-right"
															label={ __( 'Align Right', 'quotes-dlx' ) }
															title={ __( 'Align Right', 'quotes-dlx' ) }
															value="right"
															className={ classNames( {
																'is-active': 'right' === value,
															} ) }
															onClick={ ( e ) => {
																setValue( 'align', 'right', {
																	shouldDirty: true,
																} );
															} }
														/>
														<Button
															variant="primary"
															icon="align-wide"
															label={ __( 'Wide Width', 'quotes-dlx' ) }
															title={ __( 'Wide Width', 'quotes-dlx' ) }
															value="wide"
															className={ classNames( {
																'is-active': 'wide' === value,
															} ) }
															onClick={ ( e ) => {
																setValue( 'align', 'wide', {
																	shouldDirty: true,
																} );
															} }
														/>
														<Button
															variant="primary"
															icon="align-full-width"
															label={ __( 'Full Width', 'quotes-dlx' ) }
															title={ __( 'Full Width', 'quotes-dlx' ) }
															value="full"
															className={ classNames( {
																'is-active': 'full' === value,
															} ) }
															onClick={ ( e ) => {
																setValue( 'align', 'full', {
																	shouldDirty: true,
																} );
															} }
														/>
														<p className="components-base-control__help">
															{ __(
																'Center alignment is recommended.',
																'quotes-dlx'
															) }
														</p>
													</ButtonGroup>
												) }
											/>
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
		</>
	);
};

export default AdminDefaults;
