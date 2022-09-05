import PropTypes from 'prop-types';
import './Dropdown.css';
import Icon from '../../atoms/Icon';

const Dropdown = ({ options, value, onChange }) => (
	<div className='dropdown'>
		<Icon type='angleDown' hasBackground />
		<select className='dropdown-select' onChange={onChange} value={value}>
			{options.map(({ text, value }) => (
				<option key={value} value={value}>
					{text}
				</option>
			))}
		</select>
	</div>
);

Dropdown.defaultProps = {
	value: '',
	options: [],
};

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
		})
	).isRequired,
	value: PropTypes.string,
};

export default Dropdown;
