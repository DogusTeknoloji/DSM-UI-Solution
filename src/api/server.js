import request from '@/utils/request';
const controllerName="/server/";

export function getServerList(data) {
  let url=controllerName+data;
  return request({
    url,
    method: 'get'
  })
  
}
export function getServerDetails(data) {
  let url=controllerName+"details/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getServerHeader(data) {
  let url=controllerName+"header/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getServerSites(data) {
  let url="/server/sites/"+data;
  return request({
    url,
    method: 'get'
  })  
}
