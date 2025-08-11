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
import XIcon from '../../components/icons/x';
import FacebookIcon from '../../components/icons/FacebookIcon';
import PaintbrushIcon from '../../components/icons/paintbrush';
import PreviewIcon from '../../components/icons/Preview';
import NewWindowIcon from '../../components/icons/NewWindow';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import AlignmentGroup from '../../components/alignment';
import CircularCount from '../../components/CircularCount';
import LineCount from '../../components/LineCount';
import MeatballMenu from '../../components/MeatballMenu';
import UserIcon from '../../components/icons/user';

import { useEffect, useState, createRef } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { createHooks } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

import { create, toHTMLString } from '@wordpress/rich-text';

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
	SelectControl,
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

const HtmlToReactParser = require( 'html-to-react' ).Parser;
import useMediaUploader from '../../hooks/useMediaUploader';

// For storing unique IDs.
const uniqueIds = [];

const TweetQuotes = ( props ) => {
	const manualUrlInput = createRef( null );
	const shareTextInput = createRef( null );
	const maximumWidthInput = createRef( null );
	// State.
	const [ tweetCharacterTotal, setTweetCharacterTotal ] = useState( 0 );
	const [ tweetHashtagCharLength, setTweetHashtagCharLength ] = useState( 0 );
	const [ tweetContentCharLength, setTweetContentCharLength ] = useState( 0 );
	const [ tweetUsernameCharLength, setTweetUsernameCharLength ] = useState( 0 );
	const [ tweetPermalinkCharLength, setTweetPermalinkCharLength ] = useState( 0 );
	const [ selectedTab, setSelectedTab ] = useState( 'appearance' );
	const [ urlShortener, setUrlShortener ] = useState( 'default' );

	// Shortcuts.
	const { attributes, setAttributes, isSelected, clientId } = props;

	// Media uploader for citation image upload.
	const { openMediaUploader } = useMediaUploader();

	/**
	 * Get a unique ID for the block for inline styling if necessary.
	 */
	useEffect( () => {
		if ( ( null === uniqueId || '' === uniqueId ) || uniqueIds.includes( uniqueId ) ) {
			const newUniqueId = attributes.anchor_prefix + '_' + clientId.substr( 2, 9 ).replace( '-', '' );
			setAttributes( { uniqueId: newUniqueId, anchor: newUniqueId } );
			uniqueIds.push( newUniqueId );
		} else {
			uniqueIds.push( uniqueId );
		}
	}, [] );

	const postObject = useSelect( ( select ) => {
		// Useful functions: getCurrentPost, getCurrentPostId, getPermalink
		// Credit: https://ryanwelcher.com/2021/08/requesting-data-in-gutenberg-with-getentityrecords/
		return select( 'core/editor' ).getCurrentPost();
	} );

	// Nonce var.
	// eslint-disable-next-line no-undef
	const { themes, defaults } = tweet_quotes_block_vars; // Ajax object.

	const {
		uniqueId,
		template,
		hashtags,
		twitter_username,
		share_text,
		share_text_override,
		share_text_override_enabled,
		share_button_text,
		facebook_share_button_text,
		maximum_width,
		maximum_width_unit,
		tweet_button_enabled,
		facebook_button_enabled,
		tweet_button_alignment,
		tweet_icon_alignment,
		rtl,
		tweet_button_display,
		tweet_styles_disabled,
		anchor,
		has_anchor,
		url_shortener,
		url_shortening_service,
		permalink,
		manual_permalink,
		enable_links_in_tweet,
		enable_contextual_menu,
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
		enable_share_this,
		enable_email_text,
		preview,
		blockOnly,
		defaultsApplied,
		transforming,
		icon_appearance,
		enable_citation,
		enable_citation_image,
		enable_citation_author,
		citation_author,
		enable_citation_source,
		citation_source,
		enable_citation_title,
		citation_title,
		citation_image_id,
		citation_image_url,
		citation_image_appearance,
		citation_alignment,
		citation_image_has_border,
		show_rating,
		rating_value,
		rating_alignment,
		rating_position,
	} = attributes;

	useEffect( () => {
		countCharacters();
		countInfoCharacters();
	}, [
		twitter_username,
		share_text,
		share_text_override,
		hashtags,
		share_text_override_enabled,
		enable_links_in_tweet,
		permalink,
		anchor,
		has_anchor,
	] );

	useEffect( () => {
		// Check to see if defaults have been applied.
		if ( ! defaultsApplied ) {
			// Get original values before defaults applied.
			const originalAtts = attributes;

			// Override with defaults.
			setAttributes( { ...defaults } );
			setAttributes( { defaultsApplied: true } );

			// If transforming form certain blocks, set the button text and username (override the override).
			if ( transforming ) {
				setAttributes( {
					share_button_text: originalAtts.share_button_text,
					twitter_username: originalAtts.twitter_username,
					enable_links_in_tweet: originalAtts.enable_links_in_tweet,
					has_anchor: originalAtts.has_anchor,
					url_shortener: originalAtts.has_anchor,
					url_shortening_service: originalAtts.permalink
						? 'manual'
						: defaults.url_shortening_service,
					transforming: false,
				} );
			}
		}
	}, [] );

	useEffect( () => {
		if ( url_shortener === 'manual' ) {
			manualUrlInput.current.focus();
		}
	}, [ url_shortener ] );

	useEffect( () => {
		if (
			selectedTab === 'appearance' &&
			shareTextInput.current !== null &&
			isSelected
		) {
			// Todo - this is not working. It's nulling the sidebar.
			// shareTextInput.current.focus();
			// Note to self: not possible with component to focus on last character.
		}
	}, [ isSelected, shareTextInput, selectedTab ] );

	useEffect( () => {
		if (
			manualUrlInput.current !== null &&
			'manual' === urlShortener &&
			'appearance' !== selectedTab
		) {
			manualUrlInput.current.focus();
			manualUrlInput.current.select();
		}
	}, [ url_shortening_service ] );

	useEffect( () => {
		const link = '' === permalink ? postObject.link : permalink;
		const manualLink = '' === manual_permalink ? postObject.link : permalink;

		switch ( url_shortening_service ) {
			case 'none':
				setAttributes( {
					permalink: manual_permalink,
					manual_permalink: postObject.link,
				} );
				break;
			case 'bitly':
				setAttributes( {
					manual_permalink: tweet_quotes_block_vars.bitly_plugin_short_url,
				} );
				break;
			case 'jetpack':
				setAttributes( {
					manual_permalink: tweet_quotes_block_vars.jetpack_plugin_short_url,
				} );
				break;
			case 'manual':
				setAttributes( { manual_permalink: link } );
		}
	}, [ postObject, url_shortening_service ] );

	/**
	 * Check to see if the context menu is global.
	 *
	 * @return {boolean} Whether or not the contextual menu is global.
	 */
	const isContextualMenuGlobal = () => {
		const contextualMenuOptions = tweet_quotes_block_vars.contextual_menu_options;

		if ( contextualMenuOptions.enable_global_contextual_menu ) {
			return true;
		}
		return false;
	};
	/**
	 * Count  the characters including text, links, hashtags, and mentions.
	 */
	const countCharacters = () => {
		// Begin adding text entered.
		let tweetContent = '';

		// Get main tweet text.
		if ( share_text_override_enabled ) {
			tweetContent += share_text_override;
		} else {
			tweetContent += share_text;
		}
		if ( tweetContent !== '' ) {
			tweetContent += '\r\n';
		}

		// Add hashtags.
		if ( hashtags.length > 0 ) {
			tweetContent += hashtags.join( '#' );
		}

		if ( tweetContent !== '' && hashtags.length > 0 ) {
			tweetContent += '\r\n';
		}

		// Add via.
		if ( twitter_username.length > 0 ) {
			tweetContent += 'Via ';
			tweetContent += twitter_username;
		}

		if ( permalink.length > 0 && enable_links_in_tweet ) {
			tweetContent += '\r\n';
			tweetContent += permalink + ( has_anchor ? '#' + anchor : '' );
		}

		setTweetCharacterTotal( twttr.txt.getTweetLength( tweetContent ) );
	};

	const countInfoCharacters = () => {
		setTweetHashtagCharLength( getHashtagsLength() );
		setTweetContentCharLength( getTweetTextLength() );
		setTweetUsernameCharLength( getUsernameLength() );
		setTweetPermalinkCharLength( getPermalinkLength() );
	};

	const getUsernameLength = () => {
		let tweetContent = '';
		// Add via.
		if ( twitter_username.length > 0 ) {
			tweetContent += __( 'Via', 'quotes-dlx' ) + ' ';
			tweetContent += twitter_username;
		}

		const count = twttr.txt.getTweetLength( tweetContent );
		return count;
	};

	const getTweetTextLength = () => {
		let tweetContent = '';
		// Get main tweet text.
		if ( share_text_override_enabled ) {
			tweetContent += share_text_override;
		} else {
			tweetContent += share_text;
		}
		if ( tweetContent !== '' ) {
			tweetContent += '\r\n';
		}

		const count = twttr.txt.getTweetLength( tweetContent );
		return count;
	};

	const getHashtagsLength = () => {
		let tweetContent = '';

		if ( hashtags.length > 0 ) {
			tweetContent += hashtags.join( '#' );
			tweetContent += '\r\n';
		}

		const count = twttr.txt.getTweetLength( tweetContent );
		return count;
	};

	const getPermalinkLength = () => {
		let tweetContent = '';

		if ( permalink.length > 0 && enable_links_in_tweet ) {
			tweetContent += '\r\n';
			tweetContent += permalink + ( has_anchor ? '#' + anchor : '' );
		}

		const count = twttr.txt.getTweetLength( tweetContent );
		return count;
	};

	const getCharacterBar = () => {
		return <LineCount chars={ tweetCharacterTotal } />;
	};

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
									{ share_button_text }
								</span>
							) }
							{ ( tweet_button_display === 'icon' ||
								tweet_button_display === 'full' ) && (
								<span className="quotes-dlx-button-icon">
									<XIcon />
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

	/**
	 * Get the citation.
	 *
	 * @return {Object} The citation.
	 */
	const getCitation = () => {
		if ( enable_citation ) {
			return (
				<figcaption className={ `quotes-dlx-citation-wrapper quotes-dlx-citation-align-${ citation_alignment }` }>
					{ enable_citation_image && (
						<div className="quotes-dlx-citation-image-wrapper">
							<Button
								onClick={ () => {
									openMediaUploader( {
										attachmentId: citation_image_id || 0,
									}, ( media ) => {
										setAttributes( {
											citation_image_id: media.id,
											citation_image_url: media.url,
										} );
									} );
								} }
								className={
									classnames( 'quotes-dlx-citation-image-button-wrapper', {
										'has-image': citation_image_id,
										'is-round': 'round' === citation_image_appearance,
										'has-border': citation_image_has_border,
									} )
								}
							>
								{ ( citation_image_id !== 0 && citation_image_url ) && (
									<img
										src={ citation_image_url }
										alt={ __( 'Citation Image', 'quotes-dlx' ) }
										width="75"
										height="75"
									/>
								) }
								{ ( ! citation_image_id || ! citation_image_url ) && (
									<UserIcon
										fill="#333"
										width="75" height="75"
									/>
								) }
							</Button>
						</div>
					) }
					<div className="quotes-dlx-citation-text-wrapper">
						{ enable_citation_author && (
							<RichText
								tagName="div"
								placeholder={ __( 'Enter author name', 'quotes-dlx' ) }
								value={ citation_author }
								className="quotes-dlx-citation-author"
								onChange={ ( value ) => {
									setAttributes( { citation_author: value } );
								} }
								allowedFormats={ [
									'core/bold',
									'core/italic',
									'core/text-color',
									'core/link',
								] }
								tabIndex="-1"
							/>
						) }
						{ enable_citation_title && (
							<RichText
								tagName="div"
								placeholder={ __( 'Enter author title', 'quotes-dlx' ) }
								disableLineBreaks={ true }
								value={ citation_title }
								className="quotes-dlx-citation-title"
								onChange={ ( value ) => {
									setAttributes( { citation_title: value } );
								} }
								allowedFormats={ [
									'core/bold',
									'core/italic',
									'core/text-color',
									'core/link',
								] }
								tabIndex="-1"
							/>
						) }
						{
							enable_citation_source && (
								<RichText
									tagName="div"
									placeholder={ __( 'Enter source', 'quotes-dlx' ) }
									disableLineBreaks={ true }
									value={ citation_source }
									className="quotes-dlx-citation-source"
									onChange={ ( value ) => {
										setAttributes( { citation_source: value } );
									} }
									allowedFormats={ [
										'core/bold',
										'core/italic',
										'core/text-color',
										'core/link',
									] }
									tabIndex="-1"
								/>
							)
						}
					</div>
				</figcaption>
			);
		}
	};

	const getRating = () => {
		return (
			<div className="quotes-dlx-rating-wrapper">
				<style>
					{ `
						#${ uniqueId } .quotes-dlx-rating-wrapper::before {
							--percent: ${ parseInt( rating_value ) }%;
						}
					` }
				</style>
			</div>
		);
	};

	const inspectorControls = (
		<>
			<PanelBody initialOpen={ true } title={ __( 'Characters', 'quotes-dlx' ) }>
				<CircularCount chars={ tweetCharacterTotal } />
			</PanelBody>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Container Settings', 'quotes-dlx' ) }
			>
				<>
					<UnitChooser
						label={ __( 'Maximum Width', 'quotes-dlx' ) }
						value={ maximum_width_unit }
						units={ [ 'px', '%', 'vw' ] }
						onClick={ ( value ) => {
							setAttributes( {
								maximum_width_unit: value,
							} );
						} }
					/>

					<TextControl
						type={ 'text' }
						value={ maximum_width }
						onChange={ ( value ) => {
							setAttributes( {
								maximum_width: value,
							} );
						} }
						ref={ maximumWidthInput }
					/>
				</>
			</PanelBody>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Rating Settings', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Rating', 'quotes-dlx' ) }
						checked={ show_rating }
						onChange={ ( value ) => {
							setAttributes( {
								show_rating: value,
							} );
						} }
						help={ __( 'Show or hide a star rating in the quote.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ show_rating && (
					<>
						<PanelRow>
							<TextControl
								label={ __( 'Rating Value', 'quotes-dlx' ) }
								value={ rating_value }
								onChange={ ( value ) => {
									setAttributes( {
										rating_value: value,
									} );
								} }
								type="number"
								min="0"
								max="100"
								help={ __( 'Enter the rating value between 0 and 100.', 'quotes-dlx' ) }
							/>
						</PanelRow>
						<PanelRow>
							<AlignmentGroup
								label={ __( 'Rating Alignment', 'quotes-dlx' ) }
								alignment={ rating_alignment }
								onClick={ ( value ) => {
									setAttributes( { rating_alignment: value } );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<SelectControl
								label={ __( 'Rating Position', 'quotes-dlx' ) }
								value={ rating_position }
								options={ [
									{ label: __( 'Above Quote', 'quotes-dlx' ), value: 'above_quote' },
									{ label: __( 'Below Quote', 'quotes-dlx' ), value: 'below_quote' },
									{ label: __( 'Below Citation', 'quotes-dlx' ), value: 'below_citation' },
								] }
								onChange={ ( value ) => {
									setAttributes( { rating_position: value } );
								} }
							/>
						</PanelRow>
					</>
				) }
			</PanelBody>
			<PanelBody
				initialOpen={ enable_citation ? true : false }
				title={ __( 'Citation Settings', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Citation', 'quotes-dlx' ) }
						checked={ enable_citation }
						onChange={ ( value ) => {
							setAttributes( {
								enable_citation: value,
							} );
						} }
					/>
				</PanelRow>
				{ enable_citation && (
					<>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Citation Image', 'quotes-dlx' ) }
								checked={ enable_citation_image }
								onChange={ ( value ) => {
									setAttributes( {
										enable_citation_image: value,
									} );
								} }
							/>
						</PanelRow>
						{ enable_citation_image && (
							<>
								<PanelRow>
									<SelectControl
										label={ __( 'Citation Image Appearance', 'quotes-dlx' ) }
										value={ citation_image_appearance }
										options={ [
											{ label: __( 'Rounded', 'quotes-dlx' ), value: 'round' },
											{ label: __( 'Square', 'quotes-dlx' ), value: 'square' },
										] }
										onChange={ ( value ) => {
											setAttributes( {
												citation_image_appearance: value,
											} );
										} }
									/>
								</PanelRow>
								<PanelRow>
									<ToggleControl
										label={ __( 'Enable Citation Image Border', 'quotes-dlx' ) }
										checked={ citation_image_has_border }
										onChange={ ( value ) => {
											setAttributes( {
												citation_image_has_border: value,
											} );
										} }
									/>
								</PanelRow>
							</>
						) }
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Citation Author', 'quotes-dlx' ) }
								checked={ enable_citation_author }
								onChange={ ( value ) => {
									setAttributes( {
										enable_citation_author: value,
									} );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Citation Title', 'quotes-dlx' ) }
								checked={ enable_citation_title }
								onChange={ ( value ) => {
									setAttributes( {
										enable_citation_title: value,
									} );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Citation Source', 'quotes-dlx' ) }
								checked={ enable_citation_source }
								onChange={ ( value ) => {
									setAttributes( {
										enable_citation_source: value,
									} );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<AlignmentGroup
								label={ __( 'Citation Alignment', 'quotes-dlx' ) }
								alignment={ citation_alignment }
								onClick={ ( value ) => {
									setAttributes( { citation_alignment: value } );
								} }
							/>
						</PanelRow>
					</>
				) }
			</PanelBody>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Share Buttons', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable X Share Button', 'quotes-dlx' ) }
						checked={ tweet_button_enabled }
						onChange={ ( value ) => {
							setAttributes( {
								tweet_button_enabled: value,
							} );
						} }
						help={ __( 'Show or hide the Click to Post button.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ tweet_button_enabled && (
					<PanelRow>
						<TextControl
							label={ __( 'X Button Text', 'quotes-dlx' ) }
							help={ __( 'Enter the Click to Post button text.' ) }
							value={ share_button_text }
							onChange={ ( value ) => {
								setAttributes( {
									share_button_text: value,
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
			<PanelBody
				initialOpen={ false }
				title={ __( 'Contextual Menu', 'quotes-dlx' ) }
			>
				{ isContextualMenuGlobal() && (
					<PanelRow>
						<p className="description">
							{ __( 'The contextual menu is enabled globally. You can disable the global options in the admin settings under Contextual Menu.', 'quotes-dlx' ) }
						</p>
					</PanelRow>
				) }
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Menu', 'quotes-dlx' ) }
						checked={ enable_contextual_menu }
						onChange={ ( value ) => {
							setAttributes( {
								enable_contextual_menu: value,
							} );
						} }
						help={ __( 'Turn on the contextual menu.', 'quotes-dlx' ) }
						disabled={ isContextualMenuGlobal() }
					/>
				</PanelRow>
				{ enable_contextual_menu && (
					<>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Copy Text', 'quotes-dlx' ) }
								checked={ enable_copy_text }
								onChange={ ( value ) => {
									setAttributes( {
										enable_copy_text: value,
									} );
								} }
								help={ __(
									'This allows the copying of your full quote.',
									'quotes-dlx'
								) }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Copy Post', 'quotes-dlx' ) }
								checked={ enable_copy_tweet }
								onChange={ ( value ) => {
									setAttributes( {
										enable_copy_tweet: value,
									} );
								} }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Copy Link', 'quotes-dlx' ) }
								checked={ enable_copy_link }
								onChange={ ( value ) => {
									setAttributes( {
										enable_copy_link: value,
									} );
								} }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Email Quote', 'quotes-dlx' ) }
								checked={ enable_email_text }
								onChange={ ( value ) => {
									setAttributes( {
										enable_email_text: value,
									} );
								} }
								help={ __( 'You can find additional email settings in the QuotesDLX admin under Emails.', 'quotes-dlx' ) }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Post This', 'quotes-dlx' ) }
								checked={ enable_tweet_this }
								onChange={ ( value ) => {
									setAttributes( {
										enable_tweet_this: value,
									} );
								} }
								help={ __( 'Enable X sharing in the context menu.', 'quotes-dlx' ) }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Share This', 'quotes-dlx' ) }
								checked={ enable_share_this }
								onChange={ ( value ) => {
									setAttributes( {
										enable_share_this: value,
									} );
								} }
								help={ __( 'Enable Facebook sharing in the context menu.', 'quotes-dlx' ) }
								disabled={ isContextualMenuGlobal() }
							/>
						</PanelRow>
					</>
				) }
			</PanelBody>
		</>
	);

	// Load themes and display them in a dropdown menu.
	// There's a side-effect here if a theme is deleted. Need to use useEffect to
	// set default theme. This causes more issues, so solution is to set default on PHP side (front-end).
	let toolbarThemes = [];
	themes.forEach( ( theme ) => {
		toolbarThemes.push( {
			title: theme.name,
			isActive: template === theme.slug,
			icon: (
				<IconCircle
					height={ 24 }
					width={ 24 }
					gradient={ theme.gradient }
					className={
						template === theme.name ? 'has selected quotes-dlx' : 'quotes-dlx'
					}
				/>
			),
			onClick: () => {
				setAttributes( {
					template: theme.slug,
				} );
			},
		} );
	} );

	// Calculate max width.
	const maxWidthStyle = {
		maxWidth: maximum_width + maximum_width_unit,
	};

	const toolbarPreview = [
		{
			title: __( 'Preview On', 'quotes-dlx' ),
			isActive: preview,
			onClick: () => {
				setAttributes( { preview: true } );
			},
		},
		{
			title: __( 'Preview Off', 'quotes-dlx' ),
			isActive: ! preview,
			onClick: () => {
				setAttributes( { preview: false } );
			},
		},
	];

	// Start theme hooks. Find a way through PHP perhaps?
	const toolbarThemeHook = createHooks();
	toolbarThemes = toolbarThemeHook.applyFilters(
		'has_ctt_react_themes',
		toolbarThemes
	); // Allow others to add themes via React.

	const blockToolbar = (
		<BlockControls>
			<>
				<ToolbarGroup
					icon={ <PaintbrushIcon width={ 24 } height={ 24 } fill="#000000" /> }
					label={ __( 'Select a Theme', 'quotes-dlx' ) }
					isCollapsed={ true }
					popoverProps={ { className: `quotes-dlx-popover ${ template }` } }
					controls={ [ toolbarThemes ] }
				/>
				<ToolbarGroup
					icon={
						<PreviewIcon
							width={ 25 }
							height={ 25 }
							opacity={ preview ? 0.8 : 0.4 }
							fill="#000000"
						/>
					}
					label={ __( 'Preview Mode', 'quotes-dlx' ) }
					isCollapsed={ true }
					popoverProps={ {
						className: `quotes-dlx-preview-popover ${ template }`,
					} }
					controls={ [ toolbarPreview ] }
				/>
			</>
		</BlockControls>
	);

	const previewBlockInspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Preview Mode Active', 'quotes-dlx' ) }
			>
				<Button
					variant="link"
					onClick={ ( e ) => {
						setAttributes( { preview: false } );
					} }
				>
					{ __( 'Turn Preview Mode Off', 'quotes-dlx' ) }
				</Button>
			</PanelBody>
		</>
	);

	const htmlToReactParser = new HtmlToReactParser();
	const previewBlock = (
		<>
			{ ! blockOnly && blockToolbar }
			<InspectorControls>{ previewBlockInspectorControls }</InspectorControls>
			<div
				className={ classnames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ template }` ]: true,
					'quotes-dlx-context-menu-disabled': ! enable_contextual_menu,
					'quotes-dlx-has-no-tweet-button': ! tweet_button_enabled,
				} ) }
				id={ uniqueId }
			>
				<div className="quotes-dlx-wrapper">
					<div className="quotes-dlx-content-wrapper">
						<figure>
							<blockquote className="quotes-dlx-text-wrapper">
								<div className="quotes-dlx-text">
									{ htmlToReactParser.parse(
										toHTMLString( {
										// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
											value: create( {
												html: share_text,
												preserveWhiteSpace: true,
											} ),
											multilineTag: 'p',
										} )
									) }
								</div>
							</blockquote>
							{ enable_citation && (
								<figcaption className={ classnames( `quotes-dlx-citation-wrapper quotes-dlx-citation-align-${ citation_alignment }` ) }>
									{ enable_citation_image && (
										<div className={ classnames( 'quotes-dlx-citation-image-wrapper', {
											'has-image': citation_image_id,
											'is-round': 'round' === citation_image_appearance,
											'has-border': citation_image_has_border,
										} ) }>
											{ ( citation_image_id && citation_image_url ) && (
												<img
													src={ citation_image_url }
													alt={ __( 'Citation Image', 'quotes-dlx' ) }
													width="75"
													height="75"
												/>
											) }
											{ ( ! citation_image_id || ! citation_image_url ) && (
												<UserIcon
													fill="#333"
													width="75" height="75"
												/>
											) }
										</div>
									) }
									<div className="quotes-dlx-citation-text-wrapper">
										{ enable_citation_author && (
											<div className="quotes-dlx-citation-author">
												{ htmlToReactParser.parse( citation_author ) }
											</div>
										) }
										{ enable_citation_title && (
											<div className="quotes-dlx-citation-title">
												{ htmlToReactParser.parse( citation_title ) }
											</div>
										) }
										{
											enable_citation_source && (
												<div className="quotes-dlx-citation-source">
													{ htmlToReactParser.parse( citation_source ) }
												</div>
											)
										}
									</div>
								</figcaption>
							) }
						</figure>
						{ getClickToShareButton() }
					</div>
					{ enable_contextual_menu &&
						! blockOnly &&
						( enable_copy_text ||
							enable_copy_tweet ||
							enable_copy_link ||
							enable_tweet_this ||
							enable_share_this ||
							enable_email_text ) && (
						// eslint-disable-next-line react/jsx-indent
						<>
							{ isContextualMenuGlobal() && (
								<MeatballMenu id={ uniqueId } { ...tweet_quotes_block_vars.contextual_menu_options } />
							) }
							{ ! isContextualMenuGlobal() && (
								<MeatballMenu id={ uniqueId } { ...attributes } />
							) }
						</>
					) }
				</div>
			</div>
		</>
	);

	const block = (
		<>
			<InspectorControls>{ inspectorControls }</InspectorControls>
			{ blockToolbar }
			<div
				className={ classnames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ template }` ]: true,
					'quotes-dlx-context-menu-disabled': ! enable_contextual_menu,
					'quotes-dlx-has-no-tweet-button': ! tweet_button_enabled,
				} ) }
				id={ uniqueId }
			>
				<div className="quotes-dlx-tabs">
					<TabPanel
						activeClass="active-tab"
						onSelect={ ( currentTab ) => {
							setSelectedTab( currentTab );
						} }
						tabs={ [
							{
								title: __( 'Appearance', 'quotes-dlx' ),
								name: 'appearance',
								className: 'quotes-dlx-tab-appearance',
							},
							{
								title: __( 'X Settings', 'quotes-dlx' ),
								name: 'settings',
								className: 'quotes-dlx-tab-settings',
							},
							{
								title: __( 'Link Settings', 'quotes-dlx' ),
								name: 'link',
								className: 'quotes-dlx-tab-link',
							},
						] }
					>
						{ ( tab ) => {
							let tabContent;
							if ( 'appearance' === tab.name ) {
								tabContent = (
									<>
										<div className="quotes-dlx-wrapper">
											<div className="quotes-dlx-content-wrapper">
												<>
													<figure>
														{
															( show_rating && rating_position === 'above_quote' ) && (
																getRating()
															)
														}
														<RichText
															tagName="blockquote"
															placeholder={ __( 'Add text to share', 'quotes-dlx' ) }
															value={ share_text }
															preserveWhiteSpace={ true }
															className="quotes-dlx-text quotes-dlx-text-wrapper"
															allowedFormats={ [
																'core/bold',
																'core/italic',
																'core/text-color',
																'core/subscript',
																'core/superscript',
																'core/strikethrough',
																'core/link',
															] }
															onChange={ ( value ) => {
																setAttributes( { share_text: value } );
															} }
															ref={ shareTextInput }
														/>
														{
															( show_rating && rating_position === 'below_quote' ) && (
																getRating()
															)
														}
														{ getCitation() }
														{
															( show_rating && rating_position === 'below_citation' ) && (
																getRating()
															)
														}
													</figure>
													{ getClickToShareButton() }
													{ enable_contextual_menu &&
														( enable_copy_text ||
															enable_copy_tweet ||
															enable_copy_link ||
															enable_tweet_this ||
															enable_email_text ||
															enable_share_this ) && (
														// eslint-disable-next-line react/jsx-indent
														<>
															{ isContextualMenuGlobal() && (
																<MeatballMenu id={ uniqueId } { ...tweet_quotes_block_vars.contextual_menu_options } />
															) }
															{ ! isContextualMenuGlobal() && (
																<MeatballMenu id={ uniqueId } { ...attributes } />
															) }
														</>
													) }
												</>
											</div>
										</div>
									</>
								);
							} else if ( 'settings' === tab.name ) {
								tabContent = (
									<>
										<ToggleControl
											label={ __( 'Customize X Content', 'quotes-dlx' ) }
											checked={ share_text_override_enabled }
											onChange={ ( value ) => {
												setAttributes( {
													share_text_override_enabled: value,
												} );
											} }
											help={ __(
												'If your quote is too large for X, you can create custom post content here.',
												'quotes-dlx'
											) }
										/>
										{ share_text_override_enabled && (
											<TextareaControl
												label={ __( 'Custom X Content', 'quotes-dlx' ) }
												help={ __(
													'Enter your custom X content here if your quote is too long for posting.'
												) }
												value={ share_text_override }
												onChange={ ( value ) => {
													setAttributes( {
														share_text_override: value,
													} );
												} }
											/>
										) }
										<FormTokenField
											value={ hashtags }
											placeholder={ __(
												'hashtag1, hashtag2, hashtah 3.',
												'quotes-dlx'
											) }
											className="quotes-dlx-hashtag-fields"
											tokenizeOnSpace={ true }
											tokenizeOnBlur={ true }
											label={ __( 'Hashtags', 'quotes-dlx' ) }
											onChange={ ( tokens ) => {
												const filteredTokens = [];
												tokens.forEach( function( item, index ) {
													const replacement = item.replace( '#', '' ); // Strip hashtag symbol.
													const hashtag = twttr.txt.extractHashtags(
														'#' + replacement
													); // Add it back in for extraction.
													// Check if array contains anything.
													if ( typeof hashtag[ 0 ] !== 'undefined' ) {
														filteredTokens.push( hashtag[ 0 ] );
													}
												} );
												setAttributes( { hashtags: filteredTokens } );
											} }
										/>
										<TextControl
											label={ __( 'X Credit (via)', 'quotes-dlx' ) }
											help={ __(
												'Enter the X username you would like to credit. Leave empty for no credit.'
											) }
											value={ twitter_username }
											onChange={ ( value ) => {
												const replacement = value.replace( '@', '' ); // Strip @ symbol.
												if ( value.length > 0 ) {
													const usernames =
														twttr.txt.extractMentions( replacement );
													if ( typeof usernames[ 0 ] !== 'undefined' ) {
														setAttributes( {
															twitter_username: usernames[ 0 ].replace( '@', '' ),
														} );
														return;
													}
												}
												setAttributes( {
													twitter_username: replacement,
												} );
											} }
										/>
									</>
								);
							} else if ( 'link' === tab.name ) {
								tabContent = (
									<>
										<ToggleControl
											label={ __( 'Enable Link in X Post', 'quotes-dlx' ) }
											checked={ enable_links_in_tweet }
											onChange={ ( value ) => {
												setAttributes( {
													enable_links_in_tweet: value,
												} );
											} }
											help={ __(
												'Disabling this will strip the link from the Post.',
												'quotes-dlx'
											) }
										/>
										{ enable_links_in_tweet && (
											<>
												<ToggleControl
													label={ __( 'Enable Anchor', 'quotes-dlx' ) }
													checked={ has_anchor }
													onChange={ ( value ) => {
														setAttributes( {
															has_anchor: value,
														} );
													} }
													help={ __(
														'Enable anchors so users can link directly to the quote.',
														'quotes-dlx'
													) }
												/>
												{ has_anchor && (
													<TextControl
														label={ __( 'Anchor (ID)', 'quotes-dlx' ) }
														help={ __(
															'Enter a unique anchor for the post container so that you can directly link to it. Do not use the hashtag (#) symbol.'
														) }
														value={ anchor }
														onChange={ ( value ) => {
															setAttributes( {
																anchor: value,
															} );
														} }
													/>
												) }
												<ToggleControl
													label={ __( 'Enable URL Shortening', 'quotes-dlx' ) }
													checked={ url_shortener }
													onChange={ ( value ) => {
														setAttributes( {
															url_shortener: value,
														} );
													} }
													help={ __(
														'Enable the URL shortener for your posts.',
														'quotes-dlx'
													) }
												/>
												{ url_shortener && (
													<>
														<RadioControl
															label={ __( 'Shortlink Service', 'quotes-dlx' ) }
															selected={ url_shortening_service }
															options={ [
																{
																	label: __( 'Bitly', 'quotes-dlx' ),
																	value: 'bitly',
																},
																{
																	label: __( 'Jetpack', 'quotes-dlx' ),
																	value: 'jetpack',
																},
																{
																	label: __( 'Manual', 'quotes-dlx' ),
																	value: 'manual',
																},
															] }
															onChange={ ( value ) => {
																setAttributes( {
																	url_shortening_service: value,
																} );
																setUrlShortener( value );
															} }
														/>
														{ url_shortening_service === 'bitly' &&
															! tweet_quotes_block_vars.bitly_plugin_short_url && (
															<Notice
																className="quotes-dlx-notice quotes-dlx-notice-warning"
																status="warning"
																politeness="assertive"
																isDismissible={ false }
															>
																<div className="quotes-dlx-notice-icon">
																	<CircularExclamationIcon
																		width={ 36 }
																		height={ 36 }
																		className="quotes-dlx-icon"
																		var="--quotes-dlx--preset--notice-warning-icon-color"
																	/>
																</div>
																<h2>
																	{ __(
																		'The Bitly short URL cannot be found.',
																		'quotes-dlx'
																	) }
																</h2>
																<p>
																	{ __(
																		'You may need to regenerate a Bitly short URL for this post or reauthorize the Bitly plugin.',
																		'quotes-dlx'
																	) }
																</p>
															</Notice>
														) }
														{ url_shortening_service === 'bitly' &&
															! tweet_quotes_block_vars.bitly_plugin_active && (
															<Notice
																className="quotes-dlx-notice quotes-dlx-notice-warning"
																status="warning"
																politeness="assertive"
																isDismissible={ false }
															>
																<div className="quotes-dlx-notice-icon">
																	<CircularExclamationIcon
																		width={ 36 }
																		height={ 36 }
																		className="quotes-dlx-icon"
																		var="--quotes-dlx--preset--notice-warning-icon-color"
																	/>
																</div>
																<h2>
																	{ __(
																		'The official Bitly plugin is not installed.',
																		'quotes-dlx'
																	) }
																</h2>
																<p>
																	{ __(
																		'Please install and activate the Bitly WordPress Plugin and revisit this section. Alternatively, you can paste your URL in using the Manual option.',
																		'quotes-dlx'
																	) }
																</p>
																<div className="quotes-dlx-notice-button">
																	<Button
																		variant="link"
																		href="https://wordpress.org/plugins/wp-bitly/"
																		target="_blank"
																		icon={
																			<NewWindowIcon width={ 12 } height={ 12 } />
																		}
																		iconPosition="right"
																	>
																		{ __(
																			'Visit the Bitly plugin on WordPress.org',
																			'quotes-dlx'
																		) }
																	</Button>
																</div>
															</Notice>
														) }
														{ url_shortening_service === 'jetpack' &&
															! tweet_quotes_block_vars.jetpack_plugin_short_url && (
															<Notice
																className="quotes-dlx-notice quotes-dlx-notice-warning"
																status="warning"
																politeness="assertive"
																isDismissible={ false }
															>
																<div className="quotes-dlx-notice-icon">
																	<CircularExclamationIcon
																		width={ 36 }
																		height={ 36 }
																		className="quotes-dlx-icon"
																		var="--quotes-dlx--preset--notice-warning-icon-color"
																	/>
																</div>
																<h2>
																	{ __(
																		'A shortlink from Jetpack could not be found',
																		'quotes-dlx'
																	) }
																</h2>
																<p>
																	{ __(
																		'Please ensure that Jetpack is installed and that shortlinks are enabled.',
																		'quotes-dlx'
																	) }
																</p>
																<div className="quotes-dlx-notice-button">
																	<Button
																		variant="link"
																		href="https://jetpack.com/support/wp-me-shortlinks/"
																		target="_blank"
																		icon={
																			<NewWindowIcon width={ 12 } height={ 12 } />
																		}
																		iconPosition="right"
																	>
																		{ __(
																			'Visit the Jetpack Shortlink Documentation',
																			'quotes-dlx'
																		) }
																	</Button>
																</div>
															</Notice>
														) }

														{ url_shortening_service === 'jetpack' &&
															! tweet_quotes_block_vars.jetpack_plugin_active && (
															<Notice
																className="quotes-dlx-notice quotes-dlx-notice-warning"
																status="warning"
																politeness="assertive"
																isDismissible={ false }
															>
																<div className="quotes-dlx-notice-icon">
																	<CircularExclamationIcon
																		width={ 36 }
																		height={ 36 }
																		className="quotes-dlx-icon"
																		var="--quotes-dlx--preset--notice-warning-icon-color"
																	/>
																</div>
																<h2>
																	{ __(
																		'The official Jetpack plugin is not installed.',
																		'quotes-dlx'
																	) }
																</h2>
																<p>
																	{ __(
																		'Please install and activate the Jetpack WordPress Plugin, enable shortlinks, and revisit this section. Alternatively, you can paste your URL in using the Manual option.',
																		'quotes-dlx'
																	) }
																</p>
																<div className="quotes-dlx-notice-button">
																	<Button
																		variant="link"
																		href="https://wordpress.org/plugins/jetpack/"
																		target="_blank"
																		icon={
																			<NewWindowIcon width={ 12 } height={ 12 } />
																		}
																		iconPosition="right"
																	>
																		{ __(
																			'Visit the Jetpack plugin on WordPress.org',
																			'quotes-dlx'
																		) }
																	</Button>
																</div>
															</Notice>
														) }
													</>
												) }
												<TextControl
													label={ __( 'Page URL', 'quotes-dlx' ) }
													help={ __(
														'This displays the permanent URL to this block.'
													) }
													placeholder={ manual_permalink }
													value={ manual_permalink ?? '' }
													onChange={ ( value ) => {
														setAttributes( {
															manual_permalink: value,
															permalink: value,
														} );
													} }
													disabled={
														url_shortening_service !== 'manual'
															? 'disabled'
															: ''
													}
													ref={ manualUrlInput }
												/>
											</>
										) }
									</>
								);
							}
							return (
								<>
									{ getCharacterBar() }
									{ tabContent }
								</>
							);
						} }
					</TabPanel>
				</div>
			</div>
		</>
	);

	const blockProps = useBlockProps( {
		className: classnames( `quotes-dlx template-${ template }`, {
			'quotes-dlx-has-citation': enable_citation,
			'quotes-dlx-has-rating': show_rating,
			'quotes-dlx-has-rating-top': show_rating && rating_position === 'above_quote',
			'quotes-dlx-has-rating-bottom': show_rating && rating_position === 'below_quote',
			'quotes-dlx-has-rating-below-citation': show_rating && rating_position === 'below_citation',
			'quotes-dlx-has-rating-left': rating_alignment === 'left',
			'quotes-dlx-has-rating-right': rating_alignment === 'right',
			'quotes-dlx-has-rating-center': rating_alignment === 'center',
		} ),
	} );

	let stylesheet = false;
	themes.forEach( ( themeObject ) => {
		if ( themeObject.slug === template ) {
			stylesheet = themeObject.stylesheet;
		}
	} );

	/**
	 * Retrieve the font stylesheet from localized vars.
	 *
	 * @return {string} The font stylesheet.
	 */
	const getFontStylesheets = () => {
		const stylesheets = tweet_quotes_block_vars.themes_stylesheets[ template ];
		if ( undefined === stylesheets ) {
			return null;
		}
		return (
			<>
				<link rel="stylesheet" href={ stylesheets.primary_font_stylesheet } />
				<link rel="stylesheet" href={ stylesheets.secondary_font_stylesheet } />
			</>
		);
	};
	if ( preview ) {
		return (
			<>
				{ stylesheet && <link rel="stylesheet" href={ stylesheet } /> }
				{ getFontStylesheets() }
				<div { ...blockProps } style={ maxWidthStyle }>{ previewBlock }</div>;
			</>
		);
		// eslint-disable-next-line no-else-return
	} else {
		return (
			<>
				{ stylesheet && <link rel="stylesheet" href={ stylesheet } /> }
				{ getFontStylesheets() }
				<div { ...blockProps } style={ maxWidthStyle }>{ block }</div>
			</>
		);
	}
};

export default TweetQuotes;
