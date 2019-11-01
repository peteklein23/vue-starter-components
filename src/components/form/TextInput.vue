<template>
  <FormGroup>
    <label>
      <slot></slot>
      <input type="text" v-on="listeners" v-bind="$attrs" />
    </label>
  </FormGroup>
</template>

<script>
import Input from "./mixins/Input";
import FormGroup from "./FormGroup";

export default {
  name: "TextInput",
  components: { FormGroup },
  mixins: [Input]
};
</script>
