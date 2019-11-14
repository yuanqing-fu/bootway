<template>
  <div class="scene-wrapper">
    <div class="scene">
      <div class="axes">
        <div class="axis x-axis"></div>
        <div class="axis y-axis"></div>
        <div class="axis z-axis"></div>
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
    </div>
    <div class="intro">This is introduction.</div>
  </div>
</template>
<style lang="scss">
.scene-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
}
.scene {
  flex: 0 0 auto;
  perspective: 800px;
  perspective-origin: center;
}
.axes {
  position: relative;
  width: 487px;
  height: 400px;
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateX(-27deg) rotateY(-29deg) rotateZ(0deg)
    translate3d(0px, 0px, 0px);
}

.axes .axis {
  position: absolute;
  background-color: $color-2;
  width: 5px;
  height: 100%;
  top: 26px;
  left: 231px;
  transform-origin: center;
  &:before {
    content: '>';
    position: absolute;
    top: -19px;
    left: -10px;
    font-size: 43px;
    transform: rotate(-90deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: -47px;
    left: -18px;
    font-size: 18px;
    transform: rotate(-90deg);
    white-space: normal;
    word-break: keep-all;
  }
}

.axes .axis.x-axis {
  transform: rotatez(90deg);
  background-color: $color-1;
  color: $color-1;
  &:after {
    content: '重要';
  }
}

.axes .axis.y-axis {
  background-color: $color-3;
  color: $color-3;
  &:after {
    content: '紧急';
    transform: rotate(-4deg);
    top: -39px;
  }
}

.axes .axis.z-axis {
  transform: rotateX(90deg);
  background-color: $color-2;
  color: $color-2;
  &:before {
    top: auto;
    bottom: -20px;
    transform: rotate(97deg);
  }
  &:after {
    content: '时间';
    top: auto;
    bottom: -50px;
    left: -15px;
  }
}

@keyframes cubeAnimate {
  0% {
    transform: translate3d(60px, 60px, -115px) rotate(1turn);
  }

  25% {
    transform: translate3d(60px, 297px, -115px) rotate(2turn);
  }

  35% {
    transform: translate3d(60px, 297px, 100px) rotate(2turn);
  }

  60% {
    transform: translate3d(298px, 297px, 100px) rotate(3turn);
  }

  75% {
    transform: translate3d(298px, 66px, 100px) rotate(4turn);
  }
  85% {
    transform: translate3d(298px, 66px, -115px) rotate(4turn);
  }
  100% {
    transform: translate3d(60px, 60px, -115px) rotate(5turn);
  }
}

.cube {
  will-change: transform;
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: translate3d(60px, 60px, 35px);
  animation: cubeAnimate 10s backwards infinite;
  &:hover {
    animation-play-state: paused;
  }
}

.cube .face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: $color-4;
  opacity: 0.9;
}

.face.front {
  background: $color-1;
  transform: translateZ(50px);
}

.face.back {
  background: $color-1;
  transform: rotateY(180deg) translateZ(50px);
}

.face.right {
  background: $color-2;
  transform: rotateY(90deg) translateZ(50px);
}

.face.left {
  background: $color-2;
  transform: rotateY(-90deg) translateZ(50px);
}

.face.top {
  background: $color-3;
  transform: rotateX(90deg) translateZ(50px);
}

.face.bottom {
  background: $color-3;
  transform: rotateX(-90deg) translateZ(50px);
}
</style>
