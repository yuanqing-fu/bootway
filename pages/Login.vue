<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">登录</h1>
        <p class="text-xs-center">
          <nuxt-link to="/register">没有账号？</nuxt-link>
        </p>

        <!--        <error-messages v-show="Object.keys(error).length" :error="error" />-->

        <form @submit.prevent="submit">
          <fieldset class="form-group">
            <input
              v-model.trim="email"
              class="form-control form-control-lg"
              type="text"
              placeholder="邮箱"
              :disabled="loading"
              maxlength="32"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              v-model.trim="password"
              class="form-control form-control-lg"
              type="password"
              placeholder="密码"
              :disabled="loading"
              autocomplete="off"
              maxlength="32"
            />
          </fieldset>
          <button
            class="btn btn-lg btn-primary pull-xs-right"
            :disabled="loading"
          >
            登录
          </button>
        </form>
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
          // eslint-disable-next-line no-console
          console.log('result', result)
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false
          // eslint-disable-next-line no-console
          // console.log(this.$router.referrer)
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
