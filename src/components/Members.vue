<template>
  <section>
    <h3 :class="{ txtmember: flg }" v-observe-visibility="visibilityChanged">
      MEMBERS
    </h3>
    <Character
      position="true"
      imgsrc="images/chrss/h.png"
      charName="不毛の人"
      :chrss="chrss[0]"
    />
    <div class="m">
      <Character
        imgsrc="images/chrss/m.png"
        charName="愛の人"
        :chrss="chrss[1]"
      />
    </div>
    <Character
      position="true"
      imgsrc="images/chrss/t.png"
      charName="撮の人"
      :chrss="chrss[2]"
    />
    <Character
      imgsrc="images/chrss/e.png"
      charName="廃の人"
      :chrss="chrss[3]"
    />
    <Character
      position="true"
      imgsrc="images/chrss/k.png"
      charName="天使の人"
      :chrss="chrss[4]"
    />
    <Character
      imgsrc="images/chrss/mr.png"
      charName="食の人"
      :chrss="chrss[5]"
    />
    <div class="r">
      <Character
        position="true"
        imgsrc="images/chrss/r.png"
        charName="眠らぬの人"
        :chrss="chrss[6]"
      />
    </div>
    <div class="hp">
      <Character
        imgsrc="images/chrss/hp.png"
        charName="神の人"
        :chrss="chrss[7]"
      />
    </div>
    <div class="n">
      <Character
        position="true"
        imgsrc="images/chrss/n.png"
        charName="猫の人"
        :chrss="chrss[8]"
      />
    </div>
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
      currentY: 0,
      chrss: []
    };
  },
  methods: {
    isShow() {
      this.showContent = false;
    },
    visibilityChanged(isVisible) {
      this.flg = isVisible;
    }
  },
  created() {
    const h = [
      "images/chrss/h/h1.png",
      "images/chrss/h/h2.png",
      "images/chrss/h/h3.png",
      "images/chrss/h/h4.png"
    ];
    const m = [
      "images/chrss/m/m1.png",
      "images/chrss/m/m2.png",
      "images/chrss/m/m3.png",
      "images/chrss/m/m4.png"
    ];
    const t = [
      "images/chrss/t/t1.png",
      "images/chrss/t/t2.png",
      "images/chrss/t/t3.png",
      "images/chrss/t/t4.png"
    ];
    const e = [
      "images/chrss/e/e1.png",
      "images/chrss/e/e2.png",
      "images/chrss/e/e3.png",
      "images/chrss/e/e4.png"
    ];
    const k = [
      "images/chrss/k/k1.png",
      "images/chrss/k/k2.png",
      "images/chrss/k/k3.png",
      "images/chrss/k/k4.png"
    ];
    const mr = [
      "images/chrss/mr/mr1.png",
      "images/chrss/mr/mr2.png",
      "images/chrss/mr/mr3.png",
      "images/chrss/mr/mr4.png"
    ];
    const r = [
      "images/chrss/r/r1.png",
      "images/chrss/r/r2.png",
      "images/chrss/r/r3.png",
      "images/chrss/r/r4.png"
    ];
    const hp = [
      "images/chrss/hp/hp1.png",
      "images/chrss/hp/hp2.png",
      "images/chrss/hp/hp3.png",
      "images/chrss/hp/hp4.png"
    ];
    const n = [
      "images/chrss/n/n1.png",
      "images/chrss/n/n2.png",
      "images/chrss/n/n3.png",
      "images/chrss/n/n4.png"
    ];
    this.chrss.push(h, m, t, e, k, mr, r, hp, n);
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
