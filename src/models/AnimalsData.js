import Mammal from './Mammal';
import Bird from './Bird';
import Fish from './Fish';
import Reptile from './Reptile';

import chickenImage from '../assets/Chicken.gif';
import crabImage from '../assets/Crab.gif';
import turtleImage from '../assets/Turtle.gif';
import toadImage from '../assets/Toad.gif';
import gorillaImage from '../assets/Gorilla.gif';
import frogImage from '../assets/Frog.gif';
import monkeyImage from '../assets/Monkey.gif';
import wolfImage from '../assets/Wolf.gif';
import mooseImage from '../assets/Moose.gif';
import sheepImage from '../assets/Sheep.gif';
import boarImage from '../assets/Boar.gif';
import lionImage from '../assets/Lion.png';
import elephantImage from '../assets/Elephant.png';
import tigerImage from '../assets/Tiger.png';
import rhinoImage from '../assets/Rhino.png';
import bearImage from '../assets/Bear.png';
import hippoImage from '../assets/Hippo.png';
import zebraImage from '../assets/Zebra.png';
import giraffeImage from '../assets/Giraffe.png';
import deerImage from '../assets/Deer.png';

const animalsData = [
	new Bird(1, 'Chicken', 'Herbivore', 1, chickenImage, 3),
	new Fish(2, 'Crab', 'Omnivore', 1, crabImage, 1),
	new Reptile(3, 'Turtle', 'Omnivore', 1, turtleImage, 2),
	new Reptile(4, 'Toad', 'Omnivore', 1, toadImage, 1),
	new Mammal(5, 'Gorilla', 'Herbivore', 4, gorillaImage, 2),
	new Reptile(6, 'Frog', 'Omnivore', 1, frogImage, 1),
	new Mammal(7, 'Monkey', 'Omnivore', 2, monkeyImage, 3),
	new Mammal(8, 'Wolf', 'Carnivore', 5, wolfImage, 4),
	new Mammal(9, 'Moose', 'Herbivore', 3, mooseImage, 3),
	new Mammal(10, 'Sheep', 'Herbivore', 2, sheepImage, 2),
	new Mammal(11, 'Boar', 'Omnivore', 3, boarImage, 3),
	new Mammal(12, 'Lion', 'Carnivore', 5, lionImage, 4),
	new Mammal(13, 'Elephant', 'Herbivore', 3, elephantImage, 2),
	new Mammal(14, 'Tiger', 'Carnivore', 5, tigerImage, 5),
	new Mammal(15, 'Rhino', 'Herbivore', 4, rhinoImage, 4),
	new Mammal(16, 'Bear', 'Omnivore', 4, bearImage, 3),
	new Mammal(17, 'Hippo', 'Herbivore', 4, hippoImage, 3),
	new Mammal(18, 'Zebra', 'Herbivore', 2, zebraImage, 3),
	new Mammal(19, 'Giraffe', 'Herbivore', 3, giraffeImage, 2),
	new Mammal(20, 'Deer', 'Herbivore', 2, deerImage, 3),
];

export default animalsData;
