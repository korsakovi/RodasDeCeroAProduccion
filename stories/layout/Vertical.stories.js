import React from 'react';
import Spacer from '../../layout/Spacer';

export default {
	title: 'Layout/Spacer/Vertical',
	component: Spacer,
	args: {
		isVisible: true,
		maxHeight: 200,
	},
};

const Story = (props) => <Spacer.Vertical {...props} />;

export const Default = Story.bind({});

export const ExtraSmall = Story.bind({});
ExtraSmall.args = {
	size: 'xs',
};

export const Small = Story.bind({});
Small.args = {
	size: 'sm',
};

export const Medium = Story.bind({});
Medium.args = {
	size: 'md',
};

export const Large = Story.bind({});
Large.args = {
	size: 'lg',
};
