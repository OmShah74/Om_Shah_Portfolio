import {
  Bot,
  BrainCircuit,
  Boxes,
  ChartColumnIncreasing,
  DatabaseZap,
  FileCode2,
  GraduationCap,
  Languages,
  Microscope,
  Orbit,
  Route,
  Sparkles,
  Video
} from "lucide-react";
import type { ComponentType } from "react";
import {
  SiAnthropic,
  SiArangodb,
  SiCss,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiRender,
  SiRust,
  SiSpacy,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiVercel
} from "react-icons/si";

export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: {
    label: string;
    icon: ComponentType<{ className?: string }>;
  }[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  href?: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: string;
  headline: string;
  summary: string;
  repository: string;
  accent: string;
  stack: string[];
  stats: string[];
  highlights: string[];
  sections: {
    title: string;
    body: string;
  }[];
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/OmShah74" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/om-shah-2277b22b9/" },
  { label: "Twitter", href: "https://x.com/omshah_47" },
  { label: "Medium", href: "https://medium.com/@omshah74" },
  { label: "Email", href: "mailto:omshah.tech@gmail.com" }
];

export const heroMetrics = [
  "10+ public builds",
  "AI Intern at Qpiai",
  "CGPA 3.96 / 4.0"
];

export const aboutHighlights = [
  {
    title: "Agentic Systems",
    description:
      "I design orchestration-heavy systems with memory, retrieval, tool use, and structured execution at the core.",
    icon: Orbit
  },
  {
    title: "Applied ML",
    description:
      "My work spans multimodal RAG, reinforcement learning, knowledge distillation, model evaluation, and research-driven experimentation.",
    icon: BrainCircuit
  },
  {
    title: "Product Engineering",
    description:
      "I like shipping the full stack, from interface systems and APIs to databases, infra, deployment, and developer tooling.",
    icon: Boxes
  }
];

export const experience = {
  role: "AI Intern",
  company: "Qpiai",
  location: "Bengaluru, India",
  period: "Dec 2025 - Present",
  summary:
    "At Qpiai, I work on multi-agent infrastructure, model evaluation systems, and multimodal AI workflows across platform and computer vision initiatives.",
  bullets: [
    "Built a complete harness for a generative web app builder with multi-agent orchestration, modular agent composition, scaffold templates, RBAC, and coordinated execution pipelines.",
    "Designed stateful evaluation and optimization flows with structured I/O, memory tiers, persistent retrieval, and faster generation infrastructure.",
    "Ran end-to-end computer vision training and dataset curation workflows, then connected experiment tracking to a vector-backed model registry for semantic model discovery.",
    "Implemented a multimodal video ingestion and retrieval prototype inspired by current research, combining vision-language models, embeddings, and exploratory analysis tooling."
  ]
};

export const education = [
  {
    school: "MPSTME, NMIMS University",
    degree: "B.Tech in Computer Engineering",
    location: "Mumbai, India",
    meta: "2022 - 2026",
    highlight: "CGPA 3.96 / 4.0",
    icon: GraduationCap
  },
  {
    school: "R.N. Podar School",
    degree: "12th CBSE",
    location: "Mumbai, India",
    meta: "2022",
    highlight: "97%",
    icon: FileCode2
  }
];

