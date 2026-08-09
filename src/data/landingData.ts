import { MetricItem, FeatureItem, LifecycleStep, CopilotRecommendation, BrandProfile, Testimonial, FaqItem } from '../types';

export const METRICS_DATA: MetricItem[] = [
  {
    id: 'campaigns',
    value: 10000,
    suffix: '+',
    label: 'Campaigns Managed',
    subtext: 'Across Meta, Google, TikTok & LinkedIn'
  },
  {
    id: 'spend',
    value: 2.4,
    prefix: '$',
    suffix: 'B',
    label: 'Ad Spend Optimized',
    subtext: 'Processed through precision AI models'
  },
  {
    id: 'visibility',
    value: 24,
    suffix: '/7',
    label: 'Global Visibility',
    subtext: 'Sub-second real-time streaming reporting'
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'campaign-management',
    iconName: 'campaign',
    title: 'CAMPAIGN MANAGEMENT',
    description: 'Plan and manage campaigns from one centralized workspace.',
    category: '01',
    stats: 'Centralized',
    details: [
      'Unified campaign view across all networks',
      'Centralized objective and strategy setup',
      'Cross-channel launch control panel',
      'Real-time status and health checks'
    ]
  },
  {
    id: 'multichannel-control',
    iconName: 'hub',
    title: 'MULTI-CHANNEL CONTROL',
    description: 'Connect and manage advertising activity across your connected channels.',
    category: '02',
    stats: 'Multi-Channel',
    details: [
      'Meta, Google, TikTok, and LinkedIn in one view',
      'Universal campaign taxonomy across platforms',
      'Cross-platform budget and performance sync',
      'Centralized API connection governance'
    ]
  },
  {
    id: 'realtime-analytics',
    iconName: 'monitoring',
    title: 'REAL-TIME ANALYTICS',
    description: 'Understand performance without jumping between dashboards.',
    category: '03',
    stats: 'Real-Time',
    details: [
      'Live ROAS, CTR, and conversion metrics',
      'Unified cross-channel performance views',
      'First-party attribution and conversion tracking',
      'Custom performance filters and data views'
    ]
  },
  {
    id: 'audience-management',
    iconName: 'groups',
    title: 'AUDIENCE MANAGEMENT',
    description: 'Organize and manage campaign targeting in one place.',
    category: '04',
    stats: 'Targeting',
    details: [
      'CRM audience sync and segment builder',
      'Cross-channel lookalike creation',
      'Negative list and exclusion management',
      'Audience overlap detection'
    ]
  },
  {
    id: 'creative-management',
    iconName: 'palette',
    title: 'CREATIVE MANAGEMENT',
    description: 'Keep campaign creatives organized and connected to performance.',
    category: '05',
    stats: 'Creatives',
    details: [
      'Centralized ad creative asset library',
      'Performance attribution by creative asset',
      'Creative fatigue alerts and auto-replacement',
      'Multi-format asset scaling'
    ]
  },
  {
    id: 'budget-control',
    iconName: 'payments',
    title: 'BUDGET CONTROL',
    description: 'Monitor spend and understand where your budget is going.',
    category: '06',
    stats: 'Budgeting',
    details: [
      'Automated spend pacing and stop-loss rules',
      'Dynamic budget re-allocation triggers',
      'Multi-currency and account limit tracking',
      'ROI and efficiency safeguards'
    ]
  }
];

export const LIFECYCLE_STEPS: LifecycleStep[] = [
  {
    number: '01',
    title: 'PLAN',
    description: 'Define your objective, audience, budget, and campaign strategy.',
    highlights: ['Objective & KPI definition', 'Multi-channel strategy mapping', 'Budget allocation scenario modeling'],
    metrics: 'Strategy Ready',
    icon: 'account_tree'
  },
  {
    number: '02',
    title: 'CREATE',
    description: 'Build campaigns, messaging, creatives, and targeting.',
    highlights: ['Multi-format asset uploading', 'Targeting parameter matrix', 'Ad copy variation builder'],
    metrics: 'Assets Staged',
    icon: 'auto_awesome'
  },
  {
    number: '03',
    title: 'LAUNCH',
    description: 'Deploy campaigns across your connected advertising channels.',
    highlights: ['1-Click multi-network push', 'Automated compliance checks', 'Rollback protection guardrails'],
    metrics: 'Live Sync',
    icon: 'rocket_launch'
  },
  {
    number: '04',
    title: 'MONITOR',
    description: 'Track performance and campaign health in real time.',
    highlights: ['Real-time telemetry feed', 'Cross-channel ROAS tracker', 'Automated health and status alerts'],
    metrics: 'Live Monitoring',
    icon: 'query_stats'
  },
  {
    number: '05',
    title: 'ANALYZE',
    description: 'Understand what is working and what is not.',
    highlights: ['Creative fatigue analysis', 'Audience conversion breakdown', 'Channel efficiency comparison'],
    metrics: 'Full Visibility',
    icon: 'analytics'
  },
  {
    number: '06',
    title: 'OPTIMIZE',
    description: 'Take action based on data and AI-powered recommendations.',
    highlights: ['AI recommendation execution', 'Automated budget rebalancing', 'Creative variation swap'],
    metrics: '+18–27% Potential Impact',
    icon: 'trending_up'
  }
];

