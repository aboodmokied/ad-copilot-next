import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { ProblemSection } from './components/ProblemSection';
import { CursorSpotlight } from './components/CursorSpotlight';
import { MetricsSection } from './components/MetricsSection';
import { ValueGrid } from './components/ValueGrid';
import { LifecycleSection } from './components/LifecycleSection';
import { AiCopilotSection } from './components/AiCopilotSection';
import { DashboardShowcase } from './components/DashboardShowcase';
import { RoiCalculatorSection } from './components/RoiCalculatorSection';
import { MultiBrandSection } from './components/MultiBrandSection';
import { WhyUsSection } from './components/WhyUsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { SignInPage } from './components/auth/SignInPage';
import { SignUpPage } from './components/auth/SignUpPage';
import { ForgotPasswordPage } from './components/auth/ForgotPasswordPage';
import { authApi, User } from './lib/authApi';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoType, setDemoType] = useState<'demo' | 'start'>('start');
  const [authView, setAuthView] = useState<'none' | 'signin' | 'signup' | 'forgot'>('none');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Helper to parse path into authView
  const getAuthViewFromPath = (path: string): 'none' | 'signin' | 'signup' | 'forgot' => {
    const cleanPath = path.toLowerCase().replace(/\/$/, '');
    if (cleanPath === '/signin' || cleanPath === '/login') return 'signin';
    if (cleanPath === '/signup' || cleanPath === '/register') return 'signup';
    if (cleanPath === '/forgot-password' || cleanPath === '/forgot') return 'forgot';
    return 'none';
  };

  // Navigate function that syncs state and browser URL history
  const navigateToAuth = (view: 'none' | 'signin' | 'signup' | 'forgot') => {
    setAuthView(view);
    let targetPath = '/';
    if (view === 'signin') targetPath = '/signin';
    if (view === 'signup') targetPath = '/signup';
    if (view === 'forgot') targetPath = '/forgot-password';

    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  };

  useEffect(() => {
    // Sync initial path with authView
    const initialView = getAuthViewFromPath(window.location.pathname);
    setAuthView(initialView);

    // Listen to browser Back/Forward buttons
    const handlePopState = () => {
      setAuthView(getAuthViewFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);

    // Load initial authentication state
    const user = authApi.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handleOpenDemo = (type: 'demo' | 'start') => {
    setDemoType(type);
    setDemoModalOpen(true);
  };

  const handleAuthSuccess = (user: User) => {
    setCurrentUser(user);
    navigateToAuth('none');
    triggerToast(`Authenticated as ${user.name}`);
  };

  const handleSignOut = () => {
    authApi.signOut();
    setCurrentUser(null);
    triggerToast('Signed out successfully.');
  };

  return (
    <div className="min-h-screen bg-black text-[#e5e2e1] selection:bg-[#0055FF] selection:text-white font-body relative overflow-x-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-[120] bg-[#131313] border border-[#0055FF] text-white px-4 py-3 rounded shadow-2xl flex items-center gap-3 font-mono text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Cursor Spotlight Follower */}
      <CursorSpotlight />

      {/* Navigation Bar */}
      <Navbar
        onOpenDemo={handleOpenDemo}
        currentUser={currentUser}
        onOpenAuth={(view) => navigateToAuth(view)}
        onSignOut={handleSignOut}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Live Operational Ticker Ribbon */}
        <InfiniteMarquee />

        {/* Section 0: Problem Statement */}
        <div id="problem">
          <ProblemSection />
        </div>

        {/* Section 1: Metrics Count-Up */}
        <MetricsSection />

        {/* Section 2: Core Value Capabilities */}
        <ValueGrid />

        {/* Section 3: End-To-End Campaign Lifecycle Workflow */}
        <LifecycleSection />

        {/* Section 4: Proprietary AI Copilot Section */}
        <AiCopilotSection />

        {/* Section 5: Interactive Platform Dashboard Showcase */}
        <DashboardShowcase />

        {/* Section 6: ROI & Spend Efficiency Calculator */}
        <RoiCalculatorSection onOpenDemo={handleOpenDemo} />

        {/* Section 7: Multi-Brand / Agency Workspaces */}
        <MultiBrandSection />

        {/* Section 8: Architectural & Infrastructure Capabilities */}
        <WhyUsSection />

        {/* Section 9: Client Testimonials & FAQs */}
        <SocialProofSection />

        {/* Section 10: High Impact CTA */}
        <CtaSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Fullscreen Pages */}
      <AnimatePresence>
        {authView === 'signin' && (
          <SignInPage
            onSuccess={handleAuthSuccess}
            onNavigateSignUp={() => navigateToAuth('signup')}
            onNavigateForgotPassword={() => navigateToAuth('forgot')}
            onClose={() => navigateToAuth('none')}
          />
        )}

        {authView === 'signup' && (
          <SignUpPage
            onSuccess={handleAuthSuccess}
            onNavigateSignIn={() => navigateToAuth('signin')}
            onClose={() => navigateToAuth('none')}
          />
        )}

        {authView === 'forgot' && (
          <ForgotPasswordPage
            onNavigateSignIn={() => navigateToAuth('signin')}
            onClose={() => navigateToAuth('none')}
          />
        )}
      </AnimatePresence>

      {/* Demo / Start Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        type={demoType}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
