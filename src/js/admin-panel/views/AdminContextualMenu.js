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
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import FlaskIcon from '../../components/icons/FlaskIcon';
import CircularInfo from '../../components/icons/CircularInfo';
import MenuIcon from '../../components/icons/MenuIcon';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';
import ErrorBoundary from '../admin-components/ErrorBoundary';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_menu_options_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __( 'Could not load contextual menu defaults.', 'quotes-dlx' ) }
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
	const localStorageFieldValuesKey = 'quotes_dlx_menu_defaults';
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;
	const {
		contextualMenuDefaultsDirtyCount,
		setContextualMenuDefaultsDirtyCount,
	} = useContext( TabsContext );
	const [ contextMenuActive, setContextMenuActive ] = useState(
		data.enable_contextual_menu
	);

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const {

		enable_global_contextual_menu,
		enable_contextual_menu,
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
		enable_share_this,
		enable_email_text,
		email_text_label,
		copy_text_label,
		copy_tweet_label,
		copy_link_label,
		tweet_this_label,
		share_this_label,
	} = data;

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				enableGlobalContextualMenu: enable_global_contextual_menu,
				enableContextualMenu: enable_contextual_menu,
				enableCopyText: enable_copy_text,
				enableCopyTweet: enable_copy_tweet,
				enableCopyLink: enable_copy_link,
				enableTweetThis: enable_tweet_this,
				enableShareThis: enable_share_this,
				enableEmailText: enable_email_text,
				copyTextLabel: copy_text_label,
				emailTextLabel: email_text_label,
				copyTweetLabel: copy_tweet_label,
				copyLinkLabel: copy_link_label,
				tweetThisLabel: tweet_this_label,
				shareThisLabel: share_this_label,
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	const onSubmit = ( formData ) => {
		setSaving( true );
		sendCommand( 'quotes_dlx_save_admin_menu_options', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset count.
					setContextualMenuDefaultsDirtyCount( 0 );

					// Clear form dirty.
					reset( ajaxData );
					localStorage.setItem( localStorageFieldValuesKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageFieldValuesKey + '_dirty_fields' );

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
		sendCommand( 'quotes_dlx_reset_admin_menu_options', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset local storage.
					setContextualMenuDefaultsDirtyCount( 0 );

					// Clear form dirty.
					// Set form fields.
					reset( ajaxData );
					localStorage.setItem( localStorageFieldValuesKey, JSON.stringify( ajaxData ) );
					localStorage.removeItem( localStorageFieldValuesKey + '_dirty_fields' );

					setContextMenuActive( ajaxData.enableContextualMenu );

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
		const maybeSavedFormFields = localStorage.getItem( localStorageFieldValuesKey );
		const maybeDirtyFields = localStorage.getItem( localStorageFieldValuesKey + '_dirty_fields' );

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
		if ( isDirty || contextualMenuDefaultsDirtyCount > 0 ) {
			// Get current dirty fields.
			setContextualMenuDefaultsDirtyCount( Object.keys( dirtyFields ).length );

			// Save form values to local storage.
			localStorage.setItem( localStorageFieldValuesKey, JSON.stringify( formValues ) );
			localStorage.setItem( localStorageFieldValuesKey + '_dirty_fields', JSON.stringify( dirtyFields ) );
		}
		setLoading( false );
	}, [ formValues ] );

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
								<MenuIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'Contextual Menu Defaults', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'A meatballs menu is three horizontal dots that resembles a meatball sandwich. It is enabled by default and sits on the top-right corner of your quote. This frees up screen real-estate and allows users to choose how to interact with your quote.',
									'quotes-dlx'
								) }
							</p>
						</div>
						<div className="qdlx-admin__tabs--content-inner">
							<table className="form-table" role="presentation">
								<tbody>
									<tr>
										<th scope="row">{ __( 'Menu Visibility', 'quotes-dlx' ) }</th>
										<td>
											<Controller
												name="enableContextualMenu"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __(
															'Enable or disable the menu by default.',
															'quotes-dlx'
														) }
														className="qdlx-admin__toggle-control"
														checked={ value }
														onChange={ ( boolValue ) => {
															setContextMenuActive( boolValue );
															onChange( boolValue );
														} }
														help={ __(
															'The contextual menu hides away some options so as to not clutter up the Quote interface',
															'quotes-dlx'
														) }
														disabled={ saving || resetting }
													/>
												) }
											/>
										</td>
									</tr>
									{ getValues( 'enableContextualMenu' ) && (
										<>
											<tr>
												<th scope="row">{ __( 'Copy Quote', 'quotes-dlx' ) }</th>
												<td>
													<Controller
														name="enableCopyText"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Copy Quote', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	onChange( boolValue );
																} }
																help={ __(
																	'Enable the copying of the full quote.',
																	'quotes-dlx'
																) }
																disabled={ saving || resetting }
															/>
														) }
													/>
													{ getValues( 'enableCopyText' ) && (
														<>
															<Controller
																name="copyTextLabel"
																control={ control }
																rules={ { required: true } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Copy Quote Label', 'quotes-dlx' ) }
																		className={ classNames(
																			'qdlx-admin__text-control',
																			{
																				'has-error':
																			'required' ===
																			errors.copyTextLabel?.type,
																				'is-required': true,
																			}
																		) }
																		aria-required="true"
																	/>
																) }
															/>
															{ 'required' === errors.copyTextLabel?.type && (
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
												</td>
											</tr>
											<tr>
												<th scope="row">{ __( 'Copy Post', 'quotes-dlx' ) }</th>
												<td>
													<Controller
														name="enableCopyTweet"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Copy Post', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	onChange( boolValue );
																} }
																help={ __(
																	'Enable the copying of the X post to be used elsewhere.',
																	'quotes-dlx'
																) }
																disabled={ saving || resetting }
															/>
														) }
													/>
													{ getValues( 'enableCopyTweet' ) && (
														<>
															<Controller
																name="copyTweetLabel"
																control={ control }
																rules={ { required: true } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Copy Post Label', 'quotes-dlx' ) }
																		className={ classNames(
																			'qdlx-admin__text-control',
																			{
																				'has-error':
																			'required' ===
																			errors.copyTweetLabel?.type,
																				'is-required': true,
																			}
																		) }
																		aria-required="true"
																	/>
																) }
															/>
															{ 'required' === errors.copyTweetLabel?.type && (
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
												</td>
											</tr>
											<tr>
												<th scope="row">{ __( 'Copy Link', 'quotes-dlx' ) }</th>
												<td>
													<Controller
														name="enableCopyLink"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Copy Link', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	onChange( boolValue );
																} }
																help={ __(
																	'Enable the copying of the link to the post or quote.',
																	'quotes-dlx'
																) }
																disabled={ saving || resetting }
															/>
														) }
													/>
													{ getValues( 'enableCopyLink' ) && (
														<>
															<Controller
																name="copyLinkLabel"
																control={ control }
																rules={ { required: true } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Copy Link Label', 'quotes-dlx' ) }
																		className={ classNames(
																			'qdlx-admin__text-control',
																			{
																				'has-error':
																			'required' ===
																			errors.copyLinkLabel?.type,
																				'is-required': true,
																			}
																		) }
																		aria-required="true"
																	/>
																) }
															/>
															{ 'required' === errors.copyLinkLabel?.type && (
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
												</td>
											</tr>
											<tr>
												<th scope="row">{ __( 'Post This', 'quotes-dlx' ) }</th>
												<td>
													<Controller
														name="enableTweetThis"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Post This Button', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	onChange( boolValue );
																} }
																help={ __(
																	'A Post This (formerly Tweet) option will show at the bottom of the menu with this selected.',
																	'quotes-dlx'
																) }
																disabled={ saving || resetting }
															/>
														) }
													/>
													{ getValues( 'enableTweetThis' ) && (
														<>
															<Controller
																name="tweetThisLabel"
																control={ control }
																rules={ { required: true } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Post This Label', 'quotes-dlx' ) }
																		className={ classNames(
																			'qdlx-admin__text-control',
																			{
																				'has-error':
																			'required' ===
																			errors.tweetThisLabel?.type,
																				'is-required': true,
																			}
																		) }
																		aria-required="true"
																	/>
																) }
															/>
															{ 'required' === errors.tweetThisLabel?.type && (
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
												</td>
											</tr>
											<tr>
												<th scope="row">{ __( 'Share This', 'quotes-dlx' ) }</th>
												<td>
													<Controller
														name="enableShareThis"
														control={ control }
														render={ ( { field: { onChange, value } } ) => (
															<ToggleControl
																label={ __( 'Enable Share This (Facebook) Button', 'quotes-dlx' ) }
																className="qdlx-admin__toggle-control"
																checked={ value }
																onChange={ ( boolValue ) => {
																	onChange( boolValue );
																} }
																help={ __(
																	'A Share This (to Facebook) option will show at the bottom of the menu with this selected.',
																	'quotes-dlx'
																) }
																disabled={ saving || resetting }
															/>
														) }
													/>
													{ getValues( 'enableShareThis' ) && (
														<>
															<Controller
																name="shareThisLabel"
																control={ control }
																rules={ { required: true } }
																render={ ( { field } ) => (
																	<TextControl
																		{ ...field }
																		label={ __( 'Share This Label', 'quotes-dlx' ) }
																		className={ classNames(
																			'qdlx-admin__text-control',
																			{
																				'has-error':
																			'required' ===
																			errors.shareThisLabel?.type,
																				'is-required': true,
																			}
																		) }
																		aria-required="true"
																	/>
																) }
															/>
															{ 'required' === errors.shareThisLabel?.type && (
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
												</td>
											</tr>
										</>
									) }
								</tbody>
							</table>
							<table className="form-table" role="presentation">
								<tbody>
									<tr>
										<th scope="row">{ __( 'Email Option', 'quotes-dlx' ) }</th>
										<td>
											<Controller
												name="enableEmailText"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __( 'Enable Email Option', 'quotes-dlx' ) }
														help={ __(
															'Set whether users can email a quote to themselves or others.',
															'quotes-dlx'
														) }
														className="qdlx-admin__toggle-control"
														checked={ value }
														onChange={ ( boolValue ) => {
															setContextMenuActive( boolValue );
															onChange( boolValue );
														} }
														disabled={ saving || resetting }
													/>
												) }
											/>
											{ getValues( 'enableEmailText' ) && (
												<>
													<Controller
														name="emailTextLabel"
														control={ control }
														rules={ { required: true } }
														render={ ( { field } ) => (
															<TextControl
																{ ...field }
																label={ __( 'Email Quote Label', 'quotes-dlx' ) }
																className={ classNames(
																	'qdlx-admin__text-control',
																	{
																		'has-error':
																			'required' ===
																			errors.emailTextLabel?.type,
																		'is-required': true,
																	}
																) }
																aria-required="true"
																help={ __(
																	'This text will be the text displayed for the Email Share option in the contextual menu.',
																	'quotes-dlx'
																) }
															/>
														) }
													/>
													{ 'required' === errors.emailTextLabel?.type && (
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
										</td>
									</tr>
									<tr>
										<th scope="row">{ __( 'Set Globally', 'quotes-dlx' ) }</th>
										<td>
											<Controller
												name="enableGlobalContextualMenu"
												control={ control }
												render={ ( { field: { onChange, value } } ) => (
													<ToggleControl
														label={ __(
															'Set Contextual Menu Options Globally',
															'quotes-dlx'
														) }
														help={ __( 'The options on this page will be applied globally throughout your site content.', 'quotes-dlx' ) }
														className="qdlx-admin__toggle-control"
														checked={ value }
														onChange={ ( boolValue ) => {
															setContextMenuActive( boolValue );
															onChange( boolValue );
														} }
														disabled={ saving || resetting }
													/>
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
											: __( 'Save Menu Defaults', 'quotes-dlx' )
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
											: __( 'Reset Menu Defaults', 'quotes-dlx' )
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
