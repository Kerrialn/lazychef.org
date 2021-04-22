<template>
  <div>
    <div class="list">
      <div class="header">Steps</div>
      <div
        class="item"
        v-for="item in list"
        :key="item"
        @click="item.isComplete = !item.isComplete"
      >
        <div class="col-2 col-md-3 check">
          <transition name="fade">
            <span v-if="!item.isComplete" class="material-icons">
              radio_button_unchecked
            </span>
            <span v-else class="material-icons green"> check_circle </span>
          </transition>
        </div>

        <div class="col-10 col-md-9 step-info">
          {{ item.action }}
          <span v-if="item.duration">- {{ item.duration }} min aprox</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckList",
  props: {
    list: Array,
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

.step-info {
  text-align: left;
}

.check:hover {
  cursor: pointer;
}
</style>