export const leadership = [
  {
    title: "Technical Executive",
    org: "MPSTME ACM Student Chapter",
    period: "2023 - 2024"
  },
  {
    title: "Class Representative",
    org: "BTech Computer Engineering",
    period: "2022 - 2025"
  },
  {
    title: "Computer Tutor",
    org: "Underprivileged Children Education",
    period: "2023"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core languages I reach for across systems, AI, and web work.",
    items: [
      { label: "Python", icon: SiPython },
      { label: "Rust", icon: SiRust },
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
      { label: "HTML", icon: SiHtml5 },
      { label: "CSS", icon: SiCss }
    ]
  },
  {
    title: "AI / ML",
    description: "Research and product tooling used in retrieval, modeling, and evaluation pipelines.",
    items: [
      { label: "PyTorch", icon: SiPytorch },
      { label: "TensorFlow", icon: SiTensorflow },
      { label: "LangChain", icon: SiLangchain },
      { label: "FAISS", icon: DatabaseZap },
      { label: "OpenAI API", icon: SiOpenai },
      { label: "Anthropic API", icon: SiAnthropic }
    ]
  },
  {
    title: "Web / Backend",
    description: "Interfaces, APIs, data layers, and product infrastructure.",
    items: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "React", icon: SiReact },
      { label: "FastAPI", icon: SiFastapi },
      { label: "Node.js", icon: SiNodedotjs },
      { label: "Supabase", icon: SiSupabase },
      { label: "PostgreSQL", icon: SiPostgresql }
    ]
  },
  {
    title: "Infra / Tooling",
    description: "Shipping, deployment, data processing, and dev workflows.",
    items: [
      { label: "Docker", icon: SiDocker },
      { label: "Git", icon: SiGit },
      { label: "OpenCV", icon: SiOpencv },
      { label: "spaCy", icon: SiSpacy },
      { label: "Vercel", icon: SiVercel },
      { label: "Render", icon: SiRender }
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: "Quantum Machine Learning",
    issuer: "IBM",
    year: "2026"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2024"
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2024"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    year: "2024"
  },
  {
    title: "Honours Program",
    issuer: "Coursera",
    year: "2022 - 2026"
  }
];

export const openSourceInitiatives = [
  {
    title: "Forge-OSH",
    description:
      "Terminal-native agent tooling with multi-provider orchestration, secure execution, and code graph awareness.",
    icon: Route
  },
  {
    title: "Agflow",
    description:
      "A visual workflow builder for agentic AI with node-based composition, RAG, and code-first extensibility.",
    icon: Sparkles
  },
  {
    title: "Alan Agentic Orchestrator",
    description:
      "A full-stack multi-agent platform focused on decomposition, approvals, guarded execution, and tool-integrated workflows.",
    icon: Bot
  }
];

export const resumeFacts = [
  {
    label: "Location",
    value: "Bengaluru, India"
  },
  {
    label: "Email",
    value: "omshah.tech@gmail.com"
  },
  {
    label: "Current focus",
    value: "Agentic AI, ML systems, multimodal retrieval"
  },
  {
    label: "Open to",
    value: "Open-source collaborations"
  }
];

