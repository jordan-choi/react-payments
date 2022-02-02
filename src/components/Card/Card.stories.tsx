import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const EmptyCard = Template.bind({});
EmptyCard.args = { isEmpty: true };

export const SmallCard = Template.bind({});
SmallCard.args = { isEmpty: false, cardSize: 'small' };
