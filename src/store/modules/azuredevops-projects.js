import { getProjects} from '@/api/azuredevops'
export default {
  namespaced: true,
  state: {
    list: [],
    orderCol :null,
    orderPos:-1
  },
  getters: {
    GET_LIST(state){
      return state.list;
    }
  },
  mutations: {
    SET_LIST(state,data){
      state.list=data;
    },
    PUSH_LIST(state,data){
      state.list.push.apply(state.list, data);
    },
    SET_ORDER_COL(state,data){
      state.orderCol = data;
    },
    SET_ORDER_POS(state,data){
      state.orderPos = data;
    }
  },
  actions: {
    actionGetProjects( {commit,state }) {
      return new Promise((resolve, reject) => {
        getProjects(state.orderCol,state.orderPos).then((res) => {
          commit("PUSH_LIST",res);
          resolve(res);
        }).catch((error) => {
          reject(error);
        });
      })
    }
  },
};
