<template>
  <div>
    <search-table :book="data"></search-table>
  </div>
</template>

<script>
import { categoryItem } from "../../api/index";
import SearchTable from "../../components/search/SearchTable";
export default {
  components: {
    SearchTable
  },
  data() {
    return {
      data: [],
      page: 1
    };
  },
  methods: {
    getCategoryItem() {
      const category = this.$route.query.text;
      categoryItem({ category }).then(res => {
        console.log(res);
        this.data = res.data.data;
      });
    }
  },
  mounted() {
    this.page = 1;
    this.getCategoryItem();
    mpvue.setNavigationBarTitle({
      title: this.$route.query.text
    });
  },
  onReachBottom() {
    this.page++;
    const category = this.$route.query.text;
    categoryItem({ category, page: this.page }).then(res => {
      const book = res.data.data;
      if (book && book.length > 0) {
        this.data.push(...book);
      } else {
        mpvue.showToast({
          title: "没有更多数据了",
          duration: 2000
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>