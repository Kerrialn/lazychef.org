<template>
  <div>
    <transition name="fade">
      <div v-if="show" class="start-delay">{{ delay }}</div>
    </transition>
    <div v-if="!timer.isStarted || recipe === timerRecipe">
      <div class="d-flex align-items-center justify-content-between">
        <div v-if="timer.countdown" class="duration">
          {{ timer.countdown.hours() }}:{{ timer.countdown.minutes() }}:{{
            timer.countdown.seconds()
          }}
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <i
            @click="startTimer"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Timer",
  data() {
    return {
      delay: 3,
      show: false,
    };
  },
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
    startTimer() {
      this.show = true;
      let timeout = setTimeout(this.start, this.delay * 1000);
      let interval = setInterval(() => {
        if (this.delay > 0) {
          this.delay = this.delay - 1;
        } else {
          clearTimeout(timeout);
          clearInterval(interval);
          this.show = false;
          this.delay = 3;
        }
      }, 1000);
    },
    stopTimer() {
      if (confirm("are you sure you want to stop the recipe in progress?")) {
        this.stop();
      }
    },
  },
};
</script>

<style scoped>
.start-delay {
  text-align: center;
  font-size: 70px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #218347;
  padding: 100px;
  border-radius: 3px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  transform: translate(calc(50vw - 50%), calc(50vh - 50%));
  z-index: 1000;
  width: 50vh;
}

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
