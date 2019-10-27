<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="middle-container-inner form-middle-container-inner">
        <div class="form-main">
          <div class="form-top">
            <div class="form-top-l"><span class="logo-text">Bootway</span></div>
            <div class="form-top-r ar">
              <span class="actions active">注册</span>
              <nuxt-link class="actions" to="/login">
                登录
              </nuxt-link>
            </div>
          </div>
          <!--        <error-messages v-show="Object.keys(error).length" :error="error" />-->
          <form @submit.prevent="submit">
            <fieldset>
              <input
                id="userName"
                v-model.trim="name"
                class="form-control form-control-lg"
                type="text"
                placeholder="请输入用户名"
                :disabled="loading"
                maxlength="32"
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                id="email"
                v-model.trim="email"
                type="text"
                placeholder="请输入邮箱"
                :disabled="loading"
                maxlength="32"
              />
            </fieldset>
            <fieldset>
              <input
                id="password"
                v-model.trim="password"
                type="password"
                placeholder="请输入密码"
                :disabled="loading"
                autocomplete="off"
                maxlength="32"
              />
            </fieldset>
            <!--            <fieldset class="form-group">-->
            <!--              <input-->
            <!--                id="re-password"-->
            <!--                v-model.trim="password"-->
            <!--                class="form-control form-control-lg"-->
            <!--                type="password"-->
            <!--                placeholder="再次输入密码"-->
            <!--                :disabled="loading"-->
            <!--                autocomplete="off"-->
            <!--                maxlength="32"-->
            <!--              />-->
            <!--            </fieldset>-->
            <button class="submit" :disabled="loading">
              创建我的账号
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
      name: '',
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
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then((result) => {
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false
          // eslint-disable-next-line no-console
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
