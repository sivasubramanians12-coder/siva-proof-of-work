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
  return { title: `${c.title} - Siva's Proof-of-Work`, description: c.excerpt };
}

const domainStyles: Record<Domain, { bg: string; color: string }> = {
  OPS:      { bg: 'var(--signal-amber-light)',    color: 'var(--signal-amber)' },
  SALES:    { bg: 'var(--signal-amber-light)',    color: 'var(--signal-amber)' },
  HR:       { bg: 'rgba(58,107,74,0.12)',          color: 'var(--evidence-green)' },
  RAG:      { bg: 'var(--draft-blue-light)',       color: 'var(--draft-blue)' },
  COACHING: { bg: 'rgba(184,66,51,0.08)',          color: 'var(--signal-red)' },
  INFRA:    { bg: 'rgba(26,26,26,0.06)',           color: 'var(--graphite)' },
  FINANCE:  { bg: 'rgba(58,107,74,0.12)',          color: 'var(--evidence-green)' },
  BUILD:    { bg: 'var(--draft-blue-light)',       color: 'var(--draft-blue)' },
  OUTCOME:  { bg: 'rgba(58,107,74,0.1)',           color: 'var(--evidence-green)' },
  TOOL:     { bg: 'rgba(26,26,26,0.06)',           color: 'var(--graphite)' },
};

const statusColors: Record<Status, string> = {
  Live: 'var(--evidence-green)',
  'In Progress': 'var(--signal-amber)',
  Archived: 'var(--pencil)',
};

const label = (color = 'var(--signal-amber)') => ({
  fontFamily: 'var(--type-mono)',
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color,
  marginBottom: '14px',
  display: 'block',
});

const body = {
  fontFamily: 'var(--type-body)',
  fontSize: '16px',
  lineHeight: 1.75,
  color: 'var(--graphite)',
};

