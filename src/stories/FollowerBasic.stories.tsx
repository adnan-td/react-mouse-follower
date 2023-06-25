import React from 'react';
import type { Meta } from '@storybook/react';

import { FollowerProvider, UpdateFollower } from '../index';
import * as DivStories from './FollowerContainer.stories';

const meta: Meta = {
  title: 'Context/FollowerProvider',
  component: FollowerProvider,
  decorators: [
    (Story) => (
      <FollowerProvider>
        <Story />
      </FollowerProvider>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color', defaultValue: 'black' },
    scale: { control: 'number', min: 0.1, max: 2, step: 0.1, defaultValue: 1 },
    inverted: { control: 'boolean', defaultValue: false },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const createStory = (mouseOptions) => ({
  render: (args) => (
    <UpdateFollower
      mouseOptions={{ ...mouseOptions, ...args }}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  ),
});

export const Default: Meta = createStory(DivStories.Default.args?.options);

export const Scale: Meta = createStory(DivStories.Scale.args?.options);

export const DifferentColor: Meta = createStory(DivStories.DifferentColor.args?.options);

export const CustomPosition: Meta = createStory(DivStories.CustomPosition.args?.options);

export const CustomElement: Meta = createStory(DivStories.CustomElement.args?.options);

export const Inverted: Meta = createStory(DivStories.Inverted.args?.options);
Inverted.parameters = DivStories.Inverted.parameters;
