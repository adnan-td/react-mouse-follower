import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { MousePosition, MouseSettings } from '../types';
import { FollowerDiv } from './follower_div';

export function FollowerInitialiserComponent({ options, radius }: { options: MouseSettings; radius: number }) {
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
      {isHovering ? <FollowerDiv options={options} pos={pos} radius={radius} /> : null}
    </AnimatePresence>
  );
}
