<template>
  <div>
    <div class="list">
      <div class="header">
        <div class="w-50">Ingredients</div>
        <div class="w-50">
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
      <div class="sub-header nav">
        <div class="m-0">
          €{{ parseFloat(recipe.cost * recipe.servings).toFixed(2) }}
        </div>
        <div class="input-group w-25">
          <span class="input-group-text" id="basic-addon1">
            <i class="bi bi-people"></i>
          </span>
          <input
            :disabled="timer.isStarted"
            v-model="recipe.servings"
            type="text"
            class="form-control"
            placeholder="servings"
          />
        </div>
      </div>
      <transition-group name="fade" mode="out-in">
        <div
          class="item"
          v-for="ingredient in filteredIngredients"
          :key="ingredient.id"
          @click="ingredient.isComplete = !ingredient.isComplete"
        >
          <div class="col-3 col-md-3">
            <span v-if="!ingredient.isComplete" class="material-icons">
              radio_button_unchecked
            </span>
            <span v-else class="material-icons green"> check_circle </span>
          </div>
          <div
            class="col-9 col-md-9"
            v-bind:class="{ complete: ingredient.isComplete }"
          >
            <div class="title">
              {{ ingredient.title }}
            </div>
            <div class="duration">
              {{ ingredient.quantity * recipe.servings
              }}{{ ingredient.measurement }}
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CheckList",
  data() {
    return {
      search: "",
      warnings: {
        portion: false,
      },
    };
  },
  props: {
    recipe: Object,
  },
  watch: {},
  computed: {
    ...mapGetters({
      timer: "getTimer",
    }),
    filteredIngredients() {
      return this.recipe.ingredients.filter((ingredient) => {
        return ingredient.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.complete {
  color: gray;
}

.input-group-text {
  background-color: white;
  border: 0;
}

.w-20 {
  width: 20% !important;
}

.sub-header {
  padding: 10px;
  background-color: #40aa61;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

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

.list {
  border-radius: 5px;
  margin-bottom: 20px;
}

.list .header {
  font-size: 20px;
  color: white;
  background-color: #218347;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list .item {
  padding: 15px;
  background-color: white;
}

.list .item:hover {
  cursor: pointer;
}

.list .item:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.65);
}

.header.yellow {
  background-color: #40aa61 !important;
}
</style>
