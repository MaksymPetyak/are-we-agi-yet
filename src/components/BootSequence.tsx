import { useEffect, useState } from 'react'
import './BootSequence.css'

/** First-load boot gag: counts up, stalls at 92%, errors out, then reveals the site. */
export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState<'load' | 'error' | 'out'>('load')

  // count toward 92, easing as it approaches so it visibly "stalls"
  useEffect(() => {
    let current = 0
    const tick = setInterval(() => {
      current += Math.max(1, Math.ceil((92 - current) / 5))
      if (current >= 92) {
        setPct(92)
        clearInterval(tick)
      } else {
        setPct(current)
      }
    }, 95)
    return () => clearInterval(tick)
  }, [])

  // once stuck at 92, beat → error → fade out → done
  useEffect(() => {
    if (pct < 92) return
    const toError = setTimeout(() => setPhase('error'), 500)
    const toOut = setTimeout(() => setPhase('out'), 1350)
    const toDone = setTimeout(onDone, 1850)
    return () => {
      clearTimeout(toError)
      clearTimeout(toOut)
      clearTimeout(toDone)
    }
  }, [pct, onDone])

  return (
    <div className={`boot boot--${phase}`} role="status" aria-label="Loading">
      <div className="boot__inner">
        <div className="boot__line">Initializing superintelligence</div>
        <div className="boot__bar">
          <div className="boot__fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="boot__pct">{pct}%</div>
        <div className="boot__err">{phase === 'load' ? ' ' : 'ERROR · AGI not found'}</div>
      </div>
    </div>
  )
}
