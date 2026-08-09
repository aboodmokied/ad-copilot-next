import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  type: 'demo' | 'start';
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, type, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlySpend: '$50k - $250k',
    primaryGoal: 'Scale ROAS & Lower CPA'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#131313] border border-[#0055FF] p-8 max-w-lg w-full relative rounded shadow-[0_0_50px_rgba(0,85,255,0.3)] text-left"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#888888] hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="font-mono text-xs uppercase text-[#0055FF] font-semibold mb-1">
                  {type === 'demo' ? 'VIP DEMO RESERVATION' : 'INSTANT TRIAL ACCESS'}
                </div>
                <h3 className="font-display text-3xl uppercase text-white">
                  {type === 'demo' ? 'Schedule Platform Walkthrough' : 'Start Your 14-Day Free Trial'}
                </h3>
                <p className="font-body text-xs text-[#888888] mt-1">
                  Connect your ad accounts in under 3 minutes with full Copilot intelligence enabled.
                </p>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#888888] mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border border-[#222222] focus:border-[#0055FF] p-3 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#888888] mb-1">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border border-[#222222] focus:border-[#0055FF] p-3 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#888888] mb-1">COMPANY NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme Growth Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black border border-[#222222] focus:border-[#0055FF] p-3 text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[#888888] mb-1">ESTIMATED MONTHLY AD SPEND</label>
                  <select
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                    className="w-full bg-black border border-[#222222] focus:border-[#0055FF] p-3 text-white focus:outline-none"
                  >
                    <option>$10k - $50k / mo</option>
                    <option>$50k - $250k / mo</option>
                    <option>$250k - $1M / mo</option>
                    <option>$1M+ / mo (Enterprise)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0055FF] text-white py-4 font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-lg cursor-pointer"
              >
                {type === 'demo' ? 'Confirm Demo Request' : 'Launch Free Trial'}
              </button>

              <div className="text-center font-mono text-[10px] text-[#888888]">
                Protected by SOC2 Type II Security. No credit card required.
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h3 className="font-display text-3xl text-white uppercase">
                {type === 'demo' ? 'Demo Request Received!' : 'Account Reserved!'}
              </h3>
              <p className="font-body text-sm text-[#888888]">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. An AdCommand Enterprise Solution Specialist will reach out to <span className="text-[#0055FF]">{formData.email}</span> within 15 minutes.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#201f1f] text-white px-6 py-2.5 font-mono text-xs uppercase border border-[#222222] hover:border-[#0055FF] transition-colors"
              >
                Return To Platform
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
