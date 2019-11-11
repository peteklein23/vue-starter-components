<template>
  <Container>
    <Form @submit="onSubmit" @reset="onReset">
      <TextInput v-model="name" name="name">Name</TextInput>
      <TextArea v-model="message" name="message" rows="20">Message</TextArea>
      <Button>Label</Button>
    </Form>
  </Container>
</template>

<script>
import Container from '@/components/layout/Container';
import Form from '@/components/form/Form';
import TextInput from '@/components/form/TextInput';
import TextArea from '@/components/form/TextArea';
import Button from '@/components//shared/Button';

export default {
  name: 'FormExample',

  components: { Container, Form, TextInput, TextArea, Button },
  data() {
    return {
      name: '',
      message: ''
    };
  },
  computed: {
    formData() {
      return {
        name: this.name,
        message: this.message
      };
    }
  },
  methods: {
    onSubmit() {
      // console.log(this.formData);
      // this.$axios.$post(this.action, this.formData).then(this.handleSubmit);
    },
    onReset() {}
  }
};
</script>
