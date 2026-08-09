import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RoiCalculatorSectionProps {
  onOpenDemo: (type: 'demo' | 'start') => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenDemo }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(100000); // $100k
  const [channelCount, setChannelCount] = useState<number>(3); // Meta, Google, TikTok
  const [targetRoas, setTargetRoas] = useState<number>(3.5);

  // Calculations
  const annualSpend = monthlySpend * 12;
  const estimatedRoasLift = 0.28; // +28% average ROAS lift
  const annualRevenueGain = Math.round(annualSpend * targetRoas * estimatedRoasLift);
  const wastedSpendSaved = Math.round(annualSpend * 0.14); // 14% eliminated waste
  const hoursSavedPerWeek = channelCount * 8; // 8 hrs saved per channel per week

  return (
    <section id="calculator" className="py-28 px-5 md:px-16 border-b border-[#222222] bg-[#0e0e0e] relative overflow-hidden">
      {/* Radial backlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0055FF]/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
          >
            <span className="material-symbols-outlined text-sm">calculate</span>
            Value & ROI Simulator
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-[#e5e2e1] leading-[0.95] tracking-tight mb-4"
          >
            CALCULATE YOUR ROAS IMPACT.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#888888]"
          >
            See how much incremental revenue and time AdCommand Copilot can generate for your advertising campaigns.
          </motion.p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-[#131313] border border-[#222222] p-8 flex flex-col justify-between rounded-sm"
          >
            <div>
              <h3 className="font-display text-2xl uppercase text-white mb-6 flex items-center justify-between">
                <span>Your Campaign Parameters</span>
                <span className="font-mono text-xs text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded border border-[#0055FF]/30">
                  INTERACTIVE
                </span>
              </h3>

              {/* Monthly Ad Spend Slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase text-[#888888]">
                    Monthly Ad Spend Across All Channels
                  </label>
                  <span className="font-display text-2xl text-[#0055FF]">
                    ${monthlySpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={10000}
                  max={1000000}
                  step={10000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-[#0055FF] cursor-pointer bg-[#222222] h-2 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#888888] mt-1">
                  <span>$10k / mo</span>
                  <span>$500k / mo</span>
                  <span>$1M+ / mo</span>
                </div>
              </div>

              {/* Channel Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase text-[#888888]">
                    Active Ad Networks Connected
                  </label>
                  <span className="font-display text-xl text-white">
                    {channelCount} Channels
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setChannelCount(num)}
                      className={`py-3 text-xs font-mono uppercase border transition-all cursor-pointer ${
                        channelCount === num
                          ? 'bg-[#0055FF] text-white border-[#0055FF] font-bold shadow-[0_0_15px_rgba(0,85,255,0.4)]'
                          : 'bg-black text-[#888888] border-[#222222] hover:border-[#888888]'
                      }`}
                    >
                      {num} {num === 1 ? 'Net' : 'Nets'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Baseline ROAS Target */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-mono text-xs uppercase text-[#888888]">
                    Current Baseline ROAS
                  </label>
                  <span className="font-display text-xl text-emerald-400">
                    {targetRoas}x
                  </span>
                </div>
                <input
                  type="range"
                  min={1.5}
                  max={8.0}
                  step={0.1}
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer bg-[#222222] h-2 rounded-lg"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-[#222222] text-xs font-mono text-[#888888]">
              *Calculated based on average benchmark data from $2.4B+ in managed ad spend.
            </div>
          </motion.div>

          {/* Results Output Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-[#0055FF] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_0_50px_rgba(0,85,255,0.3)] rounded-sm"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 font-display text-9xl pointer-events-none select-none">
              ROAS
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-blue-200 mb-2">
                PROJECTED ANNUAL IMPACT
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={annualRevenueGain}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-display text-4xl sm:text-6xl lg:text-8xl leading-none text-white uppercase mb-8 break-words"
                >
                  +${annualRevenueGain.toLocaleString()}
                </motion.div>
              </AnimatePresence>

              <div className="space-y-4 mb-8 bg-black/20 p-6 border border-white/20 rounded-sm backdrop-blur-xs">
                <div className="flex justify-between items-center text-sm font-mono pb-2 border-b border-white/10">
                  <span className="text-blue-100">Wasted Spend Saved:</span>
                  <span className="font-bold text-emerald-300">
                    ${wastedSpendSaved.toLocaleString()} / yr
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono pb-2 border-b border-white/10">
                  <span className="text-blue-100">Hours Saved Per Week:</span>
                  <span className="font-bold text-white">
                    {hoursSavedPerWeek} hrs / wk
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-mono">
                  <span className="text-blue-100">Projected ROAS Lift:</span>
                  <span className="font-bold text-emerald-300">
                    {(targetRoas + 0.98).toFixed(2)}x (+28%)
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenDemo('start')}
                className="w-full bg-white text-black py-4 font-semibold text-sm uppercase tracking-wider hover:bg-blue-50 active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer rounded-sm"
              >
                Unlock Your Custom Savings Plan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

