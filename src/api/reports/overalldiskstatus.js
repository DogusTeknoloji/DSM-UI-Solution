import request from '@/utils/request';
const controllerName="/report/overalldiskstatus/";

export function getDiskList(data) {
  let url=controllerName+data;
  return request({
    url,
    method: 'get'
  })
  
}