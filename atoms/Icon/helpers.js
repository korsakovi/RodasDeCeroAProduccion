const ICONS_ASSETS_PATH = '/icons/';

const iconMap = {
	rightArrow: 'right-arrow',
	home: 'home-outline', //FIXME Add
};

export const mapType = (type) => `${ICONS_ASSETS_PATH}/${iconMap[type]}.svg`;

export const mapSize = () => null; //TODO
