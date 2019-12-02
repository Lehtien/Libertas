<template>
  <div class="SSgrp" v-observe-visibility="visibilityChanged">
    <h3 :class="{ activeSS: isVisible }">ScreenShots</h3>
    <div class="loop_ss" :class="{ activeSS: isVisible }">
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s1.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s2.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s3.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s4.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s5.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s6.png"
          alt="NoImage"
        />
      </div>
      <!---->
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s1.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s2.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s3.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s4.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s5.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s6.png"
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
          src="images\ss\s7.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s8.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s9.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s10.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s11.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s12"
          @click="openModal"
          src="images\ss\s12.png"
          alt="NoImage"
        />
      </div>
      <!---->
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s7.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s8.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s9.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s10.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s11.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s12"
          @click="openModal"
          src="images\ss\s12.png"
          alt="NoImage"
        />
      </div>
    </div>
    <div class="loop_ss" :class="{ activeSS: isVisible }">
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s13.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s14.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s15.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s16"
          @click="openModal"
          src="images\ss\s16.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s17.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s18.png"
          alt="NoImage"
        />
      </div>
      <!---->
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s13.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images/ss/s14.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s15.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s16"
          @click="openModal"
          src="images\ss\s16.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s17.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s18.png"
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
          src="images\ss\s19.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s20.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s21"
          @click="openModal"
          src="images\ss\s21.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s22.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s23.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s24.png"
          alt="NoImage"
        />
      </div>
      <!---->
      <div class="ss">
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s19.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s20.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img s21"
          @click="openModal"
          src="images\ss\s21.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s22.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s23.png"
          alt="NoImage"
        />
        <input
          type="image"
          class="ss_img"
          @click="openModal"
          src="images\ss\s24.png"
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
    visibilityChanged(isVisible) {
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
  display: flex;
  opacity: 0;
  .ss {
    animation: infinity-loop 60s infinite linear 1s both;
  }
  overflow: hidden;
}
.loop_ss_rev {
  position: relative;
  display: flex;
  opacity: 0;
  .ss {
    animation: infinity-loop 60s infinite reverse linear 1s both;
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
  width: 25vw;
  cursor: none;
  transition: transform 1s, box-shadow 1s;
  margin: 0px 3px 15px;
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
  color: aquamarine;
}
h3.activeSS {
  opacity: 1;
  transition: opacity 0.5s;
}

.s12 {
  width: 12vw;
}
.s16 {
  width: 15vw;
}
.s21 {
  width: 12vw;
}
</style>
