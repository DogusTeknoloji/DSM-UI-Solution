import request from '@/utils/request';
const controllerName="/report/odmstatusreport/"

export function getOdmStatusList(data){
    let url=controllerName+data;
    return request({
        url,
        method: 'get'
    })
}

export function getOdmExportSearchList(data) {
    let url = controllerName + 'export/' + data;
    return request({
        url,
        method: 'get',
        responseType: 'blob',
    }).then( (response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download','dsm_export.xlsx')
        document.body.appendChild(fileLink);

        fileLink.click();
    })
}

export function getOdmExportList(){
    let url=controllerName+'export/';
    return request({
        url,
        method: 'get',
        responseType: 'blob'
    }).then( (response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response]));
        var fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download','dsm_export.xlsx')
        document.body.appendChild(fileLink);

        fileLink.click();
    })
}

export function searchOdmStatusList(data){
    let url=controllerName+'search/' + data;
    return request({
        url,
        method: 'get',
    })
}