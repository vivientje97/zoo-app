import Animal from './Animal.js';

export default class Reptile extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Reptile', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the reptile sunbathes lazily.`;
	}

	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless reptile, slithers near you curiously.`;
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a reptile, watches you from a distance.`;
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a reptile, cautiously approaches you.`;
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a reptile, eyes you warily.`;
		} else if (this.dangerLevel === 5) {
			return `${this.name}, a dangerous reptile, keeps its distance from you.`;
		} else {
			return `${this.name} the reptile looks at you curiously.`;
		}
	}
}
