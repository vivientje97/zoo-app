import Bear from './species/Bear.js'
import Boar from './species/Boar.js'
import Chicken from './species/Chicken.js'
import Crab from './species/Crab.js'
import Deer from './species/Deer.js'
import Elephant from './species/Elephant.js'
import Frog from './species/Frog.js'
import Giraffe from './species/Giraffe.js'
import Gorilla from './species/Gorilla.js'
import Lion from './species/Lion.js'
import Monkey from './species/Monkey.js'
import Moose from './species/Moose.js'
import Rhino from './species/Rhino.js'
import Shark from './species/Shark.js'
import Sheep from './species/Sheep.js'
import Tiger from './species/Tiger.js'
import Toad from './species/Toad.js'
import Turtle from './species/Turtle.js'
import Wolf from './species/Wolf.js'
import Zebra from './species/Zebra.js'

export function createAnimal(id, type) {
	switch (type) {
		case 'Bear':
			return new Bear(id);
		case 'Boar':
			return new Boar(id);
		case 'Chicken':
			return new Chicken(id);
		case 'Crab':
			return new Crab(id);
		case 'Deer':
			return new Deer(id);
		case 'Elephant':
			return new Elephant(id);
		case 'Frog':
			return new Frog(id);
		case 'Giraffe':
			return new Giraffe(id);
		case 'Gorilla':
			return new Gorilla(id);
		case 'Lion':
			return new Lion(id);
		case 'Monkey':
			return new Monkey(id);
		case 'Moose':
			return new Moose(id);
		case 'Rhino':
			return new Rhino(id);
		case 'Shark':
			return new Shark(id);
		case 'Sheep':
			return new Sheep(id);
		case 'Tiger':
			return new Tiger(id);
		case 'Toad':
			return new Toad(id);
		case 'Turtle':
			return new Turtle(id);
		case 'Wolf':
			return new Wolf(id);
		case 'Zebra':
			return new Zebra(id);
		default:
			throw new Error('Unknown animal type');
	}
}
