<template>
  <div id="top">
    <video
      loop
      autoplay
      muted
      playsinline
      src="../assets/FF14_marriage_hd_a.mp4"
      v-if="isPC"
    ></video>
    <img v-else src="../assets/top.jpg" />
    <h1>Libertas</h1>
    <h2>じゆうの民</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPC: false
    };
  },
  created() {
    if (window.screen.width >= 560) {
      this.isPC = true;
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  position: relative;
  top: -2.5vw;
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    //opacity: 0.9;
    box-shadow: 0px 14px 20px 0px;
  }
  img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 14px 20px 0px;
  }
  h1 {
    position: absolute;
    margin: -34% 50%;
    transform: translate(-50%);
    font-size: 5vw;
    font-family: "Times New Roman";
    letter-spacing: 5vw;
    text-indent: 5vw;
    color: rgba(205, 255, 190, 0.418);
    &::after {
      content: "";
      display: block;
      background: #e0ffcf86;
      height: 3px;
      width: 90%;
      margin: 5px 5%;
    }
  }
  h2 {
    position: absolute;
    top: 50%;
    left: 50vw;
    transform: translateX(-50%);

    font-family: 游明朝, "Yu Mincho", YuMincho, "Hiragino Mincho ProN",
      "Hiragino Mincho Pro", HGS明朝E, メイリオ, Meiryo, serif;
    font-size: 2.5vw;
    color: rgba(222, 255, 212, 0.418);

    letter-spacing: 2vw;
  }
}
</style>
