<template>
  <div class="carousel-items-container">
    <div
      class="detail-container"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      ref="container"
    >
      <div
        class="img-container"
        v-if="carousel.id != 1"
        ref="img"
        :style="imagePosition"
      >
        <ImageLoader
          :src="carousel.bigImg"
          :placeholder="carousel.midImg"
          :duration="5000"
          @ImgChange="showWords"
        />
      </div>
      <div class="title" ref="title">{{ carousel.title }}</div>
      <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
    <div
      class="spotLight-container"
      v-if="carousel.id == 1"
      ref="spotLight"
    ></div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      disX: 0,
      disY: 0,
      newLeft: 0,
      newTop: 0,
      lastX: 0,
      lastY: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null,
      mouseX: 0, // 鼠标的横坐标
      mouseY: 0,
    };
  },
  computed: {
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    if (this.$refs.title && this.$refs.desc) {
      this.titleWidth = this.$refs.title.clientWidth;
      this.descWidth = this.$refs.desc.clientWidth;
    }
    if (this.$refs.spotLight) {
      this.$refs.spotLight.innerHTML = this.carousel.html;
    }
    // const style = document.createElement("style");
    // style.innerHTML = this.carousel.style;
    // document.head.appendChild(style);
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述也是一样
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      if (this.$refs.img) {
        this.innerSize = {
          width: this.$refs.img.clientWidth,
          height: this.$refs.img.clientHeight,
        };
      }
    },
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
    // handleEnter(e) {
    //   this.disX = e.clientX;
    //   this.disY = e.clientY;
    // },
    // handleMove(e) {
    //   this.newLeft = e.clientX - this.disX;
    //   this.lastX = this.newLeft;
    //   this.newTop = e.clientY - this.disY;
    //   this.lastY = this.newTop;
    //   // this.$refs.img.style.left = -this.newLeft + "px";
    //   // this.$refs.img.style.top = -this.newTop + "px";
    // },
    // handleLeave(e) {
    //   this.$refs.img.style.left = "-10%";
    //   this.$refs.img.style.top = "-10%";
    // },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/spotLight.css";
.carousel-items-container {
  position: relative;
  // background-color: @dark;
  color: #fff;
  width: 100%;
  height: 100%;
  .detail-container {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: visible;
    .img-container {
      position: absolute;
      width: 120%;
      height: 120%;
      transition: 0.3s;
      // top: -10%;
      // left: -10%;
    }
    .title,
    .desc {
      position: absolute;
      letter-spacing: 3px;
      left: 30px;
      color: #fff;
      text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
        0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
      white-space: nowrap;
      overflow: hidden;
      opacity: 0;
    }
    .title {
      top: calc(50% - 40px);
      font-size: 2em;
    }
    .desc {
      top: calc(50% + 20px);
      font-size: 1.2em;
      color: lighten(@gray, 20%);
    }
  }
}
</style>
