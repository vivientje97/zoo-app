import Bird from '../Bird.js'
import chickenImage from '../../assets/Chicken.gif'

export default class Chicken extends Bird {
	constructor() {
		super('Chicken', 'Herbivore', 1, chickenImage, 2);
		this.canFly = false
	}
	
	interactWithUser() {
		return `${this.name} clucks happily at you!`
	}
}
