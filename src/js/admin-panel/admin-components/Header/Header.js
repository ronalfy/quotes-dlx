import React, { useEffect, useState } from 'react';
import { Button } from '@wordpress/components';
import NewWindow from '../../../components/icons/NewWindow';

import { __ } from '@wordpress/i18n';
import Logo from '../Logo/Logo';

const Header = () => {
	return (
		<header className="header">
			<div className="qdlx-admin-container__wrap">
				<div className="header__logo-wrap">
					<>
						<Logo id="svg--logo" />
					</>
				</div>
				<div className="header__btn-wrap">
					<Button
						className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-right"
						href={ quotes_dlx_admin.plugin_docs_url }
						text={ __( 'Documentation', 'quotes-dlx' ) }
						icon={ <NewWindow fill={ 'var( --quotes-dlx-admin--color-button-text-color)' } /> }
						iconSize={ 36 }
						iconPosition="right"
						style={ { marginRight: '15px' } }
						target="_blank"
					/>
					<Button
						className="qdlx__btn qdlx__btn-primary qdlx__btn--icon-right"
						href={ quotes_dlx_admin.plugin_support_url }
						text={ __( 'Support', 'quotes-dlx' ) }
						icon={ <NewWindow fill={ 'var( --quotes-dlx-admin--color-button-text-color)' } /> }
						iconSize={ 36 }
						iconPosition="right"
						target="_blank"
					/>
				</div>
			</div>
		</header>

	);
};

export default Header;
