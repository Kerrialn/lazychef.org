<template>
  <div class="nav">
    <div class="brand-text"><b>Lazy</b> Chef</div>
    <div>
      <router-link tag="a" class="nav-link" to="/" exact>Recipes</router-link>
      <router-link tag="a" class="nav-link" to="/about" exact
        >About</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.brand-text {
  font-size: 18px;
  padding-left: 20px;
}
.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 20px 0px;
}
.nav a {
  text-decoration: none;
  color: black;
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
