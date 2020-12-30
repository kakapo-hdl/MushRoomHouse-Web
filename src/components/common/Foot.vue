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
      <our-info></our-info>
      <div class="mgj-foot-companyright">
        <company-right></company-right>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyRight from "./commonHome/CompanyRight.vue";
import HeaderDetailItem from "./commonHome/HeaderDetailItem.vue";
import OurInfo from './commonHome/OurInfo.vue';

export default {
  components: { HeaderDetailItem, CompanyRight,OurInfo },
  name:"Foot",
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




.mgj-foot-companyright {
  margin-top: 10px;
  text-align: center;
}
</style>