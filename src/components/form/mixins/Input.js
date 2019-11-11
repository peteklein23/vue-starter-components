export default {
  inheritAttrs: false,
  data() {
    return {
      hasChanged: false
    };
  },
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },
    validate: {
      type: Function,
      required: false,
      default: () => true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.handleInput
      };
    }
  },
  methods: {
    handleInput(event) {
      this.hasChanged = true;
      this.$emit('input', event.target.value);
    }
  }
};
