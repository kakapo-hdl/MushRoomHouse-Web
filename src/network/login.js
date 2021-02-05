import {request} from "./request";

export function LoginCheck(data) {
  return request({
    method:"post",
    url: '/User/login',
    data:data,

  })
}