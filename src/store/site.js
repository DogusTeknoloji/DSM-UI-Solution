import { getSiteList, getSiteDetails,getSiteBindings,getSitePackages,getSiteEndpoints,getSiteConnectionstrings,getSiteHeader } from '@/api/site'
export default {
  namespaced: true,
  state: {
    list:[],
    page:1,
    selected_site_id: -1,
    selected_site: {},
    selected_site_header:{},
    selected_site_bindings: [],
    selected_site_backend_services_endpoints: [],
    selected_site_backend_services_direct_db_connection: [],
    selected_site_packages: [],
    isLast: false

  },
  getters: {
    GET_GET_SELECTED_SITE_ID(state){
      return state.selected_site_id;
    },
    GET_SELECTED_SITE(state) {
      return state.selected_site;
    },
    GET_SELECTED_SITE_HEADER(state) {
      return state.selected_site_header;
    },
    GET_SELECTED_SITE_BINDINGS(state) {
      return state.selected_site_bindings;
    },
    GET_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS(state) {
      return state.selected_site_backend_services_endpoints;
    },
    GET_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION(state) {
      return state.selected_site_backend_services_direct_db_connection;
    },
    GET_SELECTED_SITE_PACKAGES(state) {
      return state.selected_site_packages;
    },
    GET_LIST(state){
      return state.list;
    },
    GET_PAGE(state){
      return state.page;
    },
    GET_ISLAST(state) {
      return state.isLast;
    },
  },
  mutations: {
    SET_SELECT_SITE_ID(state, id) {
      state.selected_site_id = id;
    },
    SET_SELECT_SITE(state, site) {
      state.selected_site = site;
    },
    SET_SELECT_SITE_HEADER(state, data) {
      state.selected_site_header = data;
    },
    SET_SELECTED_SITE_BINDINGS(state,data) {
      state.selected_site_bindings=data;
    },
    SET_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS(state,data) {
      state.selected_site_backend_services_endpoints=data;
    },
    SET_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION(state,data) {
      state.selected_site_backend_services_direct_db_connection=data;
    },
    SET_SELECTED_SITE_PACKAGES(state,data) {
      state.selected_site_packages=data;
    },
    SET_LIST(state,data){
      state.list=data;
    },
    PUSH_LIST(state,data){
      state.list.push.apply(state.list, data);
    },
    SET_PAGE(state,data){
      state.page=data;
    },
    INCREASE_PAGE(state){
      state.page=state.page+1;
    },
 
  },
  actions: {
    action_getList({ commit,state }) {
      return new Promise((resolve, reject) => {
        getSiteList(state.page).then(res => {
          if(res.length==0)
          {state.isLast= true;}
          commit("PUSH_LIST",res);
          console.log(res);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_getSite({ commit }, id) {
      return new Promise((resolve, reject) => {
        getSiteDetails(id).then(res => {
          console.log(res);
          commit("SET_SELECT_SITE", res);
          commit("SET_SELECT_SITE_ID",id);
          resolve(res);
        })

      })
    },
    action_getSiteHeader({ commit }, id) {
      return new Promise((resolve, reject) => {
        getSiteHeader(id).then(res => {
          console.log(res);
          commit("SET_SELECT_SITE_HEADER", res);
          resolve(res);
        })

      })
    },
    action_SELECTED_SITE_BINDINGS({ commit },data) {
      return new Promise((resolve, reject) => {
        getSiteBindings(data).then(res => {
          console.log(res);
          commit("SET_SELECTED_SITE_BINDINGS", res);
          resolve(res);
        })
      })
    },
    action_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS({ commit },data) {
      return new Promise((resolve, reject) => {
        getSiteEndpoints(data).then(res => {
          console.log(res);
          commit("SET_SELECTED_SITE_BACKEND_SERVICES_ENDPOİNTS", res);
          resolve(res);
        }).catch(err=>{
          reject(err);
        })
      })
    },
    action_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION({ commit },data) {
      return new Promise((resolve, reject) => {
        getSiteConnectionstrings(data).then(res => {
          console.log(res);
          commit("SET_SELECTED_SITE_BACKEND_SERVICES_DIRECT_DB_CONNECTION", res);
          resolve(res);
        }).catch(err=>{
          reject(err);
        })
      })
    },
    action_SELECTED_SITE_PACKAGES({ commit },data) {
      return new Promise((resolve, reject) => {
        getSitePackages(data).then(res => {
          console.log(res);
          commit("SET_SELECTED_SITE_PACKAGES", res);
          resolve(res);
        })
      })
    },
  },
};
