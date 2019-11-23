<template>
  <div class="wrapper">
    <other-header :is-register-page="true"></other-header>
    <div class="middle-container">
      <loading :loading="loading"></loading>
      <div class="middle-container-inner form-middle-container-inner">
        <div v-if="registerComplete" class="register-complete-info">
          <div>一封邮件已经发送到</div>
          <div class="email">{{ email }}</div>
          <div>请点击邮件里的链接激活账号</div>
        </div>
        <div v-if="!registerComplete" class="form-main">
          <div class="form-top">
            <div class="form-top-l"><span class="logo-text">注册</span></div>
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
                placeholder="请再次输入密码"
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
import OtherHeader from '~/components/Header.vue'
import HomeFooter from '~/components/Footer.vue'
import ResendEmailVerification from '~/components/ResendEmailVerification.vue'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading,
    OtherHeader,
    HomeFooter,
    ResendEmailVerification
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      loading: true,
      message: '',
      showEmailVerification: false,
      emailNeedsVerified: '',
      registerComplete: false
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

      if (!this.name) {
        this.showMessage('请填写用户名')
        this.$refs.userName.focus()
      } else if (!this.email || !validator.isEmail(this.email)) {
        this.showMessage('请正确填写邮箱')
        this.$refs.email.focus()
      } else if (!this.password || this.password.length < 6) {
        this.showMessage('至少输入6位密码')
        this.$refs.password.focus()
      } else if (!this.rePassword || this.rePassword !== this.password) {
        this.showMessage('两次输入密码不一致')
        this.$refs.rePassword.focus()
      } else {
        this.showEmailVerification = false
        this.showMessage('')
      }

      if (this.hasMessage()) {
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
          if (result.data.errorCode !== undefined) {
            if (result.data.errorCode === 1) {
              // 用户未验证邮箱 显示重发邮件界面
              // eslint-disable-next-line no-console
              console.log('未激活 ', result)
              this.showEmailVerification = true

              this.showMessage('需要验证邮箱')
              this.emailNeedsVerified = this.email
            }
          } else {
            this.registerComplete = true

            // this.$router.push('/tasks') // 页面跳转
          }
        })
        .catch(() => {
          this.loading = false
          this.showMessage('邮箱已被注册')
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
