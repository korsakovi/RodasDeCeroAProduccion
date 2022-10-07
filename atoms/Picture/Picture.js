import React from 'react';
//import { getWidth } from './helpers';
import PropTypes from 'prop-types';
import styles from './Picture.module.css';
import classNames from 'classnames';

const Picture = ({ src, width, height, isRounded }) => (
	<picture
		className={classNames(styles.picture, {
			[styles['is-rounded']]: isRounded,
		})}
	>
		<img src={src} style={{ height, maxWidth: width }}></img>
	</picture>
);

Picture.defaultProps = {
	height: 'auto',
};

Picture.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isRounded: PropTypes.bool,
};

export default Picture;
