import request from '@/utils/request';
const controllerName = "/report/kpistatus/"

export function getKpiStatusList(data) {
    let url = controllerName + data;
    return request({
        url,
        method: 'get'
    })
}