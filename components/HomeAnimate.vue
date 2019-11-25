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
        <div class="ground"></div>
      </div>
    </div>
    <div class="intro">
      <h1>
        <span class="urgent">紧急？</span><span class="important">重要？</span>
      </h1>
      <p>每天在不同事情之间</p>
      <p>来回穿梭</p>
      <p>怎么安排日程？</p>
      <nuxt-link class="try-btn" to="/tasks">
        <span class="inner">
          <span class="text">试试这个吧</span>
          <span class="start">开始</span>
        </span>
      </nuxt-link>
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
  height: 565px;
  overflow: hidden;
}

.scene-wrapper .intro {
  background: rgba(238, 238, 238, 0.5);
  height: 100%;
  padding: 0 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 32px;
    margin-bottom: 65px;
    span {
      user-select: none;
      display: inline-block;
      transition: all 0.1s ease-in;
      zoom: 1.005;
      &.urgent {
        color: $color-3;
      }
      &.important {
        color: $color-1;
      }
      &:hover {
        transform: rotateZ(-7deg);
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
  width: 548px;
  height: 483px;
  transform-style: preserve-3d;
  transform-origin: center;
  transform: rotateX(-15deg) rotateY(-29deg) rotateZ(0deg)
    translate3d(0px, 20px, 0px);
}

.axes .ground {
  border-radius: 5px;
  position: absolute;
  width: 122%;
  height: 122%;
  transform: translate3d(-287px, 225px, -414px) rotateX(90deg);
  background-color: #eeeeee;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%231a7ea4' fill-opacity='0.6' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
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
  15% {
    transform: translate3d(60px, 297px, -115px) rotateX(90deg) rotateY(0);
  }
  30% {
    transform: translate3d(60px, 297px, 100px) rotateX(0) rotateY(-90deg);
  }
  45% {
    transform: translate3d(298px, 297px, 100px) rotateX(0) rotateY(0);
  }

  60% {
    transform: translate3d(298px, 66px, 100px) rotateX(270deg) rotateY(0);
  }
  75% {
    transform: translate3d(298px, 66px, -115px) rotateX(0) rotateY(-180deg);
  }
  90% {
    transform: translate3d(60px, 60px, -115px) rotateX(0deg) rotateY(90deg);
  }
  100% {
    transform: translate3d(60px, 60px, -115px) rotateX(0deg) rotateY(90deg);
  }
}

.cube {
  user-select: none;
  will-change: transform;
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: translate3d(60px, 60px, 35px) rotateX(0) rotateY(90deg);
  animation: cubeAnimate 13s ease-in-out infinite;

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
  font-size: 13px;
  text-align: center;
  margin-top: 65px;
  margin-bottom: 30px;
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
