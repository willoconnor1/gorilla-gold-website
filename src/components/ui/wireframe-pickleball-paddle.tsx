"use client"

import { useEffect, useRef } from "react"

interface RotatingPickleballPaddleProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingPickleballPaddle({
  width = 200,
  height = 160,
  className = "",
}: RotatingPickleballPaddleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const cw = Math.min(width, window.innerWidth - 40)
    const ch = Math.min(height, window.innerHeight - 100)
    const dpr = window.devicePixelRatio || 1
    canvas.width = cw * dpr
    canvas.height = ch * dpr
    canvas.style.width = `${cw}px`
    canvas.style.height = `${ch}px`
    ctx.scale(dpr, dpr)

    const scale = Math.min(cw, ch) * 0.38
    const centerX = cw / 2
    const centerY = ch / 2

    const rotY = (p: Vec3, a: number): Vec3 => {
      const c = Math.cos(a), s = Math.sin(a)
      return [p[0] * c + p[2] * s, p[1], -p[0] * s + p[2] * c]
    }
    const rotX = (p: Vec3, a: number): Vec3 => {
      const c = Math.cos(a), s = Math.sin(a)
      return [p[0], p[1] * c - p[2] * s, p[1] * s + p[2] * c]
    }
    const proj = (p: Vec3): [number, number] => [
      centerX + p[0] * scale,
      centerY - p[1] * scale,
    ]

    const dots: Vec3[] = []
    const rings: Vec3[][] = []
    const edges: [Vec3, Vec3][] = []

    // Paddle face - wide elliptical shape
    const faceRx = 0.22
    const faceRy = 0.28
    const faceCy = 0.18
    const faceThick = 0.018

    // Face surface dots (front and back)
    for (let x = -faceRx; x <= faceRx; x += 0.035) {
      for (let y = faceCy - faceRy; y <= faceCy + faceRy; y += 0.035) {
        const nx = x / faceRx
        const ny = (y - faceCy) / faceRy
        if (nx * nx + ny * ny <= 1) {
          dots.push([x, y, faceThick / 2])
          dots.push([x, y, -faceThick / 2])
        }
      }
    }

    // Face perimeter dots (rim)
    for (let a = 0; a < Math.PI * 2; a += 0.06) {
      const ex = faceRx * Math.cos(a)
      const ey = faceCy + faceRy * Math.sin(a)
      dots.push([ex, ey, faceThick / 2])
      dots.push([ex, ey, -faceThick / 2])
      dots.push([ex, ey, 0])
    }

    // Face outline rings (front and back)
    for (const z of [faceThick / 2, -faceThick / 2]) {
      const ring: Vec3[] = []
      for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.08) {
        ring.push([faceRx * Math.cos(a), faceCy + faceRy * Math.sin(a), z])
      }
      rings.push(ring)
    }

    // Edge band ring (middle of thickness)
    const edgeRing: Vec3[] = []
    for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.08) {
      edgeRing.push([faceRx * Math.cos(a), faceCy + faceRy * Math.sin(a), 0])
    }
    rings.push(edgeRing)

    // Handle - cylinder below the face
    const handleR = 0.032
    const handleTop = faceCy - faceRy
    const handleBot = handleTop - 0.38

    for (let y = handleBot; y <= handleTop; y += 0.02) {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        dots.push([handleR * Math.cos(a), y, handleR * Math.sin(a)])
      }
    }

    // Handle rings
    for (let y = handleBot; y <= handleTop; y += 0.06) {
      const ring: Vec3[] = []
      for (let i = 0; i <= 20; i++) {
        const a = (i / 20) * Math.PI * 2
        ring.push([handleR * Math.cos(a), y, handleR * Math.sin(a)])
      }
      rings.push(ring)
    }

    // Handle grip texture bands
    for (let y = handleBot + 0.02; y <= handleTop - 0.02; y += 0.04) {
      const ring: Vec3[] = []
      const gr = handleR * 1.1
      for (let i = 0; i <= 16; i++) {
        const a = (i / 16) * Math.PI * 2
        ring.push([gr * Math.cos(a), y, gr * Math.sin(a)])
      }
      rings.push(ring)
    }

    // Handle end cap
    for (let r = 0; r <= handleR; r += 0.012) {
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        dots.push([r * Math.cos(a), handleBot, r * Math.sin(a)])
      }
    }

    // Animation
    const tilt = 0.18
    let angle = 0
    let animId: number

    const render = () => {
      ctx.clearRect(0, 0, cw, ch)

      const projected: { x: number; y: number; z: number }[] = []
      for (const d of dots) {
        const r = rotX(rotY(d, angle), tilt)
        const [px, py] = proj(r)
        projected.push({ x: px, y: py, z: r[2] })
      }
      projected.sort((a, b) => a.z - b.z)

      for (const d of projected) {
        const depth = (d.z + 1) / 2
        ctx.beginPath()
        ctx.arc(d.x, d.y, 0.7 + depth * 1.0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${0.1 + depth * 0.6})`
        ctx.fill()
      }

      for (const ring of rings) {
        ctx.beginPath()
        let zSum = 0
        for (let i = 0; i < ring.length; i++) {
          const r = rotX(rotY(ring[i], angle), tilt)
          const [px, py] = proj(r)
          zSum += r[2]
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        const avgDepth = (zSum / ring.length + 1) / 2
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.05 + avgDepth * 0.2})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      for (const [a, b] of edges) {
        const ra = rotX(rotY(a, angle), tilt)
        const rb = rotX(rotY(b, angle), tilt)
        const [ax, ay] = proj(ra)
        const [bx, by] = proj(rb)
        const avgDepth = ((ra[2] + rb[2]) / 2 + 1) / 2
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.strokeStyle = `rgba(212, 168, 83, ${0.15 + avgDepth * 0.55})`
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const animate = () => {
      angle += 0.012
      render()
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animId)
  }, [width, height])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
