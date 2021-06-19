<template>
  <div class="card">
    <progressive-img
      v-if="recipe.image"
      :placeholder="recipe.image"
      class="img"
      :src="recipe.image"
    />

    <div class="title">
      {{ recipe.title }}
    </div>

    <div class="overlay-footer">
      <span class="duration">
        <div class="small">{{ recipe.duration }}</div>
        <div class="small">min</div>
      </span>
    </div>
  </div>
</template>

<style scoped>
.title {
  padding: 20px;
  font-size: 18px;
  text-align: center;
  line-height: 1.3 !important;
}

.card {
  background-color: transparent;
  position: relative;
  background-color: transparent;
  border-radius: 5px;
  margin: 20px;
}

.card:hover .img {
  cursor: pointer;
}

.card .img {
  width: 100%;
  object-fit: cover;
  background-position: center center;
  margin: 0;
  z-index: 5;
}

.card .body {
  padding: 20px;
}
.card .title {
  line-height: 1;
  padding-bottom: 10px;
  color: black;
}

.overlay-footer {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px;
  text-align: center;
  z-index: 10;
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
