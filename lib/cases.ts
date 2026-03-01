import type { Case } from '@/data/cases';

const CASES_URL =
  'https://raw.githubusercontent.com/sivasubramanians12-coder/siva-builds/main/projects/cases.json';

export async function fetchCases(): Promise<Case[]> {
  try {
    const res = await fetch(CASES_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`GitHub fetch failed: ${res.status}`);
    return res.json();
  } catch (err) {
    console.error('fetchCases failed, falling back to local:', err);
    const { cases } = await import('@/data/cases');
    return cases;
  }
}

export async function fetchCaseBySlug(slug: string): Promise<Case | undefined> {
  const all = await fetchCases();
  return all.find((c) => c.slug === slug);
}
