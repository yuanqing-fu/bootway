export default {
  auth: {
    me: (axios) => axios.get('auth/me'),
    login: (data, axios) => axios.post('auth/login', data),
    register: (data, axios) => axios.post('auth/register', data)
  }
}
