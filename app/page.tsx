import Link from 'next/link';
import Hero from '@/components/Hero';
import CaseCard from '@/components/CaseCard';
import { fetchCases } from '@/lib/cases';

export const dynamic = 'force-dynamic'; // ISR — rebuild every hour max

export default async function Home() {
  const cases = await fetchCases();
  const featured = cases[0];
  const rest = cases.slice(1);

  return (
    <main>
      <Hero />

      <div style={{ height: '4px', background: 'linear-gradient(90deg, var(--signal-amber) 0%, var(--signal-amber) 60%, var(--draft-blue) 60%, var(--draft-blue) 80%, var(--evidence-green) 80%, var(--evidence-green) 100%)' }} />

      <section id="cases" style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 80px' }}>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>01</span>
            <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--ink)', letterSpacing: '-0.01em' }}>Cases</h2>
            <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>{cases.length} documented</span>
          </div>
          <Link href="/log" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--draft-blue)', letterSpacing: '0.06em', borderBottom: '1px solid var(--draft-blue)', paddingBottom: '1px' }}>
            Build log →
          </Link>
        </div>

        {/* Featured */}
        <Link href={`/cases/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
          <div style={{ backgroundColor: 'var(--ink)', borderRadius: '2px', overflow: 'hidden', backgroundImage: 'linear-gradient(rgba(196,132,29,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,132,29,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(ellipse at top right, rgba(196,132,29,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ padding: '40px 48px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--signal-amber)', backgroundColor: 'rgba(196,132,29,0.15)', padding: '3px 8px', borderRadius: '2px' }}>{featured.domain}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.4)' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--evidence-green)', display: 'inline-block' }} />
                  {featured.status}
                </span>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'rgba(245,242,235,0.25)', marginLeft: 'auto' }}>Featured</span>
              </div>
              <h3 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.1, color: 'var(--paper)', letterSpacing: '-0.02em', marginBottom: '16px', maxWidth: '600px' }}>{featured.title}</h3>
              <p style={{ fontFamily: 'var(--type-body)', fontSize: '15px', lineHeight: 1.7, color: 'rgba(245,242,235,0.6)', maxWidth: '560px', marginBottom: '28px' }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--evidence-green)', fontWeight: 500 }}>✓ {featured.outcome}</span>
                <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--signal-amber)', letterSpacing: '0.06em', borderBottom: '1px solid rgba(196,132,29,0.4)', paddingBottom: '1px' }}>Read case →</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))', gap: '16px' }}>
          {rest.map((c) => (<CaseCard key={c.slug} caseData={c} />))}
        </div>

        <div style={{ height: '1px', backgroundColor: 'rgba(26,26,26,0.08)', margin: '64px 0 48px' }} />

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
          <span style={{ fontFamily: 'var(--type-mono)', fontSize: '10px', color: 'var(--signal-amber)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>02</span>
          <h2 style={{ fontFamily: 'var(--type-display)', fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--ink)', letterSpacing: '-0.01em' }}>Build Log</h2>
          <span style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--pencil)', letterSpacing: '0.06em' }}>tools, decisions, what broke</span>
        </div>
        <div style={{ backgroundColor: 'var(--paper-warm)', border: '1px solid rgba(26,26,26,0.06)', borderRadius: '2px', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'var(--type-body)', fontSize: '14px', color: 'var(--graphite)', lineHeight: 1.6, maxWidth: '500px' }}>Implementation notes, benchmark results, integration gotchas. The tools-and-tech counterpart to the cases above.</p>
          <Link href="/log" style={{ fontFamily: 'var(--type-mono)', fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '2px', padding: '8px 16px', whiteSpace: 'nowrap' }}>View log →</Link>
        </div>
      </section>
    </main>
  );
}
