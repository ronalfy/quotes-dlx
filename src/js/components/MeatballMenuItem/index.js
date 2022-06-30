import React from 'react';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

import './editor.scss';

const MeatballMenuItem = ( props ) => {

	const { Icon, text, onClick } = props;

	const [ menuOpen, setMenuOpen ] = useState( false );

	const getMenuItem = () => {
		return (
			<>
				<li className="quotes-dlx-meatball-menu-item">
					<button className="button-reset" onClick={ onClick }>
						{ Icon &&
							<span className="quotes-dlx-meatball-menu-icon">
								<Icon />
							</span>
						}
						{ text }
					</button>
				</li>
			</>
		);
	};
	return <>{ getMenuItem() }</>;
};

MeatballMenuItem.defaultProps = {
	text: '',
	Icon: '',
	onClick: null,
};

MeatballMenuItem.propTypes = {
	text: PropTypes.string,
};

export default MeatballMenuItem;
