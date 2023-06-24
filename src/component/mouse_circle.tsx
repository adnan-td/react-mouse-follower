import { MousePropertiesContext } from '../context';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { MousePosition } from '../types';

export function MouseCircleComponent() {
  const { options, radius } = useContext(MousePropertiesContext);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [pos, setPos] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const body = document.querySelector('body');
    body.addEventListener('mouseleave', handleMouseLeave);
    body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      body.removeEventListener('mouseleave', handleMouseLeave);
      body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  useEffect(() => {
    function mouseMove(event: any) {
      setPos({
        x: event.clientX - radius,
        y: event.clientY - radius,
      });
    }
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isHovering ? (
        <motion.div
          className={'fixed top-0 left-0 pointer-events-none flex justify-center items-center w-min h-min rounded-full'}
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
            backgroundColor: options.backgroundColor || 'black',
            mixBlendMode: options.mixBlendMode || 'initial',
            zIndex: options.zIndex || -5,
          }}
          transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
          id="mouse-follower"
        >
          <div className="w-3 h-3 flex justify-center items-center bg-transparent">
            <div className="w-full h-full rounded-full flex justify-center items-center overflow-hidden">{options.backgroundElement ? options.backgroundElement : null}</div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
