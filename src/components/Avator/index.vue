<template>
  <div class="avator-container">
    <img
      class="avator-img"
      :src="baseUrl+url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
    />
  </div>
</template>

<script>
import {baseUrl} from "@/utils"
export default {
  props: {
    url: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
    },
  },
  data (){
    return {
      baseUrl
    }
  }
};
</script>

<style scoped>
.avator-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
