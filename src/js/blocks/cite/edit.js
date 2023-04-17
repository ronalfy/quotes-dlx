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

import { useContext, useState, useEffect, useRef, useCallback } from '@wordpress/element';

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

	const [ isPreview, setIsPreview ] = useState( false );

	const authorImg = useRef( null );

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const {
		author,
		authorUrl,
		authorTitle,
		citation,
		citeImageId,
		citeImageUrl,
		showAuthorName,
		showAuthorTitle,
		showAuthorImage,
		showAuthorUrl,
		showCitation,
		authorUrlNoFollow,
		authorUrlNewTab,
	} = attributes;

	const {
	} = attributes;

	/**
	 * Callback for when the user selects an image.
	 */
	const citeImageSelected = useCallback( ( image ) => {
		setAttributes( {
			citeImageId: image.id,
			citeImageUrl: image.url,
		} );
	}, [] );

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Citation Settings', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Citation', 'quotes-dlx' ) }
						checked={ showCitation }
						onChange={ ( value ) => {
							setAttributes( {
								showCitation: value,
							} );
						} }
						help={ __( 'Show or hide the main citation.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Author Image', 'quotes-dlx' ) }
						checked={ showAuthorImage }
						onChange={ ( value ) => {
							setAttributes( {
								showAuthorImage: value,
							} );
						} }
						help={ __( 'Show or hide the main citation author image.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Author Name', 'quotes-dlx' ) }
						checked={ showAuthorName }
						onChange={ ( value ) => {
							setAttributes( {
								showAuthorName: value,
							} );
						} }
						help={ __( 'Show or hide the main citation author name.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Author Title', 'quotes-dlx' ) }
						checked={ showAuthorTitle }
						onChange={ ( value ) => {
							setAttributes( {
								showAuthorTitle: value,
							} );
						} }
						help={ __( 'Show or hide the main citation author title.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Author URL', 'quotes-dlx' ) }
						checked={ showAuthorUrl }
						onChange={ ( value ) => {
							setAttributes( {
								showAuthorUrl: value,
							} );
						} }
						help={ __( 'Allow the author URL to be used in the citation.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ showAuthorUrl && (
					<>
						<PanelRow>
							<ToggleControl
								label={ __( 'Open Author URL in New Tab', 'quotes-dlx' ) }
								checked={ authorUrlNewTab }
								onChange={ ( value ) => {
									setAttributes( {
										authorUrlNewTab: value,
									} );
								} }
								help={ __( 'Open the author URL in a new tab.', 'quotes-dlx' ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Add nofollow to Author URL', 'quotes-dlx' ) }
								checked={ authorUrlNoFollow }
								onChange={ ( value ) => {
									setAttributes( {
										authorUrlNoFollow: value,
									} );
								} }
								help={ __( 'Add nofollow to the author URL.', 'quotes-dlx' ) }
							/>
						</PanelRow>
					</>
				) }
			</PanelBody>
		</>
	);

	const blockToolbar = (
		<BlockControls>
			<Toolbar>
				<ToolbarGroup>
					{ isPreview && (
						<ToolbarButton
							icon="edit"
							label={ __( 'Edit Citation', 'quotes-dlx' ) }
							onClick={ () => { } }
						>
							{ __( 'Edit', 'quotes-dlx' ) }
						</ToolbarButton>
					) }
					{ ! isPreview && (
						<ToolbarButton
							icon="visibility"
							label={ __( 'Preview', 'quotes-dlx' ) }
							onClick={ () => { } }
						>
							{ __( 'Preview', 'quotes-dlx' ) }
						</ToolbarButton>
					) }
				</ToolbarGroup>
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
					<PanelRow className="quotes-dlx-cite-panel-rich-text">
						<RichText
							tagName="div"
							className="quotes-dlx-cite-richtext"
							placeholder={ __( 'Enter a citation', 'quotes-dlx' ) }
							value={ citation }
							onChange={ ( value ) => setAttributes( { citation: value } ) }
							allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
						/>
					</PanelRow>
					<PanelRow className="quotes-dlx-cite-panel-row-grid">
						<section className="quotes-dlx-cite-panel-row-grid-text-fields">
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Author', 'quotes-dlx' ) }
								value={ author }
								onChange={ ( value ) => setAttributes( { author: value } ) }
								placeholder={ __( 'Enter an author name', 'quotes-dlx' ) }
							/>
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Author URL', 'quotes-dlx' ) }
								value={ authorUrl }
								onChange={ ( value ) => setAttributes( { authorUrl: value } ) }
								placeholder={ __( 'Enter an author URL', 'quotes-dlx' ) }
							/>
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Author Title', 'quotes-dlx' ) }
								value={ authorTitle }
								onChange={ ( value ) => setAttributes( { authorTitle: value } ) }
								placeholder={ __( 'Enter an author title such as a job title', 'quotes-dlx' ) }
							/>
						</section>
						<section className="quotes-dlx-cite-panel-row-grid-image-fields">
							{ '' !== citeImageUrl && (
								<>
									<div className="quotes-dlx-cite-image-card-preview">
										<img src={ citeImageUrl } alt={ __( 'Citation Image', 'quotes-dlx' ) } width={ 150 } height={ 150 } />
									</div>
								</>
							) }
							<div className="quotes-dlx-cite-image-card-button">
								<Button
									variant="secondary"
									icon="format-image"
									iconPosition="right"
									onClick={ () => {
										imageUploaderWithCropping( citeImageSelected );
									} }
								>
									{ __( 'Upload Citation Image', 'quotes-dlx' ) }
								</Button>
							</div>
						</section>
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
			<InspectorControls>
				{ inspectorControls }
			</InspectorControls>
			{ blockToolbar }
			<figcaption { ...blockProps }>{ block }</figcaption>
		</>
	);
};

export default Cite;
