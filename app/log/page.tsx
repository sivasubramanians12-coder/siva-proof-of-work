import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Build Log — Siva's Proof-of-Work",
  description: 'Chronological daily build log — what was worked on and what was learned.',
};

interface LogEntry {
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
}

function getLogEntries(): LogEntry[] {
  const logDir = path.join(process.cwd(), 'data', 'log');
  const files = fs.readdirSync(logDir).filter((f) => f.endsWith('.md'));

  const entries = files.map((filename) => {
    const filePath = path.join(logDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const slug = filename.replace('.md', '');

    return {
      date: data.date ? String(data.date) : slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || content.slice(0, 120) + '…',
      slug,
      content,
    };
  });

  // Sort descending by date
  entries.sort((a, b) => (a.date > b.date ? -1 : 1));
  return entries;
}

export default function LogPage() {
  const entries = getLogEntries();

  return (
    <main
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '56px 24px 80px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--signal-amber)',
            marginBottom: '12px',
          }}
        >
          Daily build log
        </p>
        <h1
          style={{
            fontFamily: 'var(--type-display)',
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--ink)',
            letterSpacing: '-0.01em',
            marginBottom: '12px',
          }}
        >
          Log
        </h1>
        <p
          style={{
            fontFamily: 'var(--type-body)',
            fontSize: '14px',
            color: 'var(--pencil)',
            lineHeight: 1.6,
          }}
        >
          Chronological record of what was built, what broke, and what was learned.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(26,26,26,0.08)',
          marginBottom: '48px',
        }}
      />

      {/* Entries */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {entries.map((entry, index) => (
          <LogEntryRow key={entry.slug} entry={entry} isLast={index === entries.length - 1} />
        ))}
      </div>

      {/* Back link */}
      <div style={{ marginTop: '56px' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'var(--pencil)',
            letterSpacing: '0.06em',
          }}
        >
          ← Back to cases
        </Link>
      </div>
    </main>
  );
}

function LogEntryRow({
  entry,
  isLast,
}: {
  entry: LogEntry;
  isLast: boolean;
}) {
  const dateObj = new Date(entry.date);
  const displayDate = dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Parse content paragraphs (skip the h1 line)
  const paragraphs = entry.content
    .split('\n')
    .filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))
    .slice(0, 3);

  return (
    <div
      style={{
        paddingBottom: '40px',
        marginBottom: '40px',
        borderBottom: isLast ? 'none' : '1px solid rgba(26,26,26,0.06)',
      }}
    >
      {/* Date */}
      <p
        style={{
          fontFamily: 'var(--type-mono)',
          fontSize: '11px',
          color: 'var(--pencil)',
          letterSpacing: '0.06em',
          marginBottom: '10px',
        }}
      >
        {displayDate}
      </p>

      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--type-display)',
          fontSize: '22px',
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
          marginBottom: '12px',
        }}
      >
        {entry.title}
      </h2>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: 'var(--type-body)',
          fontSize: '14px',
          lineHeight: 1.7,
          color: 'var(--graphite)',
          marginBottom: '16px',
        }}
      >
        {entry.excerpt}
      </p>

      {/* Expanded content */}
      <details>
        <summary
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'var(--draft-blue)',
            cursor: 'pointer',
            letterSpacing: '0.04em',
            listStyle: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          Read full entry →
        </summary>
        <div
          style={{
            marginTop: '20px',
            paddingLeft: '16px',
            borderLeft: '3px solid var(--signal-amber)',
          }}
        >
          {paragraphs.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'var(--graphite)',
                marginBottom: '12px',
              }}
            >
              {para.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
            </p>
          ))}
        </div>
      </details>
    </div>
  );
}
