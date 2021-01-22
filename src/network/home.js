import {request} from "./request";

export function getAllUser() {
  return request({
    method:"Get",
    url: '/api/getAllUser'
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
export function SubmitForm(id) {
  return request({
    url: '/api/Delete',
    method:'PUT',
    params: {
      id,
    }
  })
}