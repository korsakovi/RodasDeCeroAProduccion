import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Spacer.module.css';

import { getSize } from './helpers';

const Vertical = ({ size, maxHeight, isVisible }) => (
	<div
		className={classNames(styles.spacer, styles.vertical, {
			[styles['is-visible']]: isVisible,
		})}
		style={{
			maxHeight,
			width: getSize(size),
		}}
	/>
);

Vertical.defaultProps = {
	size: 'none',
	maxHeight: '100%',
};

Vertical.propTypes = {
	size: PropTypes.string,
	isVisible: PropTypes.bool,
	maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Vertical;
