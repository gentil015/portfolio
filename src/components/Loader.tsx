import { useEffect, useState } from 'react'

export function Loader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    let fadeTimer: number
    let removeTimer: number

    const finish = () => {
      window.clearTimeout(fadeTimer)
      fadeTimer = window.setTimeout(() => setHidden(true), 350)
      removeTimer = window.setTimeout(() => setRemoved(true), 1000)
    }

    const safetyTimer = window.setTimeout(finish, 1800)

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => {
      window.clearTimeout(safetyTimer)
      window.clearTimeout(fadeTimer)
      window.clearTimeout(removeTimer)
      window.removeEventListener('load', finish)
    }
  }, [])

  if (removed) return null

  return (
    <div id="loader" className={hidden ? 'fade' : ''} aria-hidden="true">
      <div className="loader-ring" />
      <p className="loader-text">INITIALIZING PORTFOLIO</p>
    </div>
  )
}
