/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "../components/MyButton";
import Form from "../components/form/Form";
import TextInput from "../components/form/TextInput";
import TextArea from "../components/form/TextArea";
import Button from "../components/shared/Button";
import Container from "../components/layout/Container";

storiesOf("Button", module)
  .add("with text", () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action("clicked") }
  }))
  .add("with JSX", () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo("Button", "with some emoji") }
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  }));

storiesOf("Form", module).add("Basic Example", () => ({
  components: { Container, Form, TextInput, TextArea, Button },
  template: `
    <Container>
      <Form @submit="onSubmit">
        <TextInput v-model="name" name="name">Name</TextInput>
        <TextArea v-model="message" name="message" rows="20">Message</TextArea>
        <Button>Label</Button>
      </Form>
    </Container>
  `,
  methods: { action: action("clicked") }
}));
