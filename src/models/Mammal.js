import Animal from './Animal.js'

export default class Mammal extends Animal {
	constructor(name, diet, dangerLevel, image, speed, furType = 'generic') {
		super(name, 'Mammal', diet, dangerLevel, image, speed)
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
		if (this.dangerLevel === 1) {
			return `${this.name}, a gentle mammal, sniffs you curiously.`
		} else if (this.dangerLevel === 2) {
			return `${this.name}, a mammal, watches you with mild interest.`
		} else if (this.dangerLevel === 3) {
			return `${this.name}, a mammal, approaches you cautiously.`
		} else if (this.dangerLevel === 4) {
			return `${this.name}, a mammal, eyes you warily.`
		} else {
			return `${this.name}, a dangerous mammal, keeps its distance.`
		}
	}
	
	// Overriding the interact method to handle mammal-specific interactions
	interactWith(otherAnimal) {
		if (otherAnimal instanceof Mammal) {
			return `${this.name} and ${otherAnimal.name} are both mammals, so they might play or compete.`
		}
		return super.interactWith(otherAnimal)
	}
}
