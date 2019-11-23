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
  authenticate({ commit, dispatch }) {
    return api.auth
      .authenticate(this.$axios)
      .then((response) => {
        commit('set_user', response.data.result)
        return response
      })
      .catch((error) => {
        dispatch('clearLoginStatus')
        // commit('reset_user')
        // resetAuthToken(this.$axios)
        // cookies.remove('x-access-token')
        return error
      })
  },
  login({ commit, dispatch }, data) {
    return api.auth.login(data, this.$axios).then((response) => {
      dispatch('setLoginStatus', {
        user: response.data.user,
        token: response.data.token
      })

      // commit('set_user', response.data.user)
      // setAuthToken(response.data.token, this.$axios)
      // cookies.set('x-access-token', response.data.token, { expires: 7 })
      return response
    })
  },
  register({ commit }, data) {
    return api.auth.register(data, this.$axios).then((response) => {
      return response
    })
  },
  sendEmailVerification({ commit }, data) {
    return api.auth
      .sendEmailVerification(data, this.$axios)
      .then((response) => {
        return response
      })
  },
  verifyEmail({ commit }, data) {
    return api.auth.verifyEmail(data, this.$axios).then((response) => {
      return response
    })
  },
  addTask({ commit }, data) {
    return api.tasks.add(data, this.$axios).then((response) => {
      return response
    })
  },
  getTask({ commit }, dynamicUrl, data) {
    return api.tasks.get(data, dynamicUrl, this.$axios).then((response) => {
      return response
    })
  },
  editTask({ commit }, data) {
    return api.tasks.edit(data, this.$axios).then((response) => {
      return response
    })
  },
  deleteTask({ commit }, data) {
    return api.tasks.delete(data, this.$axios).then((response) => {
      return response
    })
  },
  clearLoginStatus({ commit }) {
    commit('reset_user')
    resetAuthToken(this.$axios)
    cookies.remove('x-access-token')
    return Promise.resolve()
  },
  setLoginStatus({ commit }, data) {
    commit('set_user', data.user)
    setAuthToken(data.token, this.$axios)
    cookies.set('x-access-token', data.token, { expires: 7 })

    return Promise.resolve()
  },
  nuxtServerInit({ dispatch }, context) {
    return new Promise((resolve, reject) => {
      const cookies = cookie.parse(context.req.headers.cookie || '')
      if (cookies.hasOwnProperty('x-access-token')) {
        setAuthToken(cookies['x-access-token'], this.$axios)
        dispatch('authenticate')
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
