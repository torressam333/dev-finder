import { mount } from '@vue/test-utils';
import DevFilter from '../../src/components/developers/DevFilter.vue';

describe('Should properly filter developers', () => {
  test('should have multiple spans with the same class', () => {
    const wrapper = mount(DevFilter);
    const spans = wrapper.findAll('span');

    expect(spans.length).toBe(3);
    //Base card child component parent class
    expect(wrapper.classes()).toContain('card');
    //All spans have the same class selector
    expect(spans.at(0).classes()).toContain('filter-option');
    expect(spans.at(1).classes()).toContain('filter-option');
    expect(spans.at(2).classes()).toContain('filter-option');
  });
});
