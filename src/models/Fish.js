import Animal from './Animal';

export default class Fish extends Animal {
	constructor(id, name, diet, dangerLevel, image, speed) {
		super(id, name, 'Fish', diet, dangerLevel, image, speed);
	}

	interact() {
		return `${this.name} the fish swims gracefully.`;
	}
}
