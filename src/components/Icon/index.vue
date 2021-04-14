<template>
  <i class="icon-container">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="xlinkHref"></use>
    </svg>
  </i>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      require: true,
    },
  },
  computed: {
    xlinkHref() {
      return `#icon-${this.kind}`;
    },
  },
};
</script>

<style scoped>
/* @import "//at.alicdn.com/t/font_2477585_cjtcfdj5s6h.css"; */
.iconfont {
  /* color: inherit; */
  font-size: inherit;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
