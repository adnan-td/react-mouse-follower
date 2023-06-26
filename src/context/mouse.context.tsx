import { createContext } from 'react';
import { FollowerInitialiserComponent } from '../component/follower_init.js';
import { useStack } from '../util/stack_hook.js';

import type { Props, MouseSettings } from '../types/index.js';

interface ContextInterface {
  radius: number;
  addLayer: (options: MouseSettings) => void;
  removeLayer: () => void;
}

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const FollowerProvider = ({ children }: Props) => {
  const radius: number = 12 / 2;
  const layerStack = useStack();

  const addLayer = (layerOptions: MouseSettings) => {
    const properties = { ...layerStack.peek(), ...layerOptions };
    layerStack.push(properties);
  };

  const removeLayer = () => {
    layerStack.pop();
  };

  const value: ContextInterface = {
    radius,
    addLayer,
    removeLayer,
  };

  return (
    <MousePropertiesContext.Provider value={value}>
      <FollowerInitialiserComponent options={layerStack.peek()} radius={radius} />
      {children}
    </MousePropertiesContext.Provider>
  );
};
