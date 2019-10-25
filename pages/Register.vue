<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="form-main">
        <h1>注册</h1>
        <p>
          <nuxt-link to="/login">已有账号？</nuxt-link>
        </p>

        <!--        <error-messages v-show="Object.keys(error).length" :error="error" />-->
        <form @submit.prevent="submit">
          <fieldset>
            <label for="userName" class="label">用户名</label>
            <input
              id="userName"
              v-model.trim="name"
              class="form-control form-control-lg"
              type="text"
              placeholder="请输入用户名"
              :disabled="loading"
              maxlength="32"
            />
          </fieldset>
          <fieldset>
            <label for="email" class="label">邮箱</label>
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
            <label for="password" class="label">密码</label>
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
          <button :disabled="loading">
            注册
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
