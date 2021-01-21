import {request} from "./request";

export function getAllUser() {
  return request({
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
