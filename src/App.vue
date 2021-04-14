<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SideAside />
        </div>
      </template>
      <template #main>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SideAside from "@/components/SideAside";
export default {
  data() {
    return {};
  },
  components: {
    Layout,
    SideAside,
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "~@/styles/mixmin.less";
.app-container {
  .self-fill(fixed);
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
