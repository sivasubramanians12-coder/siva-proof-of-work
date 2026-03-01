import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cases, getCaseBySlug, type Domain, type Status } from '@/data/cases';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const c = getCaseBySlug(params.slug);
  if (!c) return { title: 'Case Not Found' };
  return {
    title: `${c.title} — Siva's Proof-of-Work`,
    description: c.excerpt,
  };
}

const domainStyles: Record<Domain, { bg: string; color: string }> = {
  OPS: { bg: 'var(--signal-amber-light)', color: 'var(--signal-amber)' },
  BUILD: { bg: 'var(--draft-blue-light)', color: 'var(--draft-blue)' },
  OUTCOME: { bg: 'rgba(58,107,74,0.1)', color: 'var(--evidence-green)' },
  TOOL: { bg: 'rgba(26,26,26,0.06)', color: 'var(--graphite)' },
};

const statusColors: Record<Status, string> = {
  Live: 'var(--evidence-green)',
  'In Progress': 'var(--signal-amber)',
  Archived: 'var(--pencil)',
};

export default function CasePage({ params }: PageProps) {
  const c = getCaseBySlug(params.slug);
  if (!c) notFound();

  const dStyle = domainStyles[c.domain];
  const statusColor = statusColors[c.status];

  return (
    <main
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '56px 24px 80px',
      }}
    >
      {/* Back link */}
      <Link
        href="/#cases"
        style={{
          fontFamily: 'var(--type-mono)',
          fontSize: '11px',
          color: 'var(--pencil)',
          letterSpacing: '0.06em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          marginBottom: '40px',
        }}
      >
        ← All cases
      </Link>

      {/* Header */}
      <header style={{ marginBottom: '48px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backgroundColor: dStyle.bg,
              color: dStyle.color,
              padding: '3px 8px',
              borderRadius: '2px',
            }}
          >
            {c.domain}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              color: 'var(--pencil)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: statusColor,
                display: 'inline-block',
              }}
            />
            {c.status}
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--type-display)',
            fontSize: 'clamp(32px, 5vw, 48px)',
            lineHeight: 1.1,
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          {c.title}
        </h1>

        {/* Stack pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {c.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                color: 'var(--graphite)',
                backgroundColor: 'rgba(26,26,26,0.06)',
                padding: '3px 8px',
                borderRadius: '2px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          backgroundColor: 'rgba(26,26,26,0.08)',
          marginBottom: '48px',
        }}
      />

      {/* Content sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Problem */}
        <section>
          <h2
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--signal-amber)',
              marginBottom: '16px',
            }}
          >
            The Problem
          </h2>
          <p
            style={{
              fontFamily: 'var(--type-body)',
              fontSize: '16px',
              lineHeight: 1.75,
              color: 'var(--graphite)',
            }}
          >
            {c.problem}
          </p>
        </section>

        {/* What was built */}
        <section>
          <h2
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--draft-blue)',
              marginBottom: '16px',
            }}
          >
            What Was Built
          </h2>
          <div
            style={{
              borderLeft: '3px solid var(--signal-amber)',
              paddingLeft: '20px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--type-body)',
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--graphite)',
              }}
            >
              {c.built}
            </p>
          </div>
        </section>

        {/* Outcome */}
        <section
          style={{
            backgroundColor: 'rgba(58,107,74,0.05)',
            border: '1px solid rgba(58,107,74,0.15)',
            borderRadius: '2px',
            padding: '24px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--evidence-green)',
              marginBottom: '12px',
            }}
          >
            Outcome
          </h2>
          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--evidence-green)',
              lineHeight: 1.6,
            }}
          >
            ✓ {c.outcome}
          </p>
        </section>
      </div>

      {/* Footer nav */}
      <div
        style={{
          marginTop: '64px',
          paddingTop: '24px',
          borderTop: '1px solid rgba(26,26,26,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/#cases"
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'var(--pencil)',
            letterSpacing: '0.06em',
          }}
        >
          ← All cases
        </Link>
        <Link
          href="/log"
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'var(--draft-blue)',
            letterSpacing: '0.06em',
          }}
        >
          Build log →
        </Link>
      </div>
    </main>
  );
}
