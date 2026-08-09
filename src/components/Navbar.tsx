import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { User } from '../lib/authApi';

interface NavbarProps {
  onOpenDemo: (type: 'demo' | 'start') => void;
  currentUser?: User | null;
  onOpenAuth?: (view: 'signin' | 'signup' | 'forgot') => void;
  onSignOut?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  currentUser,
  onOpenAuth,
  onSignOut
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'AI Copilot', href: '#copilot' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Resources', href: '#resources' }
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#0055FF] z-[100] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-[#222222] py-3 shadow-2xl'
            : 'bg-black/60 backdrop-blur-sm border-[#222222]/50 py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <span className="font-display text-2xl md:text-3xl tracking-tighter uppercase text-[#e5e2e1] group-hover:text-[#0055FF] transition-colors">
              AdCommand
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#0055FF] animate-pulse"></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#888888] hover:text-[#e5e2e1] text-sm font-semibold transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0055FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-[#131313] border border-[#222222] px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-lg text-[#0055FF]">account_circle</span>
                <span className="font-mono text-xs text-[#e5e2e1] max-w-[120px] truncate">{currentUser.name}</span>
                <button
                  onClick={onSignOut}
                  className="font-mono text-[10px] uppercase text-[#888888] hover:text-red-400 ml-1 transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => (onOpenAuth ? onOpenAuth('signin') : onOpenDemo('demo'))}
                  className="text-[#e5e2e1] hover:text-[#0055FF] text-xs font-mono uppercase tracking-wider transition-colors px-3 py-2 cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => (onOpenAuth ? onOpenAuth('signup') : onOpenDemo('start'))}
                  className="relative inline-flex items-center justify-center bg-[#0055FF] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-blue-600 transition-all duration-200 border border-[#0055FF] shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:shadow-[0_0_25px_rgba(0,85,255,0.5)] active:scale-95 cursor-pointer"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e5e2e1] hover:text-[#0055FF] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-black/95 border-b border-[#222222] overflow-hidden"
            >
              <div className="px-5 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#e5e2e1] hover:text-[#0055FF] font-display text-xl uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#222222] flex flex-col gap-3">
                  {currentUser ? (
                    <div className="flex flex-col gap-2">
                      <div className="text-xs font-mono text-[#888888] uppercase">Signed in as:</div>
                      <div className="text-sm font-semibold text-white">{currentUser.name} ({currentUser.email})</div>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onSignOut) onSignOut();
                        }}
                        className="w-full text-center py-2.5 text-red-400 border border-red-900/50 rounded text-xs font-mono uppercase mt-2"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenAuth) onOpenAuth('signin');
                          else onOpenDemo('demo');
                        }}
                        className="w-full text-center py-2.5 text-[#e5e2e1] border border-[#222222] rounded text-xs font-mono uppercase"
                      >
                        Log In
                      </button>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          if (onOpenAuth) onOpenAuth('signup');
                          else onOpenDemo('start');
                        }}
                        className="w-full text-center py-3 bg-[#0055FF] text-white rounded text-xs font-semibold uppercase tracking-wider"
                      >
                        Get Started Free
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
