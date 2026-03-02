const REPO = 'sivasubramanians12-coder/siva-builds';
const BRANCH = 'main';
const RAW = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;

export interface Agent { name: string; role: string; emoji: string; model: string; bound_to: string; description: string; capabilities: string[]; }
export interface Companion { name: string; type: string; emoji: string; stack: string; bound_to: string; description: string; note: string; }
export interface Automation { name: string; schedule: string; description: string; output: string; }
export interface MemoryLayer { layer: string; description: string; location: string; }
export interface Integration { name: string; use: string; }
export interface Skill { name: string; agent: string; description: string; }
export interface StackSetup {
  lastUpdated: string; tagline: string;
  agents: Agent[]; companions?: Companion[]; automations: Automation[];
  memory: MemoryLayer[]; integrations: Integration[]; skills: Skill[];
}
export interface StackLearning { date: string; title: string; excerpt: string; tags: string[]; content: string; }

export async function fetchStackSetup(): Promise<StackSetup> {
  const res = await fetch(`${RAW}/stack/setup.json`, { cache: 'no-store' });
  return res.json();
}

const LEARNING_DATES = ['2026-02-28', '2026-03-01', '2026-03-02'];

export async function fetchStackLearnings(): Promise<StackLearning[]> {
  const entries = await Promise.all(
    LEARNING_DATES.map(async (date) => {
      try {
        const res = await fetch(`${RAW}/stack/learnings/${date}.md`, { cache: 'no-store' });
        if (!res.ok) return null;
        const text = await res.text();
        const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
        const body = fmMatch ? text.slice(fmMatch[0].length).trim() : text.trim();
        const getMeta = (key: string) => { const m = text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm')); return m ? m[1].trim() : ''; };
        const tagsMatch = text.match(/tags:\s*\[(.*?)\]/);
        const tags = tagsMatch ? tagsMatch[1].split(',').map((t) => t.trim().replace(/['"]/g, '')) : [];
        return { date, title: getMeta('title'), excerpt: getMeta('excerpt'), tags, content: body };
      } catch { return null; }
    })
  );
  return (entries.filter(Boolean) as StackLearning[]).sort((a, b) => (a.date > b.date ? -1 : 1));
}
