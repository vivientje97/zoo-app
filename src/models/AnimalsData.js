import Animal from '../models/Animal';

import lionImage from '../assets/Lion.png';
import elephantImage from '../assets/Elephant.png';
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

const animalsData = [
	new Animal('Chicken', 'Bird', 'Herbivore', 1, chickenImage),
	new Animal('Crab', 'Crustacean', 'Omnivore', 1, crabImage),
	new Animal('Turtle', 'Reptile', 'Omnivore', 2, turtleImage),
	new Animal('Toad', 'Amphibian', 'Carnivore', 2, toadImage),
	new Animal('Gorilla', 'Mammal', 'Herbivore', 4, gorillaImage),
	new Animal('Frog', 'Amphibian', 'Carnivore', 1, frogImage),
	new Animal('Monkey', 'Mammal', 'Omnivore', 3, monkeyImage),
	new Animal('Wolf', 'Mammal', 'Carnivore', 4, wolfImage),
	new Animal('Moose', 'Mammal', 'Herbivore', 3, mooseImage),
	new Animal('Sheep', 'Mammal', 'Herbivore', 1, sheepImage),
	new Animal('Boar', 'Mammal', 'Omnivore', 3, boarImage),
	new Animal('Lion', 'Mammal', 'Carnivore', 5, lionImage),
	new Animal('Elephant', 'Mammal','Herbivore', 2, elephantImage),
];

export default animalsData;
