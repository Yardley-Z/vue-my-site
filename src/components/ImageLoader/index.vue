<template>
  <div class="imageLoader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" />
    <img
      :src="src"
      @load="changeLoad"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoader: false,
      everythingDone: false,
    };
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  methods: {
    changeLoad() {
      this.originLoader = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("ImgChange");
      }, this.duration);
    },
  },
  computed: {
    originOpacity() {
      return this.originLoader ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixmin.less";
.imageLoader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    // display: block;
    object-fit: cover;

    &.placeholder {
      filter: blur(15px);
    }
  }
}
</style>
