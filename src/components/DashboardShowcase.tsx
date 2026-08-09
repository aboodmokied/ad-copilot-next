import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from './TiltCard';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'attribution' | 'pacing' | 'creatives'>('overview');
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const chartData = [
    { day: 'Mon', roas: 3.2, spend: '$12.4k', conv: 840 },
    { day: 'Tue', roas: 3.5, spend: '$14.1k', conv: 1020 },
    { day: 'Wed', roas: 3.1, spend: '$11.8k', conv: 790 },
    { day: 'Thu', roas: 4.1, spend: '$18.2k', conv: 1450 },
    { day: 'Fri', roas: 4.4, spend: '$22.0k', conv: 1890 },
    { day: 'Sat', roas: 3.9, spend: '$19.5k', conv: 1510 },
    { day: 'Sun', roas: 4.6, spend: '$24.8k', conv: 2100 }
  ];

  return (
    <section className="py-28 px-5 md:px-16 border-b border-[#222222] bg-black text-center overflow-hidden relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0055FF]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
        >
          <span className="material-symbols-outlined text-sm">dashboard</span>
          PLATFORM INTERFACE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-4"
        >
          Designed for clarity.<br />
          <span className="text-[#0055FF]">Built for action.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-base md:text-lg text-[#888888] max-w-2xl mx-auto"
        >
          Get the full picture instantly. Aggregate data across all channels into customizable views that matter to your team.
        </motion.p>
      </div>

      {/* Main Dashboard Container Mock wrapped in TiltCard */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Floating Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-10 left-4 md:-left-10 p-4 bg-[#131313] border border-[#0055FF] shadow-[0_0_30px_rgba(0,85,255,0.3)] z-30 hidden sm:block transform -rotate-3 rounded-sm"
        >
          <div className="font-mono text-[10px] text-[#888888] uppercase mb-1">
            GLOBAL ROAS
          </div>
          <div className="font-display text-3xl text-[#0055FF]">3.8x</div>
          <div className="text-[10px] font-mono text-emerald-400 mt-1">
            ↑ +18.2% vs benchmark
          </div>
        </motion.div>

        {/* Floating Right Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-1/2 right-4 md:-right-12 p-4 bg-[#131313] border border-[#222222] shadow-2xl z-30 hidden sm:block transform rotate-3 rounded-sm"
        >
          <div className="font-mono text-[10px] text-[#888888] uppercase mb-1">
            TOTAL CONVERSIONS
          </div>
          <div className="font-display text-3xl text-[#e5e2e1]">12,450</div>
          <div className="text-[10px] font-mono text-[#888888] mt-1">
            Across 4 ad networks
          </div>
        </motion.div>

        <TiltCard maxRotation={5}>
          {/* Dashboard Canvas Container */}
          <div className="bg-[#131313] border border-[#222222] hover:border-[#0055FF]/40 transition-colors rounded-lg p-6 md:p-8 shadow-2xl text-left relative z-10">
            {/* Dashboard Header Bar with Tabs & Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#222222] pb-4 mb-6">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'attribution', label: 'Attribution' },
                  { id: 'pacing', label: 'Budget Pacing' },
                  { id: 'creatives', label: 'Creative Fatigue' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-sm cursor-pointer whitespace-nowrap shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-[#0055FF] text-white font-semibold shadow-md'
                        : 'text-[#888888] hover:text-[#e5e2e1] bg-black/40 border border-[#222222]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 text-xs font-mono text-[#888888]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black border border-[#222222] rounded text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE AGGREGATION
                </span>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="hover:text-white transition-colors p-1 cursor-pointer"
                  title="Expand fullscreen view"
                >
                  <span className="material-symbols-outlined text-lg">fullscreen</span>
                </button>
              </div>
            </div>

            {/* Metric KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-black/60 p-3 sm:p-4 border border-[#222222] rounded-sm">
                <div className="font-mono text-[10px] text-[#888888] uppercase truncate">
                  Active Ad Spend
                </div>
                <div className="font-display text-xl sm:text-2xl text-[#e5e2e1] mt-1 truncate">
                  $103,000
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-mono truncate">
                  Pacing 98.4%
                </div>
              </div>

              <div className="bg-black/60 p-3 sm:p-4 border border-[#222222] rounded-sm">
                <div className="font-mono text-[10px] text-[#888888] uppercase truncate">
                  Blended ROAS
                </div>
                <div className="font-display text-xl sm:text-2xl text-[#0055FF] mt-1 truncate">
                  3.82x
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-mono truncate">
                  +0.42x target
                </div>
              </div>

              <div className="bg-black/60 p-3 sm:p-4 border border-[#222222] rounded-sm">
                <div className="font-mono text-[10px] text-[#888888] uppercase truncate">
                  Avg Cost Per Lead
                </div>
                <div className="font-display text-xl sm:text-2xl text-[#e5e2e1] mt-1 truncate">
                  $18.40
                </div>
                <div className="text-[10px] text-emerald-400 mt-1 font-mono truncate">
                  -14.2% lower
                </div>
              </div>

              <div className="bg-black/60 p-3 sm:p-4 border border-[#222222] rounded-sm">
                <div className="font-mono text-[10px] text-[#888888] uppercase truncate">
                  Channel Efficiency
                </div>
                <div className="font-display text-xl sm:text-2xl text-[#e5e2e1] mt-1 truncate">
                  96.8%
                </div>
                <div className="text-[10px] text-[#888888] mt-1 font-mono truncate">
                  Optimal split
                </div>
              </div>
            </div>

            {/* Main Visualization Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black/80 border border-[#222222] p-6 rounded-sm relative"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-mono text-xs uppercase text-[#888888]">
                      7-Day ROAS Velocity & Conversion Curve
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#888888]">
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-[#0055FF]"></span> ROAS Velocity
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-0.5 bg-emerald-500"></span> Conversion Volume
                      </span>
                    </div>
                  </div>

                  {/* SVG Animated Chart */}
                  <div className="h-64 w-full relative pt-4">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200">
                      {/* Grid lines */}
                      {[0, 50, 100, 150, 200].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="700"
                          y2={y}
                          stroke="#222222"
                          strokeDasharray="4 4"
                        />
                      ))}

                      {/* Gradient Area Fill */}
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#0055FF" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#0055FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 20 140 Q 120 110 220 150 T 420 60 T 620 30 T 680 10 L 680 200 L 20 200 Z"
                        fill="url(#chartGlow)"
                      />

                      {/* Line path */}
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        d="M 20 140 Q 120 110 220 150 T 420 60 T 620 30 T 680 10"
                        fill="none"
                        stroke="#0055FF"
                        strokeWidth="3"
                      />

                      {/* Interactive Points */}
                      {chartData.map((d, i) => {
                        const cx = 20 + i * 110;
                        // Mapping ROAS to Y height
                        const cy = 200 - (d.roas / 5) * 180;
                        const isHovered = hoveredPoint === i;

                        return (
                          <g key={i}>
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isHovered ? '8' : '5'}
                              fill={isHovered ? '#0055FF' : '#ffffff'}
                              stroke="#0055FF"
                              strokeWidth="2"
                              className="cursor-pointer transition-all duration-200"
                              onMouseEnter={() => setHoveredPoint(i)}
                              onMouseLeave={() => setHoveredPoint(null)}
                            />

                            {/* Hover Tooltip */}
                            {isHovered && (
                              <foreignObject x={cx - 60} y={cy - 70} width="120" height="60">
                                <div className="bg-[#131313] border border-[#0055FF] p-2 rounded shadow-xl text-center text-[10px] font-mono">
                                  <div className="text-white font-bold">{d.day}: {d.roas}x ROAS</div>
                                  <div className="text-[#888888]">Spend: {d.spend}</div>
                                  <div className="text-emerald-400">Conversions: {d.conv}</div>
                                </div>
                              </foreignObject>
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    {/* Day X Labels */}
                    <div className="flex justify-between mt-4 px-2 font-mono text-xs text-[#888888]">
                      {chartData.map((d) => (
                        <span key={d.day}>{d.day}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'attribution' && (
                <motion.div
                  key="attribution"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black/80 border border-[#222222] p-6 rounded-sm space-y-4 font-mono text-xs"
                >
                  <div className="text-[#888888] uppercase mb-2">Multi-Touch Conversion Path Share</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-white mb-1">
                        <span>Meta Ads (First Touch Awareness)</span>
                        <span>38.2% ($48,200)</span>
                      </div>
                      <div className="w-full bg-[#222222] h-2 rounded overflow-hidden">
                        <div className="bg-[#0055FF] h-full" style={{ width: '38.2%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-white mb-1">
                        <span>Google Search (Last Touch Conversion)</span>
                        <span>44.5% ($56,100)</span>
                      </div>
                      <div className="w-full bg-[#222222] h-2 rounded overflow-hidden">
                        <div className="bg-emerald-500 h-full" style={{ width: '44.5%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-white mb-1">
                        <span>TikTok & LinkedIn (Mid-Funnel Retargeting)</span>
                        <span>17.3% ($21,800)</span>
                      </div>
                      <div className="w-full bg-[#222222] h-2 rounded overflow-hidden">
                        <div className="bg-purple-500 h-full" style={{ width: '17.3%' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'pacing' && (
                <motion.div
                  key="pacing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black/80 border border-[#222222] p-6 rounded-sm font-mono text-xs space-y-4"
                >
                  <div className="text-[#888888] uppercase mb-2">Automated Pacing & Daily Cap Health</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#131313] p-4 border border-[#222222]">
                      <div className="text-white font-bold">Meta Retargeting Campaign #1</div>
                      <div className="text-[#888888] mt-1">Daily Cap: $5,000 | Spent: $4,920 (98.4%)</div>
                      <div className="text-emerald-400 mt-2">Optimal Pacing - No Overspend</div>
                    </div>
                    <div className="bg-[#131313] p-4 border border-[#222222]">
                      <div className="text-white font-bold">Google Performance Max</div>
                      <div className="text-[#888888] mt-1">Daily Cap: $8,000 | Spent: $7,980 (99.7%)</div>
                      <div className="text-emerald-400 mt-2">Auto-throttled at peak CTR</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'creatives' && (
                <motion.div
                  key="creatives"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-black/80 border border-[#222222] p-6 rounded-sm font-mono text-xs space-y-3"
                >
                  <div className="text-[#888888] uppercase mb-2">Creative Fatigue & CTR Warning Index</div>
                  <div className="p-3 bg-[#131313] border border-amber-500/50 flex justify-between items-center text-amber-200">
                    <span>Variant_Static_04.png — CTR dropped by 34% over 48h</span>
                    <span className="bg-amber-500/20 px-2 py-1 text-[10px] text-amber-400 uppercase">Auto-Swapping</span>
                  </div>
                  <div className="p-3 bg-[#131313] border border-emerald-500/50 flex justify-between items-center text-emerald-200">
                    <span>Variant_Video_B.mp4 — CTR 4.8% (+1.2% benchmark)</span>
                    <span className="bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-400 uppercase">Top Performer</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </TiltCard>
      </div>

      {/* Fullscreen Modal View */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 p-6 overflow-y-auto flex flex-col justify-center items-center"
          >
            <div className="max-w-6xl w-full bg-[#131313] border border-[#0055FF] p-8 rounded shadow-2xl relative text-left">
              <button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-6 right-6 text-[#888888] hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
              <h3 className="font-display text-3xl text-white uppercase mb-4">
                Full-Scale Campaign Operations Console
              </h3>
              <p className="font-body text-sm text-[#888888] mb-6">
                Showing full multi-channel telemetry streams for 4 connected ad networks with real-time conversion deduplication.
              </p>
              <div className="bg-black p-6 border border-[#222222] font-mono text-xs text-[#e5e2e1] space-y-2">
                <div>[SYSTEM] Connected to Google Ads OAuth API (Lat: 42ms)</div>
                <div>[SYSTEM] Connected to Meta Graph API v19.0 (Lat: 38ms)</div>
                <div>[AI ENGINE] Processing 14,200 bid permutations across 82 target segments...</div>
                <div className="text-emerald-400">[OPTIMIZER] 0 waste detected. Pacing accuracy: 99.8%.</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

