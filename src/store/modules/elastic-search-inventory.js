import { getElasticInventoryItems  } from '@/api/elastic-search-inventory';
export default {
    namespaced: true,
    state:{
      list: []
    },
    getters:{
        GET_LIST(state){
            return state.list;
        }
    },
    mutations:{
        SET_LIST(state,data){
            state.list=data;
        },
        PUSH_LIST(state,data){
            state.list.push.apply(state.list,data);
        }
    },
    actions:{
        action_getList({ commit }){
            return new Promise((resolve,reject) => {
                getElasticInventoryItems().then( res => {
                    commit("PUSH_LIST",res);
                    resolve(res);
                }).catch(error => {
                    reject(error);
                })
            });
        }
    }
}