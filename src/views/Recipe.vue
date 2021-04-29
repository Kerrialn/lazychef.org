<template>
  <div>
    <div class="mb-5 mt-3">
      <div v-if="recipe.title" class="display-4">{{ recipe.title }}</div>
      <div class="h4">{{ recipe.duration }} minutes</div>
    </div>

    <div class="row around">
      <slider class="col-12 col-md-6 col-lg-6" :images="recipe.images" />
      <ingredients-list class="col-12 col-md-6 col-lg-6" :recipe="recipe" />
    </div>

    <div class="row">
      <steps class="col-12" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Steps from "../components/Steps.vue";
import IngredientsList from "../components/IngredientsList.vue";
import Slider from "../components/Slider.vue";
export default {
  components: { Slider, Steps, IngredientsList },
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
  },
};
</script>

<style></style>
