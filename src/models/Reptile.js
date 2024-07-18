import Animal from './Animal.js';

export default class Reptile extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Reptile', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the reptile sunbathes lazily.`;
	}
}
