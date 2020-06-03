<template>
  <div class="home-category">
    <div class="home-category-header" v-if="headeShow">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row">
        <div
          class="category-wrapper"
          v-for="(item,index) of bookData"
          :key="index"
          @click="categoryList(item)"
        >
          <div class="category-text">{{item.text}}</div>
          <div class="category-num">{{item.num}}本书</div>
          <div class="category-img-wrapper">
            <div class="category-img1">
              <van-image width="48" height="66" :src="item.cover" lazy-load />
            </div>
            <div class="category-img2">
              <van-image width="36" height="56" :src="item.cover2" lazy-load />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-category-footer" @click="onMoreClick" v-if="buttonShow">
      <van-button block round custom-style="color:#3696EF;height:41px">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
import { CATEGORY } from "../../utils/const";
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
    },
    headeShow: {
      type: Boolean,
      default: true
    },
    buttonShow: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    bookData() {
      this.data.forEach(book => {
        book.text = CATEGORY[book.categoryText.toLowerCase()];
      });
      return this.data.slice(0, this.num);
    }
  },
  methods: {
    onMoreClick() {
      this.$emit("onClick");
    },
    categoryList(e) {
      console.log(e);
      this.$emit("onCategoryList", e.categoryText);
    }
  }
};
</script>

<style lang="scss" scoped>
.home-category {
  .home-category-header {
    padding: 13px 0 0 20.5px;
  }

  .home-book-content {
    padding: 0 12px;
    margin-top: 10.5px;
    display: flex;
    flex: wrap;
    margin-top: 12px;
    .home-book-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .category-wrapper {
        margin-top: 12px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: #f8f9fb;
        border-radius: 10px;
        height: 96px;
        padding: 13px 0 14.5px 16px;
        box-sizing: border-box;

        .category-text {
          width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #212832;
          font-size: 16px;
          line-height: 22.5px;
        }
        .category-num {
          color: #868686;
          font-size: 12px;
          line-height: 16.5px;
        }
        .category-img-wrapper {
          position: absolute;
          right: 0;
          bottom: 0;

          .category-img1 {
            position: absolute;
            right: 0;
            bottom: -2.5px;
            z-index: 100;
            width: 48px;
            border-radius: 0 0 10px 0;
          }
          .category-img2 {
            position: absolute;
            right: 30px;
            bottom: -2.5px;
            z-index: 90;
            width: 36px;
          }
        }
      }
    }
  }

  .home-category-footer {
    padding: 12px 20px 20px;
  }
}
</style>