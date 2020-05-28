<template>
  <nav>
    <router-link to="/" class="to-home">Home</router-link>
    <router-link to="/house" class="to-house">Housing</router-link>
  </nav>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  right: 3%;
  display: flex;
}
a {
  position: relative;
  margin: 5%;
  color: #c58000;
  font-size: 1.5em;
  display: inline-block;
  text-decoration: none;
  cursor: none;
}
a::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background: #856100;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
a:hover::after {
  transform: scale(1, 1);
}
</style>
