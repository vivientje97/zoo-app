import Animal from './Animal.js';

export default class Fish extends Animal {
	constructor(name, diet, dangerLevel, image, speed) {
		super(name, diet, dangerLevel, image, speed)
		this.waterType = ''
	}
	
	swim() {
		return `${this.name} the fish swims gracefully in ${this.waterType} water.`;
	}
	
	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a peaceful fish, swims near you.`
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a fish, swims away from you.`
		} else {
			return `${this.name}, a dangerous fish, hides in the depths.`
		}
	}
	
	// Overriding the interact method to handle fish-specific interactions
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Fish) {
			return `${this.name} and ${otherAnimal.name} are both fish, so they might swim together.`
		}
		return super.interactWith(otherAnimal)
	}
}
