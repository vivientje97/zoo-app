import Animal from './Animal.js';

export default class Mammal extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Mammal', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the mammal roams around.`;
	}
}
