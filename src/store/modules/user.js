import {login} from '@/api/user'
import * as auth from '@/utils/auth'

export default {
    namespaced: true,
    state: {
        token: auth.getToken(),
        userName: auth.getUserName(),
        displayName: auth.getDisplayName(),
        roles: [],
        profilePhoto: auth.getPhoto(),

        company: auth.getCompany(),
        dateOfHire: auth.getDateOfHire(),
        accountCreateDate: auth.getAccountCreateDate(),
        department: auth.getDepartment(),
        location: auth.getLocation(),
        mobilePhone: auth.getMobilePhone(),
        officeName: auth.getOfficeName(),
        title: auth.getTitle(),
    },
    getters:{
      GET_USERNAME:(state)=>{return state.userName;},
      GET_DISPLAYNAME:(state)=>{return state.displayName},
      GET_PHOTO:(state)=>{ return state.profilePhoto;},
      GET_COMPANY:(state)=>{ return state.company},
      GET_DATEOFHIRE:(state)=>{ return state.dateOfHire},
      GET_ACCOUNTCREATEDATE:(state)=>{ return state.accountCreateDate},
      GET_DEPARTMENT:(state)=>{ return state.department},
      GET_LOCATION:(state)=>{ return state.location},
      GET_MOBILEPHONE:(state)=>{ return state.mobilePhone},
      GET_OFFICENAME:(state)=>{ return state.officeName},
      GET_TITLE:(state)=>{ return state.title},
    },
    mutations: {
      SET_USERNAME:(state,name)=>{
        state.userName = name;
      },
      SET_DISPLAYNAME:(state,name)=>{
        state.displayName = name;
      },
      SET_TOKEN: (state, token) => {
        state.token = token;
      },
      SET_PHOTO: (state,photo)=>{
        state.profilePhoto = photo;
      },
      SET_COMPANY: (state,company)=>{
        state.company = company;
      },
      SET_DATEOFHIRE: (state,dateofhire)=>{
        state.dateOfHire = dateofhire;
      },
      SET_ACCOUNTCREATEDATE: (state,accountCreateDate)=>{
        state.accountCreateDate = accountCreateDate;
      },
      SET_DEPARTMENT: (state,department)=>{
        state.department = department;
      },
      SET_LOCATION: (state,location)=>{
        state.location = location;
      },
      SET_MOBILEPHONE: (state,mobilephone)=>{
        state.mobilePhone = mobilephone;
      },
      SET_OFFICENAME: (state,officename)=>{
        state.officeName = officename;
      },
      SET_TITLE: (state,title)=>{
        state.title = title;
      },
    },
    actions: {
      action_login({ commit }, data) {
           return new Promise((resolve, reject) => {
      login(data).then(res => {

        const tokenType="Bearer";
        const token = (tokenType + ' ' + res.token)

        commit('SET_PHOTO',res.profilePhoto);
        commit('SET_DISPLAYNAME',res.fullName);
        commit('SET_USERNAME', res.samAccountName);
        commit('SET_COMPANY',res.company);
        commit('SET_DATEOFHIRE',res.dateofhire);
        commit('SET_ACCOUNTCREATEDATE',res.accountCreateDate);
        commit('SET_DEPARTMENT',res.department);
        commit('SET_LOCATION',res.location);
        commit('SET_MOBILEPHONE',res.mobilePhone);
        commit('SET_OFFICENAME',res.officeName);
        commit('SET_TITLE',res.title);

        commit('SET_TOKEN', token);

        auth.setToken(token);
        auth.setDisplayName(res.fullName);
        auth.setUserName(res.samAccountName);
        auth.setPhoto(res.profilePhoto);
        auth.setCompany(res.company);
        auth.setDateOfHire(res.dateOfHire);
        auth.setAccountCreateDate(res.accountCreateDate);
        auth.setDepartment(res.department);
        auth.setLocation(res.location);
        auth.setMobilePhone(res.mobilePhone);
        auth.setOfficeName(res.officeName);
        auth.setTitle(res.title);

        resolve(true);
      }).catch(error => {
        console.log(error);
        reject(error)
      })
    })
      },
      action_logout() {
        auth.removeToken();
      },
    },
  };
  