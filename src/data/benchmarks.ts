export type Benchmark = {
  id: string
  name: string
  /** One line: what the benchmark tests. */
  what: string
  /** Why it's considered a signal on the road to AGI. */
  whyAgi: string
  /** Numeric best score for the bar (0–100), or null if not a clean %. */
  scorePct: number | null
  /** Display label, e.g. "46%" or "~5.3 hrs". */
  scoreLabel: string
  /** Who set it + when. */
  scoredBy: string
  /** Human / "solved" reference. */
  human: string
  /** Key caveat (saturation, contamination, provisional data…). */
  note?: string
  source: { label: string; url: string }
  /** Featured on the home page. */
  featured?: boolean
}

// Verified against primary live sources (Epoch AI, ARC Prize, Scale SEAL, METR, model cards)
// as of 2026-06-25. Each source link points to the live leaderboard so it stays checkable.
export const benchmarks: Benchmark[] = [
  {
    id: 'arc-agi-3',
    name: 'ARC-AGI-3',
    what: 'Interactive mini-games with no instructions — the agent must explore, infer the rules, and learn across levels.',
    whyAgi:
      'Moves past static puzzles to agentic, interactive learning — the closest test yet to "figure out a brand-new world from scratch," like a human would.',
    scorePct: 2,
    scoreLabel: '~1.5%',
    scoredBy: 'Claude Opus 4.8, Jun 2026',
    human: 'humans 100%',
    note: 'No instructions — the AI must learn each game by playing.',
    source: { label: 'ARC Prize leaderboard', url: 'https://arcprize.org/leaderboard' },
    featured: true,
  },
  {
    id: 'hle',
    name: "Humanity's Last Exam",
    what: '2,500 expert-level questions across 100+ subjects, written to be un-Googleable.',
    whyAgi: 'A fresh frontier-of-human-knowledge yardstick, built once MMLU and GPQA started saturating.',
    scorePct: 46,
    scoreLabel: '46%',
    scoredBy: 'Gemini 3.1 Pro, no tools · 2026',
    human: 'no single-human baseline',
    note: 'Single digits at launch (Jan 2025).',
    source: { label: 'Scale SEAL leaderboard', url: 'https://labs.scale.com/leaderboard/humanitys_last_exam' },
  },
  {
    id: 'frontiermath',
    name: 'FrontierMath',
    what: 'Hundreds of original, unpublished research-grade math problems, auto-graded.',
    whyAgi: 'Probes genuine mathematical reasoning, not recall — problems take experts hours to weeks.',
    scorePct: 88,
    scoreLabel: '~88%',
    scoredBy: 'GPT-5.5 Pro / Claude Fable 5, v2 · 2026',
    human: 'expert teams ~19%',
    note: 'FrontierMath v2 (Jun 2026) allows tools; the older no-tools set topped ~52%.',
    source: { label: 'Epoch AI', url: 'https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2' },
  },
  {
    id: 'metr',
    name: 'METR Time Horizon',
    what: 'The length of task (in human time) a model can finish autonomously with 50% reliability.',
    whyAgi: 'Measures long-horizon autonomy — arguably the capability most missing from today’s AI.',
    scorePct: null,
    scoreLabel: '~12 hrs',
    scoredBy: 'Claude Opus 4.6 · 2026',
    human: 'doubling ~every 4 months',
    note: 'Up from ~1 hr in early 2025. Mythos Preview leads at ~17 hrs — past METR’s ~16 hr reliability limit.',
    source: { label: 'METR', url: 'https://metr.org/time-horizons/' },
  },
  {
    id: 'gpqa',
    name: 'GPQA Diamond',
    what: "198 'Google-proof' graduate-level science questions (bio, physics, chemistry).",
    whyAgi: 'Tests real expert reasoning vs. web lookup — a standard frontier-capability headline.',
    scorePct: 95,
    scoreLabel: '~95%',
    scoredBy: 'GPT-5.4 Pro, 2026',
    human: 'PhD experts ~70%',
    note: 'Saturated — frontier models cluster in the mid-90s.',
    source: { label: 'Epoch AI', url: 'https://epoch.ai/benchmarks/gpqa-diamond' },
  },
  {
    id: 'swe-bench',
    name: 'SWE-bench Pro',
    what: 'Resolve real, contamination-resistant GitHub issues so the hidden tests pass.',
    whyAgi: 'The current bar for autonomous, agentic software engineering in an unfamiliar codebase.',
    scorePct: 59,
    scoreLabel: '~59%',
    scoredBy: 'GPT-5.4 (xHigh), 2026',
    human: 'no formal human baseline',
    note: "Scale AI's harder successor to SWE-bench Verified (which still tops ~77%).",
    source: { label: 'Scale SEAL leaderboard', url: 'https://labs.scale.com/leaderboard/swe_bench_pro_public' },
  },
  {
    id: 'arc-agi-1',
    name: 'ARC-AGI-1',
    what: 'The original 2019 abstract-reasoning test: solve novel grid puzzles from a few examples.',
    whyAgi: "For years the iconic 'easy for humans, hard for AI' benchmark.",
    scorePct: 98,
    scoreLabel: '98%',
    scoredBy: 'Gemini 3.1 Pro, Feb 2026',
    human: 'human panel 98%',
    note: 'Essentially solved (o3 cracked it in Dec 2024).',
    source: { label: 'ARC Prize leaderboard', url: 'https://arcprize.org/leaderboard' },
  },
  {
    id: 'mmlu',
    name: 'MMLU',
    what: '57-subject multiple-choice exam — the old standard for broad knowledge.',
    whyAgi: 'Was the canonical proxy for general, cross-domain competence.',
    scorePct: 92,
    scoreLabel: '~92%',
    scoredBy: 'frontier labs (self-reported), low-90s',
    human: 'domain experts ~89.8%',
    note: 'Saturated and retired; standardized boards top ~88%.',
    source: { label: 'Epoch AI', url: 'https://epoch.ai/benchmarks/mmlu' },
  },
]
