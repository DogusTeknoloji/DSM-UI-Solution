import request from '@/utils/request';
// import axios from 'axios';
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