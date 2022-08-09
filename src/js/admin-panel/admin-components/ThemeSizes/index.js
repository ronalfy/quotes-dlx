/* eslint-disable @wordpress/i18n-translator-comments */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import { Button, SelectControl, RangeControl } from '@wordpress/components';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js';
import '@fancyapps/ui/dist/fancybox.css';
import sendCommand from '../../../utils/SendCommand';
import AdminThemeColorsLoader from '../../admin-components/Loaders/AdminThemeColorsLoader';
import Notice from '../../admin-components/Notice';
import Spinner from '../../../components/icons/Spinner';

const ThemeSizes = ( props ) => {
	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const { template, screenSize, screenSizeLabel, fontSize, lineHeight, buttonFontSize } = props;

	const screenSizeLabelLowercase = screenSizeLabel.toLowerCase();

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				fontSize,
				lineHeight,
				buttonFontSize,
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	const hasErrors = () => {
		return false; //Object.keys( errors ).length > 0;
	};

	const onSubmit = () => {
		setSaving( true );
		sendCommand( 'quotes_dlx_save_theme_options', {
			nonce: quotes_dlx_admin.options_save_nonce,
			colors: themeColors,
			template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;

				if ( ajaxSuccess ) {
					setHasUnsavedChanges( false );
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
		sendCommand( 'quotes_dlx_reset_theme_options', {
			nonce: quotes_dlx_admin.options_save_nonce,
			template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setThemeColors( Object.values( ajaxData.colors ) );
					setSavedThemeColors( Object.values( ajaxData.defaults ) );
					setIsReset( true );
					setHasUnsavedChanges( false );
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
									: sprintf( __( 'Save %s Options', 'quotes-dlx' ), screenSizeLabel )
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
									: sprintf( __( 'Reset %s Options', 'quotes-dlx' ), screenSizeLabel )
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
			</>
		);
	};

	return (
		<div className="qdlx-admin__tabs--content-wrap">
			<div className="qdlx-admin__tabs--content-panel">
				<form
					onSubmit={ ( e ) => {
						e.preventDefault();
						onSubmit();
					} }
				>
					<div className="qdlx-admin__tabs--content-heading">
						<h2>
							{ sprintf( __( 'Select %s Sizes', 'quotes-dlx' ), screenSizeLabel ) }
						</h2>
						<p className="description">
							{ __(
								'Modify the quote and button sizes for the theme.',
								'quotes-dlx'
							) }
						</p>
					</div>
					<div className="qdlx-admin__tabs--content-inner">
						<Controller
							name="fontSize"
							control={ control }
							render={ ( { field: { onChange, value } } ) => (
								<>
									<RangeControl
										label={ __(
											'Set the Quote Base Font Size',
											'comment-edit-pro'
										) }
										step={ 1 }
										value={ value }
										max={ 48 }
										min={ 8 }
										currentInput={ 16 }
										initialPosition={ 16 }
										allowReset={ true }
										className="qdlx-admin__range-control"
										onChange={ ( fontSizeValue ) => {
											onChange( fontSizeValue );
										} }
										help={ sprintf( __(
											'Set the font size of the %s size for the theme.',
											'quotes-dlx'
										), screenSizeLabelLowercase ) }
										trackColor="#8019c4"
										railColor="#dad4eb"
									/>
								</>
							) }
						/>
						<Controller
							name="lineHeight"
							control={ control }
							render={ ( { field: { onChange, value } } ) => (
								<>
									<RangeControl
										label={ __( 'Set the Quote Line Height', 'comment-edit-pro' ) }
										step={ 0.1 }
										value={ value }
										max={ 3 }
										min={ 0.25 }
										currentInput={ 1.2 }
										initialPosition={ 1.2 }
										allowReset={ true }
										className="qdlx-admin__range-control"
										onChange={ ( lineHeightValue ) => {
											onChange( lineHeightValue );
										} }
										help={ sprintf( __(
											'Set the line-height of the theme for %s.',
											'quotes-dlx'
										), screenSizeLabelLowercase ) }
										trackColor="#8019c4"
										railColor="#dad4eb"
									/>
								</>
							) }
						/>
						<Controller
							name="buttonFontSize"
							control={ control }
							render={ ( { field: { onChange, value } } ) => (
								<>
									<RangeControl
										label={ __(
											'Set the Button Base Font Size',
											'comment-edit-pro'
										) }
										step={ 1 }
										value={ value }
										max={ 48 }
										min={ 8 }
										currentInput={ 16 }
										initialPosition={ 16 }
										allowReset={ true }
										className="qdlx-admin__range-control"
										onChange={ ( fontSizeValue ) => {
											onChange( fontSizeValue );
										} }
										help={ sprintf( __(
											'Set the button font size of the %s size for the theme.',
											'quotes-dlx'
										), screenSizeLabelLowercase ) }
										trackColor="#8019c4"
										railColor="#dad4eb"
									/>
								</>
							) }
						/>
						<a
							data-fancybox
							onClick={ ( e ) => {
								e.preventDefault();
								const previewUrl = `${ ajaxurl }?action=quotes_dlx_theme_preview&size=${ encodeURIComponent(
									getValues( 'fontSize' )
								) }&lineheight=${ encodeURIComponent(
									getValues( 'lineHeight' )
								) }&buttonsize=${ encodeURIComponent(
									getValues( 'buttonFontSize' )
								) }&nonce=${
									quotes_dlx_admin.options_retrieve_nonce
								}&template=${ encodeURIComponent( template ) }&view=${ screenSize }`;
								const fancybox = new Fancybox(
									[
										{
											src: previewUrl,
											type: 'iframe',
										},
									],
									{
										mainClass: 'qdlx-theme-preview-mobile',
										caption: sprintf( __( '%s Preview', 'quotes-dlx' ), screenSizeLabel ),
									}
								);
							} }
							href="#"
						>
							{ sprintf( __( 'Preview %s Version', 'quotes-dlx' ), screenSizeLabel ) }
						</a>
					</div>
					{ getSaveResetButtons() }
				</form>
			</div>
		</div>
	);
};

export default ThemeSizes;