import Reptile from '../Reptile.js'
import toadImage from '../../assets/Toad.gif'

export default class Toad extends Reptile {
	constructor() {
		super( 'Toad', 'Insectivore', 1, toadImage, 1)
		this.canSwim = true
		this.scaleType = 'warty skin'
	}
	
	interactWithUser() {
		return `${this.name} sits quietly and watches you with its bulging eyes.`
	}
	
	croak() {
		return `${this.name} lets out a deep croak.`
	}
}
