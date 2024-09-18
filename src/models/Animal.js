let currentId = 1

export default class Animal {
	constructor(
		name, type, diet = 'Omnivore', size = 1, image = '', speed = 1) {
		this.id = currentId++
		this.name = name
		this.type = type
		this.diet = diet
		this.size = size
		this.image = image
		this.speed = speed
		this.eaten = false
	}
	
	interactWithUser() {
		return `${this.name} the ${this.constructor.name.toLowerCase()} is observing you.`
	}
	
	interactWith(otherAnimal) {
		if (this.diet === 'Carnivore' && otherAnimal.diet !== 'Carnivore') {
			return this.handleCarnivoreInteraction(otherAnimal)
		} else if (this.diet === 'Herbivore') {
			return this.handleHerbivoreInteraction(otherAnimal)
		} else if (this.diet === 'Omnivore') {
			return this.handleOmnivoreInteraction(otherAnimal)
		} else {
			return `${this.name} and ${otherAnimal.name} interact cautiously.`
		}
	}
	
	handleCarnivoreInteraction(otherAnimal) {
		if (this.size > otherAnimal.size) {
			const chanceOfEating = this.size / (this.size + otherAnimal.size)
			if (Math.random() < chanceOfEating) {
				otherAnimal.eaten = true
				return `${this.name} attacks and eats ${otherAnimal.name}!`
			} else {
				return `${this.name} tries to catch ${otherAnimal.name} but fails.`
			}
		} else {
			return `${this.name} does not see ${otherAnimal.name} as prey and moves on.`
		}
	}
	
	handleHerbivoreInteraction(otherAnimal) {
		if (otherAnimal.diet === 'Carnivore') {
			if (otherAnimal.size > this.size) {
				return `${this.name} tries to escape from ${otherAnimal.name}, sensing danger.`
			} else {
				return `${this.name} cautiously watches ${otherAnimal.name}, but stays calm.`
			}
		} else {
			if (this.type === 'Fish' || this.type === 'Reptile') {
				return `${this.name} and ${otherAnimal.name} coexist peacefully in their environment.`
			}
			return `${this.name} and ${otherAnimal.name} graze together peacefully.`
		}
	}
	
	handleOmnivoreInteraction(otherAnimal) {
		if (otherAnimal.diet === 'Carnivore') {
			if (otherAnimal.size > this.size) {
				return `${this.name} avoids ${otherAnimal.name}, sensing a threat.`
			} else {
				return `${this.name} cautiously interacts with ${otherAnimal.name}.`
			}
		} else if (otherAnimal.diet === 'Herbivore') {
			if (this.size > otherAnimal.size) {
				const chanceOfEating = this.size / (this.size + otherAnimal.size)
				if (Math.random() < chanceOfEating) {
					otherAnimal.eaten = true;
					return `${this.name} eats the unsuspecting ${otherAnimal.name}.`
				} else {
					return `${this.name} tries to eat ${otherAnimal.name}, but fails.`
				}
			} else {
				if (this.type === 'Fish' || this.type === 'Reptile') {
					return `${this.name} and ${otherAnimal.name} coexist peacefully in the same space.`
				}
				return `${this.name} and ${otherAnimal.name} graze cautiously side by side.`
			}
		} else {
			return `${this.name} and ${otherAnimal.name} cautiously share resources.`
		}
	}
	
	isAlive() {
		return !this.eaten
	}
	
	describe() {
		return `${this.name} is a ${this.diet} ${this.type} with a danger level of ${this.size}.`
	}
}
