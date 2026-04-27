import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveLeft, Orbit, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";

import { projects, projectCategoryIcons } from "@/data/portfolio";
import { projectDetails } from "@/data/project-details";
import { projectDocumentation } from "@/data/project-documentation";
import { getProjectBySlug } from "@/lib/portfolio";
import { getTechColor } from "@/lib/tech-colors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.name,
    description: project.summary
  };
}

function getRepositoryRawUrl(repository: string, path: string) {
  const repoPath = repository.replace("https://github.com/", "");
  return `https://raw.githubusercontent.com/${repoPath}/main/${path}`;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const detail = projectDetails[project.slug];
  const documentation = projectDocumentation[project.slug];
  const Icon =
    projectCategoryIcons[
      project.category as keyof typeof projectCategoryIcons
    ];

  return (
    <main className="section-shell py-10">
      <div className="glass-panel ringed-card overflow-hidden p-6 md:p-8">
        <div className={cn("absolute inset-0", detail.theme.halo)} />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-90",
            detail.theme.shellGradient
          )}
        />

        <div className="relative space-y-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-5">
              <Button variant="ghost" size="sm" asChild>
                <Link href={{ pathname: "/", hash: "projects" }}>
                  <MoveLeft className="size-4" />
                  Back to Projects
                </Link>
              </Button>

              <div className="flex flex-wrap items-center gap-3">
                <Badge>{project.category}</Badge>
                <span className={cn("text-xs uppercase tracking-[0.24em]", detail.theme.accentText)}>
                  {project.year}
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl leading-none text-white md:text-6xl">
                  {project.name}
                </h1>
                <p className="max-w-4xl text-base leading-8 text-white/72 md:text-lg">
                  {project.headline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "inline-flex rounded-[1.6rem] border p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)]",
                  detail.theme.iconWrap
                )}
              >
                <Icon className="size-8" />
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-4">
                {project.stats.map((stat) => (
                  <div
                    key={stat}
                    className={cn(
                      "rounded-[1.5rem] border border-white/10 bg-black/24 px-5 py-5 text-sm text-white/80",
                      detail.theme.statGlow
                    )}
                  >
                    {stat}
                  </div>
                ))}
              </div>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  Overview
                </div>
                <p className="mt-4 text-sm leading-8 text-white/78 md:text-base">
                  {project.summary}
                </p>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="flex items-center gap-3">
                  <div className={cn("rounded-2xl border p-3", detail.theme.iconWrap)}>
                    <Orbit className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                      Language DNA
                    </div>
                    <h2 className="mt-1 font-display text-2xl text-white">
                      {detail.primaryLanguage}
                    </h2>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-8 text-white/72 md:text-base">
                  {detail.languageStory}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.18em]",
                        getTechColor(item)
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  {detail.architecture.title}
                </div>
                <div className="mt-5 space-y-4">
                  {detail.architecture.points.map((point, index) => (
                    <div key={point} className="flex gap-4">
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                          detail.theme.iconWrap
                        )}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm leading-8 text-white/74">{point}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 lg:grid-cols-2">
                {detail.featureGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("rounded-2xl border p-3", detail.theme.iconWrap)}>
                        <Sparkles className="size-5" />
                      </div>
                      <h2 className="font-display text-2xl text-white">
                        {group.title}
                      </h2>
                    </div>
                    <div className="mt-5 space-y-4">
                      {group.items.map((item) => (
                        <p
                          key={item}
                          className="border-l border-white/10 pl-4 text-sm leading-8 text-white/74"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  System design
                </div>
                <div className="mt-5 space-y-4">
                  {detail.repoBackedNotes.map((note) => (
                    <p
                      key={note}
                      className="border-l border-white/10 pl-4 text-sm leading-8 text-white/74"
                    >
                      {note}
                    </p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  Product capabilities
                </div>
                <div className="mt-5 space-y-4">
                  {project.highlights.map((highlight) => (
                    <p
                      key={highlight}
                      className="border-l border-white/10 pl-4 text-sm leading-8 text-white/74"
                    >
                      {highlight}
                    </p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  Workflow
                </div>
                <h2 className="mt-3 font-display text-2xl text-white">
                  {detail.workflow.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {detail.workflow.steps.map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-4 rounded-[1.35rem] border border-white/10 bg-black/18 px-4 py-4"
                    >
                      <div
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
                          detail.theme.iconWrap
                        )}
                      >
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-white/74">{step}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  Execution model
                </div>
                <div className="mt-5 space-y-4">
                  {detail.documentation.map((item) => (
                    <p
                      key={item}
                      className="border-l border-white/10 pl-4 text-sm leading-8 text-white/72"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>

              <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                  Actions
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      View Repository
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href={{ pathname: "/", hash: "contact" }}>
                      Get in Touch
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>

          <section className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.24em] text-white/46">
              Case study
            </div>
            <div className="mt-6 space-y-5">
              {project.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.6rem] border border-white/10 bg-black/18 p-5 md:p-6"
                >
                  <h2 className="font-display text-2xl text-white">
                    {section.title}
                  </h2>
                  <p className="mt-4 max-w-4xl text-sm leading-8 text-white/74 md:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {documentation ? (
            <section className="space-y-6">
              <div className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                      Product documentation
                    </div>
                    <div>
                      <h2 className="font-display text-3xl text-white md:text-5xl">
                        {documentation.title}
                      </h2>
                      <p className="mt-4 max-w-4xl text-sm leading-8 text-white/72 md:text-base">
                        {documentation.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={cn("rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em]", detail.theme.iconWrap)}>
                      {documentation.version}
                    </span>
                    <span className={cn("rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em]", detail.theme.iconWrap)}>
                      {documentation.license}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {documentation.imagePaths.map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/24 p-2"
                  >
                    <Image
                      src={getRepositoryRawUrl(project.repository, imagePath)}
                      alt={`${project.name} interface screenshot ${index + 1}`}
                      width={960}
                      height={540}
                      className="aspect-video w-full rounded-[1rem] object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {documentation.sections.map((section) => (
                  <section
                    key={section.title}
                    className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6 md:p-8"
                  >
                    {section.eyebrow ? (
                      <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                        {section.eyebrow}
                      </div>
                    ) : null}
                    <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                      {section.title}
                    </h2>
                    {section.body ? (
                      <p className="mt-5 max-w-5xl text-sm leading-8 text-white/72 md:text-base">
                        {section.body}
                      </p>
                    ) : null}

                    {section.points ? (
                      <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {section.points.map((point) => (
                          <div
                            key={point}
                            className="border-l border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/72"
                          >
                            {point}
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.tables ? (
                      <div className="mt-6 space-y-5">
                        {section.tables.map((table) => (
                          <div
                            key={table.title}
                            className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/18"
                          >
                            <div className="border-b border-white/10 px-4 py-4">
                              <h3 className="font-display text-2xl text-white">
                                {table.title}
                              </h3>
                              {table.description ? (
                                <p className="mt-2 text-sm leading-7 text-white/62">
                                  {table.description}
                                </p>
                              ) : null}
                            </div>
                            <div className="overflow-x-auto">
                              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                                <thead>
                                  <tr className="bg-white/8 text-white">
                                    {table.columns.map((column) => (
                                      <th
                                        key={column}
                                        className="border-b border-white/10 px-4 py-3 font-semibold"
                                      >
                                        {column}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {table.rows.map((row) => (
                                    <tr
                                      key={row.join("-")}
                                      className="border-b border-white/10 last:border-b-0"
                                    >
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={`${row.join("-")}-${cellIndex}`}
                                          className="px-4 py-3 leading-7 text-white/70"
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {section.code ? (
                      <div className="mt-6 grid gap-4">
                        {section.code.map((snippet) => (
                          <div
                            key={snippet.title}
                            className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#070a11]"
                          >
                            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                              <h3 className="text-sm font-semibold text-white">
                                {snippet.title}
                              </h3>
                              <span className={cn("rounded-full border px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]", detail.theme.iconWrap)}>
                                {snippet.language}
                              </span>
                            </div>
                            <pre className="overflow-x-auto p-4 text-xs leading-6 text-white/76 md:text-sm">
                              <code>{snippet.code}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
