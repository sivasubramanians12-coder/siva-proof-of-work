import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "OpenClaw Knowledge OS - Siva's Proof-of-Work",
  description:
    'The operating system behind Siva Subramanian: agents, memory, review gates, and a governed Knowledge OS built for real work.',
};

const monoLabel = {
  fontFamily: 'var(--type-mono)',
  fontSize: '10px',
  letterSpacing: '0.16em',
  textTransform: 'uppercase' as const,
};

const bodyCopy = {
  fontFamily: 'var(--type-body)',
  fontSize: '15px',
  lineHeight: 1.75,
  color: 'var(--graphite)',
};

const darkBody = {
  fontFamily: 'var(--type-body)',
  fontSize: '15px',
  lineHeight: 1.75,
  color: 'rgba(245,242,235,0.68)',
};

const agents = [
  ['BarleyBot', 'Orchestrates intake, delegation, memory, status, and quality gates.'],
  ['Coffee', 'Researches before builds so the work starts from evidence, not vibes.'],
  ['Coder', 'Turns approved direction into working software and checks it.'],
  ['Picasso', 'Reviews interface, hierarchy, polish, and brand consistency.'],
  ['TodoBot', 'Keeps the operating queue honest: active, waiting, shipped, blocked.'],
  ['MarketerBot', 'Turns shipped work into public writing without hype.'],
  ['HealthBot', 'Personal performance coach, separate from the work org chain.'],
];

const principles = [
  {
    title: 'Memory is governed, not dumped',
    copy:
      'Daily logs preserve raw context. Durable memory only gets promoted when it is useful across future work. The point is better recall, not a larger pile.',
  },
  {
    title: 'Agents draft; humans approve',
    copy:
      'The system can research, write, code, and recommend. Shipping, publishing, and sensitive judgment still pass through review gates.',
  },
  {
    title: 'Context is infrastructure',
    copy:
      'A good agent setup is less about clever prompts and more about source boundaries, task history, retrieval, permissions, and evidence.',
  },
  {
    title: 'Builds become proof',
    copy:
      'Every useful build should leave behind a case, a log entry, a decision trail, or a reusable pattern. Otherwise the learning evaporates.',
  },
];

const knowledgeLayers = [
  ['Capture', 'Telegram, voice notes, repo commits, reports, daily logs, and operator notes enter the system.'],
  ['Route', 'Memory stays separate from durable knowledge, reports, project docs, and public content drafts.'],
  ['Retrieve', 'QMD semantic search finds prior decisions, project state, and relevant source material before answering.'],
  ['Review', 'Linting, citations, promotion queues, and weekly maintenance catch weak or unsourced knowledge.'],
  ['Apply', 'Agents use the retrieved context to research, build, brief, and publish with less repeated setup.'],
];

