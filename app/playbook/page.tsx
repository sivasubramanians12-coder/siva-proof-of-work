import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Playbook - Siva's Proof-of-Work",
  description:
    'The operator playbook behind Siva Subramanian: how work is captured, routed, reviewed, remembered, and published safely.',
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

const loop = [
  ['Capture', 'A message, idea, screenshot, voice note, repo change, or customer-facing question enters the system.'],
  ['Route', 'It becomes one of five things: answer, research, build, schedule, or hold for judgment.'],
  ['Build', 'A specialist works against a real repo, document, workflow, or public artifact.'],
  ['Review', 'Anything strategic, public, or sensitive stops for human approval.'],
  ['Promote', 'Only the reusable lesson survives: decision, pattern, source, or proof.'],
  ['Publish', 'The public version explains the business problem without leaking private detail.'],
];

const roles = [
  ['01', 'BarleyBot', 'Intake and routing', 'Decides what moves, what waits, and what needs Siva.'],
  ['02', 'Coffee', 'Research', 'Turns a loose question into evidence before a build starts.'],
  ['03', 'Coder', 'Build', 'Ships the approved change in the right codebase.'],
  ['04', 'Picasso', 'Design', 'Keeps the interface legible, authored, and consistent.'],
  ['05', 'MarketerBot', 'Public copy', 'Turns shipped work into business-first writing.'],
  ['06', 'TodoBot', 'Operating queue', 'Tracks active, waiting, blocked, and shipped work.'],
];

const memoryRules = [
  ['Save judgment, not noise', 'A raw transcript is not durable knowledge. Promote only what can change a future decision.'],
  ['Evidence before abstraction', 'A claim needs a source, a build, a commit, a case, or a decision trail behind it.'],
  ['Public boundary', 'No credentials, customer detail, private operating data, or fake specificity goes into public proof.'],
  ['Business first', 'Every page starts with the operating constraint, then explains the system that changed it.'],
];

const proofRows = [
  ['Homepage', 'Cases are the front door', 'Real workflows, shipped systems, concrete lessons.'],
  ['Learnings', 'The teaching layer', 'Reusable essays pulled from cases and logs.'],
  ['Playbook', 'The operating method', 'How work moves from input to proof.'],
  ['Log', 'Timestamped evidence', 'Source material, not the main story.'],
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
          padding: '84px 24px 42px',
        }}
      >
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '30px' }}>Playbook / how the work moves</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '34px', alignItems: 'end' }}>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: 'clamp(44px, 6vw, 86px)',
                  lineHeight: 0.98,
                  color: 'var(--paper)',
                  maxWidth: '780px',
                  marginBottom: '24px',
                }}
              >
                How I turn operating noise into reusable proof.
              </h1>
              <p style={{ ...body, color: 'rgba(242,238,231,0.72)', fontSize: '18px', maxWidth: '680px' }}>
                This is not an org chart and it is not a chatbot tour. It is the operating loop behind the work:
                capture the problem, route it cleanly, build against reality, review the risky parts, preserve the lesson,
                and publish only what is useful outside the room.
              </p>
            </div>

            <TraceArtifact />
          </div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--signal-amber) 0%, var(--signal-amber) 58%, var(--evidence-green) 58%, var(--evidence-green) 78%, var(--draft-blue) 78%, var(--draft-blue) 100%)' }} />

      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '72px 24px 92px' }}>
        <SectionHeader number="01" title="Principles" kicker="what does not change" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '14px', marginBottom: '76px' }}>
          {memoryRules.map(([title, copy], index) => (
            <article key={title} style={{ backgroundColor: index === 0 ? 'var(--ink)' : 'var(--paper-warm)', color: index === 0 ? 'var(--paper)' : 'var(--ink)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '24px', borderTop: `4px solid ${index === 2 ? 'var(--evidence-green)' : index === 1 ? 'var(--draft-blue)' : 'var(--signal-amber)'}` }}>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '28px', lineHeight: 1.1, marginBottom: '12px' }}>{title}</h2>
              <p style={{ ...body, color: index === 0 ? 'rgba(242,238,231,0.72)' : 'var(--graphite)' }}>{copy}</p>
            </article>
          ))}
        </div>

        <SectionHeader number="02" title="The Operator Loop" kicker="one grammar" />
        <div style={{ backgroundColor: 'var(--ink)', borderRadius: '8px', overflow: 'hidden', marginBottom: '76px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '0' }}>
            <div style={{ padding: '34px', borderRight: '1px solid rgba(242,238,231,0.08)' }}>
              <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '16px' }}>diagram spread</p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.04, color: 'var(--paper)', marginBottom: '18px' }}>
                Routing work matters more than prompting models.
              </h2>
              <p style={{ ...body, color: 'rgba(242,238,231,0.68)' }}>
                The valuable move is deciding what kind of work has arrived. A reminder, a build, a research task,
                a public post, and a strategic judgment call need different handling. This loop keeps those lanes separate.
              </p>
            </div>
            <div style={{ padding: '28px 34px' }}>
              {loop.map(([step, copy], index) => (
                <div key={step} style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: '18px', padding: '18px 0', borderBottom: index === loop.length - 1 ? 'none' : '1px solid rgba(242,238,231,0.08)' }}>
                  <div style={{ ...mono, color: step === 'Review' ? 'var(--signal-amber)' : step === 'Promote' ? 'var(--evidence-green)' : 'var(--draft-blue)', paddingTop: '4px' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '28px', color: 'var(--paper)', lineHeight: 1.1, marginBottom: '6px' }}>{step}</h3>
                    <p style={{ ...body, color: 'rgba(242,238,231,0.62)', fontSize: '14px' }}>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionHeader number="03" title="Roles And Review Gates" kicker="workflow ledger" />
        <div style={{ borderTop: '1px solid rgba(26,26,26,0.14)', marginBottom: '76px' }}>
          {roles.map(([n, name, job, copy]) => (
            <div key={name} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))', gap: '12px 18px', padding: '20px 0', borderBottom: '1px solid rgba(26,26,26,0.1)', alignItems: 'baseline' }}>
              <span style={{ ...mono, color: 'var(--signal-amber)' }}>{n}</span>
              <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '28px', color: 'var(--ink)' }}>{name}</h3>
              <p style={{ ...mono, color: 'var(--draft-blue)' }}>{job}</p>
              <p style={body}>{copy}</p>
            </div>
          ))}
        </div>

        <SectionHeader number="04" title="Memory Standards" kicker="what gets promoted" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px', marginBottom: '76px' }}>
          <CodePanel />
          <div style={{ backgroundColor: 'var(--paper-warm)', borderRadius: '8px', padding: '28px', border: '1px solid rgba(26,26,26,0.1)' }}>
            <p style={{ ...mono, color: 'var(--signal-amber)', marginBottom: '14px' }}>plain rule</p>
            <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '40px', lineHeight: 1.05, color: 'var(--ink)', marginBottom: '18px' }}>
              Memory only matters when it changes the next action.
            </h2>
            <p style={body}>
              The system is allowed to keep raw working notes, but public-facing knowledge has a higher bar:
              it needs a source, a decision, a reusable lesson, or a clear proof point. Everything else stays temporary.
            </p>
          </div>
        </div>

        <SectionHeader number="05" title="Proof Ledger" kicker="site architecture" />
        <div style={{ backgroundColor: 'var(--white)', borderRadius: '8px', border: '1px solid rgba(26,26,26,0.1)', overflow: 'hidden', marginBottom: '60px' }}>
          {proofRows.map(([page, role, copy], index) => (
            <div key={page} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: '12px 20px', padding: '20px 24px', borderBottom: index === proofRows.length - 1 ? 'none' : '1px solid rgba(26,26,26,0.08)', alignItems: 'baseline' }}>
              <p style={{ ...mono, color: page === 'Learnings' ? 'var(--evidence-green)' : page === 'Playbook' ? 'var(--signal-amber)' : 'var(--draft-blue)' }}>{page}</p>
              <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '26px', color: 'var(--ink)' }}>{role}</h3>
              <p style={body}>{copy}</p>
            </div>
          ))}
        </div>

        <section style={{ borderTop: '1px solid rgba(26,26,26,0.1)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ ...body, maxWidth: '640px' }}>
            The point is not to make the machinery look complex. The point is to show that real operating work can become
            reusable knowledge without turning private work into public theatre.
          </p>
          <Link href="/learnings" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.16)', borderRadius: '3px', padding: '10px 16px' }}>
            Read learnings {'->'}
          </Link>
        </section>
      </div>
    </main>
  );
}

