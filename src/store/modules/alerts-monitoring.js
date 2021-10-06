import { getAlerts  } from '@/api/monitoring/alerts';
export default {
    namespaced: true,
    state:{
      list: [],
      isLast: false,
      page: 1
    },
    getters:{
        GET_LIST(state){
            return state.list;
        },
        GET_ISLAST(state){
            return state.isLast;
        }
    },
    mutations:{
        SET_LIST(state,data){
            state.list=data;
        },
        PUSH_LIST(state,data){
            state.list.push.apply(state.list,data);
        },
        INCREASE_PAGE(state){
            state.page = state.page + 1;
        },
    },
    actions:{
        action_getList({ commit, state}){
            return new Promise((resolve,reject) => {
                getAlerts(state.page).then( res => {
                    if (res.length ==0){
                        state.isLast = true
                    }
                    commit("PUSH_LIST",res);
                    resolve(res);
                }).catch(error => {
                    reject(error);
                })
            });
        }
    }
}