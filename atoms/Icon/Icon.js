import { mapType } from './helpers';
import PropTypes from 'prop-types';

//TODO Use the Atom Picture
const Icon = ({ type }) => (
	<div>
		<img src={mapType(type)} />
	</div>
);

Icon.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Icon;
