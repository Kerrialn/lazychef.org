<template>
  <div id="app">
    <navbar />
    <div class="container">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;300;400;700&display=swap");

#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(0, 0, 0, 0.05);
  min-height: 100vh;
}

a {
  text-decoration: none;
}

.around {
  justify-content: space-around !important;
}

.between {
  justify-content: space-between !important;
}

.v-center {
  align-items: center;
}

.mt-1 {
  margin-top: 10px;
}
.mt-2 {
  margin-top: 20px;
}
.mt-3 {
  margin-top: 30px;
}
.mt-4 {
  margin-top: 40px;
}

.mb-1 {
  margin-bottom: 10px;
}
.mb-2 {
  margin-bottom: 20px;
}
.mb-3 {
  margin-bottom: 30px;
}
.mb-4 {
  margin-bottom: 40px;
}

.mr-1 {
  margin-right: 10px;
}
.mr-2 {
  margin-right: 20px;
}
.mr-3 {
  margin-right: 30px;
}
.mr-4 {
  margin-right: 40px;
}

.ml-1 {
  margin-left: 10px;
}
.ml-2 {
  margin-left: 20px;
}
.ml-3 {
  margin-left: 30px;
}
.ml-4 {
  margin-left: 40px;
}

.p-20 {
  padding: 20px;
}
.v-center {
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.card {
  border: 0 !important;
}

.form-control {
  border: 0;
  outline: 0;
  box-shadow: none;
}

.form-control:focus {
  border: 0;
  outline: 0;
  box-shadow: none;
}
</style>
