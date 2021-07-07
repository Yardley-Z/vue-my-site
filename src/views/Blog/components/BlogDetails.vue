<template>
  <div class="blogDetail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="">评论: {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
      >
        {{ blog.category.name }}
      </RouterLink>
    </div>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
export default {
  props: {
    blog: {
      require: true,
      type: Object,
    },
  },
  methods: {
    formatDate,
  },
  updated() {
    console.log(123);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
