import React from 'react';

interface LeftVisualPanelProps {
  subtitleLines?: string[];
}

export const LeftVisualPanel: React.FC<LeftVisualPanelProps> = ({
  subtitleLines = ['Precision scale.', 'AI-powered authority.']
}) => {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-12 bg-black border-r border-[#222222] overflow-hidden select-none">
      {/* Background Interactive Mesh Graphic */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        {/* Network Nodes SVG Grid */}
        <svg className="w-full h-full stroke-blue-500/30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="auth-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <radialGradient id="blue-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0055FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0055FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#auth-grid)" />
          
          {/* Animated Connecting Lines */}
          <g className="stroke-[#0055FF]/40" strokeWidth="1">
            <line x1="10%" y1="20%" x2="40%" y2="50%" strokeDasharray="4 4" />
            <line x1="40%" y1="50%" x2="80%" y2="30%" />
            <line x1="40%" y1="50%" x2="30%" y2="80%" />
            <line x1="80%" y1="30%" x2="90%" y2="70%" />
            <line x1="30%" y1="80%" x2="70%" y2="85%" />
          </g>

          {/* Node Glow Points */}
          <circle cx="10%" cy="20%" r="4" fill="#0055FF" className="animate-pulse" />
          <circle cx="40%" cy="50%" r="6" fill="#0055FF" />
          <circle cx="80%" cy="30%" r="5" fill="#3b82f6" />
          <circle cx="30%" cy="80%" r="4" fill="#0055FF" />
          <circle cx="90%" cy="70%" r="5" fill="#60a5fa" className="animate-ping" />
          <circle cx="70%" cy="85%" r="4" fill="#0055FF" />
        </svg>

        {/* Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0055FF]/20 blur-[130px] rounded-full" />
      </div>

      {/* Top Branding Header */}
      <div className="relative z-10">
        <h1 className="font-display text-5xl md:text-6xl tracking-tighter uppercase text-white font-extrabold">
          AdCommand
        </h1>
      </div>

      {/* Bottom Tagline Accent */}
      <div className="relative z-10">
        <div className="border-l-2 border-[#0055FF] pl-4 space-y-1">
          {subtitleLines.map((line, idx) => (
            <p key={idx} className="font-body text-base text-[#e5e2e1] tracking-wide">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
