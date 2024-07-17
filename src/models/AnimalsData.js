import Mammal from './Mammal';
import Bird from './Bird';
import Fish from './Fish';
import Reptile from './Reptile';

import lionImage from '../assets/Lion.png';
import elephantImage from '../assets/Elephant.png';

const animalsData = [
	new Mammal('Lion', 'Carnivore', 5, lionImage),
	new Mammal('Elephant', 'Herbivore', 2, elephantImage),
	new Bird('Eagle', 'Carnivore', 4),
	new Bird('Parrot', 'Herbivore', 1),
	new Fish('Shark', 'Carnivore', 5),
	new Fish('Goldfish', 'Omnivore', 1),
	new Reptile('Cobra', 'Carnivore', 4),
	new Reptile('Iguana', 'Herbivore', 2),
];

export default animalsData;
