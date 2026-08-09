import React, { useState } from 'react';
import { motion } from 'motion/react';

export const ProblemSection: React.FC = () => {
  const [isUnified, setIsUnified] = useState(false);

  const fragments = [
    { name: 'META', icon: 'campaign', metric: '$12.4K Spend' },
    { name: 'GOOGLE', icon: 'search', metric: '3.8% CTR' },
    { name: 'TIKTOK', icon: 'movie', metric: '1.2M Views' },
    { name: 'ANALYTICS', icon: 'analytics', metric: '48.2K Visits' },
    { name: 'CREATIVES', icon: 'palette', metric: '142 Assets' },
    { name: 'AUDIENCES', icon: 'group', metric: '12 Segments' },
    { name: 'BUDGETS', icon: 'payments', metric: '$45.0K Cap' },
    { name: 'REPORTS', icon: 'description', metric: 'Manual CSVs' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-b border-[#222222] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0055FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-6">
            <span>THE PROBLEM</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-white tracking-tight leading-none mb-6">
            Advertising got fragmented.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#888888] leading-relaxed">
            Your campaigns live across different platforms. Your data lives in different dashboards. Your creatives live somewhere else. And your decisions still happen manually.
          </p>
        </div>

        {/* Interactive Fragmentation -> Unity Demo */}
        <div className="bg-[#0d0d0d] border border-[#222222] rounded-lg p-6 sm:p-12 relative my-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-[#222222] gap-4">
            <div>
              <div className="font-mono text-xs uppercase text-[#888888] tracking-wider">VISUAL SIMULATION</div>
              <div className="font-display text-xl sm:text-2xl uppercase font-bold text-white mt-1">
                {isUnified ? 'UNIFIED OPERATIONAL LAYER' : 'FRAGMENTED ADVERTISING STACK'}
              </div>
            </div>

            <button
              onClick={() => setIsUnified(!isUnified)}
              className="bg-[#0055FF] hover:bg-blue-600 text-white font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,85,255,0.3)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">
                {isUnified ? 'unfold_more' : 'hub'}
              </span>
              <span>{isUnified ? 'Show Fragmented State' : 'Unify Operation'}</span>
            </button>
          </div>

          {/* Grid of Nodes */}
          <div className="relative min-h-[320px] flex items-center justify-center">
            {/* Center Core Node when Unified */}
            <motion.div
              animate={{
                scale: isUnified ? 1 : 0,
                opacity: isUnified ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              className="absolute z-20 bg-black border-2 border-[#0055FF] shadow-[0_0_50px_rgba(0,85,255,0.4)] p-6 rounded-lg text-center max-w-xs"
            >
              <div className="font-mono text-[10px] uppercase text-[#0055FF] tracking-widest mb-1">COMMAND CENTER</div>
              <div className="font-display text-2xl uppercase font-extrabold text-white">ADCOMMAND</div>
              <p className="font-mono text-[11px] text-[#888888] mt-2">1 Operational Hub • 8 Channels Connected</p>
            </motion.div>

            {/* Fragmented Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {fragments.map((item, idx) => (
                <motion.div
                  key={item.name}
                  animate={{
                    x: isUnified ? (idx % 2 === 0 ? 10 : -10) : 0,
                    y: isUnified ? (idx < 4 ? 10 : -10) : 0,
                    scale: isUnified ? 0.95 : 1,
                    borderColor: isUnified ? '#0055FF' : '#222222'
                  }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                  className="bg-[#131313] border p-4 rounded text-left relative z-10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="material-symbols-outlined text-lg text-[#0055FF]">{item.icon}</span>
                    <span className="font-mono text-[10px] text-[#888888] uppercase">{item.name}</span>
                  </div>
                  <div className="font-mono text-xs font-semibold text-white">{item.metric}</div>
                  <div className="text-[10px] font-mono text-[#888888] mt-1">
                    {isUnified ? 'Synced to AdCommand' : 'Isolated Platform'}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Large Statement */}
        <div className="text-center mt-16 max-w-4xl mx-auto pt-8 border-t border-[#222222]">
          <h3 className="font-display text-3xl sm:text-5xl uppercase font-extrabold text-white tracking-tight leading-tight mb-4">
            AdCommand brings it together.
          </h3>
          <p className="font-body text-base sm:text-lg text-[#888888]">
            One operational layer for your entire advertising workflow.
          </p>
        </div>
      </div>
    </section>
  );
};