export const projects: Project[] = [
  {
    slug: "forge-osh",
    name: "Forge-OSH",
    year: "2026",
    category: "Terminal AI Platform",
    headline:
      "A terminal-first AI agent platform built for speed, control, and codebase-aware context.",
    summary:
      "I built Forge-OSH as a modular Rust environment for AI-assisted terminal workflows, combining a polished TUI, provider routing, permissioned tools, and semantic code graph analysis.",
    repository: "https://github.com/OmShah74/forge-osh",
    accent: "from-cyan-400/40 via-sky-400/20 to-transparent",
    stack: ["Rust", "Tokio", "Ratatui", "Petgraph", "Rayon"],
    stats: ["4-layer architecture", "Multi-provider routing", "Session persistence"],
    highlights: [
      "Layered the platform across TUI rendering, async orchestration, provider routing, and extensible tools.",
      "Implemented semantic code graph analysis with Petgraph and Rayon for dependency-aware context packing.",
      "Added secure key handling and file-history snapshots for persistence with undo support."
    ],
    sections: [
      {
        title: "What I focused on",
        body:
          "Forge-OSH was designed as a terminal environment where the model is only one part of the experience. I focused on making command execution, file operations, context assembly, and session continuity feel deliberate and reliable, because those are the pieces that decide whether an agent is useful in day-to-day engineering work. The product direction was to keep the workflow local-first, fast to navigate, and controlled enough for real development rather than lightweight demos."
      },
      {
        title: "How it is structured",
        body:
          "The architecture separates interface rendering, orchestration, provider abstraction, and tool execution into distinct layers so the platform can grow without becoming brittle. That separation makes it practical to add new providers, expand the tool surface, or change how context is managed without rewriting the whole runtime. It also keeps the user experience crisp, because the TUI, execution engine, and state management each have a clear responsibility."
      }
    ]
  },
  {
    slug: "albot",
    name: "Albot",
    year: "2025",
    category: "Multimodal RAG",
    headline:
      "A multimodal RAG system with knowledge graphs, adaptive retrieval, and layered memory.",
    summary:
      "Albot ingests text, images, audio, and video into an ArangoDB-backed knowledge graph, then answers complex queries through a retrieval stack that blends semantic, graph, and lexical signals.",
    repository: "https://github.com/OmShah74/Albot-Multimodal-Specialized-Chatbot",
    accent: "from-fuchsia-400/38 via-rose-400/18 to-transparent",
    stack: ["FastAPI", "ArangoDB", "Next.js", "PyTorch", "Whisper"],
    stats: ["Multimodal ingestion", "Hybrid retrieval", "Layered memory"],
    highlights: [
      "Built pipelines for OCR, VLM-based image understanding, Whisper transcription, and video frame extraction.",
      "Combined vector search, graph traversal, BM25, Personalized PageRank, and Bayesian weighting for adaptive retrieval.",
      "Designed working, session, and semantic memory tiers for cross-session continuity."
    ],
    sections: [
      {
        title: "Retrieval approach",
        body:
          "Albot is built around the idea that complex questions rarely respond well to a single retrieval signal. The system blends semantic similarity, graph structure, and lexical precision so that factual lookups, relationship-heavy prompts, and broad exploratory questions can all be handled through the same product surface. That makes the assistant feel more dependable across very different query styles."
      },
      {
        title: "Why it stands out",
        body:
          "What makes the product more interesting than a standard chatbot is the way ingestion, memory, retrieval, and synthesis are treated as one connected system. Multimodal inputs are not bolted on as novelty features; they feed into the same knowledge pipeline and influence how later answers are formed. The result is a research assistant that behaves more like a persistent knowledge layer than a one-turn conversation interface."
      }
    ]
  },
  {
    slug: "ds-forge",
    name: "DS-Forge",
    year: "2025",
    category: "ML Platform",
    headline:
      "A data science operating system for no-code and low-code experimentation, cleaning, and deployment.",
    summary:
      "DS-Forge turns common ML workflows into a full-stack platform with spreadsheet-style cleaning, rich feature engineering, model training, and auto-generated inference APIs.",
    repository: "https://github.com/OmShah74/DS_Forge",
    accent: "from-amber-400/40 via-orange-400/18 to-transparent",
    stack: ["Next.js", "FastAPI", "scikit-learn", "Docker", "Pandas"],
    stats: ["25+ cleaning ops", "28+ transformations", "REST deployment"],
    highlights: [
      "Implemented a manual data grid with winsorization, outlier removal, and smart recommendations.",
      "Built a feature engineering suite covering PCA, t-SNE, Isomap, polynomial features, and robust scaling.",
      "Auto-deployed trained models as REST APIs with inference-time encoding preservation."
    ],
    sections: [
      {
        title: "Product idea",
        body:
          "DS-Forge is centered on a simple product idea: the most common machine-learning tasks should feel like one continuous workflow instead of a handoff between notebooks, scripts, and serving code. Data cleaning, feature engineering, model training, evaluation, and deployment are presented as parts of the same operating environment. That makes the platform easier to understand for fast experimentation while still keeping the output operationally useful."
      },
      {
        title: "Deployment path",
        body:
          "A major design choice was to make deployment a native part of the product rather than an afterthought. Once a model is trained and selected, the same workflow can move it into API-backed inference while preserving the preprocessing chain used during training. That continuity is important because it closes the gap between experimentation and actual use."
      }
    ]
  },
  {
    slug: "agflow",
    name: "Agflow",
    year: "2025",
    category: "Visual AI Orchestration",
    headline:
      "A visual orchestration platform for agentic workflows, RAG pipelines, and code-first custom nodes.",
    summary:
      "Agflow brings agent workflow design into a visual canvas using React Flow, Supabase-backed storage, pgvector retrieval, external API execution, and custom Python extensibility.",
    repository: "https://github.com/OmShah74/Agflow-AgenticAI",
    accent: "from-emerald-400/38 via-teal-400/16 to-transparent",
    stack: ["Python", "React Flow", "LangChain", "Supabase"],
    stats: ["Visual flow editor", "pgvector RAG", "Custom Python nodes"],
    highlights: [
      "Built a React Flow interface for composing agent workflows visually.",
      "Integrated chunking, embeddings, and retrieval with Supabase pgvector for RAG-ready pipelines.",
      "Added multi-model support, external API access, and Monaco-based custom Python execution."
    ],
    sections: [
      {
        title: "Design direction",
        body:
          "Agflow was built to make agent orchestration inspectable instead of opaque. The visual canvas exposes how prompts, tools, retrieval steps, model calls, and outputs connect to each other, which makes it easier to debug, iterate, and explain complex flows. The interface is not just a convenience layer; it is part of how the product communicates system behavior."
      },
      {
        title: "Where it gets useful",
        body:
          "The product becomes most useful when visual composition and code-level control are both available in the same environment. Custom Python nodes, knowledge-base integration, and external API execution let workflows move past drag-and-drop prototypes into something teams can actually extend. That balance gives the platform a stronger practical identity than a visual demo builder."
      }
    ]
  },
  {
    slug: "knowledge-distillation",
    name: "Knowledge Distillation in LLMs",
    year: "2025",
    category: "LLM Research",
    headline:
      "A Jensen-Shannon divergence based distillation framework focused on stability and stronger compression.",
    summary:
      "This project explores how Jensen-Shannon divergence can outperform KL divergence for LLM distillation through smoother optimization, stronger dark knowledge transfer, and better downstream metrics.",
    repository: "https://github.com/OmShah74/LLM_Knowledge_Distillation",
    accent: "from-violet-400/38 via-blue-400/18 to-transparent",
    stack: ["PyTorch"],
    stats: ["F1 0.9125", "12.5% variance reduction", "20% faster convergence"],
    highlights: [
      "Distilled SmolLM2-135M down to 90M parameters using Jensen-Shannon divergence.",
      "Observed stronger optimization stability than KL divergence baselines.",
      "Improved F1, ROUGE, convergence speed, and final loss compared with KL-based distillation."
    ],
    sections: [
      {
        title: "Research angle",
        body:
          "The project focuses on one targeted research question: whether Jensen-Shannon divergence can produce a more stable and better-performing distillation process than the conventional KL-based setup. Rather than making broad compression claims, the work is framed around measurable behavior such as convergence quality, variance, and downstream task performance. That keeps the case study grounded in model behavior rather than abstraction alone."
      },
      {
        title: "Key takeaway",
        body:
          "A clear takeaway from the project is that compression quality depends on more than model size reduction. Training stability and the preservation of dark knowledge have a visible effect on how well the student model retains useful behavior. That makes the choice of distillation objective a product-level decision in any workflow where small models still need to perform credibly."
      }
    ]
  },
  {
    slug: "reinforcement-learning-portfolio-management",
    name: "Reinforcement Learning for Portfolio Management",
    year: "2025",
    category: "Reinforcement Learning",
    headline:
      "Dynamic asset allocation research using DDPG, PPO, and embedding-driven RL on Indian equities.",
    summary:
      "I benchmarked multiple reinforcement learning strategies for portfolio management under transaction costs and market friction, then compared them with passive baselines on long-horizon NSE data.",
    repository: "https://github.com/OmShah74/DynamicAssetAllocation_RM",
    accent: "from-lime-400/35 via-emerald-400/18 to-transparent",
    stack: ["PyTorch", "TensorFlow"],
    stats: ["723.5% total return", "Sharpe 1.78", "NSE 2012 - 2023"],
    highlights: [
      "Benchmarked DDPG, PPO, and dynamic embedding RL approaches on Indian equity allocation.",
      "Modeled proportional transaction costs and realistic market friction.",
      "Outperformed the passive benchmark with strong return and Sharpe outcomes."
    ],
    sections: [
      {
        title: "Environment design",
        body:
          "The portfolio-management environment was designed to stay anchored in market friction instead of assuming idealized trading conditions. Transaction costs, changing asset weights, and longer-horizon evaluation make the setup more realistic than a clean-room benchmark. That framing matters because it puts the emphasis on robust strategy behavior rather than headline returns alone."
      },
      {
        title: "What it shows",
        body:
          "The project brings together sequential decision-making, state representation, and disciplined evaluation in a finance context that is concrete enough to be judged on outcomes. Comparing multiple RL approaches under the same market setting makes the tradeoffs easier to read, especially around stability, return quality, and adaptability. It works as both an applied AI study and a well-structured experimental system."
      }
    ]
  },
  {
    slug: "nmt-spanish-to-english",
    name: "Neural Machine Translation",
    year: "2024",
    category: "Sequence Modeling",
    headline:
      "A Transformer-based Spanish-to-English translation system trained on Europarl sentence pairs.",
    summary:
      "This project implements a full NMT pipeline with transformer architecture, subword tokenization, and beam search decoding for practical translation experiments.",
    repository: "https://github.com/OmShah74/NMT_Spanish",
    accent: "from-sky-400/35 via-indigo-400/18 to-transparent",
    stack: ["PyTorch", "spaCy"],
    stats: ["500K sentence pairs", "BLEU 12.41", "16K BPE vocabulary"],
    highlights: [
      "Built the model around multi-head self-attention and sinusoidal positional encodings.",
      "Combined spaCy lemmatization with SentencePiece BPE tokenization for stronger OOV handling.",
      "Trained and evaluated on Europarl with beam search decoding and tracked perplexity and BLEU."
    ],
    sections: [
      {
        title: "Pipeline depth",
        body:
          "The translation system was built as an end-to-end pipeline, not just a Transformer implementation in isolation. Preprocessing, tokenization, architecture design, training, decoding, and evaluation all shape the final quality of the model, so the project treats them as one connected workflow. That approach makes the case study stronger because the final performance is tied to the full system rather than a single modeling component."
      },
      {
        title: "Why it matters",
        body:
          "What gives the project weight is the full path from raw bilingual data to measurable translation output. By covering normalization, subword tokenization, beam search, and BLEU-based evaluation, the system reflects the actual engineering work required to make sequence models usable. It shows the difference between training a model and delivering a complete translation pipeline."
      }
    ]
  },
  {
    slug: "alan-agentic-orchestrator",
    name: "Alan Agentic Orchestrator",
    year: "2026",
    category: "Agent Orchestration",
    headline:
      "A full-stack multi-agent system for subagent coordination, approvals, guarded execution, and tool-integrated workflows.",
    summary:
      "Alan Agentic Orchestrator is a multi-agent platform with a React and Next.js frontend, a FastAPI backend, multi-provider LLM routing, PostgreSQL and Redis-backed state, and external tool integrations through Composio.",
    repository: "https://github.com/OmShah74/Alan-Agentic-Orchestrator",
    accent: "from-cyan-300/38 via-emerald-300/18 to-transparent",
    stack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Redis", "Composio"],
    stats: ["Specialized subagents", "Provider routing", "Guardrailed execution"],
    highlights: [
      "Delegates complex work across code execution, command execution, file operations, local execution, and tool-integrated subagents.",
      "Combines provider routing, PostgreSQL persistence, Redis caching and locking, orchestration prompts, and access policies.",
      "Includes a chat interface with approvals, settings, markdown rendering, and subagent trace views."
    ],
    sections: [
      {
        title: "System design",
        body:
          "Alan was approached as a full orchestration product rather than a chat interface with hidden complexity behind it. Task decomposition, worker routing, approvals, provider management, and execution safety all need to feel coherent together for a multi-agent system to be trustworthy. That is why the product puts equal weight on the operator-facing UI and the orchestration engine underneath it."
      },
      {
        title: "Where it fits",
        body:
          "Within the broader project set, Alan represents the collaborative and operational side of agent systems. It extends the same interest in structured execution and observability, but it does so through a browser-based interface with multi-user implications, persistent state, and approval-aware flows. That gives it a distinct role as a more team-facing orchestration environment."
      }
    ]
  },
  {
    slug: "rag-research-comprehension",
    name: "RAG Research Comprehension",
    year: "2026",
    category: "Research RAG",
    headline:
      "An agentic research assistant for querying, comparing, and understanding CVPR papers with open-source models.",
    summary:
      "This project builds a local research assistant for CVPR literature using arXiv ingestion, FAISS retrieval, QLoRA-fine-tuned Qwen models, and a LangChain agent loop.",
    repository: "https://github.com/OmShah74/RAG_Research_Comprehension",
    accent: "from-blue-400/35 via-cyan-400/18 to-transparent",
    stack: ["PyTorch", "Transformers", "FAISS", "LangChain"],
    stats: ["CVPR corpus", "QLoRA fine-tuning", "FAISS retrieval"],
    highlights: [
      "Scrapes metadata and paper text from arXiv to create a dedicated CVPR retrieval corpus.",
      "Uses sentence-transformer embeddings with FAISS for efficient context retrieval.",
      "Wraps the RAG pipeline in an agentic workflow with retriever and generator evaluation."
    ],
    sections: [
      {
        title: "What I built around",
        body:
          "The system is built around a clear product problem: dense research papers are difficult to search, compare, and synthesize quickly when the reading workflow is manual. By combining ingestion, chunking, retrieval, model fine-tuning, and agentic query handling, the product turns a static corpus into something that can support iterative understanding. The goal is not only search, but better comprehension of technical literature."
      },
      {
        title: "What makes it useful",
        body:
          "Its usefulness comes from the fact that retrieval is only the entry point. The system is built to help with comparison, explanation, and follow-up reasoning across a specialized research domain, which makes it more valuable than a document finder alone. The evaluation layer also adds credibility because it measures how well the assistant retrieves and explains information, not just whether it can produce fluent text."
      }
    ]
  },
  {
    slug: "predinator",
    name: "PrediNator",
    year: "2026",
    category: "Applied AI Project",
    headline:
      "A Django-powered Akinator-style game driven by a decision tree classifier and a live feedback loop.",
    summary:
      "PrediNator is a guessing game with a decoupled machine learning core and Django interface. It asks yes, no, and don't know questions, makes interpretable predictions, and learns new characters through user feedback.",
    repository: "https://github.com/OmShah74/PrediNator",
    accent: "from-rose-400/35 via-orange-400/18 to-transparent",
    stack: ["Django", "scikit-learn", "PostgreSQL", "Render", "GitHub Actions"],
    stats: ["Decision tree gameplay", "Dynamic retraining", "CI/CD ready"],
    highlights: [
      "Separates the ML game logic from the web app so the interface and training flow stay modular.",
      "Lets users teach the game new characters and new distinguishing questions when a guess misses.",
      "Includes a production-oriented deployment setup with Gunicorn, PostgreSQL, WhiteNoise, Render hooks, and GitHub Actions."
    ],
    sections: [
      {
        title: "Core idea",
        body:
          "PrediNator is built around an interpretable game loop where the reasoning path stays visible enough to understand and improve. A decision tree works well for that goal because the product depends on a sequence of narrowing questions rather than opaque pattern matching alone. That keeps the gameplay responsive while making the underlying prediction logic easy to extend."
      },
      {
        title: "Learning loop",
        body:
          "The learning loop is what gives the project staying power beyond a one-time demo. When the system fails to identify a character, it can capture new information, add differentiating questions, and improve the model over time. That means the web experience and the training process reinforce each other instead of living in separate parts of the product."
      }
    ]
  }
];

