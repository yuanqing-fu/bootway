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

        <form @submit.prevent="onSubmit">
          <fieldset class="form-group">
            <input
              v-model="email"
              class="form-control form-control-lg"
              type="text"
              placeholder="Email"
              :disabled="submitting"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              v-model="password"
              class="form-control form-control-lg"
              type="password"
              placeholder="Password"
              :disabled="submitting"
            />
          </fieldset>
          <button
            class="btn btn-lg btn-primary pull-xs-right"
            :disabled="submitting"
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
    return {}
  }
}
</script>
