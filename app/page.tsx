import Hero from '@/components/Hero';
import CaseCard from '@/components/CaseCard';
import { cases } from '@/data/cases';

export default function Home() {
  return (
    <main>
      <Hero />

      <section
        id="cases"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '72px 24px 40px',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--type-display)',
              fontSize: '32px',
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Cases
          </h2>
          <span
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '11px',
              color: 'var(--pencil)',
              letterSpacing: '0.06em',
            }}
          >
            {cases.length} builds documented
          </span>
        </div>

        {/* Cases grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: '24px',
          }}
        >
          {cases.map((c) => (
            <CaseCard key={c.slug} caseData={c} />
          ))}
        </div>
      </section>
    </main>
  );
}
