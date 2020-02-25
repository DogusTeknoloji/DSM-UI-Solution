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
