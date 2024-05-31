/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import {
	TextControl,
	Button,
} from '@wordpress/components';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { isEmail, getQueryArgs } from '@wordpress/url';
import Notice from '../../admin-panel/admin-components/Notice';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import Spinner from '../../components/icons/Spinner';
import sendCommand from '../../utils/SendCommand';

const emailQueryVars = getQueryArgs( window.location.href );
const emailPostId = emailQueryVars.postId;

const View = () => {
	const [ isSent, setIsSent ] = useState( false );
	const [ isSending, setIsSending ] = useState( false );
	const [ formErrors, setFormErrors ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( false );

	const getDefaultValues = () => {
		return {
			toEmail: '',
			subject: __( 'Check out this quote from {sitename}', 'quotes-dlx' ),
			recaptchaToken: '',
			nonce: qdlx_email.nonce,
			permalink: qdlx_email.permalink,
			shareText: qdlx_email.share_text,
			postId: emailPostId,
		};
	};
	const { control, handleSubmit, setValue } =
		useForm( {
			defaultValues: getDefaultValues(),
		} );

	const { errors } = useFormState( {
		control,
	} );

	const onSubmit = ( formData ) => {
		setIsSending( true );
		setFormErrors( false );
		setErrorMessage( '' );

		// Save stuff here.
		sendCommand( 'quotes_dlx_send_email', {
			...formData,
		}, qdlx_email.ajaxurl ).then( ( ajaxResponse ) => {
			const ajaxData = ajaxResponse.data.data;
			const ajaxSuccess = ajaxResponse.data.success;

			if ( ajaxSuccess ) {
				setIsSent( true );
				setTimeout(
					() => {
						window.parent.window.qdlxfancy.close(); // See tweet-actions/actions.js for this variable.
					},
					3000
				);
			} else {
				setFormErrors( true );
				setErrorMessage( ajaxData.message );
			}
		} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setIsSending( false );
			} );
	};

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	const validateEmail = ( email ) => {
		if ( isEmail( email ) ) {
			return true;
		}
		return false;
	};

	return (
		<section className="qdlx-email--content-wrap">
			<h2>{ __( 'Email this Quote', 'quotes-dlx' ) }</h2>
			<form id="qdlx-email-quote-form" onSubmit={ handleSubmit( onSubmit ) }>
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
								className={ classNames( 'search-has-admin has-admin__text-control', {
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
								className={ classNames( 'search-has-admin has-admin__text-control', {
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
					<Controller
						name="recaptchaToken"
						control={ control }
						render={ ( { field } ) => (
							<TextControl { ...field } type="hidden" register="recaptchaToken" />
						) }
					/>
					<Controller
						name="postId"
						control={ control }
						render={ ( { field } ) => (
							<TextControl { ...field } type="hidden" register="postId" />
						) }
					/>
					<Controller
						name="nonce"
						control={ control }
						render={ ( { field } ) => (
							<TextControl { ...field } type="hidden" register="nonce" />
						) }
					/>
					<Controller
						name="permalink"
						control={ control }
						render={ ( { field } ) => (
							<TextControl { ...field } type="hidden" register="permalink" />
						) }
					/>
					<Controller
						name="shareText"
						control={ control }
						render={ ( { field } ) => (
							<TextControl { ...field } type="hidden" register="shareText" />
						) }
					/>
				</div>
				<div className="qdlx-admin__tabs--content-actions">
					<Button
						id="qdlx-recaptcha-submit"
						className={ classNames(
							'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right g-recaptcha',
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
							// eslint-disable-next-line no-undef
							if (
								qdlx_email.captcha_type === 'recaptcha' &&
								typeof grecaptcha !== 'undefined'
							) {
								grecaptcha.ready( function() {
									grecaptcha
										.execute( qdlx_email.recaptcha_site_key, {
											action: 'submit',
										} )
										.then( function( token ) {
											setValue( 'recaptchaToken', token );
											e.target.form.dispatchEvent(
												new Event( 'submit', { cancelable: true, bubbles: true } )
											);
										} );
								} );
							} else {
								// This force submits the form.
								e.target.form.dispatchEvent(
									new Event( 'submit', { cancelable: true, bubbles: true } )
								);
							}
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
						onClick={ () => {
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
				{ formErrors && (
					<Notice
						message={ errorMessage }
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
