<template>
  <div id="cards" v-observe-visibility="visibilityChanged">
    <h3 :class="{ activeSS: isVisible }">Flick</h3>
    <div
      class="card"
      v-for="(image, index) in cards"
      :key="index"
      :style="cardStyle[index]"
      v-touch:swipe="swipe(index)"
      @mousedown.prevent="touchstart"
      @mousemove="touchmove"
      @mouseup="touchend"
      @mouseleave="touchend"
      @touchstart.prevent="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      data-canmove="true"
    >
      <img :src="image" />
    </div>
  </div>
</template>

<script>
const ss = [
  "images/cardSS/0001.jpg",
  "images/cardSS/0002.jpg",
  "images/cardSS/0003.jpg",
  "images/cardSS/0004.jpg",
  "images/cardSS/0005.jpg",
  "images/cardSS/0006.jpg",
  "images/cardSS/0007.jpg",
  "images/cardSS/0008.jpg",
  "images/cardSS/0009.jpg",
  "images/cardSS/0010.jpg",
  "images/cardSS/0011.jpg",
  "images/cardSS/0012.jpg",
  "images/cardSS/0013.jpg",
  "images/cardSS/0014.jpg",
  "images/cardSS/0015.jpg",
  "images/cardSS/0016.jpg",
  "images/cardSS/0017.jpg"
];

// swipe-translate
const translateX = (prevTransform, x) => {
  const style = prevTransform.replace(
    /translate3d\(.+?,/,
    `translate3d(${x}px,`
  );
  return style;
};

const getMaxZIndex = () => {
  const cards = document.querySelectorAll(".card");
  const zIndex = [];
  cards.forEach(card => {
    const crZIndex = card.style.zIndex;
    zIndex.push(crZIndex);
  });
  return Math.max(...zIndex);
};

export default {
  data() {
    return {
      cards: ss,
      cardStyle: [],
      isDragging: false,
      prevPosXX: 0,
      currentPosX: 0,
      isVisible: false
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
      const cards = document.querySelectorAll(".card");
      this.cardStyle = [];
      for (let i = 0; i < cards.length; i++) {
        const rot = -10 + Math.random() * 20;
        let sign = Math.floor(Math.random() * Math.floor(2));
        sign = sign === 0 ? -1 : sign;
        let transform = "";
        let transition = "";
        if (isVisible) {
          transform = `translate3d(0, ${-4 * i}px, 0) perspective(1500px)
          rotateX(30deg) rotateY(${rot / 10}deg) rotateZ(${rot}deg) scale(1)`;
          transition = `transform 1s ease-in-out ${0.2 * i}s`;
        } else {
          transform = `translate3d(${sign * 2000}px, 0, 0) perspective(1500px)
          rotateX(30deg) rotateY(${rot / 10}deg) rotateZ(${rot}deg) scale(1)`;
        }
        const styleObj = {
          transform: transform,
          transition: transition
        };
        this.cardStyle.push(styleObj);
      }
    },
    swipe(index) {
      return (direction, e) => {
        if (direction === "left" || direction === "right") {
          const posX = direction === "left" ? -2000 : 2000;
          const style = e.target.style;
          style.transform = translateX(style.transform, posX);
          e.target.dataset.canmove = false;
          if (index === 0) this.resetCardPosition();
        }
      };
    },
    // the cards position are reset when last card is flicked.
    resetCardPosition() {
      const cards = document.querySelectorAll(".card");
      //const cardsWidth = document.querySelector("#cards").clientWidth / 2 - 300;
      const scatter = async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            this.cardStyle = [];
            for (let i = 0; i < cards.length; i++) {
              const rot = -10 + Math.random() * 20;
              const sign =
                cards[i].style.transform.indexOf("-") === 12 ? 1 : -1;
              const trans = `translate3d(${sign *
                2000}px, 0, 0) perspective(1500px) rotateX(30deg) rotateY(${rot /
                10}deg) rotateZ(${rot}deg) scale(1)`;

              const styleObj = {
                transform: trans,
                transition: `transform 0.8s ease-in-out ${0.2 * i}s`
              };
              this.cardStyle.push(styleObj);
            }
            resolve();
          }, 600);
        });
      };
      scatter().then(() => {
        setTimeout(() => {
          this.cardStyle = [];
          for (let i = 0; i < cards.length; i++) {
            const rot = -10 + Math.random() * 20;

            const trans = `translate3d(0, ${-4 * i}px, 0) perspective(1500px)
                           rotateX(30deg) rotateY(${rot /
                             10}deg) rotateZ(${rot}deg) scale(1)`;

            const styleObj = {
              transform: trans,
              transition: `transform 1s ease-in-out ${0.2 * i}s`
            };
            this.cardStyle.push(styleObj);
            cards[i].style.zIndex = 0;
            cards[i].dataset.canmove = true;
          }
        }, 3800);
      });
    },
    touchstart: function(e) {
      if (e.target.dataset.canmove === "false") return;

      this.isDragging = true;
      this.prevPosX = e.changedTouches
        ? e.changedTouches[0].clientX
        : false || e.clientX;
      const prevTransform = e.target.style.transform;

      e.target.style.transform = prevTransform.replace(
        /rotateY.*scale\(.+\)/,
        "rotateY(0) rotateZ(0) scale(1.1)"
      );
      e.target.style.zIndex = getMaxZIndex() + 1;
    },
    touchmove: function(e) {
      // 押下中だったら
      if (this.isDragging) {
        // 前回座標との差分を算出
        this.currentPosX =
          (e.changedTouches
            ? e.changedTouches[0].clientX
            : false || e.clientX) - this.prevPosX;

        const style = e.target.style;
        style.transform = translateX(style.transform, this.currentPosX);

        e.target.style.transition = `transform 0s`;
      }
    },
    touchend: function(e) {
      if (this.isDragging) {
        const style = e.target.style;
        style.transform = translateX(style.transform, 0);

        let changeTransform = style.transform;
        changeTransform = changeTransform.replace(/scale\(.+\)/, `scale(1)`); // scaleの置換

        e.target.style.transform = changeTransform;
        e.target.style.transition = `transform 1s`;

        this.isDragging = false;
      }
    }
  },
  mounted() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("transitionend", function transEnd() {
        card.style.transitionDelay = "0s";
        this.removeEventListener("transitionend", transEnd);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
#cards {
  position: relative;
  width: 100%;
  height: 60vw;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  overflow: hidden;
}

#cards > .card {
  position: absolute;
  background-color: rgb(255, 255, 255);
  background-repeat: no-repeat;
  //width: 60%;
  max-width: 720px;
  height: 30vw;
  max-height: 480px;
  will-change: transform;
  border-radius: 10px;
  box-shadow: 0 12.5px 60px -10px rgba(0, 0, 0, 0.2),
    0 10px 10px -10px rgba(50, 50, 73, 0.3);
  margin-top: 5%;

  align-items: center;
  display: flex;
  justify-content: center;
  user-select: none;

  transform: translate3d(-2000px, 0, 0);
}

img {
  width: auto;
  height: auto;
  max-width: 95%;
  max-height: 90%;

  pointer-events: none;
  border: 2px #000000 solid;
}

// text
h3 {
  font-size: 5vw;
  font-style: italic;
  text-decoration: underline;
  position: absolute;
  top: 0;
  left: 5vw;
  transform: rotate(-5deg);
  display: inline-block;
  opacity: 0;
  will-change: opacity;
  color: rgb(0, 0, 0);
  margin: 0;
}
h3.activeSS {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
