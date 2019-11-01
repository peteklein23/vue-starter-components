<template>
  <div class="form-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormGroup"
};
</script>

<style lang="scss" scoped>
.form-group {
  padding-bottom: 10px;
}
</style>
