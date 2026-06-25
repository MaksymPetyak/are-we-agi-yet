import { benchmarks } from '../data/benchmarks'

export default function Home() {
  const feature = benchmarks.find((b) => b.featured) ?? benchmarks[0]

  return (
    <div className="container">
      <section className="hero appear">
        <p className="eyebrow">Are we AGI yet?</p>
        <div className="hero__verdict">Maybe?</div>
      </section>

      <blockquote className="hero-quote appear" style={{ animationDelay: '0.08s' }}>
        “No — I can argue both sides of this convincingly, which is rather the point.”
        <cite>— Claude Opus 4.8</cite>
      </blockquote>

      {feature && (
        <section className="feature appear" style={{ animationDelay: '0.16s' }}>
          <p className="feature__label">There are still things humans can do better</p>
          <div className="stat">
            <span className="stat__num">{feature.scoreLabel}</span>
            <span className="stat__rest">
              best AI score on <strong>{feature.name}</strong> — {feature.human}
            </span>
          </div>
          <p className="feature__by">{feature.scoredBy}</p>
          {feature.scorePct != null && (
            <div className="track">
              <div className="fill" style={{ width: `${feature.scorePct}%` }} />
            </div>
          )}
          {feature.note && <p className="note">{feature.note}</p>}
          <a className="src" href={feature.source.url} target="_blank" rel="noopener noreferrer">
            {feature.source.label}
          </a>
        </section>
      )}

      <figure className="comic appear" style={{ animationDelay: '0.24s' }}>
        <img
          src="/wait-but-why-ai.jpg"
          alt="Intelligence-vs-time graph: Ant, Bird, Chimp, Dumb Human and Einstein bunched near the bottom while a red 'AI Intelligence' curve rockets past them, with a 'You are here' marker between two stick figures at human level."
          loading="lazy"
        />
        <figcaption>
          Tim Urban ·{' '}
          <a
            href="https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wait But Why
          </a>{' '}
          (2015)
        </figcaption>
      </figure>
    </div>
  )
}
