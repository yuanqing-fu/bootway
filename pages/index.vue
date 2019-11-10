<template>
  <div class="wrapper home-page">
    <day-header></day-header>
    <div class="middle-container home-middle">
      <home-bg></home-bg>
      <home-cat></home-cat>
    </div>
    <home-footer />
  </div>
</template>

<script>
import DayHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'
import HomeBg from '~/components/HomeBg'
import HomeCat from '~/components/HomeAnimate'

export default {
  components: {
    DayHeader,
    HomeFooter,
    HomeBg,
    HomeCat
  },
  data() {
    return {
      // tasks: [1, 2, 3]
    }
  }
}
</script>

<style lang="scss">
@keyframes rotate {
  100% {
    /*//transform: rotate(1turn);*/
  }
}
/*旋转效果*/
.rotateClass {
  color: $color-1;
  font-size: 500px;
  animation: rotate 10s linear infinite;
}
</style>
