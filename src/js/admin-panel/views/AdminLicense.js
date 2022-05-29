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
import sendCommand from '../../utils/SendCommand';
import Notice from '../admin-components/Notice';
import AdminDefaultsLoader from '../admin-components/Loaders/AdminDefaultsLoader';
import KeyIcon from '../../components/icons/KeyIcon';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/pro-solid-svg-icons";

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_options_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminLicense = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );

	return (
		<Suspense fallback={ <AdminDefaultsLoader /> }>
			<Interface defaults={ defaults } { ...props } />
		</Suspense>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_form_defaults';

	const { blockDefaultsDirtyCount, setBlockDefaultsDirtyCount } = useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );
	const [ showSecret, setShowSecret ] = useState( false );

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
	} = data;

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				quotesdlxLicense: 'test123',
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( { control } );

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
					localStorage.setItem( localStorageKey, JSON.stringify( getValues() ) );

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
		const maybeSavedFormFields = localStorage.getItem(
			localStorageKey
		);
		if ( null !== maybeSavedFormFields ) {
			const valuesToSave = JSON.parse( maybeSavedFormFields );
			for ( const [ key, value ] of Object.entries( valuesToSave ) ) {
				setValue( key, value, { shouldDirty: blockDefaultsDirtyCount !== 0 ? true : false, shouldValidate: true } );
			}
		}
		if ( isDirty ) {
			const touchedFieldsCountToSave = Object.keys( dirtyFields ).length;
			setBlockDefaultsDirtyCount( touchedFieldsCountToSave );
		}
		setLoading( false );
	}, [] );

	useEffect( () => {
		if ( saving || resetting || loading ) {
			return;
		}
		if ( isDirty || blockDefaultsDirtyCount > 0 ) {
			// Get current form values.
			const formValuesToSave = JSON.stringify( getValues() );

			// Get the length of the fields that need to be saved.
			const touchedFieldsCountToSave = Object.keys( dirtyFields ).length;

			setBlockDefaultsDirtyCount( touchedFieldsCountToSave );

			// Store touched fields.
			localStorage.setItem( localStorageKey, formValuesToSave );
		} else {
			setBlockDefaultsDirtyCount( 0 );
		}
		setLoading( false );
	}, [ formValues ] );

	// Get URL Shortening services (i.e., bitly, jetpack).
	const linkShortenerServices = [
		{ label: __( 'None', 'quotes-dlx' ), value: 'none' },
	];
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
								<KeyIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'License', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'Add a license key to receive support and updates.',
									'quotes-dlx'
								) }
							</p>
						</div>
						<div className="qdlx-admin__tabs--content-inner">
							<div className="qdlx-admin__license--wrapper is-required">
								<div className="qdlx-admin__license--input-wrapper">
									<Controller
										name="quotesdlxLicense"
										control={ control }
										rules={ { required: true, pattern: /^[0-9A-Za-z]+$/i } }
										render={ ( { field } ) => (
											<TextControl
												{ ...field }
												label={ __( 'License Key', 'quotes-dlx' ) }
												id="search-quotes-dlx-license-secret"
												className={ classNames(
													'qdlx-admin__text-control',
													'qdlx-admin__text-control-license',
													{
														'has-error':
														'pattern' ===
															errors.quotesdlxLicense?.type ||
														'required' ===
															errors.quotesdlxLicense?.type,
														'is-required': true,
													}
												) }
												aria-required="true"
												help={ __(
													'Entering a license will enable support and updates.',
													'quotes-dlx'
												) }
												type={ showSecret ? 'text' : 'password' }
											/>
										) }
									/>
									<div className="qdlx-admin__license--input-preview">
										<input
											id="quotes-dlx-license-show-hide"
											type="checkbox"
											aria-label={ __( 'Click to Show or Hide the License', 'quotes-dlx' ) }
											onClick={ () => {
												if ( showSecret ) {
													setShowSecret( false );
												} else {
													setShowSecret( true );
												}
											} }
											title={ showSecret ? __( 'Hide License', 'quotes-dlx' ) : __( 'Show License', 'quotes-dlx' ) }
										/>
										<label htmlFor="quotes-dlx-license-show-hide not-is-required">
											<span className="quotes-dlx-license-show-hide--label">
												{ __( 'Click to Show or Hide the License', 'quotes-dlx' ) }
											</span>
											<span className="quotes-dlx-license-show-hide--icon">
												{ ! showSecret ? (
													<FontAwesomeIcon size={'1x'} icon={faEye} />
												) : (
													<FontAwesomeIcon size={'1x'} icon={faEyeSlash} />
												) }
												
											</span>

										</label>
									</div>
								</div>
							</div>
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

export default AdminLicense;
