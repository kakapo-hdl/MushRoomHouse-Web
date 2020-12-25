<template>
  <div class="mgj-content-us-certificate">
    <p>
      <span
        v-for="(certificateText, index) in certificateTexts"
        :key="index"
        style="display: inline-block" >
        <b v-if="index != 0" class="mgj-header-b"> | </b>
        <span><a :href="certificateText[1]">{{ certificateText[0] }} </a></span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ConpanyRight",
  data() {
    return {
      certificateTexts: [
        [
          "营业执照:  913301065526808764 ",
          "https://s10.mogucdn.com/mlcdn/c45406/181119_0a3j5l86651d5ciklai091dd78d41_1239x1753.jpg?acm=3.mce.1_10_19kyq.32170.0.6T7ntsjpwA41d.pos_870-m_223509-sd_119",
        ],
        [
          "营业性演出许可证",
          "https://s5.mogucdn.com/mlcdn/c45406/191106_618hj14k5i3b0959i0b8d6j0gifa4_1653x2338.jpg?acm=3.mce.1_10_1mzcw.32170.0.6T7ntsjpwA41g.pos_871-m_536100-sd_119",
        ],
        [
          "网络文化经营许可证",
          "https://s5.mogucdn.com/mlcdn/c45406/191209_1cg4g6i3l7aflgc4f4ih38251a76j_2480x3507.jpg?acm=3.mce.1_10_1naa0.32170.0.6T7ntsjpwA41j.pos_872-m_543176-sd_119",
        ],
        [
          "网络信息服务信用承诺书",
          "https://s11.mogucdn.com/mlcdn/c45406/200106_4fafdg42lib53g4hdh4f7l9g3ff16.pdf?acm=3.mce.1_10_1niqe.32170.0.mDkrxsjpLNXM5.pos_873-m_548655-sd_119",
        ],
        [
          "增值电信业务经营许可证：浙xx-xxxxxxx",
          "https://s10.mogucdn.com/mlcdn/c45406/171109_1ll0b37l83lj8e3i35h28a92g31i3_1239x1754.jpg?acm=3.mce.1_10_19kys.32170.0.mDkrxsjpLNXM6.pos_874-m_223510-sd_119",
        ],
        [
          "安全责任书",
          "https://s16.mogucdn.com/p2/160831/upload_506h1d771b5k20j9148ldjj0kdaab_960x1344.jpg?acm=3.mce.1_10_19l02.32170.0.mDkrxsjpLNXM7.pos_875-m_223533-sd_119",
        ],
        [
          "浙公网安备 3301060xxxxxxx号",
          "https://s3.mogucdn.com/mlcdn/c45406/190515_0gei4681dhlh0cf9ch0g33j97d88l_20x20.png",
        ],
        [
          "互联网药品信息服务资格证书编号：（浙)-经营性-2018-0002",
          "https://s11.mogucdn.com/mlcdn/c45406/190531_3ggf3f5alhgkl3cgl1869ce3j72ih.pdf?acm=3.mce.1_10_1i4u6.32170.0.otIYFska7MPOf.pos_877-m_423011-sd_119",
        ],      
        [
          "出版物网络交易平台服务经营备案证",
          "http://zw.zjfda.gov.cn/info!new_detail.do?id=59252&acm=3.mce.1_10_1i94i.32170.0.otIYFska7MPOg.pos_878-m_425789-sd_119",
        ], 
        [
          "(浙)网械平台备字[2018]第00006号",
          "https://s3.mogucdn.com/mlcdn/c45406/190627_3h4kj8i8g09edf49kgic1e3k487e3.pdf?acm=3.mce.1_10_1ineu.32170.0.otIYFska7MPOi.pos_880-m_435047-sd_119",
        ],               
      ],
    };
  },
};
</script>
<style lang='less' scoped>
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
</style>