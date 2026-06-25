import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import BootSequence from './components/BootSequence'
import Layout from './components/Layout'
import Home from './pages/Home'
import Benchmarks from './pages/Benchmarks'
import Definitions from './pages/Definitions'

function App() {
  const [booted, setBooted] = useState(() => {
    try {
      return sessionStorage.getItem('awa_booted') === '1'
    } catch {
      return false
    }
  })

  if (!booted) {
    return (
      <BootSequence
        onDone={() => {
          try {
            sessionStorage.setItem('awa_booted', '1')
          } catch {
            /* sessionStorage unavailable — just proceed */
          }
          setBooted(true)
        }}
      />
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="benchmarks" element={<Benchmarks />} />
        <Route path="definitions" element={<Definitions />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
