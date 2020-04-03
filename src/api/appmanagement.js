import request from '@/utils/request';
const controllerName="/dashboard/appmanagement/";

export function getLinkList() {
  let url=controllerName;
  return request({
    url,
    method: 'get'
  })
  
}