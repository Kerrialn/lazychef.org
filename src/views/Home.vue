<template>
  <div class="row">
    <router-link
      v-for="recipe in recipes"
      :key="recipe.id"
      tag="div"
      class="col"
      :to="{ name: 'Recipe', params: { slug: recipe.slug } }"
    >
      <card v-if="recipe.isPublished" class="card" :recipe="recipe" />
    </router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";
export default {
  components: { Card },
  name: "Home",
  computed: {
    ...mapGetters({
      recipes: "getRecipes",
    }),
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15) !important;
  transition: all 0.5s ease-in-out;
}
</style>
