import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FollowerProvider, FollowerInitialiserComponent, FollowerDiv } from '../index';

const meta: Meta<typeof FollowerInitialiserComponent> = {
  component: FollowerInitialiserComponent,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <FollowerProvider>
          <Story />
        </FollowerProvider>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FollowerDiv>;

export const Default: Story = {
  render: () => {
    return <div></div>;
  },
};
