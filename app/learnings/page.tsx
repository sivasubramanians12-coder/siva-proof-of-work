import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Structured Learnings - Siva's Proof-of-Work",
  description:
    'Reusable ideas from real builds, operating mistakes, and systems that survived contact with actual work.',
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
    title: 'Memory Is Only Useful When It Changes the Next Action',
    blurb:
      'Most people treat memory as storage. The real test is whether it improves the next decision.',
  },
  {
    title: 'Review Gates Are the Real Operating System',
    blurb:
      'Speed without checkpoints creates polished nonsense. The review gate is what keeps quality real.',
  },
  {
    title: 'Routing Work Matters More Than Prompting Models',
    blurb:
      'Most workflow failures happen before generation, not during it.',
  },
  {
    title: 'Context Is the Product in Agent Systems',
    blurb:
      'A model without task history, ownership, and source boundaries is just a clever inbox.',
  },
  {
    title: 'How to Publish Proof-of-Work Without Leaking Sensitive Ops Detail',
    blurb:
      'The public lesson is valuable. The raw operating detail often is not.',
  },
];

export default function LearningsPage() {
  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <section
        style={{
          backgroundColor: 'var(--ink)',
          padding: '76px 24px 52px',
          backgroundImage:
            'linear-gradient(rgba(242,238,231,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,231,0.045) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '28px' }}>Learnings / interpretation layer</p>
          <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(44px, 6vw, 86px)', lineHeight: 0.96, color: 'var(--paper)', maxWidth: '820px', marginBottom: '22px' }}>
            Structured Learnings
          </h1>
          <p style={{ ...body, color: 'rgba(242,238,231,0.74)', fontSize: '18px', maxWidth: '700px' }}>
            Reusable ideas from real builds, operating mistakes, and systems that survived contact with actual work.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '64px 24px 88px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px', alignItems: 'start', marginBottom: '56px' }}>
          <p style={{ ...body, fontSize: '18px', color: 'var(--ink)' }}>
            Cases show what got built. Learnings explain what was actually worth keeping.
          </p>
          <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '24px', borderTop: '4px solid var(--signal-amber)' }}>
            <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '10px' }}>editorial rule</p>
            <p style={body}>
              Publish the reusable idea only after it has shown up in real work.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '16px', marginBottom: '56px' }}>
          {articles.map((article, index) => (
            <article key={article.title} style={{ backgroundColor: index === 0 ? 'var(--ink)' : 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '26px', borderTop: `4px solid ${index % 3 === 0 ? 'var(--signal-amber)' : index % 3 === 1 ? 'var(--evidence-green)' : 'var(--draft-blue)'}` }}>
              <p style={{ ...mono, color: index === 0 ? 'var(--signal-amber)' : 'var(--pencil)', marginBottom: '14px' }}>
                Article {String(index + 1).padStart(2, '0')}
              </p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '30px', lineHeight: 1.08, color: index === 0 ? 'var(--paper)' : 'var(--ink)', marginBottom: '14px' }}>
                {article.title}
              </h2>
              <p style={{ ...body, color: index === 0 ? 'rgba(242,238,231,0.7)' : 'var(--graphite)', marginBottom: '20px' }}>
                {article.blurb}
              </p>
              <span style={{ ...mono, color: index === 0 ? 'var(--draft-blue)' : 'var(--signal-amber)' }}>Read article</span>
            </article>
          ))}
        </div>

        <section style={{ borderTop: '1px solid rgba(26,26,26,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ ...body, maxWidth: '640px' }}>
            This is the layer that turns repeated patterns from cases and logs into public, reusable operator thinking.
          </p>
          <Link href="/playbook" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.16)', borderRadius: '3px', padding: '10px 16px' }}>
            Read playbook {'->'}
          </Link>
        </section>
      </div>
    </main>
  );
}
