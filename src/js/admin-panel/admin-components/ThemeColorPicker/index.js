/**
 * Color Picker.
 *
 * Credit: Forked from @quotes-dlx
 */

import React, { useState } from 'react';
import classnames from 'classnames';
import hexToRgba from 'hex-to-rgba';
import { __ } from '@wordpress/i18n';

import {
	Tooltip,
	BaseControl,
	ColorPicker,
	RangeControl,
	Popover,
	ColorPalette,
	Button,
} from '@wordpress/components';

const ThemeColorPicker = ( props ) => {
	const [ colorKey, setColorKey ] = useState( false );
	const [ isVisible, setIsVisible ] = useState( false );
	const [ color, setColor ] = useState( props.value );

	const {
		defaultColor,
		defaultColors,
		value,
		onChange,
		onOpacityChange,
		label,
		alpha = false,
		valueOpacity,
	} = props;

	const opacityIcon = (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fad"
			data-icon="tint"
			className="svg-inline--fa fa-tint fa-w-11"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 352 512"
		>
			<g className="fa-group">
				<path
					className="fa-secondary"
					fill="currentColor"
					d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448A112.14 112.14 0 0 1 64 336a16 16 0 0 1 32 0 80.09 80.09 0 0 0 80 80 16 16 0 0 1 0 32z"
					opacity="0.4"
				></path>
				<path
					className="fa-primary"
					fill="currentColor"
					d="M176 448A112.14 112.14 0 0 1 64 336a16 16 0 0 1 32 0 80.09 80.09 0 0 0 80 80 16 16 0 0 1 0 32z"
				></path>
			</g>
		</svg>
	);

	/**
	 * Toggle whether the color popup is showing.
	 */
	const toggleVisible = () => {
		setIsVisible( true );
	};

	/**
	 * Close color popup if visible.
	 */
	const toggleClose = () => {
		if ( isVisible ) {
			setIsVisible( false );
		}
	};

	return (
		<BaseControl className="ptam-component-color-picker-wrapper">
			{ !! label && (
				<div className="ptam-color-component-label">
					<span>{ label }</span>
				</div>
			) }
			<div className="ptam-component-color-picker">
				<div className="ptam-color-picker-area ptam-component-color-picker-palette">
					{ ! isVisible && (
						<>
							<Popover.Slot />
							<div
								className={ classnames(
									'components-color-palette__item-wrapper components-circular-option-picker__option-wrapper ptam-color-picker-area ptam-component-color-picker-palette',

									value ? '' : 'components-color-palette__custom-color'
								) }
							>
								<Tooltip text={ __( 'Choose Color', 'quotes-dlx' ) }>
									<button
										type="button"
										aria-expanded={ isVisible }
										className="button-reset components-button components-circular-option-picker__option is-pressed"
										onClick={ toggleVisible }
										aria-label={ __(
											'Custom color picker',
											'quotes-dlx'
										) }
										style={ {
											background: color
												? hexToRgba( color, valueOpacity )
												: 'transparent',
										} }
									>
										<span className="components-color-palette__custom-color-gradient" />
									</button>
								</Tooltip>
							</div>
						</>
					) }

					{ isVisible && (
						<div
							className={ classnames(
								'components-color-palette__item-wrapper components-circular-option-picker__option-wrapper ptam-color-picker-area ptam-component-color-picker-palette',

								value ? '' : 'components-color-palette__custom-color'
							) }
						>
							<Tooltip text={ __( 'Choose Color', 'quotes-dlx' ) }>
								<button
									type="button"
									aria-expanded={ isVisible }
									className="components-button components-circular-option-picker__option is-pressed"
									onClick={ toggleClose }
									aria-label={ __(
										'Custom color picker',
										'quotes-dlx'
									) }
									style={ {
										background: color
											? hexToRgba( color, valueOpacity )
											: 'transparent',
									} }
								>
									<span className="components-color-palette__custom-color-gradient" />
								</button>
							</Tooltip>
						</div>
					) }

					{ isVisible && (
						<Popover
							className="ptam-component-color-picker"
							onClose={ toggleClose }
							noArrow={ false }
						>
							<BaseControl key={ colorKey }>
								<ColorPicker
									key={ colorKey }
									color={ color }
									onChangeComplete={ ( newColor ) => {
										setColor( newColor.hex );
										onChange( newColor.hex );
									} }
									disableAlpha
									defaultValue={ defaultColor }
								/>
							</BaseControl>

							{ alpha && (
								<div className="ptam-component-color-opacity">
									<Tooltip text={ __( 'Opacity', 'quotes-dlx' ) }>
										{ opacityIcon }
									</Tooltip>

									<RangeControl
										value={ valueOpacity ? valueOpacity : 0 }
										onChange={ ( opacityValue ) => onOpacityChange( opacityValue ) }
										min={ 0 }
										max={ 1 }
										step={ 0.01 }
										initialPosition={ 1 }
									/>
								</div>
							) }
							<BaseControl className="ptam-component-color-picker-palette">
								<ColorPalette
									colors={ defaultColors }
									value={ color }
									onChange={ ( newColor ) => {
										onChange( newColor );
										setColor( newColor );
										setColorKey( newColor );
									} }
									disableCustomColors={ true }
									clearable={ false }
									className="button-reset"
								/>
							</BaseControl>
							<div className="components-color-clear-color">
								<Button
									className=" button-reset"
									onClick={ () => {
										onChange( defaultColor );
										setColorKey( defaultColor );
										setColor( defaultColor );
									} }
								>
									{ __( 'Clear Color', 'quotes-dlx' ) }
								</Button>
							</div>
						</Popover>
					) }
				</div>
			</div>
		</BaseControl>
	);
};

export default ThemeColorPicker;
