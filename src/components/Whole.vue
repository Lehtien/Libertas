<template>
  <div id="whole">
    <div id="loading">
      <Loading />
    </div>
    <div id="contents" class="waiting">
      <!-- <div id="contents"> -->
      <Top />
      <Members />
      <FlickSS />
      <SS />
      <transition name="toppage">
        <a v-scroll-to="'#whole'" class="scroll-top" v-show="isTopBtn">↑ Top</a>
      </transition>
      <div class="arrow" v-show="showArrow"></div>
      <article id="rights">
        <p>
          記載されている会社名・製品名・システム名などは、各社の商標、または登録商標です。
        </p>
        <p>
          Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.
        </p>
      </article>
      <Nav />

      <!-- <Fluid /> -->
      <!-- <ThreeD /> -->
    </div>
    <Sandstorm />
  </div>
</template>

<script>
import Loading from "./Loading";
import Top from "./Top";
import Members from "./Members";
const SS = () => import("./SS");
//const Fluid = () => import("./FluidBtm");
import Sandstorm from "./Sandstorm";
// import ThreeD from "./ThreeD";
const FlickSS = () => import("./FlickSS");
import Nav from "./Navigator";

import { throttle } from "throttle-debounce";

export default {
  //name: "App",
  components: {
    Loading,
    Top,
    Members,
    SS,
    //Fluid,
    Sandstorm,
    // ThreeD,
    FlickSS,
    Nav
  },
  data() {
    return {
      scrollY: 0,
      windowWidth: 0,
      showArrow: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);

    const load = document.getElementById("loading");
    const contents = document.getElementById("contents");
    if (isBeforePage) {
      load.remove();
      contents.classList.remove("waiting");
      return;
    }

    window.addEventListener("load", function loading() {
      const video = document.querySelector("video");
      //alert("ページが読み込まれました！");
      if (video === null) {
        // video表示しない場合(smartphone)
        //loadingのdivを非表示に
        load.remove();
        //contentsのdivを表示
        contents.classList.remove("waiting");
      } else {
        // video表示する場合
        video.load();
        video.play();
        video.addEventListener("canplaythrough", function videoPlay() {
          //loadingのdivを非表示に
          //load.style.display = "none";
          load.remove();
          //contentsのdivを表示
          contents.classList.remove("waiting");
          this.removeEventListener("canplaythrough", videoPlay);
        });
      }
      this.removeEventListener("load", loading);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    isTopBtn() {
      return this.scrollY > 300 ? true : false;
    }
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
  beforeRouteEnter(to, from, next) {
    if (from.name !== null) isBeforePage = true;
    next();
  }
};
let isBeforePage = false; // 遷移前ページの存在(ローディング画面を表示するかどうか)

let cursorX;
let cursorY;
// cursol, stalker
const pointer = document.createElement("div");
pointer.id = "pointer";
document.body.appendChild(pointer);

const cursor = document.createElement("div"); //divタグを作成
cursor.id = "cursor"; //IDを付与
//document.body.appendChild(cursor); //bodyの最後に挿入
pointer.appendChild(cursor);

const stalker = document.createElement("div");
stalker.id = "stalker";
//document.body.appendChild(stalker);
pointer.appendChild(stalker);

const stalker2 = document.createElement("div");
stalker2.id = "stalker2";
//document.body.appendChild(stalker2);
pointer.appendChild(stalker2);

let i = 0;
let enableCall = true;
document.addEventListener("mousemove", e => {
  i++;
  cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px) rotate(45deg)`;

  if (!enableCall) return;
  enableCall = false;
  stalker.style.transform = `translate(${e.clientX}px, ${
    e.clientY
  }px) rotate3d(-1, -1, 0, ${30 + i}deg)`;
  stalker2.style.transform = `translate(${e.clientX}px, ${
    e.clientY
  }px) rotate3d(1, 1, 1, ${30 + i}deg)`;

  setTimeout(() => (enableCall = true), 14);

  cursorX = e.clientX;
  cursorY = e.clientY;
});

document.addEventListener("mouseleave", () => {
  cursor.style.opacity = "0";
  stalker.style.opacity = "0";
  stalker2.style.opacity = "0";
});
document.addEventListener("mouseenter", () => {
  cursor.style.opacity = "1";
  stalker.style.opacity = "1";
  stalker2.style.opacity = "1";
});
document.addEventListener("mousedown", () => {
  stalker.style.transform = `translate(${cursorX}px,${cursorY}px)
  rotate3d(-1, 1, 0, 70deg) scale(1.5)`;
  stalker2.style.transform = `translate(${cursorX}px,${cursorY}px)
  rotate3d(1, 1, 1, -90deg) scale(2)`;
});
document.addEventListener("mouseup", () => {
  i = 0;
  stalker.style.transform = `translate(${cursorX}px,${cursorY}px)
  rotate3d(-1, -1, 0, 30deg) scale(1)`;
  stalker2.style.transform = `translate(${cursorX}px,${cursorY}px)
  rotate3d(1, 1, 1, 30deg) scale(1)`;
});
</script>

<style lang="scss">
html,
body {
  position: relative;
  width: 100%;
  cursor: none;
  margin: 0;
  padding: 0;
  //@at-root
  height: 100%;

  // background-image: url("../assets/wlpp2.png");
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-attachment: fixed;

  animation: fadeIn 1s ease 0s 1 normal;
}
html {
  overflow-x: hidden;
  overflow-y: scroll;
}
body {
  background: #ccddb4;
}
// #whole {
//   background-image: url("../assets/fluid.svg");
//   background-size: cover;
// }
.waiting {
  display: none;
}

#pointer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  pointer-events: none;
  z-index: 999;
  @media screen and (max-width: 559px) {
    display: none;
  }
}

#cursor {
  //transform: translate(0px, 0px);
  pointer-events: none;
  position: fixed;
  top: -4px; //座標調節（カーソル位置と円の中心を合わせる）
  left: -4px; //座標調節（カーソル位置と円の中心を合わせる）
  width: 10px; //カーソルの直径
  height: 10px; //カーソルの直径
  background: rgba(0, 0, 0, 0.8);
  //opacity: 0;
  z-index: 999;
  //transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
  transition: opacity 0.3s ease-in-out;
  will-change: transform;
}

#stalker {
  pointer-events: none;
  position: fixed;
  top: -13px; //座標調節（カーソル位置と円の中心を合わせる）
  left: -13px; //座標調節（カーソル位置と円の中心を合わせる）
  width: 30px; //マウスストーカーの直径
  height: 30px; //マウスストーカーの直径
  background: rgba(0, 0, 0, 0);
  //opacity: 0;
  transition: transform 0.2s, opacity 0.3s;
  transition-timing-function: ease-out;
  z-index: 999;
  border: solid 1px #000000;
  will-change: transform;
}

#stalker2 {
  pointer-events: none;
  position: fixed;
  top: -15px; //座標調節（カーソル位置と円の中心を合わせる）
  left: -15px; //座標調節（カーソル位置と円の中心を合わせる）
  width: 30px; //マウスストーカーの直径
  height: 30px; //マウスストーカーの直径
  background: rgba(0, 0, 0, 0);
  //opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
  //animation: spin 5s linear infinite;
  transition-timing-function: ease-out;
  z-index: 999;

  border: solid 1px #ffffff;
  will-change: transform;
}

// fade
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// scroll arrow
.arrow {
  display: block;
  position: fixed;
  //top: 0;
  bottom: 15px;
  //left: 50vw; //calc(50% - 16px);
  left: 0;
  right: 0;
  margin: auto;
  width: 14px;
  height: 14px;
  border-top: 2px solid rgb(255, 255, 255);
  border-right: 2px solid rgb(255, 255, 255);
  //transform: rotate(135deg);
  //opacity: 0.5;
  animation: sdb 3s infinite;
}

@keyframes sdb {
  0% {
    transform: rotate(135deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: rotate(135deg) translate(7px, -7px);
    opacity: 0;
  }
}

// go to top
.scroll-top {
  font-size: 1.7vw;
  color: rgb(0, 0, 0);
  position: fixed;
  bottom: 10%;
  right: 3%;
  opacity: 0.5;
  text-shadow: 1px 1px 2px #ffffff, -1px 1px 2px #ffffff, 1px -1px 2px #ffffff,
    -1px -1px 2px #ffffff, 1px 0px 2px #ffffff, 0px 1px 2px #ffffff,
    -1px 0px 2px #ffffff, 0px -1px 2px #ffffff;

  display: inline-block;
  &::after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: "";
    width: 0;
    height: 1px;
    background-color: #000000;
    transition: 0.3s;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }
}

.toppage-enter-active,
.toppage-leave-active {
  transition: opacity 1s;
}
.toppage-enter,
.toppage-leave-to {
  opacity: 0;
}

// All rights reserved
#rights {
  text-align: center;
  font-size: 0.8vw;
  margin: 110px 0 50px 0;
  color: rgba(0, 0, 0, 0.7);
}
</style>
