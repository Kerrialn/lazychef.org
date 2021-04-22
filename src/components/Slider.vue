<template>
  <div>
    <div class="slider">
      <transition-group class="images" name="fade" mode="out-in" appear>
        <img
          v-for="image in images"
          :key="image.id"
          v-show="image.id === current"
          class="image"
          :src="image.src"
        />
      </transition-group>
      <div v-if="images.length > 1" class="controls">
        <span
          @click="previous"
          :class="['material-icons', isPreviousDisabled ? 'disabled' : null]"
        >
          arrow_back_ios
        </span>
        <span
          @click="next"
          :class="['material-icons', isNextDisabled ? 'disabled' : null]"
        >
          arrow_forward_ios
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    images: Array,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    next() {
      if (this.current < this.images.length) {
        let slide = this.current;
        this.current = null;
        setTimeout(() => {
          this.current = slide + 1;
        }, 500);
      }
    },
    previous() {
      if (this.current > 1) {
        let slide = this.current;
        this.current = null;
        setTimeout(() => {
          this.current = slide - 1;
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.slider {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.controls {
  display: none;
  position: absolute;
  left: 1%;
  width: 98%;
  top: 45%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.slider:hover .controls {
  display: flex;
}

.controls .material-icons {
  background-color: rgba(255, 255, 255, 0.35);
  text-align: center;
  font-size: 30px;
  padding: 20px;
  border-radius: 50%;
}

.controls .material-icons:hover {
  background-color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 500px;
  border-radius: 4px;
  display: block;
}
</style>
