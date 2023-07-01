import { CSSProperties, ReactNode, useContext } from 'react';
import { MousePropertiesContext } from '../context/mouse.context.js';
import { MouseSettings } from '../types/index.js';

export function UpdateFollower({
  mouseOptions,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  mouseOptions?: MouseSettings;
  style?: CSSProperties;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children?: ReactNode;
}) {
  const { addLayer, removeLayer } = useContext(MousePropertiesContext);
  function handleMouseEnter() {
    addLayer(mouseOptions);
    if (onMouseEnter) {
      onMouseEnter();
    }
  }
  function handleMouseLeave() {
    removeLayer();
    if (onMouseLeave != null) {
      onMouseLeave();
    }
  }
  return (
    <div style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
