import request from '@/utils/request';
const controllerName="/site/";
export function getSiteList(data,field=null,orderPos=-1) {
  let url=controllerName+data+ "?fi=" + field + "&pos=" + orderPos;
  return request({
    url,
    method: 'get'
  })
  
}
export function getSiteDetails(data) {
  let url=controllerName+"details/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteHeader(data) {
  let url=controllerName+"header/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteBindings(data) {
  let url=controllerName+"bindings/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSitePackages(data) {
  let url=controllerName+"packages/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteEndpoints(data) {
  let url=controllerName+"endpoints/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteConnectionstrings(data) {
  let url=controllerName+"connectionstrings/"+data;
  return request({
    url,
    method: 'get'
  })  
}

export function getExportList(){
  let url= controllerName+"export/";

  request({
        url: url,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
         var fileURL = window.URL.createObjectURL(new Blob([response]));
         var fileLink = document.createElement('a');
    
         fileLink.href = fileURL;
         fileLink.setAttribute('download', 'dsm_export.xlsx');
         document.body.appendChild(fileLink);
    
         fileLink.click();
    });
}

export function getExportSearchList(data){
  let url= controllerName+"export/"+data;

  request({
        url: url,
        method: 'GET',
        responseType: 'blob',
    }).then((response) => {
         var fileURL = window.URL.createObjectURL(new Blob([response]));
         var fileLink = document.createElement('a');
    
         fileLink.href = fileURL;
         fileLink.setAttribute('download', 'dsm_export.xlsx');
         document.body.appendChild(fileLink);
    
         fileLink.click();
    });
}