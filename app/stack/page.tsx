import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchStackSetup, fetchStackLearnings } from '@/lib/stack';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Agent Stack — Siva's Proof-of-Work",
  description: 'How I use OpenClaw — agent architecture, automations, memory, and daily learnings.',
};

export default async function StackPage() {
  const [setup, learnings] = await Promise.all([fetchStackSetup(), fetchStackLearnings()]);

  const mono = (color = 'var(--pencil)') => ({
    fontFamily: 'var(--type-mono)', fontSize: '10px',
    letterSpacing: '0.12em', textTransform: 'uppercase' as const, color,
  });
  const sectionTitle = {
    fontFamily: 'var(--type-display)', fontSize: 'clamp(22px, 3vw, 30px)',
    color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '24px',
  };
  const body = { fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.7, color: 'var(--graphite)' };
  const card = {
    backgroundColor: 'var(--white, #fff)', border: '1px solid rgba(26,26,26,0.08)',
    borderRadius: '2px', padding: '20px 24px',
  };
  const divider = { height: '1px', backgroundColor: 'rgba(26,26,26,0.07)', margin: '56px 0' };

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px 80px' }}>

      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <p style={{ ...mono('var(--signal-amber)'), marginBottom: '12px' }}>Agent Stack</p>
        <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05, color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '700px' }}>
          How I use OpenClaw
        </h1>
        <p style={{ ...body, fontSize: '16px', maxWidth: '580px', color: 'var(--graphite)' }}>
          {setup.tagline}
        </p>
        <p style={{ ...mono(), marginTop: '16px' }}>Updated {setup.lastUpdated}</p>
      </div>

      <div style={divider} />

      {/* 01 — Agents */}
      <section style={{ marginBottom: '0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
          <span style={{ ...mono('var(--signal-amber)') }}>01</span>
          <h2 style={sectionTitle}>Agents</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
          {setup.agents.map((a) => (
            <div key={a.name} style={{ ...card, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '20px' }}>{a.emoji}</span>
                <div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>{a.name}</div>
                  <div style={{ ...mono('var(--signal-amber)'), marginTop: '2px' }}>{a.role}</div>
                </div>
              </div>
              <p style={{ ...body, fontSize: '13px' }}>{a.description}</p>
              <div style={{ borderTop: '1px solid rgba(26,26,26,0.06)', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ ...mono(), marginBottom: '6px' }}>Capabilities</div>
                {a.capabilities.map((c) => (
                  <div key={c} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--signal-amber)', fontSize: '10px', marginTop: '2px', flexShrink: 0 }}>▪</span>
                    <span style={{ ...body, fontSize: '12px' }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
                <span style={{ ...mono('var(--draft-blue)'), backgroundColor: 'var(--draft-blue-light)', padding: '3px 8px', borderRadius: '2px' }}>{a.model}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* 02 — Memory */}
      <section>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
          <span style={{ ...mono('var(--signal-amber)') }}>02</span>
          <h2 style={sectionTitle}>Memory Architecture</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {setup.memory.map((m, i) => (
            <div key={m.layer} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '20px 0', borderBottom: i < setup.memory.length - 1 ? '1px solid rgba(26,26,26,0.06)' : 'none' }}>
              <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'var(--signal-amber)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--paper)' }}>{i + 1}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>{m.layer}</div>
                <p style={{ ...body, fontSize: '13px', marginBottom: '6px' }}>{m.description}</p>
                <code style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', backgroundColor: 'rgba(26,26,26,0.04)', padding: '2px 6px', borderRadius: '2px' }}>{m.location}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* 03 — Automations */}
      <section>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '32px' }}>
          <span style={{ ...mono('var(--signal-amber)') }}>03</span>
          <h2 style={sectionTitle}>Automations</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {setup.automations.map((a) => (
            <div key={a.name} style={{ ...card, display: 'grid', gridTemplateColumns: '1fr auto', gap: '16px', alignItems: 'start' }}>
              <div>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{a.name}</div>
                <p style={{ ...body, fontSize: '13px', marginBottom: '8px' }}>{a.description}</p>
                <span style={{ ...mono('var(--evidence-green)'), backgroundColor: 'rgba(58,107,74,0.08)', padding: '2px 8px', borderRadius: '2px' }}>→ {a.output}</span>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', whiteSpace: 'nowrap' }}>{a.schedule}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={divider} />

      {/* 04 — Integrations + Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 380px), 1fr))', gap: '48px' }}>
        <section>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
            <span style={{ ...mono('var(--signal-amber)') }}>04</span>
            <h2 style={{ ...sectionTitle, marginBottom: '0' }}>Integrations</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {setup.integrations.map((int, i) => (
              <div key={int.name} style={{ display: 'flex', gap: '16px', padding: '12px 0', borderBottom: i < setup.integrations.length - 1 ? '1px solid rgba(26,26,26,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--ink)', minWidth: '90px', flexShrink: 0 }}>{int.name}</div>
                <div style={{ ...body, fontSize: '12px' }}>{int.use}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
            <span style={{ ...mono('var(--signal-amber)') }}>05</span>
            <h2 style={{ ...sectionTitle, marginBottom: '0' }}>Skills</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {setup.skills.map((s, i) => (
              <div key={s.name} style={{ padding: '12px 0', borderBottom: i < setup.skills.length - 1 ? '1px solid rgba(26,26,26,0.06)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                  <code style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--ink)' }}>{s.name}</code>
                  <span style={{ ...mono('var(--pencil)') }}>{s.agent}</span>
                </div>
                <p style={{ ...body, fontSize: '12px' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div style={divider} />

      {/* 06 — Learnings log */}
      <section>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span style={{ ...mono('var(--signal-amber)') }}>06</span>
            <h2 style={sectionTitle}>Setup Learnings</h2>
          </div>
          <span style={{ ...mono(), }}>Updated daily</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {learnings.map((l, i) => (
            <div key={l.date} style={{ paddingBottom: '32px', marginBottom: '32px', borderBottom: i < learnings.length - 1 ? '1px solid rgba(26,26,26,0.06)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{ ...mono(), }}>
                  {new Date(l.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </span>
                {l.tags.map((t) => (
                  <span key={t} style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'var(--draft-blue)', backgroundColor: 'var(--draft-blue-light)', padding: '2px 6px', borderRadius: '2px' }}>{t}</span>
                ))}
              </div>
              <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '20px', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '8px' }}>{l.title}</h3>
              <p style={{ ...body, fontSize: '13px', marginBottom: '12px' }}>{l.excerpt}</p>
              <details>
                <summary style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', cursor: 'pointer', letterSpacing: '0.04em', listStyle: 'none' }}>Read full entry →</summary>
                <div style={{ marginTop: '16px', paddingLeft: '16px', borderLeft: '3px solid var(--signal-amber)' }}>
                  {l.content.split('\n').filter((line) => line.trim() && !line.startsWith('#')).map((para, j) => (
                    <p key={j} style={{ ...body, fontSize: '13px', marginBottom: '10px' }}>
                      {para.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
                    </p>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      <div style={{ marginTop: '48px' }}>
        <Link href="/" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>← Back to cases</Link>
      </div>
    </main>
  );
}
