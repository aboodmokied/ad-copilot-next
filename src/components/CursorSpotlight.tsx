import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom spotlight on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {/* Outer subtle glow */}
      <motion.div
        className="absolute rounded-full bg-[#0055FF]/10 blur-[120px]"
        style={{
          width: 500,
          height: 500,
          left: position.x - 250,
          top: position.y - 250,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Inner sharp follower dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full border border-[#0055FF] bg-[#0055FF]/20 backdrop-blur-xs"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.1 }}
      />
    </div>
  );
};
