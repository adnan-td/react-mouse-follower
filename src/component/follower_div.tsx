import { MousePosition, MouseSettings } from '../types/index.js';
import { motion } from 'framer-motion';

export function FollowerDiv({ pos, options }: { pos: MousePosition; options: MouseSettings }) {
  const calculatePosition = (): MousePosition => {
    if (options.customLocation != undefined) {
      return { x: options.customLocation.x, y: options.customLocation.y };
    } else if (options.customPosition != undefined) {
      const rect = options.customPosition.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - options.radius;
      const y = rect.top + rect.height / 2 - options.radius;
      return { x, y };
    } else {
      return { x: pos.x, y: pos.y };
    }
  };
  return (
    <motion.div
      initial={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      animate={{
        x: calculatePosition().x,
        y: calculatePosition().y,
        scale: options.scale || 1,
        rotate: options.rotate || 0,
      }}
      exit={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      style={{
        backgroundColor: options.backgroundColor || 'black',
        mixBlendMode: options.mixBlendMode || 'initial',
        zIndex: options.zIndex || -5,
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'min-content',
        height: 'min-content',
        borderRadius: '9999px',
        overflow: 'hidden',
      }}
      transition={{ type: 'tween', duration: 0.3, ease: 'circOut' }}
      id="mouse-follower"
    >
      <div
        style={{
          width: `${options.radius ? options.radius * 2 : 12}px`,
          height: `${options.radius ? options.radius * 2 : 12}px`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {options.backgroundElement ? options.backgroundElement : null}
        </div>
      </div>
    </motion.div>
  );
}
