export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext?: string;
}

export interface FeatureItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  category: string;
  stats?: string;
  details: string[];
}

export interface LifecycleStep {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  metrics: string;
  icon: string;
}

export interface CopilotRecommendation {
  id: string;
  title: string;
  description: string;
  impact: string;
  roasDelta: number;
  actionType: 'apply' | 'review';
  applied?: boolean;
  channel: 'Google' | 'Meta' | 'TikTok' | 'LinkedIn';
}

export interface BrandProfile {
  id: string;
  initial: string;
  name: string;
  campaignsCount: number;
  monthlySpend: string;
  roas: string;
  topChannel: string;
  status: 'Active' | 'Optimizing' | 'Scaling';
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
