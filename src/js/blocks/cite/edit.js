/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';
import AlignmentGroup from '../../components/alignment';

import {
	useContext,
	useState,
	useCallback,
} from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import { create, toHTMLString } from '@wordpress/rich-text';

import {
	PanelBody,
	PanelRow,
	ToolbarGroup,
	ToggleControl,
	TextControl,
	Button,
	Toolbar,
	ToolbarButton,
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
	useBlockProps,
} from '@wordpress/block-editor';
import TextContentContext from '../context/index';
import imageUploaderWithCropping from '../../utils/CropHelper';
const HtmlToReactParser = require( 'html-to-react' ).Parser;
const Cite = ( props ) => {
	const { shareText, setShareText, oldShareText, setOldShareText } =
		useContext( TextContentContext );

	const [ isPreview, setIsPreview ] = useState( props.attributes.isPreviewMode );

	// Shortcuts.
	const { attributes, setAttributes } = props;

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
		imageAppearance,
		appearance,
		alignment,
		citationImageAlignment,
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
				title={ __( 'Display Settings', 'quotes-dlx' ) }
			>
				<SelectControl
					label={ __( 'Image Appearance', 'quotes-dlx' ) }
					value={ imageAppearance }
					options={ [
						{
							label: __( 'Rounded', 'quotes-dlx' ),
							value: 'citation-rounded',
						},
						{
							label: __( 'Squared', 'quotes-dlx' ),
							value: 'citation-squared',
						},
					] }
					onChange={ ( value ) => {
						setAttributes( {
							imageAppearance: value,
						} );
					} }
				/>
				<SelectControl
					label={ __( 'Citation Appearance', 'quotes-dlx' ) }
					value={ appearance }
					options={ [
						{
							label: __( 'Default', 'quotes-dlx' ),
							value: 'appearance-default',
						},
						{
							label: __( 'Large', 'quotes-dlx' ),
							value: 'appearance-large',
						},
					] }
					onChange={ ( value ) => {
						setAttributes( {
							appearance: value,
						} );
					} }
				/>
				<PanelRow>
					<AlignmentGroup
						label={ __( 'Citation Alignment', 'quotes-dlx' ) }
						alignment={ alignment }
						onClick={ ( value ) => {
							setAttributes( { alignment: value } );
						} }
					/>
				</PanelRow>
				<PanelRow>
					<AlignmentGroup
						label={ __( 'Image Alignment', 'quotes-dlx' ) }
						alignment={ citationImageAlignment }
						centerOn={ false }
						onClick={ ( value ) => {
							setAttributes( { citationImageAlignment: value } );
						} }
					/>
				</PanelRow>
			</PanelBody>
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
						help={ __(
							'Show or hide the main citation author image.',
							'quotes-dlx'
						) }
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
						help={ __(
							'Show or hide the main citation author name.',
							'quotes-dlx'
						) }
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
						help={ __(
							'Show or hide the main citation author title.',
							'quotes-dlx'
						) }
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
						help={ __(
							'Allow the author URL to be used in the citation.',
							'quotes-dlx'
						) }
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
							onClick={ () => {
								setAttributes( {
									isPreviewMode: false,
								} );
								setIsPreview( false );
							} }
						>
							{ __( 'Edit', 'quotes-dlx' ) }
						</ToolbarButton>
					) }
					{ ! isPreview && (
						<ToolbarButton
							icon="visibility"
							label={ __( 'Preview', 'quotes-dlx' ) }
							onClick={ () => {
								setAttributes( {
									isPreviewMode: true,
								} );
								setIsPreview( true );
							} }
						>
							{ __( 'Preview', 'quotes-dlx' ) }
						</ToolbarButton>
					) }
				</ToolbarGroup>
			</Toolbar>
		</BlockControls>
	);

	const blockEdit = (
		<>
			<Card>
				<CardHeader>{ __( 'Citation', 'quotes-dlx' ) }</CardHeader>
				<CardBody isShady={ true } isScrollable={ true }>
					<PanelRow className="quotes-dlx-cite-panel-rich-text">
						<RichText
							tagName="div"
							className="quotes-dlx-cite-richtext"
							disableLineBreaks={ true }
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
								placeholder={ __(
									'Enter an author title such as a job title',
									'quotes-dlx'
								) }
							/>
						</section>
						<section className="quotes-dlx-cite-panel-row-grid-image-fields">
							{ '' !== citeImageUrl && (
								<>
									<div className="quotes-dlx-cite-image-card-preview">
										<img
											src={ citeImageUrl }
											alt={ __( 'Citation Image', 'quotes-dlx' ) }
											width={ 150 }
											height={ 150 }
										/>
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
				<CardFooter>
					<Button
						variant="secondary"
						icon="visibility"
						iconPosition="right"
						onClick={ () => {
							setAttributes( {
								isPreviewMode: true,
							} );
							setIsPreview( true );
						} }
					>
						{ __( 'Preview', 'quotes-dlx' ) }
					</Button>
				</CardFooter>
			</Card>
		</>
	);

	const getCitationImage = () => {
		const image = (
			<img
				src={ citeImageUrl }
				alt={ __( 'Citation Image', 'quotes-dlx' ) }
				width={ 75 }
				height={ 75 }
			/>
		);
		if ( '' !== authorUrl && showAuthorUrl ) {
			const noFollow = authorUrlNoFollow ? 'nofollow' : '';
			return (
				<a
					href={ authorUrl }
					target={ authorUrlNewTab ? '_blank' : '_self' }
					rel={ `${ noFollow } noopener noreferrer` }
					onClick={ ( event ) => {
						event.preventDefault();
					} }
				>
					{ image }
				</a>
			);
		}
		return image;
	};

	const getCitationAuthor = () => {
		if ( ! showAuthorName || '' === author ) {
			return null;
		}
		let anchor = null;
		if ( '' !== authorUrl && showAuthorUrl ) {
			const noFollow = authorUrlNoFollow ? 'nofollow' : '';
			anchor = (
				<a
					href={ authorUrl }
					target={ authorUrlNewTab ? '_blank' : '_self' }
					rel={ `${ noFollow } noopener noreferrer` }
					onClick={ ( event ) => {
						event.preventDefault();
					} }
				>
					{ author }
				</a>
			);
		}
		return (
			<div className="quotes-dlx-cite-author">
				{ anchor ? anchor : author }
			</div>
		);
	};

	const getCitationAuthorTitle = () => {
		if ( ! showAuthorTitle || '' === authorTitle ) {
			return null;
		}
		return (
			<div className="quotes-dlx-cite-author-title">
				{ authorTitle }
			</div>
		);
	};

	const getCitation = () => {
		if ( ! showCitation || '' === citation ) {
			return null;
		}
		const htmlToReactParser = new HtmlToReactParser();
		return (
			<div className="quotes-dlx-cite-author-citation">
				{ htmlToReactParser.parse(
					toHTMLString( {
					// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
						value: create( {
							html: citation,
							preserveWhiteSpace: false,
						} ),
					} )
				) }
			</div>
		);
	};

	const blockPreview = (
		<>
			<div className="quotes-dlx-cite-wrapper">
				<div className="quotes-dlx-cite-image-wrapper">
					{ ( '' !== citeImageUrl && showAuthorImage ) && (
						<div className="quotes-dlx-cite-image">{ getCitationImage() }</div>
					) }
					<div className="quotes-dlx-cite-author-info">
						{ getCitationAuthor() }
						{ getCitationAuthorTitle() }
						{ getCitation() }
					</div>
				</div>
			</div>
		</>
	);

	const blockProps = useBlockProps( {
		className: classnames(
			`quotes-dlx-cite is-style-${ imageAppearance } is-layout-${ appearance } is-alignment-${ alignment } citation-image-alignment-${ citationImageAlignment }`,
			{
				'has-no-citation-image': '' === citeImageUrl || ! showAuthorImage,
			}
		),
	} );

	return (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			{ blockToolbar }
			<figcaption { ...blockProps }>
				{ isPreview ? blockPreview : blockEdit }
			</figcaption>
		</>
	);
};

export default Cite;
