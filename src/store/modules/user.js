import {login} from '@/api/user'
import { getToken, setToken, removeToken,getUserName,setUserName,getPhoto,setPhoto } from '@/utils/auth'

export default {
    namespaced: true,
    state: {
        token:getToken(),
        fullName:getUserName(),
        roles: [],
        profilePhoto: getPhoto(),
    },
    getters:{
      GET_USERNAME:(state)=>{return state.fullName;},
      GET_PHOTO:(state)=>{ return state.profilePhoto;},
    },
    mutations: {
      SET_USERNAME:(state,name)=>{
        state.fullName=name;
      },
      SET_TOKEN: (state, token) => {
        state.token = token;
      },
      SET_PHOTO: (state,photo)=>{
        state.profilePhoto = photo;
      },
    },
    actions: {
      action_login({ commit }, data) {
           return new Promise((resolve, reject) => {
      login(data).then(res => {
        const tokenType="Bearer";
        const token = (tokenType + ' ' + res.token)
        commit('SET_PHOTO',res.profilePhoto);
        commit('SET_USERNAME', res.fullName);
        commit('SET_TOKEN', token);
        setToken(token);
        setUserName(res.fullName);
        setPhoto(res.profilePhoto);
        resolve(true);
      }).catch(error => {
        reject(error)
      })
    })
      },
      action_logout() {
        removeToken();
      },
    },
  };
  