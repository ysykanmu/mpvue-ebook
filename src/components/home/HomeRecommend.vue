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
        <van-image width="101" height="147" :src="item.cover" lazy-load />
        <div class="home-recommend-title">{{item.title}}</div>
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
  background: #f9f9f9;
  .home-recommend-header {
    padding: 13px 0 0 20.5px;
  }
  .home-recommend-content {
    display: flex;
    justify-content: space-between;
    margin-top: 22.5px;
    padding: 0 20px;
    .home-recommend-items {
      .home-recommend-title {
        width: 101px;
        font-size: 12px;
        color: #212731;
        line-height: 16.5px;
        max-height: 33px;
        font-weight: 500;
        overflow: hidden;
        word-break: break-word;
      }
    }
  }
  .home-recommend-footer {
    padding: 12px 20px 20px;
  }
}
</style>
