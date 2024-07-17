<template>
  <div class="grouped-animals">
    <div class="grouping-selector">
      <label for="grouping">Group by:</label>
		<select id="grouping" v-model="selectedGrouping">
			<option value="type">Type</option>
			<option value="diet">Diet</option>
			<option value="dangerLevel">Danger Level</option>
			<option value="speed">Speed</option>
		</select>
    </div>
    <div v-for="animalGroup in groupedAnimals" :key="animalGroup.group" class="animal-group">
      <h3>{{ animalGroup.group }}</h3>
      <ul>
        <li v-for="animal in animalGroup.animals" :key="animal.id">
          <strong>{{ animal.name }}</strong> - Diet: {{ animal.diet }}, Danger Level: {{ animal.dangerLevel }}, Speed: {{ animal.speed }}
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
	data() {
		return {
			selectedGrouping: 'type'
		};
	},
	computed: {
		groupedAnimals() {
			const grouped = {};
			this.animals.forEach(animal => {
				const group = animal[this.selectedGrouping];
				if (!grouped[group]) {
					grouped[group] = {
						group: group,
						animals: []
					};
				}
				grouped[group].animals.push(animal);
			});
			return Object.values(grouped);
		}
	}
};
</script>

<style src="../styles/GroupedAnimals.css"></style>
