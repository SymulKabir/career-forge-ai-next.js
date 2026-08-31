'use client'
import React, { useEffect, useState } from "react"
import Logo from "@/src/ui/Logo"

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return <header
        className={`navbar fixed top-0 left-0 right-0 z-50 ${scrolled ? "scrolled" : ""
            }`}
    >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-5">
            <nav className="white-glass rounded-2xl px-5 lg:px-6 h-16 flex items-center justify-between">
                <Logo/>

                <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                    <a
                        href="#features"
                        className="nav-link hover:text-violet-600 transition"
                    >
                        Features
                    </a>

                    <a
                        href="#templates"
                        className="nav-link hover:text-violet-600 transition"
                    >
                        Templates
                    </a>

                    <a
                        href="#how-it-works"
                        className="nav-link hover:text-violet-600 transition"
                    >
                        How it works
                    </a>

                    <a
                        href="#pricing"
                        className="nav-link hover:text-violet-600 transition"
                    >
                        Pricing
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm text-slate-600 hover:text-violet-600 transition">
                        Sign in
                    </button>

                    <button className="primary-button px-4 py-2.5 rounded-xl text-white text-sm font-semibold">
                        Get Started
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() =>
                        setMobileMenuOpen((value) => !value)
                    }
                    className="md:hidden w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center "
                    aria-label="Toggle mobile menu"
                >
                    ☰
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="mt-2 white-glass rounded-2xl p-5 md:hidden">
                    <div className="flex flex-col gap-5 text-sm text-slate-600">
                        <a
                            href="#features"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </a>

                        <a
                            href="#templates"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Templates
                        </a>

                        <a
                            href="#how-it-works"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            How it works
                        </a>

                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </a>

                        <div className="flex flex-col gap-3 pt-2 ">

                            <button
                                className="w-full py-3 rounded-xl text-slate-700 font-medium text-center hover:text-violet-600 border border-slate-200 hover:border-violet-600 transition"
                                data-auth-open="login"
                            >
                                Sign in
                            </button>

                            <button
                                className="w-full py-3 rounded-xl primary-button text-white font-semibold"
                                data-auth-open="register">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </header>
}


export default Index