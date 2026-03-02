import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Metadata } from 'next';
import LogClient from './LogClient';

export const metadata: Metadata = {
  title: "Build Log — Siva's Proof-of-Work",
  description: 'Daily build log — tools, decisions, what broke, what worked.',
};

export interface LogEntry {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  tags: string[];
}

// Auto-extract tags from content — stack names, tools, key topics
const KNOWN_TAGS = [
  'Supabase', 'Next.js', 'FastAPI', 'Flask', 'Pinecone', 'Claude',
  'ElevenLabs', 'OpenAI', 'Telegram', 'Railway', 'Vercel', 'GitHub',
  'Playwright', 'Vitest', 'TypeScript', 'Python', 'React', 'shadcn',
  'RAG', 'RLS', 'Auth', 'Realtime', 'Cascade', 'Webhook',
  'OpenClaw', 'Groq', 'Gemini', 'Whisper', 'Cal.com', 'Resend',
  'Airtable', 'Make.com', 'Obsidian', 'Fireflies',
];

function extractTags(content: string, title: string): string[] {
  const text = `${title} ${content}`;
  return KNOWN_TAGS.filter((tag) =>
    new RegExp(`\\b${tag}\\b`, 'i').test(text)
  );
}

function getLogEntries(): LogEntry[] {
  const logDir = path.join(process.cwd(), 'data', 'log');
  const files = fs.readdirSync(logDir).filter((f) => f.endsWith('.md'));

  const entries = files.map((filename) => {
    const raw = fs.readFileSync(path.join(logDir, filename), 'utf-8');
    const { data, content } = matter(raw);
    const slug = filename.replace('.md', '');
    const title = data.title || 'Untitled';
    return {
      date: data.date ? String(data.date) : slug,
      title,
      excerpt: data.excerpt || content.slice(0, 160) + '…',
      slug,
      content,
      tags: extractTags(content, title),
    };
  });

  // Latest first
  return entries.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function LogPage() {
  const entries = getLogEntries();

  // Build month list from entries
  const months = Array.from(
    new Set(
      entries.map((e) => {
        const d = new Date(e.date);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      })
    )
  ).sort((a, b) => (a > b ? -1 : 1));

  // Build tag frequency list (top tags across all entries)
  const tagCount: Record<string, number> = {};
  entries.forEach((e) => e.tags.forEach((t) => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  const topTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([tag]) => tag);

  return <LogClient entries={entries} months={months} topTags={topTags} />;
}
