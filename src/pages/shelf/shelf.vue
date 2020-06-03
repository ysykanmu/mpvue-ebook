<template>
  <div>
    <shelf-user-info :user-info="userInfo" :read-day="readDay" :num="shelfList.length"></shelf-user-info>
    <shelf-list :shelf-list="shelfList"></shelf-list>
  </div>
</template>

<script>
import { userDay, bookShelfGet } from "../../api/index";
import ShelfUserInfo from "../../components/shelf/ShelfUserInfo";
import ShelfList from "../../components/shelf/ShelfList";
export default {
  components: {
    ShelfUserInfo,
    ShelfList
  },
  data() {
    return {
      userInfo: {},
      readDay: 0,
      shelfList: []
    };
  },
  onShow() {
    this.userInfo = mpvue.getStorageSync("userInfo");
    const openId = mpvue.getStorageSync("openId");
    userDay({ openId }).then(response => {
      this.readDay = response.data.data.day;
    });
    bookShelfGet({ openId }).then(response => {
      this.shelfList = response.data.data;
      this.shelfList.push({});
    });
  }
};
</script>

<style lang="scss" scoped>
</style>