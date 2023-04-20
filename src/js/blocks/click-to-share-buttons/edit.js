/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';
import twttr from '../../validation/twitter';
import IconCircle from '../../components/icons/Circle';
import UnitChooser from '../../components/unit-picker';
import TwitterIcon from '../../components/icons/twitter';
import FacebookIcon from '../../components/icons/FacebookIcon';
import PaintbrushIcon from '../../components/icons/paintbrush';
import PreviewIcon from '../../components/icons/Preview';
import NewWindowIcon from '../../components/icons/NewWindow';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import AlignmentGroup from '../../components/alignment';
import CircularCount from '../../components/CircularCount';
import LineCount from '../../components/LineCount';
import MeatballMenu from '../../components/MeatballMenu';
import ColorPicker from '../../components/ColorPicker';
import { rawHandler } from '@wordpress/blocks';

import {
	useContext,
	useState,
	useEffect,
	useRef,
	useCallback,
} from '@wordpress/element';

import { useDispatch, useSelect } from '@wordpress/data';

import { createHooks } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

import { create, toHTMLString } from '@wordpress/rich-text';

import { useInstanceId } from '@wordpress/compose';
import {
	PanelBody,
	PanelRow,
	ToolbarGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Button,
	TabPanel,
	FormTokenField,
	RadioControl,
	Notice,
	Toolbar,
	ToolbarButton,
	ToolbarItem,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	SelectControl,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	BlockControls,
	store,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import TextContentContext from '../context/index';
import imageUploaderWithCropping from '../../utils/CropHelper';
const HtmlToReactParser = require( 'html-to-react' ).Parser;
const ClickToShare = ( props ) => {
	const { shareText, setShareText, oldShareText, setOldShareText } =
		useContext( TextContentContext );

	const [ isPreview, setIsPreview ] = useState( props.attributes.isPreviewMode );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const {
		tweet_icon_alignment,
		tweet_button_enabled,
		facebook_button_enabled,
		tweet_button_alignment,
		tweet_button_display,
		icon_appearance,
		facebook_share_button_text,
		twitter_share_button_text,
	} = attributes;

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Share Buttons', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Twitter Share Button', 'quotes-dlx' ) }
						checked={ tweet_button_enabled }
						onChange={ ( value ) => {
							setAttributes( {
								tweet_button_enabled: value,
							} );
						} }
						help={ __( 'Show or hide the Click to Tweet button.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ tweet_button_enabled && (
					<PanelRow>
						<TextControl
							label={ __( 'Tweet Button Text', 'quotes-dlx' ) }
							help={ __( 'Enter the Click to Tweet button text.' ) }
							value={ twitter_share_button_text }
							onChange={ ( value ) => {
								setAttributes( {
									twitter_share_button_text: value,
								} );
							} }
						/>
					</PanelRow>
				) }
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Facebook Share Button', 'quotes-dlx' ) }
						checked={ facebook_button_enabled }
						onChange={ ( value ) => {
							setAttributes( {
								facebook_button_enabled: value,
							} );
						} }
						help={ __( 'Show or hide the Share on Facebook button.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ facebook_button_enabled && (
					<PanelRow>
						<TextControl
							label={ __( 'Facebook Button Text', 'quotes-dlx' ) }
							help={ __( 'Enter the Facebook Button text' ) }
							value={ facebook_share_button_text }
							onChange={ ( value ) => {
								setAttributes( {
									facebook_share_button_text: value,
								} );
							} }
						/>
					</PanelRow>
				) }
				{ ( tweet_button_enabled || facebook_button_enabled ) && (
					<>
						<PanelRow>
							<AlignmentGroup
								label={ __( 'Button Alignment', 'quotes-dlx' ) }
								alignment={ tweet_button_alignment }
								onClick={ ( value ) => {
									setAttributes( { tweet_button_alignment: value } );
								} }
							/>
						</PanelRow>
						{ tweet_button_display === 'full' && (
							<PanelRow>
								<AlignmentGroup
									label={ __( 'Icon Alignment', 'quotes-dlx' ) }
									alignment={ tweet_icon_alignment }
									onClick={ ( value ) => {
										setAttributes( { tweet_icon_alignment: value } );
									} }
									centerOn={ false }
								/>
							</PanelRow>
						) }
						<PanelRow className="quotes-dlx-sidebar-button-options">
							<RadioControl
								label={ __( 'Button Options', 'quotes-dlx' ) }
								selected={ tweet_button_display }
								options={ [
									{ label: __( 'Text Only', 'quotes-dlx' ), value: 'text' },
									{ label: __( 'Icon Only', 'quotes-dlx' ), value: 'icon' },
									{
										label: __( 'Text and Icon', 'quotes-dlx' ),
										value: 'full',
									},
								] }
								onChange={ ( value ) => {
									setAttributes( {
										tweet_button_display: value,
									} );
								} }
							/>
						</PanelRow>
						{ 'icon' === tweet_button_display && (
							<PanelRow className="quotes-dlx-sidebar-button-options">
								<RadioControl
									label={ __( 'Button Icon Appearance', 'quotes-dlx' ) }
									selected={ icon_appearance }
									options={ [
										{ label: __( 'Button', 'quotes-dlx' ), value: 'button' },
										{ label: __( 'Transparent', 'quotes-dlx' ), value: 'transparent' },
									] }
									onChange={ ( value ) => {
										setAttributes( {
											icon_appearance: value,
										} );
									} }
								/>
							</PanelRow>
						) }
					</>
				) }
			</PanelBody>
		</>
	);

	const blockProps = useBlockProps( {
		className: classnames(
			`quotes-dlx-click-to-share`
		),
	} );

	const getClickToShareButton = () => {
		if ( ! tweet_button_enabled && ! facebook_button_enabled ) {
			return <></>;
		}
		const buttonClassNames = classnames( tweet_button_alignment, {
			'quotes-dlx-button-wrapper': true,
			'is-transparent-button': ( tweet_button_display === 'icon' && 'transparent' === icon_appearance ),
		} );
		return (
			<div className={ buttonClassNames }>
				{ tweet_button_enabled && (
					<button
						className={ `quotes-dlx-button ${ tweet_button_display } quotes-dlx-button-icon-${ tweet_icon_alignment }` }
						onClick={ ( value ) => {} }
					>
						<>
							{ ( tweet_button_display === 'full' ||
								tweet_button_display === 'text' ) && (
								<span className="quotes-dlx-button-text">
									{ twitter_share_button_text }
								</span>
							) }
							{ ( tweet_button_display === 'icon' ||
								tweet_button_display === 'full' ) && (
								<span className="quotes-dlx-button-icon">
									<TwitterIcon />
								</span>
							) }
						</>
					</button>
				) }
				{ facebook_button_enabled && (
					<button
						className={ `quotes-dlx-button ${ tweet_button_display } quotes-dlx-button-icon-${ tweet_icon_alignment }` }
						onClick={ ( value ) => {} }
					>
						<>
							{ ( tweet_button_display === 'full' ||
								tweet_button_display === 'text' ) && (
								<span className="quotes-dlx-button-text">
									{ facebook_share_button_text }
								</span>
							) }
							{ ( tweet_button_display === 'icon' ||
								tweet_button_display === 'full' ) && (
								<span className="quotes-dlx-button-icon">
									<FacebookIcon />
								</span>
							) }
						</>
					</button>
				) }
			</div>
		);
	};

	return (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<div { ...blockProps }>
				<>
					{ getClickToShareButton() }
				</>
			</div>
		</>
	);
};

export default ClickToShare;
