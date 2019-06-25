import Vue from "vue";
import Router from "vue-router";
const _import = require("./_import_production");
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/layout",
      name: "主页",
      component: _import("layout/index"),
      children: [
        {
          path: "home",
          name: "首页",
          component: () => import("@/views/layout/home")
        }
      ]
    }
  ]
});
