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
	new Animal(1, 'Chicken', 'Bird', 'Herbivore', 1, chickenImage),
	new Animal(2, 'Crab', 'Crustacean', 'Omnivore', 1, crabImage),
	new Animal(3, 'Turtle', 'Reptile', 'Omnivore', 2, turtleImage),
	new Animal(4, 'Toad', 'Amphibian', 'Carnivore', 2, toadImage),
	new Animal(5, 'Gorilla', 'Mammal', 'Herbivore', 4, gorillaImage),
	new Animal(6, 'Frog', 'Amphibian', 'Carnivore', 1, frogImage),
	new Animal(7, 'Monkey', 'Mammal', 'Omnivore', 3, monkeyImage),
	new Animal(8, 'Wolf', 'Mammal', 'Carnivore', 5, wolfImage),
	new Animal(9, 'Moose', 'Mammal', 'Herbivore', 3, mooseImage),
	new Animal(10, 'Sheep', 'Mammal', 'Herbivore', 1, sheepImage),
	new Animal(11, 'Boar', 'Mammal', 'Omnivore', 3, boarImage),
	new Animal(12, 'Lion', 'Mammal', 'Carnivore', 5, lionImage),
	new Animal(13, 'Elephant', 'Mammal','Herbivore', 2, elephantImage),
];

export default animalsData;
