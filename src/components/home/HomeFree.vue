<template>
  <div class="home-recommend">
    <div class="home-recommend-header">{{title}}</div>
    <div class="home-recommend-content">
      <div
        class="home-recommend-items"
        v-for="(item,index) of data"
        :key="index"
        @click="onBookClick(item)"
      >
        <van-image width="64" height="88" :src="item.cover" lazy-load />
        <div class="home-recommend-title">
          <div class="book-title">{{item.title}}</div>
          <div class="book-title-author-wrapper">
            <div class="book-title book-author">{{item.author}}</div>
            <div class="book-title book-author">{{item.categoryText}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-recommend-footer" @click="onMoreClick">
      <van-button block round custom-style="color:#3696EF;height:41px">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    btnText: {
      type: String,
      default: ""
    },
    num: {
      type: Number,
      default: 0
    }
  },
  computed: {
    bookData() {
      return this.data.slice(0, this.num);
    }
  },
  methods: {
    onMoreClick() {
      this.$emit("onClick");
    },
    onBookClick(item) {
      this.$emit("onBookClick", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-recommend {
  .home-recommend-header {
    padding: 13px 0 0 20.5px;
  }
  .home-recommend-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 10.5px;
    padding: 0 20px;
    .home-recommend-items {
      flex: 0 0 50%;
      display: flex;
      margin-top: 12px;
      .home-recommend-title {
        flex: 0 0 60%;
        box-sizing: border-box;
        padding-left: 9px;
        padding-right: 16.5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .book-title {
          font-size: 14px;
          color: #1f1f1f;
          line-height: 18px;
          max-height: 36px;
          overflow: hidden;
          word-break: break-word;
        }
        .book-title-author-wrapper {
          margin-top: 8px;
        }
        .book-author {
          margin-top: 2px;
          font-size: 12px;
          color: #868686;
          line-height: 14px;
          max-height: 14px;
        }
      }
    }
  }
  .home-recommend-footer {
    padding: 12px 20px 20px;
  }
}
</style>
