<template>
  <a href="javascript:void(0)" @click="emitSendingEmailVerificationEvent"
    >重发验证邮件</a
  >
</template>
<script>
export default {
  props: {
    email: {
      type: String,
      default() {
        return ''
      }
    }
  },
  methods: {
    emitSendingEmailVerificationEvent() {
      this.$emit('sendEmailVerificationEvent')
    }
  }
}
</script>
