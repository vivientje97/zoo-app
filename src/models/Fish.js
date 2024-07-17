import Animal from './Animal';

export default class Fish extends Animal {
	constructor(name, diet, dangerLevel, image) {
		super(name, 'Fish', diet, dangerLevel, image);
	}

	interact() {
		return `${this.name} the fish swims around you.`;
	}
}
