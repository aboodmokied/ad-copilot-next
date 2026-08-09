import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

interface HeroProps {
  onOpenDemo: (type: 'demo' | 'start') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  // Mouse hover parallax for floating widgets
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * 20);
  };

  const widgetX1 = useTransform(mouseX, (x) => x * -0.8);
  const widgetY1 = useTransform(mouseY, (y) => y * -0.8);
  const widgetX2 = useTransform(mouseX, (x) => x * 1.2);
  const widgetY2 = useTransform(mouseY, (y) => y * 1.2);

  // Live conversion ticker simulation
  const [tickerIndex, setTickerIndex] = useState(0);
  const tickerEvents = [
    { text: 'Meta Campaign #829 scaling ROAS to 4.82x', type: 'Meta', time: 'Just now' },
    { text: 'Google Search Exact bid auto-adjusted +12%', type: 'Google', time: '2s ago' },
    { text: 'TikTok Creative Fatigue detected -> Auto-swapped', type: 'TikTok', time: '5s ago' },
    { text: 'Conversions synced: 12,482 total across channels', type: 'Analytics', time: '8s ago' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerEvents.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [tickerEvents.length]);

  return (
    <section
      id="platform"
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] sm:min-h-[95vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-16 pt-28 sm:pt-32 pb-20 overflow-hidden border-b border-[#222222] w-full"
    >
      {/* Background Grid & Blue Radial Blur */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[650px] h-[340px] sm:h-[650px] bg-[#0055FF]/15 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Main Content Box */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded bg-[#131313] border border-[#222222] font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#0055FF] shadow-inner max-w-full justify-center text-center"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0055FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0055FF]"></span>
          </span>
          <span className="truncate">THE ADVERTISING COMMAND CENTER</span>
        </motion.div>

        {/* Display Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 w-full text-center"
        >
          <h1 className="font-display text-4xl sm:text-7xl md:text-[95px] lg:text-[115px] uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tighter max-w-5xl mx-auto break-words text-center">
            ONE COMMAND CENTER.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e5e2e1] to-[#888888]">
              EVERY CAMPAIGN.
            </span>
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-body text-base sm:text-lg md:text-xl text-[#888888] max-w-2xl mx-auto leading-relaxed mt-2 text-center px-2 sm:px-0"
        >
          Create, launch, monitor, and optimize your advertising campaigns from one intelligent platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto justify-center items-stretch sm:items-center"
        >
          <button
            onClick={() => onOpenDemo('start')}
            className="group relative bg-[#0055FF] text-white px-7 sm:px-9 py-4 rounded font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 border border-[#0055FF] shadow-[0_0_30px_rgba(0,85,255,0.4)] hover:shadow-[0_0_40px_rgba(0,85,255,0.6)] active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            <span>Start Building</span>
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <a
            href="#problem"
            className="bg-[#131313] text-[#e5e2e1] border border-[#222222] px-7 sm:px-9 py-4 rounded font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#201f1f] hover:border-[#0055FF]/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto text-center"
          >
            <span>Explore Platform</span>
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] text-[#888888]">
              south
            </span>
          </a>
        </motion.div>

        {/* Supporting text below CTA */}
        <div className="font-mono text-xs uppercase text-[#888888] tracking-wider mt-1">
          Built for marketing teams, brands, and agencies.
        </div>

        {/* Ecosystem Nodes & Floating Performance Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 w-full max-w-4xl bg-[#0d0d0d]/90 border border-[#222222] rounded-lg p-6 sm:p-8 backdrop-blur-md relative shadow-2xl"
        >
          <div className="text-center font-mono text-[11px] uppercase tracking-widest text-[#888888] mb-6">
            CONNECTED ADCOMMAND ECOSYSTEM
          </div>

          {/* Connected Central Node */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4">
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span> META
            </div>
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span> GOOGLE
            </div>
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> TIKTOK
            </div>

            <div className="px-6 py-3 bg-[#0055FF] text-white rounded font-mono text-sm uppercase font-extrabold tracking-wider shadow-[0_0_25px_rgba(0,85,255,0.5)] border border-blue-400">
              ADCOMMAND
            </div>

            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> ANALYTICS
            </div>
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span> AUDIENCES
            </div>
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span> CREATIVES
            </div>
            <div className="px-4 py-2 bg-[#131313] border border-[#222222] rounded font-mono text-xs uppercase text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> BUDGETS
            </div>
          </div>

          {/* Performance Cards Grid (ROAS, CTR, Conversions, Spend) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-[#222222]">
            <div className="bg-[#131313] border border-[#222222] p-3 rounded text-left">
              <div className="font-mono text-[10px] text-[#888888] uppercase">ROAS</div>
              <div className="font-display text-2xl font-extrabold text-[#0055FF] mt-1 flex items-center gap-1">
                4.82 <span className="material-symbols-outlined text-sm text-emerald-400">trending_up</span>
              </div>
            </div>
            <div className="bg-[#131313] border border-[#222222] p-3 rounded text-left">
              <div className="font-mono text-[10px] text-[#888888] uppercase">CTR</div>
              <div className="font-display text-2xl font-extrabold text-white mt-1 flex items-center gap-1">
                3.84% <span className="material-symbols-outlined text-sm text-emerald-400">trending_up</span>
              </div>
            </div>
            <div className="bg-[#131313] border border-[#222222] p-3 rounded text-left">
              <div className="font-mono text-[10px] text-[#888888] uppercase">CONVERSIONS</div>
              <div className="font-display text-2xl font-extrabold text-white mt-1 flex items-center gap-1">
                12,482 <span className="material-symbols-outlined text-sm text-emerald-400">trending_up</span>
              </div>
            </div>
            <div className="bg-[#131313] border border-[#222222] p-3 rounded text-left">
              <div className="font-mono text-[10px] text-[#888888] uppercase">SPEND</div>
              <div className="font-display text-2xl font-extrabold text-[#e5e2e1] mt-1">
                $24,830
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Parallax Cards */}
      <motion.div
        style={{ x: widgetX1, y: widgetY1 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/3 left-6 md:left-12 p-4 bg-[#131313]/90 border border-[#222222] rounded-lg shadow-2xl hidden lg:block backdrop-blur-md transform -rotate-3 hover:border-[#0055FF] transition-colors"
      >
        <div className="flex items-center gap-2 font-mono text-[10px] text-[#888888] mb-1 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          ROAS Target
        </div>
        <div className="font-display text-3xl font-extrabold text-[#0055FF]">
          4.82x ↑
        </div>
      </motion.div>

      <motion.div
        style={{ x: widgetX2, y: widgetY2 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/3 right-6 md:right-12 p-4 bg-[#131313]/90 border border-[#222222] rounded-lg shadow-2xl hidden lg:block backdrop-blur-md transform rotate-3 hover:border-[#0055FF] transition-colors"
      >
        <div className="font-mono text-[10px] text-[#888888] mb-1 uppercase tracking-wider">
          Campaign Conversions
        </div>
        <div className="font-display text-2xl font-bold text-white">
          12,482 ↑
        </div>
      </motion.div>
    </section>
  );
};

