import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Search from './pages/Search.vue';
import App from './App.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
