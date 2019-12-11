import axios from 'axios';
import request from '@/utils/request';

export function getSiteList(data) {
  let url="/site/"+data;
  return request({
    url,
    method: 'get'
  })
  
}
export function getSiteDetails(data) {
  let url="/site/details/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteHeader(data) {
  let url="/site/header/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteBindings(data) {
  let url="/site/bindings/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSitePackages(data) {
  let url="/site/packages/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteEndpoints(data) {
  let url="/site/endpoints/"+data;
  return request({
    url,
    method: 'get'
  })  
}
export function getSiteConnectionstrings(data) {
  let url="/site/connectionstrings/"+data;
  return request({
    url,
    method: 'get'
  })  
}