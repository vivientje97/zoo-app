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
import AddAnimalButton from '../components/AddAnimalButton.vue'
import AnimalList from '../components/AnimalList.vue'
import GroupedAnimals from '../components/GroupedAnimals.vue'
import animalsData from '../models/AnimalsData.js'
import { createAnimal } from '../models/AnimalAdd.js'

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
			try {
				const randomIndex = Math.floor(Math.random() * animalsData.length)
				const randomAnimalData = animalsData[randomIndex]
				
				const newAnimal = createAnimal(randomAnimalData.id, randomAnimalData.constructor.name)
				
				this.animalsPool.push(newAnimal)
			} catch (error) {
				console.error('Error adding animal to pool:', error)
			}
		},

		removeEatenAnimal(animalToRemoveId) {
			this.animalsPool = this.animalsPool.filter(animal => animal.id !== animalToRemoveId)
		},

		resetAnimalPool() {
			this.animalsPool = []
		},
	}
}
</script>

<style src="../styles/Zoo.css"></style>
