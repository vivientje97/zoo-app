import Reptile from '../Reptile.js'
import frogImage from '../../assets/Frog.gif'

export default class Frog extends Reptile {
	constructor() {
		super( 'Frog', 'Insectivore', 1, frogImage, 2)
		this.canSwim = true
		this.scaleType = 'smooth skin'
	}
	
	interactWithUser() {
		return `${this.name} croaks and hops around you.`
	}
	
	jump() {
		return `${this.name} leaps high into the air.`
	}
}
