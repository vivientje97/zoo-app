import Reptile from '../Reptile.js'
import crabImage from '../../assets/Crab.gif'

export default class Crab extends Reptile {
	constructor() {
		super('Crab', 'Omnivore', 1, crabImage, 1)
		this.canSwim = true
		this.scaleType = 'exoskeleton'
	}
	
	interactWithUser() {
		return `${this.name} scuttles sideways and clicks its pincers at you.`
	}
	
	crawl() {
		return `${this.name} crawls along the sandy beach.`
	}
}
