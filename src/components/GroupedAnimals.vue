<template>
  <div class="grouped-animals">
    <div v-for="animalGroup in groupedAnimals" :key="animalGroup.type" class="animal-group">
      <h3>{{ animalGroup.type }}</h3>
      <ul>
        <li v-for="animal in animalGroup.animals" :key="animal.id">
          <strong>{{ animal.name }}</strong> - {{ animal.diet }}, Danger Level: {{ animal.dangerLevel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		animals: Array
	},
	computed: {
		groupedAnimals() {
			const grouped = {};
			this.animals.forEach(animal => {
				if (!grouped[animal.type]) {
					grouped[animal.type] = {
						type: animal.type,
						animals: []
					};
				}
				grouped[animal.type].animals.push(animal);
			});
			// Convert object to array for easier rendering
			return Object.values(grouped);
		}
	}
};
</script>

<style scoped>
.grouped-animals {
	margin-top: 20px;
}

.animal-group {
	margin-bottom: 20px;
}

h2 {
	font-size: 1.5rem;
	margin-bottom: 10px;
}

ul {
	list-style: none;
	padding: 0;
}

li {
	margin-bottom: 5px;
	font-size: 1rem;
}
</style>
