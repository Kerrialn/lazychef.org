<template>
  <div
    :class="[{ active: step.isActive }, { complete: step.isComplete }]"
    @click="toggleComplete"
  >
    <div class="col-2 col-md-3">
      <div
        v-if="step.isActive && !step.isComplete"
        class="spinner-grow text-success"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else>
        <transition name="fade">
          <span v-if="!step.isComplete" class="material-icons">
            radio_button_unchecked
          </span>
          <span v-else class="material-icons green"> check_circle </span>
        </transition>
      </div>
    </div>

    <div class="col-10 col-md-9">
      {{ step.action }}
      <span>- {{ step.duration.total * recipe.servings }} min</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Step",
  props: {
    step: Object,
  },
  watch: {
    now() {
      if (this.timer.isStarted) {
        this.isActive();
        this.isComplete();
      }

      if (this.timer.countdown <= 0) {
        this.step.isComplete = false;
        this.step.isActive = false;
        this.stopTimer();
      }
    },
    stop() {
      this.step.isActive = false;
      this.step.isComplete = false;
    },
  },
  computed: {
    ...mapGetters({
      recipe: "getRecipe",
      timer: "getTimer",
    }),
    now() {
      return this.timer.now;
    },
    stepStartTime() {
      return moment(this.timer.startedAt)
        .add(this.step.duration.start, "m")
        .format();
    },
    stepEndTime() {
      return moment(this.timer.startedAt)
        .add(this.step.duration.start, "m")
        .add(this.step.duration.total, "m")
        .format();
    },
  },
  methods: {
    ...mapActions({
      stopTimer: "stopTimer",
    }),
    toggleComplete() {
      if (!this.timer.isStarted) {
        this.step.isComplete = !this.step.isComplete;
      }
    },
    isActive() {
      if (!this.step.duration || !this.timer.isStarted) {
        return;
      }

      return (this.step.isActive = moment().isBetween(
        this.stepStartTime,
        this.stepEndTime
      ));
    },
    isComplete() {
      if (!this.step.duration) {
        return;
      }

      let end = moment(this.timer.startedAt)
        .add(this.step.duration.start, "m")
        .add(this.step.duration.total, "m")
        .format();

      return (this.step.isComplete = moment().isAfter(end));
    },
  },
};
</script>

<style scoped>
.active {
  color: white;
  padding: 20px;
  background-color: #40aa61 !important;
}

.complete {
  color: gray;
}
</style>
