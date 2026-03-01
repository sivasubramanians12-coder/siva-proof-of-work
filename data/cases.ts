export type Domain = 'OPS' | 'BUILD' | 'OUTCOME' | 'TOOL';
export type Status = 'Live' | 'In Progress' | 'Archived';

export interface Metric {
  value: string;
  label: string;
  delta?: string;
}

export interface Case {
  slug: string;
  title: string;
  domain: Domain;
  status: Status;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
  excerpt: string;
  context?: string;
  challenge?: string;
  approach?: string[];
  decisions?: { decision: string; rationale: string }[];
  learnings?: string[];
  metrics?: Metric[];
  date?: string;
  industry?: string;
}

export const cases: Case[] = [
  {
    slug: 'geneva-sales-pipeline',
    title: 'Geneva — Sales Pipeline',
    domain: 'OPS',
    status: 'Live',
    date: 'February 2026',
    industry: 'Manufacturing / Window Coverings',
    problem: 'Hunter Douglas India runs two sales divisions through disconnected tools. Pipeline visibility was manual. Leadership reporting required consolidating inputs from multiple people.',
    built: 'Unified sales pipeline platform — FastAPI + React + Supabase + Railway. Telegram bot for field reps. Role-based dashboards for reps, managers, leadership.',
    outcome: 'Time from field update to leadership visibility: days → hours',
    stack: ['FastAPI', 'React', 'Supabase', 'Telegram', 'Railway', 'Redis'],
    excerpt: 'Disconnected tools meant leadership visibility required manual consolidation across divisions. Built a unified pipeline platform with role-based dashboards and a Telegram bot for field reps.',
    context: 'Hunter Douglas India operates two distinct sales divisions — Architectural Products (ceilings, facades, louvers) and Window Covering Products (blinds, curtains). Both divisions shared the same sales team structure but had no unified view of pipeline activity. At any given time, leadership had to wait for weekly Excel updates consolidated across 4–5 people before having a picture of where revenue was coming from. Field reps were on the road. They were not opening dashboards.',
    challenge: 'The core problem was not data — it was latency. By the time a rep updated a spreadsheet, a manager reviewed it, and leadership consolidated the picture, the information was 3–5 days old. Decisions were being made on stale context. Stage transitions were not being logged, so there was no way to identify where deals were dying.',
    approach: [
      'Map the existing workflow before touching any code — understand how reps actually update deals, not how the process was supposed to work',
      'Design around the Telegram-first interface — reps are on their phones, not laptops. If it is not a message, they will not use it',
      'Build role-based views from day one — rep, manager, and leadership have different information needs. One dashboard for everyone serves no one',
      'Log every stage transition with timestamp and actor — the audit trail is the product',
      'Deploy on Railway for simplicity — 30-person company, not a startup that needs Kubernetes'
    ],
    decisions: [
      { decision: 'Telegram bot as the primary rep interface', rationale: 'Field reps spend the day on their phones. A web dashboard requires intent — opening a browser, logging in, navigating. A Telegram message is zero friction. Meets people where they already are.' },
      { decision: 'FastAPI over Django or Node', rationale: 'Async-first, fast to prototype, excellent Supabase integration. The team does not need the batteries Django includes — a clean REST API is all we need.' },
      { decision: 'Supabase over a self-managed Postgres instance', rationale: 'Built-in auth, realtime subscriptions, and row-level security. For a 30-person company, managed infrastructure is worth the cost.' },
      { decision: 'No mobile app', rationale: 'Building and maintaining a native app for a 30-person sales team is disproportionate effort. Telegram handles the mobile interface. Web handles the dashboard.' }
    ],
    learnings: [
      'The best interface is the one people already use. Do not build a new habit — integrate with an existing one.',
      'Stage velocity (how fast deals move through funnel) is more actionable than total pipeline value. We added velocity tracking in sprint 3.',
      'Role-based access is not just a security feature — it is a UX feature. Showing a rep their colleague\'s pipeline adds noise, not insight.',
      'Logging every action creates an audit trail that becomes invaluable for coaching conversations.'
    ],
    metrics: [
      { value: '< 1h', label: 'Field to leadership visibility', delta: 'from 3–5 days' },
      { value: '2', label: 'Sales divisions unified', delta: 'single platform' },
      { value: '6', label: 'Pipeline stages tracked', delta: 'with full audit log' },
      { value: '3', label: 'Role-based views', delta: 'Rep / Manager / Leadership' }
    ]
  },
  {
    slug: 'hd-hire-ai-ats',
    title: 'HD Hire — AI Applicant Tracking',
    domain: 'OPS',
    status: 'Live',
    date: 'January 2026',
    industry: 'Manufacturing / Operations',
    problem: 'Hiring at a 30-person company is high-stakes and under-resourced. CVs pile up. Feedback gets lost. Good candidates go cold while the team is busy running the business.',
    built: 'AI-augmented ATS — Claude scores applications, ElevenLabs handles voice screening, candidates self-schedule via Cal.com. Full email automation via Resend.',
    outcome: 'Consistent, repeatable hiring process that does not depend on someone having bandwidth',
    stack: ['Next.js', 'Supabase', 'Claude API', 'ElevenLabs', 'Cal.com', 'Resend'],
    excerpt: 'At a 30-person company, hiring is high-stakes and under-resourced. Built an AI-augmented ATS where Claude scores applications and ElevenLabs runs voice screening.',
    context: 'Every hire at a 30-person company has outsized impact. A bad hire in a small team does not get absorbed — it creates friction that affects everyone. And yet, the hiring process was the least systematised part of the operation. CVs arrived via email, were discussed over WhatsApp, and feedback was stored in someone\'s head. Candidates would go a week without hearing anything — not because no one cared, but because the team was busy running the business.',
    challenge: 'The constraint was not budget or intent — it was bandwidth. Screening CVs takes time. Scheduling calls takes coordination. Following up requires remembering. A small team simply does not have the overhead to run a rigorous process manually.',
    approach: [
      'Design the candidate experience first — a slow, disorganised process reflects on the company even when no one is hired',
      'Use AI for the repeatable parts: CV scoring, initial screening, email follow-ups. Keep humans for the judgment calls',
      'Self-scheduling eliminates the coordination loop — candidates pick a slot, no back-and-forth email chains',
      'Voice screening via ElevenLabs handles the first conversation — evaluates communication, availability, and basics before a human is involved',
      'Automate the full email lifecycle — every candidate gets a response'
    ],
    decisions: [
      { decision: 'Claude for CV scoring with structured JSON output', rationale: 'LLMs are remarkably good at reading CVs against a rubric and returning structured scores. The output is consistent, explainable, and auditable — better than gut feel and faster than manual review.' },
      { decision: 'ElevenLabs Conversational AI for voice screening', rationale: 'A phone screen handles communication quality, role fit basics, and availability check. ElevenLabs handles this at scale, any time of day, without coordinator bandwidth.' },
      { decision: 'Cal.com for self-scheduling', rationale: 'Eliminating the scheduling loop saves 2–3 email exchanges per candidate. At 50 applicants per role, that is significant overhead removed.' },
      { decision: 'Resend for email automation with React Email templates', rationale: 'Every candidate deserves a response. Resend makes transactional email reliable and templated — no one falls through the cracks.' }
    ],
    learnings: [
      'AI scoring is most useful as a filter, not a decision. It surfaces the clear rejections quickly, freeing human attention for the interesting candidates.',
      'Candidates self-schedule faster than expected — removing the back-and-forth meaningfully speeds the process.',
      'PDF parsing is a genuine constraint — scanned CVs are not text-layer readable. Accepted as a known limitation in v1.',
      'The hiring team dashboard needs to be opinionated about what is actionable today, not just a list of candidates.'
    ],
    metrics: [
      { value: '5', label: 'Sprints to fully operational', delta: 'from zero' },
      { value: '100%', label: 'Candidates receive a response', delta: 'automated' },
      { value: '0', label: 'Scheduling emails required', delta: 'self-service via Cal.com' },
      { value: '< 24h', label: 'CV to score turnaround', delta: 'from days' }
    ]
  },
  {
    slug: 'spicescience-rag-app',
    title: 'SpiceScience — RAG Knowledge App',
    domain: 'BUILD',
    status: 'Live',
    date: 'October 2025',
    industry: 'Food Science / Consumer',
    problem: 'A book on spice flavour chemistry contains expert knowledge inaccessible to most cooks. The knowledge exists. The access does not.',
    built: 'Embedded 1,200+ knowledge chunks into Pinecone. Flask API + vanilla JS frontend. Spice Explorer, Custom Blend Creator, Cuisine recommendations.',
    outcome: 'Domain expertise from a specialist book, accessible via natural language',
    stack: ['Flask', 'Pinecone', 'OpenAI', 'Python', 'Pinecone Inference API'],
    excerpt: "Embedded 1,200+ knowledge chunks from The Science of Spice into Pinecone. Built a RAG system with Spice Explorer, Custom Blend Creator, and cuisine recommendations.",
    context: 'The Science of Spice by Stuart Farrimond is a rigorous book on the molecular chemistry of flavour — why certain spice combinations work, what compounds drive heat or sweetness, how aromatic profiles interact. Dense, scientific, and largely inaccessible to anyone who has not read and retained the whole thing. The insight: this book is a domain expert compressed into 300 pages. RAG could make that expert available on demand.',
    challenge: 'The experiment was about the pattern, not the product. Could you take a single book of dense domain knowledge and make it genuinely useful via natural language? If yes, the same approach applies everywhere — internal playbooks, compliance documents, technical manuals, coaching frameworks.',
    approach: [
      'Chunk the book into semantically coherent sections — not arbitrary character limits',
      'Embed using Pinecone Inference API with multilingual-e5-large for high-quality semantic search',
      'Build three distinct interfaces: Explorer (browse by spice), Blend Creator (describe a dish, get a recipe), Cuisine Guide (15+ world cuisines)',
      'Keep the frontend deliberately simple — vanilla JS. The intelligence is in the retrieval layer, not the UI'
    ],
    decisions: [
      { decision: 'Pinecone Inference API for embeddings', rationale: 'Eliminates the need to manage a separate embedding model. Pinecone handles embedding and retrieval in one service — simpler architecture.' },
      { decision: '1,225 chunks from the full book', rationale: 'Chunk size tuned to preserve semantic context. Too small and you lose meaning, too large and retrieval precision drops. Tested at multiple sizes.' },
      { decision: 'Flask over FastAPI', rationale: 'Simplicity. The API surface is small, there is no async requirement, and Flask gets out of the way quickly for a proof of concept.' },
      { decision: 'No authentication, fully public', rationale: 'This was a proof of concept for the RAG pattern. Friction would kill the learning. Open access was the right call for an experiment.' }
    ],
    learnings: [
      'RAG is most powerful on dense, structured knowledge that experts have but is not easily searchable. Books, manuals, frameworks — not general web content.',
      'Chunk quality matters more than chunk quantity. 1,200 well-structured chunks outperformed 5,000 arbitrary splits.',
      'The real insight was identifying the pattern: every organisation has the equivalent of this book. Expertise trapped in documents.',
      'User questions reveal what the knowledge base cannot answer — a useful signal for identifying gaps.'
    ],
    metrics: [
      { value: '1,225', label: 'Knowledge chunks embedded', delta: 'from one book' },
      { value: '18+', label: 'Spices in Explorer', delta: 'with pairings and chemistry' },
      { value: '15+', label: 'Cuisine profiles', delta: 'with traditional blends' },
      { value: '1', label: 'Weekend to build', delta: 'proof of concept' }
    ]
  },
  {
    slug: 'coachos-leadership-ai',
    title: 'CoachOS — Leadership Coach AI System',
    domain: 'BUILD',
    status: 'Live',
    date: 'February 2026',
    industry: 'Professional Services / Coaching',
    problem: 'A leadership coach with 30 years of client experience: the knowledge exists. The application is inconsistent because no system connects past sessions, frameworks, and client history at the moment it is needed.',
    built: 'AI system on Airtable + Obsidian + Pinecone + Claude. Surfaces institutional knowledge on demand, drafts session prep and follow-ups. Nothing reaches clients without coach approval.',
    outcome: 'Expertise available at scale; coach admin time reinvested into coaching quality',
    stack: ['Airtable', 'Obsidian', 'Pinecone', 'Claude API', 'Make.com', 'Cal.com', 'Fireflies.ai'],
    excerpt: "30 years of coaching expertise buried in notes and sessions. Built an AI system that surfaces institutional knowledge on demand and drafts session prep — nothing reaches clients without approval.",
    context: 'The coach had been working with leaders across industries for 30 years. That experience was real and valuable — but it was stored across handwritten notes, Word documents, Zoom recordings, and memory. Every new client engagement started from scratch. The coach could not easily pull up what had worked for a similar client two years ago, or which framework had unlocked a particular kind of stuck leader.',
    challenge: 'The design constraint was explicit: AI drafts everything, the coach approves everything. Nothing reaches a client without a human decision. This is not about replacing the coach — it is about giving the coach more time to exercise judgment.',
    approach: [
      'Use Airtable as the CRM — database-first, reliable, relational. The coach could already use it',
      'Obsidian as the knowledge base — 30 years of frameworks in markdown, searchable and portable',
      'Dual-layer Pinecone: one namespace for Obsidian (frameworks, methodologies), one for client documents (session notes, assessments)',
      'Fireflies.ai for automatic meeting transcription — no manual export, no coach overhead',
      'Make.com for automation orchestration — the coach is non-technical, no-code was the right choice',
      'Claude for all drafting — session prep, follow-up summaries, client communications'
    ],
    decisions: [
      { decision: 'Dual Pinecone namespace for knowledge vs client data', rationale: 'Frameworks and client history are different retrieval contexts. A question about handling a resistant coachee should pull from methodology, not client records. Keeping them separate allows targeted retrieval.' },
      { decision: 'Fireflies.ai over manual transcription', rationale: 'Auto-joins meetings, transcribes, webhooks to the system. The coach conducts the session — the system handles the documentation. Zero additional overhead.' },
      { decision: 'Make.com over custom code for automation', rationale: 'The coach needs to maintain and occasionally modify the automation. No-code means she can do it without a developer. Sustainability matters.' },
      { decision: 'Hard approval gate before any client communication', rationale: 'Non-negotiable design principle. AI outputs in coaching can cause real harm if they misread a situation. The coach\'s judgment is the product — AI is the research assistant.' }
    ],
    learnings: [
      'The hardest part was not the technology — it was building trust that AI would extend capacity, not replace judgment.',
      'Dual-namespace RAG is significantly more precise than a single mixed index. Retrieval quality improved markedly when methodology and client context were separated.',
      'Session prep is the highest-leverage automation: 45-minute manual research reduced to a reviewed draft in minutes.',
      'The same pattern applies to any expert who has accumulated knowledge over time — consultants, lawyers, doctors, senior operators.'
    ],
    metrics: [
      { value: '30yr', label: 'Expertise made searchable', delta: 'via dual-layer RAG' },
      { value: '~200', label: 'Active clients managed', delta: 'with consistent context' },
      { value: '0', label: 'Client messages sent without approval', delta: 'by design' },
      { value: '45min', label: 'Session prep reduced', delta: 'to minutes' }
    ]
  },
  {
    slug: 'personal-ai-os',
    title: 'Personal AI OS — Agent Infrastructure',
    domain: 'BUILD',
    status: 'In Progress',
    date: 'March 2026',
    industry: 'Personal Infrastructure / AI Systems',
    problem: 'Running a 30-person business while building AI systems means context-switching constantly. Information gets lost between sessions. The same questions get answered again.',
    built: '3-agent system (orchestrator + research + coding). 3-layer memory architecture. Daily digests across 80+ sources. Deep research skill. Voice transcription via Groq Whisper.',
    outcome: 'Active — compounds daily',
    stack: ['OpenClaw', 'Claude', 'Groq Whisper', 'Gemini', 'Telegram', 'GitHub'],
    excerpt: '3-agent system with orchestrator, research, and coding agents. 3-layer memory architecture and daily digests across 80+ sources. Voice transcription via Groq Whisper.',
    context: 'At some point the question shifted from what should I build to what infrastructure do I need to build anything well. Each session with an AI assistant started from scratch — no memory of past decisions, no awareness of current projects, no context about what had already been tried. The overhead of re-establishing context was eating into the time available for actual work.',
    challenge: 'Most AI assistant setups are stateless by default. Each conversation is isolated. The challenge was building persistent context — a system that wakes up knowing who you are, what you are building, and what decisions have been made — without that becoming a maintenance burden in itself.',
    approach: [
      'Three agents with distinct roles: BarleyBot (orchestrator, memory, daily ops), Coffee (deep research), Coder (builds)',
      'Each agent bound to a specific Telegram context — right agent, right conversation, no cross-contamination',
      'Three-layer memory: active session context, daily logs (raw), long-term curated knowledge base',
      'Daily cron infrastructure: podcast digest (81 feeds), RSS digest (13 feeds), daily wrap and LinkedIn draft at 10:30 PM IST',
      'Groq Whisper for voice note transcription — send a voice message, get a text response',
      'GitHub integration: agent reads all repos and surfaces daily commits in the nightly wrap'
    ],
    decisions: [
      { decision: 'Three specialist agents over one general agent', rationale: 'A general agent tries to do everything and does nothing well. Specialist agents with clear roles — research, coding, orchestration — perform better and are easier to reason about.' },
      { decision: 'Telegram as the primary interface', rationale: 'Always-on, mobile-native, supports voice notes, file attachments, group chats. Better than a web UI for an always-available assistant.' },
      { decision: '3-layer memory over a single context file', rationale: 'Active context is ephemeral. Daily logs are raw. Long-term memory is curated. Each layer serves a different purpose — combining them degrades all three.' },
      { decision: 'Groq Whisper for voice transcription', rationale: 'Fastest inference available for Whisper. Voice note to text in under 2 seconds. Makes the system genuinely usable on mobile.' }
    ],
    learnings: [
      'Memory architecture is the most underrated part of agent systems. Without it, every session starts from zero — useful for tasks, useless for ongoing work.',
      'Model tier matters for agents. Free-tier APIs rate-limit on the first call. Agents make multiple calls per task — paid tiers are not optional.',
      'Specialist agents outperform general ones. Clear roles mean better performance and easier debugging.',
      'The bottleneck shifts once infrastructure is solid. Building gets faster. The constraint becomes knowing clearly what is worth building next.'
    ],
    metrics: [
      { value: '3', label: 'Specialist agents running', delta: 'orchestrator + research + coding' },
      { value: '80+', label: 'Sources in daily digest', delta: 'podcasts and RSS feeds' },
      { value: '< 2s', label: 'Voice note transcription', delta: 'via Groq Whisper' },
      { value: 'Day 1', label: 'Context persistence', delta: 'across all sessions' }
    ]
  }
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
