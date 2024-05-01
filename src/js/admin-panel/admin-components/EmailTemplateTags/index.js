import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import { Button, Popover } from '@wordpress/components';
import TextInsertIcon from '../../../components/icons/TextInsert';

const TEMPLATE_TAGS = [
	{ name: __( 'Site Name', 'quotes-dlx' ), tag: '{{site_name}}' },
	{ name: __( 'Site URL', 'quotes-dlx' ), tag: '{{site_url}}' },
	{ name: __( 'Post title', 'quotes-dlx' ), tag: '{{post_title}}' },
	{ name: __( 'Post excerpt', 'quotes-dlx' ), tag: '{{post_excerpt}}' },
	{ name: __( 'Post URL', 'quotes-dlx' ), tag: '{{post_url}}' },
	{ name: __( 'Share Type', 'quotes-dlx' ), tag: '{{share_type}}' },
	{ name: __( 'Date', 'quotes-dlx' ), tag: '{{date}}' },
];

const EmailTemplateTags = ( props ) => {
	const { onSelect } = props;
	const [ isOpen, setIsOpen ] = useState( false );
	const [ tags ] = useState( TEMPLATE_TAGS.concat( props.additionalTags ) );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const togglePopover = () => setIsOpen( ! isOpen );

	return (
		<>
			<div className="qdlx-email-template-tags">
				<Button
					className="qdlx-icon"
					label={ __( 'Insert Email Template Tag', 'quotes-dlx' ) }
					icon={ TextInsertIcon }
					onClick={ togglePopover }
					ref={ setPopoverAnchor }
				/>
			</div>
			{ isOpen && (
				<Popover
					className="qdlx-email-template-tags__popover"
					placement="right-end"
					onClose={ togglePopover }
					anchor={ popoverAnchor }
					noArrow={ false }
				>
					<ul className="qdlx-email-template-tags__popover-tags">
						{ tags.map( ( tag ) => (
							<li key={ tag.tag }>
								<Button
									onClick={ () => {
										onSelect( tag.tag );
										togglePopover();
									} }
								>
									{ tag.name }
								</Button>
							</li>
						) ) }
					</ul>
				</Popover>
			) }
		</>
	);
};

EmailTemplateTags.propTypes = {
	onSelect: PropTypes.func.isRequired,
	additionalTags: PropTypes.array,
};

EmailTemplateTags.defaultProps = {
	onSelect: () => {},
	additionalTags: [],
};

export default EmailTemplateTags;
