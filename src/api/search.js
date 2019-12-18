import request from '@/utils/request';

export function search(url) {

  return request({
    url,
    method: 'get'
  })
  
}