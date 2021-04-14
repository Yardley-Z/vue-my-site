<template>
  <div class="test-container">
    <SideAside />
  </div>
</template>

<script>
import SideAside from "./index";
export default {
  components: {
    SideAside,
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";
.test-container {
  background-color: @dark;
  width: 200px;
}
</style>
