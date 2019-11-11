import { shallowMount } from '@vue/test-utils';
import TextArea from '@/components/form/TextArea.vue';

describe('TextArea.vue', () => {
  it('Knows is has not changed.', () => {
    const text = 'Here is some text.';
    const wrapper = shallowMount(TextArea, {
      propsData: {
        value: text
      }
    });
    expect(wrapper.vm.hasChanged).toBe(false);
  });

  it('Knows that it has changed.', done => {
    const text = 'Here is some text.';
    const wrapper = shallowMount(TextArea, {
      propsData() {
        return { value: text };
      }
    });

    wrapper.vm.$emit('input', 'Here is some other text.');

    wrapper.nextTick(() => {
      expect(wrapper.vm.hasChanged).toBe(true);
      done();
    });
  });
});
