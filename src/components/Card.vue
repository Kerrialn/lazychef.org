<template>
  <div class="card">
    <div class="title">{{ recipe.title }} - {{ recipe.duration }} min</div>
    <img v-if="recipe.image" class="img" :src="recipe.image" />
  </div>
</template>

<style scoped>
.card {
  position: relative;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 20px;
}

.card .img {
  width: 100%;
  object-fit: cover;
  background-position: center center;
  margin: 0;
}
.card .body {
  padding: 20px;
}
.card .title {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #000000;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
}

.card .step {
  padding: 20px;
}
</style>

<script>
export default {
  name: "Card",

  props: {
    recipe: Object,
  },
};
</script>
