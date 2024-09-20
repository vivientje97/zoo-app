import Animal from './Animal.js';

export default class Bird extends Animal {
	constructor(name, diet, size, image, speed) {
		super(name, 'Bird', diet, size, image, speed)
		this.canFly = true
		this.canSwim = true
	}
	
	fly() {
		if(this.canFly){
			return `${this.name} is flying in the air.`
		}
		return `${this.name} cannot fly.`
	}
	
	interactWithUser() {
		if (this.size === 1) {
			return `${this.name}, a friendly bird, chirps and flutters its wings.`
		} else if (this.size === 2) {
			return `${this.name}, a bird, observes you from a branch.`
		} else {
			return `${this.name}, a wary bird, keeps its distance.`
		}
	}
	
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Bird && this.diet === otherAnimal.diet) {
			return `${this.name} and ${otherAnimal.name.toLowerCase()} chirp together.`
		}
		
		if (otherAnimal.diet === 'Carnivore' || otherAnimal.diet === 'Omnivore') {
			if (otherAnimal.size > this.size) {
				if (this.canFly) {
					const escapeChance = this.speed / (this.speed + otherAnimal.speed)
					if (Math.random() < escapeChance) {
						return `${this.name} senses danger and quickly flies away from ${otherAnimal.name.toLowerCase()}!`
					} else {
						return `${this.name} tries to fly away from ${otherAnimal.name.toLowerCase()}, but is caught!`
					}
				} else {
					return `${this.name} tries to waddle away from ${otherAnimal.name.toLowerCase()}, but can't escape.`
				}
			}
		}
		
		if (this.canSwim && otherAnimal.canSwim) {
			return `${this.name} and ${otherAnimal.name.toLowerCase()} swim calmly in the pond.`
		} else if (this.canSwim && !otherAnimal.canSwim) {
			return `${this.name} glides across the water while ${otherAnimal.name.toLowerCase()} stays on the shore.`
		} else if (!this.canSwim && otherAnimal.canSwim) {
			return `${this.name} watches from land as ${otherAnimal.name.toLowerCase()} swims.`
		}
		
		return super.interactWith(otherAnimal)
	}
}
