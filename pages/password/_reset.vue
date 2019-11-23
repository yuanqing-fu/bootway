<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <loading :loading="loading"></loading>
      <div class="middle-container-inner form-middle-container-inner">
        <div
          v-if="passwordResetEmailSendingComplete"
          class="register-complete-info"
        >
          <div>一封邮件已经发送到</div>
          <div class="email">{{ email }}</div>
          <div>请点击邮件里的链接重置密码</div>
        </div>
        <div v-if="!passwordResetEmailSendingComplete" class="form-main">
          <div class="form-top">
            <div class="form-top-l">
              <span class="logo-text">重置密码</span>
            </div>
            <div class="form-top-r ar"></div>
          </div>
          <div class="message">
            <span v-if="hasMessage">{{ message }}</span>
            <resend-email-verification
              v-if="showEmailVerification"
              @sendEmailVerificationEvent="sendEmailVerification"
            ></resend-email-verification>
            <nuxt-link v-if="passwordResetSuccessfully" to="/login"
              >去登陆</nuxt-link
            >
          </div>
          <form @submit.prevent="submit">
            <fieldset v-if="isSendingMailStep" class="form-group">
              <input
                id="email"
                ref="email"
                v-model.trim="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="请输入邮箱"
                :disabled="loading"
                maxlength="32"
                autofocus
              />
            </fieldset>
            <fieldset v-if="!isSendingMailStep" class="form-group">
              <input
                id="password"
                ref="password"
                v-model.trim="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="请输入新密码"
                :disabled="loading"
                autocomplete="off"
                maxlength="32"
              />
            </fieldset>
            <fieldset v-if="!isSendingMailStep" class="form-group">
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
            <button v-if="isSendingMailStep" class="submit" :disabled="loading">
              发送重置密码邮件
            </button>
            <button
              v-if="!isSendingMailStep"
              class="submit"
              :disabled="loading"
            >
              重 置
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
import Loading from '~/components/Loading.vue'
import ResendEmailVerification from '~/components/ResendEmailVerification.vue'

export default {
  components: {
    OtherHeader,
    HomeFooter,
    Loading,
    ResendEmailVerification
  },
  data() {
    return {
      passwordResetEmailSendingComplete: false,
      passwordResetSuccessfully: false,
      showEmailVerification: false,
      email: '',
      password: '',
      rePassword: '',
      loading: true,
      message: ''
    }
  },
  computed: {
    isSendingMailStep() {
      return this.$route.params.reset === 'reset'
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
    async submit() {
      this.showMessage('')
      if (this.isSendingMailStep) {
        // 发送重置邮件前
        if (!this.email || !validator.isEmail(this.email)) {
          this.showMessage('请正确填写邮箱')
          this.$refs.email.focus()
        } else {
          this.showMessage('')
        }
      } else if (!this.password || this.password.length < 6) {
        this.showMessage('至少输入6位密码')
        this.$refs.password.focus()
      } else if (!this.rePassword || this.rePassword !== this.password) {
        this.showMessage('两次输入密码不一致')
        this.$refs.rePassword.focus()
      } else {
        this.showMessage('')
      }

      if (this.hasMessage()) {
        return
      }

      this.loading = true

      if (this.isSendingMailStep) {
        this.$store
          .dispatch('sendResetPasswordEmail', {
            email: this.email
          })
          .then((result) => {
            this.loading = false

            if (result.data.errorCode !== undefined) {
              if (result.data.errorCode === 0) {
                // 用户未注册
                this.showMessage('用户未注册')
              } else if (result.data.errorCode === 1) {
                // 用户未验证邮箱 显示重发邮件界面

                this.showEmailVerification = true

                this.showMessage('需要验证邮箱')
                this.emailNeedsVerified = this.email
              }
            } else {
              this.passwordResetEmailSendingComplete = true
            }
          })
          .catch(() => {
            this.loading = false

            this.showMessage('邮件发送失败')
          })
      } else {
        // 发送重置邮件后
        const response = await this.$store.dispatch('resetPassword', {
          password: this.password,
          token: this.$route.params.reset
        })
        this.loading = false
        this.password = ''
        this.rePassword = ''
        if (response.data.type === 'success') {
          this.showMessage('密码重置成功')
          this.passwordResetSuccessfully = true
        } else {
          this.showMessage('链接已过期')
        }
      }
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

          this.passwordResetEmailSendingComplete = true
        })
        .catch(() => {
          this.loading = false
          this.email = ''
          this.showMessage('邮箱发送失败')
        })
    }
  }
}
</script>
