import { MousePosition, MouseSettings } from '../types';
import { motion } from 'framer-motion';

export function FollowerDiv({ pos, options, radius }: { pos: MousePosition; options: MouseSettings; radius?: number }) {
  return (
    <motion.div
      initial={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      animate={{
        x: options.customPosition ? options.customPosition.x : pos.x,
        y: options.customPosition ? options.customPosition.y : pos.y,
        scale: options.scale || 1,
        rotate: options.rotate || 0,
      }}
      exit={{
        x: pos.x,
        y: pos.y,
        scale: 0,
      }}
      style={{
        backgroundColor: options.inverted ? 'white' : options.backgroundColor || 'black',
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
          width: `${radius ? radius * 2 : 12}px`,
          height: `${radius ? radius * 2 : 12}px`,
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
