import { CSSProperties, ReactNode, useContext } from 'react';
import { MousePropertiesContext } from '../context/mouse.context.js';
import { MouseSettings } from '../types/index.js';

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
