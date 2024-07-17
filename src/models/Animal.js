export default class Animal {
	constructor(id, name, type, diet, dangerLevel, image) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.diet = diet;
		this.dangerLevel = dangerLevel;
		this.image = image;
		this.eaten = false;
	}

	interactWith(otherAnimal) {
		if (this.dangerLevel > otherAnimal.dangerLevel) {
			if (this.diet === 'Carnivore' && otherAnimal.diet !== 'Carnivore') {
				return this.attemptToEat(otherAnimal);
			} else if (this.diet === 'Carnivore' && otherAnimal.diet === 'Carnivore') {
				return this.attemptToEat(otherAnimal);
			} else {
				return `${this.name} and ${otherAnimal.name} are just hanging out.`;
			}
		} else if (this.dangerLevel < otherAnimal.dangerLevel) {
			if (this.diet === 'Herbivore' || this.diet === 'Omnivore') {
				return `${this.name} tries to avoid ${otherAnimal.name} and hides.`;
			} else {
				return `${this.name} is cautious around ${otherAnimal.name}.`;
			}
		} else {
			return `${this.name} and ${otherAnimal.name} are cautiously interacting.`;
		}
	}

	attemptToEat(otherAnimal) {
		const outcome = Math.random() < 0.5 ? 'escapes' : 'gets eaten';
		if (outcome === 'gets eaten') {
			otherAnimal.isEaten = true;
			return `${this.name} eats ${otherAnimal.name}!`;
		} else {
			return `${otherAnimal.name} escapes from ${this.name}!`;
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
