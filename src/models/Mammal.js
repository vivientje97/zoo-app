import Animal from './Animal.js';

export default class Mammal extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Mammal', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the mammal roams around.`;
	}

	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless mammal, sniffs you curiously.`;
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a mammal, watches you with mild interest.`;
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a mammal, approaches you cautiously.`;
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a mammal, eyes you warily.`;
		} else if (this.dangerLevel === 5) {
			return `${this.name}, a dangerous mammal, keeps its distance from you.`;
		} else {
			return `${this.name} the mammal looks at you curiously.`;
		}
	}
}