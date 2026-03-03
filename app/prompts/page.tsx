export const dynamic = 'force-dynamic';

import PromptClient from './PromptClient';
import { prompts } from './data';

export default function PromptsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'var(--paper)',
      paddingTop: '120px',
      paddingBottom: '80px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'var(--type-mono)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--pencil)',
            marginBottom: '16px',
          }}>
            IV — Prompts
          </div>
          <h1 style={{
            fontFamily: 'var(--type-display)',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 400,
            color: 'var(--ink)',
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}>
            Prompts from the floor
          </h1>
          <p style={{
            fontFamily: 'var(--type-body)',
            fontSize: '16px',
            color: 'var(--pencil)',
            maxWidth: '520px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Operational prompts from real business use. Copy, adapt, run.
          </p>
        </div>

        <PromptClient prompts={prompts} />

      </div>
    </main>
  );
}
