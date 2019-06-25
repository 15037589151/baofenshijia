import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import ElementUI from "element-ui"; // ElementUI
import "element-ui/lib/theme-chalk/index.css";
import "./permission"; //路由判断
// import 'babel-polyfill';
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
