export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '8-seller-market',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Merriweather:ital,wght@0,700;0,900;1,900&display=swap"',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/themefisher-font/style.css',
    '@/plugins/bootstrap/css/bootstrap.min.css',
    '@/plugins/animate/animate.css',
    '@/plugins/slick/slick.css',
    '@/plugins/slick/slick-theme.css',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cache: true,
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    // HTTPS 테스트
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, "private.key")),
    //   cert: fs.readFileSync(path.resolve(__dirname, "server.crt")),
    // },
  },
}
