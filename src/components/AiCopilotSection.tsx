import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIAL_COPILOT_RECOMMENDATIONS } from '../data/landingData';
import { CopilotRecommendation } from '../types';

export const AiCopilotSection: React.FC = () => {
  const [recommendations, setRecommendations] = useState<CopilotRecommendation[]>(
    INITIAL_COPILOT_RECOMMENDATIONS
  );
  const [aiMode, setAiMode] = useState<'recommendation' | 'autonomous'>('recommendation');
  const [currentRoas, setCurrentRoas] = useState<number>(3.8);
  const [notification, setNotification] = useState<string | null>(null);

  const handleApply = (id: string) => {
    setRecommendations((prev) =>
      prev.map((rec) => {
        if (rec.id === id) {
          const updated = { ...rec, applied: true };
          setCurrentRoas((r) => Number((r + rec.roasDelta).toFixed(2)));
          triggerNotification(`Applied recommendation: "${rec.title}". ROAS lifted by +${rec.roasDelta}x!`);
          return updated;
        }
        return rec;
      })
    );
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const appliedCount = recommendations.filter((r) => r.applied).length;

  return (
    <section id="copilot" className="py-28 px-5 md:px-16 bg-[#201f1f] border-b border-[#222222] relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Blue Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0055FF]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#0055FF] text-white px-6 py-3 rounded shadow-2xl font-mono text-xs flex items-center gap-3 border border-blue-400"
          >
            <span className="material-symbols-outlined text-lg">check_circle</span>
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left text column */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            CAMPAIGN INTELLIGENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] mb-6"
          >
            Don't just monitor your campaigns.<br />
            <span className="text-[#0055FF]">Know what to do next.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#888888] mb-8 leading-relaxed"
          >
            AdCommand turns campaign data into actionable recommendations so your team can identify problems, opportunities, and next steps faster.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 font-body text-base text-[#e5e2e1] mb-8"
          >
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0055FF] text-xl">
                check_circle
              </span>
              <span>Predictive budget allocation & bid optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0055FF] text-xl">
                check_circle
              </span>
              <span>Automated A/B test resolution & variation selection</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#0055FF] text-xl">
                check_circle
              </span>
              <span>Creative fatigue detection & instant replacement</span>
            </li>
          </motion.ul>

          {/* Live Mode Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#131313] p-4 border border-[#222222] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-md rounded-sm"
          >
            <div className="font-mono text-xs uppercase text-[#888888]">
              Execution Governance Mode:
            </div>
            <div className="flex bg-black p-1 rounded border border-[#222222] text-xs font-mono w-full sm:w-auto justify-stretch">
              <button
                onClick={() => setAiMode('recommendation')}
                className={`flex-1 sm:flex-initial px-3 py-1 transition-colors cursor-pointer text-center ${
                  aiMode === 'recommendation'
                    ? 'bg-[#0055FF] text-white font-semibold shadow-[0_0_10px_#0055FF]'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Human Approval
              </button>
              <button
                onClick={() => {
                  setAiMode('autonomous');
                  triggerNotification('Autonomous Guardrails enabled: AI will execute bounded actions automatically.');
                }}
                className={`flex-1 sm:flex-initial px-3 py-1 transition-colors cursor-pointer text-center ${
                  aiMode === 'autonomous'
                    ? 'bg-[#0055FF] text-white font-semibold shadow-[0_0_10px_#0055FF]'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                Autonomous
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Simulated Copilot Widget Interactive UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="bg-black border border-[#222222] rounded-lg shadow-2xl overflow-hidden p-6 md:p-8 relative hover:border-[#0055FF]/40 transition-colors">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#222222]">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded bg-[#0055FF]/20 border border-[#0055FF] flex items-center justify-center text-[#0055FF] shrink-0">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase text-[#888888]">
                    AdCommand Copilot v4.8
                  </div>
                  <div className="font-body font-semibold text-[#e5e2e1]">
                    {recommendations.length - appliedCount} Recommendations Active
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right flex items-center justify-between sm:block border-t sm:border-t-0 pt-2 sm:pt-0 border-[#222222]">
                <div className="font-mono text-[10px] uppercase text-[#888888]">
                  PROJECTED ROAS
                </div>
                <motion.div
                  key={currentRoas}
                  initial={{ scale: 1.2, color: '#0055FF' }}
                  animate={{ scale: 1, color: '#0055FF' }}
                  className="font-display text-2xl"
                >
                  {currentRoas}x
                </motion.div>
              </div>
            </div>

            {/* Recommendation Cards */}
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <motion.div
                  key={rec.id}
                  layout
                  className={`p-4 border transition-all duration-300 rounded-sm ${
                    rec.applied
                      ? 'bg-emerald-950/20 border-emerald-500/50 opacity-80'
                      : 'bg-[#131313] border-[#222222] hover:border-[#0055FF]'
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] bg-[#222222] px-2 py-0.5 rounded text-[#888888] uppercase">
                          {rec.channel}
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase">
                          +{rec.roasDelta}x ROAS
                        </span>
                      </div>
                      <div className="font-body font-semibold text-[#e5e2e1] text-sm">
                        {rec.title}
                      </div>
                    </div>

                    {rec.applied ? (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 border border-emerald-500/30 rounded-sm">
                        <span className="material-symbols-outlined text-sm">check</span>
                        Applied
                      </span>
                    ) : (
                      <button
                        onClick={() => handleApply(rec.id)}
                        className="bg-[#0055FF] text-white px-4 py-2 rounded font-semibold text-xs whitespace-nowrap hover:bg-blue-600 active:scale-95 transition-all duration-200 border border-[#0055FF] shadow-[0_0_15px_rgba(0,85,255,0.3)] cursor-pointer"
                      >
                        Apply Now
                      </button>
                    )}
                  </div>

                  <div className="font-body text-xs text-[#888888] leading-relaxed">
                    {rec.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Status bar */}
            <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#888888]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Real-time campaign telemetry connected
              </span>
              <span>100% Guardrails Safe</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

