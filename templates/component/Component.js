import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Component.module.css';

const Component = ({ children }) => {
	return <div className={classNames(styles.component)}>{children}</div>;
};

Component.propTypes = {
	children: PropTypes.node.isRequired,
};

Component.defaultProps = {};

export default Component;
