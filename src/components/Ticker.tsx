type TickerProps = {
  items: string[]
}

export function Ticker({ items }: TickerProps) {
  return (
    <div className="ticker" aria-label={`Technologies: ${items.join(', ')}`}>
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => (
              <span className="ticker-item" key={`${copy}-${item}`}>
                <span className="ticker-dot" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
