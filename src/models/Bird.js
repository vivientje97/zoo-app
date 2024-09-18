import Animal from './Animal.js';

export default class Bird extends Animal {
	constructor(name, diet, size, image, speed) {
		super(name, 'Bird', diet, size, image, speed)
		this.canFly = true
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
			return `${this.name} and ${otherAnimal.name.toLowerCase()} chirp or fly together.`
		}
		return super.interactWith(otherAnimal)
	}
}
