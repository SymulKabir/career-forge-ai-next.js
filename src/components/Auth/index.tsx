"use client";

import React, { FormEvent, useEffect, useState } from "react";
import "./styles.scss";
import {
  subscribeAuthModal,
  toggleAuthModal,
  AuthMode,
} from "@/src/state/authModal";
import Logo from "@/src/ui/Logo";

export default function AuthModal() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [isOpen, setIsOpen] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const [showRegisterConfirmPassword, setShowRegisterConfirmPassword] =
    useState(false);

  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [rememberLogin, setRememberLogin] = useState(false);
  const [rememberRegister, setRememberRegister] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const switchMode = () => {
    setMode((current) => (current === "signin" ? "signup" : "signin"));
  };
  useEffect(() => {
    return subscribeAuthModal(({ isOpen, mode }) => {
      setIsOpen(isOpen);
      setMode(mode);
    });
  }, []);

  if (!isOpen) return null;
  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO:
      // Replace this with your Next.js API call.
      //
      // Example:
      // await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: loginEmail,
      //     password: loginPassword,
      //     rememberMe: rememberLogin,
      //   }),
      // }); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegisterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !registerEmail || !registerPassword || !confirmPassword) {
      return;
    }

    if (registerPassword !== confirmPassword) {
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO:
      // Replace this with your Next.js API call.
      //
      // Example:
      // await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email: registerEmail,
      //     password: registerPassword,
      //     confirmPassword,
      //     rememberMe: rememberRegister,
      //   }),
      // });
 
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoginValid =
    loginEmail.trim().length > 0 && loginPassword.trim().length > 0;

  const isRegisterValid =
    name.trim().length > 0 &&
    registerEmail.trim().length > 0 &&
    registerPassword.trim().length > 0 &&
    confirmPassword.trim().length > 0 &&
    registerPassword === confirmPassword;

  const getPasswordStrength = (password: string) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const passwordStrength = getPasswordStrength(registerPassword);

  const strengthText =
    passwordStrength === 0
      ? "Enter a password"
      : passwordStrength === 1
        ? "Weak password"
        : passwordStrength === 2
          ? "Fair password"
          : passwordStrength === 3
            ? "Good password"
            : "Strong password";

  // if (!isOpen) {
  //   return null;
  // }
  const onClose = () => {
    toggleAuthModal({
      action: "close",
    });
  };

  return (
    <div id="authModal" className="auth-modal fixed inset-0 z-[100] h-screen w-screen overflow-hidden overscroll-none">
      {/* BACKDROP */}
      <div
        id="authBackdrop"
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
        <div
          id="authDialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="authTitle"
          className="auth-dialog relative w-full max-h-[90vh] max-w-md overflow-x-hidden overflow-y-auto rounded-[28px] sm:rounded-[32px] bg-white border border-white/60 shadow-2xl"
        >
          {/* GLOW EFFECTS */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-violet-300/20 blur-[80px]" />

            <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-cyan-300/20 blur-[80px]" />
          </div>

          <div className="relative p-6 sm:p-8">
            {/* CLOSE */}
            <button
              type="button"
              id="authClose"
              aria-label="Close authentication modal"
              onClick={onClose}
              className="absolute right-5 top-5 w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>

            {/* BRAND */}
            <div className="text-center pt-2">
              <div className="mx-auto flex items-center justify-center">
                <Logo
                  logoSize="w-12 h-12"
                  iconSize="w-1/2 h-1/1" 
                  mode="half"
                />
              </div>

              <h2
                id="authTitle"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mt-5"
              >
                {mode === "signin" ? "Welcome back" : "Create your account"}
              </h2>

              <p id="authSubtitle" className="text-sm text-slate-500 mt-2">
                {mode === "signin"
                  ? "Sign in to continue to CareerForge AI."
                  : "Create an account to get started with CareerForge AI."}
              </p>
            </div>

            {/* SOCIAL LOGIN */}
            <div className="grid grid-cols-3 gap-3 mt-7">
              {/* GOOGLE */}
              <button type="button" className="social-auth-button">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.73-.06-1.44-.18-2.12H12v4.01h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.27z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.7c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.52A9.74 9.74 0 0 0 12 21.7z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.51 13.79a5.86 5.86 0 0 1 0-3.74V7.53H3.27a9.72 9.72 0 0 0 0 8.78l3.24-2.52z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.02c1.43 0 2.72.49 3.74 1.46l2.8-2.8C16.84 3.1 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.73 5.23l3.24 2.52C7.29 7.74 9.45 6.02 12 6.02z"
                  />
                </svg>

                <span className="hidden sm:inline">Google</span>
              </button>

              {/* FACEBOOK */}
              <button type="button" className="social-auth-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.17 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.17 24 18.1 24 12.07Z" />
                </svg>

                <span className="hidden sm:inline">Facebook</span>
              </button>

              {/* LINKEDIN */}
              <button type="button" className="social-auth-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.67H9.34V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>

                <span className="hidden sm:inline">LinkedIn</span>
              </button>
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-4 my-6">
              <div className="h-px bg-slate-200 flex-1" />

              <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                Or continue with email
              </span>

              <div className="h-px bg-slate-200 flex-1" />
            </div>

            {/* =====================================================
                REGISTER
            ====================================================== */}

            {mode === "signup" && (
              <form
                id="registrationAuthForm"
                className="space-y-4"
                onSubmit={handleRegisterSubmit}
              >
                {/* NAME */}
                <div className="auth-field">
                  <label htmlFor="authName" className="auth-label">
                    Full name
                  </label>

                  <div className="relative">
                    <input
                      id="authName"
                      name="Name"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="auth-input pl-11"
                    />

                    <UserIcon />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="auth-field">
                  <label htmlFor="registerEmail" className="auth-label">
                    Email address
                  </label>

                  <div className="relative">
                    <input
                      id="registerEmail"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="auth-input pl-11"
                    />

                    <EmailIcon />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="auth-field">
                  <label htmlFor="authPassword" className="auth-label">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="authPassword"
                      name="Password"
                      type={showRegisterPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="••••••••"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="auth-input pl-11 pr-12"
                    />

                    <LockIcon />

                    <PasswordToggle
                      show={showRegisterPassword}
                      onClick={() =>
                        setShowRegisterPassword(!showRegisterPassword)
                      }
                    />
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="auth-field">
                  <label
                    htmlFor="registerConfirmPassword"
                    className="auth-label"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <input
                      id="registerConfirmPassword"
                      name="ConfirmPassword"
                      type={showRegisterConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="auth-input pl-11 pr-12"
                    />

                    <LockIcon />

                    <PasswordToggle
                      show={showRegisterConfirmPassword}
                      onClick={() =>
                        setShowRegisterConfirmPassword(
                          !showRegisterConfirmPassword,
                        )
                      }
                    />
                  </div>

                  {confirmPassword && registerPassword !== confirmPassword && (
                    <div className="mt-1.5 text-xs text-red-500">
                      Passwords do not match.
                    </div>
                  )}
                </div>

                {/* PASSWORD STRENGTH */}
                <div id="passwordStrength" className="-mt-2 space-y-2">
                  <div className="flex gap-1.5">
                    {[0, 1, 2, 3].map((index) => (
                      <span
                        key={index}
                        className={`strength-bar h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          index < passwordStrength
                            ? "bg-violet-500"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-medium text-slate-400">
                      {strengthText}
                    </p>

                    <span className="text-[10px] text-slate-400">
                      {registerPassword ? `${passwordStrength}/4` : ""}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
                    <PasswordRequirement valid={registerPassword.length >= 8}>
                      8+ characters
                    </PasswordRequirement>

                    <PasswordRequirement valid={/[A-Z]/.test(registerPassword)}>
                      Uppercase
                    </PasswordRequirement>

                    <PasswordRequirement valid={/[0-9]/.test(registerPassword)}>
                      Number
                    </PasswordRequirement>

                    <PasswordRequirement
                      valid={/[^A-Za-z0-9]/.test(registerPassword)}
                    >
                      Special character
                    </PasswordRequirement>
                  </div>
                </div>

                {/* REMEMBER */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="RememberMe"
                      checked={rememberRegister}
                      onChange={(e) => setRememberRegister(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                    />

                    <span className="text-xs text-slate-500">Remember me</span>
                  </label>
                </div>

                {/* SUBMIT */}
                <button
                  id="registerSubmit"
                  type="submit"
                  disabled={!isRegisterValid || isSubmitting}
                  className="primary-button w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                >
                  <span className={isSubmitting ? "hidden" : "block"}>
                    Create account
                  </span>

                  {isSubmitting && (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                </button>
              </form>
            )}

            {/* =====================================================
                LOGIN
            ====================================================== */}

            {mode === "signin" && (
              <form
                id="signInAuthForm"
                className="space-y-4"
                onSubmit={handleLoginSubmit}
              >
                {/* EMAIL */}
                <div className="auth-field">
                  <label htmlFor="signInEmail" className="auth-label">
                    Email address
                  </label>

                  <div className="relative">
                    <input
                      id="signInEmail"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="auth-input pl-11"
                    />

                    <EmailIcon />
                  </div>
                </div>

                {/* PASSWORD */}
                <div className="auth-field">
                  <div className="flex items-center justify-between">
                    <label htmlFor="signInPassword" className="auth-label">
                      Password
                    </label>

                    <button
                      id="forgotPassword"
                      type="button"
                      className="text-xs text-violet-600 hover:text-violet-800"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      id="signInPassword"
                      name="Password"
                      type={showLoginPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="auth-input pl-11 pr-12"
                    />

                    <LockIcon />

                    <PasswordToggle
                      show={showLoginPassword}
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    />
                  </div>
                </div>

                {/* REMEMBER */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="RememberMe"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"
                    />

                    <span className="text-xs text-slate-500">Remember me</span>
                  </label>
                </div>

                {/* SUBMIT */}
                <button
                  id="signInSubmit"
                  type="submit"
                  disabled={!isLoginValid || isSubmitting}
                  className="primary-button w-full py-3.5 rounded-xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none"
                >
                  <span className={isSubmitting ? "hidden" : "block"}>
                    Sign in
                  </span>

                  {isSubmitting && (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                </button>
              </form>
            )}

            {/* SWITCH */}
            <div className="text-center mt-6">
              <p className="text-sm text-slate-500">
                <span id="switchText">
                  {mode === "signin"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>

                <button
                  type="button"
                  id="authSwitch"
                  onClick={switchMode}
                  className="font-semibold text-violet-600 hover:text-violet-800 ml-1"
                >
                  {mode === "signin" ? "Create account" : "Sign in"}
                </button>
              </p>
            </div>

            {/* TERMS */}
            <p
              id="termsText"
              className="text-[10px] text-slate-400 text-center leading-5 mt-5"
            >
              By continuing, you agree to our{" "}
              <a href="#" className="text-slate-500 hover:text-violet-600">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="text-slate-500 hover:text-violet-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   ICONS
================================================================ */

function UserIcon() {
  return (
    <svg
      className="auth-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="auth-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />

      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      className="auth-input-icon"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />

      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

/* ================================================================
   PASSWORD TOGGLE
================================================================ */

interface PasswordToggleProps {
  show: boolean;
  onClick: () => void;
}

function PasswordToggle({ show, onClick }: PasswordToggleProps) {
  return (
    <button
      type="button"
      aria-label={show ? "Hide password" : "Show password"}
      aria-pressed={show}
      onClick={onClick}
      className="password-toggle absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 min-w-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
    >
      {show ? (
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3l18 18" />
          <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
          <path d="M9.88 4.24A10.94 10.94 0 0 1 12 4c6.5 0 10 8 10 8a18.37 18.37 0 0 1-3.05 4.5" />
          <path d="M6.61 6.61C3.87 8.53 2 12 2 12s3.5 8 10 8a10.94 10.94 0 0 0 4.24-.88" />
        </svg>
      ) : (
        <svg
          className="w-[18px] h-[18px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

/* ================================================================
   PASSWORD REQUIREMENT
================================================================ */

interface PasswordRequirementProps {
  valid: boolean;
  children: React.ReactNode;
}

function PasswordRequirement({ valid, children }: PasswordRequirementProps) {
  return (
    <span
      className={`password-requirement text-[10px] ${
        valid ? "text-emerald-500" : "text-slate-400"
      }`}
    >
      <span className="requirement-icon">{valid ? "✓" : "○"}</span> {children}
    </span>
  );
}
