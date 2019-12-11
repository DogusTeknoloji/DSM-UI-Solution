import request from '@/utils/request'


export function login(data) {
    return request({
      url: '/users/authenticate',
      method: 'post',
      data
    })
  }