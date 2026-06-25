import { definitions } from '../data/definitions'

export default function Definitions() {
  return (
    <div className="container">
      <div className="page-head appear">
        <p className="eyebrow">Definitions</p>
        <h1 className="page-title">What even is “AGI”?</h1>
      </div>

      <div className="grid appear-grid">
        {definitions.map((d) => (
          <article className="card" key={d.id}>
            <h2 className="card__title">{d.org}</h2>
            <p className="card__meta">{d.year}</p>
            <blockquote className="bq">“{d.quote}”</blockquote>
            {d.note && (
              <p className="card__body" style={{ marginTop: 12 }}>
                {d.note}
              </p>
            )}
            <a className="src" href={d.source.url} target="_blank" rel="noopener noreferrer">
              {d.source.label}
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
