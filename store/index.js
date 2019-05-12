export const state = () => ({
  token: null,
  user: null,
  isLogined: false
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    state.user = user
  },
  setLoginState(state, booleanState) {
    state.isLogined = booleanState
  }
}

export const actions = {
  setToken({
    commit
  }, token) {
    commit('setToken', token)
    if (token) {
      commit('setLoginState', true)

    } else {
      commit('setLoginState', false)

    }
  },
  setUser({
    commit
  }, user) {
    commit('setUser', user)

  }

}
