import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LeftVisualPanel } from './LeftVisualPanel';
import { authApi, User } from '../../lib/authApi';

interface SignInPageProps {
  onSuccess: (user: User) => void;
  onNavigateSignUp: () => void;
  onNavigateForgotPassword: () => void;
  onClose: () => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({
  onSuccess,
  onNavigateSignUp,
  onNavigateForgotPassword,
  onClose
}) => {
  const [email, setEmail] = useState('commander@adcommand.ai');
  const [password, setPassword] = useState('••••••••');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await authApi.signIn(email, password);
      if (res.success && res.user) {
        onSuccess(res.user);
      } else {
        setErrorMsg(res.message || 'Authentication failed. Please check credentials.');
      }
    } catch {
      setErrorMsg('An unexpected connection error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setErrorMsg('');
    try {
      const res = await authApi.signInWithGoogle();
      if (res.success && res.user) {
        onSuccess(res.user);
      } else {
        setErrorMsg('Google sign-in failed.');
      }
    } catch {
      setErrorMsg('Google authentication error.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col min-h-screen overflow-y-auto">
      {/* Top Floating Close / Back to Website Bar */}
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
        <LeftVisualPanel subtitleLines={['Precision scale.', 'AI-powered authority.']} />

        {/* Right Form Container */}
        <div className="flex items-center justify-center p-6 sm:p-12 bg-black min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md bg-[#131313] border border-[#222222] p-8 sm:p-10 rounded-sm shadow-2xl relative"
          >
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-display text-4xl sm:text-5xl uppercase font-extrabold text-white tracking-tight leading-none mb-2">
                WELCOME<br />BACK.
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-[#888888]">
                AUTHENTICATE TO ACCESS INSIGHTS
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Address */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="commander@adcommand.ai"
                  className="w-full bg-black/80 border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#888888]">
                    PASSWORD
                  </label>
                  <button
                    type="button"
                    onClick={onNavigateForgotPassword}
                    className="font-mono text-[11px] uppercase tracking-wider text-[#888888] hover:text-[#0055FF] transition-colors cursor-pointer"
                  >
                    FORGOT?
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-black/80 border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm px-4 py-3 rounded-sm transition-colors"
                />
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0055FF] hover:bg-blue-600 disabled:opacity-50 text-white font-semibold uppercase text-xs tracking-wider py-3.5 px-6 rounded-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(0,85,255,0.4)] cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>AUTHENTICATING...</span>
                  </>
                ) : (
                  <>
                    <span>SIGN IN</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="font-mono text-[11px] uppercase text-[#888888] my-6 flex items-center justify-center gap-4 before:h-px before:bg-[#222222] before:flex-1 after:h-px after:bg-[#222222] after:flex-1">
              OR
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full bg-black border border-[#222222] hover:border-[#444444] text-white font-semibold uppercase text-xs tracking-wider py-3.5 px-6 rounded-sm flex items-center justify-center gap-3 transition-colors cursor-pointer"
            >
              {googleLoading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9c-.6-.8-1-1.8-1-3z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
                  />
                </svg>
              )}
              <span>SIGN IN WITH GOOGLE</span>
            </button>

            {/* Bottom Caption */}
            <div className="mt-8 pt-6 border-t border-[#222222] text-center text-xs text-[#888888]">
              Don't have an account?{' '}
              <button
                onClick={onNavigateSignUp}
                className="text-white hover:text-[#0055FF] font-semibold underline transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
