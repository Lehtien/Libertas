<template>
  <div
    v-lazy-container="{ selector: 'input' }"
    v-observe-visibility="visibilityChanged"
    class="house"
    :class="{ active: isVisible }"
  >
    <p class="name">- {{ houseName }} -</p>
    <!-- <input type="image" class="main-img" :data-src="current" alt="NoImage" /> -->
    <div class="main-block">
      <transition-group name="fade">
        <input
          type="image"
          class="main-img"
          v-for="(image, index) in houseLarge"
          :data-src="image"
          :key="index"
          @click="selectImg(index)"
          v-show="current[index]"
        />
      </transition-group>
    </div>
    <div class="sub-img">
      <input
        type="image"
        :class="['img' + index, { active: isVisible }]"
        v-for="(image, index) in houseSmall"
        :data-src="image"
        :key="index"
        @click="selectImg(index)"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    houseSmall: Array,
    houseLarge: Array,
    houseName: String
  },
  data() {
    return {
      isVisible: false,
      current: Array(this.houseSmall.length).fill(false)
    };
  },
  mounted() {
    this.current.splice(0, 1, true);
    // console.log(this.houseName); // eslint-disable-line no-console
  },
  methods: {
    visibilityChanged(isVisible) {
      // this.isVisible = isVisible;
      if (!this.isVisible) this.isVisible = isVisible;
    },
    selectImg(index) {
      for (let i = 0; i < this.current.length; i++) {
        this.current.splice(i, 1, false);
      }
      this.current.splice(index, 1, true);
    }
  }
};
</script>

<style lang="scss" scoped>
// 家の名前
.name {
  font-family: serif, sans-serif;
  background: linear-gradient(0deg, #45ff7d, #007c45);
  background-clip: text;
  color: transparent;
  margin: 0;
  font-size: 1.8vw;
  position: relative;
  left: 23%;
  display: inline;
}
// 大画像
.main-block {
  position: relative;
  height: 36vw;
}
.main-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  max-width: 60%;
  margin: 0.3% auto;
  &[lazy="loaded"] {
    border: 0.2em solid black;
  }
}
// 小画像
.sub-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: 0 auto;
  [class^="img"] {
    width: 100%;
    height: auto;
    min-width: 0;
    margin: 0 0.1%;
    opacity: 0;
    border: solid 1px white;
    &:hover {
      transform: scale(0.98);
    }
  }
}
@for $i from 0 to 7 {
  .img#{$i}.active {
    opacity: 1;
    transform: translateX(0);
    transition: transform 0.3s, opacity 3s;
    animation: transformdelay 0.3s * ($i + 1);
  }
}
@keyframes transformdelay {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}
// 切り替え
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
// 全体
.house {
  opacity: 0;
  &.active {
    opacity: 1;
    transition: opacity 1s;
  }
}
input[type="image"] {
  cursor: none;
}

.fc-house .main-block {
  height: 28vw;
}
</style>
