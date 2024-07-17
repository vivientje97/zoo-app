<template>
  <div class="animal-card">
    <img :src="animal.image" :alt="animal.name" class="animal-image" />
    <h3>{{ animal.name }}</h3>
    <p>Type: {{ animal.type }}</p>
    <p>Diet: {{ animal.diet }}</p>
    <p>Danger Level: {{ animal.dangerLevel }}</p>
    <button @click="interactWithUser">Interact with User</button>
    <div v-if="animals.length > 1">
      <button @click="interactWithAnotherAnimal">Interact with Another Animal</button>
      <p v-if="interactionResult">{{ interactionResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		animal: Object,
		animals: Array
	},
	data() {
		return {
			interactionResult: ''
		};
	},
	methods: {
		interactWithUser() {
			this.interactionResult = this.animal.interactWithUser();
		},
		interactWithAnotherAnimal() {
			const otherAnimals = this.animals.filter(a => a !== this.animal);
			if (otherAnimals.length > 0) {
				const randomAnimal = otherAnimals[Math.floor(Math.random() * otherAnimals.length)];
				this.interactionResult = this.animal.interactWith(randomAnimal);
			}
		}
	}
}
</script>

<style>
.animal-card {
	border: 1px solid #ccc;
	padding: 1em;
	margin: 1em;
	border-radius: 8px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
}
.animal-image {
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 50%;
	margin-bottom: 10px;
}
</style>
