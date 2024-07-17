<template>
  <div class="zoo">
    <h1>Zoo Management App</h1>
    <add-animal-button @animal-added="addAnimalToPool" />
    <grouped-animals :animals="animalsPool" />
    <div class="animal-interactions">
      <h2>Animal Interactions</h2>
      <animal-list :animals="animalsPool" />
    </div>
  </div>
</template>

<script>
import AddAnimalButton from '../components/AddAnimalButton.vue';
import GroupedAnimals from '../components/GroupedAnimals.vue';
import AnimalList from '../components/AnimalList.vue';

export default {
	components: {
		AddAnimalButton,
		GroupedAnimals,
		AnimalList
	},
	data() {
		return {
			animalsPool: []
		};
	},
	methods: {
		addAnimalToPool(animal) {
			this.animalsPool.push(animal);
		}
	}
}
</script>

<style>
.zoo {
	text-align: center;
}

.animal-interactions {
	margin-top: 30px;
}
</style>
