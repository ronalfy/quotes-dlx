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

import { useContext, useState, useEffect, useRef } from '@wordpress/element';

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
	Card,
	CardHeader,
	CardBody,
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

const Cite = ( props ) => {
	const { shareText, setShareText, oldShareText, setOldShareText } = useContext( TextContentContext );
	
	const [ isEditing, setIsEditing ] = useState( false );

	const authorImg = useRef( null );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const {
		author,
		authorUrl,
		authorTitle,
		citation,
	} = attributes;

	const {
	} = attributes;

	const blockToolbar = (
		<BlockControls>
			<Toolbar>
				<ToolbarButton
					icon="edit"
					label={ __( 'Edit Citation', 'quotes-dlx' ) }
					onClick={ () => { } }
				>
					{ __( 'Edit', 'quotes-dlx' ) }
				</ToolbarButton>
			</Toolbar>
		</BlockControls>
	);

	const block = (
		<>
			<Card>
				<CardHeader>
					{ __( 'Citation', 'quotes-dlx' ) }
				</CardHeader>
				<CardBody
					isShady={ true }
					isScrollable={ true }
				>
					<PanelRow>
						<RichText
							tagName="div"
							className="quotes-dlx-cite-richtext"
							placeholder={ __( 'Enter a citation', 'quotes-dlx' ) }
							value={ citation }
							onChange={ ( value ) => setAttributes( { citation: value } ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Author', 'quotes-dlx' ) }
							value={ author }
							onChange={ ( value ) => setAttributes( { author: value } ) }
							placeholder={ __( 'Enter an author name', 'quotes-dlx' ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Author URL', 'quotes-dlx' ) }
							value={ authorUrl }
							onChange={ ( value ) => setAttributes( { authorUrl: value } ) }
							placeholder={ __( 'Enter an author URL', 'quotes-dlx' ) }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Author Title', 'quotes-dlx' ) }
							value={ authorTitle }
							onChange={ ( value ) => setAttributes( { authorTitle: value } ) }
							placeholder={ __( 'Enter an author title such as a job title', 'quotes-dlx' ) }
						/>
					</PanelRow>
					<PanelRow>
						<img src="" alt="" ref={ authorImg } />
						<Button
							variant="secondary"
							isSmall={ true }
							isPrimary={ true }
							onClick={ () => {
								imageUploaderWithCropping( authorImg );
							} }
						>
							{ __( 'Upload image', 'quotes-dlx' ) }
						</Button>
					</PanelRow>
				</CardBody>
			</Card>
		</>
	);

	const blockProps = useBlockProps( {
		className: `quotes-dlx-cite`,
	} );

	return (
		<>
			{ blockToolbar }
			<figcaption { ...blockProps }>{ block }</figcaption>
		</>
	);
};

export default Cite;
