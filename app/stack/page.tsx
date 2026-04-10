import type { Metadata } from 'next';
import Link from 'next/link';
import { fetchStackSetup, fetchStackLearnings } from '@/lib/stack';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "OpenClaw — Siva's Proof-of-Work",
  description: 'How I use OpenClaw — 7 agents, Command Center orchestration, live automations, memory architecture, and what I learn building a personal AI OS.',
};

export default async function StackPage() {
  const [setup, learnings] = await Promise.all([fetchStackSetup(), fetchStackLearnings()]);

  return (
    <div style={{ backgroundColor: 'var(--ink)', minHeight: '100vh', backgroundImage: 'none' }}>

      {/* Hero — ink bg + amber grid, exactly like Hero.tsx */}
      <section
        style={{
          backgroundColor: 'var(--ink)',
          backgroundImage:
            'linear-gradient(rgba(196,132,29,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,132,29,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          padding: '80px 24px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber glow top-right */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '40%', height: '100%',
          background: 'radial-gradient(ellipse at top right, rgba(196,132,29,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Draft-blue glow bottom-left */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: '30%', height: '60%',
          background: 'radial-gradient(ellipse at bottom left, rgba(45,95,138,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

          {/* Eyebrow */}
          <p style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--signal-amber)',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--signal-amber)', display: 'inline-block' }} />
            OpenClaw · Personal AI OS
          </p>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            backgroundColor: 'rgba(196,132,29,0.1)',
            border: '1px solid rgba(196,132,29,0.25)',
            borderRadius: '2px', padding: '5px 12px', marginBottom: '32px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--evidence-green)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.6)', letterSpacing: '0.1em' }}>
              7 agents running
            </span>
          </div>

          {/* Headline */}
          <div style={{ maxWidth: '820px', marginBottom: '24px' }}>
            <h1 style={{
              fontFamily: 'var(--type-display)',
              fontSize: 'clamp(36px, 5.5vw, 72px)',
              lineHeight: 1.08,
              color: 'var(--paper)',
              letterSpacing: '-0.02em',
              marginBottom: '0',
            }}>
              Building a personal{' '}
              <em style={{ color: 'var(--signal-amber)', fontStyle: 'italic' }}>AI operating system</em>
            </h1>
          </div>

          {/* Sub-headline */}
          <p style={{
            fontFamily: 'var(--type-body)',
            fontSize: 'clamp(15px, 1.5vw, 17px)',
            lineHeight: 1.7,
            color: 'rgba(245,242,235,0.65)',
            maxWidth: '580px',
            marginBottom: '56px',
          }}>
            Not a product demo. Not a tutorial. A live system I use every day to run a 120-person
            business, build software, and compound learning — with OpenClaw as the runtime.
          </p>

          {/* Stats strip */}
          <div style={{
            display: 'flex', gap: '0',
            borderTop: '1px solid rgba(245,242,235,0.08)',
            paddingTop: '32px', paddingBottom: '40px',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '7', label: 'Agents active' },
              { value: '7', label: 'Crons running' },
              { value: '1', label: 'Command Center' },
              { value: 'Live', label: 'Production use' },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                flex: '1 1 140px',
                paddingRight: '32px',
                borderRight: i < 3 ? '1px solid rgba(245,242,235,0.08)' : 'none',
                paddingLeft: i > 0 ? '32px' : '0',
              }}>
                <div style={{
                  fontFamily: 'var(--type-display)',
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  color: 'var(--paper)',
                  lineHeight: 1, marginBottom: '6px',
                }}>{stat.value}</div>
                <div style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '10px', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,242,235,0.4)',
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Byline row */}
          <div style={{
            borderTop: '1px solid rgba(245,242,235,0.06)',
            paddingTop: '20px', paddingBottom: '24px',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '16px',
          }}>
            <p style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(245,242,235,0.35)', letterSpacing: '0.06em' }}>
              openclaw · personal ai os · updated daily
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              {[
                { label: '7 agents active', color: 'var(--evidence-green)' },
                { label: '7 crons', color: 'var(--signal-amber)' },
                { label: 'command center live', color: 'var(--draft-blue)' },
              ].map((s) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: s.color, display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.4)', letterSpacing: '0.06em' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Texture strip */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--signal-amber) 0%, var(--signal-amber) 60%, var(--draft-blue) 60%, var(--draft-blue) 80%, var(--evidence-green) 80%, var(--evidence-green) 100%)' }} />

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 80px' }}>

        {/* 01 — Agents */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="01" label="Agents" sub="who does what" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '16px' }}>
            {setup.agents.map((a) => (
              /* Ink card — same pattern as featured case on homepage */
              <div key={a.name} style={{
                backgroundColor: 'var(--ink)',
                backgroundImage: 'linear-gradient(rgba(196,132,29,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,132,29,0.05) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                borderRadius: '2px', overflow: 'hidden', position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at top right, rgba(196,132,29,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ padding: '32px 40px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--signal-amber)', backgroundColor: 'rgba(196,132,29,0.15)', padding: '3px 8px', borderRadius: '2px' }}>{a.role}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.4)' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--evidence-green)', display: 'inline-block' }} />
                      active
                    </span>
                  </div>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}>{a.emoji}</div>
                  <h3 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(22px, 2.5vw, 30px)', lineHeight: 1.1, color: 'var(--paper)', letterSpacing: '-0.02em', marginBottom: '12px' }}>{a.name}</h3>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(245,242,235,0.6)', marginBottom: '20px' }}>{a.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {a.capabilities.map((c) => (
                      <div key={c} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ fontFamily: 'var(--type-mono)', color: 'var(--draft-blue)', fontSize: '10px', marginTop: '2px', flexShrink: 0 }}>›</span>
                        <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(245,242,235,0.5)' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(245,242,235,0.06)', paddingTop: '16px' }}>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--evidence-green)', fontWeight: 500 }}>✓ {a.bound_to}</span>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(245,242,235,0.25)', letterSpacing: '0.06em' }}>{a.model}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 01a — Command Center */}
        {setup.command_center && (
          <section style={{ marginBottom: '72px' }}>
            <SectionHeader n="01a" label="Command Center" sub="the orchestration platform on top" />
            <div style={{
              backgroundColor: 'var(--ink)',
              backgroundImage: 'linear-gradient(rgba(45,95,138,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,95,138,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              border: '1px solid rgba(45,95,138,0.3)',
              borderRadius: '2px',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', background: 'radial-gradient(ellipse at top right, rgba(45,95,138,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ padding: '40px 44px', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--draft-blue)', backgroundColor: 'rgba(45,95,138,0.15)', padding: '3px 8px', borderRadius: '2px' }}>Orchestration Platform</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.4)' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--evidence-green)', display: 'inline-block' }} />
                    live
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.1, color: 'var(--paper)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
                  {setup.command_center.name}
                </h3>
                <p style={{ fontFamily: 'var(--type-body)', fontSize: '15px', lineHeight: 1.7, color: 'rgba(245,242,235,0.7)', marginBottom: '24px', maxWidth: '700px' }}>
                  {setup.command_center.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '10px', marginBottom: '24px' }}>
                  {setup.command_center.features.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--type-mono)', color: 'var(--signal-amber)', fontSize: '11px', marginTop: '2px', flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', color: 'rgba(245,242,235,0.55)', lineHeight: 1.55 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(245,242,235,0.08)', paddingTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--evidence-green)' }}>✓ {setup.command_center.status}</span>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.3)' }}>{setup.command_center.stack}</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 01b — Companion Bots */}
        {setup.companions && setup.companions.length > 0 && (
          <section style={{ marginBottom: '72px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>also running</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))', gap: '12px' }}>
              {setup.companions.map((c) => (
                <div key={c.name} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed rgba(245,242,235,0.12)',
                  borderRadius: '4px',
                  padding: '24px',
                  position: 'relative',
                }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{c.emoji}</div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '13px', fontWeight: 600, color: 'var(--paper)', marginBottom: '2px' }}>{c.name}</div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--pencil)', marginBottom: '12px' }}>{c.type}</div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.65, color: 'rgba(245,242,235,0.5)', marginBottom: '16px' }}>{c.description}</p>
                  <div style={{ borderTop: '1px solid rgba(245,242,235,0.06)', paddingTop: '12px' }}>
                    <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--pencil)', marginBottom: '4px' }}>{c.stack}</div>
                    <div style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(245,242,235,0.2)', fontStyle: 'italic' }}>{c.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 02 — Memory */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="02" label="Memory Architecture" sub="how context persists" />
          <div style={{ border: '1px solid rgba(245,242,235,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
            {setup.memory.map((m, i) => (
              <div key={m.layer} style={{
                display: 'grid', gridTemplateColumns: '32px 1fr auto',
                gap: '20px', alignItems: 'start',
                padding: '20px 24px',
                borderBottom: i < setup.memory.length - 1 ? '1px solid rgba(245,242,235,0.06)' : 'none',
                backgroundColor: i % 2 === 0 ? 'rgba(245,242,235,0.02)' : 'transparent',
              }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid rgba(45,95,138,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', fontWeight: 700, color: 'var(--draft-blue)' }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--paper)', marginBottom: '4px' }}>{m.layer}</div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.65, color: 'rgba(245,242,235,0.5)' }}>{m.description}</p>
                </div>
                <code style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(196,132,29,0.8)', backgroundColor: 'rgba(196,132,29,0.08)', padding: '3px 8px', borderRadius: '2px', whiteSpace: 'nowrap', alignSelf: 'center' }}>{m.location}</code>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Automations */}
        <section style={{ marginBottom: '72px' }}>
          <SectionHeader n="03" label="Automations" sub="what runs without me" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {setup.automations.map((a) => (
              <div key={a.name} style={{
                display: 'grid', gridTemplateColumns: '1fr auto',
                gap: '24px', alignItems: 'center',
                backgroundColor: 'rgba(245,242,235,0.02)',
                border: '1px solid rgba(245,242,235,0.07)',
                borderRadius: '2px', padding: '18px 24px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--type-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--paper)', marginBottom: '5px' }}>{a.name}</div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.6, color: 'rgba(245,242,235,0.5)', marginBottom: '8px' }}>{a.description}</p>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--evidence-green)', letterSpacing: '0.06em' }}>↳ {a.output}</span>
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
            <SectionHeader n="04" label="Integrations" sub="" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(245,242,235,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
              {setup.integrations.map((int, i) => (
                <div key={int.name} style={{
                  display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px',
                  padding: '12px 16px',
                  borderBottom: i < setup.integrations.length - 1 ? '1px solid rgba(245,242,235,0.05)' : 'none',
                  backgroundColor: i % 2 === 0 ? 'rgba(245,242,235,0.02)' : 'transparent',
                }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--draft-blue)' }}>{int.name}</span>
                  <span style={{ fontFamily: 'var(--type-body)', fontSize: '12px', color: 'rgba(245,242,235,0.45)', lineHeight: 1.5 }}>{int.use}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader n="05" label="Skills" sub="" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid rgba(245,242,235,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
              {setup.skills.map((s, i) => (
                <div key={s.name} style={{
                  padding: '12px 16px',
                  borderBottom: i < setup.skills.length - 1 ? '1px solid rgba(245,242,235,0.05)' : 'none',
                  backgroundColor: i % 2 === 0 ? 'rgba(245,242,235,0.02)' : 'transparent',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <code style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--signal-amber)' }}>{s.name}</code>
                    <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'rgba(245,242,235,0.3)' }}>{s.agent}</span>
                  </div>
                  <p style={{ fontFamily: 'var(--type-body)', fontSize: '12px', color: 'rgba(245,242,235,0.45)', lineHeight: 1.5 }}>{s.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 06 — Learnings */}
        <section>
          <SectionHeader n="06" label="Setup Learnings" sub="what breaks, what works, what's next" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {learnings.map((l, i) => (
              <div key={l.date} style={{ padding: '28px 0', borderBottom: i < learnings.length - 1 ? '1px solid rgba(245,242,235,0.06)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.06em' }}>
                    {new Date(l.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  {l.tags.map((t) => (
                    <span key={t} style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', color: 'var(--draft-blue)', backgroundColor: 'rgba(45,95,138,0.1)', border: '1px solid rgba(45,95,138,0.25)', padding: '2px 7px', borderRadius: '2px' }}>{t}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: 'var(--type-display)', fontSize: '20px', color: 'var(--paper)', letterSpacing: '-0.01em', marginBottom: '8px' }}>{l.title}</h3>
                <p style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.7, color: 'rgba(245,242,235,0.5)', marginBottom: '12px' }}>{l.excerpt}</p>
                <details>
                  <summary style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', cursor: 'pointer', letterSpacing: '0.04em', listStyle: 'none' }}>Read full entry →</summary>
                  <div style={{ marginTop: '16px', paddingLeft: '16px', borderLeft: '2px solid rgba(45,95,138,0.4)' }}>
                    {l.content.split('\n').filter((line) => line.trim() && !line.startsWith('#')).map((para, j) => (
                      <p key={j} style={{ fontFamily: 'var(--type-body)', fontSize: '13px', lineHeight: 1.75, color: 'rgba(245,242,235,0.5)', marginBottom: '10px' }}>
                        {para.replace(/\*\*(.*?)\*\*/g, '$1').replace(/`(.*?)`/g, '$1')}
                      </p>
                    ))}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: '56px', paddingTop: '24px', borderTop: '1px solid rgba(245,242,235,0.06)' }}>
          <Link href="/" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.06em' }}>← Back to cases</Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
      <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{n}</span>
      <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--paper)', letterSpacing: '-0.01em', margin: 0 }}>{label}</h2>
      {sub && <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.3)', letterSpacing: '0.06em' }}>{sub}</span>}
    </div>
  );
}
