import { CSSProperties, ReactNode, useContext, useState } from 'react';
import { MousePropertiesContext } from '..';
import { MouseSettings } from '../types';

export function UpdateFollower({
  mouseOptions,
  style,
  className,
  children,
}: {
  mouseOptions?: MouseSettings;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
}) {
  const { addLayer, removeLayer } = useContext(MousePropertiesContext);
  function handleMouseEnter() {
    addLayer(mouseOptions);
  }
  function handleMouseLeave() {
    removeLayer();
  }
  return (
    <div style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
