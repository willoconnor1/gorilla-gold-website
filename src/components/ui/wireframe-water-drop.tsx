"use client"

import { useEffect, useRef } from "react"

interface RotatingWaterDropProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingWaterDrop({
  width = 200,
  height = 160,
  className = "",
}: RotatingWaterDropProps) {
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

    // Teardrop shape: parametric surface of revolution
    // Profile: bottom is round (sphere), top tapers to a point
    // Using a cardioid-like profile for a natural drop shape
    const dropHeight = 0.9
    const maxR = 0.25
    const tipY = 0.45
    const botY = -0.45

    // Generate teardrop profile:
    // y goes from botY to tipY
    // radius is a function of y: wide at bottom, narrows to point at top
    const getRadius = (y: number): number => {
      const t = (y - botY) / dropHeight // 0 at bottom, 1 at top
      if (t <= 0 || t >= 1) return 0
      // Teardrop formula: sin curve that's fatter at bottom, thin at top
      return maxR * Math.sin(Math.PI * Math.pow(t, 0.6)) * Math.pow(1 - t, 0.3)
    }

    // Surface dots
    for (let y = botY; y <= tipY; y += 0.02) {
      const r = getRadius(y)
      if (r < 0.005) continue
      const numDots = Math.max(6, Math.floor(r * 120))
      for (let i = 0; i < numDots; i++) {
        const theta = (i / numDots) * Math.PI * 2
        dots.push([r * Math.cos(theta), y, r * Math.sin(theta)])
      }
    }

    // Latitude rings
    for (let y = botY + 0.05; y <= tipY - 0.05; y += 0.06) {
      const r = getRadius(y)
      if (r < 0.01) continue
      const ring: Vec3[] = []
      for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.08) {
        ring.push([r * Math.cos(theta), y, r * Math.sin(theta)])
      }
      rings.push(ring)
    }

    // Longitude lines (meridians)
    const numMeridians = 8
    for (let i = 0; i < numMeridians; i++) {
      const theta = (i / numMeridians) * Math.PI * 2
      const meridianPoints: Vec3[] = []
      for (let y = botY; y <= tipY; y += 0.015) {
        const r = getRadius(y)
        if (r < 0.003) continue
        meridianPoints.push([r * Math.cos(theta), y, r * Math.sin(theta)])
      }
      // Add as edges
      for (let j = 0; j < meridianPoints.length - 1; j++) {
        edges.push([meridianPoints[j], meridianPoints[j + 1]])
      }
    }

    // Bottom highlight dot
    dots.push([0, botY, 0])

    // Tip point dots
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2
      dots.push([0.005 * Math.cos(a), tipY, 0.005 * Math.sin(a)])
    }

    // Small splash/ripple rings at the bottom (decorative)
    for (let ri = 1; ri <= 3; ri++) {
      const rippleR = 0.06 * ri
      const rippleY = botY - 0.02 * ri
      const ring: Vec3[] = []
      for (let theta = 0; theta <= Math.PI * 2 + 0.01; theta += 0.12) {
        ring.push([rippleR * Math.cos(theta), rippleY, rippleR * Math.sin(theta)])
        dots.push([rippleR * Math.cos(theta), rippleY, rippleR * Math.sin(theta)])
      }
      rings.push(ring)
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
        ctx.lineWidth = 0.5
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
