<template>
  <div v-if="!animal.isEaten" class="animal-card">
    <img :src="animal.image" :alt="animal.name" class="animal-image" />
    <h3>{{ animal.name }}</h3>
	  <button @click="interactWithUser">Interact with User</button>
    <div v-if="animals.length > 1">
      <button @click="interactWithAnotherAnimal">Interact with Another Animal</button>
    </div>
	  <p>{{ animal.id.interact}}</p>
	  <p :class="interactionResultClass" class="interaction-result">{{ interactionResult }}</p>
	  <p class="general-interaction">{{ interactionMessage }}</p>
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
			interactionMessage: this.animal.interact()
		};
	},
	computed: {
		interactionResultClass() {
			return this.interactionResult.includes('eats') ? 'red' : 'green';
		}
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
					this.$emit('animal-eaten', randomAnimal.id);
				}
			}
		}
	}
}
</script>

<style src="../styles/AnimalCard.css"></style>
