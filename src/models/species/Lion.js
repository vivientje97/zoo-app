import Mammal from '../Mammal.js'
import lionImage from '../../assets/Lion.png'

export default class Lion extends Mammal {
	constructor() {
		super('Lion', 'Carnivore', 5, lionImage, 6, 'short')
	}
	
	interactWithUser() {
		const baseInteraction = super.interactWithUser();
		return `${baseInteraction} The lion then lets out a thunderous roar, showcasing its dominance!`;
	}
	
	hunt() {
		return `${this.name} is on the hunt, silently stalking its prey.`;
	}
}
