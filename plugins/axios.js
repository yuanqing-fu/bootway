export default function({ $axios, env }) {
  // $axios.defaults.baseURL = process.env.API
  // eslint-disable-next-line no-console
  // console.log('*************************2**', env)
  // $axios.defaults.baseURL = process.env.dev
  //   ? 'http://localhost:3003'
  //   : 'http://api.bootway.com'

  $axios.defaults.baseURL = 'http://api.bootway.com'
}