export default function StackPage() {
  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '100vh' }}>
      <section
        style={{
          backgroundColor: 'var(--ink)',
          backgroundImage:
            'linear-gradient(rgba(196,132,29,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,132,29,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '84px 24px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(115deg, rgba(45,95,138,0.18) 0%, transparent 38%), radial-gradient(ellipse at top right, rgba(196,132,29,0.14) 0%, transparent 54%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              ...monoLabel,
              color: 'var(--signal-amber)',
              marginBottom: '34px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--signal-amber)', display: 'inline-block' }} />
            OpenClaw + Knowledge OS
          </p>

          <div style={{ maxWidth: '880px', marginBottom: '28px' }}>
            <h1
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(38px, 5.6vw, 76px)',
                lineHeight: 1.04,
                color: 'var(--paper)',
                letterSpacing: '-0.02em',
              }}
            >
              The operator&apos;s AI stack is not a chatbot. It is an operating system.
            </h1>
          </div>

          <p
            style={{
              ...darkBody,
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              maxWidth: '700px',
              marginBottom: '46px',
            }}
          >
            OpenClaw is the control plane. Knowledge OS is the memory discipline around it.
            Together they let one operator run research, build work, review gates, daily logs,
            and public proof-of-work without restarting from zero every morning.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
              borderTop: '1px solid rgba(245,242,235,0.08)',
              paddingTop: '30px',
              paddingBottom: '38px',
              gap: '22px',
            }}
          >
            {[
              ['7', 'specialist agents'],
              ['33', 'scheduled jobs'],
              ['QMD', 'semantic recall'],
              ['Human', 'approval gates'],
            ].map(([value, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--type-display)', fontSize: '36px', color: 'var(--paper)', lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ ...monoLabel, color: 'rgba(245,242,235,0.42)', marginTop: '8px' }}>{label}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(245,242,235,0.06)',
              paddingTop: '20px',
              paddingBottom: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(245,242,235,0.38)', letterSpacing: '0.06em' }}>
              built from live operating work, not a lab demo
            </p>
            <Link
              href="/#cases"
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                color: 'var(--signal-amber)',
                letterSpacing: '0.06em',
                borderBottom: '1px solid rgba(196,132,29,0.45)',
                paddingBottom: '2px',
              }}
            >
              See operating cases
            </Link>
          </div>
        </div>
      </section>

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--signal-amber) 0%, var(--signal-amber) 60%, var(--draft-blue) 60%, var(--draft-blue) 80%, var(--evidence-green) 80%, var(--evidence-green) 100%)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 88px' }}>
        <SectionHeader n="01" title="Why This Exists" kicker="operator problem" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px', alignItems: 'start', marginBottom: '72px' }}>
          <div>
            <p style={{ ...bodyCopy, fontSize: '17px', color: 'var(--ink)', marginBottom: '18px' }}>
              The hard part of AI at work is not asking a model a question. It is getting the
              system to remember what matters, use the right source, hand work to the right agent,
              and stop when a human decision is required.
            </p>
            <p style={bodyCopy}>
              That is the gap OpenClaw is built around. It turns chat into an operating rhythm:
              intake, research, build, design review, content, memory, and daily proof. The
              stack is deliberately personal because the best test environment is the one with
              real pressure and real consequences.
            </p>
          </div>
          <div
            style={{
              backgroundColor: 'var(--white)',
              border: '1px solid rgba(26,26,26,0.1)',
              borderRadius: '4px',
              padding: '24px',
            }}
          >
            <p style={{ ...monoLabel, color: 'var(--signal-amber)', marginBottom: '14px' }}>operating rule</p>
            <p style={{ fontFamily: 'var(--type-display)', fontSize: '28px', lineHeight: 1.18, color: 'var(--ink)' }}>
              If the system cannot preserve context, assign work, and expose evidence, it is not an operating system. It is a clever inbox.
            </p>
          </div>
        </div>

        <SectionHeader n="02" title="The Team Model" kicker="roles before tools" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '14px', marginBottom: '72px' }}>
          {agents.map(([name, copy]) => (
            <article
              key={name}
              style={{
                backgroundColor: 'var(--white)',
                border: '1px solid rgba(26,26,26,0.09)',
                borderRadius: '4px',
                padding: '24px',
                minHeight: '150px',
              }}
            >
              <p style={{ ...monoLabel, color: 'var(--draft-blue)', marginBottom: '12px' }}>{name}</p>
              <p style={bodyCopy}>{copy}</p>
            </article>
          ))}
        </div>

        <SectionHeader n="03" title="Knowledge OS" kicker="memory with standards" />
        <div
          style={{
            backgroundColor: 'var(--ink)',
            backgroundImage:
              'linear-gradient(rgba(45,95,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,95,138,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            borderRadius: '4px',
            overflow: 'hidden',
            marginBottom: '72px',
          }}
        >
          <div style={{ padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
            <div>
              <p style={{ ...monoLabel, color: 'var(--signal-amber)', marginBottom: '16px' }}>not memory as storage</p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(30px, 4vw, 48px)', color: 'var(--paper)', lineHeight: 1.08, marginBottom: '18px' }}>
                Memory only matters when it changes the next action.
              </h2>
              <p style={darkBody}>
                Knowledge OS keeps the agent team honest: what was decided, where it came from,
                whether it is safe to reuse, and which parts are still only working notes.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {knowledgeLayers.map(([layer, copy], index) => (
                <div key={layer} style={{ display: 'grid', gridTemplateColumns: '42px 1fr', gap: '14px', alignItems: 'start' }}>
                  <div style={{ fontFamily: 'var(--type-mono)', color: 'var(--signal-amber)', fontSize: '11px', paddingTop: '4px' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div style={{ borderBottom: '1px solid rgba(245,242,235,0.08)', paddingBottom: '12px' }}>
                    <p style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', color: 'var(--paper)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '5px' }}>{layer}</p>
                    <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.65, color: 'rgba(245,242,235,0.58)' }}>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionHeader n="04" title="Architecture, Translated" kicker="how it works" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px', marginBottom: '72px' }}>
          <CodePanel />
          <div style={{ display: 'grid', gap: '14px' }}>
            {principles.map((item) => (
              <article key={item.title} style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '4px', padding: '22px' }}>
                <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '25px', lineHeight: 1.15, color: 'var(--ink)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={bodyCopy}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <SectionHeader n="05" title="What Changed in the Latest Build" kicker="current state" />
        <div style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '4px', padding: '30px', marginBottom: '72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
            {[
              ['Maintenance chain', 'Weekly signal capture, memory promotion, graph maintenance, retrieval eval, trend check, and lint now run in sequence.'],
              ['Source boundaries', 'Agent-source policy and skill resolver indexes make it clearer which knowledge can be trusted for which job.'],
              ['Retrieval checks', 'QMD smoke tests verify that populated domains answer correctly and empty domains stay visibly empty.'],
              ['Command runners', 'Cron jobs moved toward deterministic scripts where reliable execution matters more than agent improvisation.'],
            ].map(([title, copy]) => (
              <div key={title}>
                <p style={{ ...monoLabel, color: 'var(--evidence-green)', marginBottom: '8px' }}>{title}</p>
                <p style={bodyCopy}>{copy}</p>
              </div>
            ))}
          </div>
        </div>

        <section
          style={{
            borderTop: '1px solid rgba(26,26,26,0.1)',
            paddingTop: '28px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ ...bodyCopy, maxWidth: '620px' }}>
            The public point is not that the stack is complex. It is that serious AI work needs
            memory, review, source discipline, and a visible trail of what actually shipped.
          </p>
          <Link
            href="/log"
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              color: 'var(--ink)',
              letterSpacing: '0.06em',
              border: '1px solid rgba(26,26,26,0.16)',
              borderRadius: '3px',
              padding: '10px 16px',
              whiteSpace: 'nowrap',
            }}
          >
            Read the build log
          </Link>
        </section>
      </div>
    </main>
  );
}

function SectionHeader({ n, title, kicker }: { n: string; title: string; kicker: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '24px', flexWrap: 'wrap' }}>
      <span style={{ ...monoLabel, color: 'var(--signal-amber)' }}>{n}</span>
      <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(27px, 3.2vw, 42px)', color: 'var(--ink)', lineHeight: 1.1 }}>{title}</h2>
      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>{kicker}</span>
    </div>
  );
}

function CodePanel() {
  const lines = [
    ['intake', 'operator sends idea, issue, voice note, or artifact'],
    ['route', 'BarleyBot decides: answer, delegate, schedule, or escalate'],
    ['research', 'Coffee gathers evidence before build decisions'],
    ['build', 'Coder implements against the repo and project context'],
    ['review', 'Siva approves ships and public-facing judgment calls'],
    ['remember', 'Knowledge OS promotes only reusable decisions'],
  ];

  return (
    <div
      style={{
        backgroundColor: 'var(--ink)',
        border: '1px solid rgba(45,95,138,0.35)',
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    >
      <div style={{ borderBottom: '1px solid rgba(245,242,235,0.08)', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
        <span style={{ ...monoLabel, color: 'var(--draft-blue)' }}>operator loop</span>
        <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.35)' }}>plain English architecture</span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: '22px',
          overflowX: 'auto',
          fontFamily: 'var(--type-mono)',
          fontSize: '12px',
          lineHeight: 1.85,
          color: 'rgba(245,242,235,0.72)',
        }}
      >
        {lines.map(([key, value]) => `${key.padEnd(9, ' ')} -> ${value}`).join('\n')}
      </pre>
    </div>
  );
}
