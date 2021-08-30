const resource = `${process.env.API}/v1/images/search`
const key = `?api_key=${process.env.API_KEY}`
export default ($axios) => ({
  get() {
    return $axios.get(`${resource}${key}`)
  },
})
