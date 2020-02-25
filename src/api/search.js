import request from '@/utils/request';

export function search(url) {

  return request({
    url,
    method: 'get'
  })
  
}

export function getExportList(url){
  let apiUrl= url;

  request({
        url: apiUrl,
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