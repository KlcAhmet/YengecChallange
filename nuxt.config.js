export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YengecChallange',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/js/bootstrap.min.js',
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/scss/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/main',
    '~/plugins/repositories.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: 'http://localhost:3000'
    }
  },
  privateRuntimeConfig: {
    API_KEY: process.env.API_KEY
  },
  axios: {
    baseURL: 'https://api.thecatapi.com/v1/', // Used as fallback if no runtime config is provided
    proxy: true,
    credentials: true,
    prefix: process.env.API_URL
  },
  proxy: {
    '/v1/': {
      target: 'https://api.thecatapi.com/v1',
      pathRewrite: {
        '^/search?api_key=' : '/..'
      }
    }
  },

}
