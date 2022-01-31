import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputContainer from './InputContainer';

export default {
  title: 'shared/InputContainer',
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  inputTitle: '카드 번호',
};
