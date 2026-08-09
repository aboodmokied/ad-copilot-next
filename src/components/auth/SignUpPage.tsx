import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LeftVisualPanel } from './LeftVisualPanel';
import { authApi, User } from '../../lib/authApi';

interface SignUpPageProps {
  onSuccess: (user: User) => void;
  onNavigateSignIn: () => void;
  onClose: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({
  onSuccess,
  onNavigateSignIn,
  onClose
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await authApi.signUp(fullName, company, email, password);
      if (res.success && res.user) {
        onSuccess(res.user);
      } else {
        setErrorMsg(res.message || 'Account creation failed.');
      }
    } catch {
      setErrorMsg('An unexpected connection error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col min-h-screen overflow-y-auto">
      {/* Exit Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#131313] border border-[#222222] text-[#888888] hover:text-white hover:border-[#0055FF] text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
        >
          <span>Exit To Website</span>
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 w-full min-h-screen">
        {/* Left Visual Branding Panel */}
        <LeftVisualPanel subtitleLines={['Precision Scale.']} />

        {/* Right Form Container */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-black min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg bg-black lg:bg-transparent p-4 sm:p-8 rounded-sm relative"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-display text-4xl sm:text-6xl uppercase font-extrabold text-white tracking-tight leading-none mb-3">
                START CREATING.
              </h2>
              <p className="font-body text-sm text-[#888888]">
                Join the next generation of campaign management.
              </p>
            </div>

            {/* Error Banner */}
            {errorMsg && (
              <div className="mb-6 p-3 bg-red-950/40 border border-red-800/60 rounded text-red-300 text-xs font-mono flex items-center gap-2">
                <span className="material-symbols-outlined text-sm shrink-0">error</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Company Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[#131313] border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-[#131313] border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
                  WORK EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full bg-[#131313] border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#131313] border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0055FF] hover:bg-blue-600 disabled:opacity-50 text-white font-semibold uppercase text-xs tracking-wider py-4 px-6 rounded-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(0,85,255,0.4)] cursor-pointer mt-4"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>CREATING ACCOUNT...</span>
                  </>
                ) : (
                  <>
                    <span>CREATE ACCOUNT</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Links & Badge */}
            <div className="mt-8 pt-6 border-t border-[#222222] text-center space-y-4">
              <p className="text-xs text-[#888888]">
                Already have an account?{' '}
                <button
                  onClick={onNavigateSignIn}
                  className="text-white hover:text-[#0055FF] font-semibold underline transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </p>

              <div className="font-mono text-[10px] uppercase text-[#888888] tracking-widest flex items-center justify-center gap-1.5 pt-2">
                <span className="material-symbols-outlined text-sm text-[#0055FF]">verified</span>
                <span>TRUSTED BY 10K+ MARKETERS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
