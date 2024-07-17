<template>
  <div class="grouped-animals">
    <h2>Animals in the Zoo</h2>
    <div
		class="animal-group"
		v-for="(group, type) in groupedAnimals"
		:key="type"
	>
      <h3>{{ type }}</h3>
      <div class="animal-cards">
        <animal-card
			v-for="animal in group"
			:key="animal.name"
			:animal="animal"
			:animals="animals"
		/>
      </div>
    </div>
  </div>
</template>

<script>
import AnimalCard from './AnimalCard.vue';

export default {
	components: {
		AnimalCard,
	},
	props: {
		animals: Array,
	},
	computed: {
		groupedAnimals() {
			const groups = {};
			this.animals.forEach((animal) => {
				if (!groups[animal.type]) {
					groups[animal.type] = [];
				}
				groups[animal.type].push(animal);
			});
			return groups;
		},
	},
};
</script>

<style scoped>
.grouped-animals {
	margin-top: 20px;
}

.animal-group {
	margin-bottom: 20px;
}

.animal-cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
