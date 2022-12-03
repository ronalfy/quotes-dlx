import React from 'react';
import PropTypes from 'prop-types'; // ES6

const ExportIcon = ( props ) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
			width={ props.width }
			height={ props.height }
		>
			<path
				fill={ props.fill }
				d="M32 0h224v160h160v128H224v48h192v176H32V0zm384 336v-48h110.1l-39-39-17-17 33.9-33.9 17 17 80 80 17 17-17 17-80 80-17 17-33.9-34.1 17-17 39-39H416zm0-208H288V0l128 128z"
			/>
		</svg>
	);
};
ExportIcon.defaultProps = {
	width: 16,
	height: 16,
	fill: '#333333',
};

ExportIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fill: PropTypes.string,
};

export default ExportIcon;
