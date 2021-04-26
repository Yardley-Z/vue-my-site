import "./mock";
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import "./styles/global.less";
import showMessage from "@/utils/showMessage.js";
import "./api/banner";
import direct from "@/direct/loading"
Vue.directive('loading', direct)
Vue.prototype.$showMessage = showMessage
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
