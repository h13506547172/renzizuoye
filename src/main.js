import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
import '@/styles/base.css'
import '@/styles/index.css'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
