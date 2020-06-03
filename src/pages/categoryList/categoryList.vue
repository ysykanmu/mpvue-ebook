<template>
  <div>
    <home-category
      :data="category"
      :num="categoryNum"
      @onCategoryList="onCategoryList"
      :headeShow="false"
      :buttonShow="false"
    ></home-category>
  </div>
</template>
<script>
import { categoryList } from "../../api/index";
import HomeCategory from "../../components/home/HomeCategory";
export default {
  components: {
    HomeCategory
  },
  data() {
    return {
      category: []
    };
  },
  computed: {
    categoryNum() {
      return this.category.length;
    }
  },
  methods: {
    getCategoryList() {
      categoryList().then(res => {
        this.category = res.data.data;
      });
    },
    onCategoryList(e) {
      this.$router.push({
        path: "/pages/list/main",
        query: {
          text: e
        }
      });
    }
  },
  mounted() {
    this.getCategoryList();
  }
};
</script>

<style lang="scss" scoped>
</style>