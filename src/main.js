// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "expose-loader?jQuery!jquery"; // eslint-disable-line
import "expose-loader?$!jquery"; // eslint-disable-line
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import VCalendar from "v-calendar";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueAxios from "./utils/axios";
import { ServerTable, ClientTable } from "vue-tables-2";

import store from "./store";
import router from "./Routes";
import App from "./App";

Vue.use(BootstrapVue);
Vue.use(ElementUI);
Vue.use(VueAxios);
Vue.use(VCalendar, {
  firstDayOfWeek: 2, // Monday
});
Vue.use(ServerTable);
Vue.use(ClientTable);
window.moment = require("moment");

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  // if (!isAuthenticated) next('/login')
  // else next()

  if (to.fullPath == "/login"){
    next();
  }
  else if (window.localStorage.getItem("authenticated") === "false"){
    if (window.location.pathname !== "/login"){
      next("/login");
    }
  }
  else {
    store.dispatch("search/action_change_page");
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
