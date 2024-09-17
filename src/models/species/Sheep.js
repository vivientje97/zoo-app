import Mammal from '../Mammal.js'
import sheepImage from '../../assets/Sheep.gif'

export default class Sheep extends Mammal {
	constructor() {
		super( 'Sheep', 'Herbivore', 1, sheepImage, 2)
	}
	
	interactWithUser() {
		return `${this.name} baas softly and nibbles on grass.`
	}
}
