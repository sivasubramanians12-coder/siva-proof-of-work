import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "OpenClaw Knowledge OS - Siva's Proof-of-Work",
  description:
    'How Siva Subramanian turns daily operating work into reusable decisions, build logs, and public proof.',
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
  ['BarleyBot', 'Runs intake, keeps the queue honest, and decides what needs Siva versus what can move.'],
  ['Coffee', 'Turns a loose question into usable research before anyone starts building.'],
  ['Coder', 'Takes approved direction and ships working software in the right repo.'],
  ['Picasso', 'Keeps the interface sharp, legible, and consistent with the point of the page.'],
  ['TodoBot', 'Tracks what is active, waiting, shipped, or blocked so work does not disappear.'],
  ['MarketerBot', 'Turns shipped work into clear public writing: business problem first, tool second.'],
  ['HealthBot', 'Personal performance coach, deliberately outside the work chain.'],
];

const principles = [
  {
    title: 'Save judgment, not noise',
    copy:
      'Raw notes are useful for a day. Durable memory only earns its place when it can change a future decision. The goal is not a bigger archive; it is less repeated thinking.',
  },
  {
    title: 'Draft fast, approve carefully',
    copy:
      'The system can research, write, code, and recommend. Shipping, publishing, and sensitive judgment still need a human checkpoint.',
  },
  {
    title: 'Context is the real product',
    copy:
      'A useful agent setup is not a clever prompt collection. It is a way to preserve sources, ownership, task history, decisions, and evidence.',
  },
  {
    title: 'Every build must leave a trail',
    copy:
      'A shipped tool should leave behind a case, a log entry, a decision trail, or a reusable pattern. Otherwise the learning disappears with the session.',
  },
];

const knowledgeLayers = [
  ['Capture', 'Ideas, messages, commits, reports, voice notes, and daily work enter without pretending they are all equal.'],
  ['Route', 'A quick answer, a research task, a build, a reminder, and a public draft do not belong in the same bucket.'],
  ['Recall', 'Before answering or building, the system looks for prior decisions, project state, and the source that supports it.'],
  ['Review', 'Weak notes, stale claims, and private details are stopped before they become public memory.'],
  ['Apply', 'The useful context comes back into the next build, briefing, status update, or LinkedIn draft.'],
];

