<template>
  <Layout>
    <!-- 不要使用具名插槽，具名插槽内的数据，无法被当前组件监听到 使updated失效-->
    <div
      ref="mainContainer"
      class="blog-detail-container"
      v-loading="isLoading"
    >
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="blog-TOC-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetails";
import BlogComment from "./components/BlogComment";
import BlogTOC from "./components/BlogTOC";
import fetchData from "@/mixin/fetchData";
import { getBlog } from "@/api/blog";
import { titleController } from "@/utils";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      titleController.setRouteTitle(resp.title);
      return resp;
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    },
  },
  mounted() {
    this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroyed() {
    this.$bus.$emit("mainScroll");
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
    this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  },
  updated() {
    console.log(1234);
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.blog-detail-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.blog-TOC-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
