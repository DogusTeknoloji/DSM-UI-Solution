import {search} from '@/api/search'
import {  } from "./site";
import { Store } from 'vuex';
export default {
  namespaced: true,
  state: {
   isSearch:false
  },
  getters: {
    Get_ISSEARCH(state){
      return state.isSearch;
    }
  
  },
  mutations: {
    SET_ISSEARCH(state,data){
      state.isSearch=data;
    },
 
    
  },
  actions: {
    action_search({ commit }, {moduleName,text}) {
        commit(moduleName+"/SET_LIST",[],{ root: true });
      return new Promise((resolve, reject) => {
          let url="/"+moduleName+"/search/"+text;
          commit("SET_ISSEARCH",true)
          search(url).then(res => {
          
         
          commit(moduleName+"/SET_LIST",res,{ root: true });
           
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    action_cancel({ commit,dispatch }, {moduleName}) {
      commit(moduleName+"/SET_LIST",[],{ root: true });
      commit(moduleName+"/SET_PAGE",1,{ root: true });
    return new Promise((resolve, reject) => {
        commit("SET_ISSEARCH",false)
        commit(moduleName+"/SET_PAGE",1,{root:true})
        dispatch(moduleName+"/action_getList", 1,{ root: true }).then(
          res => {
            
          },
          err => {
            console.log(err);
          }
        );
       
         
        resolve()
     
    })
  },
   
  },
};
