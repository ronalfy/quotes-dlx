import React, { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import {
	TextControl,
	Button,
	ButtonGroup,
	RadioControl,
	FormTokenField,
	ToggleControl,
} from '@wordpress/components';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import Notice from '../../admin-panel/admin-components/Notice';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import Spinner from '../../components/icons/Spinner';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox';

const View = () => {
	const [ isSent, setIsSent ] = useState( false );
	const [ isSending, setIsSending ] = useState( false );
	const getDefaultValues = () => {
		return {
			toEmail: '',
			fromName: '',
			subject: __( 'Check out this quote from {sitename}', 'quotes-dlx' ),
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
		// Save stuff here.
	};

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	const validateEmail = ( email ) => {
		// From: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if ( regex.test( email ) ) {
			return true;
		}
		return false;
	};

	return (
		<section className="qdlx-email--content-wrap">
			<h2>{ __( 'Email this Quote', 'quotes-dlx' ) }</h2>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<div className="qdlx-email-control-row">
					<Controller
						name="fromName"
						control={ control }
						rules={ {
							required: true,
						} }
						render={ ( { field } ) => (
							<TextControl
								{ ...field }
								label={ __( 'Your Name:', 'quotes-dlx' ) }
								className={ classNames( 'qdlx-admin__text-control', {
									'has-error': 'required' === errors.fromName?.type,
									'is-required': true,
								} ) }
								register="fromName"
								help={ __( 'Please enter your name.', 'quotes-dlx' ) }
							/>
						) }
					/>
					{ 'required' === errors.fromName?.type && (
						<Notice
							message={ __( 'This is a required field.' ) }
							status="error"
							politeness="assertive"
							inline={ true }
							icon={ CircularExclamationIcon }
						/>
					) }
				</div>
				<div className="qdlx-email-control-row">
					<Controller
						name="toEmail"
						control={ control }
						rules={ {
							validate: ( value ) => {
								if ( validateEmail( value ) ) {
									return true;
								}
								return false;
							},
							required: true,
						} }
						render={ ( { field } ) => (
							<TextControl
								{ ...field }
								label={ __( 'To (email):', 'quotes-dlx' ) }
								className={ classNames( 'qdlx-admin__text-control', {
									'has-error': 'required' === errors.toEmail?.type,
									'is-required': true,
								} ) }
								register="toEmail"
								placeholder="yourcolleague@friends.com"
								help={ __(
									'Please select who you would like to email.',
									'quotes-dlx'
								) }
							/>
						) }
					/>
					{ 'validate' === errors.toEmail?.type && (
						<Notice
							message={ __( 'The Email is Invalid.' ) }
							status="error"
							politeness="assertive"
							inline={ true }
							icon={ CircularExclamationIcon }
						/>
					) }
					{ 'required' === errors.toEmail?.type && (
						<Notice
							message={ __( 'This is a required field.' ) }
							status="error"
							politeness="assertive"
							inline={ true }
							icon={ CircularExclamationIcon }
						/>
					) }
				</div>
				<div className="qdlx-email-control-row">
					<Controller
						name="subject"
						control={ control }
						rules={ {
							required: true,
						} }
						render={ ( { field } ) => (
							<TextControl
								{ ...field }
								label={ __( 'Subject:', 'quotes-dlx' ) }
								className={ classNames( 'qdlx-admin__text-control', {
									'has-error': 'required' === errors.subject?.type,
									'is-required': true,
								} ) }
								register="subject"
								help={ __(
									'Please enter the subject of the email.',
									'quotes-dlx'
								) }
							/>
						) }
					/>
					{ 'required' === errors.subject?.type && (
						<Notice
							message={ __( 'This is a required field.' ) }
							status="error"
							politeness="assertive"
							inline={ true }
							icon={ CircularExclamationIcon }
						/>
					) }
				</div>
				<div className="qdlx-admin__tabs--content-actions">
					<Button
						className={ classNames(
							'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right',
							{ 'has-error': hasErrors() },
							{ 'has-icon': isSending },
							{ 'is-saving': { isSending } }
						) }
						type="button"
						text={
							isSending
								? __( 'Sending…', 'quotes-dlx' )
								: __( 'Send', 'quotes-dlx' )
						}
						icon={ isSending ? Spinner : false }
						iconSize="18"
						iconPosition="right"
						disabled={ isSending || isSent }
						onClick={ ( e ) => {
							// This fake submits the form.
							e.target.form.dispatchEvent(
								new Event( 'submit', { cancelable: true, bubbles: true } )
							);
						} }
					/>
					<Button
						className={ classNames(
							'qdlx__btn qdlx__btn-secondary qdlx__btn--icon-right'
						) }
						type="button"
						text={
							isSent ? __( 'Close', 'quotes-dlx' ) : __( 'Cancel', 'quotes-dlx' )
						}
						disabled={ isSending }
						onClick={ ( e ) => {
							window.parent.window.qdlxfancy.close(); // See tweet-actions/actions.js for this variable.
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
				{ isSent && (
					<Notice
						message={ __( 'The email has been sent.' ) }
						status="success"
						politeness="assertive"
					/>
				) }
			</form>
		</section>
	);
};
export default View;
