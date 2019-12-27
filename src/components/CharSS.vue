<template>
  <div id="charimg" :class="[{ active: isVisible }, position ? 'T' : 'F']">
    <img
      v-for="(image, index) in chrss"
      :src="image"
      :key="index"
      :class="'img' + index"
    />
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    position: String,
    chrss: Array
  }
};
</script>

<style lang="scss" scoped>
@mixin imgstyle($flg) {
  position: absolute;
  top: 10%;

  @if ($flg == l) {
    left: 5%;
  } @else if($flg == r) {
    right: 27%;
  }
  transform-style: preserve-3d;
  perspective: 800px;
  perspective-origin: top;
  width: 15vw;
  opacity: 0;

  img {
    position: absolute;
    width: 100%;
    border: solid 2px;

    @if ($flg == l) {
      transform: rotate3d(-0.5, 1, 0, 30deg);
    } @else if($flg == r) {
      transform: rotate3d(-0.5, -1, 0, 30deg);
    }
    transition: transform 1s;
    will-change: transform;
  }

  .img0 {
    top: 0;
    left: 0;

    &:hover {
      transform: translate3d(5vw, 2vw, 300px);
    }
  }
  .img1 {
    top: 0;
    left: 16vw;

    &:hover {
      transform: translate3d(-11vw, 2vw, 300px);
    }
  }
  .img2 {
    top: 10vw;
    left: 0;

    &:hover {
      transform: translate3d(5vw, -8vw, 300px);
    }
  }
  .img3 {
    top: 10vw;
    left: 16vw;

    &:hover {
      transform: translate3d(-11vw, -8vw, 300px);
    }
  }
}

// T is right position
// F is left position
#charimg.T {
  @include imgstyle(r);
}
#charimg.F {
  @include imgstyle(l);
}
#charimg.active {
  opacity: 1;
  transition: opacity 1.5s;
  transition-delay: 0.5s;
}

.hp {
  #charimg {
    .img2 {
      top: 11vw;
    }
  }
}

.n {
  #charimg {
    .img2 {
      width: 50%;
      left: 4vw;
    }
  }
}
</style>