function TraceArtifact() {
  const rows = [
    ['Input', 'Website critique forwarded from DesignerBot'],
    ['Route', 'Design system correction, not copy polish'],
    ['Action', 'Replace dashboard/cards with field-manual grammar'],
    ['Proof', 'One page, one loop, one public boundary'],
  ];

  return (
    <div style={{ backgroundColor: 'rgba(19,20,23,0.92)', border: '1px solid rgba(242,238,231,0.12)', borderRadius: '8px', padding: '22px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '18px' }}>
        <span style={{ ...mono, color: 'rgba(242,238,231,0.45)' }}>operator trace artifact</span>
        <span style={{ ...mono, color: 'var(--evidence-green)' }}>proof</span>
      </div>
      <div style={{ backgroundColor: 'var(--paper)', borderRadius: '8px', padding: '22px', borderLeft: '8px solid var(--signal-amber)', marginBottom: '12px' }}>
        <p style={{ ...mono, color: 'var(--pencil)', marginBottom: '10px' }}>current decision</p>
        <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '36px', lineHeight: 1.02, color: 'var(--ink)', marginBottom: '10px' }}>
          One dominant visual grammar.
        </h2>
        <p style={{ ...body, fontSize: '14px' }}>
          Editorial field manual with embedded proof artifacts. Orange is action. Green is proof. Blue is context.
        </p>
      </div>
      {rows.map(([label, value]) => (
        <div key={label} style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '12px', padding: '12px 0', borderBottom: '1px solid rgba(242,238,231,0.08)' }}>
          <span style={{ ...mono, color: 'var(--draft-blue)' }}>{label}</span>
          <span style={{ fontFamily: 'var(--type-body)', fontSize: '14px', color: 'rgba(242,238,231,0.72)', lineHeight: 1.5 }}>{value}</span>
        </div>
      ))}
    </div>
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
    '# public_memory_gate.md',
    '',
    'promote_when:',
    '  - decision changes future work',
    '  - source can be named safely',
    '  - lesson applies beyond one task',
    '  - proof exists in case, commit, or log',
    '',
    'reject_when:',
    '  - contains secrets or private detail',
    '  - sounds precise but has no evidence',
    '  - repeats raw operational exhaust',
    '  - teaches the tool before the problem',
  ];

  return (
    <div style={{ backgroundColor: 'var(--ink)', border: '1px solid rgba(45,95,138,0.35)', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ borderBottom: '1px solid rgba(245,242,235,0.08)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ ...mono, color: 'var(--draft-blue)' }}>public_memory_gate.md</span>
        <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.35)' }}>architecture block</span>
      </div>
      <pre style={{ margin: 0, padding: '22px', overflowX: 'auto', fontFamily: 'var(--type-mono)', fontSize: '12px', lineHeight: 1.85, color: 'rgba(245,242,235,0.72)' }}>
        {lines.join('\n')}
      </pre>
    </div>
  );
}
