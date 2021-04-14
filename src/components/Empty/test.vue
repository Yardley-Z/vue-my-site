<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index";
export default {
  components: { Empty },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
}
</style>
