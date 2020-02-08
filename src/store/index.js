import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import site from './site';
import server from './server';
import user from './user';
import company from './company';
import search from './search';

import odsreport from './odsreport';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    site,
    server,
    company,
    user,
    search,
    odsreport
  },
});
