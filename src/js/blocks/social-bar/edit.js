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
		showWhatsapp,
		showTelegram,
		showCopy,
		showWebAPI,
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
		if ( showEmail ) {
			socialNetworks.push( 'email' );
		}
		if ( showWhatsapp ) {
			socialNetworks.push( 'whatsapp' );
		}
		if ( showTelegram ) {
			socialNetworks.push( 'telegram' );
		}
		if ( showCopy ) {
			socialNetworks.push( 'copy' );
		}
		if ( showWebAPI ) {
			socialNetworks.push( 'webshare-icon' );
		}
		// Map social networks to SVGs.
		return (
			<>
				<ul>
					{ socialNetworks.map( ( socialNetwork, index ) => {
						return (
							<li key={ index }>
								<svg className="qdlx-svg-icon" rel="nofollow"><use xlinkHref={ `#quotes-dlx-${ socialNetwork }-icon`}></use></svg>
							</li>
						);
					} ) }
				</ul>
			</>
		);
	};

	const inspectorControls = (
		<>
		</>
	);

	const blockProps = useBlockProps( {
		className: classnames(
			`quotes-dlx-social-bar`,
			{
			}
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
