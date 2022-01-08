<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
          <SideAside :dataSetting="data"/>
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
import { mapState } from "vuex";
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
  created (){
    this.$store.dispatch("setting/fetchSetting")
  },
  computed:{
  ...mapState("setting",['loading','data'])
  }
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
