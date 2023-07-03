import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { MousePosition, MouseSettings } from '../types/index.js';
import { FollowerDiv } from './follower_div.js';

export function FollowerInitialiserComponent({ options }: { options: MouseSettings }) {
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
    const mouseMove = (event: any) => {
      setPos({
        x: event.clientX - options.radius,
        y: event.clientY - options.radius,
      });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [options?.radius]);

  return <AnimatePresence mode="wait">{isHovering ? <FollowerDiv options={options} pos={pos} /> : null}</AnimatePresence>;
}
