import PropTypes from 'prop-types';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const ButtonIcon = ({ children, type, icon }) => (
	<Button type={type} isBlock={false}>
		<span style={{ marginRight: 10 }}>{children}</span>
		<Icon type={icon} />
	</Button>
);

ButtonIcon.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string.isRequired,
	type: PropTypes.oneOf[('primary', 'secondary', 'tertiary')],
};

ButtonIcon.defaultProps = {
	type: 'secondary',
};

export default ButtonIcon;
