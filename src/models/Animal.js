export default class Animal {
	constructor(name, type, diet, dangerLevel, image) {
		this.name = name;
		this.type = type;
		this.diet = diet;
		this.dangerLevel = dangerLevel;
		this.image = image;
	}

	interactWith(animal) {
		if (this.type === animal.type) {
			return `${this.name} and ${animal.name} of the same type ignore each other.`;
		}

		// Determine interaction based on danger level and diet
		if (this.dangerLevel > animal.dangerLevel) {
			if (this.diet === 'Carnivore' && animal.diet === 'Herbivore') {
				return `${this.name}, a carnivore, chases and scares ${animal.name}, an herbivore.`;
			} else if (this.diet === 'Herbivore' && animal.diet === 'Carnivore') {
				return `${this.name}, an herbivore, avoids ${animal.name}, a carnivore.`;
			} else {
				return `${this.name} and ${animal.name} interact cautiously.`;
			}
		} else {
			return `${this.name} and ${animal.name} cautiously observe each other.`;
		}
	}

	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless ${this.type}, is curious about you.`;
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a ${this.type}, watches you with mild interest.`;
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a ${this.type}, approaches you cautiously.`;
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a ${this.type}, eyes you warily.`;
		} else if (this.dangerLevel === 5) {
			return `${this.name}, a dangerous ${this.type}, keeps its distance from you.`;
		} else {
			return `${this.name} looks at you curiously.`;
		}
	}
}
