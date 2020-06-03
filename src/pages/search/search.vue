<template>
  <div>
    <search-bar
      :focus="searchFocus"
      :disabled="false"
      @onChange="onChange"
      @onClearClick="onClearClick"
      ref="searchBar"
    ></search-bar>
    <tag-group
      headerText="热门搜索"
      btnText="换一批"
      @onBtnClick="changeHotSearch"
      @onTagClick="showBookDetail"
      :value="hotSearch"
      v-if="hotSearch.length > 0 && !showList"
    ></tag-group>

    <search-list v-if="showList" :data="searchList"></search-list>
  </div>
</template>

<script>
import { search, hotSearch } from "../../api/index";
import TagGroup from "../../components/search/TagGroup";
import SearchBar from "../../components/home/SearchBar";
import SearchList from "../../components/search/SearchList";
export default {
  components: {
    TagGroup,
    SearchBar,
    SearchList
  },
  computed: {
    showList() {
      const keys = Object.keys(this.searchList);
      return keys.length > 0;
    }
  },
  data() {
    return {
      hotSearch: [],
      searchList: {},
      searchFocus: true,
      page: 1
    };
  },
  methods: {
    onClick() {
      console.log("tag....");
    },
    onClearClick() {
      this.searchList = {};
    },
    showBookDetail(text, index) {
      console.log("show book detail", text);
    },
    onChange(value) {
      if (value === "") {
        this.searchList = {};
        return;
      }
      search({ keyword: value }).then(res => {
        this.searchList = res.data.data;
      });
    },
    changeHotSearch() {
      hotSearch().then(res => {
        this.hotSearch = res.data.data;
      });
    }
  },
  mounted() {
    this.changeHotSearch();
  },
  onPageScroll() {
    if (this.searchFocus) {
      this.searchFocus = false;
    }
  },
  onReachBottom() {
    if (this.showList) {
      this.page++;
      const value = this.$refs.searchBar.getValue();
      search({ keyword: value, page: this.page }).then(res => {
        const book = res.data.data.book;
        if (book && book.length > 0) {
          this.searchList.book.push(...book);
        } else {
          mpvue.showToast({
            title: "没有更多数据了",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>