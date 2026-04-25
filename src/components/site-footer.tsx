export function SiteFooter() {
  return (
    <footer className="px-4 pb-8 pt-10 md:px-6 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,19,0.92),rgba(8,11,20,0.86))] px-6 py-6 text-sm text-white/55 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
        <p>Built around AI systems, research, and product-minded engineering.</p>
        <a
          href="#home"
          className="text-white/72 transition hover:text-cyan-100"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
