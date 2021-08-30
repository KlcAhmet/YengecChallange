import Vue from 'vue'
import 'vuex'

Vue.mixin({
  /*  computed:{
      ...mapGetters("home",["loading"])
    },*/
  created() {
    this.Start()
  },
  methods: {
    Start() {
      if (this.$store !== undefined) {
        /*this.$store.commit('loading', true)*/
        this.$store.commit('LocalStorage/get')
      }
    }
  },
})
