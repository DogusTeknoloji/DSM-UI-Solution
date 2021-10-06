import request from '@/utils/request';
const controllerName = "/monitoring/";

export function getAlerts(data) {
    let url = controllerName + 'alerts/' + data;
    return request({
        url,
        method: 'get'
    });
}

export function getContacts(data) {
    let url = controllerName + 'contacts/' + data;
    return request({
        url,
        method: 'get'
    });
}