import request from "@/utils/request";
const controllerName = "/databaseportal/";

export function getServerList(data) {
  let url = controllerName + "databases?page=" + data;
  return request({
    url,
    method: "get",
  });
}
export function getServerDetails(id) {
  let url = controllerName + "details?id=" + id;
  return request({
    url,
    method: "get",
  });
}
export function getServerHeader(data) {
  let url = controllerName + "header/" + data;
  return request({
    url,
    method: "get",
  });
}
export function getServerSites(data) {
  let url = "/databaseportal/databases/" + data;
  return request({
    url,
    method: "get",
  });
}

export function getCheckDate() {
  let url = "/databaseportal/ServerCheckDate/";
  return request({
    url,
    method: "get",
  });
}

export function getExportList() {
  let url = controllerName + "export/";

  request({
    url: url,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    var fileURL = window.URL.createObjectURL(new Blob([response]));
    var fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", "dsm_export.xlsx");
    document.body.appendChild(fileLink);

    fileLink.click();
  });
}

export function getRDPFile(data) {
  let url = controllerName + "connect/";

  request({
    url: url,
    method: "POST",
    responseType: "blob",
    data,
  }).then((response) => {
    var fileURL = window.URL.createObjectURL(new Blob([response]));
    var fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", "connection.rdp");
    document.body.appendChild(fileLink);

    fileLink.click();
  });
}

export function getExportSearchList(data) {
  let url = controllerName + "export/" + data;

  request({
    url: url,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    var fileURL = window.URL.createObjectURL(new Blob([response]));
    var fileLink = document.createElement("a");

    fileLink.href = fileURL;
    fileLink.setAttribute("download", "dsm_export.xlsx");
    document.body.appendChild(fileLink);

    fileLink.click();
  });
}
