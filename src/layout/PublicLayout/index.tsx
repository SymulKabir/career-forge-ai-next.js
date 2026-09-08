"use client";
import React, { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import AuthModal from "@/src/components/Auth";

const Index = ({ children }: any) => {
  const [authOpen, setAuthOpen] = useState(true);

  return (
    <>
      <Header />
      <main>{children}</main>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <Footer />
    </>
  );
};

export default Index;
