export default {
  auth: {
    me: (axios) => axios.get('auth/me'),
    login: (data, axios) => axios.post('auth/login', data),
    register: (data, axios) => axios.post('auth/register', data)
  },
  tasks: {
    add: (data, axios) => axios.post('tasks', data),
    get: (data, dynamicUrl, axios) => axios.get(`tasks/${dynamicUrl}`, data),
    edit: (data, axios) => axios.patch(`tasks`, data),
    delete: (data, axios) => axios.delete(`tasks`, data)
  }
}
