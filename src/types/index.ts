import React from 'react';

export interface Props {
  children: React.ReactNode;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface MouseSettings {
  zIndex?: React.CSSProperties['zIndex'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  backgroundElement?: JSX.Element;
  scale?: number;
  rotate?: number;
  customPosition?: MousePosition;
  mixBlendMode?: React.CSSProperties['mixBlendMode'];
  inverted?: boolean;
}
