<template>
  <div>
    <div class="list">
      <div class="header">
        <div>Ingredients</div>
        <div>
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="search"
            />
          </div>
        </div>
      </div>
      <transition-group name="fade" mode="out-in">
        <div
          class="item"
          v-for="ingredient in filteredIngredients"
          :key="ingredient"
          @click="ingredient.isComplete = !ingredient.isComplete"
        >
          <div class="col-3 col-md-3">
            <span v-if="!ingredient.isComplete" class="material-icons">
              radio_button_unchecked
            </span>
            <span v-else class="material-icons green"> check_circle </span>
          </div>
          <div class="col-9 col-md-9">
            <div class="title">{{ ingredient.title }}</div>
            <div class="duration">
              {{ ingredient.quantity }}{{ ingredient.measurement }}
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckList",
  data() {
    return {
      search: "",
    };
  },
  props: {
    ingredients: Array,
  },
  computed: {
    filteredIngredients() {
      return this.ingredients.filter((ingredient) => {
        return ingredient.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style>

.material-icons {
  font-size: 30px;
}
.green {
  color: green;
}
.item {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.step-info .title {
  font-weight: bold;
}

.step-info .duration {
  font-size: 12px;
}
</style>
