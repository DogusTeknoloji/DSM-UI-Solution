import request from '@/utils/request';
const controllerName="/report/scheduledjobstatus/";

export function getJobList(data) {
  let url=controllerName+data;
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