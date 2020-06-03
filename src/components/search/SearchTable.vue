<template>
  <div class="search-table-wrapper">
    <div class="search-table-book" v-for="(item,index) of book" :key="index">
      <div class="book-img-wrapper">
        <van-image width="47" height="68.5" :src="item.cover" lazy-load class="book-wapper-img" />
      </div>
      <div class="book-info-wrapper">
        <div class="book-title">{{item.title}}</div>
        <div class="book-author">{{item.author}}</div>
        <div class="book-category">{{item.categoryText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.search-table-wrapper {
  padding: 0 16px;
  .search-table-book {
    margin: 14.5px 0;
    display: flex;
    align-items: center;
    .book-info-wrapper {
      width: 80%;
      margin-left: 15.5px;
      .book-title {
        width: 100%;
        color: #333;
        font-size: 16px;
        line-height: 22.5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
      }
      .book-author {
        color: rgba(0, 0, 0, 0.65);
        font-size: 13px;
        line-height: 18px;
        margin-top: 5px;
      }
      .book-category {
        color: rgba(0, 0, 0, 0.45);
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}
</style>