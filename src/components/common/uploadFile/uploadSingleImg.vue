<template>
  <div>
    <div class="upload-avatar" @click="GetFile()">
      <div class="avatar-image" :style="imageURL == '' ? 'display:none' : ''">
        <img :src="imageURL" alt="无图片" />
      </div>
      <div class="upload-avatar-icon">
        <i class="fa fa-plus"></i>
        <input  style="display: none" accept="*"  type="file" ref="uploadImg"  @change="uploadImage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadSingleImg",
  props: {
    previewURL: String,
  },
  data() {
    return {
      imageURL:''
    };
  },

  created(){
    this.uploadUrl();
  },
  methods: {
    uploadUrl(){
        this.imageURL=this.previewURL
    },
    GetFile() {
      this.$refs.uploadImg.click();
    },
    urlChange(){
       let file = this.$refs.uploadImg.files;
      this.imageURL=this.previewURL;
      if(file.length>0){
        this.$refs.uploadImg.value = ''
      }


    },
    uploadImage() { 
      let file = this.$refs.uploadImg.files[0];
      if(file==undefined){ return}

      if(file.type.indexOf('image')>-1){
      this.imageURL = URL.createObjectURL(file);
      this.$emit('uploadImage',file);
      }else{
        alert('请上传图片文件')
      }

    },
  },
};
</script>
<style lang='less' scoped>
.upload-avatar-lable {
  width: 100px;
  height: 137px;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 137px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.upload-avatar {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;
}
.upload-avatar:hover {
  border: 1px dashed blue;
}
.upload-avatar-icon {
  font-size: 28px;
  color: #8c939d;
  width: 130px;
  height: 130px;
  line-height: 130px;
  text-align: center;
}
.avatar-image {
  position: absolute;
  width: 130px;
  height: 130px;
}
.avatar-image img {
  width: 100%;
  height: 100%;
  // border-radius: 50%;
}
</style>