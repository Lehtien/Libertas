<template>
  <transition name="fade">
    <div id="overlay" v-show="showContent" @click="closeModal">
      <p @click.stop>
        <img :src="imgUri" alt="NoImage" />
      </p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    imgUri: String,
    showContent: Boolean,
    currentY: Number
  },
  methods: {
    closeModal: function() {
      document.querySelector("body").style.position = "relative";
      document.querySelector("body").style.top = "";
      window.scrollTo(0, this.currentY);
      this.$emit("isS");
    }
  }
};
</script>

<style lang="scss" scoped>
#overlay {
  z-index: 1;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border: ridge 2px #b68603;
    max-height: 90vh;
    max-width: 90vw;
  }
}

// transition fade
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: opacity 1s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
