import React from 'react';

/**
 * Get a value placeholder based on hierarchy. If the value is not set, get the value from the parent.
 *
 * @param {Object} props      Values object.
 * @param {string} screenSize mobile|tablet|desktop.
 * @param {string} value      Current value.
 * @param {string} type       Type of value (top, right, bottom, left, etc.).
 *
 * @return {string} Value placeholder.
 */
export function geHierarchicalPlaceholderValue( props, screenSize, value, type ) {
	// Check mobile screen size.
	if ( 'mobile' === screenSize && '' === value ) {
		// Check tablet.
		if ( '' !== props.tablet[ type ] ) {
			return props.tablet[ type ];
		} else if ( '' !== props.desktop[ type ] ) {
			// Check desktop.
			return props.desktop[ type ];
		}
	}

	// Check tablet screen size.
	if ( 'tablet' === screenSize && '' === value ) {
		if ( '' !== props.desktop[ type ] ) {
			// Check desktop.
			return props.desktop[ type ];
		}
	}

	if ( '' !== value ) {
		return value;
	}

	if ( 'desktop' === screenSize ) {
		return props.desktop[ type ];
	}

	return '0';
}

/**
 * Get a value placeholder based on hierarchy. If the value is not set, get the value from the parent.
 *
 * @param {Object} props      Values object.
 * @param {string} screenSize mobile|tablet|desktop.
 * @param {string} value      Current value.
 *
 * @return {string} Value default or hierarchical value.
 */
export function getHierarchicalValueUnit( props, screenSize, value ) {
	// Check mobile screen size.
	if ( 'mobile' === screenSize && null === value ) {
		if ( null === props.tablet.unit ) {
			return props.desktop.unit;
		}
		return props.tablet.unit;
	}
	if ( 'tablet' === screenSize && null === value ) {
		return props.desktop.unit;
	}
	if ( null === value ) {
		return 'px';
	}
	return value;
}
