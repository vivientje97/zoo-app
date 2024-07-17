<template>
  <div class="animal-list">
    <animal-card
		v-for="animal in filteredAnimals"
		:key="animal.id"
		:animal="animal"
		:animals="animals"
		@animal-eaten="handleAnimalEaten"
	/>
  </div>
</template>

<script>
import AnimalCard from './AnimalCard.vue';

export default {
	components: {
		AnimalCard
	},
	props: {
		animals: Array
	},
	computed: {
		filteredAnimals() {
			return this.animals.filter(animal => !animal.isEaten);
		}
	},
	methods: {
		handleAnimalEaten(animalId) {
			this.$emit('animal-eaten', animalId);
		}
	}
}
</script>

<style>
.animal-list {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: center;
}
</style>
