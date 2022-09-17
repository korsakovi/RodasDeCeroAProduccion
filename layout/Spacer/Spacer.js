import PropTypes from 'prop-types';
import classNames from 'classnames';
import Horizontal from './Horizontal';
import Vertical from './Vertical';

import styles from './Spacer.module.css';
import { getSize } from './helpers';

const Spacer = ({ size, isVisible }) => (
	<div
		className={classNames(styles.spacer, {
			[styles['is-visible']]: isVisible,
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
