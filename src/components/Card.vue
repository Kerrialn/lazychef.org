<template>
  <div class="card">
    <div class="title">
      {{ recipe.title }}
    </div>
    <img v-if="recipe.image" class="img" :src="recipe.image" />
    <div class="overlay-footer">
      <span class="duration">
        <div class="small">{{ recipe.duration }}</div>
        <div class="small">min</div>
      </span>
    </div>
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
  padding: 20px;
  white-space: nowrap;
  overflow-x: hidden;
}

.overlay-footer {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  text-align: center;
}

.duration div {
  line-height: 0.9;
}
.duration div:last-child {
  font-size: 10px;
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