export const projectStats = [
  { label: "Projects", value: "10+" },
  { label: "Core domains", value: "AI, ML, systems" },
  { label: "Focus", value: "Research to product" }
];

export const contactDetails = [
  {
    label: "Email",
    value: "omshah.tech@gmail.com",
    href: "mailto:omshah.tech@gmail.com",
    icon: DatabaseZap
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/om-shah-2277b22b9",
    href: "https://www.linkedin.com/in/om-shah-2277b22b9/",
    icon: ChartColumnIncreasing
  },
  {
    label: "GitHub",
    value: "github.com/OmShah74",
    href: "https://github.com/OmShah74",
    icon: Languages
  },
  {
    label: "Medium",
    value: "medium.com/@omshah74",
    href: "https://medium.com/@omshah74",
    icon: Microscope
  }
];

export const projectCategoryIcons = {
  "Terminal AI Platform": Route,
  "Multimodal RAG": Video,
  "ML Platform": Boxes,
  "Visual AI Orchestration": Sparkles,
  "LLM Research": BrainCircuit,
  "Reinforcement Learning": ChartColumnIncreasing,
  "Sequence Modeling": Languages,
  "Agent Orchestration": Bot,
  "Research RAG": Microscope,
  "Applied AI Project": DatabaseZap
};

export const allStacks = Array.from(
  new Set(projects.flatMap((project) => project.stack))
);
