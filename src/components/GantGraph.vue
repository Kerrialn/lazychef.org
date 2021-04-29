<template>
  <div class="gantgraph">
    {{ time.hours() }}:{{ time.minutes() }}:{{ time.seconds() }}
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "GantGraph",
  props: {
    recipe: Object,
  },
  data() {
    return {
      time: moment.duration(this.recipe.duration, "m"),
    };
  },
  created() {
    setInterval(() => {
      this.time.subtract(1, "s");
    }, 1000);
  },
};
</script>

<style scoped>
.box {
  padding: 20px;
  white-space: nowrap;
  overflow-x: scroll;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
</style>
