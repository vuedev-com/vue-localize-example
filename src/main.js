import Vue from 'vue'

Vue.config.debug = true

import VueRouter from 'vue-router' //                           Import and install vue-router
Vue.use(VueRouter)

export var router = new VueRouter({ //                          Create vue-router instance
  linkActiveClass: 'active',
  history: true,
  saveScrollPosition: true,
  root: '/vue-localize-example/dist'
})

import routes from './router' //                         Import router config obejct
import vueLocalizeConf from './config/vue-localize-conf' //     Import config for vue-localize plugin
import store from './vuex/store' //                             Import vuex store (required by vue-localize)
import VueLocalize from 'vue-localize' //                       Import vue-localize plugin
Vue.use(VueLocalize, { //                                       Registering vue-localize plugin
  store,
  config: vueLocalizeConf,
  router: router,
  routes: routes
})

import vueTitsConf from './config/vue-tits-conf' //             Import vue-title-switcher config
import vueTitleSwitcher from 'vue-title-switcher' //            Import vue-title-switcher plugin
Vue.use(vueTitleSwitcher, { //                                  Registering vue-title-switcher plugin
  store: store,
  router: router,
  config: vueTitsConf
})

if (vueLocalizeConf.defaultLanguageRoute) { //                  404 handler. Looks forward to implementation of https://github.com/vuejs/vue-router/issues/382
  router.redirect({
    '*': '/' + vueLocalizeConf.defaultLanguage + '/error404',
    '/': '/' + vueLocalizeConf.defaultLanguage
  })
} else {
  router.redirect({
    '*': '/error404'
  })
}

import App from './components/App' //                           Import App component - root Vue instance

router.start(App, '#app') //                                    Application start
