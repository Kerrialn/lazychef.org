<template>
  <div>
    <div v-if="!timer.isStarted || timer.recipe === recipe">
      <div class="list">
        <div class="header">
          <div>Steps</div>
          <div><timer /></div>
        </div>
        <div class="sub-header-two" v-if="!timer.isStarted">
          Need help with timing? Press play to follow along.
        </div>
        <step
          class="item"
          v-for="step in recipe.steps"
          :key="step.id"
          :step="step"
        />
      </div>
    </div>
    <div class="card mb-5" v-else>
      <div class="card-body">
        <div class="h4">Recipe in progress</div>
        <p>
          <a @click="link" href="#"> {{ timer.recipe.title }}</a>
          is currently active. Stop the active recipe if you wish to start
          another.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Step from "./Step.vue";
import Timer from "./Timer.vue";
export default {
  components: { Timer, Step },
  name: "Steps",
  props: {
    recipe: Object,
  },
  computed: {
    ...mapGetters({
      timer: "getTimer",
    }),
  },
  methods: {
    link() {
      this.$router.push({
        name: "Recipe",
        params: { slug: this.timer.recipe.slug },
      });
    },
  },
};
</script>

<style scoped>
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

.list .sub-header-two {
  background-color: #dff0d8;
  padding: 15px;
  text-align: center;
}

.list .item {
  padding: 15px;
  background-color: white;
  display: flex;
  justify-items: center;
  justify-content: space-between;
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

.check:hover {
  cursor: pointer;
}
</style>
