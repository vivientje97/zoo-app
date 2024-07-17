<template>
  <div class="animal-card">
    <img :src="animal.image" :alt="animal.name" class="animal-image" />
    <h3>{{ animal.name }}</h3>
<!--	  <p>id: {{ animal.id }}</p>-->
<!--    <p>Type: {{ animal.type }}</p>-->
<!--    <p>Diet: {{ animal.diet }}</p>-->
<!--    <p>Danger Level: {{ animal.dangerLevel }}</p>-->
    <button @click="interactWithUser">Interact with User</button>
    <div v-if="animals.length > 1">
      <button @click="interactWithAnotherAnimal">Interact with Another Animal</button>
    </div>
	  <p v-if="interactionResult" class="interaction-result">{{ interactionResult }}</p>
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
			interactionResult: '',
		};
	},
	methods: {
		interactWithUser() {
			this.interactionResult = this.animal.interactWithUser();
		},
		interactWithAnotherAnimal() {
			const otherAnimals = this.animals.filter(a => a.id !== this.animal.id && !a.isEaten);
			if (otherAnimals.length > 0) {
				const randomAnimal = otherAnimals[Math.floor(Math.random() * otherAnimals.length)];
				this.interactionResult = this.animal.interactWith(randomAnimal);

				if (this.interactionResult.includes('eats')) {
					randomAnimal.isEaten = true;
					this.$emit('animal-eaten', randomAnimal.id);
				}
			}
		}
	}
}
</script>

<style src="../styles/AnimalCard.css"></style>
