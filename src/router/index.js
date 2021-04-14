import Vue from "vue"
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
    //配置
    routes,  //路由匹配规则
    // mode: "history",
})

 export default router