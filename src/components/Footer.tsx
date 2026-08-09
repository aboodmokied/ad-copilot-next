import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#888888] border-t border-[#222222] pt-16 pb-12 px-5 md:px-16 font-body">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="font-display text-3xl text-white uppercase tracking-tighter">
              AdCommand
            </a>
            <p className="font-mono text-xs text-[#0055FF] uppercase tracking-wider font-semibold">
              One Command Center. Every Campaign.
            </p>
            <p className="text-sm text-[#888888] max-w-sm leading-relaxed">
              An AI-powered advertising campaign management platform built to unify planning, multi-channel execution, real-time analytics, and automated optimization.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131313] border border-[#222222] rounded text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              ● Systems Operational
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="font-mono text-xs uppercase text-white mb-4 tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li><a href="#features" className="hover:text-white transition-colors">Campaign Builder</a></li>
              <li><a href="#copilot" className="hover:text-white transition-colors">AI Copilot</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Multi-Channel Sync</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="font-mono text-xs uppercase text-white mb-4 tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li><a href="#solutions" className="hover:text-white transition-colors">Enterprise Brands</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Marketing Agencies</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">E-commerce Brands</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">B2B SaaS Growth</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div>
            <h4 className="font-mono text-xs uppercase text-white mb-4 tracking-wider">
              Security & Legal
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Type II Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <div>© {new Date().getFullYear()} AdCommand Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
