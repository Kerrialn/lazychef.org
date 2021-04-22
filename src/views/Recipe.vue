<template>
  <div>
    <div class="row between v-center">
      <h1>{{ recipe.title }}</h1>
      <h1>{{ recipe.duration }} min</h1>
    </div>

    <div class="row around">
      <slider class="col" :images="recipe.images" />
      <ingredients-list class="col" :ingredients="recipe.ingredients" />
    </div>

    <div class="row">
      <check-list class="col" :list="recipe.steps" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckList from "../components/CheckList.vue";
import IngredientsList from "../components/IngredientsList.vue";
import Slider from "../components/Slider.vue";
export default {
  components: { Slider, CheckList, IngredientsList },
  name: "Recipe",
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    ...mapGetters({
      recipe: "getRecipe",
    }),
  },
  mounted() {
    this.$store.dispatch("getRecipe", this.slug);
    this.recipe.isFull = true;
  },
};
</script>

<style></style>
