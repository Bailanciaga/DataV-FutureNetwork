import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import './assets/common.less'

Vue.use(dataV)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')
