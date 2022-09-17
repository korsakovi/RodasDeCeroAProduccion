import { getWidth } from './helpers';
import PropTypes from 'prop-types';
import styles from './Picture.module.css';
import classNames from 'classnames';

const Picture = ({ src, width }) => (
	<picture className={classNames(styles.picture)}>
		<img src={src} style={{ maxWidth: getWidth(width) }}></img>
	</picture>
);

Picture.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Picture;
