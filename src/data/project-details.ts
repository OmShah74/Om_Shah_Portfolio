export type ProjectTheme = {
  shellGradient: string;
  halo: string;
  iconWrap: string;
  accentText: string;
  statGlow: string;
};

export type ProjectDetail = {
  primaryLanguage: string;
  languageStory: string;
  theme: ProjectTheme;
  architecture: {
    title: string;
    points: string[];
  };
  featureGroups: {
    title: string;
    items: string[];
  }[];
  workflow: {
    title: string;
    steps: string[];
  };
  documentation: string[];
  repoBackedNotes: string[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "forge-osh": {
    primaryLanguage: "Rust",
    languageStory:
      "Rust defines the feel of Forge-OSH. The product leans into low-latency terminal rendering, concurrency-heavy orchestration, and a systems-first design language that makes local tooling feel precise rather than improvised.",
    theme: {
      shellGradient: "from-orange-500/22 via-amber-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(255,144,55,0.24),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,215,124,0.14),transparent_24%)]",
      iconWrap: "border-orange-300/20 bg-orange-300/12 text-orange-100",
      accentText: "text-orange-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(251,146,60,0.14)]"
    },
    architecture: {
      title: "Terminal-native architecture",
      points: [
        "Forge-OSH is structured as a provider-agnostic coding agent built entirely for the terminal, with no browser dependency and no vendor lock-in.",
        "The runtime is built around Rust, Tokio, Ratatui, Crossterm, Reqwest, Serde, Petgraph, Rayon, and tiktoken-rs, which gives the platform both strong UX performance and systems-level control.",
        "File I/O, shell execution, Git operations, search, web tooling, notebook support, worktrees, hooks, permissions, memory, and session management all live inside one coherent agent loop."
      ]
    },
    featureGroups: [
      {
        title: "Core capabilities",
        items: [
          "Supports a wide provider mix including Anthropic, OpenAI, Gemini, Groq, OpenRouter, DeepSeek, xAI, and local Ollama-style backends.",
          "Implements a true plan-execute-observe loop that can read files, write code, run shell commands, search, recover from errors, and continue until the task is finished.",
          "Keeps strong safety boundaries through permission rules, blocked-command lists, trust modes, hooks, and scoped tool execution."
        ]
      },
      {
        title: "Developer ergonomics",
        items: [
          "Ships a feature-rich TUI with themes, Vim mode, conversation history, modal pickers, slash commands, live cost tracking, and session export.",
          "Adds undo-safe mutation, graph-based codebase awareness, auto-loaded project memory, and reusable skills for repeat workflows.",
          "Treats context management as a product feature through token counting, compaction, session resume, and graph-assisted navigation."
        ]
      }
    ],
    workflow: {
      title: "How the product operates",
      steps: [
        "Work begins entirely inside the terminal, with model selection, session setup, and conversation flow all staying local to the runtime.",
        "The agent plans, uses tools inside permission boundaries, updates context, and stores state as the task evolves.",
        "Sessions, hooks, memory files, and code-graph artifacts turn the environment into something persistently useful rather than one-off."
      ]
    },
    documentation: [
      "The product goes unusually deep on tooling breadth, permissions, memory, code-graph navigation, hooks, compaction, and reusable skill workflows.",
      "That combination makes it feel like a complete terminal platform rather than a thin chat wrapper around model calls."
    ],
    repoBackedNotes: [
      "More than forty tools sit inside the runtime across file work, shell, Git, search, notebooks, worktrees, and quality workflows.",
      "Code-graph support, hooks, undo, context compaction, and skills architecture are some of the strongest parts of the overall design."
    ]
  },
  albot: {
    primaryLanguage: "Python",
    languageStory:
      "Albot leans on Python for orchestration, multimodal processing, retrieval logic, and rapid iteration across a fairly ambitious RAG surface. The result feels less like a single chatbot and more like a layered knowledge system.",
    theme: {
      shellGradient: "from-blue-500/20 via-cyan-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(75,169,255,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(120,255,232,0.14),transparent_24%)]",
      iconWrap: "border-sky-300/20 bg-sky-300/12 text-sky-100",
      accentText: "text-sky-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(56,189,248,0.14)]"
    },
    architecture: {
      title: "Multimodal retrieval stack",
      points: [
        "Albot is structured as a production-ready multimodal RAG system built around text, image, audio, video, and structured-data ingestion.",
        "The backend ties FastAPI, ArangoDB, SQLite, retrieval orchestration, LLM routing, and memory management into one modular flow.",
        "The system combines vector search, graph traversal, BM25, adaptive weighting, reasoning traces, namespace-scoped memory, and web fallback."
      ]
    },
    featureGroups: [
      {
        title: "Intelligence layer",
        items: [
          "Handles multimodal ingestion through OCR, VLM-based image parsing, Whisper for audio, frame extraction for video, and structured-file support.",
          "Builds a layered memory model with working, session, and semantic memory instead of treating conversation history as the only memory source.",
          "Supports multi-LLM routing across OpenAI, Anthropic, Gemini, Groq, and OpenRouter."
        ]
      },
      {
        title: "Research and operations",
        items: [
          "Includes an agentic deep-research loop that can plan, search, collect, and synthesize multi-step information.",
          "Persists sessions, traces, and memory artifacts for concurrent chats and cross-session retrieval.",
          "Uses a Docker-first workflow so the full architecture can run locally or on commodity hardware."
        ]
      }
    ],
    workflow: {
      title: "Pipeline flow",
      steps: [
        "Content is ingested and transformed into graph-aware knowledge atoms and embeddings.",
        "Retrieval balances semantic, lexical, and relational signals depending on the query type.",
        "The orchestration layer composes the answer with reasoning traces, citations, and memory-aware context."
      ]
    },
    documentation: [
      "Graph-based retrieval, adaptive reasoning, layered memory, and deep research are central to the way the product behaves.",
      "The system also has a stronger deployment orientation than a notebook-only prototype."
    ],
    repoBackedNotes: [
      "Bayesian weight optimization and Personalized PageRank are used to adjust retrieval behavior more intelligently.",
      "SQLite and ArangoDB play different roles in the storage model, which helps separate sessions, traces, and long-lived knowledge."
    ]
  },
  "ds-forge": {
    primaryLanguage: "TypeScript",
    languageStory:
      "The frontend-led identity of DS-Forge comes from a TypeScript and Next.js surface paired with a Python ML backend. That split helps the platform feel structured and productized instead of notebook-driven.",
    theme: {
      shellGradient: "from-slate-300/12 via-zinc-200/8 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(217,217,217,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(132,204,255,0.12),transparent_24%)]",
      iconWrap: "border-slate-200/20 bg-slate-200/10 text-slate-100",
      accentText: "text-slate-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(226,232,240,0.12)]"
    },
    architecture: {
      title: "End-to-end ML operating system",
      points: [
        "DS-Forge is built as a no-code and low-code studio that covers ingestion, cleaning, feature engineering, training, evaluation, and deployment.",
        "The stack pairs Next.js with FastAPI, Pandas, NumPy, Scikit-Learn, and Docker, giving it a strong split between interface and data-engine responsibilities.",
        "A key design idea is exact pipeline preservation so the same transformations used in training are reapplied during inference."
      ]
    },
    featureGroups: [
      {
        title: "Data workflow",
        items: [
          "Supports CSV, JSON, XLSX, and text-based ingestion with schema-aware parsing.",
          "Provides 25+ atomic cleaning operations plus manual data-grid editing when automation is not enough.",
          "Surfaces smart recommendations so data cleaning becomes more guided and less trial-and-error."
        ]
      },
      {
        title: "Model and deployment workflow",
        items: [
          "Includes 28+ feature transformations spanning dimensionality reduction, encoding, and preprocessing.",
          "Exposes a curated model zoo for regression and classification tasks.",
          "Moves trained models directly into REST-style deployment with a live inference playground."
        ]
      }
    ],
    workflow: {
      title: "User path",
      steps: [
        "Upload data, validate schema, and clean it through targeted or global operations.",
        "Apply transformations, train or compare models, then evaluate and iterate.",
        "Deploy the selected model as an API while preserving the training-time preprocessing chain."
      ]
    },
    documentation: [
      "Operational completeness is a major part of the platform, not only model training.",
      "The containerized workflow also makes the system easier to reproduce, demonstrate, and deploy."
    ],
    repoBackedNotes: [
      "The manual grid, smart recommendations, and one-click API deployment are some of the most product-defining parts of the platform.",
      "The system is also built to run cleanly as separate frontend and backend containers."
    ]
  },
  agflow: {
    primaryLanguage: "TypeScript",
    languageStory:
      "Agflow feels like a frontend system first, so its visual identity leans into the builder side of TypeScript, React Flow, and interface orchestration. The interaction model is a major part of the product itself.",
    theme: {
      shellGradient: "from-emerald-500/18 via-teal-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.12),transparent_24%)]",
      iconWrap: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
      accentText: "text-emerald-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(16,185,129,0.14)]"
    },
    architecture: {
      title: "Client-server-engine split",
      points: [
        "Agflow follows a client-server-engine model that keeps the visual builder, backend API layer, and execution engine clearly separated.",
        "The frontend manages the graph canvas and interaction state, while the backend validates and proxies requests to a Python execution engine.",
        "The execution engine parses node graphs into DAG-like flows and runs them through Agno with retrieval, models, and tool integrations."
      ]
    },
    featureGroups: [
      {
        title: "Builder UX",
        items: [
          "Uses React Flow for drag-and-drop composition of models, agents, tools, and outputs.",
          "Supports cloud-managed flows, auto-save, undo and redo, export, and clipboard workflows.",
          "Adds a Monaco-powered code editor for custom Python nodes and dynamic input-handle generation."
        ]
      },
      {
        title: "Execution and integration",
        items: [
          "Supports Groq and OpenAI model routing plus RAG pipelines on Supabase pgvector.",
          "Includes tool nodes for search, Gmail, calculator, and financial data.",
          "Provides external API execution so saved flows can be called outside the UI."
        ]
      }
    ],
    workflow: {
      title: "How a flow gets built",
      steps: [
        "Compose a graph visually from model, agent, tool, and retrieval nodes.",
        "Attach knowledge-base or custom Python nodes where the workflow needs additional logic.",
        "Save the flow, run it in the playground, and expose it through the external API path when needed."
      ]
    },
    documentation: [
      "Agflow is shaped like a real product, with equal attention paid to the builder experience, the knowledge-base flow, and external API execution.",
      "That balance makes the platform feel closer to a usable orchestration environment than a visual demo."
    ],
    repoBackedNotes: [
      "Saved flows can be executed externally through API-key based calls, which extends the builder beyond the UI itself.",
      "The knowledge-base manager and custom-node pipeline are two of the strongest parts of the overall system."
    ]
  },
  "knowledge-distillation": {
    primaryLanguage: "Python",
    languageStory:
      "This project is centered on experimentation and model behavior, so the case study stays research-forward with Python and PyTorch as the dominant technical layer.",
    theme: {
      shellGradient: "from-violet-500/18 via-indigo-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(129,140,248,0.12),transparent_24%)]",
      iconWrap: "border-violet-300/20 bg-violet-300/10 text-violet-100",
      accentText: "text-violet-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(167,139,250,0.14)]"
    },
    architecture: {
      title: "Research-driven model compression",
      points: [
        "The project studies knowledge distillation through a research-first lens, with Jensen-Shannon divergence used as the central optimization idea.",
        "It treats Jensen-Shannon divergence as an alternative to KL divergence for LLM distillation, focusing on optimization stability and downstream quality rather than only compression ratio.",
        "The implementation uses PyTorch to distill a smaller student from a larger SmolLM2 teacher and track F1, ROUGE, convergence speed, and final loss."
      ]
    },
    featureGroups: [
      {
        title: "Research focus",
        items: [
          "Tests a more symmetric divergence objective for more stable knowledge transfer.",
          "Tracks empirical metrics rather than stopping at theoretical motivation.",
          "Treats distillation quality as a function of optimization behavior and dark knowledge preservation."
        ]
      }
    ],
    workflow: {
      title: "Experimental flow",
      steps: [
        "Train teacher-student distillation with the Jensen-Shannon objective.",
        "Compare training dynamics with KL-based baselines.",
        "Evaluate student quality through downstream metrics and convergence behavior."
      ]
    },
    documentation: [
      "The project reads best as an empirical compression study focused on stability, convergence, and quality preservation."
    ],
    repoBackedNotes: [
      "Its value comes from measured outcomes: stronger F1, better ROUGE, lower variance, and faster convergence than the comparison setup."
    ]
  },
  "reinforcement-learning-portfolio-management": {
    primaryLanguage: "Python",
    languageStory:
      "The project is experimentation-heavy, so Python drives the training loop, environment logic, config-driven workflows, and result visualization. That makes the work feel closer to a research lab than a trading dashboard.",
    theme: {
      shellGradient: "from-lime-500/18 via-emerald-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(132,204,22,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.12),transparent_24%)]",
      iconWrap: "border-lime-300/20 bg-lime-300/10 text-lime-100",
      accentText: "text-lime-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(132,204,22,0.14)]"
    },
    architecture: {
      title: "DRL portfolio-management loop",
      points: [
        "The project is structured as an autonomous trading-agent system trained on historical market data.",
        "It supports DDPG, PPO, and DERL across a simulated market environment with configurable experiments.",
        "Agents, data preparation, config, training, testing, and results are separated cleanly so experiments can be rerun and extended."
      ]
    },
    featureGroups: [
      {
        title: "Algorithms and setup",
        items: [
          "Implements DDPG for continuous-action optimization, PPO for policy stability, and DERL for embedding-driven state representation.",
          "Uses configurable experiments through a central config file instead of hardcoded runs.",
          "Includes data handling, training, testing, and result visualization workflows."
        ]
      },
      {
        title: "Research framing",
        items: [
          "Focuses on maximizing returns while handling financial risk and market adaptation.",
          "Treats the work as applied AI research rather than a deploy-now trading bot.",
          "Keeps results and plots as first-class artifacts for analysis."
        ]
      }
    ],
    workflow: {
      title: "Experiment path",
      steps: [
        "Download and clean historical market data.",
        "Train an RL agent variant under the chosen configuration.",
        "Evaluate the strategy on held-out periods and compare metrics against baselines."
      ]
    },
    documentation: [
      "The system is built around config-driven execution, agent comparison, results storage, and repeatable experimentation.",
      "It is framed as applied research, which keeps the focus on evaluation quality rather than pretending to be a live trading product."
    ],
    repoBackedNotes: [
      "The architecture is extensible enough to support additional agents without reworking the full project structure.",
      "Results are treated as first-class outputs through both tabular metrics and visual performance plots."
    ]
  },
  "nmt-spanish-to-english": {
    primaryLanguage: "Python",
    languageStory:
      "This is a modern deep-learning pipeline, so the page leans into Python's role across preprocessing, training, evaluation, and inference. The product story is really about the end-to-end translation workflow.",
    theme: {
      shellGradient: "from-sky-500/18 via-indigo-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(129,140,248,0.12),transparent_24%)]",
      iconWrap: "border-sky-300/20 bg-sky-300/10 text-sky-100",
      accentText: "text-sky-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(59,130,246,0.14)]"
    },
    architecture: {
      title: "Full NMT pipeline",
      points: [
        "The project is built as a full Transformer-based NMT system rather than only a model script.",
        "The pipeline includes linguistic normalization with spaCy, subword tokenization with SentencePiece, Transformer training, BLEU evaluation, and inference via greedy or beam search.",
        "The codebase is organized into modular units for preprocessing, architecture, training, testing, and translation."
      ]
    },
    featureGroups: [
      {
        title: "Modeling and inference",
        items: [
          "Uses canonical multi-head self-attention with an encoder-decoder Transformer structure.",
          "Supports greedy search for speed and beam search for stronger final translation quality.",
          "Tracks loss, perplexity, and BLEU rather than relying on a single metric."
        ]
      },
      {
        title: "Data and training",
        items: [
          "Applies spaCy lemmatization to normalize text before tokenization.",
          "Uses SentencePiece BPE to reduce unknown-word issues and support open-vocabulary handling.",
          "Supports resumable training with GPU and mixed-precision acceleration."
        ]
      }
    ],
    workflow: {
      title: "Training flow",
      steps: [
        "Preprocess and normalize the Europarl corpus, then train the SentencePiece tokenizer.",
        "Train the Transformer and persist the best checkpoint by validation performance.",
        "Evaluate with BLEU and then run beam-search inference on new sentences."
      ]
    },
    documentation: [
      "The project is strongest when viewed as a full training and inference pipeline, not just a model experiment.",
      "That clarity gives it more weight than a notebook-only translation prototype."
    ],
    repoBackedNotes: [
      "Each pipeline stage is separated cleanly, which makes retraining, evaluation, and inference much easier to reason about.",
      "Beam search and mixed precision both play an important role in making the system practical."
    ]
  },
  "alan-agentic-orchestrator": {
    primaryLanguage: "TypeScript",
    languageStory:
      "The frontend identity of Alan is strongly React and Next.js, even though the orchestration backend is Python-heavy. That full-stack split is a major part of how the product works and how it feels.",
    theme: {
      shellGradient: "from-cyan-500/18 via-emerald-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(74,222,128,0.12),transparent_24%)]",
      iconWrap: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
      accentText: "text-cyan-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(34,211,238,0.14)]"
    },
    architecture: {
      title: "Subagent-centered orchestration stack",
      points: [
        "Alan is built around decomposing complex work into sub-tasks routed to specialized workers.",
        "The backend is split across provider routing, PostgreSQL and Redis storage, orchestration logic, prompts, Cerbos security policies, and specialized executors.",
        "The frontend provides a chat-first interface with API-key management, approvals, markdown rendering, settings, and subagent execution views."
      ]
    },
    featureGroups: [
      {
        title: "Execution model",
        items: [
          "Supports code execution, shell commands, file operations, local system execution, and external-tool calls.",
          "Uses provider-aware routing and failover for multiple LLM backends.",
          "Applies sandboxing and approval boundaries for more controlled local execution."
        ]
      },
      {
        title: "Product surface",
        items: [
          "Builds a real-time chat experience around orchestrated AI workers rather than exposing orchestration as a hidden backend detail.",
          "Lets users inspect approvals, settings, provider state, and subagent progress visually.",
          "Makes external tool integrations part of the runtime rather than isolated demos."
        ]
      }
    ],
    workflow: {
      title: "Runtime flow",
      steps: [
        "A user submits a task through the frontend chat surface.",
        "The orchestrator decomposes it into specialized subagent work and routes to the right executor or external tool.",
        "State, messages, and steps are stored while the UI reflects execution and approvals in real time."
      ]
    },
    documentation: [
      "The product has a strong full-stack identity because the orchestration engine and the operator-facing chat surface are both treated as first-class."
    ],
    repoBackedNotes: [
      "Cerbos policies, Redis locks, and real-time UI components all contribute to the feeling of a serious orchestration environment."
    ]
  },
  "rag-research-comprehension": {
    primaryLanguage: "Python",
    languageStory:
      "This is a research pipeline first, so Python and PyTorch define the project's feel across ingestion, vectorization, fine-tuning, and agentic querying. The result is closer to a technical research assistant than a basic document chatbot.",
    theme: {
      shellGradient: "from-blue-500/18 via-cyan-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(34,211,238,0.12),transparent_24%)]",
      iconWrap: "border-blue-300/20 bg-blue-300/10 text-blue-100",
      accentText: "text-blue-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(59,130,246,0.14)]"
    },
    architecture: {
      title: "Modular CVPR research assistant",
      points: [
        "The system is designed as a locally hosted, agentic RAG assistant for CVPR paper comprehension.",
        "Its pipeline covers collecting from arXiv, processing PDFs, chunking, embedding, FAISS indexing, fine-tuned Qwen model inference, and LangChain agent orchestration.",
        "It also has a stronger evaluation layer than many portfolio projects by measuring both retrieval and generation quality."
      ]
    },
    featureGroups: [
      {
        title: "RAG and fine-tuning",
        items: [
          "Uses sentence-transformer embeddings with FAISS for efficient retrieval.",
          "Applies QLoRA to fine-tune open-source Qwen models under realistic hardware constraints.",
          "Wraps retrieval and answer generation in an agentic query flow rather than static retrieval-only answering."
        ]
      },
      {
        title: "Evaluation and iteration",
        items: [
          "Tracks hit rate, MRR, ROUGE, and semantic similarity to compare model iterations.",
          "Documents multiple generations of the model rather than only a single final checkpoint.",
          "Even the integration experiments expose useful engineering tradeoffs rather than being hidden away."
        ]
      }
    ],
    workflow: {
      title: "Research comprehension path",
      steps: [
        "Collect and process CVPR papers from arXiv into a local corpus.",
        "Index document chunks in FAISS and fine-tune the model with QLoRA.",
        "Answer user queries through a RAG plus agent loop and evaluate both retrieval and generation quality."
      ]
    },
    documentation: [
      "The project benefits from an iterative model story, where later versions clearly improve on earlier ones.",
      "That makes the system feel more credible because it shows how the product matured over time."
    ],
    repoBackedNotes: [
      "Multiple model iterations are compared quantitatively, which gives the project a much stronger evaluation backbone.",
      "The engineering story is not only about success metrics but also about the tradeoffs that surfaced during integration."
    ]
  },
  predinator: {
    primaryLanguage: "Python",
    languageStory:
      "PrediNator uses Python to keep the game engine, training loop, and web application straightforward and interpretable, which suits the decision-tree-based design of the product.",
    theme: {
      shellGradient: "from-rose-500/18 via-orange-400/10 to-transparent",
      halo:
        "bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(251,146,60,0.12),transparent_24%)]",
      iconWrap: "border-rose-300/20 bg-rose-300/10 text-rose-100",
      accentText: "text-rose-100/85",
      statGlow: "shadow-[0_0_0_1px_rgba(244,63,94,0.14)]"
    },
    architecture: {
      title: "Game engine plus web app split",
      points: [
        "PrediNator uses a decoupled architecture between the ML core and the Django web layer.",
        "The prediction engine is built around a decision tree classifier, which keeps the logic fast and interpretable for a question-driven game.",
        "The project also includes data-generation and model-training scripts, not just the runtime interface."
      ]
    },
    featureGroups: [
      {
        title: "Gameplay and learning",
        items: [
          "Runs an Akinator-style yes, no, and don't-know flow to narrow down possible characters.",
          "Lets users add new characters when the model fails to guess correctly.",
          "Allows new distinguishing questions to be incorporated so the system improves over time."
        ]
      },
      {
        title: "Deployment and operations",
        items: [
          "Supports production deployment with Gunicorn, PostgreSQL, and WhiteNoise.",
          "Includes CI/CD workflow support for testing and deployment to platforms like Render.",
          "Keeps local development simple with virtualenv, migrations, and data bootstrapping scripts."
        ]
      }
    ],
    workflow: {
      title: "Learning loop",
      steps: [
        "Start from a seeded dataset of characters and questions.",
        "Run the decision-tree gameplay loop inside the Django application.",
        "When guesses fail, collect new attributes or questions and retrain the model."
      ]
    },
    documentation: [
      "The strongest part of the product is the feedback loop: gameplay and learning are tied together rather than treated as separate concerns."
    ],
    repoBackedNotes: [
      "Production setup, CI/CD, and future scalability concerns are already part of the way the project is framed."
    ]
  }
};
