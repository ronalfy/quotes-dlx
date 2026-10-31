/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Suspense, useRef, useContext } from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button, SelectControl, RangeControl } from '@wordpress/components';
import { useForm, Controller, useWatch, useFormState } from 'react-hook-form';
import { useAsyncResource } from 'use-async-resource';
import classNames from 'classnames';
import sendCommand from '../../utils/SendCommand';
import AdminThemeColorsLoader from '../admin-components/Loaders/AdminThemeColorsLoader';
import AdminThemeSizesLoader from '../admin-components/Loaders/AdminThemeSizesLoader';
import ColorPaletteIcon from '../../components/icons/ColorPalette';
import TabsContext from '../contexts/TabsContext';
import ThemeColorPicker from '../admin-components/ThemeColorPicker';
import ThemePreview from '../admin-components/ThemePreview';
import Notice from '../admin-components/Notice';
import Spinner from '../../components/icons/Spinner';
import ThemeSizes from '../admin-components/ThemeSizes';
import ThemeFontSelector from '../admin-components/ThemeFontSelector';
import ErrorBoundary from '../admin-components/ErrorBoundary';
import ExportIcon from '../../components/icons/ExportIcon';
import ImportIcon from '../../components/icons/ImportIcon';

const retrieveDefaults = () => {
	return sendCommand( 'quotes_dlx_retrieve_admin_themes_defaults', {
		nonce: quotes_dlx_admin.options_retrieve_nonce,
	} );
};

const AdminThemeOptions = ( props ) => {
	const [ defaults, getDefaults ] = useAsyncResource( retrieveDefaults, [] );
	return (
		<ErrorBoundary
			fallback={
				<p>
					{ __( 'Could not load theme options.', 'quotes-dlx' ) }
				</p>
			}
		>
			<Suspense
				fallback={
					<div className="qdlx-admin__tabs--home-grid-wrap">
						<AdminThemeColorsLoader showHeader={ true } />
						<AdminThemeSizesLoader showHeader={ true } />
						<AdminThemeSizesLoader showHeader={ true } />
						<AdminThemeSizesLoader showHeader={ true } />
					</div>
				}
			>
				<Interface defaults={ defaults } { ...props } />
			</Suspense>
		</ErrorBoundary>
	);
};

