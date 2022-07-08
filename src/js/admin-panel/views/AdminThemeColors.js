/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __ } from '@wordpress/i18n';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import { Button, SelectControl } from '@wordpress/components';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import sendCommand from '../../utils/SendCommand';
import AdminThemeDefaultsLoader from '../admin-components/Loaders/AdminThemeDefaultsLoader';
import ColorPaletteIcon from '../../components/icons/ColorPalette';
import TabsContext from '../contexts/TabsContext';
import ThemeColorPicker from '../admin-components/ThemeColorPicker';
import ThemePreview from '../admin-components/ThemePreview';
import Notice from '../admin-components/Notice';
import Spinner from '../../components/icons/Spinner';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_themes_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminDefaults = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<Suspense fallback={ <AdminThemeDefaultsLoader /> }>
			<Interface defaults={ defaults } { ...props } />
		</Suspense>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_themes_defaults';
	const { defaultTheme, setDefaultTheme } = useContext( TabsContext );
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;
	const { template, categories } = data;

	const getColors = ( defaults ) => {
		const colors = {};
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme ) {
					colors.colorPrimary = theme.color_primary;
					colors.colorSecondary = theme.color_secondary;
					colors.colorAccent = theme.color_accent;
				}
			} );
		} );
		return colors;
	};

	const hasErrors = () => {
		return Object.keys( errors ).length > 0;
	};

	// Get active theme and colors.
	const [ activeTheme, setActiveTheme ] = useState( data.template );
	const [ themeColors, setThemeColors ] = useState( getColors() );
	const [ defaultThemeColors, setDefaultThemeColors ] = useState( [
		{
			name: '',
			slug: '',
			value: '',
		},
	] );

	// Get saved colors (TODO - Read from data ).
	const [ colorPrimary, setColorPrimary ] = useState( '' );
	const [ colorSecondary, setColorSecondary ] = useState( '' );
	const [ colorAccent, setColorAccent ] = useState( '' );

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				colorPrimary: '',
				colorSecondary: '',
				colorAccent: '',
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	useEffect( () => {
		setLoading( true );
		sendCommand( 'quotes_dlx_get_theme_colors', {
			nonce: quotes_dlx_admin.options_retrieve_nonce,
			active_template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setValue( 'colorPrimary', ajaxData.colors.colorPrimary, { shouldDirty: false, shouldValidate: false } );
					setValue( 'colorSecondary', ajaxData.colors.colorSecondary, { shouldDirty: false, shouldValidate: false } );
					setValue( 'colorAccent', ajaxData.colors.colorAccent, { shouldDirty: false, shouldValidate: false } );
					setThemeColors( ajaxData.colors );
					setDefaultThemeColors( Object.values( ajaxData.defaults ) );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setLoading( false );
			} );
	}, [ activeTheme ] );

	useEffect( () => {
		setThemeColors( {
			colorPrimary,
			colorSecondary,
			colorAccent,
		} );
	}, [ colorPrimary, colorSecondary, colorAccent ] );

	const getActiveThemeStylesheet = () => {
		let stylesheet = '';
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme ) {
					stylesheet = theme.stylesheet;
				}
			} );
		} );
		return stylesheet;
	};

	const getCategories = () => {
		return categories.map( ( cat, catIndex ) => (
			<SelectControl
				key={ cat.slug }
				className="qdlx-admin__themes--content-inner"
				label={ __( 'Select a Theme', 'quotes-dlx' ) }
				value={ activeTheme }
				onChange={ ( newTheme ) => setActiveTheme( newTheme ) }
			>
				{ getThemes( cat ) }
			</SelectControl>
		) );
	};

	const GetThemePreview = () => {
		const defaultColors = getColors( true );
		return (
			<>
				<ThemePreview
					activeTheme={ activeTheme }
					stylesheet={ getActiveThemeStylesheet() }
					{ ...themeColors }
				/>
			</>
		);
	};

	const onSubmit = ( formData ) => {
		console.log( formData );
		setSaving( true );
		sendCommand( 'quotes_dlx_save_theme_colors', {
			nonce: quotes_dlx_admin.options_save_nonce,
			form_data: formData,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;

				if ( ajaxSuccess ) {
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

	// const getAuthor = ( selectedTheme ) => {
	// 	return <a href={ selectedTheme.author_url }>{ selectedTheme.author_name }</a>;
	// };

	// const onThemeSelect = ( themeSlug ) => {
	// 	setSaving( true );
	// 	sendCommand( 'quotes_dlx_save_admin_options_defaults', {
	// 		nonce: quotes_dlx_admin.options_save_nonce,
	// 		form_data: {
	// 			template: themeSlug,
	// 		},
	// 	} )
	// 		.then( ( ajaxResponse ) => {
	// 			const ajaxData = ajaxResponse.data.data;
	// 			const ajaxSuccess = ajaxResponse.data.success;
	// 			if ( ajaxSuccess ) {
	// 				// Add local storage.
	// 				localStorage.setItem(
	// 					localStorageKey,
	// 					JSON.stringify( { theme: ajaxData.theme } )
	// 				);

	// 				setIsSaved( true );
	// 				setTimeout( () => {
	// 					setIsSaved( false );
	// 				}, 3000 );
	// 			} else {
	// 				// Error stuff.
	// 			}
	// 		} )
	// 		.catch( ( ajaxResponse ) => {} )
	// 		.then( ( ajaxResponse ) => {
	// 			setSaving( false );
	// 		} );
	// };

	const getThemes = ( category ) => {
		return category.themes.map( ( theme, themeIndex ) => (
			<option key={ themeIndex } value={ theme.slug }>
				{ theme.name }
			</option>
		) );
	};

	if ( loading ) {
		return <AdminThemeDefaultsLoader />;
	}

	const defaultColors = getColors();

	return (
		<>
			<div className="qdlx-admin__tabs--content-wrap">
				<form onSubmit={ handleSubmit( onSubmit ) }>
					<div className="qdlx-admin__tabs--content-panel">
						<div className="qdlx-admin__tabs--content-heading">
							<h1>
								<ColorPaletteIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'Select Theme Colors', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'You can modify the primary, secondary, and accent colors of each theme.',
									'quotes-dlx'
								) }
							</p>
						</div>
						<div className="qdlx-admin__tabs--content-inner">
							{ getCategories() }
							<div className="qdlx-admin__theme-preview">{ GetThemePreview() }</div>
							<div className="qdlx-admin__color-pickers">
								<div className="qdlx-admin__color-primary">
									<Controller
										name="colorSecondary"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<ThemeColorPicker
												value={ themeColors.colorPrimary }
												onChange={ ( newValue ) => {
													setColorPrimary( newValue );
													onChange( newValue );
												} }
												label={ __( 'Primary Color:', 'quotes-dlx' ) }
												defaultColors={ defaultThemeColors }
												defaultColor={ defaultColors.colorPrimary }
											/>
										) }
									/>
									<Controller
										name="colorSecondary"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<ThemeColorPicker
												value={ themeColors.colorSecondary }
												onChange={ ( newValue ) => {
													setColorSecondary( newValue );
													onChange( newValue );
												} }
												label={ __( 'Secondary Color:', 'quotes-dlx' ) }
												defaultColors={ defaultThemeColors }
												defaultColor={ defaultColors.colorSecondary }
											/>
										) }
									/>
									<Controller
										name="colorAccent"
										control={ control }
										render={ ( { field: { onChange, value } } ) => (
											<ThemeColorPicker
												value={ value }
												onChange={ ( newValue ) => {
													setColorAccent( newValue );
													onChange( newValue );
												} }
												label={ __( 'Accent Color:', 'quotes-dlx' ) }
												defaultColors={ defaultThemeColors }
												defaultColor={ defaultColors.colorAccent }
											/>
										) }
									/>
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
											: __( 'Save Theme Colors', 'quotes-dlx' )
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
											: __( 'Reset Theme Colors', 'quotes-dlx' )
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
