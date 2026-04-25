export const techColorMap: Record<string, string> = {
  Rust: "border-orange-300/25 bg-orange-300/10 text-orange-100",
  Tokio: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  Ratatui: "border-yellow-300/25 bg-yellow-300/10 text-yellow-100",
  Petgraph: "border-lime-300/25 bg-lime-300/10 text-lime-100",
  Rayon: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  FastAPI: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  ArangoDB: "border-sky-300/25 bg-sky-300/10 text-sky-100",
  "Next.js": "border-slate-300/25 bg-slate-300/10 text-slate-100",
  PyTorch: "border-red-300/25 bg-red-300/10 text-red-100",
  Whisper: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Python: "border-blue-300/25 bg-blue-300/10 text-blue-100",
  "React Flow": "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  LangChain: "border-green-300/25 bg-green-300/10 text-green-100",
  Supabase: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  "scikit-learn": "border-orange-300/25 bg-orange-300/10 text-orange-100",
  Docker: "border-sky-300/25 bg-sky-300/10 text-sky-100",
  Pandas: "border-violet-300/25 bg-violet-300/10 text-violet-100",
  TensorFlow: "border-amber-300/25 bg-amber-300/10 text-amber-100",
  FAISS: "border-indigo-300/25 bg-indigo-300/10 text-indigo-100",
  Transformers: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",
  React: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  PostgreSQL: "border-blue-300/25 bg-blue-300/10 text-blue-100",
  Redis: "border-rose-300/25 bg-rose-300/10 text-rose-100",
  Composio: "border-teal-300/25 bg-teal-300/10 text-teal-100",
  Django: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Render: "border-zinc-300/25 bg-zinc-300/10 text-zinc-100",
  "GitHub Actions": "border-slate-300/25 bg-slate-300/10 text-slate-100",
  spaCy: "border-blue-300/25 bg-blue-300/10 text-blue-100",
  "Agentic Systems": "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  "Workflow Design": "border-indigo-300/25 bg-indigo-300/10 text-indigo-100",
  "Machine Learning": "border-violet-300/25 bg-violet-300/10 text-violet-100",
  "Applied AI": "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100"
};

export function getTechColor(name: string) {
  return (
    techColorMap[name] ??
    "border-white/10 bg-white/6 text-white/78"
  );
}
