<template>
  <div class="housepage">
    <p class="title">HOUSING</p>
    <House
      :house-small="fcHouseSmall"
      :house-large="fcHouseLarge"
      houseName="かんぱにの家"
      class="fc-house"
    />
    <House
      :house-small="tHouseSmall"
      :house-large="tHouseLarge"
      houseName="撮の家"
      class="t-house"
    />
    <transition name="toppage">
      <a v-scroll-to="'.housepage'" class="scroll-top" v-show="isTopBtn"
        >↑ Top</a
      >
    </transition>
    <div class="arrow" v-show="showArrow"></div>
    <Nav />
    <article id="rights">
      <p>
        記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。
      </p>
      <p>
        Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.
      </p>
    </article>
    <ThreeD />
    <Sandstorm />
  </div>
</template>
<script>
import { throttle } from "throttle-debounce";
import House from "./House";
import ThreeD from "../ThreeD";
import Nav from "../Navigator";
import Sandstorm from "../Sandstorm";
export default {
  components: {
    House,
    ThreeD,
    Nav,
    Sandstorm
  },
  data() {
    return {
      scrollY: 0,
      showArrow: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    // スクロール値の取得
    onScroll: throttle(300, function() {
      this.scrollY = window.pageYOffset;
      const windowBottom =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (this.scrollY >= windowBottom) {
        this.showArrow = false;
      } else {
        this.showArrow = true;
      }
    })
  },
  computed: {
    fcHouseSmall() {
      return [
        "images/house/fc/fc_small/01_small.jpg",
        "images/house/fc/fc_small/02_small.jpg",
        "images/house/fc/fc_small/03_small.jpg",
        "images/house/fc/fc_small/04_small.jpg",
        "images/house/fc/fc_small/05_small.jpg"
      ];
    },
    fcHouseLarge() {
      return [
        "images/house/fc/fc_large/01_large.jpg",
        "images/house/fc/fc_large/02_large.jpg",
        "images/house/fc/fc_large/03_large.jpg",
        "images/house/fc/fc_large/04_large.jpg",
        "images/house/fc/fc_large/05_large.jpg"
      ];
    },
    tHouseSmall() {
      return [
        "images/house/t/t_small/01_small.jpg",
        "images/house/t/t_small/02_small.jpg",
        "images/house/t/t_small/03_small.jpg",
        "images/house/t/t_small/04_small.jpg"
      ];
    },
    tHouseLarge() {
      return [
        "images/house/t/t_large/01_large.jpg",
        "images/house/t/t_large/02_large.jpg",
        "images/house/t/t_large/03_large.jpg",
        "images/house/t/t_large/04_large.jpg"
      ];
    },
    isTopBtn() {
      return this.scrollY > 300 ? true : false;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 5vw;
  margin-top: 0;
  margin-left: 5%;
  font-style: italic;
  text-decoration: underline;
  transform: rotate(-5deg);
  color: #002e19;
}
div[class*="-house"] {
  margin-bottom: 7%;
}

.toppage-enter-active,
.toppage-leave-active {
  transition: opacity 1s;
}
.toppage-enter,
.toppage-leave-to {
  opacity: 0;
}
</style>
