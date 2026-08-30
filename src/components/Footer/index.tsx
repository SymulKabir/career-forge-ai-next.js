'use client'
import React from "react"

const Index = () => {


    return <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="max-w-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
                            ✦
                        </div>

                        <span className="font-bold text-slate-900">
                            Career<span className="text-violet-600">
                                Forge
                            </span>{" "}
                            <span className="text-cyan-600 text-[9px]">
                                AI
                            </span>
                        </span>
                    </div>

                    <p className="text-sm text-slate-400 mt-4 leading-6">
                        AI-powered tools for building better career documents
                        and smarter job applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Product",
                            links: [
                                "Resume Builder",
                                "ATS Checker",
                                "Templates",
                                "Cover Letter",
                            ],
                        },
                        {
                            title: "Resources",
                            links: [
                                "Resume Examples",
                                "Career Blog",
                                "Career Guides",
                                "FAQ",
                            ],
                        },
                        {
                            title: "Company",
                            links: [
                                "About",
                                "Contact",
                                "Privacy",
                                "Terms",
                            ],
                        },
                    ].map((column) => (
                        <div key={column.title}>
                            <div className="text-xs font-semibold text-slate-900">
                                {column.title}
                            </div>

                            <div className="mt-4 space-y-3 text-xs text-slate-400">
                                {column.links.map((link) => (
                                    <a
                                        key={link}
                                        href="#"
                                        className="block hover:text-violet-600"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-t border-slate-200 mt-10 pt-7 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-400">
                <span>
                    © 2026 CareerForge AI. All rights reserved.
                </span>

                <span>Built for ambitious careers.</span>
            </div>
        </div>
    </footer>
}


export default Index