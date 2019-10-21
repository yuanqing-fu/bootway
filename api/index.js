export default {
  auth: {
    me: (axios) => axios.get('auth/me'),
    login: (data, axios) => axios.post('auth/login', data)
  }
}
