<template>
  <div>
    <div class="search-msg" v-if="searchMsg">没有搜索到内容</div>
    <search-table :book="data.book"></search-table>
  </div>
</template>

<script>
import SearchItem from "./SearchItem";
import SearchTable from "./SearchTable";
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  components: {
    SearchItem,
    SearchTable
  },
  computed: {
    searchMsg() {
      if (this.data && this.data.book) {
        return this.data.book.length <= 0;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-msg {
  text-align: center;
  line-height: 40px;
  color: #555;
  font-size: 14px;
}
</style>