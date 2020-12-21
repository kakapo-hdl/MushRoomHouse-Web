<template>
      <div class="header-nav">
        <div class="header-nav-wrap">
          <div class="header-nav-content">
            <div class="header-nav-item">      
              <img src="~assets/image/navgation/Home20x20.png">
              首页
             </div>  
            <b style="margin:0 20px 0 20px; height:33px; font-weight:300">|</b>     
           <div class="header-nav-item">     
            <img src="~assets/image/navgation/market20x20.png">
                商城
            </div>
           <b style="margin:0 20px 0 20px; height:33px; font-weight:300">|</b>     
           <div class="header-nav-item">   
              我的订单
           </div>
           <b style="margin:0 20px 0 20px; height:33px; font-weight:300">|</b>     
            <div class="header-nav-item"   @mouseover=openHeaderMsg @mouseleave="closeHeaderMsg"> 
                关于我们
                <img src="~assets/image/navgation/IconRowDown.png">
                  <div class="header-about-us-detail" :style=isShowHeaderMsg  >
                    <div class="mgj-detail-content">
                      <div class="mgj-content-us-msg">
                        <header-detail-item :Contents=helperText ></header-detail-item>
                        <header-detail-item :Contents=rightSecurity ></header-detail-item>
                        <header-detail-item :Contents=payMethod ></header-detail-item>
                        <header-detail-item :Contents=download ></header-detail-item>
                        <header-detail-item :Contents=shopServe ></header-detail-item>
                        <header-detail-item :Contents=aboutUs ></header-detail-item>
                      </div>
                      <div class="mgj-content-us-hostname">
                        <span>©2020 Mogu.com 杭州卷瓜网络有限公司</span>
                      </div>
                      <div class="mgj-content-us-certificate">
                        <p>
                          <span v-for="(certificateText,index) in certificateTexts" :key=index   style="display: inline-block">
                             <b v-if="index!=0" class="mgj-header-b">  |  </b>
                            <span><a :href=certificateText[1]>{{ certificateText[0] }} </a></span>
                          </span>
                        </p>
                          <a style="display: inline-block">浙公网安备 3301060xxxxxxx号 <b class="mgj-header-b"> | </b></a> 
                          <a style="display: inline-block">互联网药品信息服务资格证书编号：（浙)-经营性-xxxx-xxxx <b class="mgj-header-b"> | </b></a> 
                          <a style="display: inline-block">浙网食A33010003 <b class="mgj-header-b"> | </b></a> 
                          <a style="display: inline-block">出版物网络交易平台服务经营备案证 <b class="mgj-header-b"> | </b></a> 
                          <a style="display: inline-block">(浙)网械平台备字[2018]第0000x号 </a> 
                          <div class="mgj-content-us-localtion">联系电话：077-8848-666（在线时间：09：00-22：00）浙江省杭州市西湖区古墩路xx号浙商财富中心x号楼</div>
                      </div>
                      
                    </div>
                  </div>
            </div>

            <!-- <div v-for="(title,index) in titles" class="header-nav-item" :key="index">
              <span v-if="index!=0" style="margin-right:10px">|</span> 
              <div v-if="title[1]===''" style="display:none"></div>
              <div v-else class="header-nav-item"><img :src="title[1]"></div>
              {{title[0]}}
            </div> -->
          </div>
        </div> 
      </div>
</template>

