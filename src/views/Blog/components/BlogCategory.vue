<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章列表</h2>
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./rightList";
import fetchData from "@/mixin/fetchData.js";
import { getBlogCategories } from "@/api/blog.js";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      if (item.id == -1) {
        this.$router.push({ path: "/blog", query });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          params: { categoryId: item.id },
          query,
        });
      }
    },
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      let totalArticleCount = this.data.reduce(
        (preVal, icurVal) => preVal + icurVal.articleCount,
        0
      );
      let result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 250px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
