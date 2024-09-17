import Animal from './Animal.js';

export default class Reptile extends Animal {
	constructor(name, diet, dangerLevel, image, speed) {
		super(name, 'Reptile', diet, dangerLevel, image, speed)
		this.canSwim = true
		this.scaleType = ''
	}
	
	shedSkin() {
		return `${this.name} the reptile is shedding its ${this.scaleType} skin.`;
	}
	
	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a harmless reptile, basks in the sun.`
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a reptile, watches you with interest.`
		} else {
			return `${this.name}, a dangerous reptile, remains hidden.`
		}
	}
	
	// Overriding the interact method to handle reptile-specific interactions
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Reptile) {
			return `${this.name} and ${otherAnimal.name} are both reptiles, so they might compete or bask together.`;
		}
		return super.interactWith(otherAnimal);
	}
}
