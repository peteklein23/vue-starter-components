<template>
  <div
    class="full-page"
    :style="{ 'background-color': backgroundColor, color: color }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#000"
    },
    textColor: {
      type: String,
      default: "#FFF"
    }
  }
};
</script>

<style lang="scss" scoped>
.full-page {
  height: 100vh;
}
</style>
