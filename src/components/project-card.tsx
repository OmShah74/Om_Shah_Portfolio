import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group ringed-card relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,26,0.96),rgba(7,10,20,0.94))] p-6 shadow-[0_28px_80px_rgba(2,6,18,0.42)] transition duration-500 hover:-translate-y-1.5 hover:border-cyan-300/22">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-95 transition duration-500 group-hover:scale-[1.04]",
          project.accent
        )}
      />
      <div className="absolute -right-20 top-6 h-48 w-48 rounded-full bg-white/8 blur-3xl" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{project.category}</Badge>
              <span className="text-xs uppercase tracking-[0.24em] text-white/45">
                {project.year}
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl leading-none text-white">
                {project.name}
              </h3>
              <p className="max-w-xl text-sm leading-7 text-white/68">
                {project.headline}
              </p>
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-cyan-300/14 bg-cyan-300/10 p-3 text-cyan-100">
            <Sparkles className="size-5" />
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-white/10 bg-black/26 p-5">
          <p className="text-sm leading-7 text-white/78">{project.summary}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {project.stats.map((stat) => (
            <div
              key={stat}
              className="rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/72"
            >
              {stat}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/24 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-white/74"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <Link href={`/projects/${project.slug}`}>
              Open Case Study
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href={project.repository} target="_blank" rel="noreferrer">
              GitHub Repo
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
