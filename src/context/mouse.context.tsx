import { createContext, useRef } from 'react';
import { FollowerInitialiserComponent } from '../component/follower_init.js';
import { useStack } from '../util/stack_hook.js';

import type { Props, MouseSettings } from '../types/index.js';

interface ContextInterface {
  addLayer: (options: MouseSettings) => void;
  removeLayer: () => void;
}

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const FollowerProvider = ({ children }: Props) => {
  const layerStack = useStack();
  const addLayer = (layerOptions: MouseSettings) => {
    layerStack.push(layerOptions);
  };

  const removeLayer = () => {
    layerStack.pop();
  };

  const value: ContextInterface = {
    addLayer,
    removeLayer,
  };

  return (
    <MousePropertiesContext.Provider value={value}>
      <FollowerInitialiserComponent options={layerStack.peek()} />
      {children}
    </MousePropertiesContext.Provider>
  );
};
