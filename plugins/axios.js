import cookies from 'js-cookie'

export default function({ $axios }) {
  $axios.defaults.baseURL = process.env.API

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
