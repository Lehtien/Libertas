<template>
  <div
    class="imgblock"
    :class="[position ? 'L' : 'R']"
    v-observe-visibility="visibilityChanged"
    v-lazy-container="{ selector: 'input' }"
  >
    <canvas id="square" :class="{ active: isVisible }"></canvas>
    <input
      type="image"
      class="img"
      :class="{ active: isVisible, finish: finished }"
      @click="openModal"
      :data-src="imgsrc"
      alt="NoImage"
    />
    <article class="chrName" :class="{ active: isVisible }">
      {{ charName }}
    </article>
    <CharSS :isVisible="isVisible" :position="position" :chrss="chrss" />
  </div>
</template>

<script>
import CharSS from "./CharSS";
export default {
  components: {
    CharSS
  },
  props: {
    position: String,
    imgsrc: String,
    charName: String,
    chrss: Array
  },
  data() {
    return {
      isVisible: true,
      finished: true
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (!this.isVisible) {
        //this.isVisible = isVisible;
      }
    },
    openModal(event) {
      this.$parent.showContent = true;
      this.$parent.imgUri = event.target.src.replace(/.jpg/, "_large.jpg"); // modal表示画像のurl

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
  height: 28vw;
  //margin-bottom: 10%;
  #square {
    background: rgb(0, 66, 17);
    filter: blur(2px);
    width: 40vw;
    height: 22vw;
    /* transition: all 300ms 0s ease; */
    transform: translateX(-100%);
    opacity: 0;
  }
  #square.active {
    transform: translateX(6vw);
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
    border: ridge 1.5px rgb(84, 0, 87);
  }
  .img.active {
    transform: translateX(7vw);
    transition: transform 2s, opacity 3s, box-shadow 1s;
    opacity: 1;
  }
  .img.active.finish:hover {
    box-shadow: 6px 6px 5px rgb(172, 172, 172);
    transform: translate(calc(7vw + #{$diff}), $diff);
    transition: transform 1s, box-shadow 1s;
  }
  .chrName {
    position: absolute;
    left: 40%;
    bottom: 20%;
    transform: translateY(-20px);
    opacity: 0;
    color: rgb(255, 255, 255);
    font-size: 5vw;
    font-family: "MS Mincho";
    text-shadow: 0.4vw 0.4vw 3px rgb(0, 0, 0);
    pointer-events: none;
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
  overflow: hidden;
  position: relative;
  height: 28vw;
  #square {
    background: rgb(255, 216, 231);
    filter: blur(5px);
    position: absolute;
    right: -50px;
    width: 48vw;
    opacity: 0;
  }
  #square.active {
    right: 6vw;
    transition: right 1s, opacity 1s;
    opacity: 1;
  }
  .img {
    height: auto;
    max-width: 40vw;
    position: absolute;
    top: 10px;
    right: -50%;
    opacity: 0;
    cursor: none;
    border: ridge 1.5px rgb(0, 65, 45)
  }
  .img.active {
    right: 7vw;
    transition: right 2s, transform 2s, opacity 3s, box-shadow 1s;
    opacity: 1;
  }
  .img.active.finish:hover {
    box-shadow: 6px 6px 5px rgb(0, 0, 0);
    transform: translate(-5px, -5px);
    transition: transform 1s, box-shadow 1s;
  }
  .chrName {
    position: absolute;
    right: 46%;
    bottom: 20%;
    transform: translateY(-100px);
    opacity: 0;
    color: rgb(0, 0, 0);
    font-size: 5vw;
    font-family: "MS Mincho";
    text-shadow: 0.4vw 0.4vw 3px rgb(155, 155, 155);
    pointer-events: none;
  }
  .chrName.active {
    transform: rotate3d(1, 1, 0, 30deg);
    transition-delay: 3s;
    transition: transform 3s, opacity 3s;
    opacity: 1;
  }
}

.h {
  .imgblock {
    .chrName {
      bottom: 10%;
      left: 10%;
      //text-shadow: 0.4vw 0.4vw 3px rgb(94, 94, 94);
    }
  }
}
.r {
  .imgblock {
    height: 48vw;
    #square {
      height: 46.5vw;
      width: 60vw;
      position: relative;
    }
    .img {
      max-width: 25vw;
      left: 11vw;
    }
    .chrName {
      left: 35%;
      text-shadow: 0.4vw 0.4vw 3px rgb(94, 94, 94);
    }
  }
}

.hp {
  .imgblock {
    height: 30vw;
    #square {
      width: 70vw;
      height: 27vw;
    }
    .img {
      max-width: 56vw;
    }
    .chrName {
      right: 51%;
      bottom: 13%;
    }
  }
}

.m {
  .imgblock {
    height: 38vw;
    #square {
      height: 35vw;
      width: 40vw;
    }
    .img {
      max-width: 30vw;
    }
    .chrName {
      right: 33%;
    }
  }
}

.mr {
  .imgblock {
    .chrName {
      right: 25%;
    }
  }
}
</style>
