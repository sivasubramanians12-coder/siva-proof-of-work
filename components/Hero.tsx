const routeItems = [
  ['09:00', 'Operating problem captured', 'source, owner, constraint'],
  ['11:30', 'Agent team assigned', 'research / build / review'],
  ['16:10', 'Knowledge promoted', 'decision survives the session'],
  ['22:30', 'Proof published', 'log, case, or draft'],
];

export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: 'var(--ink)',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        padding: '76px 24px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(110deg, rgba(5,5,6,0.4) 0%, rgba(5,5,6,0.1) 55%, rgba(243,91,42,0.18) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative' }}>
        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(242,238,231,0.62)',
            marginBottom: '38px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <span style={{ width: '28px', height: '1px', backgroundColor: 'var(--signal-amber)', display: 'inline-block' }} />
          Operator&apos;s Proof-of-Work Ledger / V2
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'var(--type-display)',
                fontSize: 'clamp(48px, 7vw, 104px)',
                lineHeight: 0.95,
                color: 'var(--paper)',
                letterSpacing: '-0.01em',
                marginBottom: '28px',
                maxWidth: '760px',
              }}
            >
              Operator systems, mapped in public.
            </h1>

            <div
              style={{
                borderLeft: '3px solid var(--signal-amber)',
                paddingLeft: '18px',
                maxWidth: '630px',
                marginBottom: '38px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--type-body)',
                  fontSize: 'clamp(16px, 1.45vw, 19px)',
                  lineHeight: 1.65,
                  color: 'rgba(242,238,231,0.72)',
                }}
              >
                A business leader with a computer science spine: turning live operating
                problems into AI workflows, review gates, memory systems, and proof that
                survives outside the demo.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(132px, 1fr))',
                gap: '10px',
                maxWidth: '680px',
              }}
            >
              {[
                { value: 'Live', label: 'operating context' },
                { value: '7', label: 'agent team' },
                { value: '14yr', label: 'operator reps' },
                { value: 'Daily', label: 'proof logged' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: 'rgba(19,20,23,0.84)',
                    border: '1px solid rgba(242,238,231,0.1)',
                    borderRadius: '10px',
                    padding: '18px 16px',
                    minHeight: '100px',
                  }}
                >
                  <div style={{ fontFamily: 'var(--type-display)', fontSize: '34px', color: 'var(--paper)', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--type-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'rgba(242,238,231,0.42)',
                      marginTop: '9px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(19,20,23,0.9)',
              border: '1px solid rgba(242,238,231,0.11)',
              borderRadius: '22px',
              padding: '22px',
              boxShadow: '0 28px 80px rgba(0,0,0,0.35)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '18px',
                color: 'rgba(242,238,231,0.42)',
                fontFamily: 'var(--type-mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              <span>OpenClaw route spine</span>
              <span>ready</span>
            </div>

            <div
              style={{
                backgroundColor: 'var(--paper)',
                borderRadius: '18px',
                padding: '24px',
                marginBottom: '14px',
                borderLeft: '8px solid var(--signal-amber)',
              }}
            >
              <p style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--pencil)', marginBottom: '10px' }}>
                next move
              </p>
              <h2 style={{ fontFamily: 'var(--type-display)', fontSize: '36px', lineHeight: 1.02, color: 'var(--ink)', marginBottom: '10px' }}>
                Knowledge OS
              </h2>
              <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', lineHeight: 1.6, color: 'var(--graphite)' }}>
                Convert session debris into reusable decisions, source-backed context, and public proof.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: '14px', alignItems: 'stretch' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'rgba(242,238,231,0.18)' }} />
                {routeItems.map((item, index) => (
                  <span
                    key={item[0]}
                    style={{
                      position: 'absolute',
                      left: index === 0 ? '8px' : '10px',
                      top: `${16 + index * 78}px`,
                      width: index === 0 ? '18px' : '14px',
                      height: index === 0 ? '18px' : '14px',
                      borderRadius: '50%',
                      backgroundColor: index === 1 ? 'var(--signal-amber)' : index === 2 ? 'var(--evidence-green)' : 'var(--paper)',
                      border: '2px solid rgba(5,5,6,0.8)',
                      boxShadow: index === 1 ? '0 0 0 7px rgba(243,91,42,0.2)' : 'none',
                    }}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {routeItems.map(([time, title, meta], index) => (
                  <div
                    key={title}
                    style={{
                      backgroundColor: index === 1 ? 'var(--signal-amber)' : 'rgba(242,238,231,0.06)',
                      color: index === 1 ? 'var(--ink)' : 'var(--paper)',
                      border: '1px solid rgba(242,238,231,0.08)',
                      borderRadius: '14px',
                      padding: '14px 16px',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', opacity: 0.72, marginBottom: '6px' }}>{time}</div>
                    <div style={{ fontFamily: 'var(--type-body)', fontSize: '15px', fontWeight: 600, marginBottom: '2px' }}>{title}</div>
                    <div style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', opacity: 0.62 }}>{meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(242,238,231,0.08)',
            marginTop: '44px',
            paddingTop: '20px',
            paddingBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'rgba(242,238,231,0.38)', letterSpacing: '0.06em' }}>
            Siva Subramanian - operator, builder, Country Head
          </p>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {['BUILD', 'MEASURE', 'PROVE'].map((word, i) => (
              <span
                key={word}
                style={{
                  fontFamily: 'var(--type-mono)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: i === 0 ? 'var(--signal-amber)' : 'rgba(243,91,42,0.48)',
                }}
              >
                {word}
                {i < 2 ? ' ->' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
