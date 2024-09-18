import Mammal from '../Mammal.js'
import tigerImage from '../../assets/Tiger.png'

export default class Tiger extends Mammal {
	constructor() {
		super( 'Tiger', 'Carnivore', 8, tigerImage, 5)
	}
	
	interactWithUser() {
		return `${this.name} roars loudly at you!`
	}
}
