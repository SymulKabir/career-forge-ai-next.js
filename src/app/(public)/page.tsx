"use client";

import { useEffect, useState } from "react";
import PublicLayout from "@/src/layout/PublicLayout";
import Link from "next/link";

export default function LandingPage() {
  const [atsScore, setAtsScore] = useState(0);

  useEffect(() => {
    if (atsScore >= 92) return;

    const timer = window.setInterval(() => {
      setAtsScore((previous) => {
        const next = previous + 1;

        if (next >= 92) {
          window.clearInterval(timer);
          return 92;
        }

        return next;
      });
    }, 25);

    return () => window.clearInterval(timer);
  }, [atsScore]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;

      const y = (event.clientY / window.innerHeight - 0.5) * 30;

      document.querySelectorAll<HTMLElement>(".orb").forEach((orb, index) => {
        const multiplier = (index + 1) * 0.35;

        orb.style.transform = `translate(
            ${x * multiplier}px,
            ${y * multiplier}px
          )`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-36 pb-24 hero-grid">
        <div className="orb w-[500px] h-[500px] bg-violet-300 rounded-full -top-40 -left-40" />

        <div className="orb w-[450px] h-[450px] bg-cyan-300 rounded-full top-1/3 -right-48" />

        <div className="orb w-[350px] h-[350px] bg-indigo-300 rounded-full bottom-0 left-1/3" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex justify-center mb-8">
            <div className="white-glass rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              AI-powered career platform
              <span className="text-violet-600">→</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center reveal">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-slate-950">
              Build a career
              <br />
              <span className="gradient-text">worth getting noticed.</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-8">
              Create powerful resumes, CVs and cover letters with AI. Optimize
              every application for ATS and tailor your profile to the job you
              actually want.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/resume/new"
                className="primary-button group px-7 py-4 rounded-2xl text-white font-semibold"
              >
                Create My Resume
                <span className="inline-block ml-2 group-hover:translate-x-1 transition">
                  →
                </span>
              </Link>

              <button className="px-7 py-4 rounded-2xl bg-white border border-slate-200 font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-600 transition">
                Explore Templates
              </button>
            </div>

            <div className="mt-6 flex justify-center items-center gap-4 text-xs text-slate-400">
              <span>✓ No credit card required</span>
              <span>•</span>
              <span>Free to start</span>
            </div>
          </div>

          {/* Product preview */}
          <div className="relative max-w-6xl mx-auto mt-20 reveal">
            <div className="floating-card absolute -left-2 lg:-left-16 top-16 z-20 white-glass rounded-2xl p-4 w-52 hidden sm:block animate-float">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  ATS Compatibility
                </span>

                <span className="text-emerald-500 text-xs">Excellent</span>
              </div>

              <div className="flex items-center gap-3 mt-4">
                <div className="score-ring w-14 h-14 rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-900">92</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    Great match
                  </div>

                  <div className="text-[10px] text-slate-400 mt-1">
                    8 keywords found
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card absolute -right-2 lg:-right-12 top-40 z-20 white-glass rounded-2xl p-4 w-60 hidden sm:block animate-float-slow">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
                  ✦
                </div>

                <div>
                  <p className="text-xs text-slate-400">AI suggestion</p>

                  <p className="text-sm font-medium mt-1 text-slate-800">
                    Make your experience more impactful.
                  </p>
                </div>
              </div>

              <button className="w-full mt-4 py-2 rounded-lg bg-violet-50 text-violet-600 text-xs font-semibold">
                Enhance with AI →
              </button>
            </div>

            <div className="relative white-glass rounded-[28px] p-2 sm:p-3 overflow-hidden">
              <div className="h-10 px-3 flex items-center gap-2 border-b border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />

                <div className="hidden sm:block mx-auto px-8 py-1 rounded-lg bg-slate-100 text-[10px] text-slate-400">
                  app.careerforge.ai/editor
                </div>
              </div>

              <div className="grid lg:grid-cols-[220px_1fr] min-h-[550px]">
                <aside className="hidden lg:block border-r border-slate-200 p-5">
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-5">
                    Resume
                  </div>

                  <div className="space-y-1">
                    <div className="px-3 py-2.5 rounded-xl bg-violet-50 text-violet-600 text-xs font-medium">
                      ✦ Personal Info
                    </div>

                    <div className="px-3 py-2.5 text-slate-400 text-xs">
                      Experience
                    </div>

                    <div className="px-3 py-2.5 text-slate-400 text-xs">
                      Education
                    </div>

                    <div className="px-3 py-2.5 text-slate-400 text-xs">
                      Skills
                    </div>

                    <div className="px-3 py-2.5 text-slate-400 text-xs">
                      Projects
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="text-[10px] uppercase tracking-widest text-slate-400 mb-4">
                      Template
                    </div>

                    <div className="rounded-xl border border-violet-200 p-2 bg-violet-50">
                      <div className="h-20 rounded-lg bg-white border border-slate-200" />

                      <p className="text-[10px] text-center mt-2 text-slate-500">
                        Modern Pro
                      </p>
                    </div>
                  </div>
                </aside>

                <div className="relative bg-slate-100 flex items-center justify-center p-5 sm:p-10">
                  <div className="resume-paper w-full max-w-[570px] aspect-[1/1.414] rounded-sm p-7 sm:p-10">
                    <div className="flex justify-between">
                      <div>
                        <div className="text-xl sm:text-2xl font-bold">
                          Alex Morgan
                        </div>

                        <div className="text-[8px] sm:text-[9px] text-slate-500 mt-1">
                          Senior Software Engineer
                        </div>
                      </div>

                      <div className="text-right text-[7px] sm:text-[8px] text-slate-400">
                        <div>alex@email.com</div>
                        <div>+1 234 567 890</div>
                        <div>New York, USA</div>
                      </div>
                    </div>

                    <div className="h-px bg-slate-200 my-5" />

                    <div>
                      <div className="text-[8px] font-bold uppercase tracking-widest text-violet-600 mb-2">
                        Profile
                      </div>

                      <div className="space-y-1.5">
                        <div className="resume-line w-full" />
                        <div className="resume-line w-[95%]" />
                        <div className="resume-line w-[78%]" />
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="text-[8px] font-bold uppercase tracking-widest text-violet-600 mb-3">
                        Experience
                      </div>

                      <div className="flex justify-between">
                        <div>
                          <div className="text-[9px] font-bold">
                            Senior Software Engineer
                          </div>

                          <div className="text-[7px] text-slate-400">
                            Tech Company · New York
                          </div>
                        </div>

                        <div className="text-[7px] text-slate-400">
                          2022 — Present
                        </div>
                      </div>

                      <div className="space-y-1.5 mt-2">
                        <div className="resume-line w-full" />
                        <div className="resume-line w-[96%]" />
                        <div className="resume-line w-[91%]" />
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-[8px] font-bold uppercase tracking-widest text-violet-600 mb-3">
                        Skills
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {[
                          "C#",
                          "ASP.NET Core",
                          "React",
                          "PostgreSQL",
                          "Docker",
                        ].map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-violet-50 text-violet-600 text-[7px] rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="text-[8px] font-bold uppercase tracking-widest text-violet-600 mb-3">
                        Projects
                      </div>

                      <div className="space-y-2">
                        <div className="resume-line w-full" />
                        <div className="resume-line w-[84%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-white overflow-hidden">
        <div className="py-7">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-slate-400 mb-6">
            Built for modern job seekers
          </p>

          <div className="flex overflow-hidden">
            <div className="flex gap-16 min-w-max animate-marquee text-slate-400 font-semibold text-sm">
              {[
                "SOFTWARE ENGINEERS",
                "DESIGNERS",
                "MARKETERS",
                "STUDENTS",
                "PRODUCT MANAGERS",
                "DATA ANALYSTS",
                "GRADUATES",
                "DEVELOPERS",
              ].map((item) => (
                <span key={`a-${item}`}>{item}</span>
              ))}

              {[
                "SOFTWARE ENGINEERS",
                "DESIGNERS",
                "MARKETERS",
                "STUDENTS",
                "PRODUCT MANAGERS",
                "DATA ANALYSTS",
                "GRADUATES",
                "DEVELOPERS",
              ].map((item) => (
                <span key={`b-${item}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl reveal">
            <div className="text-violet-600 text-sm font-semibold mb-4">
              POWERFUL BY DESIGN
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
              Everything you need to{" "}
              <span className="text-slate-400">get hired.</span>
            </h2>

            <p className="mt-5 text-slate-500 leading-7">
              One intelligent platform for building, optimizing and managing
              every part of your job application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {[
              {
                icon: "✦",
                title: "AI Resume Builder",
                text: "Turn your experience into powerful, professional resume content without starting from scratch.",
                color: "violet",
              },
              {
                icon: "◉",
                title: "ATS Compatibility",
                text: "Analyze your resume structure, keywords and formatting before submitting your application.",
                color: "cyan",
              },
              {
                icon: "◎",
                title: "Job Tailoring",
                text: "Paste a job description and generate a tailored version using your real career information.",
                color: "indigo",
              },
              {
                icon: "✓",
                title: "Career Profile",
                text: "Store your experience, education, projects and skills once and reuse them everywhere.",
                color: "emerald",
              },
              {
                icon: "✎",
                title: "Cover Letter AI",
                text: "Generate relevant, personalized cover letters based on your profile and target role.",
                color: "pink",
              },
              {
                icon: "◇",
                title: "Global Templates",
                text: "Create documents for different industries, career levels and international job markets.",
                color: "orange",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="floating-card reveal bg-white rounded-3xl p-7 border border-slate-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center text-xl">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="py-28 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="text-cyan-600 text-sm font-semibold">
              SIMPLE PROCESS
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-slate-950">
              From blank page to{" "}
              <span className="gradient-text">job-ready.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              [
                "01",
                "Build your profile",
                "Add your experience, education, skills, projects and achievements once.",
              ],
              [
                "02",
                "Let AI optimize it",
                "Improve your content, analyze keywords and tailor your resume to specific jobs.",
              ],
              [
                "03",
                "Apply with confidence",
                "Export a polished document and track your job applications from one place.",
              ],
            ].map(([number, title, description]) => (
              <div key={number} className="text-center reveal">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-2xl font-bold text-violet-600">
                  {number}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div>
              <div className="text-violet-600 text-sm font-semibold">
                DESIGNED TO STAND OUT
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-slate-950">
                Templates that look{" "}
                <span className="text-slate-400">professional.</span>
              </h2>
            </div>

            <button className="text-sm text-violet-600 hover:text-violet-800">
              View all templates →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              ["Minimal Pro", "ATS Friendly"],
              ["Modern Executive", "Professional"],
              ["Creative", "Modern"],
              ["European Pro", "International"],
            ].map(([name, type]) => (
              <div
                key={name}
                className="template-card reveal bg-white rounded-3xl p-4 border border-slate-200"
              >
                <div className="resume-paper rounded-2xl p-5 aspect-[1/1.3]">
                  <div className="text-lg font-bold">Alex Morgan</div>

                  <div className="text-[7px] text-slate-400 mt-1">
                    Software Engineer
                  </div>

                  <div className="h-px bg-slate-200 my-4" />

                  <div className="resume-line-dark w-1/3" />

                  <div className="space-y-1.5 mt-3">
                    <div className="resume-line w-full" />
                    <div className="resume-line w-[90%]" />
                    <div className="resume-line w-[80%]" />
                  </div>

                  <div className="resume-line-dark w-1/4 mt-6" />

                  <div className="space-y-1.5 mt-3">
                    <div className="resume-line w-full" />
                    <div className="resume-line w-[94%]" />
                    <div className="resume-line w-[75%]" />
                  </div>
                </div>

                <div className="p-2">
                  <div className="font-medium text-sm text-slate-800">
                    {name}
                  </div>

                  <div className="text-xs text-slate-400 mt-1">{type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-50 via-white to-cyan-50 border border-slate-200 p-8 sm:p-12 lg:p-16 reveal">
            <div className="relative grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-violet-600 text-sm font-semibold">
                  SMART OPTIMIZATION
                </div>

                <h2 className="font-display text-4xl sm:text-5xl font-bold mt-5 leading-tight text-slate-950">
                  Know exactly how your resume performs.
                </h2>

                <p className="mt-6 text-slate-500 leading-7 max-w-xl">
                  Analyze your resume against a target job. Discover missing
                  keywords, improve weak sections and make your application more
                  machine-readable.
                </p>

                <button className="primary-button mt-8 px-6 py-3.5 rounded-xl text-white text-sm font-semibold">
                  Check My Resume
                </button>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-800">
                      Resume Analysis
                    </div>

                    <div className="text-xs text-slate-400 mt-1">
                      Software Engineer · New York
                    </div>
                  </div>

                  <div className="text-emerald-500 text-xs">Excellent</div>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  <div className="score-ring w-28 h-28 rounded-full p-2">
                    <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-slate-900">
                        {atsScore}
                      </span>

                      <span className="text-[10px] text-slate-400">/ 100</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    {[
                      ["Keywords", "94%", "w-[94%]"],
                      ["Formatting", "96%", "w-[96%]"],
                      ["Content", "89%", "w-[89%]"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-slate-500">{label}</span>

                          <span className="text-slate-800">{value}</span>
                        </div>

                        <div className="h-1.5 rounded-full bg-slate-100">
                          <div
                            className={`h-full ${width} rounded-full bg-violet-500`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-8">
                  <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3">
                    <div className="text-emerald-600 text-sm">✓ 18</div>

                    <div className="text-[10px] text-slate-400 mt-1">
                      Strong keywords
                    </div>
                  </div>

                  <div className="rounded-xl bg-orange-50 border border-orange-100 p-3">
                    <div className="text-orange-600 text-sm">! 3</div>

                    <div className="text-[10px] text-slate-400 mt-1">
                      Suggestions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-28 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto reveal">
            <div className="text-cyan-600 text-sm font-semibold">
              SIMPLE PRICING
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 text-slate-950">
              Start free.{" "}
              <span className="gradient-text">Upgrade when ready.</span>
            </h2>

            <p className="text-slate-500 mt-5">
              Build your first resume for free. Upgrade when you need more
              power.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-14">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm reveal">
              <div className="text-sm text-slate-500">Free</div>

              <div className="text-4xl font-bold mt-3 text-slate-950">$0</div>

              <p className="text-sm text-slate-400 mt-2">
                Perfect for getting started.
              </p>

              <div className="h-px bg-slate-200 my-7" />

              <ul className="space-y-4 text-sm text-slate-600">
                <li>✓ 1 career profile</li>
                <li>✓ Basic templates</li>
                <li>✓ Limited AI enhancements</li>
                <li>✓ ATS analysis</li>
                <li>✓ PDF export</li>
              </ul>

              <button className="w-full mt-8 py-3.5 rounded-xl bg-slate-100 text-slate-800 font-semibold hover:bg-slate-200 transition">
                Get Started
              </button>
            </div>

            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-500 reveal">
              <div className="bg-white rounded-[23px] p-8 h-full">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-violet-600 font-semibold">
                    Pro
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 text-[10px] font-semibold">
                    MOST POPULAR
                  </span>
                </div>

                <div className="text-4xl font-bold mt-3 text-slate-950">
                  $12{" "}
                  <span className="text-sm text-slate-400 font-normal">
                    / month
                  </span>
                </div>

                <p className="text-sm text-slate-400 mt-2">
                  Everything you need to apply smarter.
                </p>

                <div className="h-px bg-slate-200 my-7" />

                <ul className="space-y-4 text-sm text-slate-600">
                  <li>✓ Unlimited resumes</li>
                  <li>✓ Premium templates</li>
                  <li>✓ AI resume enhancement</li>
                  <li>✓ Advanced ATS analysis</li>
                  <li>✓ Job-specific tailoring</li>
                  <li>✓ Cover letter generator</li>
                  <li>✓ DOCX + PDF export</li>
                </ul>

                <button className="primary-button w-full mt-8 py-3.5 rounded-xl text-white font-semibold">
                  Start Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-5 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-500 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Your next opportunity starts here.
          </div>

          <h2 className="font-display text-5xl sm:text-6xl font-bold mt-8 tracking-tight text-slate-950">
            Your experience is{" "}
            <span className="gradient-text">worth showcasing.</span>
          </h2>

          <p className="mt-6 text-slate-500 max-w-xl mx-auto leading-7">
            Build a professional career profile and create applications that are
            tailored for the opportunities you want.
          </p>

          <button className="primary-button mt-9 px-8 py-4 rounded-2xl text-white font-semibold">
            Create Your Free Resume →
          </button>
        </div>
      </section>

      {/* Footer */}
    </>
  );
}
