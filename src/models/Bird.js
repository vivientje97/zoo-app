import Animal from './Animal.js';

export default class Bird extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Bird', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the bird chirps happily.`;
	}

	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless bird, flutters around you curiously.`;
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a bird, watches you from a distance.`;
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a bird, cautiously approaches you.`;
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a bird, eyes you warily.`;
		} else if (this.dangerLevel === 5) {
			return `${this.name}, a dangerous bird, keeps its distance from you.`;
		} else {
			return `${this.name} the bird looks at you curiously.`;
		}
	}
}
