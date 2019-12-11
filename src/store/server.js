import { getServerList, getServerDetails,getServerSites,getServerHeader } from '@/api/server'
export default {
  namespaced: true,
  state: {
    server_list: [],
    server_details: {},
    server_header:{},
    server_sites: [],
    

  },
  getters: {
    GET_SERVER_LIST(state){
        return state.server_list;
    },
    GET_SERVER_DETAILS(state) {
      return state.server_details;
    },
    GET_SERVER_HEADER(state) {
      return state.server_header;
    },
    GET_SERVER_SITES(state) {
      return state.server_sites;
    },
  
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
 
    
  },
  actions: {
    action_getServerList({ commit }, data) {
      return new Promise((resolve, reject) => {
        getServerList(data).then(res => {

          console.log(res);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_getServerDetails({ commit }, id) {
      return new Promise((resolve, reject) => {
        getServerDetails(id).then(res => {
          console.log(res);
          commit("SET_SERVER_DETAIL", res);
          resolve(res);
        })

      })
    },
    action_getServerHeader({ commit }, id) {
      return new Promise((resolve, reject) => {
        getServerHeader(id).then(res => {
          console.log(res);
          commit("SET_SERVER_HEADER", res);
          resolve(res);
        })

      })
    },
    action_getServerSites({ commit },data) {
      return new Promise((resolve, reject) => {
        getServerSites(data).then(res => {
          console.log(res);
          commit("SET_SERVER_SITES", res);
          resolve(res);
        })
      })
    },
  },
};
