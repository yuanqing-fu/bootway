<template>
  <div class="wrapper home-page">
    <day-header></day-header>
    <div class="middle-container">
      Home Page Middle
    </div>
    <home-footer />
  </div>
</template>

<script>
import DayHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'

export default {
  components: {
    DayHeader,
    HomeFooter
  },
  data() {
    return {
      // tasks: [1, 2, 3]
    }
  }
}
</script>
