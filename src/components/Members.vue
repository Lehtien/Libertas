<template>
  <section>
    <h3 :class="{ txtmember: flg }" v-observe-visibility="visibilityChanged">
      MEMBERS
    </h3>
    <Character position="true" imgsrc="images/chr/h.jpg" charName="不毛の人" />
    <div class="m">
      <Character imgsrc="images/chr/m.png" charName="愛の人" />
    </div>
    <Character position="true" imgsrc="images/chr/t.jpg" charName="撮の人" />
    <Character imgsrc="images/chr/e.jpg" charName="廃の人" />
    <Character position="true" imgsrc="images/chr/k.jpg" charName="天使の人" />
    <Character imgsrc="images/chr/mr.png" charName="食の人" />
    <div class="r">
      <Character
        position="true"
        imgsrc="images/chr/r.png"
        charName="眠らぬの人"
      />
    </div>
    <div class="hp">
      <Character imgsrc="images/chr/hp.png" charName="神の人" />
    </div>
    <Character position="true" imgsrc="images/chr/n2.png" charName="猫の人" />
    <Modal
      :showContent="showContent"
      @isS="isShow"
      :imgUri="imgUri"
      :currentY="currentY"
    />
  </section>
</template>

<script>
//import HelloWorld from "./HelloWorld";
import Character from "./Character";
import Modal from "./Modal";

export default {
  components: {
    Character,
    Modal
  },
  data() {
    return {
      showContent: false,
      imgUri: "",
      flg: false,
      currentY: 0
    };
  },
  methods: {
    isShow() {
      this.showContent = false;
    },
    visibilityChanged(isVisible, entry) { // eslint-disable-line
      this.flg = isVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
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

h3.txtmember {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
