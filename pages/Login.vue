<template>
  <div class="wrapper">
    <other-header></other-header>
    <div class="middle-container">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign in</h1>
        <p class="text-xs-center">
          <nuxt-link to="/register">Need an account?</nuxt-link>
        </p>

        <!--        <error-messages v-show="Object.keys(error).length" :error="error" />-->

        <form @submit.prevent="submit">
          <fieldset class="form-group">
            <input
              v-model="email"
              class="form-control form-control-lg"
              type="text"
              placeholder="Email"
              :disabled="loading"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              v-model="password"
              class="form-control form-control-lg"
              type="password"
              placeholder="Password"
              :disabled="loading"
            />
          </fieldset>
          <button
            class="btn btn-lg btn-primary pull-xs-right"
            :disabled="loading"
          >
            Sign in
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
      this.alert = null
      this.loading = true
      this.$store
        .dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
        .then((result) => {
          // eslint-disable-next-line no-console
          console.log('result', result)
          this.alert = { type: 'success', message: result.data.message }
          this.loading = false
          // this.$router.push('/admin') //页面跳转
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
