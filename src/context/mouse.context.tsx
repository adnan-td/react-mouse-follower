import { useState, createContext } from 'react';
import { FollowerInitialiserComponent } from '..';
import { Stack } from '../util/stack';

import type { Props, MouseSettings } from '../types';

interface ContextInterface {
  options: MouseSettings;
  radius: number;
  addLayer: (options: MouseSettings) => number;
  removeLayer: (id: number) => void;
}

const defaultProperties = {
  inverted: false,
};

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const FollowerProvider = ({ children }: Props) => {
  const radius: number = 12 / 2;
  const layerStack = new Stack();
  const [options, setOptions] = useState<MouseSettings>(defaultProperties);

  const addLayer = (layerOptions: MouseSettings): number => {
    const properties = { ...options, ...layerOptions };
    const id = layerStack.push(properties);
    setOptions(properties);
    return id;
  };

  const removeLayer = (id: number) => {
    const previousOptions = layerStack.pop(id);
    if (previousOptions) {
      setOptions(previousOptions);
    }
  };

  const value: ContextInterface = {
    options,
    radius,
    addLayer,
    removeLayer,
  };

  return (
    <MousePropertiesContext.Provider value={value}>
      <FollowerInitialiserComponent options={options} radius={radius} />
      {children}
    </MousePropertiesContext.Provider>
  );
};
