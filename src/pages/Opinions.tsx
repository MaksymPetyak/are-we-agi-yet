import { opinions, type Stance } from '../data/opinions'

type Group = { stance: Stance; title: string; pill: string; pillClass: string }

const groups: Group[] = [
  { stance: 'yes', title: "Yes — we're basically there", pill: 'Yes', pillClass: 'pill--soon' },
  { stance: 'yes-soon', title: 'Yes — and soon', pill: 'Soon', pillClass: 'pill--soon' },
  { stance: 'maybe', title: 'Maybe — it depends', pill: 'Maybe', pillClass: 'pill--nuanced' },
  { stance: 'no', title: 'No — not for years', pill: 'No', pillClass: 'pill--not' },
  { stance: 'no-never', title: 'No — not like this', pill: 'Not this way', pillClass: 'pill--not' },
]

export default function Opinions() {
  return (
    <div className="container">
      <div className="page-head appear">
        <p className="eyebrow">Opinions</p>
        <h1 className="page-title">Who thinks we're there yet?</h1>
        <p className="lede">The people building AGI disagree by more than a decade.</p>
      </div>

      {groups.map((g) => {
        const items = opinions.filter((o) => o.stance === g.stance)
        if (items.length === 0) return null
        return (
          <section className="op-group" key={g.stance}>
            <div className="op-group__head">
              <span className={`pill ${g.pillClass}`}>{g.pill}</span>
              <h2 className="op-group__title">{g.title}</h2>
            </div>
            <div className="grid appear-grid">
              {items.map((o) => (
                <article className="card" key={o.id}>
                  <p className="op__name">{o.name}</p>
                  <p className="op__role">{o.role}</p>
                  <blockquote className="bq">"{o.quote}"</blockquote>
                  <p className="op__date">{o.date}</p>
                  <a className="src" href={o.source.url} target="_blank" rel="noopener noreferrer">
                    {o.source.label}
                  </a>
                </article>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
