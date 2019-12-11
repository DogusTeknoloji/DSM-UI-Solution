import { getCompanyList, getCompanyServers,getCompanySites,getCompanyHeader } from '@/api/company'
export default {
  namespaced: true,
  state: {
    company_servers: {},
    company_header:{},
    company_sites: [],
    

  },
  getters: {
    GET_COMPANY_LIST(state){
        return state.company_list;
    },
    GET_COMPANY_SERVERS(state) {
      return state.company_servers;
    },
    GET_COMPANY_HEADER(state) {
      return state.company_header;
    },
    GET_COMPANY_SITES(state) {
      return state.company_sites;
    },
  
  },
  mutations: {

    SET_Company_SERVERS(state, site) {
      state.company_servers = site;
    },
    SET_COMPANY_HEADER(state, data) {
      state.company_header = data;
    },
    SET_COMPANY_SITES(state,data) {
      state.company_sites=data;
    },
 
    
  },
  actions: {
    action_getCompanyList({ commit }, data) {
      return new Promise((resolve, reject) => {
        getCompanyList(data).then(res => {

          console.log(res);
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_getCompanyServers({ commit }, id) {
      return new Promise((resolve, reject) => {
        getCompanyServers(id).then(res => {
          console.log(res);
          commit("SET_Company_SERVERS", res);
          resolve(res);
        })

      })
    },
    action_getCompanyHeader({ commit }, id) {
      return new Promise((resolve, reject) => {
        getCompanyHeader(id).then(res => {
          console.log(res);
          commit("SET_COMPANY_HEADER", res);
          resolve(res);
        })

      })
    },
    action_getCompanySites({ commit },data) {
      return new Promise((resolve, reject) => {
        getCompanySites(data).then(res => {
          console.log(res);
          commit("SET_COMPANY_SITES", res);
          resolve(res);
        })
      })
    },
  },
};