export const INITIAL_COPILOT_RECOMMENDATIONS: CopilotRecommendation[] = [
  {
    id: 'rec-1',
    title: 'Shift 12% of budget toward Audience A',
    description: 'Audience A generates strong engagement with 20% lower CPA. Shifting spend boosts overall campaign yield.',
    impact: 'High Impact',
    roasDelta: +0.45,
    actionType: 'apply',
    channel: 'Meta',
    applied: false
  },
  {
    id: 'rec-2',
    title: 'Test Creative B variation',
    description: 'Creative B shows higher click-through potential in test groups over the last 48 hours.',
    impact: 'Creative Boost',
    roasDelta: +0.22,
    actionType: 'review',
    channel: 'TikTok',
    applied: false
  },
  {
    id: 'rec-3',
    title: 'Reduce spend on Audience C & Launch new variation',
    description: 'Audience C conversion rate declined over the last 48 hours. Re-allocate capital to fresh variant.',
    impact: 'Efficiency',
    roasDelta: +0.68,
    actionType: 'apply',
    channel: 'Google',
    applied: false
  }
];

export const BRANDS_DATA: BrandProfile[] = [
  {
    id: 'brand-acme',
    initial: 'A',
    name: 'ACME',
    campaignsCount: 12,
    monthlySpend: '$42K Spend',
    roas: '4.6 ROAS',
    topChannel: 'Meta & Google',
    status: 'Active',
    color: '#0055FF'
  },
  {
    id: 'brand-techcorp',
    initial: 'T',
    name: 'TECHCORP',
    campaignsCount: 8,
    monthlySpend: '$28K Spend',
    roas: '5.1 ROAS',
    topChannel: 'LinkedIn & Search',
    status: 'Scaling',
    color: '#3b82f6'
  },
  {
    id: 'brand-nova',
    initial: 'N',
    name: 'NOVA',
    campaignsCount: 21,
    monthlySpend: '$63K Spend',
    roas: '3.9 ROAS',
    topChannel: 'TikTok & Shopping',
    status: 'Optimizing',
    color: '#10b981'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'AdCommand gives our team a completely different way to think about campaign operations. Instead of managing disconnected tools, we finally have one place to understand what is happening.',
    author: 'Marketing Director',
    role: 'Marketing Operations',
    company: 'Company Name',
    metrics: 'Unified Control'
  },
  {
    id: 'test-2',
    quote: 'Having real-time recommendations and multi-channel campaign control in one workspace eliminated hours of redundant manual monitoring across platforms.',
    author: 'Head of Advertising',
    role: 'Growth Marketing',
    company: 'Company Name',
    metrics: 'Operational Visibility'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: 'Platform & Integration',
    question: 'How fast can we integrate our existing ad accounts?',
    answer: 'Integration takes less than 3 minutes via secure OAuth connections for Google Ads, Meta Ads, TikTok Ads Manager, and LinkedIn Campaign Manager. Historical data is indexed automatically.'
  },
  {
    category: 'Security & Control',
    question: 'Does the AI make changes automatically without human approval?',
    answer: 'You have complete governance control. You can set AdCommand Copilot to "Recommendation Mode" (requires human click to execute) or "Autonomous Guardrails" (automatically executes within strict preset thresholds).'
  },
  {
    category: 'Agency & Multi-Brand',
    question: 'How does client isolation work for marketing agencies?',
    answer: 'AdCommand provides separate workspaces with strict role-based access controls, isolated billing profiles, and custom white-label client reporting dashboards.'
  },
  {
    category: 'Pricing & Scale',
    question: 'Is AdCommand suited for teams spending under $50k/mo?',
    answer: 'Yes! AdCommand scales with your business, from growth-stage startups spending $10k/mo up to enterprise brands managing $10M+/mo in global ad spend.'
  }
];
