export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'afrilogos',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-highlightjs',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:8000'
  },

  serverMiddleware: [
    { path: '/api', handler: '~/api/index.js' }
  ],

  publicRuntimeConfig: {
    myPublicVariable: process.env.PUBLIC_VARIABLE,
  },
  privateRuntimeConfig: {
    myPrivateToken: process.env.PRIVATE_TOKEN
  }
}
