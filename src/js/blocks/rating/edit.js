/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/**
 * External dependencies
 */

import classnames from 'classnames';
import { Rating as StarRating } from 'react-simple-star-rating';
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
	RangeControl,
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

	

	/*
	"showReviewerName": {
			"type": "boolean",
			"default": true
		},
		"showReviewerTitle": {
			"type": "boolean",
			"default": true
		},
		"showReviewerCompany": {
			"type": "boolean",
			"default": true
		},
		"showReview": {
			"type": "boolean",
			"default": true
		}
		*/
	const {
		starRating,
		ratingPercentage,
		ratingNumber,
		ratingMax,
		review,
		reviewer,
		reviewerUrl,
		reviewerImage,
		reviewerImageId,
		reviewerTitle,
		reviewerCompany,
		reviewUrl,
		isPreviewMode,
		showReviewerImage,
		ratingType,
		showReviewerUrl,
		reviewerUrlNoFollow,
		reviewerUrlNewTab,
		showReviewerName,
		showReviewerTitle,
		showReviewerCompany,
		showReview,
		showReviewRating,
	} = attributes;

	/**
	 * Callback for when the user selects an image.
	 */
	const reviewImageSelected = useCallback( ( image ) => {
		setAttributes( {
			reviewerImageId: image.id,
			reviewerImage: image.url,
		} );
	}, [] );

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Review Settings', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Review Rating', 'quotes-dlx' ) }
						checked={ showReviewRating }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewRating: value,
							} );
						} }
						help={ __( 'Show or hide the main review rating.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Review', 'quotes-dlx' ) }
						checked={ showReview }
						onChange={ ( value ) => {
							setAttributes( {
								showReview: value,
							} );
						} }
						help={ __( 'Show or hide the main review text.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Reviewer Image', 'quotes-dlx' ) }
						checked={ showReviewerImage }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewerImage: value,
							} );
						} }
						help={ __(
							'Show or hide the main review author image.',
							'quotes-dlx'
						) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Reviewer Name', 'quotes-dlx' ) }
						checked={ showReviewerName }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewerName: value,
							} );
						} }
						help={ __(
							'Show or hide the main reviewer author name.',
							'quotes-dlx'
						) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Reviewer Title', 'quotes-dlx' ) }
						checked={ showReviewerTitle }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewerTitle: value,
							} );
						} }
						help={ __(
							'Show or hide the main reviewer author title.',
							'quotes-dlx'
						) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Reviewer Company', 'quotes-dlx' ) }
						checked={ showReviewerCompany }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewerCompany: value,
							} );
						} }
						help={ __(
							'Show or hide the main reviewer author company.',
							'quotes-dlx'
						) }
					/>
				</PanelRow>
				<PanelRow>
					<ToggleControl
						label={ __( 'Show the Reviewer URL', 'quotes-dlx' ) }
						checked={ showReviewerUrl }
						onChange={ ( value ) => {
							setAttributes( {
								showReviewerUrl: value,
							} );
						} }
						help={ __(
							'Allow the reviewer URL to be used in the rating.',
							'quotes-dlx'
						) }
					/>
				</PanelRow>
				{ showReviewerUrl && (
					<>
						<PanelRow>
							<ToggleControl
								label={ __( 'Open Reviewer URL in New Tab', 'quotes-dlx' ) }
								checked={ reviewerUrlNewTab }
								onChange={ ( value ) => {
									setAttributes( {
										reviewerUrlNewTab: value,
									} );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Add nofollow to Reviewer URL', 'quotes-dlx' ) }
								checked={ reviewerUrlNoFollow }
								onChange={ ( value ) => {
									setAttributes( {
										reviewerUrlNoFollow: value,
									} );
								} }
								help={ __( 'Add nofollow to the reviewer URL.', 'quotes-dlx' ) }
							/>
						</PanelRow>
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

	/**
	 * Get the edit rating interface for the rating block.
	 *
	 * @return {Object} The rating interface.
	 */
	const getRatingInterfaceEdit = () => {
		if ( 'stars' === ratingType ) {
			return (
				<StarRating
					initialValue={ starRating || 5 }
					onClick={ ( rating ) => {
						setAttributes( { starRating: rating } );
					} }
					allowFraction={ true }
					className="qdlx-block-star-rating"
					size={ 18 }
					SVGstorkeWidth={ 1.5 }
				/>
			);
		}
		if ( 'percentage' === ratingType ) {
			return (
				<RangeControl
					label={ __( 'Rating', 'quotes-dlx' ) }
					value={ ratingPercentage }
					onChange={ ( value ) => {
						setAttributes( { ratingPercentage: value } );
					} }
					min={ 0 }
					max={ 100 }
					step={ 1 }
				/>
			);
		}
		if ( 'number' === ratingType ) {
			return (
				<>
					<TextControl
						label={ __( 'Rating', 'quotes-dlx' ) }
						type="number"
						value={ ratingNumber }
						onChange={ ( value ) => {
							setAttributes( { ratingNumber: value } );
						} }
					/>
					<TextControl
						label={ __( 'Rating Max', 'quotes-dlx' ) }
						type="number"
						value={ ratingMax }
						onChange={ ( value ) => {
							setAttributes( { ratingMax: value } );
						} }
					/>
				</>
			);
		}
	};

	const getReviewerImage = () => {
		const image = (
			<img
				src={ reviewerImage }
				alt={ __( 'Review Image', 'quotes-dlx' ) }
				width={ 75 }
				height={ 75 }
			/>
		);
		if ( '' !== reviewerUrl && showReviewerUrl ) {
			const noFollow = reviewerUrlNoFollow ? 'nofollow' : '';
			return (
				<a
					href={ reviewerUrl }
					target={ reviewerUrlNewTab ? '_blank' : '_self' }
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

	const getReview = () => {
		if ( ! showReview || '' === review ) {
			return null;
		}
		const htmlToReactParser = new HtmlToReactParser();
		return (
			<div className="quotes-dlx-review-author-review">
				{ htmlToReactParser.parse(
					toHTMLString( {
					// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
						value: create( {
							html: review,
							preserveWhiteSpace: false,
						} ),
					} )
				) }
			</div>
		);
	};

	const getReviewer = () => {
		if ( ! showReviewerName || '' === showReviewerName ) {
			return null;
		}
		return (
			<div className="quotes-dlx-review-author">
				{ reviewer }
			</div>
		);
	};

	const getRating = () => {
		if ( ! showReviewRating ) {
			return null;
		}
		if ( 'percentage' === ratingType ) {
			return (
				<div className="quotes-dlx-review-rating rating-percentage">
					<span className="quotes-dlx-review-percentage-amount" style={ { width: ratingPercentage + '%' } }><span className="has-line-count-characters">
						{ ratingPercentage }%
					</span></span>
				</div>
			);
		}
		return (
			<div className="quotes-dlx-review-rating rating-stars">
				<StarRating
					initialValue={ starRating }
					allowFraction={ true }
					className="qdlx-block-star-rating-preview"
					size={ 24 }
					SVGstorkeWidth={ 1.5 }
					readonly={ true }
				/>
			</div>
		);
	};

	const getReviewerTitle = () => {
		if ( ! showReviewerTitle ) {
			return null;
		}
		return (
			<div className="quotes-dlx-review-title">
				{ reviewerTitle }
			</div>
		);
	};

	const getReviewerCompany = () => {
		if ( ! showReviewerCompany ) {
			return null;
		}
		return (
			<div className="quotes-dlx-review-company">
				{ reviewerCompany }
			</div>
		);
	};

	const blockEdit = (
		<>
			<Card>
				<CardHeader>{ __( 'Rating', 'quotes-dlx' ) }</CardHeader>
				<CardBody isShady={ true } isScrollable={ true }>
					<SelectControl
						label={ __( 'Rating Type', 'quotes-dlx' ) }
						value={ ratingType }
						options={ [
							{
								label: __( 'Stars', 'quotes-dlx' ),
								value: 'stars',
							},
							{
								label: __( 'Percentage', 'quotes-dlx' ),
								value: 'percentage',
							},
							{
								label: __( 'Number', 'quotes-dlx' ),
								value: 'number',
							},
						] }
						onChange={ ( value ) => {
							setAttributes( { ratingType: value } );
						} }
					/>
					<PanelRow className="qdlx-ratings-options-row">
						{ getRatingInterfaceEdit() }
					</PanelRow>
					<PanelRow className="quotes-dlx-cite-panel-rich-text">
						<RichText
							tagName="div"
							className="quotes-dlx-rating-richtext"
							disableLineBreaks={ true }
							placeholder={ __( 'Enter a review', 'quotes-dlx' ) }
							value={ review }
							onChange={ ( value ) => setAttributes( { review: value } ) }
							tabIndex="-1"
						/>
					</PanelRow>
					<PanelRow className="quotes-dlx-cite-panel-row-grid">
						<section className="quotes-dlx-cite-panel-row-grid-text-fields">
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Reviewer', 'quotes-dlx' ) }
								value={ reviewer }
								onChange={ ( value ) => setAttributes( { reviewer: value } ) }
								placeholder={ __( 'Enter a reviewer name', 'quotes-dlx' ) }
							/>
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Reviewer URL', 'quotes-dlx' ) }
								value={ reviewerUrl }
								onChange={ ( value ) => setAttributes( { reviewerUrl: value } ) }
								placeholder={ __( 'Enter the reviewer URL', 'quotes-dlx' ) }
							/>
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Reviewer Title', 'quotes-dlx' ) }
								value={ reviewerTitle }
								onChange={ ( value ) => setAttributes( { reviewerTitle: value } ) }
								placeholder={ __(
									'Enter a reviewer title such as a job title',
									'quotes-dlx'
								) }
							/>
							<TextControl
								className="quotes-dlx-cite-text-control"
								label={ __( 'Reviewer Company', 'quotes-dlx' ) }
								value={ reviewerCompany }
								onChange={ ( value ) => setAttributes( { reviewerCompany: value } ) }
								placeholder={ __(
									'Enter the reviewer company name.',
									'quotes-dlx'
								) }
							/>
						</section>
						<section className="quotes-dlx-cite-panel-row-grid-image-fields">
							{ '' !== reviewerImage && (
								<>
									<div className="quotes-dlx-cite-image-card-preview">
										<img
											src={ reviewerImage }
											alt={ __( 'Rating Image', 'quotes-dlx' ) }
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
										imageUploaderWithCropping( reviewImageSelected );
									} }
								>
									{ __( 'Upload Review Image', 'quotes-dlx' ) }
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

	const blockPreview = (
		<>
			<div className="quotes-dlx-review-wrapper">
				{ getReview() }
				<div className="quotes-dlx-review-rating-wrapper">
					<div className={ classnames( 'quotes-dlx-review-image-wrapper', { 'has-image': '' !== reviewerImage && showReviewerImage } ) }>
						{ ( '' !== reviewerImage && showReviewerImage ) && (
							<>
								<div className="quotes-dlx-review-image">{ getReviewerImage() }</div>
							</>
						) }
						<div className="quotes-dlx-review-author-wrapper">
							{ getReviewer() }
							{ getReviewerTitle() }
							{ getReviewerCompany() }
						</div>
					</div>
					{ getRating() }
				</div>
			</div>
		</>
	);

	return (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			{ blockToolbar }
			<div { ...blockProps }>
				<>
					{ isPreviewMode ? blockPreview : blockEdit }
				</>
			</div>
		</>
	);
};

export default ClickToShare;
