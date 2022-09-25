import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.module.css';

const Button = ({ type, children, isBlock, onClick }) => (
	<button
		className={classNames(styles.button, {
			[styles[`type-${type}`]]: type,
			[styles['is-block']]: isBlock && type !== 'tertiary',
		})}
		onClick={onClick}
	>
		{children}
	</button>
);

const options = {
	types: ['primary', 'secondary', 'tertiary'],
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf(options.types),
	onClick: PropTypes.func,
	isBlock: PropTypes.bool,
};

Button.defaultProps = {
	isBlock: true,
	onClick: () => {},
};

export default Button;
