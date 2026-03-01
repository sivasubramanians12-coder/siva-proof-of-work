export default function Footer() {
  const date = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(26,26,26,0.08)',
        backgroundColor: 'var(--paper)',
        padding: '40px 24px',
        marginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--signal-amber)',
            letterSpacing: '0.12em',
          }}
        >
          BUILD → MEASURE → PROVE
        </p>

        <div
          style={{
            display: 'flex',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <a
            href="https://github.com/sivasubramanians12-coder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              color: 'var(--pencil)',
              letterSpacing: '0.06em',
            }}
          >
            GitHub
          </a>
          <span style={{ color: 'var(--pencil)', fontSize: '11px' }}>·</span>
          <a
            href="https://github.com/sivasubramanians12-coder/siva-builds"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              color: 'var(--pencil)',
              letterSpacing: '0.06em',
            }}
          >
            siva-builds
          </a>
        </div>

        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            color: 'var(--pencil)',
            letterSpacing: '0.04em',
          }}
        >
          Updated {date}
        </p>
      </div>
    </footer>
  );
}
