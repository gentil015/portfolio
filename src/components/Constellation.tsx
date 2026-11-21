import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Node = { x: number; y: number; vx: number; vy: number; radius: number }

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    let width = 0
    let height = 0
    let frame = 0
    const pointer = { x: -9999, y: -9999 }
    const nodes: Node[] = []

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * ratio)
      canvas.height = Math.floor(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.min(70, Math.max(20, Math.floor(width / 20)))
      nodes.length = 0
      for (let index = 0; index < count; index += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.4 + 0.6,
        })
      }
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.x += node.vx
          node.y += node.vy
          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1
        }

        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(99, 102, 241, 0.55)'
        context.fill()
      })

      const distanceLimit = 140
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.hypot(dx, dy)
          if (distance >= distanceLimit) continue

          context.beginPath()
          context.moveTo(nodes[i].x, nodes[i].y)
          context.lineTo(nodes[j].x, nodes[j].y)
          context.strokeStyle = `rgba(99, 102, 241, ${(1 - distance / distanceLimit) * 0.28})`
          context.lineWidth = 0.6
          context.stroke()
        }

        if (reducedMotion) continue
        const pointerDistance = Math.hypot(pointer.x - nodes[i].x, pointer.y - nodes[i].y)
        if (pointerDistance < 180) {
          context.beginPath()
          context.moveTo(nodes[i].x, nodes[i].y)
          context.lineTo(pointer.x, pointer.y)
          context.strokeStyle = `rgba(6, 182, 212, ${(1 - pointerDistance / 180) * 0.35})`
          context.lineWidth = 0.8
          context.stroke()
        }
      }

      if (!reducedMotion) frame = window.requestAnimationFrame(draw)
    }

    const trackPointer = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', trackPointer, { passive: true })

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', trackPointer)
    }
  }, [reducedMotion])

  return <canvas id="constellation" ref={canvasRef} aria-hidden="true" />
}
