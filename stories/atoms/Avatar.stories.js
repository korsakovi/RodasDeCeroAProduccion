import React from 'react';

import Avatar from '../../atoms/Avatar';

export default {
	title: 'Atoms/Avatar',
	component: Avatar,
};

const Story = (props) => <Avatar {...props} />;

export const Default = Story.bind({});
Default.args = {
	src: 'https://placeimg.com/200/200/people',
};
