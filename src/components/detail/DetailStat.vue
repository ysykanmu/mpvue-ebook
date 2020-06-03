<template>
  <div class="detail-stat">
    <div class="detail-stat-l">
      <div class="detail-stat-rate-wrapper">
        <span class="detail-stat-rate">{{rankAvg}}</span>
        <van-rate :value="rankAvg" :size="16" color="#717882" void-color="#DEE0E2" void-icon="star"></van-rate>
      </div>
      <div class="detail-stat-rate-hint">{{rankNum}}人点评</div>
    </div>
    <div class="detail-stat-r">
      <div class="detail-stat-num-wrapper">
        <span class="detail-stat-num">{{readerNum}}</span>
        次访问
      </div>
      <div class="detail-stat-readers">
        <div class="detail-stat-readers-avatar" v-for="(reader, index) in readers" :key="index">
          <van-image width="24" height="24" :src="reader.avatarUrl" mode="scaleToFill" round />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    readers: Array,
    readerNum: Number,
    rankNum: Number,
    rankAvg: Number
  }
};
</script>

<style lang="scss" scoped>
.detail-stat {
  display: flex;
  padding: 10px 15px;

  .detail-stat-l {
    flex: 0 0 50%;
    width: 50%;

    .detail-stat-rate-wrapper {
      display: flex;
      align-items: center;

      .detail-stat-rate {
        font-size: 24px;
        color: #5e5e5e;
        margin-right: 10px;
      }
    }

    .detail-stat-rate-hint {
      margin-top: 5px;
      font-size: 11px;
      color: #99a0aa;
    }
  }

  .detail-stat-r {
    flex: 0 0 50%;
    width: 50%;

    .detail-stat-num-wrapper {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #868686;

      .detail-stat-num {
        font-size: 24px;
        color: #5e5e5e;
        margin-right: 5px;
      }
    }

    .detail-stat-readers {
      display: flex;
      font-size: 12px;
      color: #909090;

      .detail-stat-readers-avatar {
        width: 24px;
        height: 24px;
        margin-left: -8px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>