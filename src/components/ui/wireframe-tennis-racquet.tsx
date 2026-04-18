"use client"

import { useEffect, useRef } from "react"

interface RotatingTennisRacquetProps {
  width?: number
  height?: number
  className?: string
}

type Vec3 = [number, number, number]

export default function RotatingTennisRacquet({
  width = 200,
  height = 160,
  className = "",
}: RotatingTennisRacquetProps) {
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

    // Racquet head - tall ellipse
    const headRx = 0.16
    const headRy = 0.32
    const headCy = 0.25
    const headThick = 0.025

    // Head frame dots (perimeter, thicker frame)
    for (let a = 0; a < Math.PI * 2; a += 0.04) {
      const ex = headRx * Math.cos(a)
      const ey = headCy + headRy * Math.sin(a)
      // Frame has thickness - add dots around the frame cross-section
      for (let fi = 0; fi < 8; fi++) {
        const fa = (fi / 8) * Math.PI * 2
        const fr = 0.015 // frame tube radius
        dots.push([ex + fr * Math.cos(fa) * (a === 0 ? 0 : Math.sin(a) < 0 ? 1 : 1), ey, headThick / 2 * Math.cos(fa) + fr * Math.sin(fa)])
      }
    }

    // Head outline rings (front and back of frame)
    for (const z of [headThick / 2, -headThick / 2, 0]) {
      const ring: Vec3[] = []
      for (let a = 0; a <= Math.PI * 2 + 0.01; a += 0.06) {
        ring.push([headRx * Math.cos(a), headCy + headRy * Math.sin(a), z])
      }
      rings.push(ring)
    }

    // String pattern - vertical strings
    const stringZ = 0
    for (let x = -headRx + 0.025; x <= headRx - 0.025; x += 0.025) {
      // Find Y bounds at this X (ellipse equation)
      const maxNy = Math.sqrt(1 - (x / headRx) ** 2)
      const yBot = headCy - headRy * maxNy * 0.95
      const yTop = headCy + headRy * maxNy * 0.95
      edges.push([[x, yBot, stringZ], [x, yTop, stringZ]])
      // String dots along each vertical
      for (let y = yBot; y <= yTop; y += 0.05) {
        dots.push([x, y, stringZ])
      }
    }

    // String pattern - horizontal strings
    for (let y = headCy - headRy + 0.03; y <= headCy + headRy - 0.03; y += 0.03) {
      const ny = (y - headCy) / headRy
      if (Math.abs(ny) > 0.95) continue
      const maxNx = Math.sqrt(1 - ny * ny)
      const xL = -headRx * maxNx * 0.95
      const xR = headRx * maxNx * 0.95
      edges.push([[xL, y, stringZ], [xR, y, stringZ]])
    }

    // Throat - V-shape from head bottom to shaft
    const throatTopY = headCy - headRy
    const throatBotY = throatTopY - 0.12
    const throatTopW = headRx * 0.4
    // Left throat line
    edges.push([[-throatTopW, throatTopY, 0], [0, throatBotY, 0]])
    edges.push([[-throatTopW, throatTopY, headThick / 2], [0, throatBotY, headThick / 2]])
    edges.push([[-throatTopW, throatTopY, -headThick / 2], [0, throatBotY, -headThick / 2]])
    // Right throat line
    edges.push([[throatTopW, throatTopY, 0], [0, throatBotY, 0]])
    edges.push([[throatTopW, throatTopY, headThick / 2], [0, throatBotY, headThick / 2]])
    edges.push([[throatTopW, throatTopY, -headThick / 2], [0, throatBotY, -headThick / 2]])

    // Throat dots
    for (let t = 0; t <= 1; t += 0.1) {
      dots.push([
        -throatTopW * (1 - t),
        throatTopY + (throatBotY - throatTopY) * t,
        0,
      ])
      dots.push([
        throatTopW * (1 - t),
        throatTopY + (throatBotY - throatTopY) * t,
        0,
      ])
    }

    // Handle/grip
    const handleR = 0.022
    const handleTop = throatBotY
    const handleBot = handleTop - 0.42

    for (let y = handleBot; y <= handleTop; y += 0.018) {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2
        dots.push([handleR * Math.cos(a), y, handleR * Math.sin(a)])
      }
    }

    // Handle rings
    for (let y = handleBot; y <= handleTop; y += 0.05) {
      const ring: Vec3[] = []
      for (let i = 0; i <= 20; i++) {
        const a = (i / 20) * Math.PI * 2
        ring.push([handleR * Math.cos(a), y, handleR * Math.sin(a)])
      }
      rings.push(ring)
    }

    // Grip texture bands
    for (let y = handleBot + 0.02; y <= handleTop - 0.02; y += 0.035) {
      const ring: Vec3[] = []
      const gr = handleR * 1.15
      for (let i = 0; i <= 16; i++) {
        const a = (i / 16) * Math.PI * 2
        ring.push([gr * Math.cos(a), y, gr * Math.sin(a)])
      }
      rings.push(ring)
    }

    // Handle end cap
    for (let r = 0; r <= handleR; r += 0.01) {
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
