<template>
  <component :is="'button'" class="button">
    <slot />
  </component>
</template>

<script>
export default {
  name: "Button",
  props: {
    to: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    tag() {
      return this.to ? "a" : "button";
    }
  }
};
</script>
