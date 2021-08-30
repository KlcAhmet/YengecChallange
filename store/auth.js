export const state = () => ({
  isLogin: false,
})

export const mutations = {
  set(state,value) {
    state.isLogin = value
  },
}
