import { getMonitoringItems } from '@/api/alerts-monitoring'
export default {
    namespaced: true,
    state: {
        msg: ""
    },
    getters: {
        GET_MSG(state) {
            return state.msg;
        }
    },
    mutations: {
        SET_MSG(state, data) {
            state.msg = data;
        },
    },
    actions: {
        action_getMsg({ commit }) {
            return new Promise((resolve, reject) => {
                getMonitoringItems().then(res => {
                    commit("SET_MSG", res);
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    }
};