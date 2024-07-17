<template>
<button @click="addRandomAnimal">Add Random Animal</button>
</template>

<script>
import animalsData from '../models/AnimalsData.js';

export default {
	methods: {
		addRandomAnimal() {
			const randomAnimal = animalsData[Math.floor(Math.random() * animalsData.length)];
			this.$emit('animal-added', randomAnimal);
		}
	}
}
</script>
