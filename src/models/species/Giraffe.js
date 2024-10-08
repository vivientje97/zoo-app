import Mammal from '../Mammal.js'
import giraffeImage from '../../assets/Giraffe.png'

export default class Giraffe extends Mammal {
	constructor() {
		super( 'Giraffe', 'Herbivore', 1, giraffeImage, 3)
	}
	
	interactWithUser() {
		return `${this.name} stretches its neck to nibble on leaves.`
	}
}
