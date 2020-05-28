<template>
  <div class="sandstorm"></div>
</template>

<style lang="scss" scoped>
.sandstorm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/sandstorm.png");
  animation: sndstrm 1s steps(10) infinite;
  pointer-events: none;
  z-index: 10;
  opacity: 0.85;
}

@keyframes sndstrm {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 200px 500px;
  }
}
</style>
