
import { getOdmStatusList } from "@/api/reports/odmstatus";
export default{
namespaced: true,
state: {
    list: [],
    page: 1,
    isLast: false
},
getters: {
      GET_PAGE(state){
        return state.page;
      },
      GET_LIST(state){
        return state.list;
      },
      GET_ISLAST(state) {
        return state.isLast;
      },
},
mutations: {
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
    action_getList({commit,state}){
      return new Promise((resolve, reject) => {
          getOdmStatusList(state.page).then(res => {
              if(res.lenght==0)
              {state.isLast = true;}
              commit("PUSH_LIST", res);
              resolve(res)
          }).catch(error => {
              reject(error)
          })
      })
    },
  },
};