export default function Hero() {
  return (
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
      {/* Ambient glow top-right */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40%',
        height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(196,132,29,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '30%',
        height: '60%',
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
          Operator&apos;s Proof-of-Work Ledger
        </p>

        {/* Main headline — problem-first */}
        <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
          <h1 style={{
            fontFamily: 'var(--type-display)',
            fontSize: 'clamp(36px, 5.5vw, 72px)',
            lineHeight: 1.08,
            color: 'var(--paper)',
            letterSpacing: '-0.02em',
            marginBottom: '0',
          }}>
            I build the systems I wish existed while running the business.
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
          A business leader with a computer science spine: turning live operating
          problems into AI workflows, decision systems, and proof that survives
          outside the demo.
        </p>

        {/* Evidence strip */}
        <div style={{
          display: 'flex',
          gap: '0',
          borderTop: '1px solid rgba(245,242,235,0.08)',
          paddingTop: '32px',
          paddingBottom: '40px',
          flexWrap: 'wrap',
        }}>
          {[
            { value: 'Live', label: 'Operating context' },
            { value: '7', label: 'Agent team' },
            { value: '14yr', label: 'Business operations' },
            { value: 'Daily', label: 'Proof logged' },
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
                lineHeight: 1,
                marginBottom: '6px',
              }}>{stat.value}</div>
              <div style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,235,0.4)',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Byline + mantra row */}
        <div style={{
          borderTop: '1px solid rgba(245,242,235,0.06)',
          paddingTop: '20px',
          paddingBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'rgba(245,242,235,0.35)',
            letterSpacing: '0.06em',
          }}>
            Siva Subramanian — operator, builder, Country Head
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {['BUILD', 'MEASURE', 'PROVE'].map((word, i) => (
              <span key={word} style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: i === 0 ? 'var(--signal-amber)' : 'rgba(196,132,29,0.4)',
              }}>
                {word}{i < 2 ? ' →' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
