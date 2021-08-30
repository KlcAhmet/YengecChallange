export const state = () => ({
  User: {},
})

export const mutations = {
  set(state, object) {
    state[Object.keys(object)[0]] = Object.entries(object)[0][1]
    localStorage.setItem(Object.entries(object)[0][0].toString(), JSON.stringify(Object.entries(object)[0][1]))
  },
  get(state) {
    try {
      Object.keys(state).forEach(element => {
        if (localStorage.getItem(element)) {
          state[element] = JSON.parse(localStorage.getItem(element))
        }
      })
      if (Object.keys(state.User).length !== 0) {
        this.commit("auth/set", true)
      }
    } catch (err) {
      return undefined;
    }
  },
  clear(state) {
    this.commit("auth/set", false)
    delete state.User
    localStorage.removeItem("User")
  }
}
