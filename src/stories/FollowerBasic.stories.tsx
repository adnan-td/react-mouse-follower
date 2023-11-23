import React from 'react';
import type { Meta } from '@storybook/react';

import { MouseFollower, UpdateFollower } from '../index';
import * as DivStories from './FollowerContainer.stories';

const meta: Meta = {
  title: 'Context/FollowerProvider',
  component: MouseFollower,
  decorators: [
    (Story) => (
      <>
        <MouseFollower />
        <Story />
      </>
    ),
  ],
  argTypes: {
    backgroundColor: { control: 'color', defaultValue: 'black' },
    scale: { control: 'number', min: 0.1, max: 2, step: 0.1, defaultValue: 1 },
    radius: { control: 'number', min: 12, max: 200, step: 1, defaultValue: 12 },
    speed: { control: 'number', min: 0, max: 10, step: 0.1, defaultValue: 1 },
    text: { control: 'text', defaultValue: '' },
    textColor: { control: 'color', defaultValue: 'white' },
    textFontSize: { control: 'text', defaultValue: '12px' },
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

export const Radius: Meta = createStory(DivStories.Radius.args?.options);

export const DifferentColor: Meta = createStory(DivStories.DifferentColor.args?.options);

export const CustomPosition: Meta = createStory(DivStories.CustomPosition.args?.options);

export const CustomElement: Meta = createStory(DivStories.CustomElement.args?.options);

export const Inverted: Meta = createStory(DivStories.Inverted.args?.options);
Inverted.parameters = DivStories.Inverted.parameters;