const guideSteps = [
  {
    title: '1. Capture the messy input',
    copy:
      'A useful operating system starts where work actually begins: a Telegram message, a half-formed idea, a repo commit, a screenshot, a meeting note, or a late-night correction. Capture first. Do not force polish too early.',
  },
  {
    title: '2. Decide the route',
    copy:
      'Most inputs need one of five routes: answer now, research first, build something, schedule a follow-up, or hold for human judgment. The route matters because it prevents every idea from becoming another open tab.',
  },
  {
    title: '3. Build with a checkpoint',
    copy:
      'The team can draft copy, inspect code, update a page, and run checks. But anything public, strategic, or brand-sensitive gets a review moment. Speed is useful only when the final judgment is still controlled.',
  },
  {
    title: '4. Promote the lesson',
    copy:
      'After the work ships, only the durable lesson gets promoted: what changed, why it mattered, what broke, and what should be reused. That is how a personal AI setup becomes an operating memory instead of a chat archive.',
  },
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
              A field guide for running work through AI without losing the plot.
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
            OpenClaw is the workbench. Knowledge OS is the discipline around it.
            Together they turn daily operating pressure into routed work, checked decisions,
            useful memory, and public proof that does not leak private detail.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
              gap: '22px',
              marginBottom: '34px',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(19,20,23,0.9)',
                border: '1px solid rgba(242,238,231,0.1)',
                borderRadius: '8px',
                padding: '22px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px', marginBottom: '22px' }}>
                <span style={{ ...monoLabel, color: 'rgba(242,238,231,0.45)' }}>system route</span>
                <span style={{ ...monoLabel, color: 'var(--evidence-green)' }}>online</span>
              </div>
              <div
                style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: '8px',
                  padding: '22px',
                  borderLeft: '8px solid var(--signal-amber)',
                  marginBottom: '14px',
                }}
              >
                <p style={{ ...monoLabel, color: 'var(--pencil)', marginBottom: '10px' }}>current build</p>
                <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '34px', lineHeight: 1.02, color: 'var(--ink)', marginBottom: '8px' }}>
                  Knowledge OS
                </h2>
                <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--graphite)' }}>
                  Capture the work, filter the signal, promote only what should steer future decisions.
                </p>
              </div>
              <div style={{ display: 'grid', gap: '10px' }}>
                {['Capture -> Route', 'Retrieve -> Review', 'Apply -> Publish'].map((item, index) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      backgroundColor: index === 1 ? 'var(--signal-amber)' : 'rgba(242,238,231,0.06)',
                      color: index === 1 ? 'var(--ink)' : 'rgba(242,238,231,0.74)',
                      borderRadius: '8px',
                      padding: '12px 14px',
                      fontFamily: 'var(--type-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: index === 2 ? 'var(--evidence-green)' : index === 1 ? 'var(--ink)' : 'var(--paper)',
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(19,20,23,0.9)',
                border: '1px solid rgba(242,238,231,0.1)',
                borderRadius: '8px',
                padding: '22px',
              }}
            >
              <p style={{ ...monoLabel, color: 'rgba(242,238,231,0.45)', marginBottom: '22px' }}>field palette</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', marginBottom: '24px' }}>
                {[
                  ['Black', '#050506'],
                  ['Paper', '#f2eee7'],
                  ['Orange', '#f35b2a'],
                  ['Moss', '#5fa883'],
                  ['Ash', '#55585d'],
                  ['Weather', '#9bb8d4'],
                ].map(([name, color]) => (
                  <div key={name} style={{ backgroundColor: color, minHeight: '64px', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'flex-end' }}>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: color === '#050506' || color === '#55585d' || color === '#f35b2a' ? 'var(--paper)' : 'var(--ink)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: 'var(--paper)', borderRadius: '8px', padding: '20px' }}>
                <p style={{ ...monoLabel, color: 'var(--pencil)', marginBottom: '8px' }}>operator note</p>
                <p style={{ fontFamily: 'var(--type-display)', fontSize: '28px', lineHeight: 1.12, color: 'var(--ink)' }}>
                  Serious AI work needs a map, not a pile of chats.
                </p>
              </div>
            </div>
          </div>

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
              ['7', 'specialist roles'],
              ['33', 'scheduled jobs'],
              ['Past', 'decisions recalled'],
              ['Human', 'ship approvals'],
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
              The hard part of using AI at work is not asking a model a question. It is keeping
              the work tied to a real operating problem, remembering what has already been decided,
              and knowing when to stop for human judgment.
            </p>
            <p style={bodyCopy}>
              That is the gap this setup is built around. It turns daily noise into an operating
              rhythm: capture the issue, route the work, check the output, save the lesson, and
              publish only what is safe and useful. It is deliberately personal because the best
              test environment is live work with real pressure.
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
              If the system cannot preserve context, assign work, and show evidence, it is not an operating system. It is a clever inbox.
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
                Knowledge OS keeps the work honest: what was decided, where it came from,
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

        <SectionHeader n="04" title="Operator Guide" kicker="how to use it" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '14px', marginBottom: '72px' }}>
          {guideSteps.map((item) => (
            <article key={item.title} style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '24px', borderTop: '4px solid var(--signal-amber)' }}>
              <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '26px', lineHeight: 1.12, color: 'var(--ink)', marginBottom: '10px' }}>{item.title}</h3>
              <p style={bodyCopy}>{item.copy}</p>
            </article>
          ))}
        </div>

        <SectionHeader n="05" title="Architecture Note" kicker="markdown block" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px', marginBottom: '72px' }}>
          <CodePanel />
          <div style={{ display: 'grid', gap: '14px' }}>
            {principles.map((item) => (
              <article key={item.title} style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '8px', padding: '22px' }}>
                <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '25px', lineHeight: 1.15, color: 'var(--ink)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={bodyCopy}>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>

        <SectionHeader n="06" title="What Changed in the Latest Build" kicker="current state" />
        <div style={{ backgroundColor: 'var(--white)', border: '1px solid rgba(26,26,26,0.1)', borderRadius: '8px', padding: '30px', marginBottom: '72px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
            {[
              ['Weekly cleanup', 'The system now has a stronger rhythm for capturing useful signal and pruning weak memory.'],
              ['Source boundaries', 'It is clearer which notes can be trusted for which job, and which ones are only working context.'],
              ['Recall checks', 'The setup checks whether past decisions can actually be found when they are needed.'],
              ['Reliable jobs', 'Scheduled work is moving toward scripts where repeatability matters more than improvisation.'],
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
    '# operator_loop.md',
    '',
    'capture:',
    '  accepts: idea | issue | voice_note | repo_commit | screenshot',
    '  rule: keep the raw input, but do not confuse it with truth',
    '',
    'route:',
    '  answer_now: small factual requests',
    '  research: unclear problem or outside evidence needed',
    '  build: approved change in a real repo',
    '  schedule: reminder, follow-up, daily or weekly rhythm',
    '  review: public, strategic, or sensitive decision',
    '',
    'remember:',
    '  promote: reusable decision | source-backed pattern | shipped lesson',
    '  reject: secrets | private customer detail | vague vibes',
    '',
    'publish:',
    '  output: case_note | build_log | linkedin_draft',
    '  principle: business problem first, tool second',
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
        <span style={{ ...monoLabel, color: 'var(--draft-blue)' }}>operator_loop.md</span>
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
        {lines.join('\n')}
      </pre>
    </div>
  );
}
