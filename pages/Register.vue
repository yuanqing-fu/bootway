<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="middle-container-inner form-middle-container-inner">
        <div class="form-main">
          <div class="form-top">
            <div class="form-top-l"><span class="logo-text">注册</span></div>
            <div class="form-top-r ar">
              <!--              <span class="actions active">注册</span>-->
              <!--              <nuxt-link class="actions" to="/login">-->
              <!--                登录-->
              <!--              </nuxt-link>-->
            </div>
          </div>
          <div class="message">
            <span v-if="hasError">{{ errorMessage }}</span>
          </div>
          <form @submit.prevent="submit">
            <fieldset>
              <input
                id="userName"
                ref="userName"
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
                ref="email"
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
                ref="password"
                v-model.trim="password"
                type="password"
                placeholder="请输入密码"
                :disabled="loading"
                autocomplete="off"
                maxlength="32"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                id="rePassword"
                ref="rePassword"
                v-model.trim="rePassword"
                class="form-control form-control-lg"
                type="password"
                placeholder="再次输入密码"
                :disabled="loading"
                autocomplete="off"
                maxlength="32"
              />
            </fieldset>
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
      name: '',
      email: '',
      password: '',
      rePassword: '',
      loading: false,
      hasError: false,
      errorMessage: ''
    }
  },
  methods: {
    submit() {
      this.hasError = true

      if (!this.name) {
        this.errorMessage = '请填写用户名'
        this.$refs.userName.focus()
      } else if (!this.email || !validator.isEmail(this.email)) {
        this.errorMessage = '请正确填写邮箱'
        this.$refs.email.focus()
      } else if (!this.password || this.password.length < 6) {
        this.errorMessage = '至少输入6位密码'
        this.$refs.password.focus()
      } else if (!this.rePassword || this.rePassword !== this.password) {
        this.errorMessage = '两次输入密码不一致'
        this.$refs.rePassword.focus()
      } else {
        this.hasError = false
        this.errorMessage = ''
      }

      if (this.hasError) {
        return
      }

      this.loading = true
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then((result) => {
          this.loading = false
          // eslint-disable-next-line no-console
          this.$router.push('/tasks') // 页面跳转
        })
        .catch(() => {
          this.loading = false
          this.hasError = true
          this.errorMessage = '邮箱已被注册'
        })
    }
  }
}
</script>
