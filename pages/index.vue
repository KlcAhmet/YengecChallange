<template>
  <div class="col-12 d-flex justify-content-center">
    <div class="col-6 d-flex flex-column mt-5">
      <button style="z-index: 4;" type="button" class="btn btn-success btn-lg mx-4 mx-sm-5" @click="login">LOGIN</button>
      <img style="max-height: 40em; margin-top: -1.3em; z-index: 3" class="image-fluid" :src="crapPath" alt="">
    </div>
  </div>
</template>
<script>
import crabSvg from '~/assets/image/crab-svgrepo-com.svg'

export default {
  data() {
    return {
      crapPath: crabSvg,
    }
  },
  methods: {
    login() {
      this.$nuxt.$options.router.push('login')
    }
  },
}
</script>
