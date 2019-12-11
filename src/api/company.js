import request from '@/utils/request';
const controllerName="/company/";

export function getCompanyList(data) {
  let url=controllerName+data;
  return request({
    url,
    method: 'get'
  })
  
}

export function getCompanyHeader(data) {
  let url=controllerName+"header/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getCompanyServers(data) {
    let url=controllerName+"servers/"+data;
    return request({
      url,
      method: 'get'
    })  
  }
export function getCompanySites(data) {
  let url=controllerName+"sites/"+data;
  return request({
    url,
    method: 'get'
  })  
}
