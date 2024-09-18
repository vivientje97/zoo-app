import Mammal from '../Mammal.js'
import zebraImage from '../../assets/Zebra.png'

export default class Zebra extends Mammal {
	constructor() {
		super( 'Zebra', 'Herbivore', 3, zebraImage, 4)
		this.furType = 'striped'
	}
	
	interactWithUser() {
		return `${this.name} the zebra trots up to you and gives a friendly whinny.`
	}
}