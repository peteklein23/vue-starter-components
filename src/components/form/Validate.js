export default {
  required(value) {
    return String(value).trim() ? true : false;
  },
  greaterThan(value, comparison) {
    return value > comparison;
  },
  lessThan(value, comparison) {
    return value < comparison;
  },
  sameAs(value, comparison) {
    return value == comparison;
  },
  oneOf(value, allowedValues) {
    return allowedValues.some(v => v == value);
  },
  number(value) {
    return !Number.isNaN(Number.parseFloat(value));
  },
  integer(value) {
    return value.isInteger();
  }
};
