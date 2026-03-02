import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchStackSetup, fetchStackLearnings } from '@/lib/stack';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "OpenClaw — Siva's Proof-of-Work",
  description: 'How I use OpenClaw — 3 agents, live automations, memory architecture, and what I learn building a personal AI OS.',
};

export default async function StackPage() {
  const [setup, learnings] = await Promise.all([fetchStackSetup(), fetchStackLearnings()]);

  return (
    <div style={{ backgroundColor: 'var(--ink)', minHeight: '100vh', backgroundImage: 'none' }}>

      {/* Hero — blueprint grid */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #0f1c2e 50%, #0d1117 100%)',
        backgroundImage: 'linear-gradient(rgba(45,95,138,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(45,95,138,0.15) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        padding: '72px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(45,95,138,0.3)',
      }}>
        {/* Glow effects */}
        <div style={{ position: 'absolute', top: '-80px', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(45,95,138,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', right: '15%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(196,132,29,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Terminal badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(45,95,138,0.2)', border: '1px solid rgba(45,95,138,0.4)', borderRadius: '2px', padding: '5px 12px', marginBottom: '32px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3fb950', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(196,220,255,0.7)', letterSpacing: '0.1em' }}>openclaw · 3 agents running</span>
          </div>

          <h1 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(40px, 6vw, 76px)', lineHeight: 1.0, color: '#e6edf3', letterSpacing: '-0.02em', marginBottom: '20px' }}>
            Building a personal<br />
            <em style={{ color: 'var(--signal-amber)', fontStyle: 'italic' }}>AI operating system</em>
          </h1>

          <p style={{ fontFamily: 'var(--type-body)', fontSize: '16px', lineHeight: 1.7, color: 'rgba(230,237,243,0.6)', maxWidth: '520px', marginBottom: '40px' }}>
            Not a product demo. Not a tutorial. A live system I use every day to run a 120-person business, build software, and compound learning — with OpenClaw as the runtime.
          </p>

          {/* Status pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { label: '3 agents active', color: '#3fb950' },
              { label: '4 crons running', color: 'var(--signal-amber)' },
              { label: 'Updates daily', color: '#58a6ff' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', padding: '5px 12px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: s.color, display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(230,237,243,0.6)', letterSpacing: '0.06em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px 80px' }}>

        {/* 01 — Agents */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="01" label="Agents" sub="who does what" dark />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))', gap: '12px' }}>
            {setup.agents.map((a) => (
              <div key={a.name} style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', background: 'radial-gradient(circle at top right, rgba(45,95,138,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{a.emoji}</div>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '14px', fontWeight: 600, color: '#e6edf3', marginBottom: '2px' }}>{a.name}</div>
                <div style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--signal-amber)', marginBottom: '12px' }}>{a.role}</div>
                <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.65, color: 'rgba(230,237,243,0.55)', marginBottom: '16px' }}>{a.description}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '16px' }}>
                  {a.capabilities.map((c) => (
                    <div key={c} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#58a6ff', fontSize: '9px', marginTop: '3px', flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(230,237,243,0.5)' }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(88,166,255,0.7)', letterSpacing: '0.06em' }}>{a.model}</span>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(230,237,243,0.25)' }}>{a.bound_to}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02 — Memory */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="02" label="Memory Architecture" sub="how context persists" dark />
          <div style={{ border: '1px solid rgba(45,95,138,0.3)', borderRadius: '4px', overflow: 'hidden' }}>
            {setup.memory.map((m, i) => (
              <div key={m.layer} style={{ display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: '20px', alignItems: 'start', padding: '20px 24px', borderBottom: i < setup.memory.length - 1 ? '1px solid rgba(45,95,138,0.15)' : 'none', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(45,95,138,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 700, color: '#58a6ff' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: '#e6edf3', marginBottom: '4px' }}>{m.layer}</div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.65, color: 'rgba(230,237,243,0.5)' }}>{m.description}</p>
                </div>
                <code style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(196,132,29,0.8)', backgroundColor: 'rgba(196,132,29,0.08)', padding: '3px 8px', borderRadius: '2px', whiteSpace: 'nowrap', alignSelf: 'center' }}>{m.location}</code>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Automations */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="03" label="Automations" sub="what runs without me" dark />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {setup.automations.map((a) => (
              <div key={a.name} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', padding: '18px 24px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: '#e6edf3', marginBottom: '5px' }}>{a.name}</div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.6, color: 'rgba(230,237,243,0.5)', marginBottom: '8px' }}>{a.description}</p>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(63,185,80,0.8)', letterSpacing: '0.06em' }}>↳ {a.output}</span>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', whiteSpace: 'nowrap', backgroundColor: 'rgba(196,132,29,0.1)', border: '1px solid rgba(196,132,29,0.2)', borderRadius: '2px', padding: '4px 10px' }}>{a.schedule}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 + 05 — Integrations + Skills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,380px),1fr))', gap: '48px', marginBottom: '72px' }}>
          <section>
            <SectionHeader n="04" label="Integrations" sub="" dark />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', overflow: 'hidden' }}>
              {setup.integrations.map((int, i) => (
                <div key={int.name} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', padding: '12px 16px', borderBottom: i < setup.integrations.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: '#58a6ff' }}>{int.name}</span>
                  <span style={{ fontFamily: 'var(--type-body)', fontSize: '12px', color: 'rgba(230,237,243,0.45)', lineHeight: 1.5 }}>{int.use}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader n="05" label="Skills" sub="" dark />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px', overflow: 'hidden' }}>
              {setup.skills.map((s, i) => (
                <div key={s.name} style={{ padding: '12px 16px', borderBottom: i < setup.skills.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <code style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--signal-amber)' }}>{s.name}</code>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(230,237,243,0.3)' }}>{s.agent}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '12px', color: 'rgba(230,237,243,0.45)', lineHeight: 1.5 }}>{s.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 06 — Learnings */}
        <section>
          <SectionHeader n="06" label="Setup Learnings" sub="what breaks, what works, what's next" dark />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {learnings.map((l, i) => (
              <div key={l.date} style={{ padding: '28px 0', borderBottom: i < learnings.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(230,237,243,0.3)', letterSpacing: '0.06em' }}>
                    {new Date(l.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  {l.tags.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: '#58a6ff', backgroundColor: 'rgba(88,166,255,0.1)', border: '1px solid rgba(88,166,255,0.2)', padding: '2px 7px', borderRadius: '2px' }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '20px', color: '#e6edf3', letterSpacing: '-0.01em', marginBottom: '8px' }}>{l.title}</h3>
                <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.7, color: 'rgba(230,237,243,0.5)', marginBottom: '12px' }}>{l.excerpt}</p>
                <details>
                  <summary style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: '#58a6ff', cursor: 'pointer', letterSpacing: '0.04em', listStyle: 'none' }}>Read full entry →</summary>
                  <div style={{ marginTop: '16px', paddingLeft: '16px', borderLeft: '2px solid rgba(45,95,138,0.5)' }}>
                    {l.content.split('\n').filter((line) => line.trim() && !line.startsWith('#')).map((para, j) => (
                      <p key={j} style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.75, color: 'rgba(230,237,243,0.5)', marginBottom: '10px' }}>
                        {para.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(230,237,243,0.3)', letterSpacing: '0.06em' }}>← Back to cases</Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ n, label, sub, dark }: { n: string; label: string; sub: string; dark?: boolean }) {
  const dimColor = dark ? 'rgba(230,237,243,0.25)' : 'var(--pencil)';
  const titleColor = dark ? '#e6edf3' : 'var(--ink)';
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{n}</span>
      <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', color: titleColor, letterSpacing: '-0.01em', margin: 0 }}>{label}</h2>
      {sub && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: dimColor, letterSpacing: '0.06em' }}>{sub}</span>}
    </div>
  );
}
