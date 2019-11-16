<template>
  <div class="scene-wrapper">
    <div class="scene">
      <div class="axes">
        <div class="axis x-axis">
          <div class="dot"></div>
        </div>
        <div class="axis y-axis">
          <div class="dot"></div>
        </div>
        <div class="axis z-axis"></div>
        <div class="cube">
          <div class="face front">吃饭</div>
          <div class="face back">开会</div>
          <div class="face right">学习</div>
          <div class="face left">购物</div>
          <div class="face top">约会</div>
          <div class="face bottom">游戏</div>
        </div>
        <div class="ground">
          <client-only>
            <date-picker
              :inline="true"
              :input-class="'datepicker-input'"
            ></date-picker>
          </client-only>
        </div>
      </div>
    </div>
    <div class="intro">
      <h1>
        <span class="urgent">紧急？</span><span class="important">重要？</span>
      </h1>
      <p>每天在不同事情之间</p>
      <p>来回穿梭</p>
      <button class="try-btn">
        <span class="inner">
          <span class="text">试试这个吧</span>
          <span class="start">开始</span>
        </span>
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.scene-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  align-items: center;
}

.scene {
  flex: 0 0 auto;
  perspective: 800px;
  perspective-origin: center;
  height: 522px;
  overflow: hidden;
}

.scene-wrapper .intro {
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    margin-bottom: 65px;
    span {
      user-select: none;
      display: inline-block;
      transition: all 0.2s ease-in;
      &.urgent {
        color: $color-3;
      }
      &.important {
        color: $color-1;
      }
      &:hover {
        transform: rotateX(10deg) rotateZ(-15deg);
      }
    }
  }
  p {
    margin-bottom: 13px;
    user-select: none;
  }
}

.axes {
  position: relative;
  width: 487px;
  height: 400px;
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateX(-15deg) rotateY(-29deg) rotateZ(0deg)
    translate3d(0px, 20px, 0px);
}

.axes .ground {
  position: absolute;
  background-color: lightgray;
  width: 122%;
  height: 122%;
  transform: translate3d(-287px, 225px, -414px) rotateX(90deg);
}

.axes .axis {
  position: absolute;
  /*//background-color: $color-2;*/
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

@keyframes axisBgAnimation {
  0% {
    bottom: -5%;
  }
  49% {
    width: 5px;
    height: 21px;
    bottom: 90%;
  }
  50% {
    width: 0;
    height: 0;
    bottom: 105%;
  }
  100% {
    width: 0;
    height: 0;
    bottom: 105%;
  }
}

.axis .dot {
  animation-delay: 3s;
  position: absolute;
  opacity: 0.9;
  border-radius: 2px;
  width: 5px;
  height: 21px;
  bottom: -5%;
  animation: axisBgAnimation 10s ease-in infinite;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    $color-4 75%,
    $color-4 100%
  );
}

.axes .axis.x-axis {
  transform: rotateZ(90deg);
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
    transform: rotate(0deg);
    top: -39px;
    left: -15px;
  }
}

.axes .axis.z-axis {
  transform: rotateX(90deg);
  background-color: $color-2;
  color: $color-2;
  display: none;

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
    transform: translate3d(60px, 60px, -115px) rotateX(0deg) rotateY(90deg);
  }

  25% {
    transform: translate3d(60px, 297px, -115px) rotateX(90deg) rotateY(0);
  }

  35% {
    transform: translate3d(60px, 297px, 100px) rotateX(0) rotateY(-90deg);
  }

  60% {
    transform: translate3d(298px, 297px, 100px) rotateX(0) rotateY(0);
  }

  75% {
    transform: translate3d(298px, 66px, 100px) rotateX(270deg) rotateY(0);
  }
  85% {
    transform: translate3d(298px, 66px, -115px) rotateX(0) rotateY(-180deg);
  }
  100% {
    transform: translate3d(60px, 60px, -115px) rotateX(0deg) rotateY(90deg);
  }
}

.cube {
  will-change: transform;
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: translate3d(60px, 60px, 35px) rotateX(0) rotateY(90deg);
  animation: cubeAnimate 10s ease-in-out infinite;

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
  color: $color-4;
  font-weight: bold;
  font-size: 30px;
  position: absolute;
  backface-visibility: inherit;
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

.try-btn {
  margin-top: 65px;
  color: $color-4;
  font-weight: bold;
  position: relative;
  width: 100px;
  height: 37px;
  line-height: 37px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  span {
    transition: all 0.1s ease-in;
    display: inline-block;
    &.inner {
      position: absolute;
      left: 0;
      top: 0;
      width: 200%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    &.text {
      width: 100%;
      background-color: $color-3;
    }
    &.start {
      width: 100%;
      background-color: $color-1;
    }
  }
  &:hover {
    span.inner {
      left: -100%;
    }
  }
}
</style>
