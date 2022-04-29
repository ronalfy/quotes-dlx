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
import CircularInfo from '../../components/icons/CircularInfo';
import MenuIcon from '../../components/icons/MenuIcon';
import TabsContext from '../contexts/TabsContext';
import Spinner from '../../components/icons/Spinner';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_menu_options_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<Suspense fallback={ <AdminDefaultsLoader /> }>
			<Interface defaults={ defaults } { ...props } />
		</Suspense>
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
		enable_contextual_menu,
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
	} = data;

	const { register, control, handleSubmit, setValue, getValues, reset } = useForm(
		{
			defaultValues: {
				enableContextualMenu: enable_contextual_menu,
				enableCopyText: enable_copy_text,
				enableCopyTweet: enable_copy_tweet,
				enableCopyLink: enable_copy_link,
				enableTweetThis: enable_tweet_this,
			},
		}
	);

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( { control } );

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
					localStorage.setItem( localStorageFieldValuesKey, JSON.stringify( getValues() ) );

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
		const maybeSavedFormFields = localStorage.getItem(
			localStorageFieldValuesKey
		);
		if ( null !== maybeSavedFormFields ) {
			const valuesToSave = JSON.parse( maybeSavedFormFields );
			for ( const [ key, value ] of Object.entries( valuesToSave ) ) {
				if ( 'enableContextualMenu' === key && false === value ) {
					setContextMenuActive( false );
				}
				setValue( key, value, { shouldDirty: contextualMenuDefaultsDirtyCount !== 0 ? true : false, shouldValidate: true } );
			}
		}
		if ( isDirty ) {
			const touchedFieldsCountToSave = Object.keys( dirtyFields ).length;
			setContextualMenuDefaultsDirtyCount( touchedFieldsCountToSave );
		}
		setLoading( false );
	}, [] );

	useEffect( () => {
		if ( saving || resetting ) {
			return;
		}
		// Check for saved form fields and restore. Storage gets cleared on save.
		if ( isDirty || contextualMenuDefaultsDirtyCount > 0 ) {
			// Get current form values.
			const formValuesToSave = JSON.stringify( getValues() );

			// Get the length of the fields that need to be saved.
			const touchedFieldsCountToSave = Object.keys( dirtyFields ).length;

			setContextualMenuDefaultsDirtyCount( touchedFieldsCountToSave );

			// Store touched fields.
			localStorage.setItem( localStorageFieldValuesKey, formValuesToSave );
		} else {
			setContextualMenuDefaultsDirtyCount( 0 );
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
							{ ! contextMenuActive && (
								<Notice
									message={ __(
										'Disabling this feature will prevent shortcuts for getting a permalink, copying the quote, and copying the tweet.'
									) }
									status="info"
									politeness="polite"
									inline={ false }
									icon={ CircularInfo }
								/>
							) }
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
							{ contextMenuActive && (
								<>
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
													'Enable the copying of the quote. Off by default. It copies text in RichText format, so this may be useful in some situations.',
													'quotes-dlx'
												) }
												disabled={ saving || resetting }
											/>
										) }
									/>
									<Controller
										name="enableCopyTweet"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<ToggleControl
												label={ __( 'Enable Copy Tweet', 'quotes-dlx' ) }
												className="qdlx-admin__toggle-control"
												checked={ value }
												onChange={ ( boolValue ) => {
													onChange( boolValue );
												} }
												help={ __(
													'Enable the copying of the tweet to be used elsewhere.',
													'quotes-dlx'
												) }
												disabled={ saving || resetting }
											/>
										) }
									/>
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
									<Controller
										name="enableTweetThis"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<ToggleControl
												label={ __( 'Enable Tweet This Button', 'quotes-dlx' ) }
												className="qdlx-admin__toggle-control"
												checked={ value }
												onChange={ ( boolValue ) => {
													onChange( boolValue );
												} }
												help={ __(
													'Enable the copying of the Tweet This button.',
													'quotes-dlx'
												) }
												disabled={ saving || resetting }
											/>
										) }
									/>
								</>
							) }
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
