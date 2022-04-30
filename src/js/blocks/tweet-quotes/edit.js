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
import PaintbrushIcon from '../../components/icons/paintbrush';
import PreviewIcon from '../../components/icons/Preview';
import NewWindowIcon from '../../components/icons/NewWindow';
import CircularExclamationIcon from '../../components/icons/CircularExplanation';
import AlignmentGroup from '../../components/alignment';
import CircularCount from '../../components/CircularCount';
import LineCount from '../../components/LineCount';
import MeatballMenu from '../../components/MeatballMenu';

import { useEffect, useState, createRef } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

import { createHooks } from '@wordpress/hooks';

import { __ } from '@wordpress/i18n';

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
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	BlockControls,
	useBlockProps,
} from '@wordpress/block-editor';

const HtmlToReactParser = require( 'html-to-react' ).Parser;

const manualUrlInput = createRef( null );
const shareTextInput = createRef( null );

const TweetQuotes = ( props ) => {
	// State.
	const [ tweetCharacterTotal, setTweetCharacterTotal ] = useState( 0 );
	const [ tweetHashtagCharLength, setTweetHashtagCharLength ] = useState( 0 );
	const [ tweetContentCharLength, setTweetContentCharLength ] = useState( 0 );
	const [ tweetUsernameCharLength, setTweetUsernameCharLength ] = useState( 0 );
	const [ tweetPermalinkCharLength, setTweetPermalinkCharLength ] = useState( 0 );
	const [ selectedTab, setSelectedTab ] = useState( 'appearance' );
	const [ urlShortener, setUrlShortener ] = useState( 'default' );

	// Shortcuts.
	const { attributes, setAttributes } = props;

	const generatedUniqueId = useInstanceId( TweetQuotes, attributes.anchor_prefix );

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
		maximum_width,
		maximum_width_unit,
		tweet_button_enabled,
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
		manualPermalink,
		enable_links_in_tweet,
		enable_contextual_menu,
		enable_copy_text,
		enable_copy_tweet,
		enable_copy_link,
		enable_tweet_this,
		preview,
		blockOnly,
		defaultsApplied,
		transforming,
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
		setAttributes( { uniqueId: generatedUniqueId, anchor: generatedUniqueId } );

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
					url_shortening_service: originalAtts.permalink ? 'manual' : defaults.url_shortening_service,
					transforming: false,
				} );
			}
		}
	}, [] );

	useEffect( () => {
		if ( selectedTab === 'appearance' && shareTextInput.current !== null ) {
			shareTextInput.current.focus();
		}
	}, [ shareTextInput.current ] );

	useEffect( () => {
		if ( manualUrlInput.current !== null && 'manual' === urlShortener ) {
			manualUrlInput.current.focus();
			manualUrlInput.current.select();
		}
	}, [ url_shortening_service ] );

	useEffect( () => {
		const link = permalink ?? postObject.link;
		const manualLink = manualPermalink ?? postObject.link;
		switch ( url_shortening_service ) {
			case 'none':
				setAttributes( { permalink: manualPermalink, manualPermalink: postObject.link } );
				break;
			case 'bitly':
				setAttributes( { manualPermalink: tweet_quotes_block_vars.bitly_plugin_short_url } );
				break;
			case 'jetpack':
				setAttributes( { manualPermalink: tweet_quotes_block_vars.jetpack_plugin_short_url } );
				break;
			case 'manual':
				setAttributes( { manualPermalink: link } );
		}
	}, [ postObject, url_shortening_service ] );

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
		if ( ! tweet_button_enabled ) {
			return ( <></> );
		}
		return (
			<div
				className={ `quotes-dlx-button-wrapper  ${ tweet_button_alignment } ` }
			>
				<button
					className={ `quotes-dlx-button ${ tweet_button_display } quotes-dlx-button-icon-${ tweet_icon_alignment }` }
					onClick={ ( value ) => { } }
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
								<TwitterIcon />
							</span>
						) }
					</>
				</button>
			</div>
		);
	};

	const inspectorControls = (
		<>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Characters', 'quotes-dlx' ) }
			>
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
						type={ 'number' }
						value={ maximum_width ? maximum_width : '' }
						onChange={ ( value ) => {
							setAttributes( {
								maximum_width: parseFloat( value ),
							} );
						} }
					/>
				</>
			</PanelBody>
			<PanelBody
				initialOpen={ true }
				title={ __( 'Click to Tweet Button', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Click to Tweet Button', 'quotes-dlx' ) }
						checked={ tweet_button_enabled }
						onChange={ ( value ) => {
							setAttributes( {
								tweet_button_enabled: value,
							} );
						} }
						help={ __( 'Show or hide the Click to Tweet button.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				<PanelRow>
					<TextControl
						label={ __( 'Button Text', 'quotes-dlx' ) }
						help={ __( 'Enter the Click to Tweet button text.' ) }
						value={ share_button_text }
						onChange={ ( value ) => {
							setAttributes( {
								share_button_text: value,
							} );
						} }
					/>
				</PanelRow>
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
			</PanelBody>
			<PanelBody
				initialOpen={ false }
				title={ __( 'Contextual Menu', 'quotes-dlx' ) }
			>
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
								help={ __( 'Not recommended for most cases. Format is rich text, which may confuse some users.', 'quotes-dlx' ) }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Copy Tweet', 'quotes-dlx' ) }
								checked={ enable_copy_tweet }
								onChange={ ( value ) => {
									setAttributes( {
										enable_copy_tweet: value,
									} );
								} }
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
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __( 'Enable Tweet This', 'quotes-dlx' ) }
								checked={ enable_tweet_this }
								onChange={ ( value ) => {
									setAttributes( {
										enable_tweet_this: value,
									} );
								} }
							/>
						</PanelRow>
					</>
				) }
			</PanelBody>
		</>
	);

	// Todo - Make this readable via JSON.
	let toolbarThemes = [];

	themes.forEach( ( theme ) => {
		toolbarThemes.push( {
			title: theme.name,
			isActive: template === theme.slug,
			icon: <IconCircle
				height={ 24 }
				width={ 24 }
				gradient={ theme.gradient }
				className={ template === theme.name ? 'has selected quotes-dlx' : 'quotes-dlx' }
			/>,
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
					icon={
						<PaintbrushIcon width={ 24 } height={ 24 } fill="#000000" />
					}
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
					{ __(
						'Turn Preview Mode Off',
						'quotes-dlx'
					) }
				</Button>
			</PanelBody>
		</>
	);

	const htmlToReactParser = new HtmlToReactParser();
	const previewBlock = (
		<>
			{ ! blockOnly &&
				blockToolbar
			}
			<InspectorControls>{ previewBlockInspectorControls }</InspectorControls>
			<div
				className={ classnames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ template }` ]: true,
					'quotes-dlx-context-menu-disabled': ! enable_contextual_menu,
					'quotes-dlx-has-no-tweet-button': ! tweet_button_enabled,
				} ) }
				style={ maxWidthStyle }
			>
				<div className="quotes-dlx-wrapper">
					<figure>
						<blockquote className="quotes-dlx-text-wrapper">
							<div className="quotes-dlx-text">{ htmlToReactParser.parse( share_text ) }</div>
						</blockquote>
					</figure>
					{ getClickToShareButton() }
					{ ( enable_contextual_menu ) && ( ! blockOnly ) &&
						( enable_copy_text ||
							enable_copy_tweet ||
							enable_copy_link ||
							enable_tweet_this ) && (
							<MeatballMenu id={ uniqueId } { ...attributes } />
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
				style={ maxWidthStyle }
			>
				<div className="quotes-dlx-tabs">
					<TabPanel
						activeClass="active-tab"
						tabs={ [
							{
								title: __( 'Appearance', 'quotes-dlx' ),
								name: 'appearance',
								className: 'quotes-dlx-tab-appearance',
							},
							{
								title: __( 'Tweet Settings', 'quotes-dlx' ),
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
											<>
												<figure>
													<RichText
														tagName="blockquote"
														placeholder={ __(
															'Add text to share',
															'quotes-dlx'
														) }
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
													/>
												</figure>
												{ getClickToShareButton() }
												{ enable_contextual_menu &&
													( enable_copy_text ||
														enable_copy_tweet ||
														enable_copy_link ||
														enable_tweet_this ) && (
													<MeatballMenu id={ uniqueId } { ...attributes } />
												) }
											</>
										</div>
									</>
								);
							} else if ( 'settings' === tab.name ) {
								tabContent = (
									<>
										<ToggleControl
											label={ __(
												'Customize Twitter Content',
												'quotes-dlx'
											) }
											checked={ share_text_override_enabled }
											onChange={ ( value ) => {
												setAttributes( {
													share_text_override_enabled: value,
												} );
											} }
											help={ __(
												'If your quote is too large for Twitter, you can create custom tweet content here.',
												'quotes-dlx'
											) }
										/>
										{ share_text_override_enabled && (
											<TextareaControl
												label={ __( 'Custom Tweet Content', 'quotes-dlx' ) }
												help={ __(
													'Enter your custom tweet content here if your quote is too long for Twitter'
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
												'Enter hashtags separated by commas.',
												'quotes-dlx'
											) }
											className="quotes-dlx-hashtag-fields"
											tokenizeOnSpace={ true }
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
											label={ __( 'Tweet Credit (via)', 'quotes-dlx' ) }
											help={ __(
												'Enter the Twitter username you would like to credit. Leave empty for no credit.'
											) }
											value={ twitter_username }
											onChange={ ( value ) => {
												const replacement = value.replace( '@', '' ); // Strip @ symbol.
												if ( value.length > 0 ) {
													const usernames = twttr.txt.extractMentions(
														'@' + replacement
													);
													if ( typeof usernames[ 0 ] !== 'undefined' ) {
														setAttributes( {
															twitter_username: '@' + usernames[ 0 ],
														} );
														return;
													}
												}
												setAttributes( {
													twitter_username: value,
												} );
											} }
										/>
									</>
								);
							} else if ( 'link' === tab.name ) {
								tabContent = (
									<>
										<ToggleControl
											label={ __( 'Enable Link in Tweet', 'quotes-dlx' ) }
											checked={ enable_links_in_tweet }
											onChange={ ( value ) => {
												setAttributes( {
													enable_links_in_tweet: value,
												} );
											} }
											help={ __(
												'Disabling this will strip the link from the Tweet.',
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
															'Enter a unique anchor for the tweet container so that you can directly link to it. Do not use the hashtag (#) symbol.'
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
													label={ __(
														'Enable URL Shortening',
														'quotes-dlx'
													) }
													checked={ url_shortener }
													onChange={ ( value ) => {
														setAttributes( {
															url_shortener: value,
														} );
													} }
													help={ __(
														'Enable the URL shortener for your tweets.',
														'quotes-dlx'
													) }
												/>
												{ url_shortener && (
													<>
														<RadioControl
															label={ __(
																'Shortlink Service',
																'quotes-dlx'
															) }
															selected={ url_shortening_service }
															options={ [
																{
																	label: __( 'None', 'quotes-dlx' ),
																	value: 'none',
																},
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
																console.log( value );
																console.log( url_shortening_service );
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
													placeholder={ manualPermalink }
													value={ manualPermalink ?? '' }
													onChange={ ( value ) => {
														setAttributes( {
															manualPermalink: value,
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
		className: `quotes-dlx template-${ template }`,
	} );

	if ( preview ) {
		return <div { ...blockProps }>{ previewBlock }</div>;
		// eslint-disable-next-line no-else-return
	} else {
		return <div { ...blockProps }>{ block }</div>;
	}
};

export default TweetQuotes;
