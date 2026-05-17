'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { LogEntry } from './page';

interface Props {
  entries: LogEntry[];
  months: string[];
  topTags: string[];
}

function formatMonth(ym: string) {
  const [y, m] = ym.split('-');
  return new Date(Number(y), Number(m) - 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

const pill = (active: boolean) => ({
  fontFamily: 'var(--type-mono)',
  fontSize: '10px',
  letterSpacing: '0.06em',
  padding: '4px 10px',
  borderRadius: '2px',
  cursor: 'pointer',
  border: '1px solid',
  borderColor: active ? 'var(--signal-amber)' : 'rgba(26,26,26,0.12)',
  backgroundColor: active ? 'var(--signal-amber)' : 'transparent',
  color: active ? 'var(--paper)' : 'var(--graphite)',
  transition: 'all 0.15s',
  whiteSpace: 'nowrap' as const,
});

export default function LogClient({ entries, months, topTags }: Props) {
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) { next.delete(tag); } else { next.add(tag); }
      return next;
    });
  };

  const filtered = useMemo(() => {
    return entries.filter((e) => {
      const d = new Date(e.date);
      const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      if (activeMonth && ym !== activeMonth) return false;
      if (activeTags.size > 0 && !Array.from(activeTags).every((t) => e.tags.includes(t))) return false;
      return true;
    });
  }, [entries, activeMonth, activeTags]);

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '56px 24px 80px' }}>

      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--signal-amber)', marginBottom: '12px' }}>
          Dated ledger
        </p>
        <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(34px, 5vw, 56px)', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '10px' }}>
          Build Log
        </h1>
        <p style={{ fontFamily: 'var(--type-body)', fontSize: '16px', color: 'var(--graphite)', lineHeight: 1.7, maxWidth: '640px' }}>
          A dated ledger of what shipped, what changed, and what was learned.
          The log is the raw operating trail. It captures sequence, decisions, and change over time.
          It is not the main teaching surface. The cases and learnings are what survive after the noise is filtered out.
        </p>
      </div>

      <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '8px', padding: '22px 24px', marginBottom: '40px', borderTop: '4px solid var(--signal-amber)' }}>
        <p style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--signal-amber)', marginBottom: '12px' }}>
          Editorial filter
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px' }}>
          {[
            ['Give length', 'Real workflow change, later decision, reusable lesson, meaningful failure, or proof that a system is compounding.'],
            ['Keep short', 'Status exhaust, housekeeping without lesson value, or an operational update that is not narratively useful.'],
            ['Relationship', 'Log = what happened. Case = what was built. Learning = what was learned. Playbook = how the system operates.'],
          ].map(([title, copy]) => (
            <div key={title}>
              <p style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pencil)', marginBottom: '6px' }}>{title}</p>
              <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--graphite)' }}>{copy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.06)', borderRadius: '2px', padding: '20px 24px', marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Month filter */}
        <div>
          <p style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pencil)', marginBottom: '8px' }}>Month</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <button style={pill(!activeMonth)} onClick={() => setActiveMonth(null)}>All</button>
            {months.map((m) => (
              <button key={m} style={pill(activeMonth === m)} onClick={() => setActiveMonth(activeMonth === m ? null : m)}>
                {formatMonth(m)}
              </button>
            ))}
          </div>
        </div>

        {/* Tag filter */}
        <div>
          <p style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pencil)', marginBottom: '8px' }}>Topics & Tools</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {topTags.map((tag) => (
              <button key={tag} style={pill(activeTags.has(tag))} onClick={() => toggleTag(tag)}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Active filter summary */}
        {(activeMonth || activeTags.size > 0) && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>
              {filtered.length} {filtered.length === 1 ? 'entry' : 'entries'}
            </span>
            <button
              onClick={() => { setActiveMonth(null); setActiveTags(new Set()); }}
              style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              Clear filters ×
            </button>
          </div>
        )}
      </div>

      <div style={{ height: '1px', backgroundColor: 'rgba(26,26,26,0.08)', marginBottom: '40px' }} />

      {/* Entries */}
      {filtered.length === 0 ? (
        <p style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', color: 'var(--pencil)', textAlign: 'center', padding: '40px 0' }}>No entries match — try clearing a filter.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filtered.map((entry, i) => (
            <div key={entry.slug} style={{ paddingBottom: '36px', marginBottom: '36px', borderBottom: i === filtered.length - 1 ? 'none' : '1px solid rgba(26,26,26,0.06)' }}>

              {/* Date + tags row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>{formatDate(entry.date)}</span>
                {entry.tags.slice(0, 4).map((tag) => (
                  <span key={tag} style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.06em', color: 'var(--draft-blue)', backgroundColor: 'var(--draft-blue-light)', padding: '2px 6px', borderRadius: '2px', cursor: 'pointer' }} onClick={() => toggleTag(tag)}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Headline */}
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '22px', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '10px' }}>
                {entry.title}
              </h2>

              {/* Takeaway */}
              <p style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--signal-amber)', marginBottom: '6px' }}>
                One strong sentence
              </p>
              <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.7, color: 'var(--graphite)', marginBottom: '16px' }}>
                {entry.excerpt}
              </p>

              {/* Expand */}
              <details>
                <summary style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', cursor: 'pointer', letterSpacing: '0.04em', listStyle: 'none' }}>
                  Read full entry →
                </summary>
                <div style={{ marginTop: '20px', paddingLeft: '16px', borderLeft: '3px solid var(--signal-amber)' }}>
                  {entry.content
                    .split('\n')
                    .filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('---'))
                    .map((para, j) => (
                      <p key={j} style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.75, color: 'var(--graphite)', marginBottom: '12px' }}>
                        {para.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
                      </p>
                    ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '48px' }}>
        <Link href="/" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>← Back to cases</Link>
      </div>
    </main>
  );
}
