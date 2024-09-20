import Animal from './Animal.js'

export default class Amphibian extends Animal {
	constructor(name, diet, size, image, speed) {
		super(name, 'Amphibian', diet, size, image, speed)
		this.canSwim = true
		this.skinType = 'moist'
	}
	
	shedSkin() {
		return `${this.name} the amphibian is shedding its ${this.skinType.toLowerCase()} skin.`
	}
	
	interactWithUser() {
		if (this.size === 1) {
			return `${this.name}, a small amphibian, croaks quietly.`
		} else if (this.size === 2) {
			return `${this.name}, a medium amphibian, hops around curiously.`
		} else {
			return `${this.name}, a large amphibian, stays near the water, watching you.`
		}
	}
	
	interactWith(otherAnimal) {
		if ((otherAnimal.diet === 'Carnivore' || otherAnimal.diet === 'Omnivore') && otherAnimal.size > this.size) {
			return `${this.name} quickly swims away from ${otherAnimal.name.toLowerCase()}, sensing danger.`
		}
		
		if (this.canSwim && otherAnimal.canSwim) {
			return `${this.name} and ${otherAnimal.name.toLowerCase()} swim together happily in the pond.`
		} else if (this.canSwim && !otherAnimal.canSwim) {
			return `${this.name} jumps into the water, leaving ${otherAnimal.name.toLowerCase()} behind on the shore.`
		} else if (!this.canSwim && otherAnimal.canSwim) {
			return `${this.name} watches ${otherAnimal.name.toLowerCase()} swim gracefully while staying on land.`
		}
		
		return super.interactWith(otherAnimal)
	}
}
