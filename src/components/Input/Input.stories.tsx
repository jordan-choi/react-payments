import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  type: 'text',
  placeholder: 'basic',
};

export const Underline = Template.bind({});
Underline.args = {
  type: 'text',
  placeholder: 'underline',
  underline: true,
};
