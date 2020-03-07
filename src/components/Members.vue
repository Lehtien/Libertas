<template>
  <section>
    <h3 :class="{ txtmember: flg }" v-observe-visibility="visibilityChanged">
      MEMBERS
    </h3>
    <div class="h">
      <Character
        position="true"
        imgsrc="images/chrss/h.jpg"
        charName="The Weakest Cuticle"
        :chrss="chrss[0]"
      />
    </div>
    <div class="m">
      <Character
        imgsrc="images/chrss/m.jpg"
        charName="愛の人"
        :chrss="chrss[1]"
      />
    </div>
    <Character
      position="true"
      imgsrc="images/chrss/t.jpg"
      charName="撮の人"
      :chrss="chrss[2]"
    />
    <Character
      imgsrc="images/chrss/e.jpg"
      charName="廃の人"
      :chrss="chrss[3]"
    />
    <Character
      position="true"
      imgsrc="images/chrss/k.jpg"
      charName="天使の人"
      :chrss="chrss[4]"
    />
    <div class="mr">
    <Character
      imgsrc="images/chrss/mr.jpg"
      charName="食品テロリスト"
      :chrss="chrss[5]"
    />
    </div>
    <div class="r">
      <Character
        position="true"
        imgsrc="images/chrss/r.jpg"
        charName="夜更けの人"
        :chrss="chrss[6]"
      />
    </div>
    <div class="hp">
      <Character
        imgsrc="images/chrss/hp.jpg"
        charName="神の人"
        :chrss="chrss[7]"
      />
    </div>
    <div class="n">
      <Character
        position="true"
        imgsrc="images/chrss/n.jpg"
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
import Character from "./Character";
const Modal = () => import("./Modal");

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
      "images/chrss/h/h1.jpg",
      "images/chrss/h/h2.jpg",
      "images/chrss/h/h3.jpg",
      "images/chrss/h/h4.jpg"
    ];
    const m = [
      "images/chrss/m/m1.jpg",
      "images/chrss/m/m2.jpg",
      "images/chrss/m/m3.jpg",
      "images/chrss/m/m4.jpg"
    ];
    const t = [
      "images/chrss/t/t1.jpg",
      "images/chrss/t/t2.jpg",
      "images/chrss/t/t3.jpg",
      "images/chrss/t/t4.jpg"
    ];
    const e = [
      "images/chrss/e/e1.jpg",
      "images/chrss/e/e2.jpg",
      "images/chrss/e/e3.jpg",
      "images/chrss/e/e4.jpg"
    ];
    const k = [
      "images/chrss/k/k1.jpg",
      "images/chrss/k/k2.jpg",
      "images/chrss/k/k3.jpg",
      "images/chrss/k/k4.jpg"
    ];
    const mr = [
      "images/chrss/mr/mr1.jpg",
      "images/chrss/mr/mr2.jpg",
      "images/chrss/mr/mr3.jpg",
      "images/chrss/mr/mr4.jpg"
    ];
    const r = [
      "images/chrss/r/r1.jpg",
      "images/chrss/r/r2.jpg",
      "images/chrss/r/r3.jpg",
      "images/chrss/r/r4.jpg"
    ];
    const hp = [
      "images/chrss/hp/hp1.jpg",
      "images/chrss/hp/hp2.jpg",
      "images/chrss/hp/hp3.jpg",
      "images/chrss/hp/hp4.jpg"
    ];
    const n = [
      "images/chrss/n/n1.jpg",
      "images/chrss/n/n2.jpg",
      "images/chrss/n/n3.jpg",
      "images/chrss/n/n4.jpg"
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
  color: rgb(0, 0, 0);
}

h3.txtmember {
  opacity: 1;
  transition: opacity 0.5s;
}
</style>
