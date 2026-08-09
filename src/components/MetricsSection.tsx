import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { METRICS_DATA } from '../data/landingData';

export const MetricsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  // Spring values for extra smooth fluidity
  const spring1 = useSpring(0, { stiffness: 60, damping: 20 });
  const spring2 = useSpring(0, { stiffness: 60, damping: 20 });
  const spring3 = useSpring(0, { stiffness: 60, damping: 20 });

  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState('0.0');
  const [val3, setVal3] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring1.set(10);
      spring2.set(2.4);
      spring3.set(24);
    }
  }, [isInView, spring1, spring2, spring3]);

  useEffect(() => {
    const unsub1 = spring1.on('change', (v) => setVal1(Math.round(v)));
    const unsub2 = spring2.on('change', (v) => setVal2(v.toFixed(1)));
    const unsub3 = spring3.on('change', (v) => setVal3(Math.round(v)));

    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, [spring1, spring2, spring3]);

  return (
    <section
      ref={containerRef}
      className="border-b border-[#222222] bg-black text-[#e5e2e1] relative overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#222222] relative z-10">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-12 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-[#131313]/80 transition-all duration-300 relative cursor-default"
        >
          <div className="font-display text-[64px] sm:text-[80px] md:text-[90px] leading-none text-[#e5e2e1] group-hover:text-[#0055FF] transition-colors duration-300 drop-shadow-[0_0_20px_rgba(0,85,255,0.2)]">
            {val1}K+
          </div>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mt-4 font-semibold group-hover:text-white transition-colors">
            {METRICS_DATA[0].label}
          </p>
          <p className="font-body text-xs text-[#888888]/80 mt-1">
            {METRICS_DATA[0].subtext}
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0055FF] group-hover:w-1/2 transition-all duration-300" />
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-12 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-[#131313]/80 transition-all duration-300 relative cursor-default"
        >
          <div className="font-display text-[64px] sm:text-[80px] md:text-[90px] leading-none text-[#e5e2e1] group-hover:text-[#0055FF] transition-colors duration-300 drop-shadow-[0_0_20px_rgba(0,85,255,0.2)]">
            ${val2}B
          </div>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mt-4 font-semibold group-hover:text-white transition-colors">
            {METRICS_DATA[1].label}
          </p>
          <p className="font-body text-xs text-[#888888]/80 mt-1">
            {METRICS_DATA[1].subtext}
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0055FF] group-hover:w-1/2 transition-all duration-300" />
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-12 md:p-16 flex flex-col items-center justify-center text-center group hover:bg-[#131313]/80 transition-all duration-300 relative cursor-default"
        >
          <div className="font-display text-[64px] sm:text-[80px] md:text-[90px] leading-none text-[#e5e2e1] group-hover:text-[#0055FF] transition-colors duration-300 drop-shadow-[0_0_20px_rgba(0,85,255,0.2)]">
            {val3}/7
          </div>
          <p className="font-mono text-xs text-[#888888] uppercase tracking-widest mt-4 font-semibold group-hover:text-white transition-colors">
            {METRICS_DATA[2].label}
          </p>
          <p className="font-body text-xs text-[#888888]/80 mt-1">
            {METRICS_DATA[2].subtext}
          </p>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0055FF] group-hover:w-1/2 transition-all duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

