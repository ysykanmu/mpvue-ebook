<template>
  <div class="demo">
    <search-bar @onClick="onSearchBarkClick" :hotSearch="hotSearch"></search-bar>
    <home-card :data="homeCard" @onClick="onHomeBookClick" @onShelf="onShelf"></home-card>
    <home-hot
      :data="hotBook"
      title="当前热门"
      btnText="换一批"
      num="4"
      @onClick="onHomeHot"
      @onBookClick="onHomeBookClick"
    ></home-hot>
    <home-free
      :data="freeRead"
      title="免费阅读"
      btnText="换一批"
      num="4"
      @onClick="onHomeFree"
      @onBookClick="onHomeBookClick"
    ></home-free>
    <home-recommend
      :data="recommend"
      title="为您推荐"
      btnText="换一批"
      num="3"
      @onClick="onHomeRecommend"
      @onBookClick="onHomeBookClick"
    ></home-recommend>
    <home-category
      :data="category"
      title="分类"
      btnText="查看全部"
      num="6"
      @onCategoryList="onCategoryList"
      @onClick="onHomeCategory"
    ></home-category>
    <auto @getUserInfo="getSetting" v-if="isAuto"></auto>
  </div>
</template>

<script>
import {
  getHomeData,
  recommend,
  hotBook,
  freeRead,
  getSetting,
  getUserInfo,
  getUserOpenId,
  register,
  getOpenId
} from "../../api/index";
import { get, post } from "../../utils/request";
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeRecommend from "../../components/home/HomeRecommend";
import HomeFree from "../../components/home/HomeFree";
import HomeHot from "../../components/home/HomeHot";
import HomeCategory from "../../components/home/HomeCategory";
import Auto from "../../components/home/Auto";
export default {
  components: {
    SearchBar,
    HomeCard,
    HomeRecommend,
    HomeFree,
    HomeHot,
    HomeCategory,
    Auto
  },
  data() {
    return {
      hotSearch: "",
      homeCard: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      isAuto: false
    };
  },
  methods: {
    onShelf() {
      this.$router.push("/pages/shelf/main");
    },
    onHomeBookClick(book) {
      this.$router.push({
        path: "/pages/detail/main",
        query: {
          fileName: book.fileName
        }
      });
    },
    onSearchBarkClick() {
      this.$router.push("/pages/search/main");
    },
    getHomeData(openId, userInfo) {
      getHomeData({ openId }).then(response => {
        console.log(response);
        const data = response.data.data;
        this.recommend = data.recommend;
        this.freeRead = data.freeRead;
        this.hotBook = data.hotBook;
        this.category = data.category;
        this.hotSearch = data.hotSearch.keyword;
        this.homeCard = {
          shelf: data.shelf,
          num: data.shelfCount,
          userInfo: userInfo
        };
      });
    },
    onHomeRecommend() {
      recommend().then(response => {
        const data = response.data.data;
        this.recommend = data;
      });
    },
    onHomeHot() {
      hotBook().then(response => {
        const data = response.data.data;
        this.hotBook = data;
      });
    },
    onHomeFree() {
      freeRead().then(response => {
        const data = response.data.data;
        this.freeRead = data;
      });
    },
    onHomeCategory() {
      this.$router.push("/pages/categoryList/main");
    },
    getSetting() {
      getSetting(
        () => {
          this.isAuto = false;
          this.getUserInfo();
          wx.showLoading({
            title: "加载中"
          });
        },
        () => {
          this.isAuto = true;
        }
      );
    },
    getUserInfo() {
      getUserInfo(userInfo => {
        mpvue.setStorage({
          key: "userInfo",
          data: userInfo
        });
        getUserOpenId(openId => {
          mpvue.setStorage({
            key: "openId",
            data: openId
          });
          register(openId, userInfo);
          this.getHomeData(openId, userInfo);
          wx.hideLoading();
        });
      });
    },
    onCategoryList(e) {
      console.log(e);
      this.$router.push({
        path: "/pages/list/main",
        query: {
          text: e
        }
      });
    }
  },
  mounted() {
    this.getSetting();
  }
};
</script>

<style lang="scss" scoped>
</style>
