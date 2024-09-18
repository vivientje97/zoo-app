import Animal from './Animal.js';

export default class Reptile extends Animal {
	constructor(name, diet, size, image, speed) {
		super(name, 'Reptile', diet, size, image, speed)
		this.canSwim = true
		this.scaleType = ''
	}
	
	shedSkin() {
		return `${this.name} the reptile is shedding its ${this.scaleType} skin.`;
	}
	
	interactWithUser() {
		if (this.size === 1) {
			return `${this.name}, a harmless reptile, basks in the sun.`
		} else if (this.size === 2) {
			return `${this.name}, a reptile, watches you with interest.`
		} else {
			return `${this.name}, a dangerous reptile, remains hidden.`
		}
	}
	
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Reptile && this.diet === otherAnimal.diet) {
			return `${this.name} and ${otherAnimal.name} bask in the sun together.`;
		}
		return super.interactWith(otherAnimal);
	}
}
