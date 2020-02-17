import request from '@/utils/request';
const controllerName="/report/scheduledjobstatus/";

export function getJobList(data) {
  let url=controllerName+data;
  return request({
    url,
    method: 'get'
  })
  
}