export const state = () => ({
  images: [],
})

export const mutations = {
  set(state, images) {
    state.images = images[0].url
  },
}

export const actions = {
  async get({commit}) {
    const res = await this.$repositories.image.get()
    if (res.status === 200 && res.data) {
      this.commit('Post/image/set', res.data)
    } else {
      // Handle error here
    }
  },
}
