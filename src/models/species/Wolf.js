import Mammal from '../Mammal.js'
import wolfImage from '../../assets/Wolf.gif'

export default class Wolf extends Mammal {
	constructor() {
		super( 'Wolf', 'Omnivore', 2, wolfImage, 4, 'warm and fluffy')
		this.hasFur = true
	}
	
	interactWithUser() {
		return `${this.name} wags its tail and barks happily.`
	}
	
	hunt() {
		return `${this.name} is on the hunt, silently stalking its prey.`
	}
}
