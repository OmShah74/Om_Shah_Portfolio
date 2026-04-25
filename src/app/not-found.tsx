import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-[70vh] items-center py-10">
      <div className="glass-panel ringed-card w-full p-8 text-center md:p-12">
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="text-xs uppercase tracking-[0.24em] text-cyan-100/65">
            404
          </div>
          <h1 className="font-display text-4xl text-white md:text-6xl">
            That page isn&apos;t available.
          </h1>
          <p className="text-base leading-8 text-white/66">
            Head back to the projects section to keep exploring.
          </p>
          <Button asChild>
            <Link href={{ pathname: "/", hash: "projects" }}>Back to Projects</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
