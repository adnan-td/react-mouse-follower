import { useState, createContext, ReactNode, CSSProperties } from 'react';
import type { MousePosition, Props } from '../types';

interface ContextInterface {
  options: MouseSettings;
  setOptions: (options: MouseSettings) => void;
  radius: number;
}

export interface MouseSettings {
  zIndex?: CSSProperties['zIndex'];
  backgroundColor?: CSSProperties['backgroundColor'];
  backgroundElement?: JSX.Element;
  scale?: number;
  rotate?: number;
  customPosition?: MousePosition;
  mixBlendMode?: CSSProperties['mixBlendMode'];
  invert?: boolean;
}

export const MousePropertiesContext = createContext<ContextInterface>(null);

export const MousePropertiesProvider = ({ children }: Props) => {
  const radius = 12 / 2;

  const [options, setOptions] = useState<MouseSettings>({
    invert: false,
  });

  const value = {
    options,
    setOptions,
    radius,
  };
  return <MousePropertiesContext.Provider value={value}>{children}</MousePropertiesContext.Provider>;
};
