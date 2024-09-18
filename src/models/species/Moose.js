import Mammal from '../Mammal.js'
import mooseImage from '../../assets/Moose.gif'

export default class Moose extends Mammal {
	constructor() {
		super( 'Moose', 'Herbivore', 4, mooseImage, 3)
	}
	
	interactWithUser() {
		return `${this.name} makes a low grunt and calmly observes you.`
	}
}
