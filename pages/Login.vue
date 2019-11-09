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
              <!--              <span class="actions active">登录</span>-->
            </div>
          </div>
          <div class="message">
            <span v-if="hasError">{{ errorMessage }}</span>
          </div>
          <form @submit.prevent="submit">
            <fieldset class="form-group">
              <input
                id="email"
                ref="email"
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
                ref="password"
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
import validator from 'validator'
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
      loading: false,
      hasError: false,
      errorMessage: ''
    }
  },
  methods: {
    submit() {
      this.hasError = true

      if (!this.email || !validator.isEmail(this.email)) {
        this.errorMessage = '请正确填写邮箱'
        this.$refs.email.focus()
      } else if (!this.password || this.password.length < 6) {
        this.errorMessage = '至少输入6位密码'
        this.$refs.password.focus()
      } else {
        this.hasError = false
        this.errorMessage = ''
      }

      if (this.hasError) {
        return
      }

      this.loading = true
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then((result) => {
          this.loading = false
          this.$router.push('/tasks') // 页面跳转
        })
        .catch(() => {
          this.loading = false
          this.hasError = true
          this.errorMessage = '密码错误'
        })
    }
  }
}
</script>
