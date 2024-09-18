import Mammal from '../Mammal.js'
import bearImage from '../../assets/Bear.png'

export default class Bear extends Mammal {
	constructor() {
		super('Bear', 'Omnivore', 5, bearImage, 3)
		this.furType = 'thick'
	}
	
	interactWithUser() {
		return `${this.name} growls softly and sits down beside you.`
	}
	
	fish() {
		return `${this.name} catches a fish from the river.`
	}
}
