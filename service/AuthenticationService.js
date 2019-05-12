import Api from '@/service/Api'

export default {
  // return user Object and Token
  register(credentials) {
    return Api().post('register', credentials)
  },

  // return user Object and Token
  login(credentials) {
    return Api().post('login', credentials)
  },

  // return Boolean
  vertifyToken(token) {
    return Api().post('token/vertify',
      token
    )
  }
}
