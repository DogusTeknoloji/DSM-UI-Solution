import axios from "axios";
import { getToken } from "@/utils/auth";
import router from "../Routes";

const settings = require("../settings.json");
// create an axios instance
const service = axios.create({
  baseURL: settings.apiURL,
  timeout: 30000,
});

// function downloadList(controllerName){
//   axios({
//     url: settings.apiURL + controllerName + '/export/',
//     method: 'GET',
//     responseType: 'blob',
// }).then((response) => {
//      var fileURL = window.URL.createObjectURL(new Blob([response.data]));
//      var fileLink = document.createElement('a');

//      fileLink.href = fileURL;
//      fileLink.setAttribute('download', 'dsm_export.xlsx');
//      document.body.appendChild(fileLink);

//      fileLink.click();
// });
// }

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const token = getToken();
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (response.status !== 200) {
      if (response.status !== 401) {
        window.localStorage.setItem("authenticated", false);
        window.location.href = "/";
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      //   // to re-login
      //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
      //     confirmButtonText: 'Re-Login',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('user/resetToken').then(() => {
      //       location.reload()
      //     })
      //   })
      // }
      // return Promise.reject(new Error(response.message || 'Hata'))
      return Promise.reject(new Error("Hata,İşlemlerinizi Tekrardan Kontrol Ediniz."));
    } 
    else {
      return res;
    }
  },
  (error) => {
    if (error.response.status === 403){
      return Promise.reject(error.response.status);
    }
    if (error.response.status === 400){ 
      return router.push("/error"); 
    }
    if (error.response.status === 401) {
      window.localStorage.setItem("authenticated", false);
      window.location.href = "/";
    } 
    else{
      return Promise.reject(error);
    }
  }
);

export default service;