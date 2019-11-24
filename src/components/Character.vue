<template>
  <div
    class="imgblock"
    :class="[position ? 'L' : 'R']"
    v-observe-visibility="visibilityChanged"
  >
    <canvas id="square" :class="{ active: isVisible }"></canvas>
    <input
      type="image"
      class="img"
      :class="{ active: isVisible, finish: finished }"
      @click="openModal"
      :src="imgsrc"
      alt="NoImage"
    />
    <article class="chrName" :class="{ active: isVisible }">
      {{ charName }}
    </article>
    <!-- <h1 class="centered" v-observe-visibility="visibilityChanged" :class='{active:isVisible}'>Scroll me</h1> -->
    <!-- <div class="box" v-scroll="handleScroll"> -->
  </div>
</template>

<script>
export default {
  props: {
    position: String,
    imgsrc: String,
    charName: String
  },
  data() {
    return {
      isVisible: true,
      finished: true
    };
  },
  methods: {
    visibilityChanged(isVisible, entry) { // eslint-disable-line
      this.isVisible = isVisible;
      if (!this.isVisible) {
        //this.isVisible = isVisible;
      }
    },
    openModal(event) {
      this.$parent.showContent = true;
      this.$parent.imgUri = event.target.src;

      const currentScrollY = window.pageYOffset;
      this.$parent.currentY = currentScrollY;
      document.querySelector("body").style.position = "fixed";
      document.querySelector("body").style.top = `-${currentScrollY}px`;
    }
  },
  watch: {
    isVisible() {
      const self = this;
      const transition = this.$el.querySelector(".img.active");
      if (transition != null) {
        self.finished = false;
        transition.addEventListener("transitionend", function fin() {
          transition.removeEventListener("transitionend", fin);
          self.finished = true;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$diff: -5px;
/// Left
.imgblock.L {
  overflow: hidden;
  position: relative;
  height: 25vw;
  //margin-bottom: 10%;
  #square {
    background: rgb(102, 165, 126);
    filter: blur(2px);
    width: 40vw;
    height: 22vw;
    /* transition: all 300ms 0s ease; */
    transform: translateX(-100%);
    opacity: 0;
  }
  #square.active {
    transform: translateX(80px);
    transition: transform 1s, opacity 1s;
    opacity: 1;
  }
  .img {
    height: auto;
    max-width: 40vw;
    position: absolute;
    left: 10px;
    top: 10px;
    transform: translateX(-150%);
    opacity: 0;
    cursor: none;
  }
  .img.active {
    transform: translateX(90px);
    transition: transform 2s, opacity 3s, box-shadow 1s;
    opacity: 1;
  }
  .img.active.finish:hover {
    box-shadow: 6px 6px 5px rgb(199, 111, 11);
    transform: translate(calc(90px + #{$diff}), $diff);
    transition: transform 1s, box-shadow 1s;
  }
  .chrName {
    position: absolute;
    left: 40%;
    bottom: 20%;
    transform: translateY(-20px);
    opacity: 0;
    color: rgb(126, 89, 40);
    font-size: 3vw;
    font-family: "MS Mincho";
  }
  .chrName.active {
    transform: rotate3d(1, 1, 0, 30deg);
    transition: transform 2s, opacity 3s;
    transition-delay: 1s;
    opacity: 1;
  }
}
// Right
.imgblock.R {
  $pos: calc(100% - 10px);
  overflow: hidden;
  position: relative;
  height: 26vw;
  #square {
    background: rgb(199, 111, 11);
    filter: blur(5px);
    position: absolute;
    right: -50px;
    width: 48vw;
    opacity: 0;
  }
  #square.active {
    right: 80px;
    transition: right 1s, opacity 1s;
    opacity: 1;
  }
  .img {
    height: auto;
    max-width: 40vw;
    position: absolute;
    top: 10px;
    right: -50%;
    /*left: 0;
    top: 0;
    */
    //transform: translateX(250%);
    opacity: 0;
    cursor: none;
  }
  .img.active {
    right: 100px;
    //transform: translateX($pos);
    transition: right 2s, transform 2s, opacity 3s, box-shadow 1s;
    opacity: 1;
  }
  .img.active.finish:hover {
    box-shadow: 6px 6px 5px rgb(102, 165, 126);
    transform: translate(-5px, -5px);
    transition: transform 1s, box-shadow 1s;
  }
  .chrName {
    position: absolute;
    right: 46%;
    bottom: 20%;
    transform: translateY(-100px);
    opacity: 0;
    color: rgb(85, 146, 76);
    font-size: 3vw;
    font-family: "MS Mincho";
  }
  .chrName.active {
    transform: rotate3d(1, 1, 0, 30deg);
    transition-delay: 3s;
    transition: transform 3s, opacity 3s;
    opacity: 1;
  }
}

.r {
  .imgblock {
    height: 46vw;
    #square {
      height: 44vw;
      width: 60vw;
      position: relative;
      left: 20px;
    }
    .img {
      max-width: 25vw;
      left: 150px;
    }
    .chrName {
      left: 40%;
    }
  }
}

.hp {
  .imgblock {
    height: 30vw;
    #square {
      width: 60vw;
      height: 26vw;
    }
    .img {
      max-width: 56vw;
    }
    .chrName {
      right: 58%;
    }
  }
}

.m {
  .imgblock {
    height: 47vw;
    #square {
      height: 42vw;
      width: 40vw;
    }
    .chrName {
      right: 41%;
    }
  }
}
</style>
