import { registerBlockType, createBlock } from '@wordpress/blocks';
import { create, toHTMLString } from '@wordpress/rich-text';
import metadata from './block.json';
import Edit from './edit';
import QuotesIcon from '../../components/icons/QuotesIcon';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <QuotesIcon fill="#9932cc" />,
	transforms: {
		from: [
			{
				type: 'block',
				blocks: [ 'bctt/clicktotweet' ],
				transform: ( { tweet, username, via, url, urlcustom, prompt } ) => {
					let twitterUsername = username;
					if ( ! via ) {
						twitterUsername = '';
					}

					const bcttAttributes = {
						share_text: tweet,
						share_button_text: prompt,
						twitter_username: twitterUsername,
						enable_links_in_tweet: url,
						has_anchor: url,
						transforming: true,
					};

					if ( url && '' !== urlcustom ) {
						bcttAttributes.permalink = urlcustom;
						bcttAttributes.url_shortening_service = 'manual';
					}
					return createBlock( 'mediaron/quotes-dlx', bcttAttributes );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/pullquote' ],
				transform: ( { value } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: value,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				isMultiBlock: true,
				// eslint-disable-next-line no-unused-vars
				transform: ( paragraphs, innerBlocks ) => {
					const content = paragraphs
						.map( ( attributes ) => {
							return attributes.content;
							// eslint-disable-next-line quotes
						} )
						.join( '\r\n\r\n' );
					// Trim spacing at end.
					content.replace( '/s+$/', '' );
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: content,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( { value, align } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: value,
						align,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/verse' ],
				transform: ( { content } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: content,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'has/click-to-share' ],
				transform: ( { shareText, clickText } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: shareText,
						share_button_text: clickText,
						transforming: true,
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'coblocks/click-to-tweet' ],
				transform: ( { buttonText, content, via } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: content,
						share_button_text: buttonText,
						twitter_username: via,
						transforming: true,
					} );
				},
			},
			{
				type: 'enter',
				regExp: /^quotesdlx$/,
				transform: () => createBlock( 'mediaron/quotes-dlx' ),
			},
		],
		to: [
			{
				type: 'block',
				blocks: [ 'core/paragraph' ],
				transform: ( { share_text } ) => {
					return createBlock( 'core/paragraph', {
						content: toHTMLString( {
							// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
							value: create( {
								html: share_text,
								preserveWhiteSpace: true,
							} ),
							multilineTag: 'p',
						} ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/quote' ],
				transform: ( { share_text } ) => {
					return createBlock( 'core/quote', {
						value: toHTMLString( {
							// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
							value: create( {
								html: share_text,
							} ),
							multilineTag: 'p',
						} ),
					} );
				},
			},
			{
				type: 'block',
				blocks: [ 'core/pullquote' ],
				transform: ( { share_text } ) => {
					return createBlock( 'core/pullquote', {
						value: toHTMLString( {
							// Stolen from: https://github.com/WordPress/gutenberg/pull/23562/files
							value: create( {
								html: share_text,
							} ),
							multilineTag: 'p',
						} ),
					} );
				},
			},
		],
	},
} );
