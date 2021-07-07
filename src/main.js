import "./mock";
import Vue from 'vue'
import App from './App.vue';
import router from './router'
import "./styles/global.less";
import showMessage from "@/utils/showMessage.js";
import "./api/banner";
import vloading from "@/directives/loading";
import vlazy from "@/directives/lazy"
import './eventBus';
import store from "@/store"
Vue.directive('loading', vloading);
Vue.directive('lazy', vlazy)
Vue.prototype.$showMessage = showMessage
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

//测试
// import * as blogApi from "./api/blog";
// blogApi.getBlogTypes().then((r) => {
//   console.log('博客分类', r)
// });
// blogApi.getBlogs(2, 9, 3).then((r) => {
//   console.log('博客', r)
// })