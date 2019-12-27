<template>
  <div id="top">
    <video
      loop
      autoplay
      muted
      playsinline
      src="../assets/FF14_marriage_hd_a.mp4"
    ></video>
    <h1>Libertas</h1>
  </div>
</template>

<script>
//export default {};
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
}
</style>
