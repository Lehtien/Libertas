<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Hello Vue in CodeSandbox!" /> -->
    <Whole />
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Whole from "./components/Whole";

export default {
  name: "App",
  components: {
    Whole
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  font-family: "Times New Roman";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  color: #ffffff;
  /*margin-top: 60px;*/

  background: linear-gradient(#dfa810, #0a4e01d3, #00804f);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
