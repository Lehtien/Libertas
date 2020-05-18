<template>
  <canvas id="thrCanvas"></canvas>
</template>

<script>
import * as THREE from "three";
import * as OIMO from "oimo";

const ss = [
  "images/board/board01.jpg",
  "images/board/board02.jpg",
  "images/board/board03.jpg",
  "images/board/board04.jpg",
  "images/board/board05.jpg",
  "images/board/board06.jpg",
  "images/board/board07.jpg",
  "images/board/board08.jpg",
  "images/board/board09.jpg",
  "images/board/board10.jpg",
  "images/board/board11.jpg",
  "images/board/board12.jpg",
  "images/board/board13.jpg",
  "images/board/board14.jpg",
  "images/board/board15.jpg",
  "images/board/board16.jpg",
  "images/board/board17.jpg",
  "images/board/board18.jpg",
  "images/board/board19.jpg",
  "images/board/board20.jpg",
  "images/board/board21.jpg"
];

export default {
  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.PerspectiveCamera(45, 16 / 9, 1, 1000);
    const light = new THREE.DirectionalLight(0xffffff, 1);
    const world = new OIMO.World({
      timestep: 1 / 24,
      iterations: 8,
      broadphase: 2, // 1: brute force, 2: sweep & prune, 3: volume tree
      worldscale: 1,
      random: true,
      info: false,
      gravity: [0, -9.8, 0]
    });
    const boardHeight = 40;
    const boardWidth = 50;
    return {
      scene,
      renderer,
      camera,
      light,
      world,
      physics: [],
      board: [],
      boardSS: ss,
      boardHeight,
      boardWidth
    };
  },
  mounted() {
    this.initOimo();
    this.initThree();
  },
  methods: {
    // 物理エンジン
    initOimo() {
      this.world.add({
        type: "box",
        size: [3000, 10, 3000],
        pos: [0, -200, 0],
        rot: [-Math.PI / 2, 0, 0],
        move: false,
        density: 1,
        friction: 0.5,
        restitution: 0.1
      });

      // boardの追加
      const intervalId = setInterval(() => {
        const physics = this.world.add({
          type: "box",
          size: [4, this.boardHeight, this.boardWidth],
          pos: [this.randomRange(-200, 200), 400, this.randomRange(-100, 100)],
          rot: [0, this.randomRange(0, 180), this.randomRange(-45, -135)],
          move: true,
          density: 1,
          friction: 0.5,
          restitution: 0.2
        });
        this.physics.push(physics);
        if (this.physics.length >= this.boardSS.length)
          clearInterval(intervalId);
      }, 4 * 1000);
    },
    // 乱数を指定範囲内で取得
    randomRange(min, max) {
      return Math.random() * (max - min) + min;
    },
    // 3Dオブジェクト
    initThree() {
      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#thrCanvas"),
        alpha: true
      });
      //let size = window.innerWidth;

      this.renderer.setSize(3000, 1500);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.shadowMap.enabled = true;

      const radian = (90 * Math.PI) / 180;
      this.camera.position.y = 300 * Math.sin(radian);
      this.camera.position.z = 300 * Math.cos(radian);
      //this.camera.position.x = 100;
      this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      //this.camera.rotation.x = Math.PI;

      // Light Settings
      this.light.position.set(-2, 20, 10);
      //this.light.rotation.y = 100;
      this.light.castShadow = true;
      // Shadow Settings
      this.light.shadow.camera.position.set(0, 100, 0);
      this.light.shadow.camera.left = -300;
      this.light.shadow.camera.right = 300;
      this.light.shadow.camera.top = 300;
      this.light.shadow.camera.bottom = -300;
      this.light.shadow.mapSize.width = 2048;
      this.light.shadow.mapSize.height = 2048;

      this.scene.add(this.light);

      // helper
      // var helper = new THREE.DirectionalLightHelper(this.light, 30);
      // this.scene.add(helper);
      // const lightHelper = new THREE.SpotLightHelper(this.light);
      // this.scene.add(lightHelper);
      // let cameraHelper = new THREE.CameraHelper(this.light.shadow.camera);
      // this.scene.add(cameraHelper);
      // var axes = new THREE.AxisHelper(1000);
      // this.scene.add(axes);

      this.createGround();
      this.createBoard();

      this.tick();
    },
    // 床の生成
    createGround() {
      const groundGeo = new THREE.PlaneGeometry(3000, 3000);
      const groundMat = new THREE.MeshStandardMaterial({
        color: 0x00a497,
        roughness: 0.8
      });
      const groundMesh = new THREE.Mesh(groundGeo, groundMat);
      groundMesh.position.y = -200;
      //groundMesh.rotation.y = Math.PI / 4;
      groundMesh.rotation.x = -Math.PI / 2;
      groundMesh.receiveShadow = true;
      this.scene.add(groundMesh);
    },
    createBoard() {
      var loader = new THREE.TextureLoader();
      const geometry = new THREE.BoxGeometry(
        1,
        this.boardHeight,
        this.boardWidth
      );
      for (let i = 0; i < this.boardSS.length; i++) {
        const texture = loader.load(this.boardSS[i]);
        const material = new THREE.MeshLambertMaterial({ map: texture });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = 400;
        mesh.castShadow = true;

        this.board.push(mesh);
        this.scene.add(this.board[i]);
      }
    },
    tick() {
      this.world.step(); // 物理エンジンの時間を進める

      // boardに物理演算を適用
      for (let i = 0; i < this.physics.length && i < this.board.length; i++) {
        this.board[i].position.copy(this.physics[i].getPosition());
        this.board[i].quaternion.copy(this.physics[i].getQuaternion());
      }

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.tick);
    }
  }
};
/*
  mounted() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#thrCanvas"),
      alpha: true
    });
    this.size = window.innerWidth * 0.5;

    //this.mesh.position.set(0, -20, 0);

    this.renderer.setSize(this.size, this.size);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.camera.position.set(0, 0, 80);

    this.light.position.set(0, 0, 10);
    this.scene.add(this.mesh);
    this.scene.add(this.light);

    this.animate();
    // resize
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.mesh.rotation.x += 0.005;
      this.mesh.rotation.y += 0.005;

      this.renderer.render(this.scene, this.camera);
    },
    handleResize() {
      this.size = window.innerWidth * 0.5;
      this.renderer.setSize(this.size, this.size);
    }
  }
};*/
</script>

<style lang="scss" scoped>
#thrCanvas {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
}
</style>
