import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { _n, sprintf } from '@wordpress/i18n';

const TabItem = ( props ) => {
	const location = useLocation();
	console.log( location );

	const getIcon = ( Icon ) => {
		return <Icon width={ 16 } height={ 16 } fill="#6c757d" />;
	};

	const { slug, label, description, icon, dirtyCount } = props;

	const classes = classNames( 'qdlx-admin__nav--item', {
		active: props.isActive( location.pathname, slug ),
	} );

	return (
		<a
			onClick={ ( e ) => props.tabClicked( slug ) }
			href={ `#/${ slug }` }
			className={ classes }
		>
			<div className="qdlx-admin__tabs--nav-icon">{ getIcon( icon ) }</div>
			<div className="qdlx-admin__tabs--nav-title">{ label }</div>
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
				>
					<span>{ dirtyCount }</span>
				</div>
			}
			<div className="qdlx-admin__tabs--nav-description">{ description }</div>
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
