<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SideAside />
        </div>
      </template>

      <RouterView />
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SideAside from "@/components/SideAside";
import ToTop from "@/components/ToTop";
export default {
  data() {
    return {};
  },
  components: {
    Layout,
    SideAside,
    ToTop,
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/mixmin.less";
.app-container {
  .self-fill();
}
.iconfont {
  /* color: aqua; */
  font-size: 26px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.left {
  height: 100%;
}
</style>
