/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { rawHandler } from '@wordpress/blocks';

import { useContext, useEffect, useRef } from '@wordpress/element';

import { useDispatch, useSelect } from '@wordpress/data';

import { __ } from '@wordpress/i18n';

import {
	store,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import TextContentContext from '../context/index';

const Blockquote = ( props ) => {
	const { shareText, setShareText, oldShareText, setOldShareText } = useContext( TextContentContext );
	const shareTextInnerBlocksRef = useRef( null );
	const { replaceInnerBlocks } = useDispatch( store );
	const childBlocks = useSelect(
		( select ) => select( 'core/block-editor' ).getBlocks( props.clientId )
	);

	/**
	 * useEffect for porting over old share text.
	 */
	useEffect( () => {
		if ( oldShareText !== '' ) {
			const richTextConvertedToBlocks = rawHandler( { HTML: oldShareText } );
			replaceInnerBlocks( props.clientId, richTextConvertedToBlocks );
			setOldShareText( '' );
		}
	}, [ oldShareText ] );

	/**
	 * Convert inner blocks to string.
	 */
	useEffect( () => {
		if ( shareTextInnerBlocksRef.current ) {
			const innerBlocks = shareTextInnerBlocksRef.current.querySelectorAll( '.wp-block-paragraph' );
			let innerBlocksString = '';
			// Convert inner blocks to string in string format with new line characters.
			innerBlocks.forEach( ( block ) => {
				innerBlocksString += block.innerText + '';
			} );
			setShareText( innerBlocksString );
		}
	}, [ childBlocks, shareTextInnerBlocksRef ] );
	// Set up Inner Blocks.
	const innerBlockProps = useInnerBlocksProps(
		{
			className: 'quotes-dlx-share-blockquote-items',
			ref: shareTextInnerBlocksRef,
		},
		{
			allowedBlocks: [ 'core/paragraph' ],
			template: [ [ 'core/paragraph', { placeholder: '' } ] ],
		}
	);

	// Shortcuts.
	const { attributes } = props;

	const {
	} = attributes;

	const block = (
		<>
			<blockquote { ...innerBlockProps } />
		</>
	);

	const blockProps = useBlockProps( {
		className: `quotes-dlx-blockquote`,
	} );

	return (
		<>
			<div { ...blockProps }>{ block }</div>
		</>
	);
};

export default Blockquote;
