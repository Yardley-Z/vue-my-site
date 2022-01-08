import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner";
import about from "./about";
import project from "./project"
import setting from "./setting"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        banner,
        about,
        project,
        setting
    },
    strict: true
})