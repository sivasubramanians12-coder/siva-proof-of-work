import Link from 'next/link';
import type { Case, Domain, Status } from '@/data/cases';

const domainStyles: Record<Domain, { bg: string; color: string }> = {
  OPS:      { bg: 'var(--signal-amber-light)',    color: 'var(--signal-amber)' },
  SALES:    { bg: 'var(--signal-amber-light)',    color: 'var(--signal-amber)' },
  HR:       { bg: 'rgba(58,107,74,0.12)',          color: 'var(--evidence-green)' },
  RAG:      { bg: 'var(--draft-blue-light)',       color: 'var(--draft-blue)' },
  COACHING: { bg: 'rgba(184,66,51,0.08)',          color: 'var(--signal-red)' },
  INFRA:    { bg: 'rgba(26,26,26,0.06)',           color: 'var(--graphite)' },
  FINANCE:  { bg: 'rgba(58,107,74,0.12)',          color: 'var(--evidence-green)' },
  BUILD:    { bg: 'var(--draft-blue-light)',       color: 'var(--draft-blue)' },
  OUTCOME:  { bg: 'rgba(58,107,74,0.1)',           color: 'var(--evidence-green)' },
  TOOL:     { bg: 'rgba(26,26,26,0.06)',           color: 'var(--graphite)' },
};

const statusColors: Record<Status, string> = {
  Live: 'var(--evidence-green)',
  'In Progress': 'var(--signal-amber)',
  Archived: 'var(--pencil)',
};

interface CaseCardProps {
  caseData: Case;
}

export default function CaseCard({ caseData }: CaseCardProps) {
  const { title, domain, status, excerpt, outcome, stack, slug } = caseData;
  const dStyle = domainStyles[domain];
  const statusColor = statusColors[status];

  return (
    <article
      style={{
        backgroundColor: 'var(--white)',
        border: '1px solid rgba(26,26,26,0.1)',
        borderRadius: '2px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Domain tag */}
          <span
            style={{
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backgroundColor: dStyle.bg,
              color: dStyle.color,
              padding: '3px 8px',
              borderRadius: '2px',
            }}
          >
            {domain}
          </span>

          {/* Status dot + label */}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--type-mono)',
              fontSize: '10px',
              color: 'var(--pencil)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: statusColor,
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {status}
          </span>
        </div>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--type-display)',
          fontSize: '22px',
          lineHeight: 1.2,
          color: 'var(--ink)',
          letterSpacing: '-0.01em',
          marginTop: '-8px',
        }}
      >
        {title}
      </h2>

      {/* Meta grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          borderTop: '1px solid rgba(26,26,26,0.06)',
          borderBottom: '1px solid rgba(26,26,26,0.06)',
          padding: '12px 0',
        }}
      >
        {[
          { label: 'Domain', value: domain },
          { label: 'Status', value: status },
          { label: 'Built', value: stack[0] + (stack.length > 1 ? ` +${stack.length - 1}` : '') },
        ].map(({ label, value }) => (
          <div key={label}>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--pencil)',
                marginBottom: '4px',
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontFamily: 'var(--type-mono)',
                fontSize: '11px',
                color: 'var(--graphite)',
                fontWeight: 500,
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Excerpt */}
      <div
        style={{
          borderLeft: '3px solid var(--signal-amber)',
          paddingLeft: '14px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--type-body)',
            fontSize: '14px',
            lineHeight: 1.65,
            color: 'var(--graphite)',
          }}
        >
          {excerpt}
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            color: 'var(--evidence-green)',
            fontWeight: 500,
            maxWidth: '340px',
            lineHeight: 1.5,
          }}
        >
          ✓ {outcome}
        </p>

        <Link
          href={`/cases/${slug}`}
          style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--draft-blue)',
            letterSpacing: '0.04em',
            flexShrink: 0,
          }}
        >
          Read case →
        </Link>
      </div>
    </article>
  );
}
