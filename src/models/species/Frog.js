import Amphibian from '../Amphibian.js'
import frogImage from '../../assets/Frog.gif'

export default class Frog extends Amphibian {
	constructor() {
		super( 'Frog', 'Insectivore', 1, frogImage, 2)
		this.canSwim = true
		this.skinType = 'smooth skin'
	}
	
	interactWithUser() {
		return `${this.name} croaks and hops around you.`
	}
	
	jump() {
		return `${this.name} leaps high into the air.`
	}
}
