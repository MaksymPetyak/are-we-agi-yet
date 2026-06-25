import './AgiCurve.css'

/**
 * "You are here → AGI" curve (Concept A: The Goalposts).
 * Every past "almost there" is bunched in the flats; the AGI flag keeps rolling away.
 */
export default function AgiCurve() {
  return (
    <figure className="curve">
      <svg viewBox="0 0 820 380" role="img" aria-label="A curve of AI capability over time. A 'you are here' marker sits well below an 'AGI' flag that keeps moving further away.">
        <line className="curve__axis" x1="55" y1="345" x2="790" y2="345" />
        <line className="curve__axis" x1="55" y1="345" x2="55" y2="35" />
        <text className="curve__axlbl" x="60" y="28">capability</text>
        <text className="curve__axlbl" x="705" y="368">time →</text>

        {/* the curve */}
        <path className="curve__line" d="M60,332 C 360,330 560,306 770,70" fill="none" />

        {/* ghost "you were here" markers, bunched in the flats */}
        <g className="curve__ghost">
          <circle cx="205" cy="331" r="4" />
          <text x="180" y="320">you were here ’22</text>
          <circle cx="330" cy="326" r="4" />
          <text x="305" y="313">you were here ’23</text>
          <circle cx="455" cy="316" r="4" />
          <text x="430" y="303">you were here ’24</text>
        </g>

        {/* you are here */}
        <line className="curve__drop" x1="565" y1="296" x2="565" y2="250" />
        <circle className="curve__here" cx="565" cy="303" r="7" />
        <text className="curve__herelbl" x="527" y="242">YOU ARE HERE</text>

        {/* AGI flag on wheels, far up the cliff */}
        <line className="curve__pole" x1="752" y1="78" x2="752" y2="120" />
        <path className="curve__flag" d="M752,80 L800,90 L752,100 Z" />
        <text className="curve__agi" x="700" y="74">AGI*</text>
        <circle className="curve__wheel" cx="746" cy="126" r="5" />
        <circle className="curve__wheel" cx="760" cy="126" r="5" />
        <text className="curve__fine" x="690" y="143">*definition pending</text>
      </svg>
      <figcaption className="curve__cap">
        AI capability over time. Funny how “almost AGI” keeps ending up in the flats.
      </figcaption>
    </figure>
  )
}