<script>
// import NavigationItem from 'common/commonHome/NavigationItem.vue'
import HeaderDetailItem from 'common/commonHome/HeaderDetailItem.vue'
export default {
  name: 'NavigationHeader',
  components:{
    // NavigationItem,
    HeaderDetailItem
  },
  props:{
    title:String,
    imageUrl:String
  },
  data(){
    return{
      titles:[
        ['首页',require('assets/image/navgation/Home20x20.png') ],
        ['商城',require('assets/image/navgation/market20x20.png')],
        ['我的订单',require("assets/image/navgation/IconRowDown.png")],
        ['关于我们','']
        ],
      helperText:[
        ['新手帮助',''],['常见问题','#'],['自助服务','#'],['联系客服','#'],['意见反馈','#']
      ],
      rightSecurity:[
        ['权益保障',''],['全国包邮','#'],['7天无理由退货','#'],['退货运费补贴','#'],['限时发货','#']
      ],
      payMethod:[
        ['支付方式',''],['支付宝','#'],['白富美支付','#']
      ],
      download:[
        ['移动客户端下载',''],['蘑菇街','#'],['美丽说','#'],['uni引力','#'],
      ],
      shopServe:[
        ['商家服务',''],['商家入驻','#'],['蘑菇街商学院','#'],['规则中心','#'],['规则众议院','#']
      ],
      aboutUs:[
        ['关于我们',''],['招聘信息','#'],['联系我们','#'],['有害信息举报','#'],['用户隐私保护','#']
      ],
      certificateTexts:[
        ['营业执照:  913301065526808764 ','https://s10.mogucdn.com/mlcdn/c45406/181119_0a3j5l86651d5ciklai091dd78d41_1239x1753.jpg?acm=3.mce.1_10_19kyq.32170.0.6T7ntsjpwA41d.pos_870-m_223509-sd_119'],
        ['营业性演出许可证','https://s5.mogucdn.com/mlcdn/c45406/191106_618hj14k5i3b0959i0b8d6j0gifa4_1653x2338.jpg?acm=3.mce.1_10_1mzcw.32170.0.6T7ntsjpwA41g.pos_871-m_536100-sd_119'],
        ['网络文化经营许可证','https://s5.mogucdn.com/mlcdn/c45406/191209_1cg4g6i3l7aflgc4f4ih38251a76j_2480x3507.jpg?acm=3.mce.1_10_1naa0.32170.0.6T7ntsjpwA41j.pos_872-m_543176-sd_119'],
        ['网络信息服务信用承诺书','https://s11.mogucdn.com/mlcdn/c45406/200106_4fafdg42lib53g4hdh4f7l9g3ff16.pdf?acm=3.mce.1_10_1niqe.32170.0.mDkrxsjpLNXM5.pos_873-m_548655-sd_119'],
        ['增值电信业务经营许可证：浙xx-xxxxxxx','https://s10.mogucdn.com/mlcdn/c45406/171109_1ll0b37l83lj8e3i35h28a92g31i3_1239x1754.jpg?acm=3.mce.1_10_19kys.32170.0.mDkrxsjpLNXM6.pos_874-m_223510-sd_119'],
        ['安全责任书','https://s16.mogucdn.com/p2/160831/upload_506h1d771b5k20j9148ldjj0kdaab_960x1344.jpg?acm=3.mce.1_10_19l02.32170.0.mDkrxsjpLNXM7.pos_875-m_223533-sd_119']
        ],
      isShowHeaderMsg:{display:'none'}
    }
  },
  methods:{
    closeHeaderMsg: function(){
      this.isShowHeaderMsg.display='none';
    },
    openHeaderMsg: function(){
      this.isShowHeaderMsg.display='block';
    }

  }
  
}
</script>
<style lang='less' scoped>
.header-nav{
  float: right;
  height: 33px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  width:100%;
}
// .header-nav-wrap{
//    width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
// }
.header-nav-content{
  float: right;
  color:#999;
  line-height: 30px;
}

.header-about-us-detail{
  position: absolute;
  right: 30px;
  background-color: #fff;
  z-index: 9999;
  box-shadow:0 0 20px 0 #E7EAED;
  border-top: 1px solid #e5e5e5;
  border-radius: 2px;
}
.mgj-detail-content{
  width: 960px;
  font-size: 12px;
  padding: 32px 0 32px 0;
  color: #333;

}
.mgj-content-us-msg{
  width: 100%;
  margin-left: 42px;
  display: flex;
}
.mgj-content-us-hostname{
  font-weight: 100;


}
.mgj-content-us-hostname span{
  color: #666;
  padding:0 26px 0 26px;
  margin: 28px 42px 0 42px;
   display: flex;
}
.mgj-content-us-hostname :before{
  content: "";
  flex: 1;
  border-bottom: solid 1px #999;
  font-weight: 100;
  transform:translate(0,-50%) ;
}
.mgj-content-us-hostname :after{
  content: "";
  flex: 1;
  border-bottom: solid 1px #999;
  font-weight: 100;
  transform:translate(0,-50%) ;
}
.mgj-content-us-certificate{
  margin-top: 6px;
  font-size: 12px;
  line-height: 26px;
  font-weight: 300;
  text-align: center;
  color: #999;
}
.mgj-header-b{
  margin: 0 5px 0 5px;
  font-weight: 400;
}
a:-webkit-any-link{
  color: #999;
}
.mgj-content-us-localtion{

  text-align: center;
}
.header-nav-item{
  line-height: 33px;
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  cursor:pointer;
}
.header-nav-item img{
 width: 10px;
 height: 10px;
 margin-right: 3px;
 vertical-align: middle;
 display: inline-block;
}


</style>