import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ backgroundColor: 'var(--paper)', borderBottom: '1px solid rgba(26,26,26,0.08)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
        <Link href="/" style={{ fontFamily: 'var(--type-display)', fontSize: '20px', color: 'var(--ink)', letterSpacing: '-0.01em' }}>
          Siva
        </Link>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {[
            { href: '/#cases', label: 'Cases' },
            { href: '/log', label: 'Log' },
            { href: '/stack', label: 'Stack' },
          ].map(({ href, label }) => (
            <Link key={label} href={href} style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--graphite)' }}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
