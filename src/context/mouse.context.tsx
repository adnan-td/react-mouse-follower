import { useState, createContext, useEffect } from 'react';
import { FollowerInitialiserComponent } from '..';
import { useStack } from '../util/stack_hook';

import type { Props, MouseSettings } from '../types';

interface ContextInterface {
  options: MouseSettings;
  radius: number;
  addLayer: (options: MouseSettings) => void;
  removeLayer: () => void;
}

const defaultProperties = {};

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const FollowerProvider = ({ children }: Props) => {
  const radius: number = 12 / 2;
  const layerStack = useStack();
  const [options, setOptions] = useState<MouseSettings>(defaultProperties);

  const addLayer = (layerOptions: MouseSettings) => {
    // const properties = { ...layerOptions };
    const properties = { ...options, ...layerOptions };
    layerStack.push(properties);
    setOptions({ ...properties });
  };

  const removeLayer = () => {
    layerStack.pop();
    const previousOptions = layerStack.peek();
    if (previousOptions != undefined) {
      setOptions({ ...previousOptions });
    }
  };

  const value: ContextInterface = {
    options,
    radius,
    addLayer,
    removeLayer,
  };

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  return (
    <MousePropertiesContext.Provider value={value}>
      <FollowerInitialiserComponent options={options} radius={radius} />
      {children}
    </MousePropertiesContext.Provider>
  );
};
