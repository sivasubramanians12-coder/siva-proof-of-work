'use client';

import { useState } from 'react';
import type { Prompt, PromptDomain } from './data';

const domainColors: Record<PromptDomain | 'All', { bg: string; color: string }> = {
  All:     { bg: 'var(--ink)',            color: 'var(--paper)' },
  OPS:     { bg: 'rgba(196,132,29,0.12)', color: 'var(--signal-amber)' },
  HR:      { bg: 'rgba(58,107,74,0.12)',  color: 'var(--evidence-green)' },
  SALES:   { bg: 'rgba(196,132,29,0.12)', color: 'var(--signal-amber)' },
  FINANCE: { bg: 'rgba(58,107,74,0.12)',  color: 'var(--evidence-green)' },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} style={{
      fontFamily: 'var(--type-mono)',
      fontSize: '10px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: copied ? 'var(--evidence-green)' : 'transparent',
      color: copied ? '#fff' : 'var(--pencil)',
      border: '1px solid',
      borderColor: copied ? 'var(--evidence-green)' : 'rgba(26,26,26,0.2)',
      borderRadius: '2px',
      padding: '4px 10px',
      cursor: 'pointer',
      transition: 'all 0.15s',
    }}>
      {copied ? 'Copied!' : 'Copy prompt'}
    </button>
  );
}

function PromptCard({ prompt }: { prompt: Prompt }) {
  const [open, setOpen] = useState(false);
  const dc = domainColors[prompt.domain];

  return (
    <div style={{
      border: '1px solid rgba(26,26,26,0.1)',
      borderRadius: '2px',
      background: '#fff',
      overflow: 'hidden',
    }}>
      <div style={{ padding: '28px 28px 24px' }}>
        {/* Domain badge */}
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--type-mono)',
          fontSize: '9px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          background: dc.bg,
          color: dc.color,
          padding: '3px 8px',
          borderRadius: '2px',
          marginBottom: '14px',
        }}>
          {prompt.domain}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--type-display)',
          fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 400,
          color: 'var(--ink)',
          margin: '0 0 10px',
          lineHeight: 1.2,
        }}>
          {prompt.title}
        </h3>

        {/* Problem */}
        <p style={{
          fontFamily: 'var(--type-body)',
          fontSize: '13px',
          fontStyle: 'italic',
          color: 'var(--pencil)',
          margin: '0 0 12px',
          lineHeight: 1.6,
        }}>
          {prompt.problem}
        </p>

        {/* What it does */}
        <p style={{
          fontFamily: 'var(--type-body)',
          fontSize: '14px',
          color: 'var(--ink)',
          margin: '0 0 20px',
          lineHeight: 1.65,
          opacity: 0.8,
        }}>
          {prompt.what_it_does}
        </p>

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'transparent',
            color: 'var(--signal-amber)',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ transform: open ? 'rotate(90deg)' : 'none', display: 'inline-block', transition: 'transform 0.15s' }}>▶</span>
          {open ? 'Hide prompt' : 'View prompt'}
        </button>
      </div>

      {/* Prompt text */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(26,26,26,0.08)',
          background: 'var(--paper)',
          padding: '20px 28px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
            <CopyButton text={prompt.prompt_text} />
          </div>
          <pre style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '12px',
            lineHeight: 1.7,
            color: 'var(--ink)',
            whiteSpace: 'pre-wrap',
            margin: 0,
            opacity: 0.85,
          }}>
            {prompt.prompt_text}
          </pre>
        </div>
      )}
    </div>
  );
}

const DOMAINS: (PromptDomain | 'All')[] = ['All', 'OPS', 'SALES', 'HR', 'FINANCE'];

export default function PromptClient({ prompts }: { prompts: Prompt[] }) {
  const [active, setActive] = useState<PromptDomain | 'All'>('All');

  const filtered = active === 'All' ? prompts : prompts.filter(p => p.domain === active);

  return (
    <div>
      {/* Filter bar */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {DOMAINS.map(d => {
          const isActive = d === active;
          return (
            <button
              key={d}
              onClick={() => setActive(d)}
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: isActive ? 'var(--ink)' : 'transparent',
                color: isActive ? 'var(--paper)' : 'var(--pencil)',
                border: '1px solid',
                borderColor: isActive ? 'var(--ink)' : 'rgba(26,26,26,0.2)',
                borderRadius: '2px',
                padding: '6px 14px',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
        gap: '16px',
      }}>
        {filtered.map(p => <PromptCard key={p.id} prompt={p} />)}
      </div>
    </div>
  );
}
