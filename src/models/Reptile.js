import Animal from './Animal';

export default class Reptile extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Reptile', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the reptile watches you closely.`;
	}
}
