export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: 'var(--ink)',
        backgroundImage:
          'linear-gradient(rgba(196,132,29,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,132,29,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        padding: '80px 24px 72px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'flex-end',
          gap: '32px',
        }}
      >
        {/* Left: Main content */}
        <div>
          <p
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--signal-amber)',
              marginBottom: '16px',
            }}
          >
            Proof-of-Work Ledger
          </p>

          <h1
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 1,
              color: 'var(--paper)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            Siva
          </h1>

          <p
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: 'clamp(20px, 3vw, 28px)',
              color: 'var(--signal-amber)',
              marginBottom: '20px',
              fontStyle: 'italic',
            }}
          >
            The business leader who builds.
          </p>

          <p
            style={{
              fontFamily: 'var(--type-body)',
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(245,242,235,0.7)',
              maxWidth: '560px',
            }}
          >
            Country Head, Hunter Douglas India. 14 years across AB InBev,
            Diageo, Nike. Building AI systems to solve the operational problems
            I live with every day.
          </p>
        </div>

        {/* Right: Mantra */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            alignSelf: 'flex-end',
            paddingBottom: '4px',
          }}
        >
          {['BUILD', 'MEASURE', 'PROVE'].map((word, i) => (
            <span
              key={word}
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: i === 0 ? 'var(--signal-amber)' : 'rgba(196,132,29,0.5)',
                display: 'block',
                textAlign: 'right',
              }}
            >
              {i < 2 ? `${word} →` : word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
