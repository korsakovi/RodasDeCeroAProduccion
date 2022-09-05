import { getWidth } from './helpers';
import PropTypes from 'prop-types';
import './Picture.css';

const Picture = ({ src, width }) => (
	<picture className='picture'>
		<img src={src} style={{ maxWidth: getWidth(width) }}></img>
	</picture>
);

Picture.propTypes = {
	src: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Picture;
