<template>
  <div class="foot-wrap">
    <div class="foot-copyright">
      <div class="mgj-foot-icon">
        <a href="" target="_blank">
          <img src="~assets/image/foot/footicon.png" />
        </a>
      </div>
      <div class="mgj-foot-help">
        <header-detail-item :Contents="helperText"></header-detail-item>
        <header-detail-item :Contents="rightSecurity"></header-detail-item>
        <header-detail-item :Contents="payMethod"></header-detail-item>
        <header-detail-item :Contents="download"></header-detail-item>
      </div>
      <div class="mgj-foot-info">
        <ul class="mgj-foot-list">
          <li v-for="item in shopInfo" class="mgj-foot-item" :key="item[0]">
            {{ item[0] }}
          </li>
        </ul>
      </div>
      <div class="mgj-foot-companyname">
        <span>©2020 Mogu.com 杭州卷瓜网络有限公司</span>
      </div>
      <div class="mgj-foot-companyright">
        <company-right></company-right>
        <!-- <a style="display: inline-block"
          >浙公网安备 3301060xxxxxxx号 <b class="mgj-header-b"> | </b></a
        >
        <a style="display: inline-block"
          >互联网药品信息服务资格证书编号：（浙)-经营性-xxxx-xxxx
          <b class="mgj-header-b"> | </b></a
        >
        <a style="display: inline-block"
          >浙网食A33010003 <b class="mgj-header-b"> | </b></a
        >
        <a style="display: inline-block"
          >出版物网络交易平台服务经营备案证 <b class="mgj-header-b"> | </b></a
        >
        <a style="display: inline-block">(浙)网械平台备字[2018]第0000x号 </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import CompanyRight from "./commonHome/CompanyRight.vue";
import HeaderDetailItem from "./commonHome/HeaderDetailItem.vue";

export default {
  components: { HeaderDetailItem, CompanyRight },
  name: "Foot",
  data() {
    return {
      helperText: [
        ["新手帮助", ""],
        ["常见问题", "#"],
        ["自助服务", "#"],
        ["联系客服", "#"],
        ["意见反馈", "#"],
      ],
      rightSecurity: [
        ["权益保障", ""],
        ["全国包邮", "#"],
        ["7天无理由退货", "#"],
        ["退货运费补贴", "#"],
        ["限时发货", "#"],
      ],
      payMethod: [
        ["支付方式", ""],
        ["微信支付", "#"],
        ["支付宝", "#"],
        ["白富美支付", "#"],
      ],
      download: [
        ["移动客户端下载", ""],
        ["蘑菇街", "#"],
        ["美丽说", "#"],
        ["uni引力", "#"],
      ],
      shopInfo: [
        ["关于我们", ""],
        ["招聘信息", "#"],
        ["联系我们", "#"],
        ["有害信息举报", "#"],
        ["规则众议院", "#"],
        ["商家服务", ""],
        ["商家入驻", "#"],
        ["规则中心", "#"],
        ["用户隐私保护", "#"],
      ],
    };
  },
};
</script>
<style lang='less' scoped>
.foot-wrap {
  min-height: 180px;
  background-image: url("../../assets/image/foot/footpicture.jpg");
  margin-top: 50px;
  padding: 50px 0 24px 0;
  background-size: cover;
}
.foot-copyright {
  color: #fff !important;
  min-height: 180px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-family: "PingFang SC", "Times New Roman", "Microsoft YaHei",
    "\5FAE\8F6F\96C5\9ED1", STXihei, "\534E\6587\7EC6\9ED1", serif;
}

.mgj-foot-icon {
  width: 140px;
  margin: 0 auto 48px auto;
}
.mgj-foot-icon img {
  width: 100%;
}
.mgj-foot-help {
  width: 100;
  margin-left: 40px;
  display: flex;
}
.mgj-foot-info {
  min-height: 20px;
  margin-top: 50px;
  overflow: hidden;
}
.mgj-foot-item {
  display: inline-block;
}
.mgj-foot-list {
  text-align: center;
}
.mgj-foot-item:not(:first-child):before {
  content: "|";
  margin: 0 28px;
  font-weight: 300;
}
.mgj-foot-companyname {
  font-weight: 100;
  text-align: center;
  margin-top: 20px;
  display: flex;
}
.mgj-foot-companyname span {
  padding: 0 26px 0 26px;
}

.mgj-foot-companyname::before {
  flex: 1;
  content: "";
  border-color: #fff;
  border-bottom: 1px solid #fff;
  transform: translate(0, -50%);
}
.mgj-foot-companyname::after {
  flex: 1;
  content: "";
  border-color: #fff;
  border-bottom: 1px solid #fff;
  transform: translate(0, -50%);
}
.mgj-foot-companyright {
  margin-top: 10px;
  text-align: center;
}
</style>