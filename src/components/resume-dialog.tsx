"use client";

import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

import { usePortfolioStore } from "@/store/portfolio-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ResumeDialog() {
  const { resumeDialogOpen, setResumeDialogOpen } = usePortfolioStore();

  return (
    <Dialog open={resumeDialogOpen} onOpenChange={setResumeDialogOpen}>
      <DialogContent className="h-[min(88vh,880px)] max-w-6xl p-0">
        <DialogHeader className="border-b border-white/10 px-6 py-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <DialogTitle>Resume</DialogTitle>
              <DialogDescription>
                Open the full PDF here or jump to the dedicated page.
              </DialogDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" asChild>
                <Link href="/resume">
                  Open Page
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
              <Button asChild>
                <a href="/resume/OmShah_Resume.pdf" target="_blank" rel="noreferrer">
                  Download PDF
                  <Download className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </DialogHeader>
        <div className="h-full px-4 pb-4 md:px-6 md:pb-6">
          <iframe
            src="/resume/OmShah_Resume.pdf#view=FitH"
            title="Om Shah Resume"
            className="h-full min-h-[60vh] w-full rounded-[1.5rem] border border-white/10 bg-white"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
