export default {
  inheritAttrs: false,
  data: {
    hasChanged: false
  },
  props: {
    value: {
      type: String,
      required: false,
      default: ""
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.handleInput
      };
    },
    required() {
      return this.$attrs.hasOwnProperty("required");
    }
  },
  methods: {
    handleInput(event) {
      this.hasChanged = true;
      this.$emit("input", event.target.value);
    }
  }
};
