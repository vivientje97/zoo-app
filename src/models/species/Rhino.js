import Mammal from '../Mammal.js'
import rhinoImage from '../../assets/Rhino.png'

export default class Rhino extends Mammal {
	constructor() {
		super( 'Rhino', 'Herbivore', 4, rhinoImage, 2);
	}
	
	interactWithUser() {
		return `${this.name} snorts and charges slightly.`;
	}
}