const Interface = ( props ) => {
	const localStorageKey = 'quotes_dlx_themes_defaults';
	const { defaults } = props;
	const response = defaults();
	const { data, success } = response.data;
	const { template, categories, enable_fonts } = data;
	const importFileUploadRef = useRef( null );

	const getColors = () => {
		let colors = {};
		categories.forEach( ( cat ) => {
			cat.themes.forEach( ( theme ) => {
				if ( theme.slug === activeTheme ) {
					colors = theme.colors;
				}
			} );
		} );
		// Check to see if colors is set, otherwise select the first available theme.
		if ( 0 === Object.keys( colors ).length ) {
			// Pick the first theme.
			let selected = false;
			categories.forEach( ( cat ) => {
				cat.themes.forEach( ( theme ) => {
					if ( ! selected ) {
						colors = theme.colors;
						selected = true;
					}
				} );
			} );
		}
		return colors;
	};

	const hasErrors = () => {
		return false; //Object.keys( errors ).length > 0;
	};

	// Get active theme and colors.
	const [ activeTheme, setActiveTheme ] = useState( data.template );
	const [ selectedTheme, setSelectedTheme ] = useState( data.template );
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
	const [ fontFamilies, setFontFamilies ] = useState( {
		primary: '',
		secondary: '',
		primaryStylesheet: '',
		secondaryStylesheet: '',
	} );

	const [ loading, setLoading ] = useState( true );
	const [ saving, setSaving ] = useState( false );
	const [ isSaved, setIsSaved ] = useState( false );
	const [ resetting, setResetting ] = useState( false );
	const [ isReset, setIsReset ] = useState( false );
	const [ changingTheme, setChangingTheme ] = useState( false );
	const [ hasUnsavedChanges, setHasUnsavedChanges ] = useState( false );
	const [ isExporting, setIsExporting ] = useState( false );
	const [ isImporting, setIsImporting ] = useState( false );
	const [ selectedImportFile, setSelectedImportFile ] = useState( '' );
	const [ hasImportError, setHasImportError ] = useState( false );
	const [ importError, setImportError ] = useState( '' );

	const { register, control, handleSubmit, setValue, getValues, reset } =
		useForm( {
			defaultValues: {
				fontSizeDesktop: data.font_size_desktop,
				fontSizeTablet: data.font_size_tablet,
				buttonFontSizeDesktop: data.button_font_size_desktop,
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

	const getThemeOptions = ( themeSlug = activeTheme ) => {
		setLoading( true );
		sendCommand( 'quotes_dlx_get_theme_options', {
			nonce: quotes_dlx_admin.options_retrieve_nonce,
			active_template: themeSlug,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setThemeColors( Object.values( ajaxData.colors ) );
					setSavedThemeColors( Object.values( ajaxData.colors ) );
					setDefaultThemeColors( Object.values( ajaxData.defaults ) );
					setHasUnsavedChanges( false );
					setFontFamilies( {
						primary: ajaxData.font_primary,
						secondary: ajaxData.font_secondary,
						primaryStylesheet: ajaxData.font_primary_stylesheet,
						secondaryStylesheet: ajaxData.font_secondary_stylesheet,
					} );
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setLoading( false );
			} );
	};

	useEffect( () => {
		getThemeOptions();
	}, [] );

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
			<div key={ catIndex } className="quotes-dlx-admin-theme-options__select">
				<SelectControl
					key={ cat.slug }
					className="qdlx-admin__themes--content-inner"
					label={ __( 'Select a Theme', 'quotes-dlx' ) }
					value={ selectedTheme }
					onChange={ ( newTheme ) => {
						setSelectedTheme( newTheme );
					} }
					options={ getThemes( cat ) }
				/>
				<Button
					className={ classNames(
						'qdlx__btn qdlx__btn-primary qdlx__btn--icon-right button-reset',
						{ 'has-error': hasErrors() },
						{ 'has-icon': saving },
						{ 'is-saving': { saving } }
					) }
					type="button"
					text={
						saving
							? __( 'Changing Theme…', 'quotes-dlx' )
							: __( 'Change Themes', 'quotes-dlx' )
					}
					icon={ saving ? Spinner : false }
					iconSize="18"
					iconPosition="right"
					disabled={ saving || resetting || selectedTheme === activeTheme }
					onClick={ ( e ) => {
						if ( selectedTheme !== activeTheme ) {
							setActiveTheme( selectedTheme );
							getThemeOptions( selectedTheme );
						}
					} }
				/>
			</div>
		) );
	};

	const GetThemePreview = () => {
		return (
			<>
				<ThemePreview
					activeTheme={ activeTheme }
					stylesheet={ getActiveThemeStylesheet() }
					colors={ themeColors }
					fontSize={ data.font_size_desktop + '' }
					lineHeight={ data.line_height_desktop }
					buttonFontSize={ data.button_font_size_desktop + '' }
					colorsOnly={ true }
					primaryFontFamily={ fontFamilies.primary }
					secondaryFontFamily={ fontFamilies.secondary }
					fontsEnabled={ enable_fonts }
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

	const onFileUpload = ( e ) => {
		const file = e.target.files[ 0 ];
		setHasImportError( false );
		setSelectedImportFile( file );
		setIsImporting( true );
		const fileuploadElement = document.querySelector( '#qdlx-import-file-form' );
		const form = new FormData( fileuploadElement );
		fetch(
			`${ ajaxurl }?action=quotes_dlx_process_import_file&nonce=${ quotes_dlx_admin.options_save_nonce }`,
			{
				method: 'POST',
				body: form,
			}
		).then( ( ajaxResponse ) => ajaxResponse.json() )
			.then( ( responseData ) => {
				const isSuccess = responseData.success;
				const dataObject = responseData.data;
				if ( isSuccess ) {
					setIsImporting( false );
					getThemeOptions( activeTheme );
				} else {
					setIsImporting( false );
					setImportError( dataObject.message );
					setHasImportError( true );
				}
			} ).catch( ( err ) => {
			} );
	};

	const onExport = () => {
		setIsExporting( true );
		sendCommand( 'quotes_dlx_export_theme_json', {
			nonce: quotes_dlx_admin.options_export_nonce,
			active_template: activeTheme,
		} )
			.then( ( ajaxResponse ) => {
				const ajaxData = ajaxResponse.data.data;
				const ajaxSuccess = ajaxResponse.data.success;
				if ( ajaxSuccess ) {
					setIsExporting( false );

					// Begin export JSON. from: https://theroadtoenterprise.com/blog/how-to-download-csv-and-json-files-in-react
					const blob = new Blob( [ JSON.stringify( ajaxData ) ], { type: 'text/json' } );
					const a = document.createElement( 'a' );
					a.download = `quotes-dlx-${ activeTheme }.json`;
					a.href = window.URL.createObjectURL( blob );
					const clickEvt = new MouseEvent( 'click', {
						view: window,
						bubbles: true,
						cancelable: true,
					} );
					a.dispatchEvent( clickEvt );
					a.remove();
				} else {
					// Error stuff.
				}
			} )
			.catch( ( ajaxResponse ) => {} )
			.then( ( ajaxResponse ) => {
				setIsExporting( false );
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

	/**
	 * Get the active theme label.
	 *
	 * @return {string|null} Active theme label.
	 */
	const getThemeLabel = () => {
		let themeLabel = null;
		categories.forEach( ( cat, catIndex ) => {
			cat.themes.forEach( ( theme, themeIndex ) => {
				if ( activeTheme === theme.slug ) {
					themeLabel = theme.name;
				}
			} );
		} );
		return themeLabel;
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
			</>
		);
	};

	const getPrimaryFontStylesheet = () => {
		if ( '' !== fontFamilies.primary && '' !== fontFamilies.primaryStylesheet ) {
			return (
				<link
					rel="stylesheet"
					href={ fontFamilies.primaryStylesheet }
					type="text/css"
				/>
			);
		}
		return <></>;
	};

	const getSecondaryFontStylesheet = () => {
		if (
			'' !== fontFamilies.secondary &&
			'' !== fontFamilies.secondaryStylesheet
		) {
			return (
				<link
					rel="stylesheet"
					href={ fontFamilies.secondaryStylesheet }
					type="text/css"
				/>
			);
		}
		return <></>;
	};

	const getThemePreviewAndSwatches = () => {
		if ( loading ) {
			return <AdminThemeColorsLoader showHeader={ false } />;
		}
		return (
			<div className="qdlx-admin__tabs--content-wrap">
				{ getPrimaryFontStylesheet() }
				{ getSecondaryFontStylesheet() }
				<div className="qdlx-admin__tabs--content-panel">
					<form
						onSubmit={ ( e ) => {
							e.preventDefault();
							onSubmit();
						} }
					>
						<div className="qdlx-admin__tabs--content-heading">
							<h2>{ __( 'Select Theme Colors', 'quotes-dlx' ) }</h2>
							<p className="description">
								{ __( 'Modify the colors of the theme.', 'quotes-dlx' ) }
							</p>
						</div>
						{ hasUnsavedChanges && getUnsavedChangesWarning() }
						<div className="qdlx-admin__tabs--content-inner">
							<div className="qdlx-admin__theme-preview">
								{ GetThemePreview() }
							</div>
							<div className="qdlx-admin__color-pickers">
								<div className="qdlx-admin__color-primary">
									{ getThemePickers( themeColors ) }
								</div>
							</div>
						</div>
						{ hasUnsavedChanges && getUnsavedChangesWarning() }
						{ getSaveResetButtons() }
					</form>
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
				animate={ true }
				animationType="fadein"
			/>
		);
	};

	const getFontSizeOptions = () => {
		return (
			<>
				<ThemeSizes
					template={ activeTheme }
					screenSize="desktop"
					screenSizeLabel={ __( 'Desktop', 'quotes-dlx' ) }
				/>
				<ThemeSizes
					template={ activeTheme }
					screenSize="tablet"
					screenSizeLabel={ __( 'Tablet', 'quotes-dlx' ) }
				/>
				<ThemeSizes
					template={ activeTheme }
					screenSize="mobile"
					screenSizeLabel={ __( 'Mobile', 'quotes-dlx' ) }
				/>
			</>
		);
	};
	const getThemeFontSelector = () => {
		return (
			<>
				<ThemeFontSelector template={ activeTheme } />
			</>
		);
	};

	if ( loading ) {
		return (
			<>
				<AdminThemeColorsLoader showHeader={ false } />
			</>
		);
	}

	const getThemeExportOptions = () => {
		if ( loading ) {
			return <AdminThemeColorsLoader showHeader={ false } />;
		}
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
								{ sprintf(
									// translators: %s is the name of the active theme.
									__( 'Export %s Options', 'quotes-dlx' ),
									getThemeLabel()
								) }
							</h2>
							<p className="description">
								{
									sprintf(
										/* Translators: %s is the theme name */
										__( 'Export the theme options for %s', 'quotes-dlx' )
										, getThemeLabel()
									)
								}
							</p>
							<div className="qdlx-admin__tabs--content-inner no-padding">
								<div className="qdlx-admin__tabs--content-actions no-flex">
									<Button
										className={ classNames(
											'qdlx__btn qdlx__btn-export qdlx__btn--icon-right',
											{ 'has-icon': isExporting },
											{ 'is-exporting': isExporting },
										) }
										type="button"
										text={
											isExporting
												? __( 'Exporting…', 'quotes-dlx' )
												: __( 'Export Theme Settings', 'quotes-dlx' )
										}
										icon={ isExporting ? Spinner : ExportIcon }
										iconSize="18"
										iconPosition="right"
										disabled={ saving || resetting || isExporting }
										onClick={ ( e ) => {
											onExport();
										} }
									/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	};

	const getThemeImportOptions = () => {
		if ( loading ) {
			return <AdminThemeColorsLoader showHeader={ false } />;
		}
		return (
			<div className="qdlx-admin__tabs--content-wrap">
				<div className="qdlx-admin__tabs--content-panel">
					<form
						onSubmit={ ( e ) => {
							e.preventDefault();
							onSubmit();
						} }
						id="qdlx-import-file-form"
					>
						<div className="qdlx-admin__tabs--content-heading">
							<h2>
								{ sprintf(
									// translators: %s is the name of the active theme.
									__( 'Import %s Settings', 'quotes-dlx' ),
									getThemeLabel()
								) }
							</h2>
							<p className="description">
								{
									sprintf(
										/* Translators: %s is the theme name */
										__( 'Import the theme settings for %s', 'quotes-dlx' )
										, getThemeLabel()
									)
								}
							</p>
							<div className="qdlx-admin__tabs--content-inner no-padding">
								<div className="qdlx-admin__tabs--content-actions no-flex">
									<label htmlFor="qdlx-import-file" className={ classNames(
										'qdlx__btn qdlx__btn-export qdlx__btn--icon-right',
										{ 'has-icon': isImporting },
										{ 'is-exporting': isImporting },
									) }>
										<input type="file" ref={ importFileUploadRef } onChange={ ( e ) => {
											onFileUpload( e );
										} } name="qdlx-import-file" id="qdlx-import-file" accept="application/json" />
										{ isImporting
											? __( 'Importing…', 'quotes-dlx' )
											: __( 'Import Theme Settings', 'quotes-dlx' )
										}
										{ isImporting && <Spinner /> }
										{ ! isImporting && <ImportIcon /> }
									</label>

								</div>
								{ hasImportError && (
									<Notice
										message={ importError }
										status="error"
										politeness="polite"
									/>
								) }
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="qdlx-admin__tabs--home-grid-wrap">
				<div className="qdlx-admin__tabs--content-wrap">
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
						<div className="qdlx-admin__tabs--content-inner">
							{ getCategories() }
						</div>
					</div>
				</div>
				{ getThemePreviewAndSwatches() }
				{ getFontSizeOptions() }
				{ getThemeFontSelector() }
				{ getThemeExportOptions() }
				{ getThemeImportOptions() }
			</div>
		</>
	);
};

export default AdminThemeOptions;
