let currentId = 1

export default class Animal {
	constructor(
		name, type, diet = 'Omnivore', dangerLevel = 1, image = '', speed = 1) {
		this.id = currentId++
		this.name = name
		this.type = type
		this.diet = diet
		this.dangerLevel = dangerLevel
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
		} else {
			return `${this.name} and ${otherAnimal.name} interact cautiously.`
		}
	}
	
	handleCarnivoreInteraction(otherAnimal) {
		const chanceOfEating = this.dangerLevel / (this.dangerLevel + otherAnimal.dangerLevel)
		if (Math.random() < chanceOfEating) {
			otherAnimal.eaten = true
			return `${this.name} attacks and eats ${otherAnimal.name}!`
		} else {
			return `${this.name} tries to catch ${otherAnimal.name} but fails.`
		}
	}
	
	handleHerbivoreInteraction(otherAnimal) {
		if (otherAnimal.diet === 'Carnivore') {
			return `${this.name} tries to avoid ${otherAnimal.name} and escapes.`
		} else {
			return `${this.name} and ${otherAnimal.name} graze together peacefully.`
		}
	}
	
	isAlive() {
		return !this.eaten
	}
	
	describe() {
		return `${this.name} is a ${this.diet} ${this.type} with a danger level of ${this.dangerLevel}.`
	}
}
