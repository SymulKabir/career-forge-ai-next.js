"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/src/ui/Logo";

const Index = () => { 
 

  return (
    <header
      id="navbar"
      className="navbar sticky top-0 z-[9999] border-b border-slate-100"
    >
      <div className="bg-white mx-auto lg:px-8 sticky top-0 z-[9999]">
        <nav className="bg-white px-5 lg:px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <Logo />

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button
              className="text-sm text-slate-600 hover:text-violet-600 transition"
              data-auth-open="login"
            >
              Sign in
            </button>

            <button
              className="primary-button px-4 py-2.5 rounded-xl text-white text-sm font-semibold"
              data-auth-open="register"
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Index;
