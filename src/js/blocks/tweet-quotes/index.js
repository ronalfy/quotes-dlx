import { registerBlockType, createBlock } from '@wordpress/blocks';
import metadata from '../../../../php/blocks/tweet-quotes/block.json';
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
				blocks: [ 'core/pullquote' ],
				transform: ( { value } ) => {
					return createBlock( 'mediaron/quotes-dlx', {
						share_text: value,
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
		],
	},
} );

