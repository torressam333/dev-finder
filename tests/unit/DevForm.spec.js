import { shallowMount } from '@vue/test-utils';
import DevForm from '../../src/components/developers/DevForm.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(DevForm);
});

test('should render html properly', () => {
  expect(wrapper).toMatchSnapshot();
});
