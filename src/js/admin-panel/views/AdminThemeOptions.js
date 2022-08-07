/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useContext } from 'react';
import { __ } from '@wordpress/i18n';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import { Button, SelectControl, RangeControl } from '@wordpress/components';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import sendCommand from '../../utils/SendCommand';
import AdminThemeColorsLoader from '../admin-components/Loaders/AdminThemeColorsLoader';
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

const AdminThemeOptions = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<Suspense fallback={ <AdminThemeColorsLoader showHeader={ true } /> }>
			<Interface defaults={ defaults } { ...props } />
		</Suspense>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_themes_defaults';
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;
	const { template, categories } = data;

	const getColors = () => {
		let colors = {};
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme ) {
					colors = theme.colors;
				}
			} );
		} );
		return colors;
	};

	const hasErrors = () => {
		return false; //Object.keys( errors ).length > 0;
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
	const [ savedThemeColors, setSavedThemeColors ] = useState( [
		{
			name: '',
			slug: '',
			value: '',
		},
	] );

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );
	const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState( false );

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				fontSizeDesktop: data.font_size_desktop,
				fontSizeTablet: data.font_size_tablet,
				fontSizeMobile: data.font_size_mobile,
				lineHeightDesktop: data.line_height_desktop,
				lineHeightTablet: data.line_height_tablet,
				lineHeightMobile: data.line_height_mobile,
			},
		} );

	const formValues = useWatch( { control } );

	const { errors, isDirty, dirtyFields, touchedFields } = useFormState( {
		control,
	} );

	useEffect( () => {
		setLoading( true );
		sendCommand( 'quotes_dlx_get_theme_options', {
			nonce: quotes_dlx_admin.options_retrieve_nonce,
			active_template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setThemeColors( Object.values( ajaxData.colors ) );
					setSavedThemeColors( Object.values( ajaxData.colors ) );
					setDefaultThemeColors( Object.values( ajaxData.defaults ) );
					setHasUnsavedChanges( false );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setLoading( false );
			} );
	}, [ activeTheme ] );

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
				options={ getThemes( cat ) }
			/>
		) );
	};

	const GetThemePreview = () => {
		return (
			<>
				<ThemePreview
					activeTheme={ activeTheme }
					stylesheet={ getActiveThemeStylesheet() }
					colors={ themeColors }
					fontSize={ getValues( 'fontSizeDesktop' ) }
					lineHeight={ getValues( 'lineHeightDesktop' ) }
				/>
			</>
		);
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

	const getThemes = ( category ) => {
		const themeCollection = [];
		category.themes.forEach( ( theme, themeIndex ) => {
			themeCollection.push( {
				label: theme.name,
				value: theme.slug,
			} );
		} );
		return themeCollection;
	};

	const defaultColors = getColors();

	const getColorValue = ( colorSlug ) => {
		let colorValue = '';
		savedThemeColors.forEach( ( colorObj ) => {
			if ( colorObj.slug === colorSlug ) {
				colorValue = colorObj.color;
			}
		} );
		return colorValue;
	};

	const getThemePickers = ( themePickerColors ) => {
		return themePickerColors.map( ( colorOption, index ) => (
			<ThemeColorPicker
				value={ getColorValue( colorOption.slug ) }
				key={ colorOption.slug }
				onChange={ ( slug, newValue ) => {
					// Iterate over colors and replace the one that matches the slug.
					const newThemeColors = [];
					themeColors.forEach( ( colorObj ) => {
						if ( colorObj.slug === slug ) {
							newThemeColors.push( {
								slug: colorObj.slug,
								color: newValue,
								name: colorObj.name,
							} );
						} else {
							newThemeColors.push( colorObj );
						}
					} );
					setHasUnsavedChanges( true );
					setSavedThemeColors( newThemeColors );
					setThemeColors( newThemeColors );
				} }
				label={ colorOption.name }
				defaultColors={ defaultThemeColors }
				defaultColor={ colorOption.color }
				slug={ colorOption.slug }
			/>
		) );
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
									: __( 'Save Theme Options', 'quotes-dlx' )
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
									: __( 'Reset Theme Options', 'quotes-dlx' )
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

	const getThemePreviewAndSwatches = () => {
		if ( loading ) {
			return <AdminThemeColorsLoader showHeader={ false } />;
		}
		return (
			<div className="qdlx-admin__tabs--content-inner">
				{ getCategories() }
				<div className="qdlx-admin__theme-preview">{ GetThemePreview() }</div>
				<div className="qdlx-admin__color-pickers">
					<div className="qdlx-admin__color-primary">
						<table className="form-table" role="presentation">
							<tbody>
								<tr>
									<th scope="row">{ __( 'Theme Colors', 'quotes-dlx' ) }</th>
									<td>{ getThemePickers( themeColors ) }</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	};

	const getUnsavedChangesWarning = () => {
		if ( ! hasUnsavedChanges && ! isDirty ) {
			return null;
		}
		return (
			<Notice
				status="warning"
				className="qdlx-admin__unsaved-changes-warning"
				message={ __( 'You have unsaved changes.', 'quotes-dlx' ) }
			/>
		);
	};

	const getFontSizeOptions = () => {
		return (
			<table className="form-table qdlx-font-sizes" role="presentation">
				<tbody>
					<tr>
						<th scope="row">{ __( 'Desktop Options', 'quotes-dlx' ) }</th>
						<td>
							<Controller
								name="fontSizeDesktop"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<>
										<RangeControl
											label={ __(
												'Set the Base Desktop Font Size',
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
											help={ __(
												'Set the font size of the desktop size for the theme.',
												'comment-edit-pro'
											) }
											trackColor="#8019c4"
											railColor="#dad4eb"
										/>
									</>
								) }
							/>
							<Controller
								name="lineHeightDesktop"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<>
										<RangeControl
											label={ __( 'Set the Line Height', 'comment-edit-pro' ) }
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
											help={ __(
												'Set the line-height of the theme for desktop.',
												'comment-edit-pro'
											) }
											trackColor="#8019c4"
											railColor="#dad4eb"
										/>
									</>
								) }
							/>
						</td>
					</tr>
					<tr>
						<th scope="row">{ __( 'Tablet Options', 'quotes-dlx' ) }</th>
						<td>
							<Controller
								name="fontSizeTablet"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<>
										<RangeControl
											label={ __( 'Set the Base Tablet Font Size', 'comment-edit-pro' ) }
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
											help={ __(
												'Set the font size of the tablet size for the theme.',
												'comment-edit-pro'
											) }
											trackColor="#8019c4"
											railColor="#dad4eb"
										/>
										<Controller
											name="lineHeightTablet"
											control={ control }
											render={ ( { field: { onChange, value } } ) => (
												<>
													<RangeControl
														label={ __( 'Set the Line Height', 'comment-edit-pro' ) }
														step={ 0.1 }
														value={ value }
														max={ 3 }
														min={ 0.25 }
														currentInput={ 1.1 }
														initialPosition={ 1.1 }
														allowReset={ true }
														className="qdlx-admin__range-control"
														onChange={ ( lineHeightValue ) => {
															onChange( lineHeightValue );
														} }
														help={ __(
															'Set the line-height of the theme for tablet size.',
															'comment-edit-pro'
														) }
														trackColor="#8019c4"
														railColor="#dad4eb"
													/>
												</>
											) }
										/>

									</>
								) }
							/>
						</td>
					</tr>
					<tr>
						<th scope="row">{ __( 'Mobile Options', 'quotes-dlx' ) }</th>
						<td>
							<Controller
								name="fontSizeMobile"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<>
										<RangeControl
											label={ __(
												'Set the Base Mobile Font Size',
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
											help={ __(
												'Set the font size of the mobile size for the theme.',
												'comment-edit-pro'
											) }
											trackColor="#8019c4"
											railColor="#dad4eb"
										/>
									</>
								) }
							/>
							<Controller
								name="lineHeightMobile"
								control={ control }
								render={ ( { field: { onChange, value } } ) => (
									<>
										<RangeControl
											label={ __( 'Set the Line Height', 'comment-edit-pro' ) }
											step={ 0.1 }
											value={ value }
											max={ 3 }
											min={ 0.25 }
											currentInput={ 1.1 }
											initialPosition={ 1.1 }
											allowReset={ true }
											className="qdlx-admin__range-control"
											onChange={ ( lineHeightValue ) => {
												onChange( lineHeightValue );
											} }
											help={ __(
												'Set the line-height of the theme for mobile size.',
												'comment-edit-pro'
											) }
											trackColor="#8019c4"
											railColor="#dad4eb"
										/>
									</>
								) }
							/>

						</td>
					</tr>
				</tbody>
			</table>
		);
	};

	return (
		<>
			<div className="qdlx-admin__tabs--content-wrap">
				<form
					onSubmit={ ( e ) => {
						e.preventDefault();
						onSubmit();
					} }
				>
					<div className="qdlx-admin__tabs--content-panel">
						<div className="qdlx-admin__tabs--content-heading">
							<h1>
								<ColorPaletteIcon width={ 48 } height={ 48 } aria-hidden="true" />
								<span className="qdlx-admin__heading--text">
									{ __( 'Select Theme Options', 'quotes-dlx' ) }
								</span>
							</h1>
							<p className="description">
								{ __(
									'You can modify the theme colors, font, and font-sizes for a theme.',
									'quotes-dlx'
								) }
							</p>
						</div>
						{ getUnsavedChangesWarning() }
						{ getThemePreviewAndSwatches() }
						{ getFontSizeOptions() }
						{ getUnsavedChangesWarning() }
						{ getSaveResetButtons() }
					</div>
				</form>
			</div>
		</>
	);
};

export default AdminThemeOptions;
