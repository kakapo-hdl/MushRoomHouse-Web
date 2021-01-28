import {request} from "./request";

export function getAllUser() {
  return request({
    method:"Get",
    url: '/api/getAllUser'
  })
}

export function getSystemUser(id) {
  return request({
    method:"Get",
    url: '/api/getSystemUser',
    params:{
      id
    }
  })
}
export function DeleteUserById(id) {
  return request({
    url: '/api/Delete',
    params: {
      id,
    }
  }) 
}
export function InsertUser(data) {
  return request({
    url: '/api/insert',
    method:'Post',
    data:data,
  })
}