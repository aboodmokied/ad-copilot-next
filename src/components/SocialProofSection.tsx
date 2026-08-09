import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/landingData';

export const SocialProofSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-28 px-5 md:px-16 border-b border-[#222222] bg-[#0e0e0e] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0055FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Testimonials Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#131313] border border-[#222222] font-mono text-xs uppercase tracking-widest text-[#0055FF] mb-4"
          >
            <span className="material-symbols-outlined text-sm">format_quote</span>
            WHAT USERS SAY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#e5e2e1] leading-[0.95] tracking-tight mb-4"
          >
            Trusted by campaign teams worldwide.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-[#888888]"
          >
            See how high-performing marketing teams scale performance with AdCommand.
          </motion.p>
        </div>

        {/* Testimonial Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#131313] border border-[#222222] hover:border-[#0055FF]/50 p-8 md:p-12 relative mb-24 max-w-5xl mx-auto shadow-2xl rounded-sm transition-colors"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <div className="font-mono text-xs text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/30 px-3 py-1 inline-block uppercase tracking-wider rounded-sm">
                {TESTIMONIALS_DATA[activeTestimonial].metrics}
              </div>

              <blockquote className="font-body text-xl md:text-3xl text-white italic leading-relaxed">
                "{TESTIMONIALS_DATA[activeTestimonial].quote}"
              </blockquote>

              <div className="flex justify-between items-end border-t border-[#222222] pt-6">
                <div>
                  <div className="font-display text-2xl text-white">
                    {TESTIMONIALS_DATA[activeTestimonial].author}
                  </div>
                  <div className="font-mono text-xs text-[#888888] mt-1">
                    {TESTIMONIALS_DATA[activeTestimonial].role} at{' '}
                    <span className="text-[#0055FF] font-semibold">
                      {TESTIMONIALS_DATA[activeTestimonial].company}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev > 0 ? prev - 1 : TESTIMONIALS_DATA.length - 1
                      )
                    }
                    className="p-3 bg-[#201f1f] hover:bg-[#0055FF] hover:text-white text-white border border-[#222222] transition-colors cursor-pointer rounded-sm"
                  >
                    <span className="material-symbols-outlined text-sm">west</span>
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev < TESTIMONIALS_DATA.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="p-3 bg-[#201f1f] hover:bg-[#0055FF] hover:text-white text-white border border-[#222222] transition-colors cursor-pointer rounded-sm"
                  >
                    <span className="material-symbols-outlined text-sm">east</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* FAQs Accordion */}
        <div id="resources" className="max-w-4xl mx-auto pt-12 border-t border-[#222222]">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl uppercase text-white mb-2">
              FREQUENTLY ASKED QUESTIONS
            </h3>
            <p className="font-body text-sm text-[#888888]">
              Everything you need to know about setting up and scaling with AdCommand.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#131313] border border-[#222222] hover:border-[#333333] transition-colors overflow-hidden rounded-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-display text-xl uppercase text-[#e5e2e1]">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#0055FF] text-2xl shrink-0 transition-transform duration-300">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-[#888888] font-body text-sm leading-relaxed border-t border-[#222222]/50 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

