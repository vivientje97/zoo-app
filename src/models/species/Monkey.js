import Mammal from '../Mammal.js';
import monkeyImage from '../../assets/Monkey.gif'

export default class Monkey extends Mammal {
	constructor() {
		super( 'Monkey', 'Omnivore', 3, monkeyImage, 4)
		this.furType = 'short'
	}
	
	interactWithUser() {
		return `${this.name} swings from a branch and chatters excitedly.`
	}
	
	climb() {
		return `${this.name} climbs effortlessly through the trees.`
	}
}
