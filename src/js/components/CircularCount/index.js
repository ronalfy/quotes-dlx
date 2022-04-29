// From: https://itnext.io/how-to-create-a-twitter-inspired-character-counter-with-an-svg-progress-ring-react-js-352f3c8eefbc

import PropTypes from 'prop-types'; // ES6

import { _n } from '@wordpress/i18n';

import './editor.scss';

const baseColor = '#99cc33';
const preWarningColor = '#4F8A10';
const warningColor = '#ffae42';
const preErrorColor = '#ff9966';
const errorColor = '#cc3300';

const maxChars = 280;

const CircularCount = ( props ) => {
	const { chars } = props;

	const r = 15;
	const circleLength = 2 * Math.PI * r;

	const status = ( circleLength * chars ) / 280;
	const colorDefault = circleLength - status > 0 ? circleLength - status : 0;

	/**
	 *
	 * @param { number } characters Number of characters.
	 * @return { string } hex code for error color.
	 */
	const getColor = ( characters ) => {
		if ( characters >= 280 ) {
			return errorColor;
		}
		if ( characters >= 260 ) {
			return preErrorColor;
		}
		if ( characters >= 220 ) {
			return warningColor;
		}
		if ( characters >= 180 ) {
			return preWarningColor;
		}
		return baseColor;
	};

	const getChars = () => {
		if ( chars > maxChars ) {
			return maxChars - chars;
		}
		return chars;
	};
	const getCharsLabel = () => {
		return (
			<>
				{ getChars() }{ ' ' }
				{ _n( 'Character', 'Characters', getChars(), 'highlight-and-share' ) }
			</>
		);
	};
	const ringStyle = {
		stroke: getColor( chars ),
		strokeDasharray: `${ status }  ${ colorDefault }`,
	};

	return (
		<div className="quotes-dlx-character-counter">
			<div className="quotes-dlx-circular-count">
				<svg>
					<circle className="default" cx="50%" cy="50%" r="15"></circle>
					<circle
						className="status"
						cx="50%"
						cy="50%"
						r="15"
						style={ ringStyle }
					></circle>
				</svg>
			</div>
			<div className="quotes-dlx-circular-characters">
				{ getCharsLabel() }
			</div>
		</div>
	);
};

CircularCount.defaultProps = {
	chars: 0,
};

CircularCount.propTypes = {
	chars: PropTypes.number,
};

export default CircularCount;
