import {request} from "./request"

export function GetAllCategory(){
  return request({
    method:"get",
    url: '/Category/GetAllCategory'
  })
}

export  function InsertCategory(){
  return request({
    method:"post",
    url: '/Category/Insert'
  })
}

export  function DeleteCategory(id){
  return request({
    method:"delete",
    url: '/Category/Delete',
    param:{
        id,
    }
  })
}
export function UpdateCategory(data){
  return request({
    method:"put",
    url: '/Category/Upate',
    param:{
        data
    }
  })
}