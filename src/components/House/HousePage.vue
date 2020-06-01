<template>
  <div class="housepage">
    <p class="title">HOUSING</p>
    <House
      :house-small="fcHouseSmall"
      :house-large="fcHouseLarge"
      houseName="かんぱにの部屋"
      class="fc-house"
    />
    <House
      :house-small="hHouseSmall"
      :house-large="hHouseLarge"
      houseName="ふぁっしょんりーだーの部屋"
      class="h-house"
    />
    <House
      :house-small="mHouseSmall"
      :house-large="mHouseLarge"
      houseName="愛嬌の部屋"
      class="m-house"
    />
    <House
      :house-small="tHouseSmall"
      :house-large="tHouseLarge"
      houseName="撮の部屋"
      class="t-house"
    />
    <House
      :house-small="eHouseSmall"
      :house-large="eHouseLarge"
      houseName="廃の部屋"
      class="e-house"
    />
    <House
      :house-small="kHouseSmall"
      :house-large="kHouseLarge"
      houseName="天使の部屋"
      class="k-house"
    />
    <House
      :house-small="mrHouseSmall"
      :house-large="mrHouseLarge"
      houseName="美食テロリスト育成学校"
      class="mr-house"
    />
    <House
      :house-small="nHouseSmall"
      :house-large="nHouseLarge"
      houseName="猫の部屋"
      class="n-house"
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
        "images/house/fc/fc_small/05_small.jpg",
        "images/house/fc/fc_small/06_small.jpg"
      ];
    },
    fcHouseLarge() {
      return [
        "images/house/fc/fc_large/01_large.jpg",
        "images/house/fc/fc_large/02_large.jpg",
        "images/house/fc/fc_large/03_large.jpg",
        "images/house/fc/fc_large/04_large.jpg",
        "images/house/fc/fc_large/05_large.jpg",
        "images/house/fc/fc_large/06_large.jpg"
      ];
    },
    hHouseSmall() {
      return [
        "images/house/h/h_small/01_small.jpg",
        "images/house/h/h_small/02_small.jpg",
        "images/house/h/h_small/03_small.jpg",
        "images/house/h/h_small/04_small.jpg"
      ];
    },
    hHouseLarge() {
      return [
        "images/house/h/h_large/01_large.jpg",
        "images/house/h/h_large/02_large.jpg",
        "images/house/h/h_large/03_large.jpg",
        "images/house/h/h_large/04_large.jpg"
      ];
    },
    mHouseSmall() {
      return [
        "images/house/m/m_small/01_small.jpg",
        "images/house/m/m_small/02_small.jpg",
        "images/house/m/m_small/03_small.jpg",
        "images/house/m/m_small/04_small.jpg"
      ];
    },
    mHouseLarge() {
      return [
        "images/house/m/m_large/01_large.jpg",
        "images/house/m/m_large/02_large.jpg",
        "images/house/m/m_large/03_large.jpg",
        "images/house/m/m_large/04_large.jpg"
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
    eHouseSmall() {
      return [
        "images/house/e/e_small/01_small.jpg",
        "images/house/e/e_small/02_small.jpg",
        "images/house/e/e_small/03_small.jpg",
        "images/house/e/e_small/04_small.jpg"
      ];
    },
    eHouseLarge() {
      return [
        "images/house/e/e_large/01_large.jpg",
        "images/house/e/e_large/02_large.jpg",
        "images/house/e/e_large/03_large.jpg",
        "images/house/e/e_large/04_large.jpg"
      ];
    },
    kHouseSmall() {
      return [
        "images/house/k/k_small/01_small.jpg",
        "images/house/k/k_small/02_small.jpg",
        "images/house/k/k_small/03_small.jpg",
        "images/house/k/k_small/04_small.jpg"
      ];
    },
    kHouseLarge() {
      return [
        "images/house/k/k_large/01_large.jpg",
        "images/house/k/k_large/02_large.jpg",
        "images/house/k/k_large/03_large.jpg",
        "images/house/k/k_large/04_large.jpg"
      ];
    },
    mrHouseSmall() {
      return [
        "images/house/mr/mr_small/01_small.jpg",
        "images/house/mr/mr_small/02_small.jpg",
        "images/house/mr/mr_small/03_small.jpg",
        "images/house/mr/mr_small/04_small.jpg"
      ];
    },
    mrHouseLarge() {
      return [
        "images/house/mr/mr_large/01_large.jpg",
        "images/house/mr/mr_large/02_large.jpg",
        "images/house/mr/mr_large/03_large.jpg",
        "images/house/mr/mr_large/04_large.jpg"
      ];
    },
    nHouseSmall() {
      return [
        "images/house/n/n_small/01_small.jpg",
        "images/house/n/n_small/02_small.jpg",
        "images/house/n/n_small/03_small.jpg",
        "images/house/n/n_small/04_small.jpg"
      ];
    },
    nHouseLarge() {
      return [
        "images/house/n/n_large/01_large.jpg",
        "images/house/n/n_large/02_large.jpg",
        "images/house/n/n_large/03_large.jpg",
        "images/house/n/n_large/04_large.jpg"
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
