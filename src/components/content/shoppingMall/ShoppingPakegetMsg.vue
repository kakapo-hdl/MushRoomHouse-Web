<template>
  <div>
    <top-link
      :cateLinks="topLinkContent"
      iconColor="#8FABFF"
      title="女鞋包包">
    </top-link>
    <banner-img :imageAndLink="bannerImg"></banner-img>
    <div class="right-area-message">
      <carousel-three
        class="shoppingHall-carousel"
        :displayCounter="10"
        :imageData="imageData"
        :isDisplayPrice="true"
        :isOringinalPrice="true"
        :autoWiperTime=10000
        :isAutoSwiper="true"
      >
      </carousel-three>
    </div>
    <hot-goods-recommend class="fr"></hot-goods-recommend>
  </div>
</template>

<script>
import CarouselThree from '../../common/carousel/CarouselThree.vue';
import HotGoodsRecommend from '../../common/goodsRecommend/HotGoodsRecommend.vue';
import BannerImg from './component/BannerImg.vue';
import TopLink from './component/TopLink.vue';


export default {
  name: "ShoppingPakegetMsg",
  components: {
    TopLink,
    CarouselThree,
    HotGoodsRecommend,
    BannerImg
  },

  data() {
    return {
      bannerImg: [
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/181031_454bbi840hi2l3h88h3ekeeklk8di_690x1665.jpg_750x9999.v1c7E.81.webp",
        },
        {
          src:
            "https://s10.mogucdn.com/mlcdn/c45406/181031_2615dkk1cjbjei96ai87jlf725da9_690x1665.jpg_750x9999.v1c7E.81.webp",
        },
      ],
      topLinkContent: [
        "单鞋",
        "小白鞋",
        "运动鞋",
        "帆布鞋",
        "斜挎包",
        "双肩包",
        "手提包",
        "拉杆箱",
      ],
      isDisplayPrice: true,
      isOringinalPrice: true,
      displayCounter: 6,
      imageData: [
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/7.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/8.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/3.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/TestImage/4.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "加绒休闲老爹鞋女ins潮",
          src: require("assets/image/TestImage/7.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片8",
          src: require("assets/image/TestImage/8.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片3",
          src: require("assets/image/TestImage/3.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/TestImage/4.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/7.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/8.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "墨锦休闲短外套秋季女2019新款两件套洋气时尚A字高腰半身裙",
          src: require("assets/image/TestImage/3.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/TestImage/4.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "加绒休闲老爹鞋女ins潮",
          src: require("assets/image/TestImage/7.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片8",
          src: require("assets/image/TestImage/8.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片3",
          src: require("assets/image/TestImage/3.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片4",
          src: require("assets/image/TestImage/4.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片5",
          src: require("assets/image/TestImage/5.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片6",
          src: require("assets/image/TestImage/6.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
        {
          text: "图片2",
          src: require("assets/image/TestImage/2.jpg"),
          price: 29.6,
          oriPrice: 33.4,
        },
      ],
    };
  },
};
</script>

<style scoped>
.left-banner {
  overflow: hidden;
  margin-right: 10px;
  float: left;
}
.left-banner img {
  width: 230px;
  height: 624px;
}
.right-area-message {
  float: left;
  height: 624px;
  /* width: 1118px !important; */
  /* padding-left: 12px; */
}
.bottom-banner-first {
  overflow: hidden;
  width: 100%;
  height: 113px;
}
.bottom-banner-first a:first-child {
  width: 470px;
  height: 113px;
  margin-right: 15px;
  display: block;
}
.bottom-banner-first a:not(:first-child) {
  width: 230px;
  height: 113px;
  margin-right: 15px;
  display: block;
}
.bottom-banner-first img {
  width: 100%;
}
.bottom-banner-two {
  width: 100%;
  height: 88px;
  overflow: hidden;
  margin-top: 9px;
}
.bottom-banner-two div {
  float: left;
}
</style>