import { useEffect, useState } from 'react';
import { MouseSettings, type MousePosition } from '../types/index.js';
import { FollowerDiv } from './follower_div.js';
import useMouseStore from '../store/index.js';
import { AnimatePresence } from 'framer-motion';

const defaultRadius = 12 / 2;

export function FollowerInitialiserComponent() {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const options = useMouseStore((store) => store.curSettings);

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

  return (
    <ManagePosition options={!isHovering ? { ...options, scale: 0, customLocation: null, customPosition: null } : options} />
  );
}

function ManagePosition({ options }: { options: MouseSettings }) {

  const [pos, setPos] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event: any) => {
      if (options.radius != null) {
        setPos({
          x: event.clientX - options.radius,
          y: event.clientY - options.radius,
        });
      } else {
        setPos({
          x: event.clientX - defaultRadius,
          y: event.clientY - defaultRadius,
        });
      }
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [options?.radius]);

  return (
    <AnimatePresence mode="wait">
      {options.visible !== false ? <FollowerDiv options={options} pos={pos} /> : null}
    </AnimatePresence>
  );
}
