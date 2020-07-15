import { search } from '@/api/search'
export default {
  namespaced: true,
  state: {
    isSearch: false,
    search_text:""
  },
  getters: {
    Get_ISSEARCH(state) {
      return state.isSearch;
    },
    Get_TEXT(state) {
      return state.search_text;
    }

  },
  mutations: {
    SET_ISSEARCH(state, data) {
      state.isSearch = data;
    },
    SET_TEXT(state, data) {
      state.search_text = data;
    },

  },
  actions: {
    action_search({ commit, dispatch }, { moduleName, text }) {
      return new Promise((resolve, reject) => {
        if (text.length ==0){
          return new Promise((resolve) => {
            commit(moduleName + "/SET_LIST", [], { root: true });
            commit("SET_ISSEARCH", false)
            commit(moduleName + "/SET_PAGE", 1, { root: true })
            dispatch(moduleName + "/action_getList", 1, { root: true });
            resolve()
          })
        }

        let url = "/" + moduleName + "/search/" + text;
        commit("SET_ISSEARCH", true)
        search(url).then(res => {
          commit(moduleName + "/SET_LIST", res, { root: true });
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_cancel({ commit, dispatch }, { moduleName }) {
      commit(moduleName + "/SET_LIST", [], { root: true });
      return new Promise((resolve) => {
        commit("SET_ISSEARCH", false)
        commit(moduleName + "/SET_PAGE", 1, { root: true })
        dispatch(moduleName + "/action_getList", 1, { root: true });
        resolve()
      })
    },
    action_change_page({ commit }) {
      commit("SET_ISSEARCH", false)
      commit("SET_TEXT", "")
    },

  },
};
