import React from 'react';
import Button from '../../atoms/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
};

const Story = (props) => <Button {...props} />;

export const Default = Story.bind({});
Default.args = {
	children: 'Default Button',
};

export const Primary = Story.bind({});
Primary.args = {
	type: 'primary',
	children: 'Primary Button',
};

export const Secondary = Story.bind({});
Secondary.args = {
	type: 'secondary',
	children: 'Secondary Button',
};

export const Tertiary = Story.bind({});
Tertiary.args = {
	type: 'tertiary',
	children: 'Tertiary Button',
};
