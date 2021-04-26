<template>
  <div>
    <div class="row justify-content-center mt-3">
      <div class="col-12 col-md-6">
        <div class="input-group input-group-lg">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="search"
          />
        </div>
      </div>
    </div>

    <transition-group class="row" name="fade" mode="out-in" appear>
      <router-link
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        tag="div"
        class="col-md-4"
        :to="{ name: 'Recipe', params: { slug: recipe.slug } }"
      >
        <card v-if="recipe.isPublished" :recipe="recipe" />
      </router-link>
    </transition-group>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";
export default {
  components: { Card },
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      recipes: "getRecipes",
    }),
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        return (
          recipe.title.toLowerCase().includes(this.search.toLowerCase()) ||
          recipe.tags.includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped></style>
