<template>
  <div class="home-container" ref="carouselItems" @wheel="handleWheel($event)">
    <ul
      class="carouselItems-container"
      :style="{ marginTop: getMarginTop }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItems :carousel="item" />
      </li>
    </ul>
    <div class="arrow-container">
      <div
        class="arrow arrow-up"
        v-show="index !== 0"
        @click="changeIndex(index - 1)"
      >
        <Icon kind="top" />
      </div>
      <div
        class="arrow arrow-down"
        v-show="index < banners.length - 1"
        @click="changeIndex(index + 1)"
      >
        <Icon kind="arrow-up1" />
      </div>
    </div>
    <ul class="indicator-container">
      <li
        v-for="(ele, i) in banners"
        :key="ele.id"
        :class="{ active: index == i }"
        @click="changeIndex(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import CarouselItems from "./carouselItems";
import { getBanners } from "@/api/banner";
export default {
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,
      canChangeCarouselItems: true,
    };
  },
  components: {
    Icon,
    CarouselItems,
  },
  // async created() {
  //   this.banner = await banner();
  // },
  async created() {
    this.banners = await getBanners();
  },
  methods: {
    changeIndex(i) {
      this.index = i;
    },
    handleResize() {
      this.containerHeight = this.$refs.carouselItems.clientHeight;
    },
    handleTransitionend() {
      this.canChangeCarouselItems = true;
    },
    handleWheel(e) {
      if (this.canChangeCarouselItems) {
        if (e.deltaY > 0 && this.index < this.banners.length - 1) {
          this.index++;
          this.canChangeCarouselItems = false;
        } else if (e.deltaY < 0 && this.index > 0) {
          this.index--;
          this.canChangeCarouselItems = false;
        }
      }
    },
  },
  mounted() {
    this.containerHeight = this.$refs.carouselItems.clientHeight;
    //{carouselItems: div.home-container}
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    getMarginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import "~@/styles/mixmin.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  .carouselItems-container {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .arrow-container {
    height: 100%;
    width: 100%;
    font-size: 30px;
    .self-center();
    .arrow {
      cursor: pointer;
      color: @gray;
      padding: 2px;
      border-radius: 5px;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        // box-shadow: 2px 2px 3px #fff;
      }
      &.arrow-up {
        position: absolute;
        top: 25px;
        animation: jumpUp 2s infinite;
      }
      &.arrow-down {
        position: absolute;
        bottom: 25px;
        animation: jumpDown 2s infinite;
      }
    }
  }
  .indicator-container {
    position: absolute;
    // background-color: #fff;
    width: 50px;
    height: 100px;
    top: 50%;
    transform: translateY(-50px);
    left: auto;
    right: 20px;
    .self-center();
    li {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: @words;
      margin: 5px 0;
      border: 1px solid #fff;
      box-sizing: border-box;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
  @keyframes jumpUp {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }
  @keyframes jumpDown {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
}
</style>
