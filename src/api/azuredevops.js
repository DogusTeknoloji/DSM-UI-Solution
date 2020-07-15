import request from '@/utils/request';
const controllerName="/AzureDevOps/";

export function getProjects(field=null,orderPos=-1) {
  let url=controllerName+ "projects?fi=" + field + "&pos=" + orderPos;
  return request({url, method: 'get' })  
}

export function getDeploymentGroups(field=null,orderPos=-1){
    let url = controllerName + "deployment-groups?fi=" + field + "&pos=" + orderPos;
    return request({ url, method:'get'});
}

export function getDeploymentAgents(field=null,orderPos=-1){
    let url = controllerName + "deployment-agents?fi=" + field + "&pos=" +orderPos;
    return request({url,method:'get'});
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

export function getCheckDate(){
  let url = "/server/ServerCheckDate/";
  return request({
    url,
    method: 'get'
  });
}