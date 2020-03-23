<template>
  <div id="app" class="container">
    <nav-bar></nav-bar>
    <div class="col-md-2">
      <my-aside></my-aside>
    </div>
    <div class="col-md-10">内容</div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MyAside from "./components/MyAside.vue";

export default {
  name: "App",
  components: {
    NavBar,
    MyAside
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
