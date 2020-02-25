import ax from 'axios';
export const axios = ax;
export default{
    install (Vue){
        Vue.prototype.$axios = ax;
    }
}