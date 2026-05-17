import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "The Operator Playbook - Siva's Proof-of-Work",
  description:
    'How Siva Subramanian runs work through AI without losing judgment, context, or proof.',
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

const principles = [
  'Business problem first, tool second',
  'Route work before doing work',
  'Save judgment, not noise',
  'Review anything public, sensitive, or strategic',
  'Memory only matters if it changes the next action',
  'Every build should leave behind proof or a reusable lesson',
];

const loop = [
  ['Capture', 'Work starts messy: messages, screenshots, notes, commits, requests.'],
  ['Route', 'Each input needs a route: answer, research, build, schedule, or review.'],
  ['Build', 'Execution happens against a real task, not a vague prompt.'],
  ['Review', 'Public, strategic, and sensitive outputs stop at a checkpoint.'],
  ['Promote', 'Only durable lessons get promoted into memory or documentation.'],
  ['Publish', 'Share the proof, not the private exhaust.'],
];

export default function PlaybookPage() {
  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <section
        style={{
          backgroundColor: 'var(--ink)',
          backgroundImage:
            'linear-gradient(rgba(242,238,231,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(242,238,231,0.045) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '84px 24px 54px',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '30px' }}>Playbook / operating method</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '34px', alignItems: 'end' }}>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: 'clamp(48px, 7vw, 96px)',
                  lineHeight: 0.95,
                  color: 'var(--paper)',
                  maxWidth: '760px',
                  marginBottom: '24px',
                }}
              >
                The Operator Playbook
              </h1>
              <p style={{ ...body, color: 'rgba(242,238,231,0.74)', fontSize: '19px', maxWidth: '680px' }}>
                How I run work through AI without losing judgment, context, or proof.
              </p>
            </div>

            <div style={{ backgroundColor: 'rgba(19,20,23,0.92)', border: '1px solid rgba(242,238,231,0.12)', borderRadius: '8px', padding: '22px' }}>
              <div style={{ backgroundColor: 'var(--paper)', borderRadius: '8px', padding: '24px', borderLeft: '8px solid var(--signal-amber)' }}>
                <p style={{ ...mono, color: 'var(--pencil)', marginBottom: '12px' }}>operator rule</p>
                <p style={{ fontFamily: 'var(--type-display)', fontSize: '34px', lineHeight: 1.08, color: 'var(--ink)' }}>
                  Automate execution, not final judgment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--signal-amber) 0%, var(--signal-amber) 58%, var(--evidence-green) 58%, var(--evidence-green) 78%, var(--draft-blue) 78%, var(--draft-blue) 100%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 92px' }}>
        <SectionHeader number="01" title="Why This Exists" kicker="operator problem" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px', marginBottom: '76px', alignItems: 'start' }}>
          <p style={{ ...body, fontSize: '18px', color: 'var(--ink)' }}>
            The hard part of AI at work is not getting an answer.
            It is keeping work tied to a real operating problem, preserving context across steps, and knowing where human judgment still matters.
          </p>
          <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '26px', borderTop: '4px solid var(--signal-amber)' }}>
            <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '12px' }}>what this prevents</p>
            <p style={{ ...body, color: 'var(--graphite)' }}>
              Polished answers with no owner, no evidence, no review point, and no reusable lesson.
            </p>
          </div>
        </div>

        <SectionHeader number="02" title="Core Principles" kicker="what does not change" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '12px', marginBottom: '76px' }}>
          {principles.map((principle, index) => (
            <div key={principle} style={{ backgroundColor: index === 0 ? 'var(--ink)' : 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '22px', borderTop: `4px solid ${index === 3 ? 'var(--evidence-green)' : index === 4 ? 'var(--draft-blue)' : 'var(--signal-amber)'}` }}>
              <p style={{ ...mono, color: index === 0 ? 'var(--signal-amber)' : 'var(--pencil)', marginBottom: '12px' }}>{String(index + 1).padStart(2, '0')}</p>
              <p style={{ fontFamily: 'var(--type-display)', fontSize: '27px', lineHeight: 1.08, color: index === 0 ? 'var(--paper)' : 'var(--ink)' }}>{principle}</p>
            </div>
          ))}
        </div>

        <SectionHeader number="03" title="The Loop" kicker="capture to publish" />
        <div style={{ backgroundColor: 'var(--ink)', borderRadius: '8px', overflow: 'hidden', marginBottom: '76px' }}>
          {loop.map(([step, copy], index) => (
            <div key={step} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '14px 24px', padding: '24px 30px', borderBottom: index === loop.length - 1 ? 'none' : '1px solid rgba(242,238,231,0.08)', alignItems: 'baseline' }}>
              <p style={{ ...mono, color: step === 'Review' ? 'var(--signal-amber)' : step === 'Promote' ? 'var(--evidence-green)' : 'var(--draft-blue)' }}>{String(index + 1).padStart(2, '0')}</p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '34px', color: 'var(--paper)', lineHeight: 1.05 }}>{step}</h2>
              <p style={{ ...body, color: 'rgba(242,238,231,0.68)', fontSize: '15px' }}>{copy}</p>
            </div>
          ))}
        </div>

        <SectionHeader number="04" title="Memory Standards" kicker="what gets saved" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px', marginBottom: '76px' }}>
          <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '28px', borderTop: '4px solid var(--draft-blue)' }}>
            <p style={{ ...mono, color: 'var(--draft-blue)', marginBottom: '14px' }}>useful memory</p>
            <p style={{ ...body, color: 'var(--ink)', fontSize: '18px' }}>
              Useful memory is source-backed, decision-relevant, safe to reuse, and specific enough to change a future action.
            </p>
          </div>
          <CodePanel />
        </div>

        <SectionHeader number="05" title="What Stays Out" kicker="public boundary" />
        <div style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '76px', borderLeft: '8px solid var(--evidence-green)' }}>
          <p style={{ ...body, fontSize: '18px', color: 'var(--ink)' }}>
            Secrets, private customer detail, stale claims, and vague vibes pretending to be knowledge.
          </p>
        </div>

        <section style={{ borderTop: '1px solid rgba(26,26,26,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ ...body, maxWidth: '680px', fontSize: '18px', color: 'var(--ink)' }}>
            A useful AI operating system is not a pile of chats.
            It is a repeatable way to turn work into decisions, decisions into systems, and systems into proof.
          </p>
          <Link href="/learnings" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.16)', borderRadius: '3px', padding: '10px 16px' }}>
            Read learnings {'->'}
          </Link>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ number, title, kicker }: { number: string; title: string; kicker: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '24px', flexWrap: 'wrap' }}>
      <span style={{ ...mono, color: 'var(--signal-amber)' }}>{number}</span>
      <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(28px, 3.4vw, 46px)', color: 'var(--ink)', lineHeight: 1.06 }}>{title}</h2>
      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>{kicker}</span>
    </div>
  );
}

function CodePanel() {
  const lines = [
    '# memory_standard.md',
    '',
    'keep:',
    '  - source-backed',
    '  - decision-relevant',
    '  - safe to reuse',
    '  - specific enough to change action',
    '',
    'exclude:',
    '  - secrets',
    '  - private customer detail',
    '  - stale claims',
    '  - vague vibes pretending to be knowledge',
  ];

  return (
    <div style={{ backgroundColor: 'var(--ink)', border: '1px solid rgba(45,95,138,0.35)', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ borderBottom: '1px solid rgba(245,242,235,0.08)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ ...mono, color: 'var(--draft-blue)' }}>memory_standard.md</span>
        <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.35)' }}>architecture block</span>
      </div>
      <pre style={{ margin: 0, padding: '22px', overflowX: 'auto', fontFamily: 'var(--type-mono)', fontSize: '12px', lineHeight: 1.85, color: 'rgba(245,242,235,0.72)' }}>
        {lines.join('\n')}
      </pre>
    </div>
  );
}
