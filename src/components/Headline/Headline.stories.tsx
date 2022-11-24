import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Headline from '.';

export default {
  title: 'ReactComponentLibrary/Headline',
  component: Headline,
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args) => (
  <Headline {...args} />
);

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: 'Hello world!',
};

export const Anders = Template.bind({});
Anders.args = {
  label: 'Andere Überschrift',
};
