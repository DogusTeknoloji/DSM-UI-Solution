import { search } from "@/api/search";
export default {
  namespaced: true,
  state: {
    isSearch: false,
    search_text: "",
  },
  getters: {
    Get_ISSEARCH(state) {
      return state.isSearch;
    },
    Get_TEXT(state) {
      return state.search_text;
    },
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
    action_search({ commit, dispatch }, { cModule, text }) {
      return new Promise((resolve, reject) => {
        if (text.length == 0) {

          if (cModule.moduleNameVue != null)
          {
             return new Promise((resolve) => {
                commit(cModule.moduleNameVue + "/SET_LIST", [], { root: true });
                commit("SET_ISSEARCH", false);
                commit(cModule.moduleNameVue + "/SET_PAGE", 1, { root: true });
                dispatch(cModule.moduleNameVue + "/action_getList", 1, { root: true });
                resolve();
              });
          }

          return new Promise((resolve) => {
            commit(cModule.moduleName + "/SET_LIST", [], { root: true });
            commit("SET_ISSEARCH", false);
            commit(cModule.moduleName + "/SET_PAGE", 1, { root: true });
            dispatch(cModule.moduleName + "/action_getList", 1, { root: true });
            resolve();
          });
        }


      if (cModule.moduleNameVue != null){

        let url = "/" + cModule.moduleName + "/search/" + text;
        commit("SET_ISSEARCH", true);
        search(url)
          .then((res) => {
            commit(cModule.moduleNameVue + "/SET_LIST", res, { root: true });
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

          return;
      }


        let url = "/" + cModule.moduleName + "/search/" + text;
        commit("SET_ISSEARCH", true);
        search(url)
          .then((res) => {
            commit(cModule.moduleName + "/SET_LIST", res, { root: true });
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    action_cancel({ commit, dispatch }, { cModule }) {

      if (cModule.moduleNameVue != null)
      {
        return new Promise((resolve) => {
        commit(cModule.moduleNameVue + "/SET_LIST", [], { root: true });
        commit("SET_ISSEARCH", false);
        commit(cModule.moduleNameVue + "/SET_PAGE", 1, { root: true });
        dispatch(cModule.moduleNameVue + "/action_getList", 1, { root: true });
        resolve();
        });
      }

      commit(cModule.moduleName + "/SET_LIST", [], { root: true });
      return new Promise((resolve) => {
        commit("SET_ISSEARCH", false);
        commit(cModule.moduleName + "/SET_PAGE", 1, { root: true });
        dispatch(cModule.moduleName + "/action_getList", 1, { root: true });
        resolve();
      });
    },
    action_change_page({ commit }) {
      commit("SET_ISSEARCH", false);
      commit("SET_TEXT", "");
    },
  },
};
