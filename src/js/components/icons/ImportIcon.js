import React from 'react';
import PropTypes from 'prop-types'; // ES6

const ImportIcon = ( props ) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={ props.width }
			height={ props.height }
		>
			<path
				fill={ props.fill }
				d="M128 0h224v160h160v352H128V336h174.1l-39 39-17 17 33.9 33.9 17-17 80-80 17-17-17-17-80-80-17-17-33.9 34.1 17 17 39 39H128V0zm0 288v48H0v-48h128zm384-160H384V0l128 128z"
			/>
		</svg>
	);
};
ImportIcon.defaultProps = {
	width: 16,
	height: 16,
	fill: '#333333',
};

ImportIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fill: PropTypes.string,
};

export default ImportIcon;
