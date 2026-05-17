import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Learnings - Siva's Proof-of-Work",
  description:
    'Reusable operator lessons from Siva Subramanian on AI systems, memory, review gates, handoffs, and public proof-of-work.',
};

const mono = {
  fontFamily: 'var(--type-mono)',
  fontSize: '10px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
};

const body = {
  fontFamily: 'var(--type-body)',
  fontSize: '15px',
  lineHeight: 1.75,
  color: 'var(--graphite)',
};

const articles = [
  {
    title: 'Memory is only useful when it changes the next action',
    thesis:
      'A saved note is not knowledge. It becomes knowledge only when it helps the next decision happen faster, cleaner, or with better evidence.',
    source: 'Personal AI OS, Knowledge OS, daily wrap work',
  },
  {
    title: 'Review gates are the real operating system',
    thesis:
      'AI can draft, sort, summarize, and build. The leverage comes from knowing exactly where human judgment must interrupt the flow.',
    source: 'OpenClaw, hiring, coaching, public publishing',
  },
  {
    title: 'Routing work matters more than prompting models',
    thesis:
      'Most failures start before the model responds. The input was a build, a reminder, a research task, or a judgment call, and the system treated all of them as chat.',
    source: 'BarleyBot operating loop',
  },
  {
    title: 'Context is the product in agent systems',
    thesis:
      'The model is replaceable. The source boundaries, task history, decisions, ownership, and approval points are what make the system useful.',
    source: 'Command Center and Knowledge OS',
  },
  {
    title: 'What should never enter long-term memory',
    thesis:
      'Secrets, raw customer detail, vague impressions, and stale operational exhaust should not become durable knowledge. Public memory needs a bar.',
    source: 'Public boundary rules',
  },
  {
    title: 'How to publish proof-of-work without leaking sensitive operations',
    thesis:
      'Lead with the operating constraint, the pattern, and the lesson. Strip out names, private details, credentials, and fake precision.',
    source: 'siva.build publishing system',
  },
  {
    title: 'Most AI workflows fail at handoffs, not intelligence',
    thesis:
      'The brittle point is usually between research and build, build and review, or review and public output. Handoffs need structure.',
    source: 'Agent team model',
  },
  {
    title: 'Turning daily build noise into reusable operator knowledge',
    thesis:
      'The log is raw material. The learning layer is where repeated patterns become essays, principles, and reusable operating doctrine.',
    source: 'Build log and cases',
  },
];

export default function LearningsPage() {
  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <section style={{ backgroundColor: 'var(--ink)', padding: '76px 24px 48px', backgroundImage: 'linear-gradient(rgba(242,238,231,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,231,0.045) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '28px' }}>Learnings / reusable essays</p>
          <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(42px, 6vw, 82px)', lineHeight: 0.98, color: 'var(--paper)', maxWidth: '820px', marginBottom: '22px' }}>
            The lessons pulled out of the builds.
          </h1>
          <p style={{ ...body, color: 'rgba(242,238,231,0.72)', fontSize: '18px', maxWidth: '700px' }}>
            Cases prove the work happened. The log proves when it happened. Learnings explain what an operator can reuse.
            This is the layer for LinkedIn readers who want the thinking, not the internal exhaust.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px 88px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '16px', marginBottom: '56px' }}>
          {articles.map((article, index) => (
            <article key={article.title} style={{ backgroundColor: index === 0 ? 'var(--ink)' : 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '26px', borderTop: `4px solid ${index % 3 === 0 ? 'var(--signal-amber)' : index % 3 === 1 ? 'var(--evidence-green)' : 'var(--draft-blue)'}` }}>
              <p style={{ ...mono, color: index === 0 ? 'var(--signal-amber)' : 'var(--pencil)', marginBottom: '14px' }}>
                Essay {String(index + 1).padStart(2, '0')}
              </p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '30px', lineHeight: 1.08, color: index === 0 ? 'var(--paper)' : 'var(--ink)', marginBottom: '14px' }}>
                {article.title}
              </h2>
              <p style={{ ...body, color: index === 0 ? 'rgba(242,238,231,0.7)' : 'var(--graphite)', marginBottom: '18px' }}>
                {article.thesis}
              </p>
              <p style={{ ...mono, color: index === 0 ? 'var(--draft-blue)' : 'var(--signal-amber)' }}>{article.source}</p>
            </article>
          ))}
        </div>

        <section style={{ borderTop: '1px solid rgba(26,26,26,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ ...body, maxWidth: '640px' }}>
            This page is the publishing queue: raw logs and case details become short, opinionated essays only when there is a reusable operating lesson.
          </p>
          <Link href="/stack" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.16)', borderRadius: '3px', padding: '10px 16px' }}>
            Read playbook {'->'}
          </Link>
        </section>
      </div>
    </main>
  );
}
