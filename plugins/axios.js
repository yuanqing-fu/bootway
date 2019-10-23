import cookies from 'js-cookie'

export default function({ $axios, env }) {
  // $axios.defaults.baseURL = process.env.API
  // eslint-disable-next-line no-console
  // console.log('*************************2**', env)
  // $axios.defaults.baseURL = process.env.dev
  //   ? 'http://localhost:3003'
  //   : 'http://api.bootway.com'

  $axios.defaults.baseURL = 'http://api.bootway.com'

  // $axios.defaults.baseURL = 'http://api.test.com'
  const token = cookies.get('x-access-token')

  if (token) setAuthToken(token, $axios)
  else resetAuthToken($axios)
}

export function setAuthToken(token, $axios) {
  $axios.defaults.headers.common['x-access-token'] = token
}

export function resetAuthToken($axios) {
  delete $axios.defaults.headers.common['x-access-token']
}
