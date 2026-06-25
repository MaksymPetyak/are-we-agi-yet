# Are we AGI yet?

A tiny live scoreboard tracking how close today's frontier AI is to AGI, measured
across the benchmarks that are supposed to be hard. Short answer, for now: **No.**

Built with [Vite](https://vitejs.dev/) + React + TypeScript. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs to dist/
npm run preview  # preview the production build locally
```

## Editing the data

All the benchmark scores live in [`src/data/benchmarks.ts`](src/data/benchmarks.ts).
The numbers are approximate and hand-curated — bump `lastUpdated` and the scores
whenever notable new results land.
