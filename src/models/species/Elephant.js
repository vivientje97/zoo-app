import Mammal from '../Mammal.js'
import elephantImage from '../../assets/Elephant.png'

export default class Elephant extends Mammal {
	constructor() {
		super( 'Elephant', 'Herbivore', 2, elephantImage, 2)
		this.furType = 'none'
	}
	
	interactWithUser() {
		return `${this.name} trumpets loudly and flaps its ears.`
	}
	
	bathe() {
		return `${this.name} is taking a mud bath to cool off.`
	}
}