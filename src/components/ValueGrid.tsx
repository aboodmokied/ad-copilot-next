import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURES_DATA } from '../data/landingData';
import { FeatureItem } from '../types';
import { TiltCard } from './TiltCard';

export const ValueGrid: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  return (
    <section id="features" className="py-28 px-5 md:px-16 border-b border-[#222222] bg-black relative">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4">
            <span className="material-symbols-outlined text-sm">grid_view</span>
            ONE PLATFORM
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-6">
            Everything your advertising needs.<br />
            <span className="text-[#0055FF]">Under one command.</span>
          </h2>
          <p className="font-body text-base md:text-lg text-[#888888] leading-relaxed">
            From the first campaign idea to performance optimization, AdCommand gives your team one place to operate, understand, and improve every campaign.
          </p>
        </div>

        {/* 6 Feature Cards Grid with Interactive 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <TiltCard
                onClick={() => setSelectedFeature(feature)}
                className="group h-full bg-[#131313] p-8 border border-[#222222] hover:border-[#0055FF] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Header row with Icon and Stats pill */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="material-symbols-outlined text-4xl text-[#0055FF] group-hover:scale-110 transition-transform duration-300">
                      {feature.iconName}
                    </span>
                    {feature.stats && (
                      <span className="font-mono text-[11px] text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/30 px-2.5 py-1 rounded-sm uppercase tracking-wide">
                        {feature.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl uppercase text-[#e5e2e1] mb-3 group-hover:text-[#0055FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#888888] font-body text-sm leading-relaxed mb-6 group-hover:text-[#e5e2e1]/90 transition-colors">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#888888] group-hover:text-[#0055FF]">
                  <span>VIEW TECHNICAL SPECIFICATIONS</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#131313] border border-[#0055FF] p-8 max-w-2xl w-full rounded-none relative shadow-[0_0_50px_rgba(0,85,255,0.2)]"
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-6 right-6 text-[#888888] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-3xl text-[#0055FF]">
                  {selectedFeature.iconName}
                </span>
                <span className="font-mono text-xs uppercase text-[#888888] tracking-widest">
                  {selectedFeature.category}
                </span>
              </div>

              <h3 className="font-display text-3xl uppercase text-white mb-2">
                {selectedFeature.title}
              </h3>
              <p className="text-[#888888] text-base mb-6 font-body">
                {selectedFeature.description}
              </p>

              <div className="space-y-3 mb-8 bg-black/50 p-4 border border-[#222222]">
                <div className="font-mono text-xs uppercase text-[#0055FF] mb-2 font-semibold">
                  Key Specifications & Features:
                </div>
                {selectedFeature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-[#e5e2e1]">
                    <span className="material-symbols-outlined text-[#0055FF] text-base shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="bg-[#0055FF] text-white px-6 py-2.5 font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors"
                >
                  Close Spec View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
