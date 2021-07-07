<template>
  <ul class="rightList-container">
    <li v-for="(item, i) in list" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{
        item.name
      }}</span>
      <span
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
        v-if="item.aside"
        class="aside"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.rightList-container {
  margin-left: 1em;
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
