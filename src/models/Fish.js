import Animal from './Animal.js';

export default class Fish extends Animal {
	constructor(name, diet, size, image, speed) {
		super(name, diet, size, image, speed)
		this.waterType = ''
	}
	
	swim() {
		return `${this.name} the fish swims gracefully in ${this.waterType} water.`;
	}
	
	interactWithUser() {
		if (this.size === 1) {
			return `${this.name}, a peaceful fish, swims near you.`
		} else if (this.size === 2) {
			return `${this.name}, a fish, swims away from you.`
		} else {
			return `${this.name}, a dangerous fish, hides in the depths.`
		}
	}
	
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Fish && this.diet === otherAnimal.diet) {
			return `${this.name} and ${otherAnimal.name} swim together peacefully.`
		}
		return super.interactWith(otherAnimal)
	}
}
