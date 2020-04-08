import { getServerList, getServerDetails,getServerSites,getServerHeader,getCheckDate } from '@/api/server'
export default {
  namespaced: true,
  state: {
    list: [],
    server_details: {},
    server_header:{},
    server_sites: [],
    page:1,
    isLast: false,
    checkDate: "",
  },
  getters: {

    GET_SERVER_DETAILS(state) {
      return state.server_details;
    },
    GET_SERVER_HEADER(state) {
      return state.server_header;
    },
    GET_SERVER_SITES(state) {
      return state.server_sites;
    },
    GET_PAGE(state){
      return state.page;
    },
    GET_LIST(state){
      return state.list;
  },
  GET_ISLAST(state) {
    return state.isLast;
  },
  GET_CHECKDATE(state){
    return state.checkDate;
  }
  },
  mutations: {
    SET_SERVER_DETAIL(state, site) {
      state.server_details = site;
    },
    SET_SERVER_HEADER(state, data) {
      state.server_header = data;
    },
    SET_SERVER_SITES(state,data) {
      state.server_sites=data;
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
    SET_CHECKDATE(state,data){
      state.checkDate = data
    },
  },
  actions: {
    action_getList({ commit,state }) {
      return new Promise((resolve, reject) => {
        getServerList(state.page).then(res => {
          if(res.length==0)
          {state.isLast= true;}
          commit("PUSH_LIST",res);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_getServerDetails({ commit }, id) {
      return new Promise((resolve) => {
        getServerDetails(id).then(res => {
          commit("SET_SERVER_DETAIL", res);
          resolve(res);
        })

      })
    },
    action_getServerHeader({ commit }, id) {
      return new Promise((resolve) => {
        getServerHeader(id).then(res => {
          commit("SET_SERVER_HEADER", res);
          resolve(res);
        })

      })
    },
    action_getServerSites({ commit },data) {
      return new Promise((resolve) => {
        getServerSites(data).then(res => {
          commit("SET_SERVER_SITES", res);
          resolve(res);
        })
      })
    },
    action_getCheckDate({ commit }){
      return new Promise((resolve) => {
        getCheckDate().then(res => {
          commit("SET_CHECKDATE",res);
          resolve(res);
        })
      })
    },
  },
};
