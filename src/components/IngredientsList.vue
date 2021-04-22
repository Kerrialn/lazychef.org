<template>
  <div>
    <div class="list">
      <div class="header">Ingredients</div>
      <div
        class="row v-center item"
        v-for="ingredient in ingredients"
        :key="ingredient"
        @click="ingredient.isComplete = !ingredient.isComplete"
      >
        <div class="col-md-3">
          <transition name="fade">
            <span v-if="!ingredient.isComplete" class="material-icons">
              radio_button_unchecked
            </span>
            <span v-else class="material-icons green"> check_circle </span>
          </transition>
        </div>
        <div class="col-md-9">
          <div class="title">{{ ingredient.title }}</div>
          <div class="duration">
            {{ ingredient.quantity }}{{ ingredient.measurement }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckList",
  props: {
    ingredients: Array,
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
