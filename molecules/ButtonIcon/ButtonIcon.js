import React from 'react';
import PropTypes from 'prop-types';

import Spacer from '../../layout/Spacer';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const ButtonIcon = ({ children, type, icon }) => (
	<Button type={type} isBlock={false}>
		{children}
		<Spacer.Vertical size='sm'></Spacer.Vertical>
		<Icon type={icon} />
	</Button>
);

ButtonIcon.propTypes = {
	children: PropTypes.node.isRequired,
	icon: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

ButtonIcon.defaultProps = {
	type: 'secondary',
};

export default ButtonIcon;
