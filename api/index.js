export default {
  auth: {
    authenticate: (axios) => axios.post('auth/authenticate'),
    login: (data, axios) => axios.post('auth/login', data),
    register: (data, axios) => axios.post('auth/register', data),
    sendEmailVerification: (data, axios) => axios.post('auth/register', data),
    verifyEmail: (data, axios) => axios.post('auth/email-verification', data)
  },
  tasks: {
    add: (data, axios) => axios.post('tasks', data),
    get: (data, dynamicUrl, axios) => axios.get(`tasks/${dynamicUrl}`, data),
    edit: (data, axios) => axios.patch(`tasks`, data),
    delete: (data, axios) => axios.delete(`tasks`, data)
  }
}
