import {login} from '@/api/user'
import { getToken, setToken, removeToken,getUserName,setUserName } from '@/utils/auth'

export default {
    namespaced: true,
    state: {
        token:getToken(),
        fullName:getUserName(),
        roles: [],
    },
    getters:{
      GET_USERNAME:(state)=>{return state.fullName;}
    },
    mutations: {
      SET_USERNAME:(state,name)=>{
        state.fullName=name;
      },
      SET_TOKEN: (state, token) => {
        state.token = token
      },
    },
    actions: {
      action_login({ commit }, data) {
        console.log("action_login");
           return new Promise((resolve, reject) => {
      login(data).then(res => {
        const tokenType="Bearer";
        const token = (tokenType + ' ' + res.token)
        commit('SET_USERNAME', res.fullName);
        commit('SET_TOKEN', token);
        setToken(token)
        setUserName(res.fullName)
        console.log(res);
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
      },
      action_logout({ commit }) {
        removeToken();
      },
    },
  };
  