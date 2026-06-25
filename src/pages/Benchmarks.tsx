import { benchmarks } from '../data/benchmarks'

export default function Benchmarks() {
  return (
    <div className="container">
      <div className="page-head appear">
        <p className="eyebrow">Benchmarks</p>
        <h1 className="page-title">The tests we keep score with</h1>
        <p className="lede">Each was “impossible” until it wasn’t.</p>
      </div>

      <div className="grid appear-grid">
        {benchmarks.map((b) => (
          <article className="card" key={b.id}>
            <h2 className="card__title">{b.name}</h2>
            <p className="card__meta">{b.what}</p>
            <div className="bench__score">
              <span className="bench__num">{b.scoreLabel}</span>
              <span className="bench__human">{b.human}</span>
            </div>
            {b.scorePct != null && (
              <div className="track">
                <div className="fill" style={{ width: `${b.scorePct}%` }} />
              </div>
            )}
            <p className="bench__by">{b.scoredBy}</p>
            <p className="bench__why">{b.whyAgi}</p>
            {b.note && <p className="note">{b.note}</p>}
            <a className="src" href={b.source.url} target="_blank" rel="noopener noreferrer">
              {b.source.label}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