export default async function CasePage({ params }: PageProps) {
  const c = await fetchCaseBySlug(params.slug);
  if (!c) notFound();

  const dStyle = domainStyles[c.domain];
  const statusColor = statusColors[c.status];
  const brokenBefore = [
    'Where work stalled',
    'Where information was lost',
    'Where decisions depended on one person',
    'Where the team had no shared view of reality',
  ];

  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <article style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 88px' }}>
        <Link href="/#cases" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '42px' }}>{'<-'} All cases</Link>

        <header style={{ marginBottom: '44px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: dStyle.bg, color: dStyle.color, padding: '3px 8px', borderRadius: '2px' }}>{c.domain}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: statusColor, display: 'inline-block' }} />{c.status}
            </span>
            {c.date && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>{c.date}</span>}
            {c.industry && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)' }}>{c.industry}</span>}
          </div>
          <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(38px, 6vw, 68px)', lineHeight: 0.98, color: 'var(--ink)', marginBottom: '20px' }}>{c.title}</h1>
          <p style={{ ...body, fontSize: '18px', color: 'var(--ink)', maxWidth: '740px' }}>
            {c.excerpt}
          </p>
        </header>

        <div style={{ backgroundColor: 'var(--ink)', borderRadius: '8px', padding: '26px', borderLeft: '8px solid var(--signal-amber)', marginBottom: '56px' }}>
          <span style={label('var(--signal-amber)')}>case standard</span>
          <div style={{ display: 'grid', gap: '18px' }}>
            {[
              ['Operating constraint', c.problem],
              ['System built', c.built],
              ['Proof', c.outcome],
            ].map(([title, copy], index) => (
              <div key={title} style={{ borderLeft: `3px solid ${index === 2 ? 'var(--evidence-green)' : index === 1 ? 'var(--draft-blue)' : 'var(--signal-amber)'}`, paddingLeft: '14px' }}>
                <p style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(242,238,231,0.42)', marginBottom: '5px' }}>{title}</p>
                <p style={{ ...body, color: 'rgba(242,238,231,0.72)', fontSize: '15px' }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          <section>
            <span style={label()}>01 / The Operating Problem</span>
            <p style={{ ...body, fontSize: '17px', color: 'var(--ink)' }}>
              Before the build, the workflow depended on manual process, scattered tools, hidden context, slow approvals, or trapped expertise.
              The practical cost was delay, rework, missing visibility, inconsistent quality, or operator dependence.
            </p>
            {c.context && <p style={{ ...body, marginTop: '18px' }}>{c.context}</p>}
          </section>

          <section>
            <span style={label('var(--signal-red)')}>02 / What Was Broken Before</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '12px' }}>
              {brokenBefore.map((item) => (
                <div key={item} style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '8px', padding: '18px', borderTop: '4px solid var(--signal-amber)' }}>
                  <p style={{ ...body, fontSize: '15px', color: 'var(--ink)' }}>{item}</p>
                </div>
              ))}
            </div>
            {c.challenge && <p style={{ ...body, marginTop: '18px' }}>{c.challenge}</p>}
          </section>

          <section>
            <span style={label('var(--draft-blue)')}>03 / What I Built</span>
            <div style={{ borderLeft: '4px solid var(--draft-blue)', paddingLeft: '20px' }}>
              <p style={{ ...body, fontSize: '17px', color: 'var(--ink)' }}>
                I built this system to make the workflow easier to run, easier to review, and harder to break silently.
              </p>
              <p style={{ ...body, marginTop: '14px' }}>{c.built}</p>
            </div>
          </section>

          <section>
            <span style={label()}>04 / How The Workflow Changed</span>
            <p style={{ ...body, fontSize: '17px', color: 'var(--ink)' }}>
              This changed the operating rhythm from a slower, more manual state to a clearer system with better visibility and review.
              The point was not more software. The point was cleaner execution.
            </p>
          </section>

          <section>
            <span style={label('var(--draft-blue)')}>05 / Architecture</span>
            <p style={body}>
              Architecture, at the operator level, means understanding the moving parts well enough to trust the workflow.
              These were the layers used in this build:
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px' }}>
              {c.stack.map((tech) => (
                <span key={tech} style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--graphite)', backgroundColor: 'rgba(26,26,26,0.06)', padding: '4px 9px', borderRadius: '2px' }}>{tech}</span>
              ))}
            </div>
          </section>

          {c.metrics && c.metrics.length > 0 && (
            <section>
              <span style={label('var(--evidence-green)')}>06 / Proof</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px', padding: '28px', backgroundColor: 'rgba(58,107,74,0.08)', borderRadius: '8px', border: '1px solid rgba(58,107,74,0.16)' }}>
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div style={{ fontFamily: 'var(--type-display)', fontSize: '34px', lineHeight: 1, color: 'var(--ink)', marginBottom: '7px' }}>{m.value}</div>
                    <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pencil)' }}>{m.label}</div>
                    {m.delta && <div style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--evidence-green)', marginTop: '4px' }}>{m.delta}</div>}
                  </div>
                ))}
              </div>
              <p style={{ ...body, marginTop: '18px', color: 'var(--evidence-green)', fontWeight: 600 }}>{c.outcome}</p>
            </section>
          )}

          {c.decisions && c.decisions.length > 0 && (
            <section>
              <span style={label()}>07 / Constraints And Tradeoffs</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {c.decisions.map((d, i) => (
                  <div key={i} style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '8px', padding: '20px 24px' }}>
                    <div style={{ fontFamily: 'var(--type-display)', fontSize: '24px', color: 'var(--ink)', marginBottom: '8px' }}>{d.decision}</div>
                    <div style={{ ...body, fontSize: '14px' }}>{d.rationale}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <span style={label('var(--draft-blue)')}>08 / What I Would Improve Next</span>
            <p style={body}>
              The next version should reduce the remaining manual edge cases, make the review points more visible, and turn usage data into a clearer operating signal.
            </p>
          </section>

          {c.learnings && c.learnings.length > 0 && (
            <section>
              <span style={label()}>09 / Lessons Worth Keeping</span>
              <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {c.learnings.slice(0, 5).map((l, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--signal-amber)', marginTop: '4px', flexShrink: 0 }}>-</span>
                    <span style={{ ...body, fontSize: '15px' }}>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div style={{ marginTop: '68px', paddingTop: '24px', borderTop: '1px solid rgba(26,26,26,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <Link href="/learnings" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', letterSpacing: '0.06em' }}>Read related learnings</Link>
          <Link href="/log" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', letterSpacing: '0.06em' }}>See the build log</Link>
          <Link href="/#cases" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>Back to all cases</Link>
        </div>
      </article>
    </main>
  );
}
