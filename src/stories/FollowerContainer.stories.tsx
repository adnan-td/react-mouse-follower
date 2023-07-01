import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// @ts-ignore
import mainVideo from './assets/main_bg.mp4';

import { FollowerDiv } from '../component/follower_div';

const meta: Meta<typeof FollowerDiv> = {
  title: 'Components/FollowerDiv',
  component: FollowerDiv,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FollowerDiv>;

export const Default: Story = {
  args: {
    options: {},
    pos: {
      x: 10,
      y: 10,
    },
  },
};

export const Scale: Story = {
  args: {
    options: {
      scale: 10,
    },
    pos: {
      x: 100,
      y: 100,
    },
  },
};

export const Radius: Story = {
  args: {
    options: {
      radius: 40,
    },
    pos: {
      x: 20,
      y: 20,
    },
  },
};

export const DifferentColor: Story = {
  args: {
    options: {
      backgroundColor: 'purple',
    },
    pos: {
      x: 10,
      y: 10,
    },
  },
};

export const CustomPosition: Story = {
  args: {
    options: {
      customLocation: {
        x: 500,
        y: 200,
      },
    },
    pos: {
      x: 10,
      y: 10,
    },
  },
};

export const CustomElement: Story = {
  args: {
    options: {
      scale: 20,
      backgroundElement: (
        <div>
          <video playsInline={true} autoPlay={true} muted={true} loop={true} src={mainVideo} width={'100%'} />
        </div>
      ),
    },
    pos: {
      x: 150,
      y: 150,
    },
  },
};

export const Inverted: Story = {
  args: {
    options: {
      backgroundColor: 'white',
    },
    pos: {
      x: 10,
      y: 10,
    },
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export const Text: Story = {
  args: {
    options: {
      radius: 60,
      text: 'View Case',
      zIndex: 2,
      textFontSize: '25px',
      textFontFamily: 'sans-serif',
    },
    pos: {
      x: 20,
      y: 20,
    },
  },
};
