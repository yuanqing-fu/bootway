<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <loading :loading="loading"></loading>
      <div class="middle-container-inner form-middle-container-inner">
        <div class="message">{{ message }}</div>
      </div>
    </div>
    <home-footer />
  </div>
</template>
<script>
import OtherHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    OtherHeader,
    HomeFooter,
    Loading
  },
  data() {
    return {
      loading: true,
      verified: false
    }
  },
  computed: {
    message() {
      let msg = '正在验证...'
      if (!this.loading) {
        if (this.verified) {
          msg = '邮箱验证成功！'
        } else {
          msg = '邮箱验证失败，链接已过期！'
        }
      }
      return msg
    }
  },
  async asyncData({ store, route, $axios, redirect }) {
    let response = {}
    let verified = false
    let user = null
    let token = ''
    if (!store.state.user) {
      response = await store.dispatch('verifyEmail', {
        token: route.params.token
      })

      if (response.data.type === 'success') {
        verified = true
        user = response.data.user
        token = response.data.token
      }
    }
    return {
      verified,
      user,
      token
    }
  },
  mounted() {
    this.loading = false

    if (this.verified) {
      // 验证成功让用户自动登录，并跳转到任务页面
      this.$store.dispatch('setLoginStatus', {
        user: this.user,
        token: this.token
      })

      this.$router.push('/tasks') // 页面跳转
    } else {
      this.$router.push('/') // 页面跳转
    }
  },
  methods: {}
}
</script>
