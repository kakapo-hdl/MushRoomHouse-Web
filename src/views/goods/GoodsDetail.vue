<template>
  <div>
    <navigation-float></navigation-float>
    <navigation-header></navigation-header>
    <navigation-bar></navigation-bar>

    <div class="goods-wrap">
      <div class="fl" style="width:620px">
        <carousel></carousel>
        <div class="comment-text">
          高端货和便宜货的区别，大家自己看吧哈<br /><br />看着像不代表一样，我们只做高端品质，谢谢我家粉丝的信任和支持，爱你们❤️
        </div>
        <!-- 评论信息的标题 -->
        <div class="look-detail text-999">
          <div class="fl">
            <div class="text-999">
              18 天前 <span class="text-splitter" /> 6.1万浏览
              <span class="text-splitter" />
              2评论
            </div>
          </div>
          <div class="fr">
            <div class="fa fa-share-square-o"></div>
            <div class="fa fa-star-o">收藏</div>
            <div class="fa fa-thumbs-o-up" style="margin-right: 0">13</div>
          </div>
        </div>
        <!-- 评论输入框 -->
        <div class="comment-input-block">
          <input type="text" class="comment-input fl"  placeholder="长得那么好看的你也来评论一下吧~"/>
          <input type="submit" class="comment-submit fr" value="发表" />
        </div>
        <!-- 评论展示 -->
        <div class="comment-display-wrap" >
          <div v-for="(item, index) in commentText" :key="index" class="comment-display-item">
            <div class="comment-user-info">
              <div class="comment-user-image">
                <img :src="item.userImage" />
              </div>
              <div class="comment-user-status">
                <div>
                  {{ item.userName }}
                  <div class="user-icon-action">
                    <span class="fa fa-commenting-o icon-action" @click="showHiddenInput(index)" ref='commentingIcon'>
                    </span>
                    <span class="fa fa-thumbs-o-up icon-action"></span>
                    {{ item.thumbsUp }}
                  </div>
                </div>
                <div>{{ item.commentDate }}</div>
              </div>
            </div>
            <div class="comment-conent-wrap">
              <div class="comment-conent-text">
                {{item.commentText}}
              </div>
          <div class="comment-input-block"  style="display:none" ref="replyInput">
          <input type="text" class="comment-input fl" :placeholder='"回复@"+item.userName' style="width:477px">
          <input type="submit" class="comment-submit fr" value="发表" />
        </div>
              <div class="comment-content-child">
                <div v-for="(itemchild,index) in item.commentCommunity" :key="index">
                  <div style="margin-bottom:8px; color:#333" v-if="itemchild.isSelf">Zhing蛮大大大: {{itemchild.replyText}}</div>
                  <div style="margin-bottom:8px; color:#333" v-else>{{item.userName}}: {{itemchild.replyText}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <men-introduction class="fr" :images="images"></men-introduction>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Carousel from "../../components/common/commonHome/CarouselGoods.vue";
import MenIntroduction from "../../components/common/commonHome/MenIntroduction.vue";
import Foot from "../../components/common/Foot.vue";
import NavigationBar from "../../components/common/NavigationBar.vue";
import NavigationFloat from "../../components/common/NavigationFloat.vue";
import NavigationHeader from "../../components/common/NavigationHeader.vue";
export default {
  components: {
    NavigationFloat,
    NavigationHeader,
    Foot,
    NavigationBar,
    Carousel,
    MenIntroduction,
  },
  name: "goods",
  data() {
    return {
      images: [
        { text: "图片2", src: require("assets/image/TestImage/2.jpg") },
        { text: "图片3", src: require("assets/image/TestImage/3.jpg") },
        { text: "图片4", src: require("assets/image/TestImage/4.jpg") },
        { text: "图片5", src: require("assets/image/TestImage/5.jpg") },
        { text: "图片6", src: require("assets/image/TestImage/6.jpg") },
        { text: "图片7", src: require("assets/image/TestImage/7.jpg") },
      ],
      commentText: [
        {
          userImage:
            "https://s11.mogucdn.com/mlcdn/5abf39/180914_861kh7jlkjheb6c29ffh07j4jjl91_400x400.jpg_64x64.webp",
          userName: "王娜what",
          commentDate: "2020.12.24 07:13",
          thumbsUp: 8,
          commentText:
            "以为不播了，吓了一跳，大大对真爱粉真的宠爱，我升真爱收到大大送的衣服，质量超级好！大大卖的东西性价比高质量好，是个优秀的主播，我会一直支持你的！爱你呦！[爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你]",
          commentCommunity: [
            { isSelf: true, replyText: "恭喜宝贝中奖了 私聊我地址" },
            { isSelf: false, replyText: "谢谢大大" },
          ],
        },
        {
          userImage:
            "https://s11.mogucdn.com/mlcdn/5abf39/180914_861kh7jlkjheb6c29ffh07j4jjl91_400x400.jpg_64x64.webp",
          userName: "王娜111",
          commentDate: "2020.12.24 07:13",
          thumbsUp: 8,
          commentText:
            "以为不播了，吓了一跳，大大对真爱粉真的宠爱，我升真爱收到大大送的衣服，质量超级好！大大卖的东西性价比高质量好，是个优秀的主播，我会一直支持你的！爱你呦！[爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你][爱你]",
          commentCommunity: [
            { isSelf: true, replyText: "恭喜宝贝中奖了 私聊我地址" },
            { isSelf: false, replyText: "谢谢大大" },
          ],
        },
      ],
    };
  },
  methods:{
    showHiddenInput(index){
      if(this.$refs.replyInput[index].style.display=="none"){
        this.$refs.replyInput[index].style.display="block";
        this.$refs.commentingIcon[index].style.color="#FF4466";
       }
      else {
        this.$refs.replyInput[index].style.display="none";
        this.$refs.commentingIcon[index].style.color="";}
    }
  }
};
</script>
<style lang='less' scoped>
.goods-wrap {
  overflow: hidden;
  width: 960px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
}
.comment-text {
  margin-top: 24px;
}
.look-detail {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom: 20px;
}
.look-detail div:nth-child(2) div {
  font-size: 15px;
  margin-right: 30px;
}
.comment-input-block {
  // display: flex;
  overflow: hidden;
  margin-bottom: 10px;
}
.comment-input {
  width: 531px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #666;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  outline-style: none;
}
.comment-input:focus {
  border: 1px solid #f46;
}
.comment-submit {
  width: 84px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  transition: background-color 1s;
  background-color: #ffb8c5;
  outline-style: none;
}
.comment-submit:hover {
  background-color: #ff4466;
}
.comment-display-item{
  margin-bottom: 20px;
}
.comment-user-info {
  font-size: 14px;
  overflow: hidden;
}
.comment-user-image {
  float: left;
  width: 48px;
  height: 48px;
}
.comment-user-image img {
  width: 100%;
}
.comment-user-status {
  margin-left: 56px;
}

.comment-user-status div:nth-of-type(2) {
  // height: 22px;
  font-size: 12px;
  color: #999;
}

.icon-action {
  font-size: 16px;
  color: #999;
  cursor: pointer;
}
.icon-action:hover{
 color: var(--color-pink);
}
.user-icon-action {
  color: #999;
  float: right;
}
.user-icon-action span:first-child{
  margin-right: 15px;
}
.comment-conent-wrap{
  margin: 8px 0 0 56px;
  font-size: 14px;
}
.comment-conent-text{
  color: #666;
  margin-bottom:8px;

}
.comment-content-child{
  border-radius: 5px;
  background-color: #F9F9F9;
  padding: 10px 10px 2px 15px;

}


</style>