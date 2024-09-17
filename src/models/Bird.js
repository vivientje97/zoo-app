import Animal from './Animal.js';

export default class Bird extends Animal {
	constructor(name, diet, dangerLevel, image, speed) {
		super(name, 'Bird', diet, dangerLevel, image, speed)
		this.canFly = true
	}
	
	fly() {
		if(this.canFly){
			return `${this.name} is flying in the air.`
		}
		return `${this.name} cannot fly.`
	}
	
	interactWithUser() {
		if (this.dangerLevel === 1) {
			return `${this.name}, a friendly bird, chirps and flutters its wings.`
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a bird, observes you from a branch.`
		} else {
			return `${this.name}, a wary bird, keeps its distance.`
		}
	}
	
	// Overriding the interact method to handle bird-specific interactions
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Bird) {
			return `${this.name} and ${otherAnimal.name} are both birds, so they might sing or fly together.`
		}
		return super.interactWith(otherAnimal)
	}
}
