export const state = () => ({
  token: false
})

export const actions = {
  login({commit}) {
    commit('setToken', 'true');
  },
  logout({commit}) {
    commit('clearToken');
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = false;
  }
}

export const getters = {
  isAuth: state => state.token
}