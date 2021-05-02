<template>
  <div class="card">
    <div class="title">
      {{ recipe.title }}
    </div>

    <progressive-img
      v-if="recipe.image"
      :placeholder="recipe.image"
      class="img"
      :src="recipe.image"
    />

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
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  z-index: 10;
}

.card {
  position: relative;
  background-color: transparent;
  border-radius: 5px;
  margin: 20px;
}

.card:hover .img {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  transition: all 0.5s ease-in-out;
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
  bottom: 10px;
  left: 10px;
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
