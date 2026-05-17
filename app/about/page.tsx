import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About - Siva's Proof-of-Work",
  description:
    'About Siva Subramanian: operator-builder applying AI systems to real business workflows.',
};

const mono = {
  fontFamily: 'var(--type-mono)',
  fontSize: '10px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
};

const body = {
  fontFamily: 'var(--type-body)',
  fontSize: '16px',
  lineHeight: 1.75,
  color: 'var(--graphite)',
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <section style={{ maxWidth: '980px', margin: '0 auto', padding: '76px 24px 88px' }}>
        <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '28px' }}>About / operator-builder</p>
        <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(42px, 6vw, 82px)', lineHeight: 0.98, color: 'var(--ink)', maxWidth: '760px', marginBottom: '24px' }}>
          Business problems first. Tools second.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px', alignItems: 'start' }}>
          <div>
            <p style={{ ...body, fontSize: '18px', color: 'var(--ink)', marginBottom: '18px' }}>
              I run operating teams and build AI systems against the problems I actually manage: sales visibility, hiring bandwidth,
              knowledge trapped in documents, follow-up loops, and the daily loss of context that slows decisions down.
            </p>
            <p style={body}>
              The point of this site is not to present a technology stack. It is to show proof: what was built, what workflow changed,
              what lesson survived, and what another operator could reuse.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--ink)', borderRadius: '8px', padding: '26px', borderLeft: '8px solid var(--signal-amber)' }}>
            <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '14px' }}>public boundary</p>
            <p style={{ fontFamily: 'var(--type-display)', fontSize: '34px', lineHeight: 1.08, color: 'var(--paper)', marginBottom: '14px' }}>
              The work is real. Sensitive detail stays private.
            </p>
            <p style={{ ...body, color: 'rgba(242,238,231,0.7)', fontSize: '15px' }}>
              Cases and learnings are written to preserve the operating lesson without exposing confidential data, credentials,
              customer details, or internal specifics that do not belong on the public web.
            </p>
          </div>
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(26,26,26,0.1)', margin: '64px 0 36px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px' }}>
          {[
            ['Current lens', 'Country head and operator applying AI to live business workflows.'],
            ['Proof format', 'Cases, learnings, playbook, and timestamped build log.'],
            ['What I avoid', 'Hype, vague AI takes, and tool-first storytelling.'],
          ].map(([title, copy]) => (
            <article key={title} style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '22px', borderTop: '4px solid var(--signal-amber)' }}>
              <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '10px' }}>{title}</p>
              <p style={{ ...body, fontSize: '15px' }}>{copy}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '48px' }}>
          <Link href="/#cases" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.16)', borderRadius: '3px', padding: '10px 16px' }}>
            See cases {'->'}
          </Link>
        </div>
      </section>
    </main>
  );
}
