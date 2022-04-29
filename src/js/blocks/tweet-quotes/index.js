import { registerBlockType } from '@wordpress/blocks';
import metadata from '../../../../php/blocks/tweet-quotes/block.json';
import Edit from './edit';
import QuotesIcon from '../../components/icons/QuotesIcon';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <QuotesIcon fill="#9932cc" />,
} );