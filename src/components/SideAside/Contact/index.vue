<template>
  <div class="contact-container">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-git"></use>
        </svg>
        <a :href="contactContent.github"><span>{{contactContent.githubName}}-Z</span></a>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-185078emailmailstreamline"></use>
        </svg>
        <a :href="'mailto:'+contactContent.mail"><span>{{contactContent.mail}}</span></a>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qqicon"></use>
        </svg>
        <a
          :href="'tencent://message/?uin='+contactContent.qq+'&Site=&Menu=yes'"
          target="_blank"
          rel="noopener noreferrer"
          ><span>{{contactContent.qq}}</span></a
        >
        <div class="QR-code">
          <img :src="baseUrl+contactContent.qqQrCode" alt="" />
        </div>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wechat"></use>
        </svg>
        <a><span>{{contactContent.weixin}}</span></a>
        <div class="QR-code">
          <img :src="baseUrl+contactContent.weixinQrCode" alt="" />
        </div>
      </li>
      <!-- <li class="iconfont icon-wechat1"></li> -->
    </ul>
  </div>
</template>

<script>
import {baseUrl} from "@/utils"
export default {
  props: {
      contactContent:{
        require:true
      }
  },
  data() {
    return {
        baseUrl
    };
  },
  methods: {
    chat() {},
    // changeShow() {
    //   if (!this.show) {
    //     this.opacity = 1;
    //     this.show = true;
    //   }
    // },
    // changeNotShow() {
    //   if (this.show) {
    //     this.opacity = 0;
    //     this.show = false;
    //   }
    // },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "//at.alicdn.com/t/font_2477585_ik4qnupn8uk.css";
.contact-container {
  position: relative;
  // top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  li {
    position: relative;
    width: 100%;
    height: 2rem;
    margin: 0.5rem 0.7rem;
    margin-left: 0.2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: @lightWords;
    font-size: 5px;
    &:hover {
      color: @primary;
      svg {
        fill: @primary;
      }
      div {
        // visibility: visible;
        img {
          height: 11rem;
          width: 11rem;
        }
        &::after {
          border: 0.6rem solid transparent;
          border-top-color: white;
        }
      }
    }
    svg {
      width: 2rem;
      height: 2rem;
      fill: @lightWords;
    }
    span {
      color: @lightWords;
      margin: 0 0.7rem;
      &:hover {
        color: @primary;
      }
    }
    div {
      position: absolute;
      bottom: 3rem;
      //   height: 0rem;
      //   visibility: visible;

      img {
        display: block;
        width: 11rem;
        height: 0rem;
        transition: height 0.3s;
        border-radius: 7px;
      }
      &::after {
        position: absolute;
        z-index: 100;
        content: "";
        height: 0;
        left: calc(50% - 0.6rem);
        border: 0rem solid transparent;
        border-top-color: white;
        transition: border-top 0.3s;
      }
    }
  }
}
</style>
