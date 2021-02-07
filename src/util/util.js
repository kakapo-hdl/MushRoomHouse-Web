

export function JsToFormData(obj) { //对象转formdata格式
  const formData = new FormData();
  Object.keys(obj).map(key=>{
    formData.append(key,obj[key]);
 });
  return formData;
}
export function Format(Date,fmt)   
{ 
var o = {   
  "M+" : Date.getMonth()+1,                 //月份   
  "d+" : Date.getDate(),                    //日   
  "h+" : Date.getHours(),                   //小时   
  "m+" : Date.getMinutes(),                 //分   
  "s+" : Date.getSeconds(),                 //秒   
  "q+" : Math.floor((Date.getMonth()+3)/3), //季度   
  "S"  : Date.getMilliseconds()             //毫秒   
};   
if(/(y+)/.test(fmt))   
  fmt=fmt.replace(RegExp.$1, (Date.getFullYear()+"").substr(4 - RegExp.$1.length));   
for(var k in o)   
  if(new RegExp("("+ k +")").test(fmt))   
fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
console.log(fmt);
return fmt;   
}
// Date.prototype.Format = function(fmt)   
// { //author: meizz   
//   var o = {   
//     "M+" : this.getMonth()+1,                 //月份   
//     "d+" : this.getDate(),                    //日   
//     "h+" : this.getHours(),                   //小时   
//     "m+" : this.getMinutes(),                 //分   
//     "s+" : this.getSeconds(),                 //秒   
//     "q+" : Math.floor((this.getMonth()+3)/3), //季度   
//     "S"  : this.getMilliseconds()             //毫秒   
//   };   
//   if(/(y+)/.test(fmt))   
//     fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
//   for(var k in o)   
//     if(new RegExp("("+ k +")").test(fmt))   
//   fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
//   return fmt;   
// }