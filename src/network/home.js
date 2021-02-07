import {request} from "./request";

export function getAllUser() {
  return request({
    method:"Get",
    url: '/User/getAllUser'
  })
}

export function getSystemUser(id) {
  return request({
    method:"Get",
    url: '/User/getSystemUser',
    params:{
      id
    }
  })
}
export function DeleteUserById(id) {
  return request({
    url: '/User/Delete',
    params: {
      id,
    }
  }) 
}
export function InsertUser(data) {
  return request({
    url: '/User/insert',
    method:'Post',
    data:data,
  })
}