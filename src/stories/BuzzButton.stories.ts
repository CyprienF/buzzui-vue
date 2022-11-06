import BuzzButton from '../components/BuzzButton.vue';

import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'BuzzUI-Vue/BuzzButton',
  component: BuzzButton,
} as Meta<typeof BuzzButton>;

const Template: StoryFn<typeof BuzzButton> = (args) => ({
  components: { BuzzButton },
  setup() {
    return { args };
  },
  template: '<BuzzButton v-bind="args" /></BuzzButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'regular',
};
