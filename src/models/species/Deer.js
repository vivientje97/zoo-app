import Mammal from '../Mammal.js'
import deerImage from '../../assets/Deer.png'

export default class Deer extends Mammal {
	constructor() {
		super( 'Deer', 'Herbivore', 3, deerImage, 4)
	}
	
	interactWithUser() {
		return `${this.name} flicks its ears and trots gracefully.`
	}
}
