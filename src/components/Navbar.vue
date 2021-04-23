<template>
  <div class="nav">
    <div class="container">
      <div class="brand-text">
        <b>Lazy</b> <span class="text-white">Chef</span>
      </div>
      <div>
        <router-link tag="a" class="navlink" to="/" exact>Recipes</router-link>
        <router-link tag="a" class="navlink" to="/about" exact
          >About</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.nav a {
  text-decoration: none;
  color: white;
  padding: 0 15px;
}
.nav a:hover {
  text-decoration: none;
  color: black;
}

.nav .active {
  font-weight: bold;
}
</style>
