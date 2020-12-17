<template>
      <div class="header-nav">
        <div class="header-nav-wrap">
          <div class="header-nav-content">
            <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/Home20x20.png">
                首页
              </template>
            </navigation-item>

             <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/market20x20.png">
                商城
              </template>
            </navigation-item>

            <navigation-item>
              <template v-slot:title>
               <img src="~assets/image/navgation/IconRowDown.png">
                我的订单
              </template>
            </navigation-item>
             <navigation-item>
              <template v-slot:title>
                关于我们
                  <div class="header-about-us-detail"  style="display:block">
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

                          <div v-for="(certificateText,index) in certificateTexts" :key=index style="float:left">
                             <b v-if="index!=0" class="margin-header-b">  |  </b>
                            <span>{{ certificateText[0] }}</span>
                          </div>

                      </div>
                      <div class="mgj-content-us-localtion"></div>
                    </div>
                  </div>
              </template>
            </navigation-item>

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
import NavigationItem from 'common/commonHome/NavigationItem.vue'
import HeaderDetailItem from 'common/commonHome/HeaderDetailItem.vue'
export default {
  name: 'NavigationHeader',
  components:{
    NavigationItem,
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
 
     ]
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
.header-nav-wrap{
  // width: 1690px;
  margin-left: auto;
  margin-right: auto;
}
.header-nav-content{
  float: right;
  color:#999;
  line-height: 30px;
}
.header-about-us-detail{
  position: absolute;
  right: 30px;
  background-color: #fff;
  z-index: 999;
  box-shadow:0 0 20px 0 #E7EAED;
  border-top: 1px solid #e5e5e5;
  border-radius: 2px;
}
.mgj-detail-content{
  width: 960px;
  font-size: 12px;
  padding-top: 32px;
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
}
.margin-header-b{
  margin: 0 5px 0 5px;
  font-weight: 400;
}

</style>