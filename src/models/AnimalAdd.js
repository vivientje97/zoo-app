import Mammal from './Mammal.js';
import Bird from './Bird.js';
import Fish from './Fish.js';
import Reptile from './Reptile.js';

export function createAnimal(data) {
	switch (data.type) {
		case 'Mammal':
			return new Mammal(data.id, data.name, data.diet, data.dangerLevel, data.image, data.speed);
		case 'Bird':
			return new Bird(data.id, data.name, data.diet, data.dangerLevel, data.image, data.speed);
		case 'Fish':
			return new Fish(data.id, data.name, data.diet, data.dangerLevel, data.image, data.speed);
		case 'Reptile':
			return new Reptile(data.id, data.name, data.diet, data.dangerLevel, data.image, data.speed);
		default:
			throw new Error('Unknown animal type');
	}
}
