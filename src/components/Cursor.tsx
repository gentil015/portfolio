import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const interactive = 'a, button, input, textarea, select, .card-hover'

export function Cursor() {
  const reducedMotion = usePrefersReducedMotion()
  const [enabled, setEnabled] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia('(pointer: fine)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled || reducedMotion) return

    const dot = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let frame = 0
    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const move = (event: PointerEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      const target = event.target
      const hovering = target instanceof Element && target.closest(interactive) !== null
      document.body.classList.toggle('hovering', hovering)
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(animate)
    }

    document.body.classList.add('custom-cursor')
    frame = window.requestAnimationFrame(animate)
    window.addEventListener('pointermove', move, { passive: true })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.body.classList.remove('custom-cursor', 'hovering')
    }
  }, [enabled, reducedMotion])

  if (!enabled || reducedMotion) return null

  return (
    <>
      <div id="cursor" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  )
}
