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

import { useEffect, useState, createRef, useRef } from '@wordpress/element';

import { useSelect } from '@wordpress/data';

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
} from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	BlockControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

const HtmlToReactParser = require( 'html-to-react' ).Parser;

const TweetQuotes = ( props ) => {
	const manualUrlInput = createRef( null );
	const shareTextInput = createRef( null );
	const maximumWidthInput = createRef( null );
	const innerBlocksRef = useRef( null );

	// State.
	const [ tweetCharacterTotal, setTweetCharacterTotal ] = useState( 0 );
	const [ tweetHashtagCharLength, setTweetHashtagCharLength ] = useState( 0 );
	const [ tweetContentCharLength, setTweetContentCharLength ] = useState( 0 );
	const [ tweetUsernameCharLength, setTweetUsernameCharLength ] = useState( 0 );
	const [ tweetPermalinkCharLength, setTweetPermalinkCharLength ] = useState( 0 );
	const [ selectedTab, setSelectedTab ] = useState( 'appearance' );
	const [ urlShortener, setUrlShortener ] = useState( 'default' );
	const [ themeColors, setThemeColors ] = useState( [] );
	const [ selectedTheme, setSelectedTheme ] = useState( '' );

	// Set up Inner Blocks.
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'has-click-to-share-text has-click-to-share__share-text',
			ref: innerBlocksRef,
		},
		{
			allowedBlocks: [ 'core/paragraph' ],
			template: [ [ 'core/paragraph', { placeholder: '' } ] ],
		}
	);

	// Shortcuts.
	const { attributes, setAttributes, isSelected } = props;

	const generatedUniqueId = useInstanceId(
		TweetQuotes,
		attributes.anchor_prefix
	);

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
		manualPermalink,
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
		enable_custom_theme_colors,
		theme_colors,
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
		const manualLink = '' === manualPermalink ? postObject.link : permalink;

		switch ( url_shortening_service ) {
			case 'none':
				setAttributes( {
					permalink: manualPermalink,
					manualPermalink: postObject.link,
				} );
				break;
			case 'bitly':
				setAttributes( {
					manualPermalink: tweet_quotes_block_vars.bitly_plugin_short_url,
				} );
				break;
			case 'jetpack':
				setAttributes( {
					manualPermalink: tweet_quotes_block_vars.jetpack_plugin_short_url,
				} );
				break;
			case 'manual':
				setAttributes( { manualPermalink: link } );
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

	const getColors = () => {
		const currentThemes = tweet_quotes_block_vars.themes;
		// Check if theme slug exists in themes object.
		if ( currentThemes.hasOwnProperty( template ) ) {
			const themeDefaultColors = themes[ template ].colors;
			const savedThemeColors = themes[ template ].saved_colors;

			// Merge saved theme colors with defaults if it exists.
			const mergedColors = {};
			if ( themeDefaultColors ) {
				Object.values( themeDefaultColors ).forEach(
					( colorObject, index ) => {
						mergedColors[ colorObject.slug ] = {
							name: colorObject.name,
							slug: colorObject.slug,
							color: colorObject.color,
						};
					}
				);
			}
			if ( savedThemeColors ) {
				Object.values( savedThemeColors ).forEach(
					( colorObject, index ) => {
						mergedColors[ colorObject.slug ] = {
							name: colorObject.name,
							slug: colorObject.slug,
							color: colorObject.color,
						};
					}
				);
			}
			if ( theme_colors ) {
				Object.values( theme_colors ).forEach(
					( colorObject, index ) => {
						mergedColors[ colorObject.slug ] = {
							name: colorObject.name,
							slug: colorObject.slug,
							color: colorObject.color,
						};
					}
				);
			}

			// Loop through merged colors and output color picker component.
			return Object.values( mergedColors ).map(
				( colorObject, index ) => {
					return (
						<ColorPicker
							defaultColor={ colorObject.color }
							defaultColors={ themeDefaultColors }
							value={ colorObject.color }
							label={ colorObject.name }
							slug={ colorObject.slug }
							onChange={ ( valueSlug, valueColorHex ) => {
								const newThemeColors = { ...theme_colors };
								newThemeColors[ colorObject.slug ] = {
									name: colorObject.name,
									slug: colorObject.slug,
									color: valueColorHex,
								};
								setAttributes( {
									theme_colors: newThemeColors,
								} );
								setThemeColors( newThemeColors );
							} }
							key={ index }
						/>
					);
				}
			);
		}
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
								label={ __( 'Enable Copy Tweet', 'quotes-dlx' ) }
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
								label={ __( 'Enable Email Quote (Experimental)', 'quotes-dlx' ) }
								checked={ enable_email_text }
								onChange={ ( value ) => {
									setAttributes( {
										enable_email_text: value,
									} );
								} }
								help={ __( '(Experimental) Enable email sharing of the quote.', 'quotes-dlx' ) }
								disabled={ isContextualMenuGlobal() }
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
			<PanelBody
				initialOpen={ false }
				title={ __( 'Theme Colors', 'quotes-dlx' ) }
			>
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Custom Theme Colors', 'quotes-dlx' ) }
						checked={ enable_custom_theme_colors }
						onChange={ ( value ) => {
							setAttributes( {
								enable_custom_theme_colors: value,
							} );
						} }
						help={ __( 'Enable custom theme colors.', 'quotes-dlx' ) }
					/>
				</PanelRow>
				{ getColors() }
			</PanelBody>
		</>
	);

	// Load themes and display them in a dropdown menu.
	// There's a side-effect here if a theme is deleted. Need to use useEffect to
	// set default theme. This causes more issues, so solution is to set default on PHP side (front-end).
	let toolbarThemes = [];
	Object.values( themes ).forEach( ( theme ) => {
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
					theme_colors: {},
				} );
				setSelectedTheme( theme.slug );
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
				id={ uniqueId + 'block' }
				className={ classnames( 'quotes-dlx', {
					[ `quotes-dlx-block-theme-${ template }` ]: true,
					'quotes-dlx-context-menu-disabled': ! enable_contextual_menu,
					'quotes-dlx-has-no-tweet-button': ! tweet_button_enabled,
				} ) }
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
											<div className="quotes-dlx-content-wrapper">
												<>
													<figure>
														<div { ...innerBlockProps } />
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
											label={ __( 'Customize Twitter Content', 'quotes-dlx' ) }
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
													label={ __( 'Enable URL Shortening', 'quotes-dlx' ) }
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

	let stylesheet = false;
	Object.values( themes ).forEach( ( themeObject ) => {
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
		if ( undefined === stylesheets || ! enable_custom_theme_colors ) {
			return null;
		}
		let cssVars = '';
		Object.values( theme_colors ).forEach( ( colorData, slug ) => {
			cssVars += `
				--qdlx-${ template }-${ colorData.slug }: ${ colorData.color };
			`;
		} );
		return (
			<>
				<link rel="stylesheet" href={ stylesheets.primary_font_stylesheet } />
				<link rel="stylesheet" href={ stylesheets.secondary_font_stylesheet } />
				
		<style>
			{ `
				#${ uniqueId }block { ${ cssVars } }`
			}
		</style>
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
