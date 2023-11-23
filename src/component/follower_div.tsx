import { MousePosition, MouseSettings } from '../types/index.js';
import { AnimatePresence, motion } from 'framer-motion';

export function FollowerDiv({ pos, options }: { pos: MousePosition; options: MouseSettings }) {
  const calculatePosition = (): MousePosition => {
    if (options.customLocation != null) {
      return { x: options.customLocation.x, y: options.customLocation.y };
    } else if (options.customPosition != null) {
      const rect = options.customPosition.current.getBoundingClientRect();
      const radius = options.radius ? options.radius : 12 / 2;
      const x = rect.left + rect.width / 2 - radius;
      const y = rect.top + rect.height / 2 - radius;
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
        backgroundColor: options.backgroundColor || 'black',
        zIndex: options.zIndex || -5,
        mixBlendMode: options.mixBlendMode || 'initial',
      }}
      animate={{
        x: calculatePosition().x,
        y: calculatePosition().y,
        scale: options.scale != null ? options.scale : 1,
        rotate: options.rotate || 0,
        backgroundColor: options.backgroundColor || 'black',
        zIndex: options.zIndex || -5,
        mixBlendMode: options.mixBlendMode || 'initial',
      }}
      style={{
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
      transition={{ type: 'tween', duration: options.followSpeed ? 0.3 / options.followSpeed : 0.3, ease: 'circOut' }}
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
          {options.text && !options.backgroundElement ? (
            <motion.p
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ type: 'tween', duration: options.followSpeed ? 0.3 / options.followSpeed : 0.3, ease: 'circOut' }}
              style={{
                width: '85%',
                textAlign: 'center',
                lineHeight: options.textLineHeight,
                letterSpacing: options.textLetterSpacing,
                fontFamily: options.textFontFamily,
                fontSize: options.textFontSize ? options.textFontSize : '12px',
                color: options.textColor ? options.textColor : 'white',
              }}
            >
              {options.text}
            </motion.p>
          ) : null}
          <AnimatePresence mode="wait">
            {options.backgroundElement ? (
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '9999px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ type: 'tween', duration: options.followSpeed ? 0.3 / options.followSpeed : 0.3, ease: 'circOut' }}
              >
                {options.backgroundElement}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
