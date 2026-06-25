export type Definition = {
  id: string
  org: string
  year: string
  quote: string
  note?: string
  source: { label: string; url: string }
}

// All quotes verified against primary/original sources.
export const definitions: Definition[] = [
  {
    id: 'deepmind',
    org: 'Google DeepMind',
    year: '2023',
    quote: 'An AI system that is at least as capable as a human at most tasks.',
    note: 'From the "Levels of AGI" paper — graded by performance × generality (Emerging → Superhuman).',
    source: { label: 'arXiv:2311.02462', url: 'https://arxiv.org/abs/2311.02462' },
  },
  {
    id: 'openai',
    org: 'OpenAI',
    year: '2018',
    quote: 'Highly autonomous systems that outperform humans at most economically valuable work.',
    note: 'From the OpenAI Charter.',
    source: { label: 'OpenAI Charter', url: 'https://openai.com/charter/' },
  },
  {
    id: 'wikipedia',
    org: 'Wikipedia',
    year: 'current',
    quote:
      'A hypothetical type of artificial intelligence that matches or surpasses human capabilities across virtually all cognitive tasks.',
    note: 'The neutral consensus definition.',
    source: {
      label: 'Wikipedia: AGI',
      url: 'https://en.wikipedia.org/wiki/Artificial_general_intelligence',
    },
  },
]
