import { mount } from '@vue/test-utils';
import DevForm from '../../src/components/developers/DevForm.vue';

let wrapper;

beforeEach(() => {
  wrapper = mount(DevForm);
});

test('should render html properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('submits the dev registration form', async () => {
  const first = 'sam';
  const last = 'Bourne';
  const description = 'I am a government agent who has gone rogue LOL';
  const rate = 65;
  const areaValue = 'checked';

  //Use await to make sure that each change has been applied before we trigger the next.
  //Thus we only make assertions when the DOM has updated
  //Find form fields and set values
  await wrapper.find('#firstname').setValue(first);
  await wrapper.find('#lastname').setValue(last);
  await wrapper.find('#description').setValue(description);
  await wrapper.find('#rate').setValue(rate);
  //Areas of expertise checkbox
  await wrapper.find('#frontend').setValue(areaValue);
  let form = await wrapper.find('form');

  form.trigger('submit.prevent');

  // expect(wrapper.emitted('submit')).toStrictEqual({
  //   first,
  //   last,
  //   description,
  //   rate,
  //   areaValue,
  // });
});
