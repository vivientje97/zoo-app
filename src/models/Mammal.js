import Animal from './Animal.js'

export default class Mammal extends Animal {
	constructor(name, diet, size, image, speed, furType = 'generic') {
		super(name, 'Mammal', diet, size, image, speed)
		this.hasFur = true
		this.furType = furType
	}
	
	groom() {
		if (this.hasFur){
			return `${this.name} the mammal is grooming its ${this.furType} fur.`	
		}
		return `${this.name} the mammal does not have any fur.`
	}
	
	interactWithUser() {
		if (this.size === 1) {
			return `${this.name}, a gentle mammal, sniffs you curiously.`
		} else if (this.size === 2) {
			return `${this.name}, a mammal, watches you with mild interest.`
		} else if (this.size === 3) {
			return `${this.name}, a mammal, approaches you cautiously.`
		} else if (this.size === 4) {
			return `${this.name}, a mammal, eyes you warily.`
		} else {
			return `${this.name}, a dangerous mammal, keeps its distance.`
		}
	}
	
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Mammal && this.diet === otherAnimal.diet) {
			return `${this.name} and ${otherAnimal.name}, both mammals, interact in a friendly way.`
		}
		return super.interactWith(otherAnimal)
	}
}
