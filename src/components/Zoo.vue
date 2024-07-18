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
import GroupedAnimals from '../components/GroupedAnimals.vue';
import animalsData from '../models/AnimalsData.js';
import Mammal from '../models/Mammal.js';
import Bird from '../models/Bird.js';
import Fish from '../models/Fish.js';
import Reptile from '../models/Reptile.js';

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
			const randomIndex = Math.floor(Math.random() * animalsData.length);
			const randomAnimalData = animalsData[randomIndex];

			let newAnimal;
			switch (randomAnimalData.type) {
				case 'Mammal':
					newAnimal = new Mammal(
						randomAnimalData.id,
						randomAnimalData.name,
						randomAnimalData.diet,
						randomAnimalData.dangerLevel,
						randomAnimalData.image,
						randomAnimalData.speed
					);
					break;
				case 'Bird':
					newAnimal = new Bird(
						randomAnimalData.id,
						randomAnimalData.name,
						randomAnimalData.diet,
						randomAnimalData.dangerLevel,
						randomAnimalData.image,
						randomAnimalData.speed
					);
					break;
				case 'Fish':
					newAnimal = new Fish(
						randomAnimalData.id,
						randomAnimalData.name,
						randomAnimalData.diet,
						randomAnimalData.dangerLevel,
						randomAnimalData.image,
						randomAnimalData.speed
					);
					break;
				case 'Reptile':
					newAnimal = new Reptile(
						randomAnimalData.id,
						randomAnimalData.name,
						randomAnimalData.diet,
						randomAnimalData.dangerLevel,
						randomAnimalData.image,
						randomAnimalData.speed
					);
					break;
				default:
					newAnimal = null;
			}

			if (newAnimal) {
				this.animalsPool.push(newAnimal);
			}
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
