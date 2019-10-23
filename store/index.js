import cookies from 'js-cookie'
import cookie from 'cookie'
import api from '~/api'
import { setAuthToken, resetAuthToken } from '~/plugins/axios'

export const state = () => ({
  user: null
})
export const mutations = {
  set_user(store, data) {
    store.user = data
  },
  reset_user(store) {
    store.user = null
  }
}
export const actions = {
  fetch({ commit, dispatch }) {
    return api.auth
      .me(this.$axios)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log('********* set_user ***********')
        commit('set_user', response.data.result)
        return response
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('&&&&& reset user', cookies.get('x-access-token'))
        dispatch('reset')
        // commit('reset_user')
        // resetAuthToken(this.$axios)
        // cookies.remove('x-access-token')
        // // eslint-disable-next-line no-console
        // console.log('cookie removed', cookies.get('x-access-token'))
        return error
      })
  },
  login({ commit }, data) {
    // eslint-disable-next-line no-console
    return api.auth.login(data, this.$axios).then((response) => {
      commit('set_user', response.data.user)
      setAuthToken(response.data.token, this.$axios)
      cookies.set('x-access-token', response.data.token, { expires: 7 })
      return response
    })
  },
  reset({ commit }) {
    commit('reset_user')
    resetAuthToken(this.$axios)
    cookies.remove('x-access-token')
    return Promise.resolve()
  },
  nuxtServerInit({ dispatch }, context) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(context.req.headers.cookie || '')
      if (cookies.hasOwnProperty('x-access-token')) {
        setAuthToken(cookies['x-access-token'], this.$axios)
        dispatch('fetch')
          .then((result) => {
            resolve(true)
          })
          .catch(() => {
            resetAuthToken(this.$axios)
            resolve(false)
          })
      } else {
        resetAuthToken(this.$axios)
        resolve(false)
      }
    })
  }
}
