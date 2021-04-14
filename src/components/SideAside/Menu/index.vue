<template>
  <div class="menu-container">
    <ul>
      <RouterLink
        :exact="ele.exact"
        :to="ele.link"
        v-for="ele in item"
        :key="ele.link"
        active-class="selected"
        exact-active-class=""
        ><li>
          <Icon :kind="ele.kind" /><span>{{ ele.text }}</span>
        </li>
      </RouterLink>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      item: [
        {
          link: "/",
          kind: "yemian-copy-copy",
          text: "首页",
          exact: true,
        },
        {
          link: "/blog",
          kind: "wenzhang",
          text: "文章",
          exact: false,
        },
        {
          link: "/about",
          kind: "guanyu",
          text: "关于我",
          exact: true,
        },
        {
          link: "/project",
          kind: "xiaoguo",
          text: "项目&效果",
          exact: true,
        },
        {
          link: "/message",
          kind: "liuyanban",
          text: "留言板",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.menu-container {
  color: @lightWords;
  //   background-color: @dark;
  width: 100%;
  //   height: 12rem;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  a {
    display: block;
  }
  ul {
    width: 100%;
    li {
      font-size: 13px;
      padding: 0.8rem;
      // height: auto;
      padding-left: 1.6rem;
      transition: 1s;
      font-size: 14px;
      &:hover {
        background-color: @words;
        transition: 0.3s;
      }
      .icon-container {
        margin: 0 1rem 0 0.5rem;
      }
    }
  }
}
.selected {
  background-color: @words;
}
// .router-link-active {
//   background-color: @words;
// }
</style>
