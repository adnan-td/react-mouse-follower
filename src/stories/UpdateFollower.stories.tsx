import React from 'react';
import type { Meta } from '@storybook/react';

import { FollowerProvider, UpdateFollower } from '../index';

const meta: Meta = {
  title: 'Components/UpdateFollower',
  component: UpdateFollower,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const NestedUpdateCalls: Meta = {
  decorators: [
    () => (
      <FollowerProvider>
        <UpdateFollower mouseOptions={{ zIndex: 1 }} style={{ height: '100vh', width: '100vw', display: 'flex' }}>
          <div style={{ flex: 1, backgroundColor: 'white' }}></div>
          <UpdateFollower
            mouseOptions={{
              backgroundColor: 'white',
            }}
            style={{
              flex: 1,
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              padding: '60px',
            }}
          >
            <UpdateFollower
              mouseOptions={{
                backgroundColor: 'darkblue',
              }}
              style={{ flex: 1, borderRadius: '15px', overflow: 'hidden' }}
            >
              <div style={{ height: '100%', width: '100%', backgroundColor: 'lightblue' }}></div>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: 'darkgreen',
              }}
              style={{ flex: 1, borderRadius: '15px', overflow: 'hidden' }}
            >
              <div style={{ height: '100%', width: '100%', backgroundColor: 'lightgreen' }}></div>
            </UpdateFollower>
          </UpdateFollower>
        </UpdateFollower>
      </FollowerProvider>
    ),
  ],
};
