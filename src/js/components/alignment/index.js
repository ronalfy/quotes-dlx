/**
 * Alignment Group (Left|Center|Right) with a label and button icons.
 *
 * Pass onClick prop to propagate up to parent. Values are (left|center|right).
 */
import PropTypes from 'prop-types';

import { __, _x } from '@wordpress/i18n';

import { Button, ButtonGroup } from '@wordpress/components';

import './editor.scss';

const AlignmentGroup = ( props ) => {
	const {
		alignment,
		label,
		alignLeftLabel,
		alignCenterLabel,
		alignRightLabel,
		leftOn,
		centerOn,
		rightOn,
	} = props;

	return (
		<div className="quotes-dlx-alignment-component-base">
			<span className="quotes-dlx-alignment-component-label">{ label }</span>
			<ButtonGroup>
				<>
					{ leftOn &&
					<Button
						isPressed={ 'left' === alignment ? true : false }
						isSecondary
						icon="editor-alignleft"
						label={ alignLeftLabel }
						onClick={ () => {
							props.onClick( 'left' );
						} }
					/>
					}
					{ centerOn &&
					<Button
						isPressed={ 'center' === alignment ? true : false }
						isSecondary
						icon="editor-aligncenter"
						label={ alignCenterLabel }
						onClick={ () => {
							props.onClick( 'center' );
						} }
					/>
					}
					{ rightOn &&
					<Button
						isPressed={ 'right' === alignment ? true : false }
						isSecondary
						icon="editor-alignright"
						label={ alignRightLabel }
						onClick={ () => {
							props.onClick( 'right' );
						} }
					/>
					}

				</>

			</ButtonGroup>
		</div>
	);
};

AlignmentGroup.defaultProps = {
	alignment: 'left',
	label: __( 'Change Alignment', 'quotes-dlx' ),
	alignLeftLabel: _x(
		'Align Left',
		'Align items left',
		'quotes-dlx'
	),
	alignCenterLabel: _x(
		'Align Center',
		'Align items center/middle',
		'quotes-dlx'
	),
	alignRightLabel: _x(
		'Align Right',
		'Align items right',
		'quotes-dlx'
	),
	leftOn: true,
	centerOn: true,
	rightOn: true,
};

AlignmentGroup.propTypes = {
	alignment: PropTypes.string,
	label: PropTypes.string,
	alignLeftLabel: PropTypes.string,
	alignCenterLabel: PropTypes.string,
	alignRightLabel: PropTypes.string,
	leftOn: PropTypes.bool,
	centerOn: PropTypes.bool,
	rightOn: PropTypes.bool,
};

export default AlignmentGroup;
