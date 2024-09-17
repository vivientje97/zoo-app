<template>
  <div v-if="!animal.eaten" class="animal-card">
    <img :src="animal.image || 'default-image.jpg'" :alt="animal.name || 'Unknown Animal'" class="animal-image" />
    <h3>{{ animal.name }}</h3>
	  <button @click="interactWithUser">Interact with User</button>
    <div v-if="animals && animals.length > 1">
      <button @click="interactWithAnotherAnimal">Interact with Another Animal</button>
    </div>
	  <p :class="interactionResultClass" class="interaction-result">{{ interactionResult }}</p>
  </div>
</template>

<script>

export default {

	props: {
		animal: {
			type: Object,
			required: true,
		},
		animals: Array
	},

	data() {
		return {
			interactionResult: ''
		};
	},

	computed: {
		interactionResultClass() {
			return this.interactionResult.includes('eats') ? 'red' : 'green'
		}
	},

	methods: {
		interactWithUser() {
			this.interactionResult = this.animal.interactWithUser()
		},

		interactWithAnotherAnimal() {
			const otherAnimals = this.animals.filter(a => a.id !== this.animal.id && !a.eaten)
			if (otherAnimals.length > 0) {
				const randomAnimal = otherAnimals[Math.floor(Math.random() * otherAnimals.length)]
				this.interactionResult = this.animal.interactWith(randomAnimal)
				if (this.interactionResult.includes('eats') || this.interactionResult.includes('defeated')) {
					randomAnimal.eaten = true
					this.$emit('animal-eaten', randomAnimal.id)
				}
			}
		},
	}
}
</script>

<style src="../styles/AnimalCard.css"></style>
