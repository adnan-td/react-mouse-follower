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
  scale?: number;
  rotate?: number;
  radius?: number;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  followSpeed?: number;
  text?: string;
  backgroundElement?: JSX.Element;
  customPosition?: React.MutableRefObject<any>;
  customLocation?: MousePosition;
  mixBlendMode?: React.CSSProperties['mixBlendMode'];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
