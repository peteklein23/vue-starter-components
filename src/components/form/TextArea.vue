<template>
  <FormGroup class="text-area">
    <label>
      <slot></slot>
      <textarea v-on="listeners" v-bind="$attrs"></textarea>
    </label>
  </FormGroup>
</template>

<script>
import Input from "./mixins/Input";
import FormGroup from "./FormGroup";

export default {
  name: "TextArea",
  components: { FormGroup },
  mixins: [Input]
};
</script>

<style lang="scss" scoped>
.text-area {
  textarea {
    width: 100%;
  }
}
</style>
