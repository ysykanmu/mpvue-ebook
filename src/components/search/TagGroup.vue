<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(item,index) of value" :key="index">
        <tag :text="item.title" @onClick="onTagClick(item.title, index)"></tag>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../public/Tag";
export default {
  props: {
    headerText: String,
    btnText: String,
    value: Array
  },
  components: {
    Tag
  },
  data() {
    return {
      data: [
        "aaaaaaaaa",
        "dsadasdasdasdag",
        "ccccccccccccccccc",
        "dayuiqkljdkayu8",
        "dhaiudhuiasghdyuasdua"
      ]
    };
  },
  methods: {
    onBtnClick() {
      this.$emit("onBtnClick");
    },
    onTagClick(text, index) {
      this.$emit("onTagClick", text, index);
    }
  }
};
</script>
<style lang="scss" scoped>
.tag-group-wrapper {
  margin-top: 20px;
  padding-bottom: 10px;
  .tag-group-header {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    .header-text {
      font-size: 14px;
      color: #333333;
    }
    .header-btn {
      font-size: 14px;
      color: #3696ef;
    }
  }
  .tag-group {
    display: flex;
    flex-wrap: wrap;
    padding: 4px 10px 0 10px;
    box-sizing: border-box;
    .tag-group-inner {
      max-width: 100%;
      box-sizing: border-box;
      padding: 12px 6px 0 6px;
    }
  }
}
</style>