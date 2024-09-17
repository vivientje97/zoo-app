import Reptile from '../Reptile.js'
import turtleImage from '../../assets/Turtle.gif'

export default class Turtle extends Reptile {
	constructor() {
		super( 'Turtle', 'Herbivore', 1, turtleImage, 1)
		this.canSwim = true
		this.scaleType = 'shell'
	}
	
	interactWithUser() {
		return `${this.name} slowly peeks out of its shell and looks at you.`
	}
	
	swim() {
		return `${this.name} glides smoothly through the water.`
	}
}
