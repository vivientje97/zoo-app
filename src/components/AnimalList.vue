<template>
<div class="animal-list">
  <animal-card v-for="animal in animals" :key="animal.name" :animal="animal" :animals="animals" />
</div>
</template>

<script>
import AnimalCard from './AnimalCard.vue';

export default {
	components: {
		AnimalCard
	},
	props: {
		animals: Array
	}
}
</script>

<style>
.animal-list {
	display: flex;
	flex-wrap: wrap;
}
</style>
