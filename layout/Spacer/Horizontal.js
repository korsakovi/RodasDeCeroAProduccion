import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSize } from './helpers';

import styles from './Spacer.module.css';

const Horizontal = ({ size, isVisible }) => (
	<div
		className={classNames(styles.spacer, styles.horizontal, {
			[styles['is-visible']]: isVisible,
		})}
		style={{
			height: getSize(size),
		}}
	/>
);

Horizontal.propTypes = {
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isVisible: PropTypes.bool,
};

export default Horizontal;
