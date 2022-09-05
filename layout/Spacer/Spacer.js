import PropTypes from 'prop-types';
import classNames from 'classnames';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

import './Spacer.css';

import { choices } from '../../tokens';

const getSize = (size) => choices.spacing[size];

const Spacer = ({ size, isVisible }) => (
	<div
		className={classNames('spacer', {
			'is-visible': isVisible,
		})}
		style={{
			display: 'inline-block',
			width: getSize(size),
			height: getSize(size),
		}}
	/>
);

Spacer.defaultProps = {
	isVisible: true,
};

Spacer.propTypes = {
	size: PropTypes.number.isRequired,
	isVisible: PropTypes.bool,
};

Spacer.Horizontal = Horizontal;
Spacer.Vertical = Vertical;

export default Spacer;
