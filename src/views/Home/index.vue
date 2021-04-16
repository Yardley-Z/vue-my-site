<template>
  <div class="home-container">
    <p>首页</p>
    <div class="message" ref="container">
      <button @click="showMessageClick">
        发送评论
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMessageClick() {
      this.$showMessage({
        content: "评论成功",
        container: this.$refs.container,
        callback: function() {
          console.log("完成");
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.message {
  background: lightblue;
  width: 200px;
  height: 300px;
  border: 1px solid;
  margin: 50px auto;
}
</style>
