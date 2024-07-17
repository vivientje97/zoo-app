import Animal from '../models/Animal';

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
	new Animal(1, 'Chicken', 'Bird', 'Herbivore', 1, chickenImage, 3),
	new Animal(2, 'Crab', 'Crustacean', 'Omnivore', 1, crabImage, 1),
	new Animal(3, 'Turtle', 'Reptile', 'Omnivore', 1, turtleImage, 2),
	new Animal(4, 'Toad', 'Amphibian', 'Omnivore', 1, toadImage, 1),
	new Animal(5, 'Gorilla', 'Mammal', 'Herbivore', 4, gorillaImage, 2),
	new Animal(6, 'Frog', 'Amphibian', 'Omnivore', 1, frogImage, 1),
	new Animal(7, 'Monkey', 'Mammal', 'Omnivore', 2, monkeyImage, 3),
	new Animal(8, 'Wolf', 'Mammal', 'Carnivore', 5, wolfImage, 4),
	new Animal(9, 'Moose', 'Mammal', 'Herbivore', 3, mooseImage, 3),
	new Animal(10, 'Sheep', 'Mammal', 'Herbivore', 2, sheepImage, 2),
	new Animal(11, 'Boar', 'Mammal', 'Omnivore', 3, boarImage, 3),
	new Animal(12, 'Lion', 'Mammal', 'Carnivore', 5, lionImage, 4),
	new Animal(13, 'Elephant', 'Mammal', 'Herbivore', 3, elephantImage, 2),
	new Animal(14, 'Tiger', 'Mammal', 'Carnivore', 5, tigerImage, 5),
	new Animal(15, 'Rhino', 'Mammal', 'Herbivore', 4, rhinoImage, 4),
	new Animal(16, 'Bear', 'Mammal', 'Omnivore', 4, bearImage, 3),
	new Animal(17, 'Hippo', 'Mammal', 'Herbivore', 4, hippoImage, 3),
	new Animal(18, 'Zebra', 'Mammal', 'Herbivore', 2, zebraImage, 3),
	new Animal(19, 'Giraffe', 'Mammal', 'Herbivore', 3, giraffeImage, 2),
	new Animal(20, 'Deer', 'Mammal', 'Herbivore', 2, deerImage, 3),
];

export default animalsData;
