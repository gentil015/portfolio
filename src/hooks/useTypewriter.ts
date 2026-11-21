import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useTypewriter(phrases: string[]) {
  const reducedMotion = usePrefersReducedMotion()
  const [text, setText] = useState(reducedMotion ? (phrases[0] ?? '') : '')

  useEffect(() => {
    if (reducedMotion) {
      setText(phrases[0] ?? '')
      return
    }

    let timer: number
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let pause = 0

    const tick = () => {
      const phrase = phrases[phraseIndex] ?? ''
      if (!deleting) {
        charIndex += 1
        setText(phrase.slice(0, charIndex))
        if (charIndex >= phrase.length) {
          deleting = true
          pause = 45
        }
        timer = window.setTimeout(tick, 45)
        return
      }

      if (pause > 0) {
        pause -= 1
        timer = window.setTimeout(tick, 30)
        return
      }

      charIndex -= 1
      setText(phrase.slice(0, charIndex))
      if (charIndex <= 0) {
        deleting = false
        charIndex = 0
        phraseIndex = (phraseIndex + 1) % phrases.length
      }
      timer = window.setTimeout(tick, 24)
    }

    timer = window.setTimeout(tick, 900)
    return () => window.clearTimeout(timer)
  }, [phrases, reducedMotion])

  return text
}
