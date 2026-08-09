import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDS_DATA } from '../data/landingData';
import { BrandProfile } from '../types';

export const MultiBrandSection: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState<BrandProfile>(BRANDS_DATA[1]); // TechCorp

  return (
    <section className="py-28 px-5 md:px-16 bg-[#1c1b1b] border-b border-[#222222]">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4">
          <span className="material-symbols-outlined text-sm">corporate_fare</span>
          WORKSPACES & TEAMS
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-4">
          Manage every brand without the mess.
        </h2>
        <p className="font-body text-base md:text-lg text-[#888888] max-w-2xl mx-auto">
          Whether you manage one brand or fifty, AdCommand keeps campaign environments organized, secure, and isolated.
        </p>
      </div>

      {/* Brand Selector Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-12">
        {BRANDS_DATA.map((brand) => {
          const isSelected = activeBrand.id === brand.id;
          return (
            <motion.div
              key={brand.id}
              onClick={() => setActiveBrand(brand)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full sm:w-72 p-6 cursor-pointer border transition-all duration-300 relative text-left ${
                isSelected
                  ? 'bg-[#0055FF]/10 border-[#0055FF] shadow-[0_0_30px_rgba(0,85,255,0.25)]'
                  : 'bg-[#131313] border-[#222222] hover:border-[#0055FF]/50'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#0055FF] animate-ping" />
              )}

              <div
                className={`w-12 h-12 border flex items-center justify-center font-display text-2xl mb-4 transition-colors ${
                  isSelected
                    ? 'bg-[#0055FF] text-white border-[#0055FF]'
                    : 'bg-[#131313] text-[#e5e2e1] border-[#222222]'
                }`}
              >
                {brand.initial}
              </div>

              <h4 className="font-body text-xl font-bold text-[#e5e2e1]">
                {brand.name}
              </h4>
              <p className="font-mono text-xs text-[#888888] mt-1">
                {brand.campaignsCount} Active Campaigns
              </p>

              <div className="mt-4 pt-3 border-t border-[#222222] flex justify-between items-center font-mono text-[11px]">
                <span className="text-[#888888]">Monthly Spend:</span>
                <span className="text-white font-semibold">{brand.monthlySpend}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Active Brand Workspace Mock */}
      <div className="max-w-4xl mx-auto bg-[#131313] border border-[#222222] p-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-[#222222]">
              <div>
                <div className="font-mono text-xs text-[#0055FF] uppercase font-semibold">
                  WORKSPACE: {activeBrand.name}
                </div>
                <div className="font-display text-2xl text-white mt-0.5">
                  Live Isolation Control Panel
                </div>
              </div>

              <div className="flex gap-4 font-mono text-xs">
                <div className="bg-black/60 px-3 py-1.5 border border-[#222222]">
                  <span className="text-[#888888]">ROAS Target: </span>
                  <span className="text-emerald-400 font-bold">{activeBrand.roas}</span>
                </div>
                <div className="bg-black/60 px-3 py-1.5 border border-[#222222]">
                  <span className="text-[#888888]">Top Channel: </span>
                  <span className="text-white font-semibold">{activeBrand.topChannel}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="p-4 bg-black/40 border border-[#222222]">
                <div className="text-[#888888]">PERMISSION MODEL</div>
                <div className="text-white font-bold mt-1">Granular RBAC Enabled</div>
                <div className="text-[#888888] text-[10px] mt-1">Client team cannot view agency margins</div>
              </div>
              <div className="p-4 bg-black/40 border border-[#222222]">
                <div className="text-[#888888]">ISOLATED BILLING</div>
                <div className="text-white font-bold mt-1">Separate Stripe Profiles</div>
                <div className="text-[#888888] text-[10px] mt-1">Direct client invoice allocation</div>
              </div>
              <div className="p-4 bg-black/40 border border-[#222222]">
                <div className="text-[#888888]">WHITE-LABEL REPORTING</div>
                <div className="text-white font-bold mt-1">Custom Domain Sync</div>
                <div className="text-[#888888] text-[10px] mt-1">reports.youragency.com</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
