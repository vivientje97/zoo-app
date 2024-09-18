import Mammal from '../Mammal.js'
import gorillaImage from '../../assets/Gorilla.gif'

export default class Gorilla extends Mammal {
	constructor() {
		super( 'Gorilla', 'Herbivore', 6, gorillaImage, 3);
	}
	
	interactWithUser() {
		return `${this.name} beats its chest and looks at you curiously.`;
	}
}
