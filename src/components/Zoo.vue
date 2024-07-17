<template>
  <div class="zoo">
    <h1 class="title">Welcome to the Zoo!</h1>
    <add-animal-button @animal-added="addAnimalToPool" />
	   <button class="button is-danger" @click="resetAnimalPool">Reset Zoo</button>
    <div class="zoo-container">
      <div class="animals-container">
        <animal-list :animals="animalsPool" @animal-eaten="removeEatenAnimal" />
      </div>
      <div class="grouped-animals-container">
        <grouped-animals :animals="animalsPool" />
      </div>
    </div>
  </div>
</template>


<script>
import AddAnimalButton from '../components/AddAnimalButton.vue';
import AnimalList from '../components/AnimalList.vue';
import Animal from '../models/Animal.js'
import animalsData from '../models/AnimalsData.js';
import GroupedAnimals from '../components/GroupedAnimals.vue'

export default {
	components: {
		GroupedAnimals,
		AddAnimalButton,
		AnimalList
	},
	data() {
		return {
			animalsPool: []
		};
	},

	methods: {
		addAnimalToPool() {
			const id = this.animalsPool.length + 1; // Example: simple increment for demo, consider using UUID for production
			const randomIndex = Math.floor(Math.random() * animalsData.length);
			const randomAnimalData = animalsData[randomIndex];

			const newAnimal = new Animal(
				id,
				randomAnimalData.name,
				randomAnimalData.type,
				randomAnimalData.diet,
				randomAnimalData.dangerLevel,
				randomAnimalData.image,
				randomAnimalData.speed
			);

			this.animalsPool.push(newAnimal);
		},

		removeEatenAnimal(animalToRemoveId) {
			this.animalsPool = this.animalsPool.filter(animal => animal.id !== animalToRemoveId);
		},

		resetAnimalPool() {
			this.animalsPool = [];
		},
	}
}
</script>

<style src="../styles/Zoo.css"></style>
