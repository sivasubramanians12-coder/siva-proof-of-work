import { notFound } from 'next/navigation';
import Link from 'next/link';
import { fetchCases, fetchCaseBySlug } from '@/lib/cases';
import type { Domain, Status } from '@/data/cases';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

interface PageProps { params: { slug: string }; }

export async function generateStaticParams() {
  const cases = await fetchCases();
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const c = await fetchCaseBySlug(params.slug);
  if (!c) return { title: 'Case Not Found' };
  return { title: `${c.title} — Siva's Proof-of-Work`, description: c.excerpt };
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
const sectionLabel = (color = 'var(--signal-amber)') => ({
  fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 600,
  letterSpacing: '0.12em', textTransform: 'uppercase' as const,
  color, marginBottom: '16px', display: 'block',
});
const bodyText = { fontFamily: 'var(--type-body)', fontSize: '16px', lineHeight: 1.75, color: 'var(--graphite)' };

export default async function CasePage({ params }: PageProps) {
  const c = await fetchCaseBySlug(params.slug);
  if (!c) notFound();
  const dStyle = domainStyles[c.domain];
  const statusColor = statusColors[c.status];

  return (
    <main style={{ maxWidth: '760px', margin: '0 auto', padding: '56px 24px 80px' }}>
      <Link href="/#cases" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>← All cases</Link>

      <header style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: dStyle.bg, color: dStyle.color, padding: '3px 8px', borderRadius: '2px' }}>{c.domain}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusColor, display: 'inline-block' }} />{c.status}
          </span>
          {c.date && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>{c.date}</span>}
          {c.industry && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>{c.industry}</span>}
        </div>
        <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.1, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '24px' }}>{c.title}</h1>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {c.stack.map((tech) => (<span key={tech} style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--graphite)', backgroundColor: 'rgba(26,26,26,0.06)', padding: '3px 8px', borderRadius: '2px' }}>{tech}</span>))}
        </div>
      </header>

      <div style={{ height: '1px', backgroundColor: 'rgba(26,26,26,0.08)', marginBottom: '48px' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {c.metrics && c.metrics.length > 0 && (
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '24px', padding: '32px', backgroundColor: 'var(--paper-warm)', borderRadius: '2px', border: '1px solid rgba(26,26,26,0.06)' }}>
            {c.metrics.map((m) => (
              <div key={m.label}>
                <div style={{ fontFamily: 'var(--type-display)', fontSize: '2rem', lineHeight: 1, color: 'var(--ink)', marginBottom: '6px' }}>{m.value}</div>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pencil)' }}>{m.label}</div>
                {m.delta && <div style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--evidence-green)', marginTop: '2px' }}>{m.delta}</div>}
              </div>
            ))}
          </section>
        )}
        {c.context && <section><span style={sectionLabel()}>Context</span><p style={bodyText}>{c.context}</p></section>}
        {c.challenge && <section><span style={sectionLabel('var(--signal-red)')}>The Challenge</span><p style={bodyText}>{c.challenge}</p></section>}
        <section><span style={sectionLabel()}>The Problem</span><p style={bodyText}>{c.problem}</p></section>
        {c.approach && c.approach.length > 0 && (
          <section>
            <span style={sectionLabel('var(--draft-blue)')}>Approach</span>
            <ol style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {c.approach.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--signal-amber)', minWidth: '20px', marginTop: '3px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ ...bodyText, fontSize: '15px' }}>{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}
        <section>
          <span style={sectionLabel('var(--draft-blue)')}>What Was Built</span>
          <div style={{ borderLeft: '3px solid var(--signal-amber)', paddingLeft: '20px' }}><p style={bodyText}>{c.built}</p></div>
        </section>
        {c.decisions && c.decisions.length > 0 && (
          <section>
            <span style={sectionLabel()}>Key Decisions</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {c.decisions.map((d, i) => (
                <div key={i} style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '2px', padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{d.decision}</div>
                  <div style={{ ...bodyText, fontSize: '14px' }}>{d.rationale}</div>
                </div>
              ))}
            </div>
          </section>
        )}
        <section style={{ backgroundColor: 'rgba(58,107,74,0.05)', border: '1px solid rgba(58,107,74,0.15)', borderRadius: '2px', padding: '24px' }}>
          <span style={sectionLabel('var(--evidence-green)')}>Outcome</span>
          <p style={{ fontFamily: 'var(--type-mono)', fontSize: '14px', fontWeight: 500, color: 'var(--evidence-green)', lineHeight: 1.6 }}>✓ {c.outcome}</p>
        </section>
        {c.learnings && c.learnings.length > 0 && (
          <section>
            <span style={sectionLabel()}>Learnings</span>
            <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {c.learnings.map((l, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--signal-amber)', marginTop: '4px', flexShrink: 0 }}>▪</span>
                  <span style={{ ...bodyText, fontSize: '15px' }}>{l}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <div style={{ marginTop: '64px', paddingTop: '24px', borderTop: '1px solid rgba(26,26,26,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/#cases" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>← All cases</Link>
        <Link href="/log" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', letterSpacing: '0.06em' }}>Build log →</Link>
      </div>
    </main>
  );
}
