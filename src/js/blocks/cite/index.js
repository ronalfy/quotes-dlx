import { registerBlockType, createBlock } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import metadata from './block.json';
import Edit from './edit';
import QuotesIcon from '../../components/icons/QuotesIcon';

registerBlockType( metadata, {
	edit: Edit,
	save() {
		return null;
	},
	icon: <QuotesIcon fill="#9932cc" />,
} );
