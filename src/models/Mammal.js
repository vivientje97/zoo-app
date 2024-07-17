import Animal from './Animal';

export default class Mammal extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Mammal', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the mammal sniffs you curiously.`;
	}
}
