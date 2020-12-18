import request from '@/utils/request';
const controllerName = "/dashboard/elastic-search-inventory/";

export function getElasticInventoryItems(){
    let url = controllerName;
    return request({
        url,
        method: 'get'
    });
}