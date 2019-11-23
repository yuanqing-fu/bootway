<template>
  <div class="wrapper">
    <other-header :is-login-page="true"></other-header>
    <div class="middle-container">
      <loading :loading="loading"></loading>
      <div class="middle-container-inner form-middle-container-inner">
        <div class="form-main">
          <div class="form-top">
            <div class="form-top-l"><span class="logo-text">登录</span></div>
            <div class="form-top-r ar"></div>
          </div>
          <div class="message">
            <span v-if="hasMessage">{{ message }}</span>
            <resend-email-verification
              v-if="showEmailVerification"
              @sendEmailVerificationEvent="sendEmailVerification"
            ></resend-email-verification>
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
import OtherHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'
import ResendEmailVerification from '~/components/ResendEmailVerification.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    OtherHeader,
    HomeFooter,
    Loading,
    ResendEmailVerification
  },
  data() {
    return {
      email: '',
      password: '',
      loading: true,
      message: '',
      showEmailVerification: false,
      emailNeedsVerified: ''
    }
  },
  mounted() {
    this.loading = false
  },
  methods: {
    showMessage(message) {
      this.message = message
    },
    hasMessage() {
      return this.message !== ''
    },
    submit() {
      this.showMessage('')

      if (!this.email || !validator.isEmail(this.email)) {
        this.showMessage('请正确填写邮箱')
        this.$refs.email.focus()
      } else if (!this.password || this.password.length < 6) {
        this.showMessage('至少输入6位密码')
        this.$refs.password.focus()
      } else {
        this.showMessage('')
      }

      if (this.hasMessage()) {
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

          if (result.data.errorCode !== undefined) {
            if (result.data.errorCode === 0) {
              // 用户未注册
              this.showMessage('用户未注册')
            } else if (result.data.errorCode === 1) {
              // 用户未验证邮箱 显示重发邮件界面
              // eslint-disable-next-line no-console
              console.log('未激活 ', result)
              this.showEmailVerification = true

              this.showMessage('需要验证邮箱')
              this.emailNeedsVerified = this.email
            }
          } else {
            this.$router.push('/tasks') // 页面跳转
          }
        })
        .catch(() => {
          this.loading = false
          this.showMessage('密码错误')

          this.password = ''
        })
    },
    sendEmailVerification() {
      this.showEmailVerification = false
      this.loading = true
      this.$store
        .dispatch('sendEmailVerification', {
          email: this.emailNeedsVerified
        })
        .then((result) => {
          this.loading = false

          // eslint-disable-next-line no-console
          console.log('邮件已发送 ', result)

          this.showMessage('验证邮件已发送，请查收')
        })
        .catch(() => {
          this.loading = false

          this.showMessage('邮箱发送失败')
        })
    }
  }
}
</script>
