<template>
  <div class="search-bar" @click="onSearchBarClick">
    <div class="search-bar-wrapper">
      <van-icon name="search" class="search" size="18px" color="#858C96" />
      <input
        type="text"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        v-model="searchWord"
        confirm-type="search"
        @input="onChange"
        @confirm="onConfirm"
        class="search-bar-input"
        placeholder="搜索"
        placeholder-style="color: #ADB4BE;font-size: 15px"
      />
      <van-icon
        name="clear"
        class="clear"
        size="18px"
        color="#ccc"
        @click="onClearClick"
        v-if="searchWord.length > 0"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 50
    },
    hotSearch: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      searchWord: ""
    };
  },
  methods: {
    onClearClick() {
      this.searchWord = "";
      this.$emit("onClearClick");
    },
    onSearchBarClick() {
      this.$emit("onClick");
    },
    onChange(e) {
      const value = e.mp.detail.value;
      this.$emit("onChange", value);
    },
    getValue() {
      return this.searchWord;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    background: #f5f7f9;
    padding: 0 15px;
    border-radius: 20px;
    height: 40px;
    display: flex;
    .search,
    .clear {
      display: flex;
      align-items: center;
    }
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
      color: #333;
      font-size: 15px;
      height: 100%;
    }
  }
}
</style>