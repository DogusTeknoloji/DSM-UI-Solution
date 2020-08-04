import Vue from "vue";
import Vuex from "vuex";

import layout from "./modules/layout";
import site from "./modules/site";
import server from "./modules/server";
import user from "./modules/user";
import company from "./modules/company";
import search from "./modules/search";

import azdevopsprojects from "./modules/azuredevops-projects";
import azdevopsdepgroups from "./modules/azuredevops-dgroups";
import azdevopsdepagents from "./modules/azuredevops-dagents";

import odsreport from "./modules/odsreport";
import portal from "./modules/portal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    site,
    server,
    company,
    user,
    search,
    azdevopsprojects,
    azdevopsdepgroups,
    azdevopsdepagents,
    odsreport,
    portal,
  },
});
