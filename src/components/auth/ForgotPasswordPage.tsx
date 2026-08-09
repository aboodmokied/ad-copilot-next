import React, { useState } from 'react';
import { motion } from 'motion/react';
import { authApi } from '../../lib/authApi';

interface ForgotPasswordPageProps {
  onNavigateSignIn: () => void;
  onClose: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onNavigateSignIn,
  onClose
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await authApi.resetPassword(email);
      if (res.success) {
        setSuccessMsg(res.message || `Recovery link sent to ${email}`);
      } else {
        setErrorMsg(res.message || 'Failed to send recovery link.');
      }
    } catch {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Top Bar Exit Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#131313] border border-[#222222] text-[#888888] hover:text-white hover:border-[#0055FF] text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
        >
          <span>Exit To Website</span>
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-[#131313] border border-[#222222] p-8 sm:p-10 rounded-sm shadow-2xl relative text-left my-auto"
      >
        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl uppercase font-extrabold text-white tracking-tight leading-none mb-3">
          RECOVER<br />ACCESS.
        </h2>
        
        {/* Subtitle */}
        <p className="font-body text-xs sm:text-sm text-[#888888] pb-6 mb-6 border-b border-[#222222]/80">
          Enter your email and we'll send you a recovery link.
        </p>

        {/* Feedback Messages */}
        {errorMsg && (
          <div className="mb-6 p-3 bg-red-950/40 border border-red-800/60 rounded text-red-300 text-xs font-mono flex items-center gap-2">
            <span className="material-symbols-outlined text-sm shrink-0">error</span>
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-6 p-3 bg-emerald-950/40 border border-emerald-800/60 rounded text-emerald-300 text-xs font-mono flex items-center gap-2">
            <span className="material-symbols-outlined text-sm shrink-0">check_circle</span>
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-[#888888] mb-2">
              EMAIL ADDRESS
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined text-sm text-[#888888] absolute left-3.5 pointer-events-none">
                mail
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-black/80 border border-[#222222] focus:border-[#0055FF] focus:outline-none text-white font-mono text-xs sm:text-sm pl-10 pr-4 py-3 rounded-sm transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0055FF] hover:bg-blue-600 disabled:opacity-50 text-white font-semibold uppercase text-xs tracking-wider py-3.5 px-6 rounded-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(0,85,255,0.4)] cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>SENDING LINK...</span>
              </>
            ) : (
              <>
                <span>Send Reset Link</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </>
            )}
          </button>
        </form>

        {/* Link Back */}
        <div className="mt-8 text-center">
          <button
            onClick={onNavigateSignIn}
            className="text-xs text-[#888888] hover:text-white transition-colors font-body cursor-pointer"
          >
            Back to Sign In
          </button>
        </div>
      </motion.div>

      {/* Footer Branding Label */}
      <div className="mt-8 text-center font-mono text-[10px] uppercase tracking-widest text-[#555555]">
        ADCOMMAND AI CORE
      </div>
    </div>
  );
};
