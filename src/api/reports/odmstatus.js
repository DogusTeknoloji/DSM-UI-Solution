import request from '@/utils/request';
const controllerName="/report/odmstatusreport/"

export function getOdmStatusList(data){
    let url=controllerName+data;
    return request({
        url,
        method: 'get'
    })
}