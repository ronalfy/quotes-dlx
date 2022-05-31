/* eslint-disable no-unreachable */
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
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import CircularInfo from '../../components/icons/CircularInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/pro-solid-svg-icons';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_license_core', {
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
	const localStorageKey = 'quotes_dlx_licenses';

	const { blockDefaultsDirtyCount, setBlockDefaultsDirtyCount } = useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ revokingLicense, setRevokingLicense ] = useState( false );
	const [ isRevoked, setIsRevoked ] = useState( false );
	const [ showSecret, setShowSecret ] = useState( false );
	const [ validLicense, setValidLicense ] = useState( data.license );
	const [ licenseActivated, setLicenseActivated ] = useState( data.license_activated );
	const [ licenseData, setLicenseData ] = useState( false );

	const {
		license_key,
		item_name,
		expires,
		expires_human_time_diff,
		license_limit,
		site_count,
		activations_left,
		license_activated,
		price_id,
	} = data;

	const { register, control, handleSubmit, setValue, setError, getValues, reset } =
		useForm( {
			defaultValues: {
				quotesdlxLicense: license_key,
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( { control } );

	const onSubmit = ( formData ) => {
		setSaving( true );

		const { quotesdlxLicense } = formData;

		sendCommand( 'quotes_dlx_save_admin_license_core', {
			nonce: quotes_dlx_admin.options_save_nonce,
			license_key: quotesdlxLicense,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// Reset count.
					//setBlockDefaultsDirtyCount( 0 );

					// Clear form dirty.
					//reset( ajaxData );

					if ( ajaxData.license_activated ) {
						setLicenseActivated( true );
					} else {
						setLicenseActivated( false );
					}

					setIsSaved( true );
					setTimeout( () => {
						setIsSaved( false );
					}, 3000 );
				} else {
					// Error stuff.
					setError( 'quotesdlxLicense', { type: 'validate', message: ajaxData.message } );
				}
			} )
			.catch( ( ajaxResponse ) => { } )
			.then( ( ajaxResponse ) => {
				setSaving( false );
			} );
	};

	const revokeLicense = ( e ) => {
		setRevokingLicense( true );
		sendCommand( 'quotes_dlx_revoke_admin_license_core', {
			nonce: quotes_dlx_admin.options_save_nonce,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					// // Reset local storage.
					// setBlockDefaultsDirtyCount( 0 );

					// // Clear form dirty.
					// reset( ajaxData );
					// localStorage.setItem( localStorageKey, JSON.stringify( getValues() ) );
					setLicenseActivated( false );
					setIsRevoked( true );
					setTimeout( () => {
						setIsRevoked( false );
					}, 3000 );
				} else {
					setError( 'quotesdlxLicense', { type: 'validate', message: __( 'Revoking the license resulted in an error and could not be deactivated.', 'quotes-dlx' ) } );
				}
			} )
			.catch( ( ajaxResponse ) => { } )
			.then( ( ajaxResponse ) => {
				setRevokingLicense( false );
			} );
	};

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	const getLicenseType = () => {
		switch ( price_id ) {
			case '1':
				return 'Hobbyist';
				break;
			case '2':
				return 'Freelancer';
				break;
			case '3':
				return 'Agency';
				break;
			case '4':
				return 'Unlimited';
				break;
			default:
				return 'Unknown';
				break;
		}
		return 'Unkown';
	};

	const getSaveButton = () => {
		let saveText = __( 'Save License', 'quotes-dlx' );
		let saveTextLoading = __( 'Saving…', 'quotes-dlx' );

		if ( ! licenseActivated ) {
			saveText = __( 'Activate License', 'quotes-dlx' );
			saveTextLoading = __( 'Activating…', 'quotes-dlx' );
		}
		return (
			<>
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
							? saveTextLoading
							: saveText
					}
					icon={ saving ? Spinner : false }
					iconSize="18"
					iconPosition="right"
					disabled={ saving || revokingLicense }
				/>
			</>
		);
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
		if ( saving || revokingLicense || loading ) {
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

	if ( loading ) {
		return <AdminDefaultsLoader />;
	}

	return (
		<>
			<div className="qdlx-admin__tabs--home-grid-wrap">
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
									{ ! licenseActivated &&
										<Notice
											message={ __(
												'Please enter a valid license to receive support and updates', 'quotes-dlx'
											) }
											status="warning"
											politeness="polite"
										/>
									}
									<div className="qdlx-admin__license--input-wrapper">
										<Controller
											name="quotesdlxLicense"
											control={ control }
											rules={ { required: true, pattern: /^[0-9A-Za-z]+$/i, validate: true } }
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
														<FontAwesomeIcon size={ '1x' } icon={ faEye } />
													) : (
														<FontAwesomeIcon size={ '1x' } icon={ faEyeSlash } />
													) }

												</span>

											</label>
										</div>
										{ 'required' === errors.quotesdlxLicense?.type && (
											<Notice
												message={ __( 'This field is a required field.' ) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
										{ 'pattern' === errors.quotesdlxLicense?.type && (
											<Notice
												message={ __(
													'It appears there are invalid characters in the license.'
												) }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
										{ 'validate' === errors.quotesdlxLicense?.type && (
											<Notice
												message={ errors.quotesdlxLicense.message }
												status="error"
												politeness="assertive"
												inline={ true }
												icon={ CircularExclamationIcon }
											/>
										) }
									</div>
								</div>
								<div className="qdlx-admin__tabs--content-actions">
									{ getSaveButton() }
									{ licenseActivated &&
										<Button
											className={ classNames(
												'qdlx__btn qdlx__btn-danger qdlx__btn--icon-right',
												{ 'has-icon': revokingLicense },
												{ 'is-resetting': { revokingLicense } }
											) }
											type="button"
											text={
												revokingLicense
													? __( 'Revoking License…', 'quotes-dlx' )
													: __( 'Revoke License', 'quotes-dlx' )
											}
											icon={ revokingLicense ? Spinner : false }
											iconSize="18"
											iconPosition="right"
											disabled={ saving || revokingLicense }
											onClick={ ( e ) => {
												setRevokingLicense( true );
												revokeLicense( e );
											} }
										/>
									}
								</div>
								{ hasErrors() && (
									<Notice
										message={ __(
											'There are form validation errors. Please correct them above.', 'quotes-dlx'
										) }
										status="error"
										politeness="polite"
									/>
								) }
								{ isSaved && (
									<Notice
										message={ __( 'Your settings have been saved.', 'quotes-dlx' ) }
										status="success"
										politeness="assertive"
									/>
								) }
								{ isRevoked && (
									<Notice
										message={ __( 'Your license has been deactivated for this site.', 'quotes-dlx' ) }
										status="success"
										politeness="assertive"
									/>
								) }
							</div>
						</div>
					</form>
				</div>
				{ licenseActivated &&
					<div className="qdlx-admin__tabs--content-wrap">
						<div className="qdlx-admin__tabs--content-panel">
							<div className="qdlx-admin__tabs--content-heading">
								<h1>
									<CircularInfo width={ 48 } height={ 48 } aria-hidden="true" />
									<span className="qdlx-admin__heading--text">
										{ __( 'License Information', 'quotes-dlx' ) }
									</span>
								</h1>
							</div>
							<div className="qdlx-admin__tabs--content-inner">
								<table className="quotes-dlx-table quotes-dlx-table--responsive quotes-dlx-table--license-ui">
									<thead>
										<tr>
											<th scope="col">{ __( 'Item Name', 'quotes-dlx' ) }</th>
											<th scope="col">{ __( 'License Type', 'quotes-dlx' ) }</th>
											<th scope="col">{ __( 'License Activations', 'quotes-dlx' ) }</th>
											<th scope="col">{ __( 'Expires On', 'quotes-dlx' ) }</th>
											<th scope="col">{ __( 'Days Left', 'quotes-dlx' ) }</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td data-header="Item Name">
												<p>{ item_name }</p>
											</td>
											<td data-header="License Type">
												<p>{ getLicenseType() }</p>
											</td>
											<td data-header="License Activations">
												<p>
													<span className="">
														{ site_count } of { license_limit === 0 ? __( 'Unlimited', 'quotes-dlx' ) : license_limit }
													</span>
												</p>
											</td>
											<td data-header="Expires On">
												<p>
													{ expires }
												</p>
											</td>
											<td data-header="Days Left">
												<p>
													{ expires_human_time_diff }
												</p>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				}
			</div>
		</>
	);
};

export default AdminLicense;
