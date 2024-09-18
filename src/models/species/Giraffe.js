import Mammal from '../Mammal.js'
import giraffeImage from '../../assets/Giraffe.png'

export default class Giraffe extends Mammal {
	constructor() {
		super( 'Giraffe', 'Herbivore', 3, giraffeImage, 4)
	}
	
	interactWithUser() {
		return `${this.name} stretches its neck to nibble on leaves.`
	}
}
