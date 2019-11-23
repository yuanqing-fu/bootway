<template>
  <div v-if="loading" class="loading-page"></div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default() {
        return true
      }
    }
  }
}
</script>
