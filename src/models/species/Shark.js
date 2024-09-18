import Fish from '../Fish.js'

export default class Shark extends Fish {
	constructor( image) {
		super( 'Shark', 'Carnivore', 4, image, 4)
		this.waterType = 'ocean'
	}
	
	interactWithUser() {
		return `${this.name} swims menacingly, circling its territory.`;
	}
	
	hunt() {
		return `${this.name} senses prey in the water and swiftly attacks!`;
	}
}

