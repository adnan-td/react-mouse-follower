import React, { useRef, useState } from 'react';
import type { Meta } from '@storybook/react';

import { Follower, UpdateFollower } from '../index';
import * as DivStories from './FollowerContainer.stories';
import './css/update_follower.css';

const meta: Meta = {
  title: 'Components/UpdateFollower',
  component: undefined,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <>
        <Follower />
        <Story />
      </>
    ),
  ],
};

export default meta;

export const NestedUpdateCalls: Meta = {
  decorators: [
    () => (
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
    ),
  ],
};

export const CustomPosition: Meta = {
  decorators: [
    () => {
      const containerRef = useRef(null);
      const [isHovering, setIsHovering] = useState(false);
      return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <UpdateFollower
            style={{ padding: '30px' }}
            mouseOptions={{
              customPosition: containerRef,
              scale: 6,
            }}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          >
            <div
              style={{ width: '30px', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '10px', cursor: 'pointer' }}
              ref={containerRef}
            >
              <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
              <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
              <div className="hamburger-bar" style={{ backgroundColor: isHovering ? 'white' : 'black' }}></div>
            </div>
          </UpdateFollower>
        </div>
      );
    },
  ],
};

export const Rotate: Meta = {
  decorators: [
    () => {
      return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <UpdateFollower
            style={{ padding: '30px' }}
            mouseOptions={{
              ...DivStories.CustomElement.args?.options,
              rotate: 360,
              zIndex: 2,
              scale: 10,
            }}
          >
            <div className="light-blue-box">
              <UpdateFollower
                mouseOptions={{
                  scale: 15,
                  rotate: -360,
                }}
              >
                <div className="light-green-box-sm"></div>
              </UpdateFollower>
            </div>
          </UpdateFollower>
        </div>
      );
    },
  ],
};

export const FollowSpeed: Meta = {
  decorators: [
    () => {
      return (
        <UpdateFollower mouseOptions={{ zIndex: 2 }}>
          <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <UpdateFollower
              style={{ padding: '30px' }}
              mouseOptions={{
                followSpeed: 4,
              }}
            >
              <div className="light-blue-box">
                <UpdateFollower
                  mouseOptions={{
                    followSpeed: 0.2,
                  }}
                >
                  <div className="light-green-box-sm"></div>
                </UpdateFollower>
              </div>
            </UpdateFollower>
          </div>
        </UpdateFollower>
      );
    },
  ],
};
