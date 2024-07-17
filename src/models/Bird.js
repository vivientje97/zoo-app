import Animal from './Animal';

export default class Bird extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Bird', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the bird chirps happily.`;
	}
}
