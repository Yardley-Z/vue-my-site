<template>
  <div class="sideAside-container">
    <Avator :url="AvatorUrl" :size="80" />
    <Menu />
    <Contact />
    <p>粤ICP备47241119号</p>
  </div>
</template>

<script>
import Avator from "@/components/Avator";
import AvatorUrl from "@/assets/xiaomizhou.jpg";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avator,
    Menu,
    Contact,
  },
  data() {
    return { AvatorUrl };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixmin.less";
.sideAside-container {
  background-color: @dark;
  width: 100%;
  height: 100%;
  .self-center();
  //   .menu-container {
  //     margin: 15px 0;
  //   }
  .avator-container {
    margin: 13px 0;
  }
  .contact-container {
    margin: 13px 0;
  }
  p {
    text-align: center;
    font-size: 12px;
  }
}
</style>
