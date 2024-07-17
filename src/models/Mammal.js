import Animal from './Animal';

export default class Mammal extends Animal {
	constructor(name, diet, dangerLevel, image) {
		super(name, 'Mammal', diet, dangerLevel, image);
	}

	interact() {
		return `${this.name} the mammal sniffs you curiously.`;
	}
}
