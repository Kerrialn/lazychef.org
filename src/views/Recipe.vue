<template>
  <div>
    <div class="d-flex between mb-3 mt-3">
      <div class="h1">{{ recipe.title }}</div>
      <div class="h1">{{ recipe.duration }} min</div>
    </div>

    <div class="row around">
      <slider class="col-12 col-md-6 col-lg-6" :images="recipe.images" />
      <ingredients-list
        class="col-12 col-md-6 col-lg-6"
        :ingredients="recipe.ingredients"
      />
    </div>

    <div class="row">
      <check-list class="col-12" :list="recipe.steps" />
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
