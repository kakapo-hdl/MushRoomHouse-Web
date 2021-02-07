import {request} from "./request"

export function GetAllCategory(){
  return request({
    method:"get",
    url: '/Category/GetAllCategory'
  })
}

// export  function InsertCategory(data){
//   return request({
//     method:"post",
//     url: '/Category/Insert',
//     data:data,
//   })
// }

export  function DeleteCategory(id){
  return request({
    method:"delete",
    url: '/Category/Delete',
    params:{
        id,
    }
  })
}
export function UpdateOrCreate(data){
  return request({
    method:"post",
    url: '/Category/UpdateOrCreate',
    data:data
  })
}