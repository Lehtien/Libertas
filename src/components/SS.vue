<template>
  <div class="SSgrp" v-observe-visibility="visibilityChanged">
    <h3 :class="{ activeSS: isVisible }">ScreenShots</h3>
    <div class="loop_ss" :class="{ activeSS: isVisible }">
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ffxiv_20191117_200227_794.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ffxiv_20191112_211600_691.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191030_231857_715.jpg"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_215932_651.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\m1.png"
          alt="NoImage"
        />
      </div>
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ffxiv_20191117_200227_794.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ffxiv_20191112_211600_691.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191030_231857_715.jpg"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_215932_651.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\m1.png"
          alt="NoImage"
        />
      </div>
    </div>
    <div class="loop_ss_rev" :class="{ activeSS: isVisible }">
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_221057_256.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20190921_005446_385.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20190922_104320_858.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_215048_954.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\m3.png"
          alt="NoImage"
        />
      </div>
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_221057_256.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20190921_005446_385.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20190922_104320_858.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ffxiv_20191014_215048_954.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\m3.png"
          alt="NoImage"
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
import Modal from "./Modal";
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
    visibilityChanged(isVisible, entry) { // eslint-disable-line
      this.isVisible = isVisible;
    },
    openModal(event) {
      this.showContent = true;
      this.imgUri = event.target.src;

      this.currentY = window.pageYOffset;
      document.querySelector("body").style.position = "fixed";
      document.querySelector("body").style.top = `-${this.currentY}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
.SSgrp {
  margin-top: 7vw;
}
.loop_ss {
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  opacity: 0;
  .ss {
    animation: infinity-loop 30s infinite linear 1s both;
  }
  overflow: hidden;
}
.loop_ss_rev {
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  opacity: 0;
  .ss {
    animation: infinity-loop 30s infinite reverse linear 1s both;
  }
  overflow: hidden;
}

// common
.activeSS {
  transition: opacity 1.5s;
  opacity: 1;
}
.ss_img {
  align-self: center;
  width: 30vw;
  cursor: none;
  transition: transform 1s, box-shadow 1s;
  margin: 0px 3px 15px;
}
.ss_img:hover {
  box-shadow: 3px 1px 3px rgba(255, 255, 255, 1);
  transform: translateY(-1px);
  transition: transform 1s, box-shadow 1s;
}
.ss {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
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
  color: aquamarine;
}
h3.activeSS {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
