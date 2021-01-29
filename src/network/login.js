import {request} from "./request";

export function LoginCheck(data) {
  return request({
    method:"post",
    url: '/api/login',
    data:data,
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // }
  })
}