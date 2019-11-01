<template>
  <form
    action
    class="form"
    @reset.prevent="$emit('reset')"
    @submit.prevent="$emit('submit')"
  >
    <slot />
  </form>
</template>

<style lang="scss">
$borderColor: #999;
.form {
  input {
    border: 1px solid $borderColor;
    display: block;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    padding: 3px;
    width: 100%;
  }
  textarea {
    @extend input;
    resize: vertical;
  }
}
</style>
