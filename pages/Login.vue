<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="middle-container-inner form-middle-container-inner">
        <div class="form-main">
          <div class="form-top">
            <div class="form-top-l"><span class="logo-text">Bootway</span></div>
            <div class="form-top-r ar">
              <nuxt-link class="actions" to="/register">
                注册
              </nuxt-link>
              <span class="actions active">登录</span>
            </div>
          </div>
          <!--        <error-messages v-show="Object.keys(error).length" :error="error" />-->
          <form @submit.prevent="submit">
            <fieldset class="form-group">
              <input
                id="email"
                v-model.trim="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="邮箱"
                :disabled="loading"
                maxlength="32"
                autofocus
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                id="password"
                v-model.trim="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="密码"
                :disabled="loading"
                autocomplete="off"
                maxlength="32"
              />
            </fieldset>
            <button class="submit" :disabled="loading">
              登&nbsp;录
            </button>
          </form>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>
<script>
import otherHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'

export default {
  components: {
    otherHeader,
    HomeFooter
  },
  data() {
    return {
      email: '',
      password: '',
      alert: null,
      loading: false
    }
  },
  methods: {
    submit() {
      if (!this.email || !this.password) {
        return
      }
      this.alert = null
      this.loading = true
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false
          this.$router.push('/tasks') // 页面跳转
        })
        .catch((error) => {
          this.loading = false
          if (error.response && error.response.data) {
            this.alert = {
              type: 'error',
              message: error.response.data.message || error.response.status
            }
          }
        })
    }
  }
}
</script>
