<template>
  <div refs="canvas" class="home">
  </div>
</template>

<script>
import p5 from 'p5';

export default {
name: 'MyProfile',
methods: {
  createSketch(p) {
    let vertices;
    let customFont;

    p.preload = () => {
      const url = "https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.otf";  
      customFont = p.loadFont(url);
      };

    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
      p.noStroke();

      // 顔の頂点座標を設定
      vertices = [];
      vertices[0] = p.createVector(0, -100, 0); // 顔の中心
      vertices[1] = p.createVector(-50, 50, 50); // 鼻先
      vertices[2] = p.createVector(50, 50, 50);  // 鼻先
      vertices[3] = p.createVector(-50, -50, -50); // 顎
      vertices[4] = p.createVector(50, -50, -50);  // 顎

      p.textFont(customFont);
    };

    p.draw = () => {
      p.background(0);
      p.lights();

      const rotation = p.map(p.mouseX, 0, p.width, -p.PI, p.PI);
      p.rotateY(rotation); // マウスのX座標に応じて回転

      // マウスの座標に応じて頂点位置を更新
      vertices[0] = p.createVector(p.mouseX-window.innerWidth/2, 0, 0);
      vertices[1] = p.createVector(0, p.mouseY-window.innerHeight/2, 0);
      vertices[3] = p.createVector(0, p.mouseY-window.innerHeight/2, 0);

      p.beginShape(p.TRIANGLE_STRIP); 

      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];
        p.vertex(v.x, v.y, v.z);
      }

      p.endShape();

      p.fill(255); 
      p.textSize(30); 
      p.textAlign(p.CENTER, p.CENTER); 
      p.text("Nao Kokubo", 0, 0); 
    };
  },
},
mounted() {
  this.sketch = new p5(this.createSketch, this.$refs.canvas);
},
beforeUnmounted() {
  this.sketch.remove();
},
};
</script>

<style>
</style>