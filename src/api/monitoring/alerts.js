import request from '@/utils/request';
const controllerName = "/monitoring/alerts/";

export function getAlertsItems() {
    let url = controllerName;
    return request({
        url,
        method: 'get'
    });
}