export type PromptDomain = 'OPS' | 'HR' | 'SALES' | 'FINANCE';

export interface Prompt {
  id: string;
  title: string;
  domain: PromptDomain;
  problem: string;
  what_it_does: string;
  prompt_text: string;
  tags: string[];
}

export const prompts: Prompt[] = [
  {
    id: 'order-classifier',
    title: 'Order Age & Risk Classifier',
    domain: 'OPS',
    problem: 'Open orders pile up with no visibility on which ones are about to breach SLA.',
    what_it_does: 'Paste a list of open orders with dates. Returns each flagged as on-track, at-risk, or breached — with a one-line reason.',
    prompt_text: `You are an operations analyst. I will give you open orders with their order date and current status. Classify each as:
- ON-TRACK: under 12 days old
- AT-RISK: 12–16 days old
- BREACHED: over 17 days old

Also flag any order stuck in the same status for more than 5 days.
Format: Order ID | Days open | Flag | Reason (one line)

[PASTE ORDERS HERE]`,
    tags: ['operations', 'SLA', 'orders'],
  },
  {
    id: 'jd-generator',
    title: 'Job Description Generator',
    domain: 'HR',
    problem: 'Writing JDs from scratch takes hours and they all sound generic.',
    what_it_does: 'Give it a role title + 3–5 bullets on what the person actually does. Returns a full JD in plain English.',
    prompt_text: `Write a job description for a [ROLE TITLE]. Here is what this person will actually do:
[PASTE 3–5 BULLETS]

Rules:
- Plain English only, no jargon
- Lead with what the person will own, not what they need to have
- Under 300 words
- No "passionate self-starter" language
- End with one honest line about the team`,
    tags: ['HR', 'hiring', 'JD'],
  },
  {
    id: 'expense-classifier',
    title: 'Expense Classifier',
    domain: 'FINANCE',
    problem: 'Manual expense categorisation is tedious and inconsistent across the team.',
    what_it_does: 'Paste raw expense entries (merchant + amount). Returns each classified into a standard category with confidence level.',
    prompt_text: `Classify each expense into one of: Food & Dining, Travel, Accommodation, Office Supplies, Software/Subscriptions, Marketing, Entertainment, Utilities, Salary/Contractor, Logistics, Maintenance, Miscellaneous.

Return: Original entry | Category | Confidence (High/Medium/Low)
Handle Indian merchant names, shorthand, and mixed language entries.
If confidence is Low, add a note explaining the ambiguity.

[PASTE EXPENSES, ONE PER LINE]`,
    tags: ['finance', 'expenses', 'categorisation'],
  },
  {
    id: 'pipeline-health',
    title: 'Sales Pipeline Health Check',
    domain: 'SALES',
    problem: 'Weekly pipeline reviews surface the same stuck deals. Hard to know what is actually moveable.',
    what_it_does: 'Paste your deal list with stage and last activity date. Returns a tiered view: closeable this week, needs action, stuck.',
    prompt_text: `You are a sales ops analyst. I will give you deals with their current stage and last activity date. Classify each as:
- CLOSEABLE: final stage, activity in last 7 days
- NEEDS ACTION: mid-stage, no activity in 7–14 days
- STUCK: no activity in 15+ days or stalled in early stage

For STUCK deals, suggest one specific next action.
Format: Deal | Stage | Days since activity | Classification | Suggested action

[PASTE DEAL LIST]`,
    tags: ['sales', 'pipeline', 'CRM'],
  },
  {
    id: 'meeting-summariser',
    title: 'Meeting Summariser',
    domain: 'OPS',
    problem: 'Meeting notes are long, unstructured, and nobody reads them.',
    what_it_does: 'Paste raw notes or a transcript. Returns decisions made, open questions, and next actions — nothing else.',
    prompt_text: `Read these meeting notes and extract only what matters:

1. DECISIONS MADE — one line each, with who decided
2. OPEN QUESTIONS — things discussed but not resolved, with who owns the answer
3. NEXT ACTIONS — specific tasks with owner and deadline if mentioned

Do not summarise the discussion. No context or background. Only decisions, questions, and actions.

[PASTE MEETING NOTES]`,
    tags: ['operations', 'meetings', 'productivity'],
  },
  {
    id: 'complaint-triage',
    title: 'Customer Complaint Triage',
    domain: 'OPS',
    problem: 'Support inboxes mix urgent issues with routine queries. Easy to miss what needs immediate attention.',
    what_it_does: 'Paste a batch of customer messages. Returns each triaged by urgency and type, with a draft first response.',
    prompt_text: `Triage these customer messages. For each one:
- URGENCY: High (same-day response needed) / Medium (within 48h) / Low (routine)
- TYPE: Delivery issue / Product defect / Billing query / General inquiry / Complaint / Compliment
- DRAFT RESPONSE: 2–3 sentences, professional but human, addressing the specific issue

Messages (separated by ---):
[PASTE MESSAGES]`,
    tags: ['operations', 'customer service', 'support'],
  },
];
