export default class Animal {
	constructor(id, name, type, diet, dangerLevel, image, speed) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.diet = diet;
		this.dangerLevel = dangerLevel;
		this.image = image;
		this.speed = speed;
		this.eaten = false;
	}

	interactWith(otherAnimal) {
		if (this.diet === 'Herbivore' || this.diet === 'Omnivore') {
			if ((otherAnimal.diet === 'Herbivore' || otherAnimal.diet === 'Omnivore') && otherAnimal.dangerLevel < this.dangerLevel) {
				return `${this.name} watches ${otherAnimal.name} with mild interest`;
			} else if (this.dangerLevel > otherAnimal.dangerLevel && otherAnimal.diet !== 'Carnivore') {
				const outcome = Math.random() < 0.5 ? 'escapes' : 'gets eaten';
				if (outcome === 'gets eaten' && this.speed < otherAnimal.speed) {
					otherAnimal.eaten = true;
					return `${this.name} tries to chase ${otherAnimal.name} but fails to catch it.`;
				} else if (outcome === 'gets eaten') {
					otherAnimal.eaten = true;
					return `${this.name} eats ${otherAnimal.name}!`;
				} else {
					return `${otherAnimal.name} escapes from ${this.name}!`;
				}
			} else if (this.dangerLevel <= otherAnimal.dangerLevel && otherAnimal.diet !== 'Carnivore') {
				return `${this.name} tries to avoid ${otherAnimal.name} and hides.`;
			}
		} else if (this.diet === 'Carnivore') {
			if (otherAnimal.diet === 'Herbivore' || otherAnimal.diet === 'Omnivore') {
				if (otherAnimal.dangerLevel < this.dangerLevel && this.speed > otherAnimal.speed) {
					const outcome = Math.random() < 0.5 ? 'escapes' : 'gets eaten';
					if (outcome === 'gets eaten') {
						otherAnimal.eaten = true;
						return `${this.name} catches and eats ${otherAnimal.name}!`;
					} else {
						return `${otherAnimal.name} escapes from ${this.name}!`;
					}
				} else {
					return `${this.name} tries to chase ${otherAnimal.name} but fails to catch it.`;
				}
			} else if (otherAnimal.diet === 'Carnivore') {
				return this.fight(otherAnimal);
			}
		}

		return `${this.name} and ${otherAnimal.name} are cautiously interacting.`;
	}

	fight(otherAnimal) {
		const thisChance = this.dangerLevel / (this.dangerLevel + otherAnimal.dangerLevel);
		const outcome = Math.random() < thisChance ? this : otherAnimal;

		outcome.eaten = true;
		return `${outcome.name} wins the fight! ${otherAnimal.name} is defeated.`;
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
