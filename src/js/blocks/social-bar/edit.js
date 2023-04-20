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
const SocialBar = ( props ) => {
	const { shareText, setShareText, oldShareText, setOldShareText } =
		useContext( TextContentContext );

	const [ isPreview, setIsPreview ] = useState( props.attributes.isPreviewMode );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const {
		showTwitter,
		showFacebook,
		showLinkedin,
		showReddit,
		showTumblr,
		showEmail,
		showWhatsApp,
		showTelegram,
		showCopy,
		showWebAPI,
		iconAppearance,
		alignment,
	} = attributes;

	const getSocialNetworks = () => {
		const socialNetworks = [];
		if ( showTwitter ) {
			socialNetworks.push( 'twitter' );
		}
		if ( showFacebook ) {
			socialNetworks.push( 'facebook' );
		}
		if ( showLinkedin ) {
			socialNetworks.push( 'linkedin' );
		}
		if ( showReddit ) {
			socialNetworks.push( 'reddit' );
		}
		if ( showTumblr ) {
			socialNetworks.push( 'tumblr' );
		}
		
		if ( showWhatsApp ) {
			socialNetworks.push( 'whatsapp' );
		}
		if ( showTelegram ) {
			socialNetworks.push( 'telegram' );
		}
		if ( showEmail ) {
			socialNetworks.push( 'email' );
		}
		if ( showCopy ) {
			socialNetworks.push( 'copy' );
		}
		if ( showWebAPI ) {
			socialNetworks.push( 'webshare' );
		}
		// Map social networks to SVGs.
		return (
			<>
				<ul className="qdlx-social-networks">
					{ socialNetworks.map( ( socialNetwork, index ) => {
						return (
							<li key={ index }>
								<span className={ `qdlx-svg-icon qdlx-social-${ socialNetwork }` }rel="nofollow"><svg><use xlinkHref={ `#quotes-dlx-${ socialNetwork }-icon`}></use></svg></span>
							</li>
						);
					} ) }
				</ul>
			</>
		);
	};

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Display Settings', 'quotes-dlx' ) }
			>
				<SelectControl
					label={ __( 'Icon Appearance', 'quotes-dlx' ) }
					value={ iconAppearance }
					options={ [
						{
							label: __( 'Rounded', 'quotes-dlx' ),
							value: 'rounded',
						},
						{
							label: __( 'Squared', 'quotes-dlx' ),
							value: 'squared',
						},
					] }
					onChange={ ( value ) => {
						setAttributes( {
							iconAppearance: value,
						} );
					} }
				/>
				<PanelRow>
					<AlignmentGroup
						label={ __( 'Social Bar Alignment', 'quotes-dlx' ) }
						alignment={ alignment }
						onClick={ ( value ) => {
							setAttributes( { alignment: value } );
						} }
					/>
				</PanelRow>
			</PanelBody>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Available Social Networks', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Twitter', 'quotes-dlx' ) }
						checked={ showTwitter }
						onChange={ ( value ) => {
							setAttributes( { showTwitter: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Facebook', 'quotes-dlx' ) }
						checked={ showFacebook }
						onChange={ ( value ) => {
							setAttributes( { showFacebook: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show LinkedIn', 'quotes-dlx' ) }
						checked={ showLinkedin }
						onChange={ ( value ) => {
							setAttributes( { showLinkedin: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Reddit', 'quotes-dlx' ) }
						checked={ showReddit }
						onChange={ ( value ) => {
							setAttributes( { showReddit: value } );
						} }

					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Tumblr', 'quotes-dlx' ) }
						checked={ showTumblr }
						onChange={ ( value ) => {
							setAttributes( { showTumblr: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show WhatsApp', 'quotes-dlx' ) }
						checked={ showWhatsApp }
						onChange={ ( value ) => {
							setAttributes( { showWhatsApp: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Telegram', 'quotes-dlx' ) }
						checked={ showTelegram }
						onChange={ ( value ) => {
							setAttributes( { showTelegram: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Email', 'quotes-dlx' ) }
						checked={ showEmail }
						onChange={ ( value ) => {
							setAttributes( { showEmail: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Copy', 'quotes-dlx' ) }
						checked={ showCopy }
						onChange={ ( value ) => {
							setAttributes( { showCopy: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show Web Share API', 'quotes-dlx' ) }
						checked={ showWebAPI }
						onChange={ ( value ) => {
							setAttributes( { showWebAPI: value } );
						} }
					/>
				</PanelRow>
			</PanelBody>
		</>
	);

	const blockProps = useBlockProps( {
		className: classnames(
			`quotes-dlx-social-bar qdlx-social-bar-${ iconAppearance } qdlx-social-bar-align-${ alignment }`
		),
	} );

	return (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			<div { ...blockProps }>
				<>
					{ getSocialNetworks() }
				</>
			</div>
		</>
	);
};

export default SocialBar;
