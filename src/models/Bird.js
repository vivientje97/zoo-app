import Animal from './Animal';

export default class Bird extends Animal {
	constructor(name, diet, dangerLevel, image) {
		super(name, 'Bird', diet, dangerLevel, image);
	}

	interact() {
		return `${this.name} the bird chirps happily.`;
	}
}
