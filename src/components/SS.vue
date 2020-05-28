<template>
  <div class="SSgrp" v-observe-visibility="visibilityChanged">
    <h3 :class="{ activeSS: isVisible }">ScreenShots</h3>
    <div class="loop_ss" :class="{ activeSS: isVisible }">
      <div class="ss" v-for="n in 2" :key="'div-' + n">
        <input
          type="image"
          class="ss_img"
          v-for="n in 6"
          :src="'images/ss/s' + n + '.jpg'"
          :key="n"
          @click="openModal"
        />
      </div>
    </div>
    <div class="loop_ss_rev" :class="{ activeSS: isVisible }">
      <div class="ss" v-for="n in 2" :key="'div-' + n">
        <input
          type="image"
          class="ss_img"
          v-for="n in 6"
          :src="'images/ss/s' + (n + 6) + '.jpg'"
          :key="n"
          @click="openModal"
        />
      </div>
    </div>
    <div class="loop_ss" :class="{ activeSS: isVisible }">
      <div class="ss" v-for="n in 2" :key="'div-' + n">
        <input
          type="image"
          class="ss_img"
          v-for="n in 6"
          :src="'images/ss/s' + (n + 12) + '.jpg'"
          :key="n"
          @click="openModal"
        />
      </div>
    </div>
    <div class="loop_ss_rev" :class="{ activeSS: isVisible }">
      <div class="ss" v-for="n in 2" :key="'div-' + n">
        <input
          type="image"
          class="ss_img"
          v-for="n in 6"
          :src="'images/ss/s' + (n + 18) + '.jpg'"
          :key="n"
          @click="openModal"
        />
      </div>
    </div>
    <Modal
      :showContent="showContent"
      @isS="isShow"
      :imgUri="imgUri"
      :currentY="currentY"
    />
  </div>
</template>

<script>
const Modal = () => import("./Modal");
export default {
  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
      imgUri: "",
      isVisible: false,
      currentY: 0
    };
  },
  methods: {
    isShow() {
      this.showContent = false;
    },
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      if (!isVisible) return;
    },
    openModal(event) {
      this.showContent = true;
      this.imgUri = event.target.src.replace(/ss/, "ss_large"); // modal表示画像のurl

      this.currentY = window.pageYOffset;
      document.querySelector("body").style.position = "fixed";
      document.querySelector("body").style.top = `-${this.currentY}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.SSgrp {
  position: relative;
  margin-top: 5vw;
}
.loop_ss {
  position: relative;
  display: flex;
  opacity: 0;
  width: 100%;
  .ss {
    animation: infinity-loop 20s infinite linear 1s both;
    // animation-play-state: paused;
  }
  overflow: hidden;
  min-height: 27vw;
}
.loop_ss_rev {
  position: relative;
  display: flex;
  opacity: 0;
  width: 100%;
  .ss {
    animation: infinity-loop 30s infinite reverse linear 1s both;
    // animation-play-state: paused;
  }
  overflow: hidden;
  min-height: 27vw;
}

// common
.activeSS {
  transition: opacity 1.5s;
  opacity: 1;
}
.ss_img {
  align-self: center;
  cursor: none;
  transition: transform 1s, box-shadow 1s;
  margin: 0 0.2vh 0.5vw;
  border: solid 1px rgb(23, 58, 23);
  @media screen and (max-width: 559px) {
    max-width: 110px;
  }
}
.ss_img:hover {
  box-shadow: 3px 3px 3px rgba(255, 255, 255, 1);
  transform: translateY(-1px);
  transition: transform 1s, box-shadow 1s;
}
.ss {
  display: flex;
}
@keyframes infinity-loop {
  from {
    transform: translateX(0vw);
  }
  to {
    transform: translateX(-100%);
  }
}

// text
h3 {
  font-size: 5vw;
  font-style: italic;
  text-decoration: underline;
  position: relative;
  left: 5vw;
  transform: rotate(-5deg);
  display: inline-block;
  opacity: 0;
  will-change: opacity;
  color: rgb(0, 0, 0);
}
h3.activeSS {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
