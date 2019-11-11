import { shallowMount } from '@vue/test-utils';
import TextInput from '@/components/form/TextInput.vue';

describe('TextInput.vue', () => {
  it('Knows is has not changed.', () => {
    const name = 'Garry';
    const wrapper = shallowMount(TextInput, {
      propsData: {
        value: name
      }
    });
    expect(wrapper.vm.hasChanged).toBe(false);
  });

  it('Knows that it has changed.', done => {
    const name = 'Garry';
    const wrapper = shallowMount(TextInput, {
      propsData() {
        return { value: name };
      }
    });

    wrapper.vm.$emit('input', 'Tim');

    wrapper.nextTick(() => {
      expect(wrapper.vm.hasChanged).toBe(true);
      done();
    });
  });
});
