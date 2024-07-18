import Animal from './Animal.js';

export default class Fish extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Fish', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the fish swims gracefully.`;
	}

	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless fish, swims near you curiously.`;
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a fish, watches you from the water.`;
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a fish, cautiously swims around you.`;
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a fish, eyes you warily from a distance.`;
		} else if (this.dangerLevel === 5) {
			return `${this.name}, a dangerous fish, keeps its distance from you.`;
		} else {
			return `${this.name} the fish looks at you curiously from the water.`;
		}
	}
}
