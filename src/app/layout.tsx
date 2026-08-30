import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerForge AI — Build a Resume That Gets Noticed",
  description:
    "Create ATS-friendly resumes, CVs and cover letters with AI. Choose professional templates, optimize your resume for jobs and build your career profile.",
  keywords: [
    "AI resume builder",
    "CV builder",
    "ATS resume checker",
    "cover letter generator",
    "resume templates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}