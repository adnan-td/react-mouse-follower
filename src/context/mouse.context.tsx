import { ReactNode, createContext, useRef } from 'react';
import { FollowerInitialiserComponent } from '../component/follower_init.js';
import { useStack } from '../hook/stack.hook.js';

import type { MouseSettings } from '../types/index.js';

interface ContextInterface {
  addLayer: (options: MouseSettings) => void;
  removeLayer: () => MouseSettings | undefined;
  peekStack: () => MouseSettings | undefined;
  clearStack: () => void;
  logStack: () => void;
}

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const FollowerProvider = ({ visible, children }: { visible?: boolean; children?: ReactNode }) => {
  const layerStack = useStack();
  const addLayer = (layerOptions: MouseSettings) => {
    layerStack.push(layerOptions);
  };

  const removeLayer = () => {
    return layerStack.pop();
  };

  const value: ContextInterface = {
    addLayer,
    removeLayer,
    clearStack: layerStack.clear,
    logStack: layerStack.logStack,
    peekStack: layerStack.peek,
  };

  return (
    <MousePropertiesContext.Provider value={value}>
      {visible !== false ? <FollowerInitialiserComponent options={layerStack.peek()} /> : null}
      {children}
    </MousePropertiesContext.Provider>
  );
};
