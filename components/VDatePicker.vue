<template>
  <client-only>
    <date-picker
      v-model="$attrs.modelvalue.selected"
      :language="zh"
    ></date-picker>
  </client-only>
</template>
<script>
import { en, zh } from 'vuejs-datepicker/dist/locale'
export default {
  data() {
    return {
      en,
      zh
    }
  }
}
</script>
<style scoped>
.vdp-datepicker {
  color: darkorange;
}
</style>
