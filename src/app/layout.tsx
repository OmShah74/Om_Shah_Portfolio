import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";

import { ResumeDialog } from "@/components/resume-dialog";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  title: {
    default: "Om Shah | AI Systems Portfolio",
    template: "%s | Om Shah"
  },
  description:
    "Portfolio of Om Shah, featuring AI systems work, agent orchestration, multimodal retrieval, ML research, project case studies, and a built-in resume viewer.",
  applicationName: "Om Shah Portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/om-shah.png", type: "image/png" }
    ],
    apple: "/images/om-shah.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${syne.variable}`}>
        {children}
        <ResumeDialog />
      </body>
    </html>
  );
}
