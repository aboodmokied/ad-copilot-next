import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from './TiltCard';

export const WhyUsSection: React.FC = () => {
  const COMPARISONS = [
    {
      category: 'PLATFORM MODEL',
      traditional: 'Fragmented tools & disconnected tabs',
      adcommand: 'Single unified command center',
      icon: 'hub'
    },
    {
      category: 'MULTI-CHANNEL EXECUTION',
      traditional: 'Manual account switching per network',
      adcommand: 'Native bi-directional multi-channel sync',
      icon: 'campaign'
    },
    {
      category: 'DATA FRESHNESS',
      traditional: 'Delayed sync (24h+ reporting lag)',
      adcommand: 'Real-time telemetry & live metrics',
      icon: 'bolt'
    },
    {
      category: 'CAMPAIGN WORKFLOW',
      traditional: 'Disjointed setup across disparate tools',
      adcommand: 'End-to-end lifecycle from plan to optimize',
      icon: 'schema'
    },
    {
      category: 'AI RECOMMENDATIONS',
      traditional: 'Static CSV exports & manual spreadsheets',
      adcommand: 'Actionable AI guidance with guardrails',
      icon: 'smart_toy'
    }
  ];

  return (
    <section className="py-28 px-5 md:px-16 border-b border-[#222222] bg-black relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
          >
            <span className="material-symbols-outlined text-sm">security</span>
            WHY ADCOMMAND
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-4"
          >
            Built for the reality of modern advertising.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#888888] max-w-2xl"
          >
            Traditional advertising workflows are fragmented and reactive. AdCommand brings structural clarity, real-time telemetry, and actionable execution.
          </motion.p>
        </div>

        {/* Structural Comparison Table */}
        <div className="bg-[#131313] border border-[#222222] p-6 md:p-8 rounded-sm shadow-2xl">
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-[#222222] font-mono text-xs uppercase text-[#888888] font-semibold">
            <div className="col-span-12 md:col-span-4">CAPABILITY AREA</div>
            <div className="col-span-12 md:col-span-4 text-[#888888]/70 hidden md:block">TRADITIONAL APPROACH</div>
            <div className="col-span-12 md:col-span-4 text-[#0055FF] hidden md:block">ADCOMMAND COMMAND CENTER</div>
          </div>

          <div className="divide-y divide-[#222222]/60">
            {COMPARISONS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="grid grid-cols-12 gap-4 py-5 items-center hover:bg-black/30 transition-colors px-2"
              >
                <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#0055FF] text-xl shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-mono text-xs uppercase text-white font-bold tracking-wide">
                    {item.category}
                  </span>
                </div>

                <div className="col-span-12 md:col-span-4 text-xs font-body text-[#888888] flex items-center gap-2">
                  <span className="md:hidden font-mono text-[10px] text-[#888888] uppercase block">TRADITIONAL:</span>
                  <span>{item.traditional}</span>
                </div>

                <div className="col-span-12 md:col-span-4 text-xs font-body text-[#e5e2e1] font-semibold flex items-center gap-2 bg-[#0055FF]/5 md:bg-transparent p-2.5 md:p-0 border border-[#0055FF]/20 md:border-0 rounded-sm">
                  <span className="material-symbols-outlined text-[#0055FF] text-base shrink-0">
                    check_circle
                  </span>
                  <span className="text-white">{item.adcommand}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


