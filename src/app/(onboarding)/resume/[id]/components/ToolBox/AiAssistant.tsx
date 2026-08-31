"use client";
import React from "react";

const Index = () => {
  return (
    <div id="aiAssistant" className="flex h-full min-h-0 flex-col bg-white">
      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <div className="border-b border-slate-200 px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* AI Icon */}
            <div
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl
                     bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500
                     text-white shadow-lg shadow-violet-200"
            >
              <span className="text-lg">✦</span>

              {/* Online indicator */}
              <span
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3
                       rounded-full border-2 border-white bg-emerald-500"
              />
            </div>

            <div>
              <h2 className="text-sm font-extrabold tracking-tight text-slate-900">
                AI Assistant
              </h2>

              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="text-[10px] font-medium text-emerald-600">
                  Ready to help
                </span>

                <span className="h-1 w-1 rounded-full bg-slate-300" />

                <span className="text-[10px] text-slate-400">Resume Coach</span>
              </div>
            </div>
          </div>

          {/* Header actions */}
          <button
            id="aiAssistantMenu"
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg
                   text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <span className="text-lg leading-none">⋮</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CHAT CONTENT */}
      {/* ========================================================= */}

      <div
        id="aiChatMessages"
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain
               bg-gradient-to-b from-slate-50/70 to-white
               px-4 py-5 sm:px-5"
      >
        {/* Welcome message */}

        <div className="flex items-start gap-2.5">
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center
                   rounded-lg bg-violet-100 text-violet-600"
          >
            <span className="text-xs">✦</span>
          </div>

          <div className="max-w-[88%]">
            <div
              className="rounded-2xl rounded-tl-md border border-slate-200
                     bg-white px-3.5 py-3 shadow-sm"
            >
              <p className="text-[11px] font-medium leading-5 text-slate-700">
                Hi there! 👋
              </p>

              <p className="mt-1.5 text-[10.5px] leading-5 text-slate-500">
                I'm your AI resume coach. I can help you improve your CV, make
                your experience more impactful and optimize it for ATS.
              </p>
            </div>

            <div className="mt-1.5 px-1 text-[9px] text-slate-400">
              AI Assistant · Just now
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* QUICK ACTIONS */}
        {/* ======================================================= */}

        <div className="mt-5">
          <p
            className="mb-2 px-1 text-[9px] font-bold uppercase tracking-[0.14em]
                   text-slate-400"
          >
            Quick actions
          </p>

          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              className="ai-action group flex items-center gap-3 rounded-xl border
                     border-slate-200 bg-white p-3 text-left shadow-sm
                     transition hover:border-violet-200 hover:bg-violet-50/50"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center
                       rounded-lg bg-violet-50 text-violet-600
                       transition group-hover:bg-violet-100"
              >
                ✨
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold text-slate-800">
                  Improve my resume
                </span>

                <span className="mt-0.5 block text-[9px] text-slate-400">
                  Find weaknesses and improve the overall CV
                </span>
              </span>
            </button>

            <button
              type="button"
              className="ai-action group flex items-center gap-3 rounded-xl border
                     border-slate-200 bg-white p-3 text-left shadow-sm
                     transition hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center
                       rounded-lg bg-indigo-50 text-indigo-600"
              >
                🎯
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold text-slate-800">
                  Check ATS score
                </span>

                <span className="mt-0.5 block text-[9px] text-slate-400">
                  Analyze keywords, formatting and readability
                </span>
              </span>
            </button>

            <button
              type="button"
              className="ai-action group flex items-center gap-3 rounded-xl border
                     border-slate-200 bg-white p-3 text-left shadow-sm
                     transition hover:border-cyan-200 hover:bg-cyan-50/50"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center
                       rounded-lg bg-cyan-50 text-cyan-600"
              >
                🎯
              </span>

              <span className="min-w-0">
                <span className="block text-[10px] font-bold text-slate-800">
                  Tailor for a job
                </span>

                <span className="mt-0.5 block text-[9px] text-slate-400">
                  Match your CV with a specific job description
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* ======================================================= */}
        {/* SUGGESTED QUESTIONS */}
        {/* ======================================================= */}

        <div className="mt-6">
          <p
            className="mb-2 px-1 text-[9px] font-bold uppercase tracking-[0.14em]
                   text-slate-400"
          >
            Try asking
          </p>

          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              className="ai-suggestion flex items-center justify-between rounded-lg
                     border border-transparent px-2.5 py-2 text-left
                     text-[10px] font-medium text-slate-600
                     transition hover:border-slate-200 hover:bg-white
                     hover:text-violet-600"
            >
              <span>How would a recruiter review my resume?</span>

              <span className="text-slate-300">→</span>
            </button>

            <button
              type="button"
              className="ai-suggestion flex items-center justify-between rounded-lg
                     border border-transparent px-2.5 py-2 text-left
                     text-[10px] font-medium text-slate-600
                     transition hover:border-slate-200 hover:bg-white
                     hover:text-violet-600"
            >
              <span>Why am I getting no interview calls?</span>

              <span className="text-slate-300">→</span>
            </button>

            <button
              type="button"
              className="ai-suggestion flex items-center justify-between rounded-lg
                     border border-transparent px-2.5 py-2 text-left
                     text-[10px] font-medium text-slate-600
                     transition hover:border-slate-200 hover:bg-white
                     hover:text-violet-600"
            >
              <span>How would an ATS read my resume?</span>

              <span className="text-slate-300">→</span>
            </button>
          </div>
        </div>

        {/* ======================================================= */}
        {/* CONTEXT AWARE CARD */}
        {/* ======================================================= */}

        <div
          className="mt-6 rounded-2xl border border-violet-100
                 bg-gradient-to-br from-violet-50 via-indigo-50/60 to-white
                 p-3.5"
        >
          <div className="flex items-start gap-2.5">
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center
                     rounded-lg bg-white text-violet-600 shadow-sm"
            >
              ✦
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-800">
                Smart suggestion
              </p>

              <p className="mt-1 text-[9.5px] leading-4 text-slate-500">
                Your experience section could be stronger with measurable
                achievements and impact statements.
              </p>
            </div>
          </div>

          <button
            id="aiApplySuggestion"
            type="button"
            className="mt-3 w-full rounded-xl bg-white py-2
                   text-[9px] font-bold text-violet-600 shadow-sm
                   transition hover:bg-violet-100"
          >
            Improve this section →
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CHAT INPUT */}
      {/* ========================================================= */}

      <div className="border-t border-slate-200 bg-white p-3 sm:p-4">
        {/* Context indicator */}

        <div className="mb-2 flex items-center justify-between px-1">
          <span
            className="flex items-center gap-1.5 text-[9px] font-medium
                   text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            AI knows your resume
          </span>

          <button
            id="clearAiChat"
            type="button"
            className="text-[9px] font-semibold text-slate-400
                   transition hover:text-red-500"
          >
            Clear chat
          </button>
        </div>

        <div
          className="flex items-end gap-2 rounded-2xl border border-slate-200
                 bg-slate-50 p-1.5 transition
                 focus-within:border-violet-300
                 focus-within:bg-white
                 focus-within:ring-4
                 focus-within:ring-violet-50"
        >
          <textarea
            id="aiChatInput"
            rows={1}
            placeholder="Ask AI to improve your resume..."
            className="max-h-24 min-h-[38px] flex-1 resize-none bg-transparent
                   px-2.5 py-2 text-[10px] leading-4 text-slate-700
                   outline-none placeholder:text-slate-400"
          />

          <button
            id="aiSendButton"
            type="button"
            disabled
            className="flex h-9 w-9 shrink-0 items-center justify-center
                   rounded-xl bg-violet-600 text-white
                   shadow-sm transition
                   hover:bg-violet-700
                   disabled:cursor-not-allowed
                   disabled:opacity-40"
          >
            <span className="text-sm">↑</span>
          </button>
        </div>

        <p className="mt-2 text-center text-[8px] text-slate-400">
          AI can make mistakes. Review suggestions before applying them.
        </p>
      </div>
    </div>
  );
};

export default Index;
