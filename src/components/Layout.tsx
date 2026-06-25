import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import './Layout.css'

export default function Layout() {
  return (
    <div className="app-shell">
      <Nav />
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <span className="app-footer__by">
          by{' '}
          <a href="https://maksympetyak.com" target="_blank" rel="noopener noreferrer">
            Maksym Petyak
          </a>
        </span>
        <a href="https://x.com/PetyakMi" target="_blank" rel="noopener noreferrer">
          X
        </a>
      </footer>
    </div>
  )
}
