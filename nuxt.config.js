export default {
  mode: 'universal',
  env: {
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://api.test.com'
        : 'https://api.bootway.com'
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'zh_CN'
    },
    title: '个人日程记录',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '全新个人日程记录体验'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Time Management,时间管理,Task management,任务管理,urgent,紧急,important,重要,日程记录,日程管理,任务,日程,时间,Bootway,Boot'
      },
      {
        hid: 'x-dns-prefetch-control',
        name: 'x-dns-prefetch-control',
        content: 'on'
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      }
    ],
    link: [
      {
        rel: 'dns-prefetch',
        href: '//bootway.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//www.bootway.com'
      },
      {
        rel: 'dns-prefetch',
        href: '//api.bootway.com'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        size: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: '/favicon-32x32.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/autosize-textarea.js', ssr: false },
    { src: '~/plugins/vuetouch.js', ssr: false },
    { src: '~/plugins/tooltip.js', ssr: false },
    { src: '~/plugins/datepicker', ssr: false },
    { src: '~/plugins/modal' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  router: {
    middleware: ['auth']
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],
  styleResources: {
    scss: [
      '~/assets/css/vars/vars.scss',
      '~/assets/css/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000 // default: 3000
  }
}
