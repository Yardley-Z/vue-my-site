<template>
  <div class="empty-container">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-wushuju"></use>
    </svg>
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@size: 10rem;
.iconfont {
  /* color: inherit; */
  font-size: inherit;
}
.empty-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  .icon {
    width: 35%;
    height: 35%;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  div {
    // margin-top: -1.5rem;
    color: @lightWords;
    // font-size: 5rem;
  }
}
</style>
