import request from '@/utils/request';
const controllerName="/dashboard/dashboard/";

export function getDashboard() {
  let url=controllerName;
  return request({
    url,
    method: 'get'
  })
  
}