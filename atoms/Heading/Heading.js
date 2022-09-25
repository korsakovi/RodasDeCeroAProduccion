import PropTypes from 'prop-types';
import classNames from 'classnames';

import React from 'react';
import styles from './Heading.module.css';

const Heading = ({ children, color, size }) => (
	<header
		className={classNames(styles.heading, {
			[styles[`color-${color}`]]: color,
			[styles[`size-${size}`]]: size,
		})}
	>
		{children}
	</header>
);

const options = {
	colors: ['default', 'primary'],
	sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
};

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.oneOf(options.colors),
	size: PropTypes.oneOf(options.sizes),
};

Heading.defaultProps = {
	color: 'default',
	size: 'md',
};

export default Heading;
