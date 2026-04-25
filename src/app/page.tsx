import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  MoveRight
} from "lucide-react";

import {
  aboutHighlights,
  certifications,
  contactDetails,
  education,
  experience,
  heroMetrics,
  leadership,
  openSourceInitiatives,
  projectStats,
  projects,
  resumeFacts,
  skillGroups,
  socials
} from "@/data/portfolio";
import { ContactForm } from "@/components/contact-form";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="pb-8">
      <SiteHeader />

      <main className="space-y-16 pt-8 md:space-y-24">
        <section id="home" className="section-shell">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel ringed-card overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(13,208,255,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(255,185,76,0.18),transparent_28%),linear-gradient(135deg,rgba(8,12,24,0.35),rgba(8,12,24,0.08))]" />
              <div className="relative space-y-8">
                <Badge variant="accent">AI Intern at Qpiai</Badge>
                <div className="space-y-5">
                  <h1 className="font-display text-5xl leading-[0.92] text-white md:text-7xl">
                    I work on agentic systems, research-driven products, and ML
                    tools with a strong engineering focus.
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-white/72 md:text-lg">
                    My work sits at the intersection of AI systems, multimodal
                    retrieval, orchestration, and full-stack product engineering.
                    I like ambitious builds that are technically rigorous and
                    visually polished.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="#projects">
                      View Projects
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/resume">
                      View Resume
                      <ExternalLink className="size-4" />
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="/resume/OmShah_Resume.pdf" target="_blank" rel="noreferrer">
                      Download PDF
                      <Download className="size-4" />
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/78 transition hover:border-cyan-300/35 hover:bg-cyan-300/8 hover:text-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {heroMetrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-[1.6rem] border border-white/10 bg-black/24 px-4 py-4 text-sm leading-6 text-white/80"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="glass-panel ringed-card overflow-hidden p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <Badge>About</Badge>
                    <div>
                      <h2 className="font-display text-3xl text-white">
                        Om Shah
                      </h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cyan-100/70">
                        AI Systems Portfolio
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.26em] text-cyan-100">
                    Bengaluru
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="relative rounded-[2.2rem] border border-white/10 bg-black/22 p-3">
                    <div className="absolute inset-6 rounded-full bg-cyan-300/14 blur-3xl" />
                    <Image
                      src="/images/om-shah.png"
                      alt="Portrait"
                      width={280}
                      height={280}
                      className="relative size-56 rounded-[1.8rem] object-cover md:size-64"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-3">
                  {resumeFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-6 rounded-[1.4rem] border border-white/10 bg-black/24 px-4 py-4"
                    >
                      <span className="text-xs uppercase tracking-[0.24em] text-white/46">
                        {fact.label}
                      </span>
                      <span className="max-w-[14rem] text-right text-sm text-white/90">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel ringed-card p-6">
                <div className="grid gap-3 sm:grid-cols-3">
                  {projectStats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.45rem] border border-white/10 bg-black/24 p-4"
                    >
                      <div className="text-2xl font-semibold text-white">{item.value}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/48">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="About"
                title="I like building systems that are powerful under the hood and clear on the surface."
                description="Most of my work lives around agentic AI, multimodal reasoning, deep learning, and interfaces that feel deliberate rather than generic."
              />
              <p className="mt-6 max-w-2xl text-sm leading-8 text-white/66 md:text-base">
                I care about architecture, but I also care about how the final
                product feels. That balance shows up across my projects, from
                terminal-native agent tools to visual orchestration systems and
                research-driven ML work.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item.title}
                  className="glass-panel ringed-card p-6 transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-100">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="font-display text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell">
          <div className="glass-panel ringed-card overflow-hidden p-8 md:p-10">
            <SectionHeading
              eyebrow="Experience"
              title={`${experience.role} at ${experience.company}`}
              description={experience.summary}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[0.36fr_1fr]">
              <div className="rounded-[1.9rem] border border-white/10 bg-black/24 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/62">
                  <MapPin className="size-3.5" />
                  {experience.location}
                </div>
                <div className="mt-5 font-display text-3xl text-white">
                  {experience.period}
                </div>
              </div>
              <div className="grid gap-4">
                {experience.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,19,34,0.96),rgba(10,13,24,0.88))] px-5 py-5 text-sm leading-7 text-white/76"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across agent platforms, ML infrastructure, and research systems."
            description="Each project opens into a detailed case study alongside the GitHub repository."
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use across research, product engineering, and infrastructure."
            description="Grouped the way I actually use them in projects rather than as a flat logo wall."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass-panel ringed-card p-6 md:p-7">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-white">{group.title}</h3>
                  <p className="text-sm leading-7 text-white/64">{group.description}</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-black/24 px-4 py-3"
                    >
                      <item.icon className="size-5 text-cyan-100" />
                      <span className="text-sm text-white/82">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
            <div id="education" className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="Education"
                title="A strong academic base with consistent technical leadership."
                description="Computer engineering at NMIMS, supported by leadership work and community teaching."
              />
              <div className="mt-8 grid gap-4">
                {education.map((item) => (
                  <div
                    key={item.school}
                    className="rounded-[1.6rem] border border-white/10 bg-black/24 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-white">
                        <item.icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <div className="font-display text-2xl text-white">
                          {item.school}
                        </div>
                        <div className="text-sm text-white/76">{item.degree}</div>
                        <div className="text-sm text-white/52">
                          {item.location} | {item.meta}
                        </div>
                        <div className="text-sm font-semibold text-cyan-100">
                          {item.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="Leadership"
                title="A few roles where I led, organized, and taught."
                description="Technical communities matter to me, not just the code itself."
              />
              <div className="mt-8 space-y-4">
                {leadership.map((item) => (
                  <div
                    key={`${item.title}-${item.org}`}
                    className="rounded-[1.6rem] border border-white/10 bg-black/24 p-5"
                  >
                    <div className="font-display text-2xl text-white">{item.title}</div>
                    <div className="mt-2 text-sm text-white/70">{item.org}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/46">
                      {item.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div id="certifications" className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="Certifications"
                title="Certifications and structured learning milestones."
                description="Structured learning across AI, cloud, analytics, and engineering."
              />
              <div className="mt-8 grid gap-4">
                {certifications.map((certification) => {
                  const content = (
                    <div className="rounded-[1.6rem] border border-white/10 bg-black/24 p-5 transition duration-300 hover:border-cyan-300/20 hover:bg-black/28">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-display text-2xl text-white">
                            {certification.title}
                          </div>
                          <div className="mt-2 text-sm text-white/68">
                            {certification.issuer}
                          </div>
                        </div>
                        {certification.href ? (
                          <MoveRight className="size-5 text-white/40" />
                        ) : null}
                      </div>
                      <div className="mt-4 text-xs uppercase tracking-[0.22em] text-cyan-100/68">
                        {certification.year}
                      </div>
                    </div>
                  );

                  if (certification.href) {
                    return (
                      <a
                        key={certification.title}
                        href={certification.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={certification.title}>{content}</div>;
                })}
              </div>
            </div>

            <div className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="Open Source"
                title="Open-source work that reflects the direction I am most interested in."
                description="Orchestration, agent tooling, and systems that stay extensible as they grow."
              />
              <div className="mt-8 space-y-4">
                {openSourceInitiatives.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-black/24 p-5"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-2xl text-white">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/66">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
            <div className="glass-panel ringed-card p-8">
              <SectionHeading
                eyebrow="Contact"
                title="If you want to build something serious, feel free to reach out."
                description="The fastest route is email, but all the main public links are here too."
              />
              <div className="mt-8 space-y-4">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black/24 px-4 py-4 transition hover:border-cyan-300/22 hover:bg-black/28"
                  >
                    <div className="rounded-2xl border border-white/10 bg-white/6 p-3 text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.24em] text-white/46">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-white/88">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 rounded-[1.6rem] border border-cyan-300/14 bg-cyan-300/8 p-5 text-sm leading-7 text-cyan-50/90">
                I am especially interested in AI product builds, research-driven
                systems, and thoughtful open-source collaboration.
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/28 px-4 py-3 text-sm text-white/66">
                <Mail className="size-4 text-cyan-100" />
                Send a message directly from the form below.
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
