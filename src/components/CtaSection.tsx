import React from 'react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  onOpenDemo: (type: 'demo' | 'start') => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-28 px-5 md:px-16 bg-[#0055FF] text-white relative overflow-hidden text-center">
      {/* Background Decorative Kinetic Lines & Ambient Light */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/20 border border-white/20 font-mono text-xs uppercase tracking-widest text-blue-100 mb-6 backdrop-blur-xs">
            <span className="material-symbols-outlined text-sm">rocket_launch</span>
            GET STARTED
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase font-extrabold leading-[0.9] tracking-tighter text-white">
            One platform.<br />
            Every campaign.<br />
            Total control.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
        >
          Bring your advertising operations into a single command center. Request a demo or get started today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
        >
          <button
            onClick={() => onOpenDemo('start')}
            className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_45px_rgba(255,255,255,0.6)] cursor-pointer"
          >
            Start Your Free Trial
          </button>
          <button
            onClick={() => onOpenDemo('demo')}
            className="w-full sm:w-auto bg-black/40 text-white border border-white/30 px-10 py-5 rounded font-semibold text-sm uppercase tracking-wider hover:bg-black/60 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-xs"
          >
            Schedule Enterprise Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 flex flex-wrap justify-center gap-8 text-xs font-mono text-blue-200"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            No Credit Card Required
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            3-Minute OAuth Setup
          </span>
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">check_circle</span>
            SOC2 Type II Security
          </span>
        </motion.div>
      </div>
    </section>
  );
};

