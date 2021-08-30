<template>
  <div>
    <div class="catImage m-0">
      <div id="catimage" class="catImage-center col-11 mx-auto d-flex justify-content-center">
        <transition name="fade" mode="in-out" :duration="{ in: 5000, out: 5000 }">
          <img v-if="show" class="catImage-center-image img-fluid" :src="images" alt="cat-image" @load="imageloaded">
        </transition>
      </div>

      <div class="catImage-bottom col-12 d-flex justify-content-center align-items-center mt-4">
        <div v-if="!spinner" class="--rightMargin spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <button v-else type="button" class="catImage-bottom-button --rightMargin btn btn-success btn-lg" @click="fetch"><i class="fas fa-paw"></i></button>
        <button type="button" class="catImage-bottom-button btn btn-success btn-lg " @click="logout"><i class="fas fa-sign-out-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/scss/catImagePage.css'

export default {
  data() {
    return {
      apikey: process.env.API_KEY,
      catList: [],
      show: true,
      spinner: false,
    }
  },
  computed: {
    auth() {
      return this.$store.state.auth.isLogin
    },
    images() {
      return this.$store.state.Post.image.images
    }
  },
  watch: {
    images(value) {
      this.show = false
      this.spinner =false
      document.getElementById('catimage').style.visibility = 'hidden'
    },
  },
  created() {
    if (this.auth !== true) {
      this.$nuxt.$options.router.push('login')
    }
    this.fetch()
  },
  methods: {
    async fetch() {
      this.show = false
      await this.$store.dispatch('Post/image/get')
      this.show = true
    },
    imageloaded() {
      this.show = true
      this.spinner = true
      document.getElementById('catimage').style.visibility = 'visible'
    },
    logout() {
        this.$store.commit('LocalStorage/clear')
        this.$nuxt.$options.router.push('/')
    }
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
