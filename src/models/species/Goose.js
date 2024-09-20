import Bird from '../Bird.js'
import gooseImage from '../../assets/Goose.gif'

export default class Goose extends Bird {
	constructor() {
		super('Goose', 'Herbivore', 2, gooseImage, 3)
		this.canFly = true
		this.canSwim = true
	}
	
	interactWithUser() {
		return `${this.name} honks loudly as it waddles around you.`
	}
}
