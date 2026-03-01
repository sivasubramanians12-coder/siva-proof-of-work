export type Domain = 'OPS' | 'BUILD' | 'OUTCOME' | 'TOOL';
export type Status = 'Live' | 'In Progress' | 'Archived';

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
}

export const cases: Case[] = [
  {
    slug: 'geneva-sales-pipeline',
    title: 'Geneva — Sales Pipeline',
    domain: 'OPS',
    status: 'Live',
    problem:
      'Hunter Douglas India runs two sales divisions through disconnected tools. Pipeline visibility was manual. Leadership reporting required consolidating inputs from multiple people.',
    built:
      'Unified sales pipeline platform — FastAPI + React + Supabase + Railway. Telegram bot for field reps. Role-based dashboards for reps, managers, leadership.',
    outcome: 'Time from field update to leadership visibility: days → hours',
    stack: ['FastAPI', 'React', 'Supabase', 'Telegram', 'Railway'],
    excerpt:
      'Disconnected tools meant leadership visibility required manual consolidation across divisions. Built a unified pipeline platform with role-based dashboards and a Telegram bot for field reps.',
  },
  {
    slug: 'hd-hire-ai-ats',
    title: 'HD Hire — AI Applicant Tracking',
    domain: 'OPS',
    status: 'Live',
    problem:
      'Hiring at a 30-person company is high-stakes and under-resourced. CVs pile up. Feedback gets lost. Good candidates go cold.',
    built:
      'AI-augmented ATS — Claude scores applications, ElevenLabs handles voice screening, candidates self-schedule via Cal.com. Full email automation via Resend.',
    outcome:
      "Consistent, repeatable hiring process that doesn't depend on someone having bandwidth",
    stack: ['Next.js', 'Supabase', 'Claude API', 'ElevenLabs', 'Cal.com'],
    excerpt:
      'At a 30-person company, hiring is high-stakes and under-resourced. Built an AI-augmented ATS where Claude scores applications and ElevenLabs runs voice screening.',
  },
  {
    slug: 'spicescience-rag-app',
    title: 'SpiceScience — RAG Knowledge App',
    domain: 'BUILD',
    status: 'Live',
    problem:
      "A book on spice flavour chemistry — 'The Science of Spice' — contains expert knowledge inaccessible to most cooks.",
    built:
      'Embedded 1,200+ knowledge chunks into Pinecone. Flask API + vanilla JS frontend. Spice Explorer, Custom Blend Creator, Cuisine recommendations.',
    outcome:
      'Domain expertise from a specialist book, accessible via natural language',
    stack: ['Flask', 'Pinecone', 'OpenAI', 'Python'],
    excerpt:
      "Embedded 1,200+ knowledge chunks from 'The Science of Spice' into Pinecone. Built a RAG system with Spice Explorer, Custom Blend Creator, and cuisine recommendations.",
  },
  {
    slug: 'coachos-leadership-ai',
    title: 'CoachOS — Leadership Coach AI System',
    domain: 'BUILD',
    status: 'Live',
    problem:
      'A leadership coach with 30 years of experience: knowledge exists across notes, sessions, frameworks. Every new client starts from scratch.',
    built:
      'AI system on Airtable + Obsidian + Pinecone + Claude. Surfaces institutional knowledge on demand, drafts session prep and follow-ups. Nothing reaches clients without coach approval.',
    outcome: 'Expertise available at scale; coach admin time reduced significantly',
    stack: ['Airtable', 'Obsidian', 'Pinecone', 'Claude API', 'Make.com'],
    excerpt:
      "30 years of coaching expertise buried in notes and sessions. Built an AI system that surfaces institutional knowledge on demand and drafts session prep — nothing reaches clients without approval.",
  },
  {
    slug: 'personal-ai-os',
    title: 'Personal AI OS — Agent Infrastructure',
    domain: 'BUILD',
    status: 'In Progress',
    problem:
      'Running a 30-person business while building AI systems means context-switching constantly. Information gets lost between sessions.',
    built:
      '3-agent system (orchestrator + research + coding). 3-layer memory architecture. Daily digests across 80+ sources. Deep research skill. Voice transcription via Groq Whisper.',
    outcome: 'Active — compounds daily',
    stack: ['OpenClaw', 'Claude', 'Groq', 'Gemini', 'Telegram'],
    excerpt:
      '3-agent system with orchestrator, research, and coding agents. 3-layer memory architecture and daily digests across 80+ sources. Voice transcription via Groq Whisper.',
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}
