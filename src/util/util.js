
export function jsToFormData(obj) { //对象转formdata格式
    const formData = new FormData();
    Object.keys(obj).forEach((key) => {
        if (obj[key] instanceof Array) {
          obj[key].forEach((item) => {
            formData.append(key, item);
          });
          return;
        }
        formData.append(key, obj[key]);
      });
    return formData;
}