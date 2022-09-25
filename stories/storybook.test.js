// storybook.test.js

/* Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
}); */

import initStoryshots from '@storybook/addon-storyshots';

initStoryshots();

//import React from 'react';
/* import Button from '../atoms/Button';
import rendered from 'react-test-renderer';

describe('Button component', () => {
	it('should match the snapshot', () => {
		const component = rendered.create(<Button>Button</Button>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
}); */
