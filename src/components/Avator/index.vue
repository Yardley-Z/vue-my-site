<template>
  <div class="avator-container">
    <img
      class="avator-img"
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
    />
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.avator-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
