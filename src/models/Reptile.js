import Animal from './Animal';

export default class Reptile extends Animal {
	constructor(name, diet, dangerLevel, image) {
		super(name, 'Reptile', diet, dangerLevel, image);
	}

	interact() {
		return `${this.name} the reptile watches you closely.`;
	}
}
