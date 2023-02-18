import React from 'react';
import PropTypes from 'prop-types'; // ES6

const ContainerIcon = ( props ) => {
	return (
		<svg
			viewBox="0 0 30 30"
			xmlns="http://www.w3.org/2000/svg"
			width={ props.width }
			height={ props.height }
		>
			<path
				fill={ props.fill }
				d="M12.995 16h-8.97c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8.97c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm-1.5 7.64c0 .47-.38.86-.86.86h-4.25a.86.86 0 0 1-.86-.86v-4.28c0-.47.38-.86.86-.86h4.25c.48 0 .86.39.86.86zM25.975 16h-8.98c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8.98c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm-1.5 7.64c0 .47-.38.86-.86.86h-4.26a.86.86 0 0 1-.86-.86v-4.28c0-.47.38-.86.86-.86h4.26c.48 0 .86.39.86.86zM12.995 3h-8.97c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8.97c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1.5 7.64c0 .47-.38.86-.86.86h-4.25a.86.86 0 0 1-.86-.86V6.36c0-.47.38-.86.86-.86h4.25c.48 0 .86.39.86.86zM26.975 4v9c0 .55-.45 1-1 1h-8.98c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h8.98c.55 0 1 .45 1 1z"
			/>
		</svg>
	);
};
ContainerIcon.defaultProps = {
	width: 16,
	height: 16,
	fill: '#333333',
};

ContainerIcon.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fill: PropTypes.string,
};

export default ContainerIcon;
