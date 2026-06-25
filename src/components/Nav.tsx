import { NavLink } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/benchmarks', label: 'Benchmarks', end: false },
  { to: '/definitions', label: 'Definitions', end: false },
  { to: '/opinions', label: 'Opinions', end: false },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="nav__brand">
          <span className="nav__dot" aria-hidden="true" />
          are we AGI yet?
        </NavLink>
        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
