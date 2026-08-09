import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LIFECYCLE_STEPS } from '../data/landingData';

export const LifecycleSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="solutions" className="py-28 px-5 md:px-16 bg-[#0e0e0e] border-b border-[#222222] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0055FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
          >
            <span className="material-symbols-outlined text-sm">schema</span>
            THE WORKFLOW
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-4"
          >
            From idea to performance.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#888888]"
          >
            A continuous loop from initial planning through multi-channel deployment, real-time analytics, and AI optimizations.
          </motion.p>
        </div>

        {/* Step Selector Horizontal Bar for Desktop / Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vertical Timeline Steps */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative before:absolute before:inset-y-0 before:left-[20px] sm:before:left-[24px] md:before:left-[36px] before:w-px before:bg-[#222222]">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <motion.div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className={`relative pl-14 sm:pl-20 md:pl-28 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                    className={`absolute left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-18 border flex items-center justify-center font-display text-lg sm:text-xl md:text-3xl transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0055FF] text-white border-[#0055FF] shadow-[0_0_25px_rgba(0,85,255,0.5)]'
                        : 'bg-black border-[#222222] text-[#888888] group-hover:border-[#0055FF]/50'
                    }`}
                  >
                    {step.number}
                  </motion.div>

                  <h3
                    className={`font-display text-xl sm:text-2xl md:text-3xl uppercase transition-colors ${
                      isActive ? 'text-[#0055FF]' : 'text-[#e5e2e1] group-hover:text-white'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-[#888888] line-clamp-2 mt-1">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Interactive Visualizer Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#131313] border border-[#0055FF] p-8 md:p-10 relative shadow-[0_0_40px_rgba(0,85,255,0.15)] rounded-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222222] pb-6 mb-6 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-[#0055FF] animate-pulse shrink-0">
                      {LIFECYCLE_STEPS[activeStep].icon}
                    </span>
                    <div>
                      <div className="font-mono text-xs uppercase text-[#888888]">
                        STAGE {LIFECYCLE_STEPS[activeStep].number} OF {String(LIFECYCLE_STEPS.length).padStart(2, '0')}
                      </div>
                      <h4 className="font-display text-2xl sm:text-3xl uppercase text-white">
                        {LIFECYCLE_STEPS[activeStep].title}
                      </h4>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto font-mono text-xs text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/30 px-3 py-1 uppercase tracking-wider">
                    {LIFECYCLE_STEPS[activeStep].metrics}
                  </span>
                </div>

                <p className="font-body text-base text-[#e5e2e1] leading-relaxed mb-8">
                  {LIFECYCLE_STEPS[activeStep].description}
                </p>

                <div className="space-y-4 bg-black/60 p-6 border border-[#222222] mb-8 rounded-sm">
                  <div className="font-mono text-xs uppercase text-[#888888] mb-2 font-semibold">
                    Core Workflow Enablers:
                  </div>
                  {LIFECYCLE_STEPS[activeStep].highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 text-sm text-[#e5e2e1]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF]"></span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#888888] pt-2">
                  <span>Click next step to simulate lifecycle</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : LIFECYCLE_STEPS.length - 1))}
                      className="p-2.5 bg-[#201f1f] hover:bg-[#0055FF] hover:text-white text-[#e5e2e1] transition-colors border border-[#333333] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">west</span>
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < LIFECYCLE_STEPS.length - 1 ? prev + 1 : 0))}
                      className="p-2.5 bg-[#201f1f] hover:bg-[#0055FF] hover:text-white text-[#e5e2e1] transition-colors border border-[#333333] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">east</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

