<template>
  <div>
    <div class="nav">
      <div class="container">
        <div class="d-flex between v-center">
          <div class="brand-text">
            <b>Lazy</b> <span class="text-white">Chef</span>
          </div>
          <i
            @click="show = !show"
            class="menu-btn bi bi-list fs-2 text-white"
          ></i>
        </div>
      </div>
    </div>
    <transition name="slide-down">
      <div v-if="show" class="menu">
        <router-link tag="div" class="menu-item" to="/" exact
          >Recipes</router-link
        >

        <router-link tag="div" class="menu-item" to="/about" exact
          >About</router-link
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-down-enter-to,
.slide-down-leave {
  overflow: hidden;
  max-height: 1000px;
}

.slide-down-enter,
.slide-down-leave-to {
  overflow: hidden;
  max-height: 0;
}

.menu-btn:hover {
  cursor: pointer;
  color: black !important;
}

.menu {
  background-color: #218347;
}
.menu-item {
  padding: 20px;
  color: rgba(255, 255, 255, 0.65);
  min-width: 20%;
  text-align: center;
}

.menu-item.active {
  color: white;
}

.menu-item:hover {
  cursor: pointer;
  color: #333;
}

@media screen and (max-width: 700px) {
}
@media screen and (min-width: 701px) {
  .menu {
    display: flex;
  }
}

.text-white {
  color: white;
}

.brand-text {
  font-size: 28px;
  padding-left: 20px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #40aa61 !important;
  padding: 20px 0px;
}
</style>
