<template>
  <div v-if="!timer.isStarted || recipe === timerRecipe">
    <div class="d-flex align-items-center justify-content-between">
      <div v-if="timer.countdown" class="duration">
        {{ timer.countdown.hours() }}:{{ timer.countdown.minutes() }}:{{
          timer.countdown.seconds()
        }}
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <i
          @click="start"
          v-if="!timer.isStarted"
          class="bi bi-play-fill control-icon-btn"
        ></i>
        <i
          @click="stopTimer"
          v-else
          class="bi bi-stop-fill control-icon-btn"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Timer",
  computed: {
    ...mapGetters({
      timer: "getTimer",
      recipe: "getRecipe",
      timerRecipe: "getTimerRecipe",
    }),
  },
  methods: {
    ...mapActions({
      start: "startTimer",
      stop: "stopTimer",
    }),
    stopTimer() {
      if (confirm("are you sure you want to stop the recipe in progress?")) {
        this.stop();
      }
    },
  },
};
</script>

<style scoped>
.confirm {
  position: fixed;
  height: 100vh;
  width: 100vh;
  background-color: rgba(255, 255, 255, 0.07);
}
.recipe-title {
  white-space: nowrap;
  overflow-x: hidden;
}
.duration {
  font-size: 18px;
  margin-right: 20px;
}
.control-icon-btn {
  font-size: 30px;
  padding: 0 5px;
  border-radius: 3px;
}
.control-icon-btn:hover {
  background-color: rgba(255, 255, 255, 0.07);
}
</style>
