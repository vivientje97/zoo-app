import Mammal from '../Mammal.js'
import boarImage from '../../assets/Boar.gif'

export default class Boar extends Mammal {
	constructor() {
		super('Boar', 'Omnivore', 3, boarImage, 2)
		this.furType = 'bristly'
	}
	
	interactWithUser() {
		return `${this.name} snorts and roots around the ground.`
	}
}
