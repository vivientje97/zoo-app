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
import AnimalCard from './AnimalCard.vue'

export default {
	components: {
		AnimalCard
	},
	props: {
		animals: {
			type: Array,
			required: true,
			validator(value) {
				return value.every(animal => typeof animal === 'object')
			}
		}
	},
	computed: {
		filteredAnimals() {
			return this.animals.filter(animal => !animal.eaten)
		}
	},
	methods: {
		handleAnimalEaten(animalId) {
			this.$emit('animal-eaten', animalId)
		}
	}
}
</script>

<style src="../styles/AnimalList.css"></style>
