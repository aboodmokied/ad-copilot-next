import React from 'react';

const LOGO_BAR = [
  'GOOGLE ADS INTEGRATION', 'META GRAPH API', 'TIKTOK MARKETING API', 'LINKEDIN B2B CONNECTOR',
  'AMAZON DSP SYNC', 'HUBPORT CRM ENGINE', 'SALESFORCE MARKETING CLOUD', 'KLAVIYO OMNICHANNEL',
  'POWERBI TELEMETRY', 'LOOER ANALYTICS', 'SNOWFLAKE DATA PIPELINE'
];

export const InfiniteMarquee: React.FC = () => {
  return (
    <div className="py-6 bg-[#090909] border-y border-[#222222] overflow-hidden relative selection:bg-[#0055FF]">
      {/* Tech Stack & API Integration Badges Marquee */}
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {[...LOGO_BAR, ...LOGO_BAR, ...LOGO_BAR, ...LOGO_BAR].map((logo, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-[#888888] hover:text-[#e5e2e1] transition-colors cursor-default group"
            >
              <span className="w-2 h-2 rounded-full bg-[#0055FF] group-hover:scale-150 transition-transform shadow-[0_0_8px_#0055FF]" />
              <span className="group-hover:text-white transition-colors">{logo}</span>
              <span className="text-[#222222] font-display text-lg">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

