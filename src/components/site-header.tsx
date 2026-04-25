"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

import { navItems } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/portfolio-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const {
    activeSection,
    mobileMenuOpen,
    setActiveSection,
    setMobileMenuOpen,
    setResumeDialogOpen
  } = usePortfolioStore();

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds, setActiveSection]);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,19,0.96),rgba(10,14,28,0.86))] px-4 py-3 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full border border-white/12 bg-white/8">
            <Image
              src="/images/om-shah.png"
              alt="Om Shah"
              width={40}
              height={40}
              className="size-10 object-cover"
              priority
            />
          </div>
          <div>
            <div className="font-display text-lg text-white">Om Shah</div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/44">
              AI Systems Portfolio
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={{ pathname: "/", hash: item.id }}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                activeSection === item.id
                  ? "bg-white/10 text-white"
                  : "text-white/62 hover:bg-white/6 hover:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setResumeDialogOpen(true)}
          >
            View Resume
          </Button>
          <Button size="sm" asChild>
            <Link href={{ pathname: "/", hash: "contact" }}>Contact</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-white/10 bg-[rgba(7,10,19,0.96)] p-4 shadow-[0_18px_60px_rgba(4,8,20,0.35)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={{ pathname: "/", hash: item.id }}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm transition-colors",
                  activeSection === item.id
                    ? "bg-white/12 text-white"
                    : "text-white/68 hover:bg-white/6 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-3">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setResumeDialogOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              View Resume
            </Button>
            <Button className="flex-1" asChild>
              <Link
                href={{ pathname: "/", hash: "contact" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
