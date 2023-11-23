import { CSSProperties, ReactNode, useContext } from 'react';
import { MouseSettings } from '../types/index.js';
import useMouseStore from '../store/index.js';

export function UpdateFollower({
  mouseOptions,
  style,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}: {
  mouseOptions?: MouseSettings;
  style?: CSSProperties;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  children?: ReactNode;
}) {
  const { addLayer, removeLayer } = useMouseStore((state) => ({ addLayer: state.pushLayer, removeLayer: state.popLayer }));
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
    <div style={style} className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onClick}>
      {children}
    </div>
  );
}
