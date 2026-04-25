import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, MoveLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume"
};

export default function ResumePage() {
  return (
    <main className="section-shell py-10">
      <div className="glass-panel ringed-card overflow-hidden p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <MoveLeft className="size-4" />
                Back to Portfolio
              </Link>
            </Button>
            <h1 className="font-display text-4xl text-white md:text-5xl">
              Resume
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/66 md:text-base">
              A clean PDF view with quick access to the full document.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" asChild>
              <a href="/resume/OmShah_Resume.pdf" target="_blank" rel="noreferrer">
                Open PDF
                <ExternalLink className="size-4" />
              </a>
            </Button>
            <Button asChild>
              <a href="/resume/OmShah_Resume.pdf" target="_blank" rel="noreferrer">
                Download
                <Download className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white">
          <iframe
            src="/resume/OmShah_Resume.pdf#view=FitH"
            title="Om Shah Resume"
            className="h-[72vh] min-h-[720px] w-full"
          />
        </div>
      </div>
    </main>
  );
}
