import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { _n, sprintf } from '@wordpress/i18n';

const TabItem = ( props ) => {
	const location = useLocation();

	const getIcon = ( Icon ) => {
		return <Icon width={ 16 } height={ 16 } fill="#6c757d" />;
	};

	const { slug, label, description, icon, dirtyCount } = props;

	const classes = classNames( 'qdlx-admin__nav--item', {
		active: props.isActive( location.pathname, slug ),
	} );

	useEffect( () => {
		// Can also use qdlx-tab-content
		document.getElementById( 'qdlx-admin-container' ).scrollIntoView( {
			behavior: 'smooth',
		} );
	}, [ location ] );

	const tabId = 'dlx' + slug;

	return (
		<a
			onClick={ ( e ) => props.tabClicked( slug ) }
			href={ `#/${ slug }` }
			className={ classes }
		>
			<div className="qdlx-admin__tabs--nav-icon" aria-label={ label } data-caption={ label } aria-describedby={ tabId }>{ getIcon( icon ) }</div>
			<div className="qdlx-admin__tabs--nav-title" aria-hidden="true" >{ label }</div>
			{ dirtyCount > 0 &&
				<div
					className="qdlx-admin__tabs--save-count"
					data-caption={ sprintf(
						/* Translators: %d is the number of unsaved items */
						_n(
							'You have %d unsaved item.',
							'You have %d unsaved items',
							dirtyCount,
							'quotes-dlx'
						),
						dirtyCount
					) }
					aria-label={ sprintf(
						/* Translators: %d is the number of unsaved items */
						_n(
							'You have %d unsaved item.',
							'You have %d unsaved items',
							dirtyCount,
							'quotes-dlx'
						),
						dirtyCount
					) }
				>
					<span aria-hidden="true">{ dirtyCount }</span>
				</div>
			}
			<div id={ tabId } className="qdlx-admin__tabs--nav-description">{ description }</div>
		</a>
	);
};

TabItem.defaultProps = {
	icon: () => <></>,
	slug: '',
	label: '',
	isActive: () => <></>,
	dirtyCount: 0,
};

TabItem.propTypes = {
	icon: PropTypes.func,
	slug: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isActive: PropTypes.func.isRequired,
	dirtyCount: PropTypes.number,
};

export default TabItem;
