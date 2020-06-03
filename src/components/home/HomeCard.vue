<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <van-image width="20" height="20" round :src="avatar" class="user-info-img" />
        <div class="nickname">{{nickname}}</div>
        <div class="shelf-text">欢迎来到在线书城</div>
        <!-- <div class="round-item"></div>
        <div class="shelf-text">挑选好书</div>-->
      </div>
      <div class="book-info">
        <div class="book-wrapper">
          <div v-for="(item,index) of data.shelf" :key="index" @click="onBookClick(item)">
            <van-image width="72" height="101" :src="item.cover" lazy-load class="book-wapper-img" />
          </div>
        </div>
        <div class="shelf-wrapper" @click="onShelf">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedback-text" @click="onFeedBackClick">反馈</div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import Dialog from "../../../node_modules/@vant/weapp/dist/dialog/dialog";
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed: {
    avatar() {
      return (
        (this.data && this.data.userInfo && this.data.userInfo.avatarUrl) || ""
      );
    },
    nickname() {
      return (
        (this.data && this.data.userInfo && this.data.userInfo.nickName) || ""
      );
    }
  },
  methods: {
    onFeedBackClick() {
      Dialog.alert({
        title: "反馈",
        message: "谢谢您的关注，反馈正在开发中"
      }).then(() => {
        // on close
      });
    },
    onBookClick(item) {
      this.$emit("onClick", item);
    },
    onShelf() {
      this.$emit("onShelf");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.home-card {
  padding: 20px 22px;
  .home-card-inner {
    background: #595b60;
    box-sizing: border-box;
    padding: 21.5px 17px 20px 20px;
    border-radius: 15px;
    position: relative;
    .user-info {
      display: flex;
      font-size: 12px;
      align-items: center;
      .user-info-img {
        font-size: 0;
      }
      .nickname {
        margin: 0 8.5px;
        color: #ffffff;
      }
      .shelf-text {
        color: #a2a2a2;
      }
      .round-item {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: 0 5px;
        background-color: #a2a2a2;
      }
      .shelf-text {
        color: #a2a2a2;
      }
    }
    .book-info {
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
      .shelf-wrapper {
        margin-left: 17px;
        display: flex;
        align-self: center;
        .shelf {
          width: 15px;
          line-height: 15px;
          font-size: 11.5px;
          color: #ffffff;
          opacity: 0.8;
        }
      }
    }
    .feedback-text {
      position: absolute;
      top: 19.5px;
      right: 0;
      width: 44.5px;
      height: 23.5px;
      font-size: 11px;
      background: #7e7f83;
      border-radius: 200px 0 0 200px;
      color: #dbdbdd;
      line-height: 23.5px;
      text-align: center;
    }
  }
}
</style>