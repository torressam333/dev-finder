import { mount } from '@vue/test-utils';
import BaseBadge from '../../src/components/base-components/BaseBadge.vue';

describe('BaseBadge.vue', () => {
  it('accepts the expected props into component', () => {
    const specialty = 'backend';
    const title = 'FRONTEND';
    const wrapper = mount(BaseBadge, {
      propsData: { specialty, title },
    });

    expect(wrapper.props().specialty).toBe(specialty);
    expect(typeof wrapper.props().specialty).toBe('string');
    expect(wrapper.props().title).toBe(title);
    expect(typeof wrapper.props().title).toBe('string');
  });

  it('has a span element which has a class of badge', () => {
    const wrapper = mount(BaseBadge);

    expect(wrapper.html()).toContain('span');
    expect(wrapper.classes()).toContain('badge');
  });
});
