export type Stance = 'yes' | 'yes-soon' | 'maybe' | 'no' | 'no-never'

export type Opinion = {
  id: string
  name: string
  role: string
  quote: string
  date: string
  stance: Stance
  source: { label: string; url: string }
}

// Every quote links to its source. Grouped on the page by stance.
export const opinions: Opinion[] = [
  {
    id: 'huang',
    name: 'Jensen Huang',
    role: 'CEO, NVIDIA',
    quote: "I think we've achieved AGI.",
    date: 'Mar 2026',
    stance: 'yes',
    source: {
      label: 'Fortune',
      url: 'https://fortune.com/2026/03/30/agi-definition-jensen-huang-lex-fridman-deepmind-turing-text-cognitive-taxonomy/',
    },
  },
  {
    id: 'altman',
    name: 'Sam Altman',
    role: 'CEO, OpenAI',
    quote: 'We are now confident we know how to build AGI as we have traditionally understood it.',
    date: 'Jan 2025',
    stance: 'yes-soon',
    source: { label: 'blog.samaltman.com — "Reflections"', url: 'https://blog.samaltman.com/reflections' },
  },
  {
    id: 'musk',
    name: 'Elon Musk',
    role: 'CEO, xAI / Tesla',
    quote:
      "If you define AGI as smarter than the smartest human, I think it's probably next year, within two years.",
    date: 'Apr 2024',
    stance: 'yes-soon',
    source: {
      label: 'TweakTown',
      url: 'https://www.tweaktown.com/news/97421/elon-musk-says-agi-will-be-smarter-than-the-smartest-humans-by-2025-2026-at-latest/index.html',
    },
  },
  {
    id: 'amodei',
    name: 'Dario Amodei',
    role: 'CEO, Anthropic',
    quote:
      'I think it could come as early as 2026, though there are also ways it could take much longer. I prefer "powerful AI" — a country of geniuses in a datacenter.',
    date: 'Oct 2024',
    stance: 'yes-soon',
    source: { label: '"Machines of Loving Grace"', url: 'https://darioamodei.com/essay/machines-of-loving-grace' },
  },
  {
    id: 'hassabis',
    name: 'Demis Hassabis',
    role: 'CEO, Google DeepMind',
    quote:
      "Over the next five to 10 years, a lot of those capabilities will start coming to the fore and we'll start moving towards what we call artificial general intelligence.",
    date: 'Mar 2025',
    stance: 'maybe',
    source: {
      label: 'CNBC',
      url: 'https://www.cnbc.com/2025/03/17/human-level-ai-will-be-here-in-5-to-10-years-deepmind-ceo-says.html',
    },
  },
  {
    id: 'hinton',
    name: 'Geoffrey Hinton',
    role: '"Godfather of AI", Turing Award',
    quote: 'I now predict 5 to 20 years but without much confidence. We live in very uncertain times.',
    date: 'May 2023',
    stance: 'maybe',
    source: { label: 'X / @geoffreyhinton', url: 'https://x.com/geoffreyhinton/status/1653687894534504451' },
  },
  {
    id: 'marcus',
    name: 'Gary Marcus',
    role: 'Cognitive scientist; author',
    quote: 'The fact is, pure scaling has not worked. [AGI] seems, at least in the near term, increasingly unlikely.',
    date: 'Feb 2025',
    stance: 'no',
    source: { label: 'Fortune (op-ed)', url: 'https://fortune.com/2025/02/19/generative-ai-scaling-agi-deep-learning/' },
  },
  {
    id: 'ng',
    name: 'Andrew Ng',
    role: 'Founder, Google Brain & DeepLearning.AI',
    quote: "AGI has been overhyped. For a long time, there'll be a lot of things that humans can do that AI cannot.",
    date: 'Jul 2025',
    stance: 'no',
    source: { label: 'AOL / Y Combinator', url: 'https://www.aol.com/google-brain-founder-andrew-ng-051003318.html' },
  },
  {
    id: 'lecun',
    name: 'Yann LeCun',
    role: 'Chief AI Scientist, Meta',
    quote:
      "There's absolutely no way that autoregressive LLMs, the type that we know today, will reach human intelligence. It's just not going to happen.",
    date: 'Jan 2025',
    stance: 'no-never',
    source: {
      label: 'PYMNTS',
      url: 'https://www.pymnts.com/artificial-intelligence-2/2025/meta-large-language-models-will-not-get-to-human-level-intelligence/',
    },
  },
]
